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
                y: number;
                sortOrder: number;
                key: string;
                width: number;
                height: number;
                templateId: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
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
            canvasWidth: number;
            canvasHeight: number;
            isPublished: boolean;
        };
        createdBy: {
            id: string;
            name: string;
        };
        revisions: ({
            values: ({
                templateField: {
                    id: string;
                    y: number;
                    sortOrder: number;
                    key: string;
                    width: number;
                    height: number;
                    templateId: string;
                    label: string;
                    fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                    required: boolean;
                    maxLength: number | null;
                    x: number;
                    fontSize: number;
                    color: string | null;
                };
            } & {
                id: string;
                value: string;
                revisionId: string;
                templateFieldId: string;
            })[];
            approvedBy: {
                id: string;
                name: string;
            } | null;
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
            approvedById: string | null;
            projectAssetId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        templateId: string;
        createdById: string;
        unlinkedAt: Date | null;
    })[]>;
    attach(user: AuthUser, organizationId: string, projectId: string, dto: CreateProjectAssetDto): Promise<{
        template: {
            fields: {
                id: string;
                y: number;
                sortOrder: number;
                key: string;
                width: number;
                height: number;
                templateId: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
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
            canvasWidth: number;
            canvasHeight: number;
            isPublished: boolean;
        };
        createdBy: {
            id: string;
            name: string;
        };
        revisions: ({
            values: ({
                templateField: {
                    id: string;
                    y: number;
                    sortOrder: number;
                    key: string;
                    width: number;
                    height: number;
                    templateId: string;
                    label: string;
                    fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                    required: boolean;
                    maxLength: number | null;
                    x: number;
                    fontSize: number;
                    color: string | null;
                };
            } & {
                id: string;
                value: string;
                revisionId: string;
                templateFieldId: string;
            })[];
            approvedBy: {
                id: string;
                name: string;
            } | null;
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
            approvedById: string | null;
            projectAssetId: string;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        templateId: string;
        createdById: string;
        unlinkedAt: Date | null;
    }>;
    listRevisions(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<({
        values: ({
            templateField: {
                id: string;
                y: number;
                sortOrder: number;
                key: string;
                width: number;
                height: number;
                templateId: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
            };
        } & {
            id: string;
            value: string;
            revisionId: string;
            templateFieldId: string;
        })[];
        approvedBy: {
            id: string;
            name: string;
        } | null;
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
        approvedById: string | null;
        projectAssetId: string;
    })[]>;
    updateValues(user: AuthUser, organizationId: string, projectId: string, assetId: string, dto: UpdateAssetValuesDto): Promise<{
        values: ({
            templateField: {
                id: string;
                y: number;
                sortOrder: number;
                key: string;
                width: number;
                height: number;
                templateId: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
            };
        } & {
            id: string;
            value: string;
            revisionId: string;
            templateFieldId: string;
        })[];
        approvedBy: {
            id: string;
            name: string;
        } | null;
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
        approvedById: string | null;
        projectAssetId: string;
    }>;
    approve(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<{
        values: ({
            templateField: {
                id: string;
                y: number;
                sortOrder: number;
                key: string;
                width: number;
                height: number;
                templateId: string;
                label: string;
                fieldType: import("../generated/prisma/enums.js").TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
            };
        } & {
            id: string;
            value: string;
            revisionId: string;
            templateFieldId: string;
        })[];
        approvedBy: {
            id: string;
            name: string;
        } | null;
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
        approvedById: string | null;
        projectAssetId: string;
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
