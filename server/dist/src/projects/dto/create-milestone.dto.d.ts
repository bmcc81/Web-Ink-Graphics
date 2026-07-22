import { MilestoneStatus } from '../../generated/prisma/client.js';
export declare class CreateMilestoneDto {
    name: string;
    description?: string;
    status?: MilestoneStatus;
    dueDate?: string;
}
