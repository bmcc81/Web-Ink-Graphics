import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
  constructor(private readonly organizations: OrganizationsService) {}

  @Get(':organizationId/members')
  members(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    return this.organizations.members(user, organizationId);
  }

  @Get(':organizationId/invitations')
  invitations(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    return this.organizations.invitations(user, organizationId);
  }

  @Post(':organizationId/invitations')
  createInvitation(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Body() dto: CreateInvitationDto,
  ) {
    return this.organizations.createInvitation(user, organizationId, dto);
  }

  @Delete(':organizationId/invitations/:invitationId')
  revokeInvitation(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('invitationId') invitationId: string,
  ) {
    return this.organizations.revokeInvitation(
      user,
      organizationId,
      invitationId,
    );
  }
}
