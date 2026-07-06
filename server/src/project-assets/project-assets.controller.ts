import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateProjectAssetDto } from './dto/create-project-asset.dto';
import { UpdateAssetValuesDto } from './dto/update-asset-values.dto';
import { ProjectAssetsService } from './project-assets.service';

@Controller('organizations/:organizationId/projects/:projectId/assets')
@UseGuards(JwtAuthGuard)
export class ProjectAssetsController {
  constructor(private readonly assets: ProjectAssetsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.assets.list(user, organizationId, projectId);
  }

  @Post()
  attach(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: CreateProjectAssetDto,
  ) {
    return this.assets.attach(user, organizationId, projectId, dto);
  }

  @Get(':assetId/revisions')
  listRevisions(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
  ) {
    return this.assets.listRevisions(user, organizationId, projectId, assetId);
  }

  @Patch(':assetId')
  updateValues(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
    @Body() dto: UpdateAssetValuesDto,
  ) {
    return this.assets.updateValues(
      user,
      organizationId,
      projectId,
      assetId,
      dto,
    );
  }

  @Post(':assetId/approve')
  approve(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
  ) {
    return this.assets.approve(user, organizationId, projectId, assetId);
  }

  @Delete(':assetId')
  unlink(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('assetId') assetId: string,
  ) {
    return this.assets.unlink(user, organizationId, projectId, assetId);
  }
}
