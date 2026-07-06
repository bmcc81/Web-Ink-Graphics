"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDesignTemplateDto = exports.TemplateFieldInputDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class TemplateFieldInputDto {
    key;
    label;
    fieldType;
    required;
    maxLength;
}
exports.TemplateFieldInputDto = TemplateFieldInputDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.Matches)(/^[a-z][a-z0-9_]*$/, {
        message: 'key must be lowercase letters, numbers, and underscores',
    }),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.TemplateFieldType),
    __metadata("design:type", String)
], TemplateFieldInputDto.prototype, "fieldType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TemplateFieldInputDto.prototype, "required", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(4000),
    __metadata("design:type", Number)
], TemplateFieldInputDto.prototype, "maxLength", void 0);
class CreateDesignTemplateDto {
    name;
    description;
    category;
    previewImageUrl;
    fields;
}
exports.CreateDesignTemplateDto = CreateDesignTemplateDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.TemplateCategory),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1024),
    __metadata("design:type", String)
], CreateDesignTemplateDto.prototype, "previewImageUrl", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TemplateFieldInputDto),
    __metadata("design:type", Array)
], CreateDesignTemplateDto.prototype, "fields", void 0);
//# sourceMappingURL=create-design-template.dto.js.map