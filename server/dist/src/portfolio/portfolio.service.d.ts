import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto';
import { PortfolioQueryDto } from './dto/portfolio-query.dto';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto';
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
    findAll(query: PortfolioQueryDto, includeUnpublished?: boolean): Prisma.PrismaPromise<({
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
    findPublished(slug: string): Promise<{
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
    create(dto: CreatePortfolioProjectDto): Prisma.Prisma__PortfolioProjectClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
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
    private validateContent;
}
