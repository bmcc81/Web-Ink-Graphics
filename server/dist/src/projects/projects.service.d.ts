import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class ProjectsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: AuthUser, organizationId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("@prisma/client").$Enums.ProjectWorkflowStatus;
        targetLaunch: Date | null;
        description: string | null;
        startDate: Date | null;
        goalId: string | null;
    }[]>;
    findOne(user: AuthUser, organizationId: string, projectId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("@prisma/client").$Enums.ProjectWorkflowStatus;
        targetLaunch: Date | null;
        description: string | null;
        startDate: Date | null;
        goalId: string | null;
    }>;
    create(user: AuthUser, organizationId: string, dto: CreateProjectDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("@prisma/client").$Enums.ProjectWorkflowStatus;
        targetLaunch: Date | null;
        description: string | null;
        startDate: Date | null;
        goalId: string | null;
    }>;
    update(user: AuthUser, organizationId: string, projectId: string, dto: UpdateProjectDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("@prisma/client").$Enums.ProjectWorkflowStatus;
        targetLaunch: Date | null;
        description: string | null;
        startDate: Date | null;
        goalId: string | null;
    }>;
    remove(user: AuthUser, organizationId: string, projectId: string): Promise<{
        removed: boolean;
    }>;
    createMilestone(user: AuthUser, organizationId: string, projectId: string, dto: CreateMilestoneDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.MilestoneStatus;
        dueDate: Date | null;
        sortOrder: number;
        projectId: string;
        description: string | null;
    }>;
    updateMilestone(user: AuthUser, organizationId: string, projectId: string, milestoneId: string, dto: UpdateMilestoneDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.MilestoneStatus;
        dueDate: Date | null;
        sortOrder: number;
        projectId: string;
        description: string | null;
    }>;
    removeMilestone(user: AuthUser, organizationId: string, projectId: string, milestoneId: string): Promise<{
        removed: boolean;
    }>;
    createTask(user: AuthUser, organizationId: string, projectId: string, dto: CreateTaskDto): Promise<{
        _count: {
            comments: number;
        };
        assignee: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.TaskStatus;
        dueDate: Date | null;
        sortOrder: number;
        title: string;
        projectId: string;
        description: string | null;
        milestoneId: string | null;
        assigneeId: string | null;
    }>;
    updateTask(user: AuthUser, organizationId: string, projectId: string, taskId: string, dto: UpdateTaskDto): Promise<{
        _count: {
            comments: number;
        };
        assignee: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.TaskStatus;
        dueDate: Date | null;
        sortOrder: number;
        title: string;
        projectId: string;
        description: string | null;
        milestoneId: string | null;
        assigneeId: string | null;
    }>;
    removeTask(user: AuthUser, organizationId: string, projectId: string, taskId: string): Promise<{
        removed: boolean;
    }>;
    listComments(user: AuthUser, organizationId: string, projectId: string, taskId: string): Promise<({
        author: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        taskId: string;
        authorId: string;
    })[]>;
    createComment(user: AuthUser, organizationId: string, projectId: string, taskId: string, dto: CreateTaskCommentDto): Promise<{
        author: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        body: string;
        taskId: string;
        authorId: string;
    }>;
    removeComment(user: AuthUser, organizationId: string, projectId: string, taskId: string, commentId: string): Promise<{
        removed: boolean;
    }>;
    private assertCanView;
    private assertCanContribute;
    private assertCanManageOwnerLevel;
    private findProjectOrThrow;
    private assertMilestoneBelongsToProject;
    private assertGoalBelongsToOrganization;
    private assertTaskBelongsToProject;
    private assertAssigneeIsMember;
}
