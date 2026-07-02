"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeoService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let SeoService = class SeoService {
    prisma;
    config;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async sitemap() {
        const siteUrl = this.siteUrl();
        const projects = await this.prisma.portfolioProject.findMany({
            where: { status: client_1.ProjectStatus.PUBLISHED },
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
            .map((path) => this.urlEntry(`${siteUrl}/${path}`, undefined, path === '' ? '1.0' : '0.8'))
            .concat(projects.flatMap((project) => [
            this.urlEntry(`${siteUrl}/portfolio/${encodeURIComponent(project.slug)}`, project.updatedAt, '0.7'),
            this.urlEntry(`${siteUrl}/fr/portfolio/${encodeURIComponent(project.slug)}`, project.updatedAt, '0.7'),
        ]));
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
    siteUrl() {
        return this.config.getOrThrow('SITE_URL').replace(/\/+$/, '');
    }
    urlEntry(location, modified, priority = '0.8') {
        return [
            '  <url>',
            `    <loc>${this.escapeXml(location)}</loc>`,
            ...(modified ? [`    <lastmod>${modified.toISOString()}</lastmod>`] : []),
            `    <priority>${priority}</priority>`,
            '  </url>',
        ].join('\n');
    }
    escapeXml(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }
};
exports.SeoService = SeoService;
exports.SeoService = SeoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], SeoService);
//# sourceMappingURL=seo.service.js.map