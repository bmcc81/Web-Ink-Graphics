import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { AiUsageModule } from '../ai-usage/ai-usage.module';
import { CreativeBriefsController } from './creative-briefs.controller';
import { CreativeBriefsService } from './creative-briefs.service';

@Module({
  imports: [ActivityLogModule, AiUsageModule],
  controllers: [CreativeBriefsController],
  providers: [CreativeBriefsService],
})
export class CreativeBriefsModule {}
