var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FollowUpPriority, QuestionStatus, } from '../../generated/prisma/client.js';
import { IsDateString, IsEnum, IsInt, IsOptional, IsString, MaxLength, Min, } from 'class-validator';
export class BriefQuestionDto {
    id;
    question;
    answer;
    status;
    owner;
    dueDate;
    priority;
    sortOrder;
}
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "id", void 0);
__decorate([
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "question", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "answer", void 0);
__decorate([
    IsEnum(QuestionStatus),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "status", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "owner", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "dueDate", void 0);
__decorate([
    IsEnum(FollowUpPriority),
    __metadata("design:type", String)
], BriefQuestionDto.prototype, "priority", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], BriefQuestionDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=brief-question.dto.js.map