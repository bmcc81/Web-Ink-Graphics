import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ContactMailerService } from './contact-mailer.service.js';
import { ContactQueryDto } from './dto/contact-query.dto.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
export declare class ContactService {
    private readonly prisma;
    private readonly mailer;
    constructor(prisma: PrismaService, mailer: ContactMailerService);
    create(dto: CreateContactDto): Promise<{
        accepted: boolean;
        reference: string;
    }>;
    findAll(query: ContactQueryDto): Prisma.PrismaPromise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        website: string | null;
        budget: string | null;
        company: string | null;
        phone: string | null;
        service: string;
        launchDate: string | null;
        message: string;
        source: string | null;
        contactedAt: Date | null;
    }[]>;
    updateStatus(id: string, contacted: boolean): Prisma.Prisma__ContactSubmissionClient<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        website: string | null;
        budget: string | null;
        company: string | null;
        phone: string | null;
        service: string;
        launchDate: string | null;
        message: string;
        source: string | null;
        contactedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    exportCsv(query: ContactQueryDto): Promise<string>;
    private where;
    private csvCell;
}
