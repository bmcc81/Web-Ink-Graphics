import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller.js';
import { ClientsService } from './clients.service.js';
import { MediaModule } from '../media/media.module.js';

@Module({
  imports: [MediaModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
