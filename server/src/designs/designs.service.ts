import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import {
  CONTRIBUTE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto';
import { FigmaService } from './figma.service';

const designInclude = {
  linkedBy: { select: { id: true, name: true } },
  versions: { orderBy: { syncedAt: 'desc' as const }, take: 1 },
};

@Injectable()
export class DesignsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activityLog: ActivityLogService,
    private readonly figma: FigmaService,
  ) {}

  async list(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    return this.prisma.designDocument.findMany({
      where: { projectId, unlinkedAt: null },
      include: designInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async attach(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    dto: CreateDesignDocumentDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const { fileKey, nodeId } = this.figma.parseFigmaUrl(dto.figmaUrl);
    const metadata = await this.figma.fetchMetadata(fileKey, nodeId);

    const design = await this.prisma.designDocument.create({
      data: {
        projectId,
        name: dto.name ?? metadata?.name ?? 'Untitled design',
        figmaFileKey: fileKey,
        figmaNodeId: nodeId,
        figmaUrl: dto.figmaUrl,
        linkedById: user.id,
        versions: metadata
          ? {
              create: {
                thumbnailUrl: metadata.thumbnailUrl,
                figmaLastModified: metadata.lastModified,
              },
            }
          : undefined,
      },
      include: designInclude,
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'DESIGN_DOCUMENT',
      entityId: design.id,
      action: 'CREATED',
      summary: `Design "${design.name}" linked`,
      actorId: user.id,
    });
    return design;
  }

  async sync(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const design = await this.findDesignOrThrow(projectId, designId);
    const metadata = await this.figma.fetchMetadata(
      design.figmaFileKey,
      design.figmaNodeId,
    );
    if (!metadata) {
      return { ...design, synced: false };
    }
    await this.prisma.designVersion.create({
      data: {
        designDocumentId: designId,
        thumbnailUrl: metadata.thumbnailUrl,
        figmaLastModified: metadata.lastModified,
      },
    });
    await this.prisma.designDocument.update({
      where: { id: designId },
      data: { updatedAt: new Date() },
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'DESIGN_DOCUMENT',
      entityId: designId,
      action: 'UPDATED',
      summary: `Design "${design.name}" synced from Figma`,
      actorId: user.id,
    });
    const refreshed = await this.prisma.designDocument.findUniqueOrThrow({
      where: { id: designId },
      include: designInclude,
    });
    return { ...refreshed, synced: true };
  }

  async unlink(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const design = await this.findDesignOrThrow(projectId, designId);
    await this.prisma.designDocument.update({
      where: { id: designId },
      data: { unlinkedAt: new Date() },
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'DESIGN_DOCUMENT',
      entityId: designId,
      action: 'DELETED',
      summary: `Design "${design.name}" unlinked`,
      actorId: user.id,
    });
    return { removed: true };
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
        'Only contributors, managers, and owners can manage designs',
      );
    }
  }

  private async findProjectOrThrow(organizationId: string, projectId: string) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: { id: true },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  private async findDesignOrThrow(projectId: string, designId: string) {
    const design = await this.prisma.designDocument.findFirst({
      where: { id: designId, projectId, unlinkedAt: null },
    });
    if (!design) throw new NotFoundException('Design not found');
    return design;
  }
}
