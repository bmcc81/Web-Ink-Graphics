import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { AiUsageModule } from '../ai-usage/ai-usage.module';
import { GoalsModule } from '../goals/goals.module';
import { ProjectsModule } from '../projects/projects.module';
import { PlanDraftsController } from './plan-drafts.controller';
import { PlanDraftsService } from './plan-drafts.service';

@Module({
  imports: [ActivityLogModule, AiUsageModule, GoalsModule, ProjectsModule],
  controllers: [PlanDraftsController],
  providers: [PlanDraftsService],
})
export class PlanDraftsModule {}
