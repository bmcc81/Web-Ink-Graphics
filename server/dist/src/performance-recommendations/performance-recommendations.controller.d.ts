import type { AuthUser } from '../auth/auth-user.js';
import { PerformanceRecommendationsService } from './performance-recommendations.service.js';
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
            title: string;
            priority: import("../generated/prisma/enums.js").RecommendationPriority;
            rationale: string;
            sortOrder: number;
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
            title: string;
            priority: import("../generated/prisma/enums.js").RecommendationPriority;
            rationale: string;
            sortOrder: number;
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
