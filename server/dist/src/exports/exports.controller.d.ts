import type { AuthUser } from '../auth/auth-user';
import { CreateExportDto } from './dto/create-export.dto';
import { ExportsService } from './exports.service';
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
}
