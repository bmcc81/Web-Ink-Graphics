var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RecurrenceRule, TaskStatus } from '../../generated/prisma/client.js';
import { IsDateString, IsEnum, IsOptional, IsString, Length, MaxLength, } from 'class-validator';
export class CreateTaskDto {
    title;
    description;
    status;
    milestoneId;
    assigneeId;
    dueDate;
    recurrenceRule;
}
__decorate([
    IsString(),
    Length(2, 200),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    IsOptional(),
    IsEnum(TaskStatus),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", Object)
], CreateTaskDto.prototype, "milestoneId", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", Object)
], CreateTaskDto.prototype, "assigneeId", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "dueDate", void 0);
__decorate([
    IsOptional(),
    IsEnum(RecurrenceRule),
    __metadata("design:type", Object)
], CreateTaskDto.prototype, "recurrenceRule", void 0);
//# sourceMappingURL=create-task.dto.js.map