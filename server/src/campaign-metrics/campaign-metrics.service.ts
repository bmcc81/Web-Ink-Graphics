import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import {
  CONTRIBUTE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { CreateCampaignMetricDto } from './dto/create-campaign-metric.dto.js';

const metricInclude = {
  recordedBy: { select: { id: true, name: true } },
};

@Injectable()
export class CampaignMetricsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activityLog: ActivityLogService,
  ) {}

  async list(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    return this.prisma.campaignMetricEntry.findMany({
      where: { projectId },
      include: metricInclude,
      orderBy: { periodStart: 'desc' },
    });
  }

  async create(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    dto: CreateCampaignMetricDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    if (new Date(dto.periodEnd) < new Date(dto.periodStart)) {
      throw new BadRequestException(
        'The period end date cannot be before the period start date',
      );
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

  async remove(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    metricId: string,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const entry = await this.prisma.campaignMetricEntry.findFirst({
      where: { id: metricId, projectId },
    });
    if (!entry) throw new NotFoundException('Campaign metric entry not found');
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

  async summary(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const [budget, entries] = await Promise.all([
      this.prisma.budget.findUnique({ where: { projectId } }),
      this.prisma.campaignMetricEntry.findMany({ where: { projectId } }),
    ]);

    const grouped = new Map<
      string,
      { actualTotal: number; plannedTotal: number | null; entryCount: number }
    >();
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
      variance:
        totals.plannedTotal !== null
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
          variance:
            budget.plannedAmount !== null && budget.actualAmount !== null
              ? Number(budget.actualAmount.toString()) -
                Number(budget.plannedAmount.toString())
              : null,
        }
      : null;

    return { budget: budgetSummary, metrics };
  }

  private async assertCanView(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
  }

  private async assertCanContribute(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only contributors, managers, and owners can log campaign metrics',
      );
    }
    return role;
  }

  private async findProjectOrThrow(organizationId: string, projectId: string) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: { id: true },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }
}
