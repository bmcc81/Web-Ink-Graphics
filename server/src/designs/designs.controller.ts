import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto';
import { DesignsService } from './designs.service';

@Controller('organizations/:organizationId/projects/:projectId/designs')
@UseGuards(JwtAuthGuard)
export class DesignsController {
  constructor(private readonly designs: DesignsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.designs.list(user, organizationId, projectId);
  }

  @Post()
  attach(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: CreateDesignDocumentDto,
  ) {
    return this.designs.attach(user, organizationId, projectId, dto);
  }

  @Post(':designId/sync')
  sync(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
  ) {
    return this.designs.sync(user, organizationId, projectId, designId);
  }

  @Delete(':designId')
  unlink(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
  ) {
    return this.designs.unlink(user, organizationId, projectId, designId);
  }
}
