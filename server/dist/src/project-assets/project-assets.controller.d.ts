import type { AuthUser } from '../auth/auth-user';
import { CreateProjectAssetDto } from './dto/create-project-asset.dto';
import { UpdateAssetValuesDto } from './dto/update-asset-values.dto';
import { ProjectAssetsService } from './project-assets.service';
export declare class ProjectAssetsController {
    private readonly assets;
    constructor(assets: ProjectAssetsService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        template: {
            fields: {
                id: string;
                y: number;
                sortOrder: number;
                key: string;
                width: number;
                height: number;
                label: string;
                fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
                templateId: string;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            category: import("@prisma/client").$Enums.TemplateCategory;
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
                    label: string;
                    fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                    required: boolean;
                    maxLength: number | null;
                    x: number;
                    fontSize: number;
                    color: string | null;
                    templateId: string;
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
            status: import("@prisma/client").$Enums.AssetRevisionStatus;
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
        unlinkedAt: Date | null;
        templateId: string;
        createdById: string;
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
                label: string;
                fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
                templateId: string;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            category: import("@prisma/client").$Enums.TemplateCategory;
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
                    label: string;
                    fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                    required: boolean;
                    maxLength: number | null;
                    x: number;
                    fontSize: number;
                    color: string | null;
                    templateId: string;
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
            status: import("@prisma/client").$Enums.AssetRevisionStatus;
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
        unlinkedAt: Date | null;
        templateId: string;
        createdById: string;
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
                label: string;
                fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
                templateId: string;
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
        status: import("@prisma/client").$Enums.AssetRevisionStatus;
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
                label: string;
                fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
                templateId: string;
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
        status: import("@prisma/client").$Enums.AssetRevisionStatus;
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
                label: string;
                fieldType: import("@prisma/client").$Enums.TemplateFieldType;
                required: boolean;
                maxLength: number | null;
                x: number;
                fontSize: number;
                color: string | null;
                templateId: string;
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
        status: import("@prisma/client").$Enums.AssetRevisionStatus;
        approvedAt: Date | null;
        createdById: string;
        approvedById: string | null;
        projectAssetId: string;
    }>;
    unlink(user: AuthUser, organizationId: string, projectId: string, assetId: string): Promise<{
        removed: boolean;
    }>;
}
