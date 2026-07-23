import { ClientStatus } from '../../generated/prisma/client.js';
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
