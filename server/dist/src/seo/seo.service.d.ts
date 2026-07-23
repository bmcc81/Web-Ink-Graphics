import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class SeoService {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
    sitemap(): Promise<string>;
    robots(): string;
    private siteUrl;
    private urlEntry;
    private escapeXml;
}
