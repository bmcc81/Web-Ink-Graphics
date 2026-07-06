import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreateDesignTemplateDto } from './dto/create-design-template.dto';
import { UpdateDesignTemplateDto } from './dto/update-design-template.dto';
import { TemplatesService } from './templates.service';

@Controller('templates')
@UseGuards(JwtAuthGuard)
export class TemplatesController {
  constructor(private readonly templates: TemplatesService) {}

  @Get()
  list(@CurrentUser() user: AuthUser) {
    return this.templates.list(user);
  }

  @Get(':id')
  findOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.templates.findOne(user, id);
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  create(@Body() dto: CreateDesignTemplateDto) {
    return this.templates.create(dto);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  update(@Param('id') id: string, @Body() dto: UpdateDesignTemplateDto) {
    return this.templates.update(id, dto);
  }
}
