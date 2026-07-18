import type { AuthUser } from '../auth/auth-user';
import { PerformanceRecommendationsService } from './performance-recommendations.service';
export declare class PerformanceRecommendationsController {
    private readonly recommendations;
    constructor(recommendations: PerformanceRecommendationsService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        createdBy: {
            id: string;
            name: string;
        };
        items: {
            id: string;
            priority: import("@prisma/client").$Enums.RecommendationPriority;
            sortOrder: number;
            title: string;
            rationale: string;
            performanceRecommendationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        summary: string;
        projectId: string;
        createdById: string;
        confidenceScore: number;
        confidenceNotes: string;
        dataSummary: string;
    })[]>;
    generate(user: AuthUser, organizationId: string, projectId: string): Promise<{
        createdBy: {
            id: string;
            name: string;
        };
        items: {
            id: string;
            priority: import("@prisma/client").$Enums.RecommendationPriority;
            sortOrder: number;
            title: string;
            rationale: string;
            performanceRecommendationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        summary: string;
        projectId: string;
        createdById: string;
        confidenceScore: number;
        confidenceNotes: string;
        dataSummary: string;
    }>;
}
