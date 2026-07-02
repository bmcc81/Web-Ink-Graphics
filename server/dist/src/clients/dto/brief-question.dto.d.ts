import { FollowUpPriority, QuestionStatus } from '@prisma/client';
export declare class BriefQuestionDto {
    id?: string;
    question: string;
    answer?: string;
    status: QuestionStatus;
    owner?: string;
    dueDate?: string;
    priority: FollowUpPriority;
    sortOrder?: number;
}
