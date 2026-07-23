import { Locale, Prisma, ProjectStatus } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto.js';
import { PortfolioQueryDto } from './dto/portfolio-query.dto.js';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto.js';
export declare class PortfolioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findCategories(): Prisma.PrismaPromise<{
        id: string;
        slug: string;
        nameEn: string;
        nameFr: string;
    }[]>;
    findFeatured(): Prisma.PrismaPromise<({
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findAll(query: PortfolioQueryDto, includeUnpublished?: boolean): Prisma.PrismaPromise<({
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findOne(slug: string): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    findPublished(slug: string): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    create(dto: CreatePortfolioProjectDto): Prisma.Prisma__PortfolioProjectClient<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(slug: string, dto: UpdatePortfolioProjectDto): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    archive(slug: string): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: Locale;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            url: string;
            id: string;
            sortOrder: number;
            projectId: string;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
        }[];
        categories: {
            id: string;
            slug: string;
            nameEn: string;
            nameFr: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        status: ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    private validateContent;
}
