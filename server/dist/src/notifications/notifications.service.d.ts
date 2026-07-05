import { ConfigService } from '@nestjs/config';
interface TaskAssignedInput {
    to: string;
    assigneeName: string;
    actorName: string;
    taskTitle: string;
    projectName: string;
}
interface NewCommentInput {
    to: string;
    assigneeName: string;
    commenterName: string;
    taskTitle: string;
    projectName: string;
    body: string;
}
export declare class NotificationsService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    notifyTaskAssigned(input: TaskAssignedInput): Promise<void>;
    notifyNewComment(input: NewCommentInput): Promise<void>;
    private send;
}
export {};
