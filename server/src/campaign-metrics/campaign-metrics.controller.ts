import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CampaignMetricsService } from './campaign-metrics.service.js';
import { CreateCampaignMetricDto } from './dto/create-campaign-metric.dto.js';

@Controller('organizations/:organizationId/projects/:projectId/metrics')
@UseGuards(JwtAuthGuard)
export class CampaignMetricsController {
  constructor(private readonly metrics: CampaignMetricsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.metrics.list(user, organizationId, projectId);
  }

  @Get('summary')
  summary(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.metrics.summary(user, organizationId, projectId);
  }

  @Post()
  create(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: CreateCampaignMetricDto,
  ) {
    return this.metrics.create(user, organizationId, projectId, dto);
  }

  @Delete(':metricId')
  remove(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('metricId') metricId: string,
  ) {
    return this.metrics.remove(user, organizationId, projectId, metricId);
  }
}
