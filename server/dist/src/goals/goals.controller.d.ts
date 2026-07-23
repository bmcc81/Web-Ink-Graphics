import type { AuthUser } from '../auth/auth-user.js';
import { CreateGoalDto } from './dto/create-goal.dto.js';
import { UpdateGoalDto } from './dto/update-goal.dto.js';
import { GoalsService } from './goals.service.js';
export declare class GoalsController {
    private readonly goals;
    constructor(goals: GoalsService);
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
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
        year: number;
    })[]>;
    create(user: AuthUser, organizationId: string, dto: CreateGoalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
        year: number;
    }>;
    findOne(user: AuthUser, organizationId: string, goalId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
        year: number;
    }>;
    update(user: AuthUser, organizationId: string, goalId: string, dto: UpdateGoalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").GoalStatus;
        title: string;
        description: string | null;
        period: import("../generated/prisma/enums.js").GoalPeriod;
        year: number;
    }>;
    remove(user: AuthUser, organizationId: string, goalId: string): Promise<{
        removed: boolean;
    }>;
}
