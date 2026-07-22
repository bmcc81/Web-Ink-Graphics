var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, Matches, Max, MaxLength, Min, ValidateNested, } from 'class-validator';
import { TemplateCategory, TemplateFieldType, } from '../../generated/prisma/client.js';
export class TemplateFieldInputDto {
    key;
    label;
    fieldType;
    required;
    maxLength;
    x;
    y;
    width;
    height;
    fontSize;
    color;
}
__decorate([
    IsString(),
    MaxLength(60),
    Matches(/^[a-z][a-z0-9_]*$/, {
        message: 'key must be lowercase letters, numbers, and underscores',
    }),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "key", void 0);
__decorate([
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "label", void 0);
__decorate([
    IsEnum(TemplateFieldType),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "fieldType", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], TemplateFieldInputDto.prototype, "required", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    Max(4000),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "maxLength", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(0),
    Max(10000),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "x", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(0),
    Max(10000),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "y", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    Max(10000),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "width", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    Max(10000),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "height", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    Max(500),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "fontSize", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/, {
        message: 'color must be a hex color',
    }),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "color", void 0);
export class CreateDesignTemplateDto {
    name;
    description;
    category;
    previewImageUrl;
    canvasWidth;
    canvasHeight;
    fields;
}
__decorate([
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "description", void 0);
__decorate([
    IsEnum(TemplateCategory),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "category", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1024),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "previewImageUrl", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(100),
    Max(6000),
    __metadata("design:type", Number)
], CreateDesignTemplateDto.prototype, "canvasWidth", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(100),
    Max(6000),
    __metadata("design:type", Number)
], CreateDesignTemplateDto.prototype, "canvasHeight", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => TemplateFieldInputDto),
    __metadata("design:type", Array)
], CreateDesignTemplateDto.prototype, "fields", void 0);
//# sourceMappingURL=create-design-template.dto.js.map