var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ContactMailerService_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';
let ContactMailerService = ContactMailerService_1 = class ContactMailerService {
    config;
    logger = new Logger(ContactMailerService_1.name);
    constructor(config) {
        this.config = config;
    }
    async sendNotifications(submission) {
        const host = this.config.get('SMTP_HOST');
        if (!host) {
            return;
        }
        const transport = createTransport({
            host,
            port: Number(this.config.get('SMTP_PORT') ?? 587),
            secure: this.config.get('SMTP_SECURE') === 'true',
            auth: {
                user: this.config.getOrThrow('SMTP_USER'),
                pass: this.config.getOrThrow('SMTP_PASSWORD'),
            },
        });
        const from = this.config.getOrThrow('MAIL_FROM');
        const leadTo = this.config.getOrThrow('LEAD_NOTIFICATION_TO');
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
        }
        catch (error) {
            this.logger.error('Lead was saved, but email notification failed', error);
        }
    }
};
ContactMailerService = ContactMailerService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], ContactMailerService);
export { ContactMailerService };
//# sourceMappingURL=contact-mailer.service.js.map