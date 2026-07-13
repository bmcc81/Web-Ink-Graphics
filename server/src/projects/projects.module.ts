import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [ActivityLogModule, NotificationsModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
