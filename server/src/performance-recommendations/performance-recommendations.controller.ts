import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PerformanceRecommendationsService } from './performance-recommendations.service';

@Controller(
  'organizations/:organizationId/projects/:projectId/performance-recommendations',
)
@UseGuards(JwtAuthGuard)
export class PerformanceRecommendationsController {
  constructor(
    private readonly recommendations: PerformanceRecommendationsService,
  ) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.recommendations.list(user, organizationId, projectId);
  }

  @Post()
  generate(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.recommendations.generate(user, organizationId, projectId);
  }
}
