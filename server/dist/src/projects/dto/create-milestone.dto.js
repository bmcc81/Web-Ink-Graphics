var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MilestoneStatus } from '../../generated/prisma/client.js';
import { IsDateString, IsEnum, IsOptional, IsString, Length, MaxLength, } from 'class-validator';
export class CreateMilestoneDto {
    name;
    description;
    status;
    dueDate;
}
__decorate([
    IsString(),
    Length(2, 160),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "description", void 0);
__decorate([
    IsOptional(),
    IsEnum(MilestoneStatus),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreateMilestoneDto.prototype, "dueDate", void 0);
//# sourceMappingURL=create-milestone.dto.js.map