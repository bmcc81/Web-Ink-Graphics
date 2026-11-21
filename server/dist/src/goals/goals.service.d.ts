import { ActivityLogService } from '../activity/activity-log.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateGoalDto } from './dto/create-goal.dto.js';
import { UpdateGoalDto } from './dto/update-goal.dto.js';
export declare class GoalsService {
    private readonly prisma;
    private readonly activityLog;
    constructor(prisma: PrismaService, activityLog: ActivityLogService);
    list(user: AuthUser, organizationId: string): Promise<({
        projects: {
            id: string;
            name: string;
            status: import("../generated/prisma/enums.js").ProjectWorkflowStatus;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
    })[]>;
    findOne(user: AuthUser, organizationId: string, goalId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
    }>;
    create(user: AuthUser, organizationId: string, dto: CreateGoalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
    }>;
    update(user: AuthUser, organizationId: string, goalId: string, dto: UpdateGoalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
    }>;
    remove(user: AuthUser, organizationId: string, goalId: string): Promise<{
        removed: boolean;
    }>;
    private assertCanView;
    private assertCanContribute;
    private findGoalOrThrow;
}
