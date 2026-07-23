import { Locale } from '../../generated/prisma/client.js';
export declare class ProjectTranslationDto {
    locale: Locale;
    title: string;
    summary: string;
    challenge?: string;
    solution?: string;
    results?: string;
    seoTitle?: string;
    metaDescription?: string;
}
