import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { AiUsageModule } from '../ai-usage/ai-usage.module.js';
import { CampaignMetricsModule } from '../campaign-metrics/campaign-metrics.module.js';
import { PerformanceRecommendationsController } from './performance-recommendations.controller.js';
import { PerformanceRecommendationsService } from './performance-recommendations.service.js';

@Module({
  imports: [ActivityLogModule, AiUsageModule, CampaignMetricsModule],
  controllers: [PerformanceRecommendationsController],
  providers: [PerformanceRecommendationsService],
})
export class PerformanceRecommendationsModule {}
