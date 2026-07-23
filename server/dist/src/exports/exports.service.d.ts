import { ConfigService } from '@nestjs/config';
import { ExportFormat } from '../generated/prisma/client.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateExportDto } from './dto/create-export.dto.js';
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
        status: import("../generated/prisma/enums.js").ExportStatus;
        objectKey: string | null;
        completedAt: Date | null;
        assetRevisionId: string;
        format: ExportFormat;
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
        status: import("../generated/prisma/enums.js").ExportStatus;
        objectKey: string | null;
        completedAt: Date | null;
        assetRevisionId: string;
        format: ExportFormat;
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
