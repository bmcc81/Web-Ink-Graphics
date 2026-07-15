import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { PlanDraftsService } from './plan-drafts.service';

const mockCreate = jest.fn();
jest.mock('@anthropic-ai/sdk', () => {
  return jest.fn().mockImplementation(() => ({
    messages: { create: mockCreate },
  }));
});

function structuredResponse(content: Record<string, unknown>) {
  return {
    content: [{ type: 'text', text: JSON.stringify(content) }],
    usage: { input_tokens: 800, output_tokens: 400 },
  };
}

function planContent(overrides: Record<string, unknown> = {}) {
  return {
    goalTitle: 'Grow qualified leads',
    goalDescription: 'Increase inbound leads from the new site.',
    goalPeriod: 'Q3',
    goalYear: 2026,
    summary: 'A starter plan to launch the new marketing site.',
    risks: 'Missing final brand assets\nNo analytics access yet',
    contentIdeas: 'Behind-the-scenes launch teaser\nCustomer FAQ post',
    readinessScore: 70,
    readinessNotes: 'Missing budget confirmation.',
    projects: [
      {
        name: 'Website relaunch',
        description: 'Rebuild the marketing site.',
        milestones: [
          {
            name: 'Discovery and wireframes',
            tasks: ['Draft sitemap', 'Review wireframes with client'],
          },
        ],
      },
    ],
    channelRecommendations: [
      { channel: 'Local SEO', rationale: 'Captures nearby search intent.' },
      { channel: 'Email', rationale: 'Reaches existing customers directly.' },
    ],
    ...overrides,
  };
}

