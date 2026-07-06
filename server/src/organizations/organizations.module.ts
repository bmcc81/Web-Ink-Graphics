import { Module } from '@nestjs/common';
import { ActivityLogModule } from '../activity/activity-log.module';
import { InvitationsController } from './invitations.controller';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

@Module({
  imports: [ActivityLogModule],
  controllers: [OrganizationsController, InvitationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
