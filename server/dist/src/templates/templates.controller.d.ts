import type { AuthUser } from '../auth/auth-user';
import { CreateDesignTemplateDto } from './dto/create-design-template.dto';
import { UpdateDesignTemplateDto } from './dto/update-design-template.dto';
import { TemplatesService } from './templates.service';
export declare class TemplatesController {
    private readonly templates;
    constructor(templates: TemplatesService);
    list(user: AuthUser): import("@prisma/client").Prisma.PrismaPromise<({
        fields: {
            id: string;
            sortOrder: number;
            key: string;
            label: string;
            fieldType: import("@prisma/client").$Enums.TemplateFieldType;
            required: boolean;
            maxLength: number | null;
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
        isPublished: boolean;
    })[]>;
    findOne(user: AuthUser, id: string): Promise<{
        fields: {
            id: string;
            sortOrder: number;
            key: string;
            label: string;
            fieldType: import("@prisma/client").$Enums.TemplateFieldType;
            required: boolean;
            maxLength: number | null;
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
        isPublished: boolean;
    }>;
    create(dto: CreateDesignTemplateDto): import("@prisma/client").Prisma.Prisma__DesignTemplateClient<{
        fields: {
            id: string;
            sortOrder: number;
            key: string;
            label: string;
            fieldType: import("@prisma/client").$Enums.TemplateFieldType;
            required: boolean;
            maxLength: number | null;
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
        isPublished: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateDesignTemplateDto): Promise<{
        fields: {
            id: string;
            sortOrder: number;
            key: string;
            label: string;
            fieldType: import("@prisma/client").$Enums.TemplateFieldType;
            required: boolean;
            maxLength: number | null;
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
        isPublished: boolean;
    }>;
}
