import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller.js';
import { ContactMailerService } from './contact-mailer.service.js';
import { ContactService } from './contact.service.js';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactMailerService],
})
export class ContactModule {}
