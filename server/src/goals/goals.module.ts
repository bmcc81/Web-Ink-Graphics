import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [GoalsController],
  providers: [GoalsService],
  exports: [GoalsService],
})
export class GoalsModule {}
