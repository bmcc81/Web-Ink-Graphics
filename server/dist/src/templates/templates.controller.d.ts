import type { AuthUser } from '../auth/auth-user.js';
import { CreateDesignTemplateDto } from './dto/create-design-template.dto.js';
import { UpdateDesignTemplateDto } from './dto/update-design-template.dto.js';
import { TemplatesService } from './templates.service.js';
export declare class TemplatesController {
    private readonly templates;
    constructor(templates: TemplatesService);
    list(user: AuthUser): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
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
    })[]>;
    findOne(user: AuthUser, id: string): Promise<{
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
    }>;
    create(dto: CreateDesignTemplateDto): import("../generated/prisma/models.js").Prisma__DesignTemplateClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateDesignTemplateDto): Promise<{
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
    }>;
}
