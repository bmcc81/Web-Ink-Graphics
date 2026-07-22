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
import { CONTRIBUTE_ROLES, resolveOrganizationRole, } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
const metricInclude = {
    recordedBy: { select: { id: true, name: true } },
};
let CampaignMetricsService = class CampaignMetricsService {
    prisma;
    activityLog;
    constructor(prisma, activityLog) {
        this.prisma = prisma;
        this.activityLog = activityLog;
    }
    async list(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        return this.prisma.campaignMetricEntry.findMany({
            where: { projectId },
            include: metricInclude,
            orderBy: { periodStart: 'desc' },
        });
    }
    async create(user, organizationId, projectId, dto) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        if (new Date(dto.periodEnd) < new Date(dto.periodStart)) {
            throw new BadRequestException('The period end date cannot be before the period start date');
        }
        const entry = await this.prisma.campaignMetricEntry.create({
            data: {
                projectId,
                metricType: dto.metricType,
                periodStart: new Date(dto.periodStart),
                periodEnd: new Date(dto.periodEnd),
                actualValue: dto.actualValue,
                plannedValue: dto.plannedValue,
                notes: dto.notes,
                recordedById: user.id,
            },
            include: metricInclude,
        });
        await this.activityLog.record({
            organizationId,
            entityType: 'CAMPAIGN_METRIC',
            entityId: entry.id,
            action: 'CREATED',
            summary: `${entry.metricType.replaceAll('_', ' ')} metric logged`,
            actorId: user.id,
        });
        return entry;
    }
    async remove(user, organizationId, projectId, metricId) {
        await this.assertCanContribute(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const entry = await this.prisma.campaignMetricEntry.findFirst({
            where: { id: metricId, projectId },
        });
        if (!entry)
            throw new NotFoundException('Campaign metric entry not found');
        await this.prisma.campaignMetricEntry.delete({ where: { id: metricId } });
        await this.activityLog.record({
            organizationId,
            entityType: 'CAMPAIGN_METRIC',
            entityId: metricId,
            action: 'DELETED',
            summary: `${entry.metricType.replaceAll('_', ' ')} metric removed`,
            actorId: user.id,
        });
    }
    async summary(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        const [budget, entries] = await Promise.all([
            this.prisma.budget.findUnique({ where: { projectId } }),
            this.prisma.campaignMetricEntry.findMany({ where: { projectId } }),
        ]);
        const grouped = new Map();
        for (const entry of entries) {
            const current = grouped.get(entry.metricType) ?? {
                actualTotal: 0,
                plannedTotal: entry.plannedValue !== null ? 0 : null,
                entryCount: 0,
            };
            current.actualTotal += Number(entry.actualValue.toString());
            if (entry.plannedValue !== null) {
                current.plannedTotal =
                    (current.plannedTotal ?? 0) + Number(entry.plannedValue.toString());
            }
            current.entryCount += 1;
            grouped.set(entry.metricType, current);
        }
        const metrics = [...grouped.entries()].map(([metricType, totals]) => ({
            metricType,
            actualTotal: totals.actualTotal,
            plannedTotal: totals.plannedTotal,
            variance: totals.plannedTotal !== null
                ? totals.actualTotal - totals.plannedTotal
                : null,
            entryCount: totals.entryCount,
        }));
        const budgetSummary = budget
            ? {
                currency: budget.currency,
                plannedAmount: budget.plannedAmount,
                approvedAmount: budget.approvedAmount,
                committedAmount: budget.committedAmount,
                actualAmount: budget.actualAmount,
                variance: budget.plannedAmount !== null && budget.actualAmount !== null
                    ? Number(budget.actualAmount.toString()) -
                        Number(budget.plannedAmount.toString())
                    : null,
            }
            : null;
        return { budget: budgetSummary, metrics };
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
            throw new ForbiddenException('Only contributors, managers, and owners can log campaign metrics');
        }
        return role;
    }
    async findProjectOrThrow(organizationId, projectId) {
        const project = await this.prisma.project.findFirst({
            where: { id: projectId, organizationId },
            select: { id: true },
        });
        if (!project)
            throw new NotFoundException('Project not found');
        return project;
    }
};
CampaignMetricsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ActivityLogService])
], CampaignMetricsService);
export { CampaignMetricsService };
//# sourceMappingURL=campaign-metrics.service.js.map