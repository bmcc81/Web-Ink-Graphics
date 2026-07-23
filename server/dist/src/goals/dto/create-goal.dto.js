var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GoalPeriod, GoalStatus } from '../../generated/prisma/client.js';
import { IsEnum, IsInt, IsOptional, IsString, Length, Max, MaxLength, Min, } from 'class-validator';
export class CreateGoalDto {
    title;
    description;
    period;
    year;
    status;
}
__decorate([
    IsString(),
    Length(2, 160),
    __metadata("design:type", String)
], CreateGoalDto.prototype, "title", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(4000),
    __metadata("design:type", String)
], CreateGoalDto.prototype, "description", void 0);
__decorate([
    IsEnum(GoalPeriod),
    __metadata("design:type", String)
], CreateGoalDto.prototype, "period", void 0);
__decorate([
    IsInt(),
    Min(2000),
    Max(2100),
    __metadata("design:type", Number)
], CreateGoalDto.prototype, "year", void 0);
__decorate([
    IsOptional(),
    IsEnum(GoalStatus),
    __metadata("design:type", String)
], CreateGoalDto.prototype, "status", void 0);
//# sourceMappingURL=create-goal.dto.js.map