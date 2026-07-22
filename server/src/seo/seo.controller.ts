import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { SeoService } from './seo.service.js';

@Controller()
export class SeoController {
  constructor(private readonly seo: SeoService) {}

  @Get('sitemap.xml')
  async sitemap(@Res() response: Response) {
    response.type('application/xml').send(await this.seo.sitemap());
  }

  @Get('robots.txt')
  robots(@Res() response: Response) {
    response.type('text/plain').send(this.seo.robots());
  }
}
