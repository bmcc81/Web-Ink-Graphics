var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString, Matches, MaxLength } from 'class-validator';
const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
export class UpsertBrandKitDto {
    logoUrl;
    primaryColor;
    secondaryColor;
    accentColor;
    fontFamily;
}
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1024),
    __metadata("design:type", String)
], UpsertBrandKitDto.prototype, "logoUrl", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Matches(HEX_COLOR, { message: 'primaryColor must be a hex color' }),
    __metadata("design:type", String)
], UpsertBrandKitDto.prototype, "primaryColor", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Matches(HEX_COLOR, { message: 'secondaryColor must be a hex color' }),
    __metadata("design:type", String)
], UpsertBrandKitDto.prototype, "secondaryColor", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Matches(HEX_COLOR, { message: 'accentColor must be a hex color' }),
    __metadata("design:type", String)
], UpsertBrandKitDto.prototype, "accentColor", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], UpsertBrandKitDto.prototype, "fontFamily", void 0);
//# sourceMappingURL=upsert-brand-kit.dto.js.map