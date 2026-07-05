import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ActivityLogService } from './activity-log.service';

@Controller('organizations/:organizationId/activity')
@UseGuards(JwtAuthGuard)
export class ActivityLogController {
  constructor(private readonly activityLog: ActivityLogService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    return this.activityLog.list(user, organizationId);
  }
}
