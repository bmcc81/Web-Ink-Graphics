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
import { ArrayMaxSize, IsArray, IsOptional, IsString, MaxLength, ValidateNested, } from 'class-validator';
export class AssetFieldValueInputDto {
    key;
    value;
}
__decorate([
    IsString(),
    MaxLength(60),
    __metadata("design:type", String)
], AssetFieldValueInputDto.prototype, "key", void 0);
__decorate([
    IsString(),
    MaxLength(4000),
    __metadata("design:type", String)
], AssetFieldValueInputDto.prototype, "value", void 0);
export class CreateProjectAssetDto {
    templateId;
    name;
    values;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateProjectAssetDto.prototype, "templateId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], CreateProjectAssetDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ArrayMaxSize(50),
    ValidateNested({ each: true }),
    Type(() => AssetFieldValueInputDto),
    __metadata("design:type", Array)
], CreateProjectAssetDto.prototype, "values", void 0);
//# sourceMappingURL=create-project-asset.dto.js.map