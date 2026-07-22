import { ProjectWorkflowStatus } from '../../generated/prisma/client.js';
export declare class CreateProjectDto {
    name: string;
    description?: string;
    status?: ProjectWorkflowStatus;
    startDate?: string;
    targetLaunch?: string;
    goalId?: string | null;
}
