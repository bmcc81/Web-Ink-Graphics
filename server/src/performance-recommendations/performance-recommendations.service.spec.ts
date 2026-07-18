import {
  BadRequestException,
  ForbiddenException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { PerformanceRecommendationsService } from './performance-recommendations.service';

const mockCreate = jest.fn();
jest.mock('@anthropic-ai/sdk', () => {
  return jest.fn().mockImplementation(() => ({
    messages: { create: mockCreate },
  }));
});

function structuredResponse(content: Record<string, unknown>) {
  return {
    content: [{ type: 'text', text: JSON.stringify(content) }],
    usage: { input_tokens: 300, output_tokens: 200 },
  };
}

function recommendationContent(overrides: Record<string, unknown> = {}) {
  return {
    summary: 'Leads are tracking behind plan while spend is on budget.',
    dataSummary: 'Based on 2 logged metrics and current budget data.',
    confidenceScore: 55,
    confidenceNotes: 'Limited history; only one month of data logged.',
    items: [
      {
        title: 'Increase local SEO investment',
        rationale: 'Leads are below target while spend is on budget.',
        priority: 'HIGH',
      },
    ],
    ...overrides,
  };
}

describe('PerformanceRecommendationsService', () => {
  const organizationId = 'organization-1';
  const projectId = 'project-1';
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
    performanceRecommendation: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
    organizationMembership: { findUnique: jest.fn() },
  };
  const config = { get: jest.fn() };
  const activityLog = { record: jest.fn() };
  const aiUsage = { assertWithinCap: jest.fn(), record: jest.fn() };
  const campaignMetrics = { summary: jest.fn() };
  let service: PerformanceRecommendationsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new PerformanceRecommendationsService(
      prisma as never,
      config as never,
      activityLog as never,
      aiUsage as never,
      campaignMetrics as never,
    );
    prisma.project.findFirst.mockResolvedValue({
      name: 'Spring Launch',
      description: null,
      status: 'PRODUCTION',
      goal: null,
    });
  });

  describe('generate', () => {
    it('blocks a viewer from generating recommendations', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.generate(viewer, organizationId, projectId),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('fails clearly when no Anthropic API key is configured', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue(undefined);

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(ServiceUnavailableException);
      expect(campaignMetrics.summary).not.toHaveBeenCalled();
    });

    it('rejects generation when there is no budget or logged metrics', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      campaignMetrics.summary.mockResolvedValue({ budget: null, metrics: [] });

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(aiUsage.assertWithinCap).not.toHaveBeenCalled();
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('blocks generation once the monthly usage cap is reached', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      campaignMetrics.summary.mockResolvedValue({
        budget: {
          currency: 'USD',
          plannedAmount: '100',
          approvedAmount: null,
          committedAmount: null,
          actualAmount: '90',
          variance: -10,
        },
        metrics: [],
      });
      aiUsage.assertWithinCap.mockRejectedValue(
        new ForbiddenException('cap reached'),
      );

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('generates recommendations, clamps confidence, and records usage', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      campaignMetrics.summary.mockResolvedValue({
        budget: null,
        metrics: [
          {
            metricType: 'LEADS',
            actualTotal: 10,
            plannedTotal: 20,
            variance: -10,
            entryCount: 2,
          },
        ],
      });
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(
        structuredResponse(recommendationContent({ confidenceScore: 142 })),
      );
      prisma.performanceRecommendation.create.mockResolvedValue({
        id: 'rec-1',
      });

      const result = await service.generate(
        contributor,
        organizationId,
        projectId,
      );

      expect(result).toEqual({ id: 'rec-1' });
      expect(aiUsage.record).toHaveBeenCalledWith(
        organizationId,
        contributor,
        'PERFORMANCE_RECOMMENDATIONS',
        'claude-haiku-4-5',
        300,
        200,
      );
      const createCalls = prisma.performanceRecommendation.create.mock
        .calls as unknown as Array<
        [
          {
            data: {
              confidenceScore: number;
              items: {
                create: Array<{
                  title: string;
                  rationale: string;
                  priority: string;
                  sortOrder: number;
                }>;
              };
            };
          },
        ]
      >;
      expect(createCalls[0][0].data.confidenceScore).toBe(100);
      expect(createCalls[0][0].data.items.create).toEqual([
        {
          title: 'Increase local SEO investment',
          rationale: 'Leads are below target while spend is on budget.',
          priority: 'HIGH',
          sortOrder: 0,
        },
      ]);
      expect(activityLog.record).toHaveBeenCalled();
    });

    it('defaults an invalid priority to MEDIUM', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      campaignMetrics.summary.mockResolvedValue({
        budget: null,
        metrics: [
          {
            metricType: 'LEADS',
            actualTotal: 10,
            plannedTotal: 20,
            variance: -10,
            entryCount: 2,
          },
        ],
      });
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(
        structuredResponse(
          recommendationContent({
            items: [
              {
                title: 'Test',
                rationale: 'Test rationale',
                priority: 'URGENT',
              },
            ],
          }),
        ),
      );
      prisma.performanceRecommendation.create.mockResolvedValue({
        id: 'rec-2',
      });

      await service.generate(contributor, organizationId, projectId);

      const createCalls = prisma.performanceRecommendation.create.mock
        .calls as unknown as Array<
        [{ data: { items: { create: Array<{ priority: string }> } } }]
      >;
      expect(createCalls[0][0].data.items.create[0].priority).toBe('MEDIUM');
    });

    it('wraps Claude API failures in a friendly error', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      campaignMetrics.summary.mockResolvedValue({
        budget: null,
        metrics: [
          {
            metricType: 'LEADS',
            actualTotal: 10,
            plannedTotal: 20,
            variance: -10,
            entryCount: 2,
          },
        ],
      });
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockRejectedValue(new Error('network boom'));

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(ServiceUnavailableException);
      expect(prisma.performanceRecommendation.create).not.toHaveBeenCalled();
    });
  });

  describe('list', () => {
    it('lets any member view generated recommendations', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.performanceRecommendation.findMany.mockResolvedValue([]);

      await expect(
        service.list(viewer, organizationId, projectId),
      ).resolves.toEqual([]);
    });
  });
});
