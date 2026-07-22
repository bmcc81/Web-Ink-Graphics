var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { ContactMailerService } from './contact-mailer.service.js';
let ContactService = class ContactService {
    prisma;
    mailer;
    constructor(prisma, mailer) {
        this.prisma = prisma;
        this.mailer = mailer;
    }
    async create(dto) {
        const saved = await this.prisma.contactSubmission.create({
            data: {
                name: dto.name,
                company: dto.company,
                email: dto.email.trim().toLowerCase(),
                phone: dto.phone,
                service: dto.service,
                budget: dto.budget,
                launchDate: dto.launchDate,
                website: dto.website,
                message: dto.message,
                source: dto.source || 'website',
            },
            select: { id: true, createdAt: true },
        });
        void this.mailer.sendNotifications(dto).catch(() => undefined);
        return { accepted: true, reference: saved.id };
    }
    findAll(query) {
        return this.prisma.contactSubmission.findMany({
            where: this.where(query),
            orderBy: { createdAt: 'desc' },
            take: 500,
        });
    }
    updateStatus(id, contacted) {
        return this.prisma.contactSubmission.update({
            where: { id },
            data: { contactedAt: contacted ? new Date() : null },
        });
    }
    async exportCsv(query) {
        const rows = await this.findAll(query);
        const headings = [
            'Submitted',
            'Status',
            'Name',
            'Company',
            'Email',
            'Phone',
            'Service',
            'Budget',
            'Launch timing',
            'Website',
            'Message',
            'Source',
        ];
        const lines = rows.map((row) => [
            row.createdAt.toISOString(),
            row.contactedAt ? 'Contacted' : 'New',
            row.name,
            row.company,
            row.email,
            row.phone,
            row.service,
            row.budget,
            row.launchDate,
            row.website,
            row.message,
            row.source,
        ]
            .map((value) => this.csvCell(value))
            .join(','));
        return [
            headings.map((value) => this.csvCell(value)).join(','),
            ...lines,
        ].join('\r\n');
    }
    where(query) {
        const search = query.search?.trim();
        return {
            contactedAt: query.status === 'new'
                ? null
                : query.status === 'contacted'
                    ? { not: null }
                    : undefined,
            OR: search
                ? [
                    { name: { contains: search, mode: 'insensitive' } },
                    { company: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { message: { contains: search, mode: 'insensitive' } },
                ]
                : undefined,
        };
    }
    csvCell(value) {
        let text = value == null ? '' : String(value);
        if (/^[=+\-@]/.test(text)) {
            text = `'${text}`;
        }
        return `"${text.replace(/"/g, '""')}"`;
    }
};
ContactService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ContactMailerService])
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map