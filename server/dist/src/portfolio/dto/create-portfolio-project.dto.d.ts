import { ProjectStatus } from '@prisma/client';
import { PortfolioImageDto } from './portfolio-image.dto';
import { ProjectTranslationDto } from './project-translation.dto';
export declare class CreatePortfolioProjectDto {
    slug: string;
    clientName?: string;
    projectUrl?: string;
    status?: ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: string;
    translations: ProjectTranslationDto[];
    images?: PortfolioImageDto[];
    categoryIds?: string[];
}
