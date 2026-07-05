import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
