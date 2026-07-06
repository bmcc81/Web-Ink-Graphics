import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { ProjectAssetsController } from './project-assets.controller';
import { ProjectAssetsService } from './project-assets.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [ProjectAssetsController],
  providers: [ProjectAssetsService],
})
export class ProjectAssetsModule {}
