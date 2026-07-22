import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { GoalsController } from './goals.controller.js';
import { GoalsService } from './goals.service.js';

@Module({
  imports: [ActivityLogModule],
  controllers: [GoalsController],
  providers: [GoalsService],
  exports: [GoalsService],
})
export class GoalsModule {}
