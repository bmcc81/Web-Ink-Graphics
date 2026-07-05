"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const activity_log_service_1 = require("../activity/activity-log.service");
const organization_access_1 = require("../organizations/organization-access");
const prisma_service_1 = require("../prisma/prisma.service");
const taskInclude = {
    assignee: { select: { id: true, name: true } },
    _count: { select: { comments: true } },
};
let ProjectsService = class ProjectsService {
    prisma;
    activityLog;
    constructor(prisma, activityLog) {
        this.prisma = prisma;
        this.activityLog = activityLog;
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
        await this.findProjectOrThrow(organizationId, projectId);
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
        return task;
    }
    async updateTask(user, organizationId, projectId, taskId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
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
        return updated;
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
        await this.findProjectOrThrow(organizationId, projectId);
        await this.assertTaskBelongsToProject(projectId, taskId);
        return this.prisma.taskComment.create({
            data: { body: dto.body, taskId, authorId: user.id },
            include: { author: { select: { id: true, name: true } } },
        });
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
            throw new common_1.NotFoundException('Comment not found');
        const isAuthor = comment.authorId === user.id;
        const canModerate = role === 'STAFF' || organization_access_1.MANAGE_ROLES.includes(role);
        if (!isAuthor && !canModerate) {
            throw new common_1.ForbiddenException('Only the author or an organization owner/manager can delete this comment');
        }
        await this.prisma.taskComment.delete({ where: { id: commentId } });
        return { removed: true };
    }
    async assertCanView(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
    }
    async assertCanContribute(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.CONTRIBUTE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only contributors, managers, and owners can manage projects');
        }
        return role;
    }
    async assertCanManageOwnerLevel(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.MANAGE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only organization owners and managers can delete a project');
        }
    }
    async findProjectOrThrow(organizationId, projectId, include) {
        const project = await this.prisma.project.findFirst({
            where: { id: projectId, organizationId },
            include,
        });
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
    async assertMilestoneBelongsToProject(projectId, milestoneId) {
        const milestone = await this.prisma.milestone.findFirst({
            where: { id: milestoneId, projectId },
            select: { id: true, name: true, status: true },
        });
        if (!milestone)
            throw new common_1.NotFoundException('Milestone not found');
        return milestone;
    }
    async assertGoalBelongsToOrganization(organizationId, goalId) {
        const goal = await this.prisma.goal.findFirst({
            where: { id: goalId, organizationId },
            select: { id: true },
        });
        if (!goal)
            throw new common_1.NotFoundException('Goal not found');
    }
    async assertTaskBelongsToProject(projectId, taskId) {
        const task = await this.prisma.task.findFirst({
            where: { id: taskId, projectId },
            select: { id: true, title: true, status: true },
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found');
        return task;
    }
    async assertAssigneeIsMember(organizationId, assigneeId) {
        const member = await this.prisma.organizationMembership.findFirst({
            where: { organizationId, userId: assigneeId },
            select: { id: true },
        });
        if (!member) {
            throw new common_1.BadRequestException('The assignee must be a member of this organization');
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_log_service_1.ActivityLogService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map