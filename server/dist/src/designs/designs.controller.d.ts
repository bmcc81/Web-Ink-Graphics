import type { AuthUser } from '../auth/auth-user';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto';
import { DesignsService } from './designs.service';
export declare class DesignsController {
    private readonly designs;
    constructor(designs: DesignsService);
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
}
