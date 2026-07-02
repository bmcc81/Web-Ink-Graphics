import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactMailerService } from './contact-mailer.service';
import { ContactService } from './contact.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactMailerService],
})
export class ContactModule {}
