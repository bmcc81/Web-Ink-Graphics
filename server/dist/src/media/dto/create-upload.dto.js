var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsIn, IsInt, IsOptional, IsString, Max, MaxLength, Min, } from 'class-validator';
const contentTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain',
];
export class CreateUploadDto {
    fileName;
    contentType;
    fileSize;
    purpose;
    briefId;
    organizationId;
}
__decorate([
    IsString(),
    MaxLength(180),
    __metadata("design:type", String)
], CreateUploadDto.prototype, "fileName", void 0);
__decorate([
    IsIn(contentTypes),
    __metadata("design:type", Object)
], CreateUploadDto.prototype, "contentType", void 0);
__decorate([
    IsInt(),
    Min(1),
    Max(20 * 1024 * 1024),
    __metadata("design:type", Number)
], CreateUploadDto.prototype, "fileSize", void 0);
__decorate([
    IsOptional(),
    IsIn(['PORTFOLIO', 'DISCOVERY', 'ASSET']),
    __metadata("design:type", String)
], CreateUploadDto.prototype, "purpose", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(64),
    __metadata("design:type", String)
], CreateUploadDto.prototype, "briefId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(64),
    __metadata("design:type", String)
], CreateUploadDto.prototype, "organizationId", void 0);
//# sourceMappingURL=create-upload.dto.js.map