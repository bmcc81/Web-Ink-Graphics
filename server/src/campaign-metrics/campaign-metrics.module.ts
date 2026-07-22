import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { CampaignMetricsController } from './campaign-metrics.controller.js';
import { CampaignMetricsService } from './campaign-metrics.service.js';

@Module({
  imports: [ActivityLogModule],
  controllers: [CampaignMetricsController],
  providers: [CampaignMetricsService],
  exports: [CampaignMetricsService],
})
export class CampaignMetricsModule {}
