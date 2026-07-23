import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { ProjectAssetsController } from './project-assets.controller.js';
import { ProjectAssetsService } from './project-assets.service.js';

@Module({
  imports: [ActivityLogModule],
  controllers: [ProjectAssetsController],
  providers: [ProjectAssetsService],
})
export class ProjectAssetsModule {}
