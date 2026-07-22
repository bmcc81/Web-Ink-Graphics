var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { CONTRIBUTE_ROLES, resolveOrganizationRole, } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
let GoalsService = class GoalsService {
    prisma;
    activityLog;
    constructor(prisma, activityLog) {
        this.prisma = prisma;
        this.activityLog = activityLog;
    }
    async list(user, organizationId) {
        await this.assertCanView(user, organizationId);
        return this.prisma.goal.findMany({
            where: { organizationId },
            include: {
                projects: { select: { id: true, name: true, status: true } },
            },
            orderBy: [{ year: 'desc' }, { period: 'asc' }],
        });
    }
    async findOne(user, organizationId, goalId) {
        await this.assertCanView(user, organizationId);
        return this.findGoalOrThrow(organizationId, goalId, {
            projects: { select: { id: true, name: true, status: true } },
        });
    }
    async create(user, organizationId, dto) {
        await this.assertCanContribute(user, organizationId);
        const goal = await this.prisma.goal.create({
            data: {
                title: dto.title,
                description: dto.description,
                period: dto.period,
                year: dto.year,
                status: dto.status,
                organizationId,
            },
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'GOAL',
            entityId: goal.id,
            action: 'CREATED',
            summary: `Goal "${goal.title}" created`,
            actorId: user.id,
        });
        return goal;
    }
    async update(user, organizationId, goalId, dto) {
        await this.assertCanContribute(user, organizationId);
        const existing = await this.findGoalOrThrow(organizationId, goalId);
        const updated = await this.prisma.goal.update({
            where: { id: goalId },
            data: {
                title: dto.title,
                description: dto.description,
                period: dto.period,
                year: dto.year,
                status: dto.status,
            },
        });
        const statusChanged = dto.status && dto.status !== existing.status;
        await this.activityLog.record({
            organizationId,
            entityType: 'GOAL',
            entityId: updated.id,
            action: statusChanged ? 'STATUS_CHANGED' : 'UPDATED',
            summary: statusChanged
                ? `Goal "${updated.title}" status changed to ${updated.status}`
                : `Goal "${updated.title}" updated`,
            actorId: user.id,
        });
        return updated;
    }
    async remove(user, organizationId, goalId) {
        await this.assertCanContribute(user, organizationId);
        const goal = await this.findGoalOrThrow(organizationId, goalId);
        await this.prisma.goal.delete({ where: { id: goalId } });
        await this.activityLog.record({
            organizationId,
            entityType: 'GOAL',
            entityId: goalId,
            action: 'DELETED',
            summary: `Goal "${goal.title}" deleted`,
            actorId: user.id,
        });
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
            throw new ForbiddenException('Only contributors, managers, and owners can manage goals');
        }
        return role;
    }
    async findGoalOrThrow(organizationId, goalId, include) {
        const goal = await this.prisma.goal.findFirst({
            where: { id: goalId, organizationId },
            include,
        });
        if (!goal)
            throw new NotFoundException('Goal not found');
        return goal;
    }
};
GoalsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ActivityLogService])
], GoalsService);
export { GoalsService };
//# sourceMappingURL=goals.service.js.map