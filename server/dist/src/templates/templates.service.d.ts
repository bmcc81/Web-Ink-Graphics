import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDesignTemplateDto } from './dto/create-design-template.dto';
import { UpdateDesignTemplateDto } from './dto/update-design-template.dto';
export declare class TemplatesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: AuthUser): import("@prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    findOne(user: AuthUser, id: string): Promise<{
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
    }>;
    create(dto: CreateDesignTemplateDto): import("@prisma/client").Prisma.Prisma__DesignTemplateClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateDesignTemplateDto): Promise<{
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
    }>;
    private findTemplateOrThrow;
}
