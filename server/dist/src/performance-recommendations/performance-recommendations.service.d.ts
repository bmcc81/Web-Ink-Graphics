import { ConfigService } from '@nestjs/config';
import { RecommendationPriority } from '../generated/prisma/client.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { AiUsageService } from '../ai-usage/ai-usage.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import { CampaignMetricsService } from '../campaign-metrics/campaign-metrics.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
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
            title: string;
            priority: RecommendationPriority;
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
            priority: RecommendationPriority;
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
    private callClaude;
    private parseResponse;
    private buildContext;
    private assertCanView;
    private assertCanContribute;
    private findProjectOrThrow;
    private findProjectWithContext;
}
