import { ConfigService } from '@nestjs/config';
import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import { AiUsageService } from '../ai-usage/ai-usage.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class CreativeBriefsService {
    private readonly prisma;
    private readonly config;
    private readonly activityLog;
    private readonly aiUsage;
    private readonly logger;
    constructor(prisma: PrismaService, config: ConfigService, activityLog: ActivityLogService, aiUsage: AiUsageService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        approvedBy: {
            id: string;
            name: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            sortOrder: number;
            label: string;
            copyAngle: string;
            imageConcept: string;
            creativeBriefId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.CreativeBriefStatus;
        approvedAt: Date | null;
        summary: string;
        projectId: string;
        createdById: string;
        approvedById: string | null;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
    })[]>;
    generate(user: AuthUser, organizationId: string, projectId: string): Promise<{
        approvedBy: {
            id: string;
            name: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            sortOrder: number;
            label: string;
            copyAngle: string;
            imageConcept: string;
            creativeBriefId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.CreativeBriefStatus;
        approvedAt: Date | null;
        summary: string;
        projectId: string;
        createdById: string;
        approvedById: string | null;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
    }>;
    approve(user: AuthUser, organizationId: string, projectId: string, briefId: string): Promise<{
        approvedBy: {
            id: string;
            name: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            sortOrder: number;
            label: string;
            copyAngle: string;
            imageConcept: string;
            creativeBriefId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.CreativeBriefStatus;
        approvedAt: Date | null;
        summary: string;
        projectId: string;
        createdById: string;
        approvedById: string | null;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
    }>;
    private callClaude;
    private parseResponse;
    private buildContext;
    private latestDiscoveryBrief;
    private assertCanView;
    private assertCanContribute;
    private assertCanManage;
    private findProjectOrThrow;
    private findProjectWithContext;
}