describe('PlanDraftsService', () => {
  const briefId = 'brief-1';
  const organizationId = 'organization-1';
  const planDraftId = 'plan-draft-1';
  const staffUser: AuthUser = {
    id: 'user-staff',
    email: 'staff@example.com',
    name: 'Staff',
    role: Role.ADMIN,
  };
  const customerUser: AuthUser = {
    id: 'user-customer',
    email: 'customer@example.com',
    name: 'Customer',
    role: Role.CUSTOMER,
  };

  const prisma = {
    discoveryBrief: { findFirst: jest.fn() },
    planDraft: {
      findMany: jest.fn(),
      create: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    briefQuestion: {
      count: jest.fn(),
      create: jest.fn(),
    },
    organizationMembership: { findUnique: jest.fn() },
  };
  const config = { get: jest.fn() };
  const activityLog = { record: jest.fn() };
  const aiUsage = { assertWithinCap: jest.fn(), record: jest.fn() };
  const goals = { create: jest.fn() };
  const projects = {
    create: jest.fn(),
    createMilestone: jest.fn(),
    createTask: jest.fn(),
  };
  let service: PlanDraftsService;

  function briefRecord() {
    return {
      id: briefId,
      title: 'Acme Co. website',
      projectType: 'Website',
      projectSummary: null,
      motivation: null,
      currentProblems: null,
      successDefinition: null,
      targetLaunch: null,
      budget: null,
      primaryAudience: null,
      secondaryAudiences: null,
      audienceProblems: null,
      desiredAction: null,
      designDirection: null,
      seoTargets: null,
      targetLocations: null,
      currentPlatform: null,
      integrations: null,
      compliance: null,
      assumptions: null,
      outOfScope: null,
      client: { id: 'client-1', organizationId },
      requirements: [],
      openQuestions: [],
    };
  }

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.briefQuestion.count.mockResolvedValue(0);
    prisma.briefQuestion.create.mockImplementation(
      ({ data }: { data: Record<string, unknown> }) =>
        Promise.resolve({ id: 'question-generated', ...data }),
    );
    service = new PlanDraftsService(
      prisma as never,
      config as never,
      activityLog as never,
      aiUsage as never,
      goals as never,
      projects as never,
    );
  });

  describe('generate', () => {
    it('blocks a user without brief access', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(null);

      await expect(
        service.generate(customerUser, briefId),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('fails clearly when no Anthropic API key is configured', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      config.get.mockReturnValue(undefined);

      await expect(service.generate(staffUser, briefId)).rejects.toBeInstanceOf(
        ServiceUnavailableException,
      );
      expect(aiUsage.assertWithinCap).not.toHaveBeenCalled();
    });

    it('blocks generation once the monthly usage cap is reached', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      config.get.mockReturnValue('fake-api-key');
      aiUsage.assertWithinCap.mockRejectedValue(
        new ForbiddenException('cap reached'),
      );

      await expect(service.generate(staffUser, briefId)).rejects.toBeInstanceOf(
        ForbiddenException,
      );
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('generates a plan draft, clamps readiness/year, and records usage', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      config.get.mockReturnValue('fake-api-key');
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(
        structuredResponse(
          planContent({ readinessScore: 142, goalYear: 3200 }),
        ),
      );
      prisma.planDraft.create.mockResolvedValue({ id: planDraftId });

      const result = await service.generate(staffUser, briefId);

      expect(result.planDraft).toEqual({ id: planDraftId });
      expect(aiUsage.record).toHaveBeenCalledWith(
        organizationId,
        staffUser,
        'PLANNING_COPILOT',
        'claude-haiku-4-5',
        800,
        400,
      );
      const createCalls = prisma.planDraft.create.mock
        .calls as unknown as Array<
        [
          {
            data: {
              readinessScore: number;
              goalYear: number;
              contentIdeas: string;
              channelRecommendations: {
                create: Array<{ channel: string; rationale: string }>;
              };
            };
          },
        ]
      >;
      expect(createCalls[0][0].data.readinessScore).toBe(100);
      expect(createCalls[0][0].data.goalYear).toBe(2100);
      expect(createCalls[0][0].data.contentIdeas).toBe(
        'Behind-the-scenes launch teaser\nCustomer FAQ post',
      );
      expect(createCalls[0][0].data.channelRecommendations.create).toEqual([
        {
          channel: 'Local SEO',
          rationale: 'Captures nearby search intent.',
          sortOrder: 0,
        },
        {
          channel: 'Email',
          rationale: 'Reaches existing customers directly.',
          sortOrder: 1,
        },
      ]);
      expect(activityLog.record).toHaveBeenCalled();
    });

    it('defaults to an empty channel recommendation list when Claude omits it', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      config.get.mockReturnValue('fake-api-key');
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      const withoutChannels = { ...planContent() };
      delete withoutChannels.channelRecommendations;
      mockCreate.mockResolvedValue(structuredResponse(withoutChannels));
      prisma.planDraft.create.mockResolvedValue({ id: planDraftId });

      await service.generate(staffUser, briefId);

      const createCalls = prisma.planDraft.create.mock
        .calls as unknown as Array<
        [{ data: { channelRecommendations: { create: unknown[] } } }]
      >;
      expect(createCalls[0][0].data.channelRecommendations.create).toEqual([]);
    });

    it('creates deduped follow-up questions from the risks list', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue({
        ...briefRecord(),
        openQuestions: [{ question: 'No analytics access yet' }],
      });
      config.get.mockReturnValue('fake-api-key');
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(structuredResponse(planContent()));
      prisma.planDraft.create.mockResolvedValue({ id: planDraftId });
      prisma.briefQuestion.count.mockResolvedValue(3);

      const result = await service.generate(staffUser, briefId);

      expect(prisma.briefQuestion.create).toHaveBeenCalledTimes(1);
      expect(prisma.briefQuestion.create).toHaveBeenCalledWith({
        data: {
          briefId,
          question: 'Missing final brand assets',
          status: 'OPEN',
          priority: 'HIGH',
          sortOrder: 3,
        },
      });
      expect(result.followUpQuestions).toHaveLength(1);
    });

    it('defaults an invalid goal period to ANNUAL', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      config.get.mockReturnValue('fake-api-key');
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(
        structuredResponse(planContent({ goalPeriod: 'NEXT_YEAR' })),
      );
      prisma.planDraft.create.mockResolvedValue({ id: planDraftId });

      await service.generate(staffUser, briefId);

      const createCalls = prisma.planDraft.create.mock
        .calls as unknown as Array<[{ data: { goalPeriod: string } }]>;
      expect(createCalls[0][0].data.goalPeriod).toBe('ANNUAL');
    });

    it('wraps Claude API failures in a friendly error', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      config.get.mockReturnValue('fake-api-key');
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockRejectedValue(new Error('network boom'));

      await expect(service.generate(staffUser, briefId)).rejects.toBeInstanceOf(
        ServiceUnavailableException,
      );
      expect(prisma.planDraft.create).not.toHaveBeenCalled();
    });
  });

  describe('list', () => {
    it('lists plan drafts for a brief the user can view', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      prisma.planDraft.findMany.mockResolvedValue([]);

      await expect(service.list(staffUser, briefId)).resolves.toEqual([]);
    });
  });

  describe('apply', () => {
    it('blocks a non-manager from applying', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      prisma.organizationMembership.findUnique.mockResolvedValue({
        role: 'CONTRIBUTOR',
      });

      await expect(
        service.apply(customerUser, briefId, planDraftId),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(goals.create).not.toHaveBeenCalled();
    });

    it('throws when the plan draft does not exist', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      prisma.planDraft.findFirst.mockResolvedValue(null);

      await expect(
        service.apply(staffUser, briefId, planDraftId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('blocks re-applying an already-applied plan draft', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      prisma.planDraft.findFirst.mockResolvedValue({
        id: planDraftId,
        status: 'APPLIED',
        projects: [],
      });

      await expect(
        service.apply(staffUser, briefId, planDraftId),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(goals.create).not.toHaveBeenCalled();
    });

    it('creates the goal, projects, milestones, and tasks from the draft', async () => {
      prisma.discoveryBrief.findFirst.mockResolvedValue(briefRecord());
      prisma.planDraft.findFirst.mockResolvedValue({
        id: planDraftId,
        status: 'DRAFT',
        goalTitle: 'Grow qualified leads',
        goalDescription: 'Increase inbound leads.',
        goalPeriod: 'Q3',
        goalYear: 2026,
        projects: [
          {
            name: 'Website relaunch',
            description: 'Rebuild the site.',
            milestones: [
              {
                name: 'Discovery',
                tasks: ['Draft sitemap', '  ', 'Review wireframes'],
              },
            ],
          },
        ],
      });
      goals.create.mockResolvedValue({
        id: 'goal-1',
        title: 'Grow qualified leads',
      });
      projects.create.mockResolvedValue({ id: 'project-1' });
      projects.createMilestone.mockResolvedValue({ id: 'milestone-1' });
      projects.createTask.mockResolvedValue({ id: 'task-1' });
      prisma.planDraft.update.mockResolvedValue({
        id: planDraftId,
        status: 'APPLIED',
      });

      const result = await service.apply(staffUser, briefId, planDraftId);

      expect(goals.create).toHaveBeenCalledWith(staffUser, organizationId, {
        title: 'Grow qualified leads',
        description: 'Increase inbound leads.',
        period: 'Q3',
        year: 2026,
      });
      expect(projects.create).toHaveBeenCalledWith(staffUser, organizationId, {
        name: 'Website relaunch',
        description: 'Rebuild the site.',
        goalId: 'goal-1',
      });
      expect(projects.createMilestone).toHaveBeenCalledWith(
        staffUser,
        organizationId,
        'project-1',
        { name: 'Discovery' },
      );
      expect(projects.createTask).toHaveBeenCalledTimes(2);
      expect(projects.createTask).toHaveBeenNthCalledWith(
        1,
        staffUser,
        organizationId,
        'project-1',
        { title: 'Draft sitemap', milestoneId: 'milestone-1' },
      );
      expect(projects.createTask).toHaveBeenNthCalledWith(
        2,
        staffUser,
        organizationId,
        'project-1',
        { title: 'Review wireframes', milestoneId: 'milestone-1' },
      );
      expect(result).toEqual({
        planDraft: { id: planDraftId, status: 'APPLIED' },
        goalId: 'goal-1',
      });
      expect(activityLog.record).toHaveBeenCalled();
    });
  });
});
