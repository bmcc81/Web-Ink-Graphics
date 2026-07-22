import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { CreateUploadDto } from './dto/create-upload.dto.js';
import { MediaService } from './media.service.js';

@Controller('media')
@UseGuards(JwtAuthGuard)
export class MediaController {
  constructor(private readonly media: MediaService) {}

  @Post('upload-url')
  createUpload(@CurrentUser() user: AuthUser, @Body() dto: CreateUploadDto) {
    return this.media.createUpload(user, dto);
  }
}
