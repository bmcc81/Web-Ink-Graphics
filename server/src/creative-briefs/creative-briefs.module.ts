import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { AiUsageModule } from '../ai-usage/ai-usage.module.js';
import { CreativeBriefsController } from './creative-briefs.controller.js';
import { CreativeBriefsService } from './creative-briefs.service.js';

@Module({
  imports: [ActivityLogModule, AiUsageModule],
  controllers: [CreativeBriefsController],
  providers: [CreativeBriefsService],
})
export class CreativeBriefsModule {}
