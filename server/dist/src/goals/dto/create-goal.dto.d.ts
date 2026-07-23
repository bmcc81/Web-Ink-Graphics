import { GoalPeriod, GoalStatus } from '../../generated/prisma/client.js';
export declare class CreateGoalDto {
    title: string;
    description?: string;
    period: GoalPeriod;
    year: number;
    status?: GoalStatus;
}
