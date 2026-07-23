var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNumber, IsOptional, IsString, Length, Min, MaxLength, } from 'class-validator';
export class UpsertBudgetDto {
    currency;
    plannedAmount;
    approvedAmount;
    committedAmount;
    actualAmount;
    notes;
}
__decorate([
    IsOptional(),
    IsString(),
    Length(3, 3),
    __metadata("design:type", String)
], UpsertBudgetDto.prototype, "currency", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0),
    __metadata("design:type", Number)
], UpsertBudgetDto.prototype, "plannedAmount", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0),
    __metadata("design:type", Number)
], UpsertBudgetDto.prototype, "approvedAmount", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0),
    __metadata("design:type", Number)
], UpsertBudgetDto.prototype, "committedAmount", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0),
    __metadata("design:type", Number)
], UpsertBudgetDto.prototype, "actualAmount", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], UpsertBudgetDto.prototype, "notes", void 0);
//# sourceMappingURL=upsert-budget.dto.js.map