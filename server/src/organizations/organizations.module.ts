import { Module } from '@nestjs/common';
import { InvitationsController } from './invitations.controller';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

@Module({
  controllers: [OrganizationsController, InvitationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
