import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateExportDto } from './dto/create-export.dto.js';
import { ExportsService } from './exports.service.js';

@Controller(
  'organizations/:organizationId/projects/:projectId/assets/:assetId/exports',
)
@UseGuards(JwtAuthGuard)
export class ExportsController {
  constructor(private readonly exports: ExportsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
  ) {
    return this.exports.list(user, organizationId, projectId, assetId);
  }

  @Post()
  requestExport(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
    @Body() dto: CreateExportDto,
  ) {
    return this.exports.requestExport(
      user,
      organizationId,
      projectId,
      assetId,
      dto,
    );
  }

  @Get(':exportId/download')
  downloadUrl(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
    @Param('exportId') exportId: string,
  ) {
    return this.exports.downloadUrl(
      user,
      organizationId,
      projectId,
      assetId,
      exportId,
    );
  }
}
