import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProjectStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async sitemap() {
    const siteUrl = this.siteUrl();
    const projects = await this.prisma.portfolioProject.findMany({
      where: { status: ProjectStatus.PUBLISHED },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: 'desc' },
    });
    const fixedPages = [
      '',
      'services/web-design',
      'services/seo',
      'services/newsletters',
      'services/graphic-design',
      'portfolio',
    ];
    const localizedPages = fixedPages.flatMap((path) => [
      path,
      `fr${path ? `/${path}` : ''}`,
    ]);
    const urls = localizedPages
      .map((path) =>
        this.urlEntry(
          `${siteUrl}/${path}`,
          undefined,
          path === '' ? '1.0' : '0.8',
        ),
      )
      .concat(
        projects.flatMap((project) => [
          this.urlEntry(
            `${siteUrl}/portfolio/${encodeURIComponent(project.slug)}`,
            project.updatedAt,
            '0.7',
          ),
          this.urlEntry(
            `${siteUrl}/fr/portfolio/${encodeURIComponent(project.slug)}`,
            project.updatedAt,
            '0.7',
          ),
        ]),
      );

    return [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls,
      '</urlset>',
    ].join('\n');
  }

  robots() {
    return [
      'User-agent: *',
      'Allow: /',
      'Disallow: /admin',
      `Sitemap: ${this.siteUrl()}/sitemap.xml`,
      '',
    ].join('\n');
  }

  private siteUrl() {
    return this.config.getOrThrow<string>('SITE_URL').replace(/\/+$/, '');
  }

  private urlEntry(location: string, modified?: Date, priority = '0.8') {
    return [
      '  <url>',
      `    <loc>${this.escapeXml(location)}</loc>`,
      ...(modified ? [`    <lastmod>${modified.toISOString()}</lastmod>`] : []),
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  }

  private escapeXml(value: string) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}
