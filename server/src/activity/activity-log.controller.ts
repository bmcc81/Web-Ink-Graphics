import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { ActivityLogService } from './activity-log.service.js';

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
