import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateInvitationDto } from './dto/create-invitation.dto.js';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto.js';
import { UpsertBrandKitDto } from './dto/upsert-brand-kit.dto.js';
import { OrganizationsService } from './organizations.service.js';

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

  @Patch(':organizationId/members/:membershipId')
  updateMemberRole(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('membershipId') membershipId: string,
    @Body() dto: UpdateMemberRoleDto,
  ) {
    return this.organizations.updateMemberRole(
      user,
      organizationId,
      membershipId,
      dto,
    );
  }

  @Delete(':organizationId/members/:membershipId')
  removeMember(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('membershipId') membershipId: string,
  ) {
    return this.organizations.removeMember(user, organizationId, membershipId);
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

  @Get(':organizationId/brand-kit')
  getBrandKit(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    return this.organizations.getBrandKit(user, organizationId);
  }

  @Put(':organizationId/brand-kit')
  upsertBrandKit(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Body() dto: UpsertBrandKitDto,
  ) {
    return this.organizations.upsertBrandKit(user, organizationId, dto);
  }
}
