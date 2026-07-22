import { ConfigService } from '@nestjs/config';
import { CreateContactDto } from './dto/create-contact.dto.js';
export declare class ContactMailerService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    sendNotifications(submission: CreateContactDto): Promise<void>;
}
