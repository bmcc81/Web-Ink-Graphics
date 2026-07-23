import type { AuthUser } from '../auth/auth-user.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { CreateCampaignMetricDto } from './dto/create-campaign-metric.dto.js';
export declare class CampaignMetricsService {
    private readonly prisma;
    private readonly activityLog;
    constructor(prisma: PrismaService, activityLog: ActivityLogService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        recordedBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        projectId: string;
        notes: string | null;
        metricType: import("../generated/prisma/enums.js").MetricType;
        periodStart: Date;
        periodEnd: Date;
        actualValue: import("@prisma/client-runtime-utils").Decimal;
        plannedValue: import("@prisma/client-runtime-utils").Decimal | null;
        recordedById: string;
    })[]>;
    create(user: AuthUser, organizationId: string, projectId: string, dto: CreateCampaignMetricDto): Promise<{
        recordedBy: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        projectId: string;
        notes: string | null;
        metricType: import("../generated/prisma/enums.js").MetricType;
        periodStart: Date;
        periodEnd: Date;
        actualValue: import("@prisma/client-runtime-utils").Decimal;
        plannedValue: import("@prisma/client-runtime-utils").Decimal | null;
        recordedById: string;
    }>;
    remove(user: AuthUser, organizationId: string, projectId: string, metricId: string): Promise<void>;
    summary(user: AuthUser, organizationId: string, projectId: string): Promise<{
        budget: {
            currency: string;
            plannedAmount: import("@prisma/client-runtime-utils").Decimal | null;
            approvedAmount: import("@prisma/client-runtime-utils").Decimal | null;
            committedAmount: import("@prisma/client-runtime-utils").Decimal | null;
            actualAmount: import("@prisma/client-runtime-utils").Decimal | null;
            variance: number | null;
        } | null;
        metrics: {
            metricType: string;
            actualTotal: number;
            plannedTotal: number | null;
            variance: number | null;
            entryCount: number;
        }[];
    }>;
    private assertCanView;
    private assertCanContribute;
    private findProjectOrThrow;
}
