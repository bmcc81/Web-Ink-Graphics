import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto.js';

@Injectable()
export class ContactMailerService {
  private readonly logger = new Logger(ContactMailerService.name);

  constructor(private readonly config: ConfigService) {}

  async sendNotifications(submission: CreateContactDto) {
    const host = this.config.get<string>('SMTP_HOST');
    if (!host) {
      return;
    }

    const transport = createTransport({
      host,
      port: Number(this.config.get<string>('SMTP_PORT') ?? 587),
      secure: this.config.get<string>('SMTP_SECURE') === 'true',
      auth: {
        user: this.config.getOrThrow<string>('SMTP_USER'),
        pass: this.config.getOrThrow<string>('SMTP_PASSWORD'),
      },
    });
    const from = this.config.getOrThrow<string>('MAIL_FROM');
    const leadTo = this.config.getOrThrow<string>('LEAD_NOTIFICATION_TO');
    const details = [
      `Name: ${submission.name}`,
      `Company: ${submission.company || 'Not provided'}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone || 'Not provided'}`,
      `Service: ${submission.service}`,
      `Budget: ${submission.budget || 'Not provided'}`,
      `Launch timing: ${submission.launchDate || 'Not provided'}`,
      `Existing website: ${submission.website || 'Not provided'}`,
      '',
      submission.message,
    ].join('\n');

    try {
      await Promise.all([
        transport.sendMail({
          from,
          to: leadTo,
          replyTo: submission.email,
          subject: `New WebInk inquiry: ${submission.service}`,
          text: details,
        }),
        transport.sendMail({
          from,
          to: submission.email,
          subject: 'We received your WebInk Graphics inquiry',
          text: [
            `Hello ${submission.name},`,
            '',
            'Thank you for contacting WebInk Graphics. Your project details were received.',
            'We will review them and reply as soon as possible.',
            '',
            'WebInk Graphics',
          ].join('\n'),
        }),
      ]);
    } catch (error: unknown) {
      this.logger.error('Lead was saved, but email notification failed', error);
    }
  }
}
