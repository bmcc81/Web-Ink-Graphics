import { ConfigService } from '@nestjs/config';
import { ActivityLogService } from '../activity/activity-log.service';
import { AiUsageService } from '../ai-usage/ai-usage.service';
import type { AuthUser } from '../auth/auth-user';
import { CampaignMetricsService } from '../campaign-metrics/campaign-metrics.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class PerformanceRecommendationsService {
    private readonly prisma;
    private readonly config;
    private readonly activityLog;
    private readonly aiUsage;
    private readonly campaignMetrics;
    private readonly logger;
    constructor(prisma: PrismaService, config: ConfigService, activityLog: ActivityLogService, aiUsage: AiUsageService, campaignMetrics: CampaignMetricsService);
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
    private callClaude;
    private parseResponse;
    private buildContext;
    private assertCanView;
    private assertCanContribute;
    private findProjectOrThrow;
    private findProjectWithContext;
}
