import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module.js';
import { InvitationsController } from './invitations.controller.js';
import { OrganizationsController } from './organizations.controller.js';
import { OrganizationsService } from './organizations.service.js';

@Module({
  imports: [ActivityLogModule],
  controllers: [OrganizationsController, InvitationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
