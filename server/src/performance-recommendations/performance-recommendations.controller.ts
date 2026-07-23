import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { PerformanceRecommendationsService } from './performance-recommendations.service.js';

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
