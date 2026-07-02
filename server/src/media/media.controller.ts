import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUploadDto } from './dto/create-upload.dto';
import { MediaService } from './media.service';

@Controller('media')
@UseGuards(JwtAuthGuard)
export class MediaController {
  constructor(private readonly media: MediaService) {}

  @Post('upload-url')
  createUpload(@Body() dto: CreateUploadDto) {
    return this.media.createUpload(dto);
  }
}
