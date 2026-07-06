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
const decide_design_review_dto_1 = require("./dto/decide-design-review.dto");
const figma_service_1 = require("./figma.service");
const designInclude = {
    linkedBy: { select: { id: true, name: true } },
    versions: { orderBy: { syncedAt: 'desc' }, take: 1 },
};
const reviewInclude = {
    reviewer: { select: { id: true, name: true } },
    assignedBy: { select: { id: true, name: true } },
    decidedVersion: { select: { id: true, syncedAt: true } },
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
    async listReviews(user, organizationId, projectId, designId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.findDesignOrThrow(projectId, designId);
        return this.prisma.designReview.findMany({
            where: { designDocumentId: designId },
            include: reviewInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async createReview(user, organizationId, projectId, designId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const design = await this.findDesignOrThrow(projectId, designId);
        const reviewer = await this.prisma.organizationMembership.findFirst({
            where: { organizationId, userId: dto.reviewerId },
            select: { id: true },
        });
        if (!reviewer) {
            throw new common_1.BadRequestException('The reviewer must be a member of this organization');
        }
        const review = await this.prisma.designReview.create({
            data: {
                designDocumentId: designId,
                reviewerId: dto.reviewerId,
                assignedById: user.id,
                dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
            },
            include: reviewInclude,
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'DESIGN_DOCUMENT',
            entityId: designId,
            action: 'CREATED',
            summary: `Review of "${design.name}" assigned to ${review.reviewer.name}`,
            actorId: user.id,
        });
        return review;
    }
    async decideReview(user, organizationId, projectId, designId, reviewId, dto) {
        const role = await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const design = await this.findDesignOrThrow(projectId, designId);
        const review = await this.prisma.designReview.findFirst({
            where: { id: reviewId, designDocumentId: designId },
        });
        if (!review)
            throw new common_1.NotFoundException('Review not found');
        const isAssignedReviewer = review.reviewerId === user.id;
        const canOverride = role === 'STAFF' || organization_access_1.MANAGE_ROLES.includes(role);
        if (!isAssignedReviewer && !canOverride) {
            throw new common_1.ForbiddenException('Only the assigned reviewer or an organization owner/manager can decide this review');
        }
        if (review.status === 'APPROVED') {
            throw new common_1.BadRequestException('This review has already been approved and cannot be changed');
        }
        const latestVersion = await this.prisma.designVersion.findFirst({
            where: { designDocumentId: designId },
            orderBy: { syncedAt: 'desc' },
            select: { id: true },
        });
        const updated = await this.prisma.designReview.update({
            where: { id: reviewId },
            data: {
                status: dto.decision,
                decisionNote: dto.note,
                decidedAt: new Date(),
                decidedVersionId: latestVersion?.id,
            },
            include: reviewInclude,
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'DESIGN_DOCUMENT',
            entityId: designId,
            action: 'STATUS_CHANGED',
            summary: dto.decision === decide_design_review_dto_1.DesignReviewDecision.APPROVED
                ? `${updated.reviewer.name} approved "${design.name}"`
                : `${updated.reviewer.name} requested changes on "${design.name}"`,
            actorId: user.id,
        });
        return updated;
    }
    async listComments(user, organizationId, projectId, designId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.findDesignOrThrow(projectId, designId);
        return this.prisma.designComment.findMany({
            where: { designDocumentId: designId },
            include: { author: { select: { id: true, name: true } } },
            orderBy: { createdAt: 'asc' },
        });
    }
    async createComment(user, organizationId, projectId, designId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.findDesignOrThrow(projectId, designId);
        return this.prisma.designComment.create({
            data: { designDocumentId: designId, authorId: user.id, body: dto.body },
            include: { author: { select: { id: true, name: true } } },
        });
    }
    async removeComment(user, organizationId, projectId, designId, commentId) {
        const role = await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.findDesignOrThrow(projectId, designId);
        const comment = await this.prisma.designComment.findFirst({
            where: { id: commentId, designDocumentId: designId },
            select: { authorId: true },
        });
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        const isAuthor = comment.authorId === user.id;
        const canModerate = role === 'STAFF' || organization_access_1.MANAGE_ROLES.includes(role);
        if (!isAuthor && !canModerate) {
            throw new common_1.ForbiddenException('Only the author or an organization owner/manager can delete this comment');
        }
        await this.prisma.designComment.delete({ where: { id: commentId } });
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