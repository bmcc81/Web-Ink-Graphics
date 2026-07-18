import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { CampaignMetricsController } from './campaign-metrics.controller';
import { CampaignMetricsService } from './campaign-metrics.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [CampaignMetricsController],
  providers: [CampaignMetricsService],
  exports: [CampaignMetricsService],
})
export class CampaignMetricsModule {}
