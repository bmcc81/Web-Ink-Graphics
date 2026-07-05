import { GoalPeriod, GoalStatus } from '@prisma/client';
export declare class CreateGoalDto {
    title: string;
    description?: string;
    period: GoalPeriod;
    year: number;
    status?: GoalStatus;
}
