import { NotFoundException } from '@nestjs/common';
import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  const prisma = {
    client: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    discoveryBrief: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    generatedPrompt: {
      create: jest.fn(),
    },
    briefAttachment: {
      create: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  };
  const media = {
    createDownload: jest.fn(),
    deleteDiscoveryObject: jest.fn(),
  };

  let service: ClientsService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ClientsService(prisma as never, media as never);
  });

  it('returns a clear not-found error before updating a missing client', async () => {
    prisma.client.findUnique.mockResolvedValue(null);

    await expect(
      service.update('missing', { companyName: 'Updated client' }),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(prisma.client.update).not.toHaveBeenCalled();
  });

  it('returns a clear not-found error before adding a brief to a missing client', async () => {
    prisma.client.findUnique.mockResolvedValue(null);

    await expect(
      service.createBrief('missing', {
        title: 'Website discovery',
        projectType: 'New website',
      }),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(prisma.discoveryBrief.create).not.toHaveBeenCalled();
  });

  it('generates a structured prompt and excludes answered questions', async () => {
    prisma.discoveryBrief.findUnique.mockResolvedValue({
      id: 'brief-1',
      client: { companyName: 'Acme Inc.', industry: 'Manufacturing' },
      requirements: [
        {
          priority: 'MUST',
          category: 'FUNCTIONAL',
          title: 'Quote request form',
          details: 'Send requests to sales',
          acceptanceCriteria: 'A valid request is stored and emailed',
        },
      ],
      openQuestions: [
        {
          question: 'Who supplies final copy?',
          answer: null,
          status: 'OPEN',
        },
        {
          question: 'What is the launch date?',
          answer: 'September',
          status: 'ANSWERED',
        },
      ],
      generatedPrompts: [],
      attachments: [],
      projectType: 'Website redesign',
      projectSummary: 'Improve qualified inquiries',
      motivation: null,
      currentProblems: null,
      successDefinition: null,
      primaryAudience: null,
      secondaryAudiences: null,
      audienceProblems: null,
      commonObjections: null,
      desiredAction: null,
      designDirection: null,
      likedSites: null,
      dislikedSites: null,
      brandAssets: null,
      seoTargets: null,
      targetLocations: null,
      currentPlatform: null,
      integrations: null,
      hostingProvider: null,
      domainRegistrar: null,
      compliance: null,
      targetLaunch: null,
      budget: null,
      assumptions: null,
      outOfScope: null,
      rawNotes: null,
    });
    prisma.generatedPrompt.create.mockImplementation(({ data }) =>
      Promise.resolve({ id: 'prompt-1', ...data }),
    );

    const prompt = await service.generatePrompt('brief-1');

    expect(prompt.content).toContain('Acme Inc. — Manufacturing');
    expect(prompt.content).toContain('[MUST] [FUNCTIONAL] Quote request form');
    expect(prompt.content).toContain('Who supplies final copy?');
    expect(prompt.content).not.toContain('What is the launch date?');
    expect(prompt.content).toContain(
      'Not provided — clarify before implementation.',
    );
  });

  it('adapts prompt instructions to the requested output', async () => {
    prisma.discoveryBrief.findUnique.mockResolvedValue({
      id: 'brief-2',
      client: { companyName: 'Acme Inc.', industry: null },
      requirements: [],
      openQuestions: [],
      generatedPrompts: [],
      attachments: [],
      projectType: 'Website redesign',
      projectSummary: null,
      motivation: null,
      currentProblems: null,
      successDefinition: null,
      primaryAudience: null,
      secondaryAudiences: null,
      audienceProblems: null,
      commonObjections: null,
      desiredAction: null,
      designDirection: null,
      likedSites: null,
      dislikedSites: null,
      brandAssets: null,
      seoTargets: null,
      targetLocations: null,
      currentPlatform: null,
      integrations: null,
      hostingProvider: null,
      domainRegistrar: null,
      compliance: null,
      targetLaunch: null,
      budget: null,
      assumptions: null,
      outOfScope: null,
      rawNotes: null,
    });
    prisma.generatedPrompt.create.mockImplementation(({ data }) =>
      Promise.resolve({ id: 'prompt-2', ...data }),
    );

    const prompt = await service.generatePrompt('brief-2', 'PROPOSAL');

    expect(prompt.content).toContain('# Client Proposal Brief');
    expect(prompt.content).toContain(
      'Do not invent prices, dates or commitments.',
    );
    expect(prompt.content).not.toContain('Inspect the existing repository');
  });

  it('preserves requirement identities when updating a brief', async () => {
    prisma.discoveryBrief.findUnique.mockResolvedValue({
      id: 'brief-3',
      approvedAt: null,
    });
    prisma.discoveryBrief.update.mockResolvedValue({ id: 'brief-3' });

    await service.updateBrief('brief-3', {
      requirements: [
        {
          id: 'requirement-1',
          referenceCode: 'REQ-001',
          category: 'FEATURE',
          priority: 'MUST',
          status: 'IN_PROGRESS',
          title: 'Quote form',
        },
        {
          category: 'SEO',
          priority: 'SHOULD',
          status: 'PLANNED',
          title: 'Local landing page',
        },
      ],
    });

    type BriefUpdateCall = {
      data: {
        requirements: {
          deleteMany: object;
          update: object[];
          create: object[];
        };
      };
    };
    const updateCalls = prisma.discoveryBrief.update.mock
      .calls as unknown as Array<[BriefUpdateCall]>;
    const update = updateCalls[0][0];
    expect(update.data.requirements.deleteMany).toEqual({
      id: { notIn: ['requirement-1'] },
    });
    expect(update.data.requirements.update[0]).toMatchObject({
      where: { id: 'requirement-1' },
      data: { referenceCode: 'REQ-001', status: 'IN_PROGRESS' },
    });
    expect(update.data.requirements.create[0]).toMatchObject({
      referenceCode: 'REQ-002',
      status: 'PLANNED',
    });
  });
});
