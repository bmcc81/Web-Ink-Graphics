var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { Locale, ProjectStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
const projectInclude = {
    translations: true,
    images: { orderBy: { sortOrder: 'asc' } },
    categories: true,
};
let PortfolioService = class PortfolioService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findCategories() {
        return this.prisma.portfolioCategory.findMany({
            orderBy: { nameEn: 'asc' },
        });
    }
    findFeatured() {
        return this.prisma.portfolioProject.findMany({
            where: { status: ProjectStatus.PUBLISHED, featured: true },
            include: projectInclude,
            orderBy: [{ displayOrder: 'asc' }, { publishedAt: 'desc' }],
            take: 4,
        });
    }
    findAll(query, includeUnpublished = false) {
        const where = {
            status: includeUnpublished ? query.status : ProjectStatus.PUBLISHED,
            categories: query.category
                ? { some: { slug: query.category } }
                : undefined,
        };
        return this.prisma.portfolioProject.findMany({
            where,
            include: projectInclude,
            orderBy: [{ displayOrder: 'asc' }, { createdAt: 'desc' }],
        });
    }
    async findOne(slug) {
        const project = await this.prisma.portfolioProject.findUnique({
            where: { slug },
            include: projectInclude,
        });
        if (!project) {
            throw new NotFoundException(`Portfolio project "${slug}" was not found`);
        }
        return project;
    }
    async findPublished(slug) {
        const project = await this.prisma.portfolioProject.findFirst({
            where: { slug, status: ProjectStatus.PUBLISHED },
            include: projectInclude,
        });
        if (!project) {
            throw new NotFoundException(`Portfolio project "${slug}" was not found`);
        }
        return project;
    }
    create(dto) {
        const { translations, images, categoryIds, completedAt, ...project } = dto;
        this.validateContent(project.status, translations, images ?? []);
        return this.prisma.portfolioProject.create({
            data: {
                ...project,
                completedAt: completedAt ? new Date(completedAt) : undefined,
                publishedAt: project.status === ProjectStatus.PUBLISHED ? new Date() : undefined,
                translations: { create: translations },
                images: images ? { create: images } : undefined,
                categories: categoryIds
                    ? { connect: categoryIds.map((id) => ({ id })) }
                    : undefined,
            },
            include: projectInclude,
        });
    }
    async update(slug, dto) {
        const existingProject = await this.findOne(slug);
        const { translations, images, categoryIds, completedAt, ...project } = dto;
        const mergedTranslations = translations
            ? [
                ...existingProject.translations.filter((existing) => !translations.some((translation) => translation.locale === existing.locale)),
                ...translations,
            ]
            : existingProject.translations;
        this.validateContent(project.status ?? existingProject.status, mergedTranslations, images ?? existingProject.images);
        return this.prisma.portfolioProject.update({
            where: { slug },
            data: {
                ...project,
                completedAt: completedAt ? new Date(completedAt) : undefined,
                publishedAt: project.status === ProjectStatus.PUBLISHED
                    ? new Date()
                    : project.status
                        ? null
                        : undefined,
                translations: translations
                    ? {
                        upsert: translations.map((translation) => ({
                            where: {
                                projectId_locale: {
                                    projectId: existingProject.id,
                                    locale: translation.locale,
                                },
                            },
                            create: translation,
                            update: translation,
                        })),
                    }
                    : undefined,
                images: images
                    ? {
                        deleteMany: {},
                        create: images,
                    }
                    : undefined,
                categories: categoryIds
                    ? { set: categoryIds.map((id) => ({ id })) }
                    : undefined,
            },
            include: projectInclude,
        });
    }
    async archive(slug) {
        await this.findOne(slug);
        return this.prisma.portfolioProject.update({
            where: { slug },
            data: { status: ProjectStatus.ARCHIVED, publishedAt: null },
            include: projectInclude,
        });
    }
    validateContent(status, translations, images) {
        const locales = translations.map((translation) => translation.locale);
        if (!locales.includes(Locale.EN)) {
            throw new BadRequestException('An English title and summary are required.');
        }
        if (new Set(locales).size !== locales.length) {
            throw new BadRequestException('Only one translation per language is allowed.');
        }
        if (status !== ProjectStatus.PUBLISHED) {
            return;
        }
        if (!locales.includes(Locale.FR)) {
            throw new BadRequestException('A French title and summary are required before publishing.');
        }
        if (images.some((image) => !image.altTextEn.trim() || !image.altTextFr?.trim())) {
            throw new BadRequestException('Published images require English and French alt text.');
        }
    }
};
PortfolioService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], PortfolioService);
export { PortfolioService };
//# sourceMappingURL=portfolio.service.js.map