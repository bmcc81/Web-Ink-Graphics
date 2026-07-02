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
exports.BriefRequirementDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class BriefRequirementDto {
    id;
    referenceCode;
    category;
    priority;
    status;
    title;
    details;
    rationale;
    acceptanceCriteria;
    sortOrder;
}
exports.BriefRequirementDto = BriefRequirementDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "referenceCode", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.RequirementCategory),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.RequirementPriority),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.RequirementStatus),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(180),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "rationale", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BriefRequirementDto.prototype, "acceptanceCriteria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], BriefRequirementDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=brief-requirement.dto.js.map