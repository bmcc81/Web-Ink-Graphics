import { ActivityLogService } from '../activity/activity-log.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProjectAssetDto } from './dto/create-project-asset.dto.js';
import { UpdateAssetValuesDto } from './dto/update-asset-values.dto.js';
export declare class ProjectAssetsService {
    private readonly prisma;
    private readonly activityLog;
    constructor(prisma: PrismaService, activityLog: ActivityLogService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        template: {
            fields: {
                id: string;
                sortOrder: number;
                width: number;
                height: number;
                templateId: string;
                key: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                y: number;
                fontSize: number;
                color: string | null;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            category: import("../generated/prisma/enums.js").TemplateCategory;
            description: string | null;
            previewImageUrl: string | null;
            isPublished: boolean;
            canvasWidth: number;
            canvasHeight: number;
        };
        createdBy: {
            id: string;
            name: string;
        };
        revisions: ({
            approvedBy: {
                id: string;
                name: string;
            } | null;
            values: ({
                templateField: {
                    id: string;
                    sortOrder: number;
                    width: number;
                    height: number;
                    templateId: string;
                    key: string;
                    label: string;
                    fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                    required: boolean;
                    maxLength: number | null;
                    x: number;
                    y: number;
                    fontSize: number;
                    color: string | null;
                };
            } & {
                id: string;
                revisionId: string;
                templateFieldId: string;
                value: string;
            })[];
            createdBy: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            status: import("../generated/prisma/enums.js").AssetRevisionStatus;
            approvedAt: Date | null;
            createdById: string;
            projectAssetId: string;
            approvedById: string | null;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        unlinkedAt: Date | null;
        templateId: string;
        createdById: string;
    })[]>;
    attach(user: AuthUser, organizationId: string, projectId: string, dto: CreateProjectAssetDto): Promise<{
        template: {
            fields: {
                id: string;
                sortOrder: number;
                width: number;
                height: number;
                templateId: string;
                key: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                y: number;
                fontSize: number;
                color: string | null;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            category: import("../generated/prisma/enums.js").TemplateCategory;
            description: string | null;
            previewImageUrl: string | null;
            isPublished: boolean;
            canvasWidth: number;
            canvasHeight: number;
        };
        createdBy: {
            id: string;
            name: string;
        };
        revisions: ({
            approvedBy: {
                id: string;
                name: string;
            } | null;
            values: ({
                templateField: {
                    id: string;
                    sortOrder: number;
                    width: number;
                    height: number;
                    templateId: string;
                    key: string;
                    label: string;
                    fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                    required: boolean;
                    maxLength: number | null;
                    x: number;
                    y: number;
                    fontSize: number;
                    color: string | null;
                };
            } & {
                id: string;
                revisionId: string;
                templateFieldId: string;
                value: string;
            })[];
            createdBy: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            status: import("../generated/prisma/enums.js").AssetRevisionStatus;
            approvedAt: Date | null;
            createdById: string;
            projectAssetId: string;
            approvedById: string | null;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        unlinkedAt: Date | null;
        templateId: string;
        createdById: string;
    }>;
    listRevisions(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<({
        approvedBy: {
            id: string;
            name: string;
        } | null;
        values: ({
            templateField: {
                id: string;
                sortOrder: number;
                width: number;
                height: number;
                templateId: string;
                key: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                y: number;
                fontSize: number;
                color: string | null;
            };
        } & {
            id: string;
            revisionId: string;
            templateFieldId: string;
            value: string;
        })[];
        createdBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        status: import("../generated/prisma/enums.js").AssetRevisionStatus;
        approvedAt: Date | null;
        createdById: string;
        projectAssetId: string;
        approvedById: string | null;
    })[]>;
    updateValues(user: AuthUser, organizationId: string, projectId: string, assetId: string, dto: UpdateAssetValuesDto): Promise<{
        approvedBy: {
            id: string;
            name: string;
        } | null;
        values: ({
            templateField: {
                id: string;
                sortOrder: number;
                width: number;
                height: number;
                templateId: string;
                key: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                y: number;
                fontSize: number;
                color: string | null;
            };
        } & {
            id: string;
            revisionId: string;
            templateFieldId: string;
            value: string;
        })[];
        createdBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        status: import("../generated/prisma/enums.js").AssetRevisionStatus;
        approvedAt: Date | null;
        createdById: string;
        projectAssetId: string;
        approvedById: string | null;
    }>;
    approve(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<{
        approvedBy: {
            id: string;
            name: string;
        } | null;
        values: ({
            templateField: {
                id: string;
                sortOrder: number;
                width: number;
                height: number;
                templateId: string;
                key: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                y: number;
                fontSize: number;
                color: string | null;
            };
        } & {
            id: string;
            revisionId: string;
            templateFieldId: string;
            value: string;
        })[];
        createdBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        status: import("../generated/prisma/enums.js").AssetRevisionStatus;
        approvedAt: Date | null;
        createdById: string;
        projectAssetId: string;
        approvedById: string | null;
    }>;
    unlink(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<{
        removed: boolean;
    }>;
    private buildFieldValues;
    private assertCanView;
    private assertCanContribute;
    private assertCanManage;
    private findProjectOrThrow;
    private findAssetOrThrow;
}
