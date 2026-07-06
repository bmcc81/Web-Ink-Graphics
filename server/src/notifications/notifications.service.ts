import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';

interface TaskAssignedInput {
  to: string;
  assigneeName: string;
  actorName: string;
  taskTitle: string;
  projectName: string;
}

interface NewCommentInput {
  to: string;
  assigneeName: string;
  commenterName: string;
  taskTitle: string;
  projectName: string;
  body: string;
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly config: ConfigService) {}

  async notifyTaskAssigned(input: TaskAssignedInput) {
    await this.send({
      to: input.to,
      subject: `You were assigned to "${input.taskTitle}"`,
      text: [
        `Hi ${input.assigneeName},`,
        '',
        `${input.actorName} assigned you to "${input.taskTitle}" in the "${input.projectName}" project.`,
      ].join('\n'),
    });
  }

  async notifyNewComment(input: NewCommentInput) {
    await this.send({
      to: input.to,
      subject: `New comment on "${input.taskTitle}"`,
      text: [
        `Hi ${input.assigneeName},`,
        '',
        `${input.commenterName} commented on "${input.taskTitle}" in the "${input.projectName}" project:`,
        '',
        input.body,
      ].join('\n'),
    });
  }

  private async send(input: { to: string; subject: string; text: string }) {
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
    try {
      await transport.sendMail({
        from,
        to: input.to,
        subject: input.subject,
        text: input.text,
      });
    } catch (error: unknown) {
      this.logger.error('Notification email failed to send', error);
    }
  }
}
