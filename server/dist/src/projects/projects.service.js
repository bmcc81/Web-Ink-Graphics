var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { NotificationsService } from '../notifications/notifications.service.js';
import { CONTRIBUTE_ROLES, isStaff, MANAGE_ROLES, resolveOrganizationRole, } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
const taskInclude = {
    assignee: { select: { id: true, name: true } },
    _count: { select: { comments: true } },
};
let ProjectsService = class ProjectsService {
    prisma;
    activityLog;
    notifications;
    constructor(prisma, activityLog, notifications) {
        this.prisma = prisma;
        this.activityLog = activityLog;
        this.notifications = notifications;
    }
    async list(user, organizationId) {
        await this.assertCanView(user, organizationId);
        return this.prisma.project.findMany({
            where: { organizationId },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async findOne(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        return this.findProjectOrThrow(organizationId, projectId, {
            goal: { select: { id: true, title: true, period: true, year: true } },
            milestones: { orderBy: { sortOrder: 'asc' } },
            tasks: {
                orderBy: { sortOrder: 'asc' },
                include: taskInclude,
            },
            portfolioProject: { select: { id: true, slug: true, status: true } },
        });
    }
    async create(user, organizationId, dto) {
        await this.assertCanContribute(user, organizationId);
        if (dto.goalId) {
            await this.assertGoalBelongsToOrganization(organizationId, dto.goalId);
        }
        const project = await this.prisma.project.create({
            data: {
                name: dto.name,
                description: dto.description,
                status: dto.status,
                startDate: dto.startDate ? new Date(dto.startDate) : undefined,
                targetLaunch: dto.targetLaunch ? new Date(dto.targetLaunch) : undefined,
                organizationId,
                goalId: dto.goalId ?? undefined,
            },
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'PROJECT',
            entityId: project.id,
            action: 'CREATED',
            summary: `Project "${project.name}" created`,
            actorId: user.id,
        });
        return project;
    }
    async update(user, organizationId, projectId, dto) {
        await this.assertCanContribute(user, organizationId);
        const existing = await this.findProjectOrThrow(organizationId, projectId);
        if (dto.goalId) {
            await this.assertGoalBelongsToOrganization(organizationId, dto.goalId);
        }
        const updated = await this.prisma.project.update({
            where: { id: projectId },
            data: {
                name: dto.name,
                description: dto.description,
                status: dto.status,
                startDate: dto.startDate ? new Date(dto.startDate) : undefined,
                targetLaunch: dto.targetLaunch ? new Date(dto.targetLaunch) : undefined,
                goalId: dto.goalId === null ? null : (dto.goalId ?? undefined),
            },
        });
        const statusChanged = dto.status && dto.status !== existing.status;
        await this.activityLog.record({
            organizationId,
            entityType: 'PROJECT',
            entityId: updated.id,
            action: statusChanged ? 'STATUS_CHANGED' : 'UPDATED',
            summary: statusChanged
                ? `Project "${updated.name}" status changed to ${updated.status}`
                : `Project "${updated.name}" updated`,
            actorId: user.id,
        });
        return updated;
    }
    async remove(user, organizationId, projectId) {
        await this.assertCanManageOwnerLevel(user, organizationId);
        const project = await this.findProjectOrThrow(organizationId, projectId);
        await this.prisma.project.delete({ where: { id: projectId } });
        await this.activityLog.record({
            organizationId,
            entityType: 'PROJECT',
            entityId: project.id,
            action: 'DELETED',
            summary: `Project "${project.name}" deleted`,
            actorId: user.id,
        });
        return { removed: true };
    }
    async createMilestone(user, organizationId, projectId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const sortOrder = await this.prisma.milestone.count({
            where: { projectId },
        });
        const milestone = await this.prisma.milestone.create({
            data: {
                name: dto.name,
                description: dto.description,
                status: dto.status,
                dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
                sortOrder,
                projectId,
            },
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'MILESTONE',
            entityId: milestone.id,
            action: 'CREATED',
            summary: `Milestone "${milestone.name}" created`,
            actorId: user.id,
        });
        return milestone;
    }
    async updateMilestone(user, organizationId, projectId, milestoneId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const existing = await this.assertMilestoneBelongsToProject(projectId, milestoneId);
        const updated = await this.prisma.milestone.update({
            where: { id: milestoneId },
            data: {
                name: dto.name,
                description: dto.description,
                status: dto.status,
                dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
            },
        });
        const statusChanged = dto.status && dto.status !== existing.status;
        await this.activityLog.record({
            organizationId,
            entityType: 'MILESTONE',
            entityId: updated.id,
            action: statusChanged ? 'STATUS_CHANGED' : 'UPDATED',
            summary: statusChanged
                ? `Milestone "${updated.name}" status changed to ${updated.status}`
                : `Milestone "${updated.name}" updated`,
            actorId: user.id,
        });
        return updated;
    }
    async removeMilestone(user, organizationId, projectId, milestoneId) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const existing = await this.assertMilestoneBelongsToProject(projectId, milestoneId);
        await this.prisma.milestone.delete({ where: { id: milestoneId } });
        await this.activityLog.record({
            organizationId,
            entityType: 'MILESTONE',
            entityId: milestoneId,
            action: 'DELETED',
            summary: `Milestone "${existing.name}" deleted`,
            actorId: user.id,
        });
        return { removed: true };
    }
    async createTask(user, organizationId, projectId, dto) {
        await this.assertCanContribute(user, organizationId);
        const project = await this.findProjectOrThrow(organizationId, projectId);
        if (dto.milestoneId) {
            await this.assertMilestoneBelongsToProject(projectId, dto.milestoneId);
        }
        if (dto.assigneeId) {
            await this.assertAssigneeIsMember(organizationId, dto.assigneeId);
        }
        const sortOrder = await this.prisma.task.count({ where: { projectId } });
        const task = await this.prisma.task.create({
            data: {
                title: dto.title,
                description: dto.description,
                status: dto.status,
                dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
                sortOrder,
                projectId,
                milestoneId: dto.milestoneId ?? undefined,
                assigneeId: dto.assigneeId ?? undefined,
                recurrenceRule: dto.recurrenceRule ?? undefined,
            },
            include: taskInclude,
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'TASK',
            entityId: task.id,
            action: 'CREATED',
            summary: `Task "${task.title}" created`,
            actorId: user.id,
        });
        if (dto.assigneeId) {
            await this.notifyAssignee(dto.assigneeId, user, project.name, task.title);
        }
        return task;
    }
    async updateTask(user, organizationId, projectId, taskId, dto) {
        await this.assertCanContribute(user, organizationId);
        const project = await this.findProjectOrThrow(organizationId, projectId);
        const existing = await this.assertTaskBelongsToProject(projectId, taskId);
        if (dto.milestoneId) {
            await this.assertMilestoneBelongsToProject(projectId, dto.milestoneId);
        }
        if (dto.assigneeId) {
            await this.assertAssigneeIsMember(organizationId, dto.assigneeId);
        }
        const updated = await this.prisma.task.update({
            where: { id: taskId },
            data: {
                title: dto.title,
                description: dto.description,
                status: dto.status,
                dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
                milestoneId: dto.milestoneId === null ? null : (dto.milestoneId ?? undefined),
                assigneeId: dto.assigneeId === null ? null : (dto.assigneeId ?? undefined),
                recurrenceRule: dto.recurrenceRule === null
                    ? null
                    : (dto.recurrenceRule ?? undefined),
            },
            include: taskInclude,
        });
        const statusChanged = dto.status && dto.status !== existing.status;
        await this.activityLog.record({
            organizationId,
            entityType: 'TASK',
            entityId: updated.id,
            action: statusChanged ? 'STATUS_CHANGED' : 'UPDATED',
            summary: statusChanged
                ? `Task "${updated.title}" status changed to ${updated.status}`
                : `Task "${updated.title}" updated`,
            actorId: user.id,
        });
        if (dto.assigneeId && dto.assigneeId !== existing.assigneeId) {
            await this.notifyAssignee(dto.assigneeId, user, project.name, updated.title);
        }
        let recurrenceChild;
        if (statusChanged && updated.status === 'DONE' && updated.recurrenceRule) {
            recurrenceChild = await this.generateNextOccurrence(organizationId, updated, user);
        }
        return recurrenceChild ? { ...updated, recurrenceChild } : updated;
    }
    async generateNextOccurrence(organizationId, task, user) {
        const existingChild = await this.prisma.task.findFirst({
            where: { recurrenceParentId: task.id },
        });
        if (existingChild)
            return undefined;
        const nextDueDate = new Date(task.dueDate ?? new Date());
        if (task.recurrenceRule === 'MONTHLY') {
            nextDueDate.setMonth(nextDueDate.getMonth() + 1);
        }
        else {
            nextDueDate.setDate(nextDueDate.getDate() + 7);
        }
        const sortOrder = await this.prisma.task.count({
            where: { projectId: task.projectId },
        });
        const created = await this.prisma.task.create({
            data: {
                title: task.title,
                description: task.description,
                status: 'TODO',
                dueDate: nextDueDate,
                sortOrder,
                projectId: task.projectId,
                milestoneId: task.milestoneId ?? undefined,
                assigneeId: task.assigneeId ?? undefined,
                recurrenceRule: task.recurrenceRule,
                recurrenceParentId: task.id,
            },
            include: taskInclude,
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'TASK',
            entityId: created.id,
            action: 'CREATED',
            summary: `Recurring task "${created.title}" created for ${nextDueDate.toDateString()}`,
            actorId: user.id,
        });
        return created;
    }
    async removeTask(user, organizationId, projectId, taskId) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const existing = await this.assertTaskBelongsToProject(projectId, taskId);
        await this.prisma.task.delete({ where: { id: taskId } });
        await this.activityLog.record({
            organizationId,
            entityType: 'TASK',
            entityId: taskId,
            action: 'DELETED',
            summary: `Task "${existing.title}" deleted`,
            actorId: user.id,
        });
        return { removed: true };
    }
    async getBudget(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        return this.prisma.budget.findUnique({ where: { projectId } });
    }
    async upsertBudget(user, organizationId, projectId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const existing = await this.prisma.budget.findUnique({
            where: { projectId },
        });
        const data = {
            currency: dto.currency,
            plannedAmount: dto.plannedAmount,
            approvedAmount: dto.approvedAmount,
            committedAmount: dto.committedAmount,
            actualAmount: dto.actualAmount,
            notes: dto.notes,
        };
        const budget = await this.prisma.budget.upsert({
            where: { projectId },
            create: { projectId, ...data },
            update: data,
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'BUDGET',
            entityId: budget.id,
            action: existing ? 'UPDATED' : 'CREATED',
            summary: existing ? 'Budget updated' : 'Budget created',
            actorId: user.id,
        });
        return budget;
    }
    async removeBudget(user, organizationId, projectId) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const budget = await this.prisma.budget.findUnique({
            where: { projectId },
        });
        if (!budget)
            throw new NotFoundException('Budget not found');
        await this.prisma.budget.delete({ where: { projectId } });
        await this.activityLog.record({
            organizationId,
            entityType: 'BUDGET',
            entityId: budget.id,
            action: 'DELETED',
            summary: 'Budget deleted',
            actorId: user.id,
        });
        return { removed: true };
    }
    async publishToPortfolio(user, organizationId, projectId) {
        this.assertIsStaff(user);
        const project = await this.findProjectOrThrow(organizationId, projectId);
        if (project.status !== 'COMPLETED') {
            throw new BadRequestException('Only completed projects can be published to the portfolio');
        }
        if (project.portfolioProjectId) {
            throw new BadRequestException('This project has already been published to the portfolio');
        }
        const [approvedAssetCount, approvedBriefCount] = await Promise.all([
            this.prisma.assetRevision.count({
                where: { status: 'APPROVED', projectAsset: { projectId } },
            }),
            this.prisma.creativeBrief.count({
                where: { status: 'APPROVED', projectId },
            }),
        ]);
        if (approvedAssetCount === 0 && approvedBriefCount === 0) {
            throw new BadRequestException('The project needs at least one approved asset or creative brief before publishing to the portfolio');
        }
        const slug = await this.uniquePortfolioSlug(this.slugify(project.name));
        const portfolioProject = await this.prisma.portfolioProject.create({
            data: {
                slug,
                status: 'DRAFT',
                completedAt: new Date(),
                translations: {
                    create: [
                        {
                            locale: 'EN',
                            title: project.name,
                            summary: project.description?.trim() ||
                                'A completed project delivered by WebInk Graphics.',
                        },
                    ],
                },
            },
        });
        await this.prisma.project.update({
            where: { id: projectId },
            data: { portfolioProjectId: portfolioProject.id },
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'PROJECT',
            entityId: projectId,
            action: 'UPDATED',
            summary: `Project published to the portfolio as a draft ("${slug}")`,
            actorId: user.id,
        });
        return { portfolioProject };
    }
    async listComments(user, organizationId, projectId, taskId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.assertTaskBelongsToProject(projectId, taskId);
        return this.prisma.taskComment.findMany({
            where: { taskId },
            include: { author: { select: { id: true, name: true } } },
            orderBy: { createdAt: 'asc' },
        });
    }
    async createComment(user, organizationId, projectId, taskId, dto) {
        await this.assertCanContribute(user, organizationId);
        const project = await this.findProjectOrThrow(organizationId, projectId);
        const task = await this.assertTaskBelongsToProject(projectId, taskId);
        const comment = await this.prisma.taskComment.create({
            data: { body: dto.body, taskId, authorId: user.id },
            include: { author: { select: { id: true, name: true } } },
        });
        if (task.assigneeId && task.assigneeId !== user.id) {
            const assignee = await this.prisma.user.findUnique({
                where: { id: task.assigneeId },
                select: { name: true, email: true },
            });
            if (assignee) {
                await this.notifications.notifyNewComment({
                    to: assignee.email,
                    assigneeName: assignee.name,
                    commenterName: user.name,
                    taskTitle: task.title,
                    projectName: project.name,
                    body: dto.body,
                });
            }
        }
        return comment;
    }
    async removeComment(user, organizationId, projectId, taskId, commentId) {
        const role = await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        await this.assertTaskBelongsToProject(projectId, taskId);
        const comment = await this.prisma.taskComment.findFirst({
            where: { id: commentId, taskId },
            select: { authorId: true },
        });
        if (!comment)
            throw new NotFoundException('Comment not found');
        const isAuthor = comment.authorId === user.id;
        const canModerate = role === 'STAFF' || MANAGE_ROLES.includes(role);
        if (!isAuthor && !canModerate) {
            throw new ForbiddenException('Only the author or an organization owner/manager can delete this comment');
        }
        await this.prisma.taskComment.delete({ where: { id: commentId } });
        return { removed: true };
    }
    async assertCanView(user, organizationId) {
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role)
            throw new NotFoundException('Organization not found');
    }
    async assertCanContribute(user, organizationId) {
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role)
            throw new NotFoundException('Organization not found');
        if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
            throw new ForbiddenException('Only contributors, managers, and owners can manage projects');
        }
        return role;
    }
    async assertCanManageOwnerLevel(user, organizationId) {
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role)
            throw new NotFoundException('Organization not found');
        if (role !== 'STAFF' && !MANAGE_ROLES.includes(role)) {
            throw new ForbiddenException('Only organization owners and managers can delete a project');
        }
    }
    assertIsStaff(user) {
        if (!isStaff(user)) {
            throw new ForbiddenException('Only WebInk staff can publish a project to the portfolio');
        }
    }
    slugify(value) {
        const slug = value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return slug || 'project';
    }
    async uniquePortfolioSlug(base) {
        let candidate = base;
        let suffix = 2;
        while (await this.prisma.portfolioProject.findUnique({
            where: { slug: candidate },
            select: { id: true },
        })) {
            candidate = `${base}-${suffix}`;
            suffix += 1;
        }
        return candidate;
    }
    async findProjectOrThrow(organizationId, projectId, include) {
        const project = await this.prisma.project.findFirst({
            where: { id: projectId, organizationId },
            include,
        });
        if (!project)
            throw new NotFoundException('Project not found');
        return project;
    }
    async assertMilestoneBelongsToProject(projectId, milestoneId) {
        const milestone = await this.prisma.milestone.findFirst({
            where: { id: milestoneId, projectId },
            select: { id: true, name: true, status: true },
        });
        if (!milestone)
            throw new NotFoundException('Milestone not found');
        return milestone;
    }
    async assertGoalBelongsToOrganization(organizationId, goalId) {
        const goal = await this.prisma.goal.findFirst({
            where: { id: goalId, organizationId },
            select: { id: true },
        });
        if (!goal)
            throw new NotFoundException('Goal not found');
    }
    async assertTaskBelongsToProject(projectId, taskId) {
        const task = await this.prisma.task.findFirst({
            where: { id: taskId, projectId },
            select: { id: true, title: true, status: true, assigneeId: true },
        });
        if (!task)
            throw new NotFoundException('Task not found');
        return task;
    }
    async assertAssigneeIsMember(organizationId, assigneeId) {
        const member = await this.prisma.organizationMembership.findFirst({
            where: { organizationId, userId: assigneeId },
            select: { id: true },
        });
        if (!member) {
            throw new BadRequestException('The assignee must be a member of this organization');
        }
    }
    async notifyAssignee(assigneeId, actor, projectName, taskTitle) {
        const assignee = await this.prisma.user.findUnique({
            where: { id: assigneeId },
            select: { name: true, email: true },
        });
        if (!assignee || assigneeId === actor.id)
            return;
        await this.notifications.notifyTaskAssigned({
            to: assignee.email,
            assigneeName: assignee.name,
            actorName: actor.name,
            taskTitle,
            projectName,
        });
    }
};
ProjectsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ActivityLogService,
        NotificationsService])
], ProjectsService);
export { ProjectsService };
//# sourceMappingURL=projects.service.js.map