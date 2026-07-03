import { ProjectWorkflowStatus } from '@prisma/client';
export declare class CreateProjectDto {
    name: string;
    description?: string;
    status?: ProjectWorkflowStatus;
    startDate?: string;
    targetLaunch?: string;
}
