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
exports.ProjectTranslationDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class ProjectTranslationDto {
    locale;
    title;
    summary;
    challenge;
    solution;
    results;
    seoTitle;
    metaDescription;
}
exports.ProjectTranslationDto = ProjectTranslationDto;
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Locale),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "locale", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 320),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "summary", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "challenge", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "solution", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "results", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(70),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "seoTitle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(170),
    __metadata("design:type", String)
], ProjectTranslationDto.prototype, "metaDescription", void 0);
//# sourceMappingURL=project-translation.dto.js.map