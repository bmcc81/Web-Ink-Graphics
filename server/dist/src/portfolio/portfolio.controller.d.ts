import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto.js';
import { PortfolioQueryDto } from './dto/portfolio-query.dto.js';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto.js';
import { PortfolioService } from './portfolio.service.js';
export declare class PortfolioController {
    private readonly portfolio;
    constructor(portfolio: PortfolioService);
    findAll(query: PortfolioQueryDto): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findFeatured(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findAllForAdmin(query: PortfolioQueryDto): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findCategories(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        slug: string;
        nameEn: string;
        nameFr: string;
    }[]>;
    findOneForAdmin(slug: string): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    findOne(slug: string): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    create(dto: CreatePortfolioProjectDto): import("../generated/prisma/models.js").Prisma__PortfolioProjectClient<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    update(slug: string, dto: UpdatePortfolioProjectDto): Promise<{
        translations: {
            id: string;
            summary: string;
            title: string;
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
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
            locale: import("../generated/prisma/enums.js").Locale;
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
        status: import("../generated/prisma/enums.js").ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
}
