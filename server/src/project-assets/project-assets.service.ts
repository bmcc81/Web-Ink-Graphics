import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { BrandKit, TemplateField } from '../generated/prisma/client.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import {
  CONTRIBUTE_ROLES,
  MANAGE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  AssetFieldValueInputDto,
  CreateProjectAssetDto,
} from './dto/create-project-asset.dto.js';
import { UpdateAssetValuesDto } from './dto/update-asset-values.dto.js';

const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

const revisionInclude = {
  values: { include: { templateField: true } },
  createdBy: { select: { id: true, name: true } },
  approvedBy: { select: { id: true, name: true } },
};

const assetInclude = {
  template: { include: { fields: { orderBy: { sortOrder: 'asc' as const } } } },
  createdBy: { select: { id: true, name: true } },
  revisions: {
    orderBy: { createdAt: 'desc' as const },
    take: 1,
    include: revisionInclude,
  },
};

@Injectable()
export class ProjectAssetsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activityLog: ActivityLogService,
  ) {}

  async list(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    return this.prisma.projectAsset.findMany({
      where: { projectId, unlinkedAt: null },
      include: assetInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async attach(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    dto: CreateProjectAssetDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const template = await this.prisma.designTemplate.findFirst({
      where: { id: dto.templateId, isPublished: true },
      include: { fields: true },
    });
    if (!template) throw new NotFoundException('Template not found');
    const brandKit = await this.prisma.brandKit.findUnique({
      where: { organizationId },
    });
    const values = this.buildFieldValues(
      template.fields,
      dto.values ?? [],
      brandKit,
    );

    const asset = await this.prisma.projectAsset.create({
      data: {
        projectId,
        templateId: template.id,
        name: dto.name ?? template.name,
        createdById: user.id,
        revisions: {
          create: {
            createdById: user.id,
            values: { create: values },
          },
        },
      },
      include: assetInclude,
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'PROJECT_ASSET',
      entityId: asset.id,
      action: 'CREATED',
      summary: `Asset "${asset.name}" created from template "${template.name}"`,
      actorId: user.id,
    });
    return asset;
  }

  async listRevisions(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
  ) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.findAssetOrThrow(projectId, assetId);
    return this.prisma.assetRevision.findMany({
      where: { projectAssetId: assetId },
      include: revisionInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateValues(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
    dto: UpdateAssetValuesDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const asset = await this.findAssetOrThrow(projectId, assetId);
    const template = await this.prisma.designTemplate.findUniqueOrThrow({
      where: { id: asset.templateId },
      include: { fields: true },
    });
    const brandKit = await this.prisma.brandKit.findUnique({
      where: { organizationId },
    });
    const latest = await this.prisma.assetRevision.findFirst({
      where: { projectAssetId: assetId },
      orderBy: { createdAt: 'desc' },
      include: { values: true },
    });

    const merged = new Map<string, string>();
    if (latest) {
      for (const value of latest.values) {
        merged.set(value.templateFieldId, value.value);
      }
    }
    for (const update of this.buildFieldValues(
      template.fields,
      dto.values,
      brandKit,
    )) {
      merged.set(update.templateFieldId, update.value);
    }
    const finalValues = Array.from(merged.entries()).map(
      ([templateFieldId, value]) => ({ templateFieldId, value }),
    );

    if (!latest || latest.status === 'APPROVED') {
      const revision = await this.prisma.assetRevision.create({
        data: {
          projectAssetId: assetId,
          createdById: user.id,
          values: { create: finalValues },
        },
        include: revisionInclude,
      });
      await this.activityLog.record({
        organizationId,
        entityType: 'PROJECT_ASSET',
        entityId: assetId,
        action: 'UPDATED',
        summary: `New draft revision created for "${asset.name}"`,
        actorId: user.id,
      });
      return revision;
    }

    await this.prisma.$transaction([
      this.prisma.assetFieldValue.deleteMany({
        where: { revisionId: latest.id },
      }),
      this.prisma.assetFieldValue.createMany({
        data: finalValues.map((value) => ({
          revisionId: latest.id,
          ...value,
        })),
      }),
    ]);
    const revision = await this.prisma.assetRevision.findUniqueOrThrow({
      where: { id: latest.id },
      include: revisionInclude,
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'PROJECT_ASSET',
      entityId: assetId,
      action: 'UPDATED',
      summary: `Draft revision updated for "${asset.name}"`,
      actorId: user.id,
    });
    return revision;
  }

  async approve(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
  ) {
    await this.assertCanManage(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const asset = await this.findAssetOrThrow(projectId, assetId);
    const latest = await this.prisma.assetRevision.findFirst({
      where: { projectAssetId: assetId },
      orderBy: { createdAt: 'desc' },
      include: { values: true },
    });
    if (!latest) throw new NotFoundException('No revision to approve');
    if (latest.status === 'APPROVED') {
      throw new BadRequestException('This revision has already been approved');
    }

    const template = await this.prisma.designTemplate.findUniqueOrThrow({
      where: { id: asset.templateId },
      include: { fields: true },
    });
    const valueByFieldId = new Map(
      latest.values.map((value) => [value.templateFieldId, value.value]),
    );
    const missingRequired = template.fields.filter(
      (field) => field.required && !valueByFieldId.get(field.id)?.trim(),
    );
    if (missingRequired.length) {
      throw new BadRequestException(
        `Missing required fields: ${missingRequired.map((field) => field.label).join(', ')}`,
      );
    }

    const revision = await this.prisma.assetRevision.update({
      where: { id: latest.id },
      data: {
        status: 'APPROVED',
        approvedById: user.id,
        approvedAt: new Date(),
      },
      include: revisionInclude,
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'PROJECT_ASSET',
      entityId: assetId,
      action: 'STATUS_CHANGED',
      summary: `"${asset.name}" approved`,
      actorId: user.id,
    });
    return revision;
  }

  async unlink(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const asset = await this.findAssetOrThrow(projectId, assetId);
    await this.prisma.projectAsset.update({
      where: { id: assetId },
      data: { unlinkedAt: new Date() },
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'PROJECT_ASSET',
      entityId: assetId,
      action: 'DELETED',
      summary: `Asset "${asset.name}" unlinked`,
      actorId: user.id,
    });
    return { removed: true };
  }

  private buildFieldValues(
    fields: TemplateField[],
    inputs: AssetFieldValueInputDto[],
    brandKit: BrandKit | null,
  ) {
    const fieldByKey = new Map(fields.map((field) => [field.key, field]));
    const seen = new Set<string>();
    return inputs.map((input) => {
      const field = fieldByKey.get(input.key);
      if (!field) {
        throw new BadRequestException(
          `Unknown field "${input.key}" for this template`,
        );
      }
      if (seen.has(field.id)) {
        throw new BadRequestException(
          `Duplicate value for field "${input.key}"`,
        );
      }
      seen.add(field.id);
      const value = input.value.trim();
      if (field.maxLength && value.length > field.maxLength) {
        throw new BadRequestException(
          `"${field.label}" must be at most ${field.maxLength} characters`,
        );
      }
      if (field.fieldType === 'COLOR' && value) {
        if (!HEX_COLOR.test(value)) {
          throw new BadRequestException(`"${field.label}" must be a hex color`);
        }
        const brandColors = brandKit
          ? [
              brandKit.primaryColor,
              brandKit.secondaryColor,
              brandKit.accentColor,
            ].filter((color): color is string => Boolean(color))
          : [];
        if (
          brandColors.length &&
          !brandColors.some(
            (color) => color.toLowerCase() === value.toLowerCase(),
          )
        ) {
          throw new BadRequestException(
            `"${field.label}" must match one of the organization's brand kit colors`,
          );
        }
      }
      if (field.fieldType === 'CTA_URL' && value) {
        try {
          new URL(value);
        } catch {
          throw new BadRequestException(`"${field.label}" must be a valid URL`);
        }
      }
      return { templateFieldId: field.id, value };
    });
  }

  private async assertCanView(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
  }

  private async assertCanContribute(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only contributors, managers, and owners can manage project assets',
      );
    }
    return role;
  }

  private async assertCanManage(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !MANAGE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only organization owners and managers can approve assets',
      );
    }
    return role;
  }

  private async findProjectOrThrow(organizationId: string, projectId: string) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: { id: true },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  private async findAssetOrThrow(projectId: string, assetId: string) {
    const asset = await this.prisma.projectAsset.findFirst({
      where: { id: assetId, projectId, unlinkedAt: null },
    });
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }
}
