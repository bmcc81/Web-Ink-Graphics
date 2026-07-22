var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ProjectStatus } from '../../generated/prisma/client.js';
import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsOptional, IsString, IsUrl, Matches, MaxLength, Min, ValidateNested, } from 'class-validator';
import { PortfolioImageDto } from './portfolio-image.dto.js';
import { ProjectTranslationDto } from './project-translation.dto.js';
export class CreatePortfolioProjectDto {
    slug;
    clientName;
    projectUrl;
    status;
    featured;
    displayOrder;
    completedAt;
    translations;
    images;
    categoryIds;
}
__decorate([
    IsString(),
    Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    MaxLength(120),
    __metadata("design:type", String)
], CreatePortfolioProjectDto.prototype, "slug", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreatePortfolioProjectDto.prototype, "clientName", void 0);
__decorate([
    IsOptional(),
    IsUrl(),
    __metadata("design:type", String)
], CreatePortfolioProjectDto.prototype, "projectUrl", void 0);
__decorate([
    IsOptional(),
    IsEnum(ProjectStatus),
    __metadata("design:type", String)
], CreatePortfolioProjectDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreatePortfolioProjectDto.prototype, "featured", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreatePortfolioProjectDto.prototype, "displayOrder", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreatePortfolioProjectDto.prototype, "completedAt", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ArrayMaxSize(2),
    ValidateNested({ each: true }),
    Type(() => ProjectTranslationDto),
    __metadata("design:type", Array)
], CreatePortfolioProjectDto.prototype, "translations", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => PortfolioImageDto),
    __metadata("design:type", Array)
], CreatePortfolioProjectDto.prototype, "images", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreatePortfolioProjectDto.prototype, "categoryIds", void 0);
//# sourceMappingURL=create-portfolio-project.dto.js.map