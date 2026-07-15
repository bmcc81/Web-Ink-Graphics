import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { CampaignMetricsService } from './campaign-metrics.service';

describe('CampaignMetricsService', () => {
  const organizationId = 'organization-1';
  const projectId = 'project-1';
  const metricId = 'metric-1';
  const contributor: AuthUser = {
    id: 'user-contributor',
    email: 'contributor@example.com',
    name: 'Contributor',
    role: Role.CUSTOMER,
  };
  const viewer: AuthUser = {
    id: 'user-viewer',
    email: 'viewer@example.com',
    name: 'Viewer',
    role: Role.CUSTOMER,
  };

  const prisma = {
    project: { findFirst: jest.fn() },
    campaignMetricEntry: {
      findMany: jest.fn(),
      create: jest.fn(),
      findFirst: jest.fn(),
      delete: jest.fn(),
    },
    budget: { findUnique: jest.fn() },
    organizationMembership: { findUnique: jest.fn() },
  };
  const activityLog = { record: jest.fn() };
  let service: CampaignMetricsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new CampaignMetricsService(prisma as never, activityLog as never);
    prisma.project.findFirst.mockResolvedValue({ id: projectId });
  });

  describe('create', () => {
    it('blocks a viewer from logging a metric', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.create(viewer, organizationId, projectId, {
          metricType: 'LEADS',
          periodStart: '2026-01-01',
          periodEnd: '2026-01-31',
          actualValue: 10,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.campaignMetricEntry.create).not.toHaveBeenCalled();
    });

    it('rejects a period end before the period start', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);

      await expect(
        service.create(contributor, organizationId, projectId, {
          metricType: 'LEADS',
          periodStart: '2026-01-31',
          periodEnd: '2026-01-01',
          actualValue: 10,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.campaignMetricEntry.create).not.toHaveBeenCalled();
    });

    it('creates a metric entry and logs activity', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.campaignMetricEntry.create.mockResolvedValue({
        id: metricId,
        metricType: 'LEADS',
      });

      const result = await service.create(
        contributor,
        organizationId,
        projectId,
        {
          metricType: 'LEADS',
          periodStart: '2026-01-01',
          periodEnd: '2026-01-31',
          actualValue: 12,
          plannedValue: 15,
        },
      );

      expect(result).toEqual({ id: metricId, metricType: 'LEADS' });
      expect(activityLog.record).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('throws when the metric entry does not exist', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.campaignMetricEntry.findFirst.mockResolvedValue(null);

      await expect(
        service.remove(contributor, organizationId, projectId, metricId),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.campaignMetricEntry.delete).not.toHaveBeenCalled();
    });

    it('deletes an existing metric entry', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.campaignMetricEntry.findFirst.mockResolvedValue({
        id: metricId,
        metricType: 'LEADS',
      });

      await service.remove(contributor, organizationId, projectId, metricId);

      expect(prisma.campaignMetricEntry.delete).toHaveBeenCalledWith({
        where: { id: metricId },
      });
      expect(activityLog.record).toHaveBeenCalled();
    });
  });

  describe('list', () => {
    it('lets any member view logged metrics', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.campaignMetricEntry.findMany.mockResolvedValue([]);

      await expect(
        service.list(viewer, organizationId, projectId),
      ).resolves.toEqual([]);
    });
  });

  describe('summary', () => {
    it('aggregates actual vs planned totals per metric type and includes the budget', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.budget.findUnique.mockResolvedValue({
        currency: 'USD',
        plannedAmount: { toString: () => '1000' },
        approvedAmount: { toString: () => '1000' },
        committedAmount: { toString: () => '800' },
        actualAmount: { toString: () => '900' },
      });
      prisma.campaignMetricEntry.findMany.mockResolvedValue([
        {
          metricType: 'LEADS',
          actualValue: { toString: () => '10' },
          plannedValue: { toString: () => '8' },
        },
        {
          metricType: 'LEADS',
          actualValue: { toString: () => '5' },
          plannedValue: { toString: () => '8' },
        },
        {
          metricType: 'CLICKS',
          actualValue: { toString: () => '100' },
          plannedValue: null,
        },
      ]);

      const result = await service.summary(viewer, organizationId, projectId);

      expect(result.budget?.currency).toBe('USD');
      expect(result.budget?.variance).toBe(-100);
      expect(result.metrics).toEqual(
        expect.arrayContaining([
          {
            metricType: 'LEADS',
            actualTotal: 15,
            plannedTotal: 16,
            variance: -1,
            entryCount: 2,
          },
          {
            metricType: 'CLICKS',
            actualTotal: 100,
            plannedTotal: null,
            variance: null,
            entryCount: 1,
          },
        ]),
      );
    });

    it('returns a null budget when none exists', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.budget.findUnique.mockResolvedValue(null);
      prisma.campaignMetricEntry.findMany.mockResolvedValue([]);

      const result = await service.summary(viewer, organizationId, projectId);

      expect(result).toEqual({ budget: null, metrics: [] });
    });
  });
});
