import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import { NotificationsService } from '../notifications/notifications.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UpsertBudgetDto } from './dto/upsert-budget.dto';
export declare class ProjectsService {
    private readonly prisma;
    private readonly activityLog;
    private readonly notifications;
    constructor(prisma: PrismaService, activityLog: ActivityLogService, notifications: NotificationsService);
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
        portfolioProjectId: string | null;
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
        portfolioProjectId: string | null;
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
        portfolioProjectId: string | null;
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
        portfolioProjectId: string | null;
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
    getBudget(user: AuthUser, organizationId: string, projectId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        currency: string;
        plannedAmount: import("@prisma/client/runtime/library").Decimal | null;
        approvedAmount: import("@prisma/client/runtime/library").Decimal | null;
        committedAmount: import("@prisma/client/runtime/library").Decimal | null;
        actualAmount: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    } | null>;
    upsertBudget(user: AuthUser, organizationId: string, projectId: string, dto: UpsertBudgetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        currency: string;
        plannedAmount: import("@prisma/client/runtime/library").Decimal | null;
        approvedAmount: import("@prisma/client/runtime/library").Decimal | null;
        committedAmount: import("@prisma/client/runtime/library").Decimal | null;
        actualAmount: import("@prisma/client/runtime/library").Decimal | null;
        notes: string | null;
    }>;
    removeBudget(user: AuthUser, organizationId: string, projectId: string): Promise<{
        removed: boolean;
    }>;
    publishToPortfolio(user: AuthUser, organizationId: string, projectId: string): Promise<{
        portfolioProject: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            status: import("@prisma/client").$Enums.ProjectStatus;
            clientName: string | null;
            projectUrl: string | null;
            featured: boolean;
            displayOrder: number;
            completedAt: Date | null;
            publishedAt: Date | null;
        };
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
    private assertIsStaff;
    private slugify;
    private uniquePortfolioSlug;
    private findProjectOrThrow;
    private assertMilestoneBelongsToProject;
    private assertGoalBelongsToOrganization;
    private assertTaskBelongsToProject;
    private assertAssigneeIsMember;
    private notifyAssignee;
}
