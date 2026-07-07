import { TemplateCategory, TemplateFieldType } from '@prisma/client';
export declare class TemplateFieldInputDto {
    key: string;
    label: string;
    fieldType: TemplateFieldType;
    required?: boolean;
    maxLength?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string;
}
export declare class CreateDesignTemplateDto {
    name: string;
    description?: string;
    category: TemplateCategory;
    previewImageUrl?: string;
    canvasWidth?: number;
    canvasHeight?: number;
    fields: TemplateFieldInputDto[];
}
