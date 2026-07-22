var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { AiUsageModule } from '../ai-usage/ai-usage.module.js';
import { CampaignMetricsModule } from '../campaign-metrics/campaign-metrics.module.js';
import { PerformanceRecommendationsController } from './performance-recommendations.controller.js';
import { PerformanceRecommendationsService } from './performance-recommendations.service.js';
let PerformanceRecommendationsModule = class PerformanceRecommendationsModule {
};
PerformanceRecommendationsModule = __decorate([
    Module({
        imports: [ActivityLogModule, AiUsageModule, CampaignMetricsModule],
        controllers: [PerformanceRecommendationsController],
        providers: [PerformanceRecommendationsService],
    })
], PerformanceRecommendationsModule);
export { PerformanceRecommendationsModule };
//# sourceMappingURL=performance-recommendations.module.js.map