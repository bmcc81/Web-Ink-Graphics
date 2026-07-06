import { TemplateCategory, TemplateFieldType } from '@prisma/client';
export declare class TemplateFieldInputDto {
    key: string;
    label: string;
    fieldType: TemplateFieldType;
    required?: boolean;
    maxLength?: number;
}
export declare class CreateDesignTemplateDto {
    name: string;
    description?: string;
    category: TemplateCategory;
    previewImageUrl?: string;
    fields: TemplateFieldInputDto[];
}
