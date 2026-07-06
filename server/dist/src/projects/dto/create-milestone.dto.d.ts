import { MilestoneStatus } from '@prisma/client';
export declare class CreateMilestoneDto {
    name: string;
    description?: string;
    status?: MilestoneStatus;
    dueDate?: string;
}
