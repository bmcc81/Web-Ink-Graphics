import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { AiUsageModule } from '../ai-usage/ai-usage.module';
import { CampaignMetricsModule } from '../campaign-metrics/campaign-metrics.module';
import { PerformanceRecommendationsController } from './performance-recommendations.controller';
import { PerformanceRecommendationsService } from './performance-recommendations.service';

@Module({
  imports: [ActivityLogModule, AiUsageModule, CampaignMetricsModule],
  controllers: [PerformanceRecommendationsController],
  providers: [PerformanceRecommendationsService],
})
export class PerformanceRecommendationsModule {}
