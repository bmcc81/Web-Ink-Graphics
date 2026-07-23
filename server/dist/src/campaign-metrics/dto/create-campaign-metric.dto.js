var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MetricType } from '../../generated/prisma/client.js';
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, Min, } from 'class-validator';
export class CreateCampaignMetricDto {
    metricType;
    periodStart;
    periodEnd;
    actualValue;
    plannedValue;
    notes;
}
__decorate([
    IsEnum(MetricType),
    __metadata("design:type", String)
], CreateCampaignMetricDto.prototype, "metricType", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateCampaignMetricDto.prototype, "periodStart", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateCampaignMetricDto.prototype, "periodEnd", void 0);
__decorate([
    IsNumber(),
    Min(0),
    __metadata("design:type", Number)
], CreateCampaignMetricDto.prototype, "actualValue", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(0),
    __metadata("design:type", Number)
], CreateCampaignMetricDto.prototype, "plannedValue", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], CreateCampaignMetricDto.prototype, "notes", void 0);
//# sourceMappingURL=create-campaign-metric.dto.js.map