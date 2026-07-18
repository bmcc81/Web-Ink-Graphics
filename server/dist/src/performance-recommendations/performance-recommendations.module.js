"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceRecommendationsModule = void 0;
const common_1 = require("@nestjs/common");
const activity_log_module_1 = require("../activity/activity-log.module");
const ai_usage_module_1 = require("../ai-usage/ai-usage.module");
const campaign_metrics_module_1 = require("../campaign-metrics/campaign-metrics.module");
const performance_recommendations_controller_1 = require("./performance-recommendations.controller");
const performance_recommendations_service_1 = require("./performance-recommendations.service");
let PerformanceRecommendationsModule = class PerformanceRecommendationsModule {
};
exports.PerformanceRecommendationsModule = PerformanceRecommendationsModule;
exports.PerformanceRecommendationsModule = PerformanceRecommendationsModule = __decorate([
    (0, common_1.Module)({
        imports: [activity_log_module_1.ActivityLogModule, ai_usage_module_1.AiUsageModule, campaign_metrics_module_1.CampaignMetricsModule],
        controllers: [performance_recommendations_controller_1.PerformanceRecommendationsController],
        providers: [performance_recommendations_service_1.PerformanceRecommendationsService],
    })
], PerformanceRecommendationsModule);
//# sourceMappingURL=performance-recommendations.module.js.map