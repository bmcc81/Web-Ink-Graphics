import { ConfigService } from '@nestjs/config';
import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExportDto } from './dto/create-export.dto';
export declare class ExportsService {
    private readonly prisma;
    private readonly config;
    private readonly activityLog;
    private readonly logger;
    constructor(prisma: PrismaService, config: ConfigService, activityLog: ActivityLogService);
    list(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<({
        requestedBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        status: import("@prisma/client").$Enums.ExportStatus;
        objectKey: string | null;
        completedAt: Date | null;
        format: import("@prisma/client").$Enums.ExportFormat;
        assetRevisionId: string;
        errorMessage: string | null;
        requestedById: string;
    })[]>;
    requestExport(user: AuthUser, organizationId: string, projectId: string, assetId: string, dto: CreateExportDto): Promise<{
        requestedBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        status: import("@prisma/client").$Enums.ExportStatus;
        objectKey: string | null;
        completedAt: Date | null;
        format: import("@prisma/client").$Enums.ExportFormat;
        assetRevisionId: string;
        errorMessage: string | null;
        requestedById: string;
    }>;
    downloadUrl(user: AuthUser, organizationId: string, projectId: string, assetId: string, exportId: string): Promise<{
        downloadUrl: string;
    }>;
    private render;
    private buildHtml;
    private escapeHtml;
    private escapeAttr;
    private uploadToS3;
    private client;
    private assertCanView;
    private assertCanContribute;
    private findAssetOrThrow;
}
