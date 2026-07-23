import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { ExportsController } from './exports.controller.js';
import { ExportsService } from './exports.service.js';

@Module({
  imports: [ActivityLogModule],
  controllers: [ExportsController],
  providers: [ExportsService],
})
export class ExportsModule {}
