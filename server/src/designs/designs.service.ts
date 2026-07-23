import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ActivityLogService } from '../activity/activity-log.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import {
  CONTRIBUTE_ROLES,
  MANAGE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDesignCommentDto } from './dto/create-design-comment.dto.js';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto.js';
import { CreateDesignReviewDto } from './dto/create-design-review.dto.js';
import {
  DecideDesignReviewDto,
  DesignReviewDecision,
} from './dto/decide-design-review.dto.js';
import { FigmaService } from './figma.service.js';

const designInclude = {
  linkedBy: { select: { id: true, name: true } },
  versions: { orderBy: { syncedAt: 'desc' as const }, take: 1 },
};

const reviewInclude = {
  reviewer: { select: { id: true, name: true } },
  assignedBy: { select: { id: true, name: true } },
  decidedVersion: { select: { id: true, syncedAt: true } },
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

  async listReviews(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
  ) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.findDesignOrThrow(projectId, designId);
    return this.prisma.designReview.findMany({
      where: { designDocumentId: designId },
      include: reviewInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async createReview(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
    dto: CreateDesignReviewDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const design = await this.findDesignOrThrow(projectId, designId);
    const reviewer = await this.prisma.organizationMembership.findFirst({
      where: { organizationId, userId: dto.reviewerId },
      select: { id: true },
    });
    if (!reviewer) {
      throw new BadRequestException(
        'The reviewer must be a member of this organization',
      );
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

  async decideReview(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
    reviewId: string,
    dto: DecideDesignReviewDto,
  ) {
    const role = await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const design = await this.findDesignOrThrow(projectId, designId);
    const review = await this.prisma.designReview.findFirst({
      where: { id: reviewId, designDocumentId: designId },
    });
    if (!review) throw new NotFoundException('Review not found');
    const isAssignedReviewer = review.reviewerId === user.id;
    const canOverride = role === 'STAFF' || MANAGE_ROLES.includes(role);
    if (!isAssignedReviewer && !canOverride) {
      throw new ForbiddenException(
        'Only the assigned reviewer or an organization owner/manager can decide this review',
      );
    }
    if (review.status === 'APPROVED') {
      throw new BadRequestException(
        'This review has already been approved and cannot be changed',
      );
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
      summary:
        dto.decision === DesignReviewDecision.APPROVED
          ? `${updated.reviewer.name} approved "${design.name}"`
          : `${updated.reviewer.name} requested changes on "${design.name}"`,
      actorId: user.id,
    });
    return updated;
  }

  async listComments(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
  ) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.findDesignOrThrow(projectId, designId);
    return this.prisma.designComment.findMany({
      where: { designDocumentId: designId },
      include: { author: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'asc' },
    });
  }

  async createComment(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
    dto: CreateDesignCommentDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.findDesignOrThrow(projectId, designId);
    return this.prisma.designComment.create({
      data: { designDocumentId: designId, authorId: user.id, body: dto.body },
      include: { author: { select: { id: true, name: true } } },
    });
  }

  async removeComment(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    designId: string,
    commentId: string,
  ) {
    const role = await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.findDesignOrThrow(projectId, designId);
    const comment = await this.prisma.designComment.findFirst({
      where: { id: commentId, designDocumentId: designId },
      select: { authorId: true },
    });
    if (!comment) throw new NotFoundException('Comment not found');
    const isAuthor = comment.authorId === user.id;
    const canModerate = role === 'STAFF' || MANAGE_ROLES.includes(role);
    if (!isAuthor && !canModerate) {
      throw new ForbiddenException(
        'Only the author or an organization owner/manager can delete this comment',
      );
    }
    await this.prisma.designComment.delete({ where: { id: commentId } });
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

  private async findDesignOrThrow(projectId: string, designId: string) {
    const design = await this.prisma.designDocument.findFirst({
      where: { id: designId, projectId, unlinkedAt: null },
    });
    if (!design) throw new NotFoundException('Design not found');
    return design;
  }
}
