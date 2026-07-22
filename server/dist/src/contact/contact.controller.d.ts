import type { Response } from 'express';
import { ContactService } from './contact.service.js';
import { ContactQueryDto } from './dto/contact-query.dto.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
import { UpdateContactStatusDto } from './dto/update-contact-status.dto.js';
export declare class ContactController {
    private readonly contact;
    constructor(contact: ContactService);
    create(dto: CreateContactDto): Promise<{
        accepted: boolean;
        reference: string;
    }>;
    export(query: ContactQueryDto, response: Response): Promise<void>;
    findAll(query: ContactQueryDto): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
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
    updateStatus(id: string, status: UpdateContactStatusDto): import("../generated/prisma/models.js").Prisma__ContactSubmissionClient<{
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
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
