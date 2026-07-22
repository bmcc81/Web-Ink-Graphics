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
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { CreateDiscoveryBriefDto } from './dto/create-discovery-brief.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { UpdateDiscoveryBriefDto } from './dto/update-discovery-brief.dto.js';
import { GeneratePromptDto } from './dto/generate-prompt.dto.js';
import { CreateBriefAttachmentDto } from './dto/create-brief-attachment.dto.js';

@Controller('clients')
@UseGuards(JwtAuthGuard)
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Get()
  findAll(@CurrentUser() user: AuthUser) {
    return this.clients.findAll(user);
  }

  @Post()
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateClientDto) {
    return this.clients.create(user, dto);
  }

  @Get('briefs/:briefId')
  findBrief(@CurrentUser() user: AuthUser, @Param('briefId') briefId: string) {
    return this.clients.findBrief(user, briefId);
  }

  @Patch('briefs/:briefId')
  updateBrief(
    @CurrentUser() user: AuthUser,
    @Param('briefId') briefId: string,
    @Body() dto: UpdateDiscoveryBriefDto,
  ) {
    return this.clients.updateBrief(user, briefId, dto);
  }

  @Post('briefs/:briefId/generate-prompt')
  generatePrompt(
    @CurrentUser() user: AuthUser,
    @Param('briefId') briefId: string,
    @Body() dto: GeneratePromptDto,
  ) {
    return this.clients.generatePrompt(user, briefId, dto.outputType);
  }

  @Post('briefs/:briefId/attachments')
  addAttachment(
    @CurrentUser() user: AuthUser,
    @Param('briefId') briefId: string,
    @Body() dto: CreateBriefAttachmentDto,
  ) {
    return this.clients.addAttachment(user, briefId, dto);
  }

  @Get('attachments/:attachmentId/download')
  attachmentDownload(
    @CurrentUser() user: AuthUser,
    @Param('attachmentId') attachmentId: string,
  ) {
    return this.clients.attachmentDownload(user, attachmentId);
  }

  @Delete('attachments/:attachmentId')
  deleteAttachment(
    @CurrentUser() user: AuthUser,
    @Param('attachmentId') attachmentId: string,
  ) {
    return this.clients.deleteAttachment(user, attachmentId);
  }

  @Get(':id')
  findOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.clients.findOne(user, id);
  }

  @Patch(':id')
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateClientDto,
  ) {
    return this.clients.update(user, id, dto);
  }

  @Post(':id/briefs')
  createBrief(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: CreateDiscoveryBriefDto,
  ) {
    return this.clients.createBrief(user, id, dto);
  }
}
