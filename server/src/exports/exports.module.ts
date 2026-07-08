import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { ExportsController } from './exports.controller';
import { ExportsService } from './exports.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [ExportsController],
  providers: [ExportsService],
})
export class ExportsModule {}
