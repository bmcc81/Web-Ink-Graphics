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
exports.CreateBriefAttachmentDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateBriefAttachmentDto {
    fileName;
    objectKey;
    contentType;
    fileSize;
    category;
}
exports.CreateBriefAttachmentDto = CreateBriefAttachmentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(180),
    __metadata("design:type", String)
], CreateBriefAttachmentDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^discovery\//),
    __metadata("design:type", String)
], CreateBriefAttachmentDto.prototype, "objectKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(120),
    __metadata("design:type", String)
], CreateBriefAttachmentDto.prototype, "contentType", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(20 * 1024 * 1024),
    __metadata("design:type", Number)
], CreateBriefAttachmentDto.prototype, "fileSize", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.AttachmentCategory),
    __metadata("design:type", String)
], CreateBriefAttachmentDto.prototype, "category", void 0);
//# sourceMappingURL=create-brief-attachment.dto.js.map