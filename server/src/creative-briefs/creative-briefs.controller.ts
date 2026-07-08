import { Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreativeBriefsService } from './creative-briefs.service';

@Controller('organizations/:organizationId/projects/:projectId/creative-briefs')
@UseGuards(JwtAuthGuard)
export class CreativeBriefsController {
  constructor(private readonly creativeBriefs: CreativeBriefsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.creativeBriefs.list(user, organizationId, projectId);
  }

  @Post()
  generate(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.creativeBriefs.generate(user, organizationId, projectId);
  }

  @Patch(':briefId/approve')
  approve(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('briefId') briefId: string,
  ) {
    return this.creativeBriefs.approve(
      user,
      organizationId,
      projectId,
      briefId,
    );
  }
}
