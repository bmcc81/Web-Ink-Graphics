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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateDiscoveryBriefDto } from './dto/create-discovery-brief.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdateDiscoveryBriefDto } from './dto/update-discovery-brief.dto';
import { GeneratePromptDto } from './dto/generate-prompt.dto';
import { CreateBriefAttachmentDto } from './dto/create-brief-attachment.dto';

@Controller('clients')
@UseGuards(JwtAuthGuard)
export class ClientsController {
  constructor(private readonly clients: ClientsService) {}

  @Get()
  findAll() {
    return this.clients.findAll();
  }

  @Post()
  create(@Body() dto: CreateClientDto) {
    return this.clients.create(dto);
  }

  @Get('briefs/:briefId')
  findBrief(@Param('briefId') briefId: string) {
    return this.clients.findBrief(briefId);
  }

  @Patch('briefs/:briefId')
  updateBrief(
    @Param('briefId') briefId: string,
    @Body() dto: UpdateDiscoveryBriefDto,
  ) {
    return this.clients.updateBrief(briefId, dto);
  }

  @Post('briefs/:briefId/generate-prompt')
  generatePrompt(
    @Param('briefId') briefId: string,
    @Body() dto: GeneratePromptDto,
  ) {
    return this.clients.generatePrompt(briefId, dto.outputType);
  }

  @Post('briefs/:briefId/attachments')
  addAttachment(
    @Param('briefId') briefId: string,
    @Body() dto: CreateBriefAttachmentDto,
  ) {
    return this.clients.addAttachment(briefId, dto);
  }

  @Get('attachments/:attachmentId/download')
  attachmentDownload(@Param('attachmentId') attachmentId: string) {
    return this.clients.attachmentDownload(attachmentId);
  }

  @Delete('attachments/:attachmentId')
  deleteAttachment(@Param('attachmentId') attachmentId: string) {
    return this.clients.deleteAttachment(attachmentId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clients.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClientDto) {
    return this.clients.update(id, dto);
  }

  @Post(':id/briefs')
  createBrief(@Param('id') id: string, @Body() dto: CreateDiscoveryBriefDto) {
    return this.clients.createBrief(id, dto);
  }
}
