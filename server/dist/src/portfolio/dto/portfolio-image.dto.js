var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsBoolean, IsInt, IsOptional, IsString, IsUrl, Min, } from 'class-validator';
export class PortfolioImageDto {
    url;
    altTextEn;
    altTextFr;
    width;
    height;
    sortOrder;
    isCover;
}
__decorate([
    IsUrl({ require_tld: false }),
    __metadata("design:type", String)
], PortfolioImageDto.prototype, "url", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], PortfolioImageDto.prototype, "altTextEn", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], PortfolioImageDto.prototype, "altTextFr", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], PortfolioImageDto.prototype, "width", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], PortfolioImageDto.prototype, "height", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], PortfolioImageDto.prototype, "sortOrder", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], PortfolioImageDto.prototype, "isCover", void 0);
//# sourceMappingURL=portfolio-image.dto.js.map