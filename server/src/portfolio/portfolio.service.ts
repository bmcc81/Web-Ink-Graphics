import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Locale, Prisma, ProjectStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto.js';
import { PortfolioQueryDto } from './dto/portfolio-query.dto.js';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto.js';

const projectInclude = {
  translations: true,
  images: { orderBy: { sortOrder: 'asc' as const } },
  categories: true,
};

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

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

  findAll(query: PortfolioQueryDto, includeUnpublished = false) {
    const where: Prisma.PortfolioProjectWhereInput = {
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

  async findOne(slug: string) {
    const project = await this.prisma.portfolioProject.findUnique({
      where: { slug },
      include: projectInclude,
    });

    if (!project) {
      throw new NotFoundException(`Portfolio project "${slug}" was not found`);
    }

    return project;
  }

  async findPublished(slug: string) {
    const project = await this.prisma.portfolioProject.findFirst({
      where: { slug, status: ProjectStatus.PUBLISHED },
      include: projectInclude,
    });

    if (!project) {
      throw new NotFoundException(`Portfolio project "${slug}" was not found`);
    }

    return project;
  }

  create(dto: CreatePortfolioProjectDto) {
    const { translations, images, categoryIds, completedAt, ...project } = dto;
    this.validateContent(project.status, translations, images ?? []);

    return this.prisma.portfolioProject.create({
      data: {
        ...project,
        completedAt: completedAt ? new Date(completedAt) : undefined,
        publishedAt:
          project.status === ProjectStatus.PUBLISHED ? new Date() : undefined,
        translations: { create: translations },
        images: images ? { create: images } : undefined,
        categories: categoryIds
          ? { connect: categoryIds.map((id) => ({ id })) }
          : undefined,
      },
      include: projectInclude,
    });
  }

  async update(slug: string, dto: UpdatePortfolioProjectDto) {
    const existingProject = await this.findOne(slug);
    const { translations, images, categoryIds, completedAt, ...project } = dto;
    const mergedTranslations = translations
      ? [
          ...existingProject.translations.filter(
            (existing) =>
              !translations.some(
                (translation) => translation.locale === existing.locale,
              ),
          ),
          ...translations,
        ]
      : existingProject.translations;
    this.validateContent(
      project.status ?? existingProject.status,
      mergedTranslations,
      images ?? existingProject.images,
    );

    return this.prisma.portfolioProject.update({
      where: { slug },
      data: {
        ...project,
        completedAt: completedAt ? new Date(completedAt) : undefined,
        publishedAt:
          project.status === ProjectStatus.PUBLISHED
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

  async archive(slug: string) {
    await this.findOne(slug);
    return this.prisma.portfolioProject.update({
      where: { slug },
      data: { status: ProjectStatus.ARCHIVED, publishedAt: null },
      include: projectInclude,
    });
  }

  private validateContent(
    status: ProjectStatus | undefined,
    translations: Array<{
      locale: Locale;
      title: string;
      summary: string;
    }>,
    images: Array<{
      altTextEn: string;
      altTextFr?: string | null;
    }>,
  ) {
    const locales = translations.map((translation) => translation.locale);
    if (!locales.includes(Locale.EN)) {
      throw new BadRequestException(
        'An English title and summary are required.',
      );
    }
    if (new Set(locales).size !== locales.length) {
      throw new BadRequestException(
        'Only one translation per language is allowed.',
      );
    }
    if (status !== ProjectStatus.PUBLISHED) {
      return;
    }
    if (!locales.includes(Locale.FR)) {
      throw new BadRequestException(
        'A French title and summary are required before publishing.',
      );
    }
    if (
      images.some(
        (image) => !image.altTextEn.trim() || !image.altTextFr?.trim(),
      )
    ) {
      throw new BadRequestException(
        'Published images require English and French alt text.',
      );
    }
  }
}
