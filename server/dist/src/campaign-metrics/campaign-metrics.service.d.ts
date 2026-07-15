import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogService } from '../activity/activity-log.service';
import { CreateCampaignMetricDto } from './dto/create-campaign-metric.dto';
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
        metricType: import("@prisma/client").$Enums.MetricType;
        periodStart: Date;
        periodEnd: Date;
        actualValue: import("@prisma/client/runtime/library").Decimal;
        plannedValue: import("@prisma/client/runtime/library").Decimal | null;
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
        metricType: import("@prisma/client").$Enums.MetricType;
        periodStart: Date;
        periodEnd: Date;
        actualValue: import("@prisma/client/runtime/library").Decimal;
        plannedValue: import("@prisma/client/runtime/library").Decimal | null;
        recordedById: string;
    }>;
    remove(user: AuthUser, organizationId: string, projectId: string, metricId: string): Promise<void>;
    summary(user: AuthUser, organizationId: string, projectId: string): Promise<{
        budget: {
            currency: string;
            plannedAmount: import("@prisma/client/runtime/library").Decimal | null;
            approvedAmount: import("@prisma/client/runtime/library").Decimal | null;
            committedAmount: import("@prisma/client/runtime/library").Decimal | null;
            actualAmount: import("@prisma/client/runtime/library").Decimal | null;
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
