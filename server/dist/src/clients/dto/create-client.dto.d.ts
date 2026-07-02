import { ClientStatus } from '@prisma/client';
export declare class CreateClientDto {
    companyName: string;
    industry?: string;
    website?: string;
    serviceArea?: string;
    status?: ClientStatus;
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    generalNotes?: string;
}
