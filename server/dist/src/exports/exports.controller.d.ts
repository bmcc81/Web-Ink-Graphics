import type { AuthUser } from '../auth/auth-user.js';
import { CreateExportDto } from './dto/create-export.dto.js';
import { ExportsService } from './exports.service.js';
export declare class ExportsController {
    private readonly exports;
    constructor(exports: ExportsService);
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
        format: import("../generated/prisma/enums.js").ExportFormat;
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
        format: import("../generated/prisma/enums.js").ExportFormat;
        errorMessage: string | null;
        requestedById: string;
    }>;
    downloadUrl(user: AuthUser, organizationId: string, projectId: string, assetId: string, exportId: string): Promise<{
        downloadUrl: string;
    }>;
}
