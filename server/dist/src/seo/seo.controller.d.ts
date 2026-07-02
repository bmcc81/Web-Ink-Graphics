import type { Response } from 'express';
import { SeoService } from './seo.service';
export declare class SeoController {
    private readonly seo;
    constructor(seo: SeoService);
    sitemap(response: Response): Promise<void>;
    robots(response: Response): void;
}
