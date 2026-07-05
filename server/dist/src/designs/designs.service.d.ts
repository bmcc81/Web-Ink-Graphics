import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto';
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
    private assertCanView;
    private assertCanContribute;
    private findProjectOrThrow;
    private findDesignOrThrow;
}
