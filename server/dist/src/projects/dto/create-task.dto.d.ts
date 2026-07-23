import { RecurrenceRule, TaskStatus } from '../../generated/prisma/client.js';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    status?: TaskStatus;
    milestoneId?: string | null;
    assigneeId?: string | null;
    dueDate?: string;
    recurrenceRule?: RecurrenceRule | null;
}
