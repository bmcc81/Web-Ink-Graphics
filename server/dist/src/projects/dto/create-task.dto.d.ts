import { RecurrenceRule, TaskStatus } from '@prisma/client';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    status?: TaskStatus;
    milestoneId?: string | null;
    assigneeId?: string | null;
    dueDate?: string;
    recurrenceRule?: RecurrenceRule | null;
}
