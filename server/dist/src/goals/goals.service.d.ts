import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
export declare class GoalsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: AuthUser, organizationId: string): Promise<({
        projects: {
            id: string;
            name: string;
            status: import("@prisma/client").$Enums.ProjectWorkflowStatus;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("@prisma/client").$Enums.GoalStatus;
        title: string;
        description: string | null;
        period: import("@prisma/client").$Enums.GoalPeriod;
    })[]>;
    findOne(user: AuthUser, organizationId: string, goalId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("@prisma/client").$Enums.GoalStatus;
        title: string;
        description: string | null;
        period: import("@prisma/client").$Enums.GoalPeriod;
    }>;
    create(user: AuthUser, organizationId: string, dto: CreateGoalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("@prisma/client").$Enums.GoalStatus;
        title: string;
        description: string | null;
        period: import("@prisma/client").$Enums.GoalPeriod;
    }>;
    update(user: AuthUser, organizationId: string, goalId: string, dto: UpdateGoalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        year: number;
        status: import("@prisma/client").$Enums.GoalStatus;
        title: string;
        description: string | null;
        period: import("@prisma/client").$Enums.GoalPeriod;
    }>;
    remove(user: AuthUser, organizationId: string, goalId: string): Promise<{
        removed: boolean;
    }>;
    private assertCanView;
    private assertCanContribute;
    private findGoalOrThrow;
}
