import type { AuthUser } from '../auth/auth-user.js';
import { CreateMilestoneDto } from './dto/create-milestone.dto.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateMilestoneDto } from './dto/update-milestone.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { UpsertBudgetDto } from './dto/upsert-budget.dto.js';
import { ProjectsService } from './projects.service.js';
export declare class ProjectsController {
    private readonly projects;
    constructor(projects: ProjectsService);
    list(user: AuthUser, organizationId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ProjectWorkflowStatus;
        targetLaunch: Date | null;
        description: string | null;
        startDate: Date | null;
        goalId: string | null;
        portfolioProjectId: string | null;
    }[]>;
    create(user: AuthUser, organizationId: string, dto: CreateProjectDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ProjectWorkflowStatus;
        targetLaunch: Date | null;
        description: string | null;
        startDate: Date | null;
        goalId: string | null;
        portfolioProjectId: string | null;
    }>;
    findOne(user: AuthUser, organizationId: string, projectId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        status: import("../generated/prisma/enums.js").ProjectWorkflowStatus;
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
        status: import("../generated/prisma/enums.js").ProjectWorkflowStatus;
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
        status: import("../generated/prisma/enums.js").MilestoneStatus;
        sortOrder: number;
        dueDate: Date | null;
        projectId: string;
        description: string | null;
    }>;
    updateMilestone(user: AuthUser, organizationId: string, projectId: string, milestoneId: string, dto: UpdateMilestoneDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").MilestoneStatus;
        sortOrder: number;
        dueDate: Date | null;
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
        status: import("../generated/prisma/enums.js").TaskStatus;
        title: string;
        sortOrder: number;
        dueDate: Date | null;
        projectId: string;
        description: string | null;
        milestoneId: string | null;
        assigneeId: string | null;
        recurrenceRule: import("../generated/prisma/enums.js").RecurrenceRule | null;
        recurrenceParentId: string | null;
    }>;
    updateTask(user: AuthUser, organizationId: string, projectId: string, taskId: string, dto: UpdateTaskDto): Promise<({
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
        status: import("../generated/prisma/enums.js").TaskStatus;
        title: string;
        sortOrder: number;
        dueDate: Date | null;
        projectId: string;
        description: string | null;
        milestoneId: string | null;
        assigneeId: string | null;
        recurrenceRule: import("../generated/prisma/enums.js").RecurrenceRule | null;
        recurrenceParentId: string | null;
    }) | {
        recurrenceChild: {
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
            status: import("../generated/prisma/enums.js").TaskStatus;
            title: string;
            sortOrder: number;
            dueDate: Date | null;
            projectId: string;
            description: string | null;
            milestoneId: string | null;
            assigneeId: string | null;
            recurrenceRule: import("../generated/prisma/enums.js").RecurrenceRule | null;
            recurrenceParentId: string | null;
        };
        _count: {
            comments: number;
        };
        assignee: {
            id: string;
            name: string;
        } | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").TaskStatus;
        title: string;
        sortOrder: number;
        dueDate: Date | null;
        projectId: string;
        description: string | null;
        milestoneId: string | null;
        assigneeId: string | null;
        recurrenceRule: import("../generated/prisma/enums.js").RecurrenceRule | null;
        recurrenceParentId: string | null;
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
        plannedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        approvedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        committedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        actualAmount: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
    } | null>;
    upsertBudget(user: AuthUser, organizationId: string, projectId: string, dto: UpsertBudgetDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
        currency: string;
        plannedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        approvedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        committedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        actualAmount: import("@prisma/client-runtime-utils").Decimal | null;
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
            status: import("../generated/prisma/enums.js").ProjectStatus;
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
}
