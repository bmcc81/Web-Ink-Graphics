import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { Role } from '../generated/prisma/client.js';
import type { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { ContactService } from './contact.service.js';
import { ContactQueryDto } from './dto/contact-query.dto.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
import { UpdateContactStatusDto } from './dto/update-contact-status.dto.js';

@Controller('contact')
export class ContactController {
  constructor(private readonly contact: ContactService) {}

  @Post()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  create(@Body() dto: CreateContactDto) {
    return this.contact.create(dto);
  }

  @Get('admin/export')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  async export(@Query() query: ContactQueryDto, @Res() response: Response) {
    const date = new Date().toISOString().slice(0, 10);
    response
      .type('text/csv')
      .attachment(`webink-leads-${date}.csv`)
      .send(await this.contact.exportCsv(query));
  }

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  findAll(@Query() query: ContactQueryDto) {
    return this.contact.findAll(query);
  }

  @Patch('admin/:id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  updateStatus(
    @Param('id') id: string,
    @Body() status: UpdateContactStatusDto,
  ) {
    return this.contact.updateStatus(id, status.contacted);
  }
}
