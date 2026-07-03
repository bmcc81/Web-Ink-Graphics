import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { AcceptInvitationDto } from './dto/accept-invitation.dto';
import { OrganizationsService } from './organizations.service';

@Controller('invitations')
@UseGuards(ThrottlerGuard)
@Throttle({ default: { limit: 10, ttl: 60_000 } })
export class InvitationsController {
  constructor(private readonly organizations: OrganizationsService) {}

  @Get(':token')
  inspect(@Param('token') token: string) {
    return this.organizations.inspectInvitation(token);
  }

  @Post(':token/accept')
  accept(@Param('token') token: string, @Body() dto: AcceptInvitationDto) {
    return this.organizations.acceptInvitation(token, dto);
  }
}
