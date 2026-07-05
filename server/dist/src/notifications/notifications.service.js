"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer_1 = require("nodemailer");
let NotificationsService = NotificationsService_1 = class NotificationsService {
    config;
    logger = new common_1.Logger(NotificationsService_1.name);
    constructor(config) {
        this.config = config;
    }
    async notifyTaskAssigned(input) {
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
    async notifyNewComment(input) {
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
    async send(input) {
        const host = this.config.get('SMTP_HOST');
        if (!host) {
            return;
        }
        const transport = (0, nodemailer_1.createTransport)({
            host,
            port: Number(this.config.get('SMTP_PORT') ?? 587),
            secure: this.config.get('SMTP_SECURE') === 'true',
            auth: {
                user: this.config.getOrThrow('SMTP_USER'),
                pass: this.config.getOrThrow('SMTP_PASSWORD'),
            },
        });
        const from = this.config.getOrThrow('MAIL_FROM');
        try {
            await transport.sendMail({
                from,
                to: input.to,
                subject: input.subject,
                text: input.text,
            });
        }
        catch (error) {
            this.logger.error('Notification email failed to send', error);
        }
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = NotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map