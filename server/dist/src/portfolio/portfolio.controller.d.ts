import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto';
import { PortfolioQueryDto } from './dto/portfolio-query.dto';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto';
import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolio;
    constructor(portfolio: PortfolioService);
    findAll(query: PortfolioQueryDto): import("@prisma/client").Prisma.PrismaPromise<({
        translations: {
            id: string;
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findFeatured(): import("@prisma/client").Prisma.PrismaPromise<({
        translations: {
            id: string;
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findAllForAdmin(query: PortfolioQueryDto): import("@prisma/client").Prisma.PrismaPromise<({
        translations: {
            id: string;
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    })[]>;
    findCategories(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        slug: string;
        nameEn: string;
        nameFr: string;
    }[]>;
    findOneForAdmin(slug: string): Promise<{
        translations: {
            id: string;
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
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
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
    create(dto: CreatePortfolioProjectDto): import("@prisma/client").Prisma.Prisma__PortfolioProjectClient<{
        translations: {
            id: string;
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(slug: string, dto: UpdatePortfolioProjectDto): Promise<{
        translations: {
            id: string;
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
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
            title: string;
            locale: import("@prisma/client").$Enums.Locale;
            summary: string;
            challenge: string | null;
            solution: string | null;
            results: string | null;
            seoTitle: string | null;
            metaDescription: string | null;
            projectId: string;
        }[];
        images: {
            id: string;
            url: string;
            sortOrder: number;
            altTextEn: string;
            altTextFr: string | null;
            width: number | null;
            height: number | null;
            isCover: boolean;
            projectId: string;
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
        status: import("@prisma/client").$Enums.ProjectStatus;
        clientName: string | null;
        projectUrl: string | null;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
    }>;
}
