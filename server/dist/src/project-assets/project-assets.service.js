"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAssetsService = void 0;
const common_1 = require("@nestjs/common");
const activity_log_service_1 = require("../activity/activity-log.service");
const organization_access_1 = require("../organizations/organization-access");
const prisma_service_1 = require("../prisma/prisma.service");
const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const revisionInclude = {
    values: { include: { templateField: true } },
    createdBy: { select: { id: true, name: true } },
    approvedBy: { select: { id: true, name: true } },
};
const assetInclude = {
    template: { include: { fields: { orderBy: { sortOrder: 'asc' } } } },
    createdBy: { select: { id: true, name: true } },
    revisions: {
        orderBy: { createdAt: 'desc' },
        take: 1,
        include: revisionInclude,
    },
};
let ProjectAssetsService = class ProjectAssetsService {
    prisma;
    activityLog;
    constructor(prisma, activityLog) {
        this.prisma = prisma;
        this.activityLog = activityLog;
    }
    async list(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        return this.prisma.projectAsset.findMany({
            where: { projectId, unlinkedAt: null },
            include: assetInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async attach(user, organizationId, projectId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const template = await this.prisma.designTemplate.findFirst({
            where: { id: dto.templateId, isPublished: true },
            include: { fields: true },
        });
        if (!template)
            throw new common_1.NotFoundException('Template not found');
        const brandKit = await this.prisma.brandKit.findUnique({
            where: { organizationId },
        });
        const values = this.buildFieldValues(template.fields, dto.values ?? [], brandKit);
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
    async listRevisions(user, organizationId, projectId, assetId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.findAssetOrThrow(projectId, assetId);
        return this.prisma.assetRevision.findMany({
            where: { projectAssetId: assetId },
            include: revisionInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateValues(user, organizationId, projectId, assetId, dto) {
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
        const merged = new Map();
        if (latest) {
            for (const value of latest.values) {
                merged.set(value.templateFieldId, value.value);
            }
        }
        for (const update of this.buildFieldValues(template.fields, dto.values, brandKit)) {
            merged.set(update.templateFieldId, update.value);
        }
        const finalValues = Array.from(merged.entries()).map(([templateFieldId, value]) => ({ templateFieldId, value }));
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
    async approve(user, organizationId, projectId, assetId) {
        await this.assertCanManage(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const asset = await this.findAssetOrThrow(projectId, assetId);
        const latest = await this.prisma.assetRevision.findFirst({
            where: { projectAssetId: assetId },
            orderBy: { createdAt: 'desc' },
            include: { values: true },
        });
        if (!latest)
            throw new common_1.NotFoundException('No revision to approve');
        if (latest.status === 'APPROVED') {
            throw new common_1.BadRequestException('This revision has already been approved');
        }
        const template = await this.prisma.designTemplate.findUniqueOrThrow({
            where: { id: asset.templateId },
            include: { fields: true },
        });
        const valueByFieldId = new Map(latest.values.map((value) => [value.templateFieldId, value.value]));
        const missingRequired = template.fields.filter((field) => field.required && !valueByFieldId.get(field.id)?.trim());
        if (missingRequired.length) {
            throw new common_1.BadRequestException(`Missing required fields: ${missingRequired.map((field) => field.label).join(', ')}`);
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
    async unlink(user, organizationId, projectId, assetId) {
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
    buildFieldValues(fields, inputs, brandKit) {
        const fieldByKey = new Map(fields.map((field) => [field.key, field]));
        const seen = new Set();
        return inputs.map((input) => {
            const field = fieldByKey.get(input.key);
            if (!field) {
                throw new common_1.BadRequestException(`Unknown field "${input.key}" for this template`);
            }
            if (seen.has(field.id)) {
                throw new common_1.BadRequestException(`Duplicate value for field "${input.key}"`);
            }
            seen.add(field.id);
            const value = input.value.trim();
            if (field.maxLength && value.length > field.maxLength) {
                throw new common_1.BadRequestException(`"${field.label}" must be at most ${field.maxLength} characters`);
            }
            if (field.fieldType === 'COLOR' && value) {
                if (!HEX_COLOR.test(value)) {
                    throw new common_1.BadRequestException(`"${field.label}" must be a hex color`);
                }
                const brandColors = brandKit
                    ? [
                        brandKit.primaryColor,
                        brandKit.secondaryColor,
                        brandKit.accentColor,
                    ].filter((color) => Boolean(color))
                    : [];
                if (brandColors.length &&
                    !brandColors.some((color) => color.toLowerCase() === value.toLowerCase())) {
                    throw new common_1.BadRequestException(`"${field.label}" must match one of the organization's brand kit colors`);
                }
            }
            if (field.fieldType === 'CTA_URL' && value) {
                try {
                    new URL(value);
                }
                catch {
                    throw new common_1.BadRequestException(`"${field.label}" must be a valid URL`);
                }
            }
            return { templateFieldId: field.id, value };
        });
    }
    async assertCanView(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
    }
    async assertCanContribute(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.CONTRIBUTE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only contributors, managers, and owners can manage project assets');
        }
        return role;
    }
    async assertCanManage(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.MANAGE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only organization owners and managers can approve assets');
        }
        return role;
    }
    async findProjectOrThrow(organizationId, projectId) {
        const project = await this.prisma.project.findFirst({
            where: { id: projectId, organizationId },
            select: { id: true },
        });
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
    async findAssetOrThrow(projectId, assetId) {
        const asset = await this.prisma.projectAsset.findFirst({
            where: { id: assetId, projectId, unlinkedAt: null },
        });
        if (!asset)
            throw new common_1.NotFoundException('Asset not found');
        return asset;
    }
};
exports.ProjectAssetsService = ProjectAssetsService;
exports.ProjectAssetsService = ProjectAssetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_log_service_1.ActivityLogService])
], ProjectAssetsService);
//# sourceMappingURL=project-assets.service.js.map