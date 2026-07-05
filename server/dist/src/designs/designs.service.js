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
exports.DesignsService = void 0;
const common_1 = require("@nestjs/common");
const activity_log_service_1 = require("../activity/activity-log.service");
const organization_access_1 = require("../organizations/organization-access");
const prisma_service_1 = require("../prisma/prisma.service");
const figma_service_1 = require("./figma.service");
const designInclude = {
    linkedBy: { select: { id: true, name: true } },
    versions: { orderBy: { syncedAt: 'desc' }, take: 1 },
};
let DesignsService = class DesignsService {
    prisma;
    activityLog;
    figma;
    constructor(prisma, activityLog, figma) {
        this.prisma = prisma;
        this.activityLog = activityLog;
        this.figma = figma;
    }
    async list(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        return this.prisma.designDocument.findMany({
            where: { projectId, unlinkedAt: null },
            include: designInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async attach(user, organizationId, projectId, dto) {
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
    async sync(user, organizationId, projectId, designId) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const design = await this.findDesignOrThrow(projectId, designId);
        const metadata = await this.figma.fetchMetadata(design.figmaFileKey, design.figmaNodeId);
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
    async unlink(user, organizationId, projectId, designId) {
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
            throw new common_1.ForbiddenException('Only contributors, managers, and owners can manage designs');
        }
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
    async findDesignOrThrow(projectId, designId) {
        const design = await this.prisma.designDocument.findFirst({
            where: { id: designId, projectId, unlinkedAt: null },
        });
        if (!design)
            throw new common_1.NotFoundException('Design not found');
        return design;
    }
};
exports.DesignsService = DesignsService;
exports.DesignsService = DesignsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_log_service_1.ActivityLogService,
        figma_service_1.FigmaService])
], DesignsService);
//# sourceMappingURL=designs.service.js.map