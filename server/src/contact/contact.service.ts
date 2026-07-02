import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ContactMailerService } from './contact-mailer.service';
import { ContactQueryDto } from './dto/contact-query.dto';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailer: ContactMailerService,
  ) {}

  async create(dto: CreateContactDto) {
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

  findAll(query: ContactQueryDto) {
    return this.prisma.contactSubmission.findMany({
      where: this.where(query),
      orderBy: { createdAt: 'desc' },
      take: 500,
    });
  }

  updateStatus(id: string, contacted: boolean) {
    return this.prisma.contactSubmission.update({
      where: { id },
      data: { contactedAt: contacted ? new Date() : null },
    });
  }

  async exportCsv(query: ContactQueryDto) {
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
    const lines = rows.map((row) =>
      [
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
        .join(','),
    );

    return [
      headings.map((value) => this.csvCell(value)).join(','),
      ...lines,
    ].join('\r\n');
  }

  private where(query: ContactQueryDto): Prisma.ContactSubmissionWhereInput {
    const search = query.search?.trim();
    return {
      contactedAt:
        query.status === 'new'
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

  private csvCell(value: string | Date | null | undefined) {
    let text = value == null ? '' : String(value);
    if (/^[=+\-@]/.test(text)) {
      text = `'${text}`;
    }
    return `"${text.replace(/"/g, '""')}"`;
  }
}
