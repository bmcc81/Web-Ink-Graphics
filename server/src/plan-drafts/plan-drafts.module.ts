import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { AiUsageModule } from '../ai-usage/ai-usage.module.js';
import { GoalsModule } from '../goals/goals.module.js';
import { ProjectsModule } from '../projects/projects.module.js';
import { PlanDraftsController } from './plan-drafts.controller.js';
import { PlanDraftsService } from './plan-drafts.service.js';

@Module({
  imports: [ActivityLogModule, AiUsageModule, GoalsModule, ProjectsModule],
  controllers: [PlanDraftsController],
  providers: [PlanDraftsService],
})
export class PlanDraftsModule {}
