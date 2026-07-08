import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { AiUsageController } from './ai-usage.controller';
import { AiUsageService } from './ai-usage.service';
import { CreativeBriefsController } from './creative-briefs.controller';
import { CreativeBriefsService } from './creative-briefs.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [CreativeBriefsController, AiUsageController],
  providers: [CreativeBriefsService, AiUsageService],
})
export class CreativeBriefsModule {}
