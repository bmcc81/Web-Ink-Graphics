import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDesignCommentDto } from './dto/create-design-comment.dto';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto';
import { CreateDesignReviewDto } from './dto/create-design-review.dto';
import { DecideDesignReviewDto } from './dto/decide-design-review.dto';
import { FigmaService } from './figma.service';
export declare class DesignsService {
    private readonly prisma;
    private readonly activityLog;
    private readonly figma;
    constructor(prisma: PrismaService, activityLog: ActivityLogService, figma: FigmaService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        linkedBy: {
            id: string;
            name: string;
        };
        versions: {
            id: string;
            thumbnailUrl: string | null;
            figmaLastModified: Date | null;
            syncedAt: Date;
            designDocumentId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        figmaUrl: string;
        figmaFileKey: string;
        figmaNodeId: string | null;
        linkedById: string;
        unlinkedAt: Date | null;
    })[]>;
    attach(user: AuthUser, organizationId: string, projectId: string, dto: CreateDesignDocumentDto): Promise<{
        linkedBy: {
            id: string;
            name: string;
        };
        versions: {
            id: string;
            thumbnailUrl: string | null;
            figmaLastModified: Date | null;
            syncedAt: Date;
            designDocumentId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        figmaUrl: string;
        figmaFileKey: string;
        figmaNodeId: string | null;
        linkedById: string;
        unlinkedAt: Date | null;
    }>;
    sync(user: AuthUser, organizationId: string, projectId: string, designId: string): Promise<{
        synced: boolean;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        figmaUrl: string;
        figmaFileKey: string;
        figmaNodeId: string | null;
        linkedById: string;
        unlinkedAt: Date | null;
    } | {
        synced: boolean;
        linkedBy: {
            id: string;
            name: string;
        };
        versions: {
            id: string;
            thumbnailUrl: string | null;
            figmaLastModified: Date | null;
            syncedAt: Date;
            designDocumentId: string;
        }[];
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        figmaUrl: string;
        figmaFileKey: string;
        figmaNodeId: string | null;
        linkedById: string;
        unlinkedAt: Date | null;
    }>;
    unlink(user: AuthUser, organizationId: string, projectId: string, designId: string): Promise<{
        removed: boolean;
    }>;
    listReviews(user: AuthUser, organizationId: string, projectId: string, designId: string): Promise<({
        reviewer: {
            id: string;
            name: string;
        };
        assignedBy: {
            id: string;
            name: string;
        };
        decidedVersion: {
            id: string;
            syncedAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.DesignReviewStatus;
        dueDate: Date | null;
        reviewerId: string;
        designDocumentId: string;
        assignedById: string;
        decidedVersionId: string | null;
        decisionNote: string | null;
        decidedAt: Date | null;
    })[]>;
    createReview(user: AuthUser, organizationId: string, projectId: string, designId: string, dto: CreateDesignReviewDto): Promise<{
        reviewer: {
            id: string;
            name: string;
        };
        assignedBy: {
            id: string;
            name: string;
        };
        decidedVersion: {
            id: string;
            syncedAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.DesignReviewStatus;
        dueDate: Date | null;
        reviewerId: string;
        designDocumentId: string;
        assignedById: string;
        decidedVersionId: string | null;
        decisionNote: string | null;
        decidedAt: Date | null;
    }>;
    decideReview(user: AuthUser, organizationId: string, projectId: string, designId: string, reviewId: string, dto: DecideDesignReviewDto): Promise<{
        reviewer: {
            id: string;
            name: string;
        };
        assignedBy: {
            id: string;
            name: string;
        };
        decidedVersion: {
            id: string;
            syncedAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.DesignReviewStatus;
        dueDate: Date | null;
        reviewerId: string;
        designDocumentId: string;
        assignedById: string;
        decidedVersionId: string | null;
        decisionNote: string | null;
        decidedAt: Date | null;
    }>;
    listComments(user: AuthUser, organizationId: string, projectId: string, designId: string): Promise<({
        author: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        authorId: string;
        designDocumentId: string;
    })[]>;
    createComment(user: AuthUser, organizationId: string, projectId: string, designId: string, dto: CreateDesignCommentDto): Promise<{
        author: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        authorId: string;
        designDocumentId: string;
    }>;
    removeComment(user: AuthUser, organizationId: string, projectId: string, designId: string, commentId: string): Promise<{
        removed: boolean;
    }>;
    private assertCanView;
    private assertCanContribute;
    private findProjectOrThrow;
    private findDesignOrThrow;
}
