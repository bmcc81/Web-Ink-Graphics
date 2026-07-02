import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { MediaModule } from '../media/media.module';

@Module({
  imports: [MediaModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
