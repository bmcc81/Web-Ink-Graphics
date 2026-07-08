import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { CreativeBriefsService } from './creative-briefs.service';

const mockCreate = jest.fn();
jest.mock('@anthropic-ai/sdk', () => {
  return jest.fn().mockImplementation(() => ({
    messages: { create: mockCreate },
  }));
});

function structuredResponse(content: Record<string, unknown>) {
  return {
    content: [{ type: 'text', text: JSON.stringify(content) }],
    usage: { input_tokens: 500, output_tokens: 150 },
  };
}

describe('CreativeBriefsService', () => {
  const organizationId = 'organization-1';
  const projectId = 'project-1';
  const briefId = 'brief-1';
  const contributor: AuthUser = {
    id: 'user-contributor',
    email: 'contributor@example.com',
    name: 'Contributor',
    role: Role.CUSTOMER,
  };
  const manager: AuthUser = {
    id: 'user-manager',
    email: 'manager@example.com',
    name: 'Manager',
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
    creativeBrief: {
      findMany: jest.fn(),
      create: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    discoveryBrief: { findFirst: jest.fn() },
    organizationMembership: { findUnique: jest.fn() },
  };
  const config = { get: jest.fn() };
  const activityLog = { record: jest.fn() };
  const aiUsage = { assertWithinCap: jest.fn(), record: jest.fn() };
  let service: CreativeBriefsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new CreativeBriefsService(
      prisma as never,
      config as never,
      activityLog as never,
      aiUsage as never,
    );
  });

  describe('generate', () => {
    it('blocks a viewer from generating a brief', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.generate(viewer, organizationId, projectId),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('fails clearly when no Anthropic API key is configured', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue(undefined);
      prisma.project.findFirst.mockResolvedValue({
        name: 'Spring Launch',
        description: null,
        status: 'ACTIVE',
        goal: null,
      });

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(ServiceUnavailableException);
      expect(aiUsage.assertWithinCap).not.toHaveBeenCalled();
    });

    it('blocks generation once the monthly usage cap is reached', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      prisma.project.findFirst.mockResolvedValue({
        name: 'Spring Launch',
        description: null,
        status: 'ACTIVE',
        goal: null,
      });
      aiUsage.assertWithinCap.mockRejectedValue(
        new ForbiddenException('cap reached'),
      );

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(mockCreate).not.toHaveBeenCalled();
    });

    it('generates a brief, clamps the readiness score, and records usage', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      prisma.project.findFirst.mockResolvedValue({
        name: 'Spring Launch',
        description: 'A seasonal campaign',
        status: 'ACTIVE',
        goal: {
          title: 'Grow leads',
          description: null,
          period: 'Q2',
          year: 2026,
          status: 'ACTIVE',
        },
      });
      prisma.discoveryBrief.findFirst.mockResolvedValue(null);
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(
        structuredResponse({
          summary: 'Summary',
          audienceNotes: 'Audience',
          copyAngles: 'Angle one\nAngle two',
          layoutDirection: 'Bold hero image',
          readinessScore: 142,
          readinessNotes: 'Missing budget info',
          variants: [
            {
              label: 'Bold and direct',
              copyAngle: 'Angle one',
              imageConcept: 'A close-up product shot on a bright background',
            },
            {
              label: 'Warm and personal',
              copyAngle: 'Angle two',
              imageConcept: 'A candid lifestyle photo of the product in use',
            },
          ],
        }),
      );
      prisma.creativeBrief.create.mockResolvedValue({
        id: briefId,
        summary: 'Summary',
      });

      const result = await service.generate(
        contributor,
        organizationId,
        projectId,
      );

      expect(result).toEqual({ id: briefId, summary: 'Summary' });
      expect(aiUsage.record).toHaveBeenCalledWith(
        organizationId,
        contributor,
        'CREATIVE_BRIEF',
        'claude-haiku-4-5',
        500,
        150,
      );
      const createCalls = prisma.creativeBrief.create.mock
        .calls as unknown as Array<
        [
          {
            data: {
              readinessScore: number;
              variants: {
                create: Array<{
                  label: string;
                  copyAngle: string;
                  imageConcept: string;
                  sortOrder: number;
                }>;
              };
            };
          },
        ]
      >;
      expect(createCalls[0][0].data.readinessScore).toBe(100);
      expect(createCalls[0][0].data.variants.create).toEqual([
        {
          label: 'Bold and direct',
          copyAngle: 'Angle one',
          imageConcept: 'A close-up product shot on a bright background',
          sortOrder: 0,
        },
        {
          label: 'Warm and personal',
          copyAngle: 'Angle two',
          imageConcept: 'A candid lifestyle photo of the product in use',
          sortOrder: 1,
        },
      ]);
      expect(activityLog.record).toHaveBeenCalled();
    });

    it('defaults to an empty variant list when Claude omits variants', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      prisma.project.findFirst.mockResolvedValue({
        name: 'Spring Launch',
        description: null,
        status: 'ACTIVE',
        goal: null,
      });
      prisma.discoveryBrief.findFirst.mockResolvedValue(null);
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockResolvedValue(
        structuredResponse({
          summary: 'Summary',
          audienceNotes: 'Audience',
          copyAngles: 'Angle one',
          layoutDirection: 'Bold hero image',
          readinessScore: 50,
          readinessNotes: 'Notes',
        }),
      );
      prisma.creativeBrief.create.mockResolvedValue({ id: briefId });

      await service.generate(contributor, organizationId, projectId);

      const createCalls = prisma.creativeBrief.create.mock
        .calls as unknown as Array<
        [{ data: { variants: { create: unknown[] } } }]
      >;
      expect(createCalls[0][0].data.variants.create).toEqual([]);
    });

    it('wraps Claude API failures in a friendly error', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      config.get.mockReturnValue('fake-api-key');
      prisma.project.findFirst.mockResolvedValue({
        name: 'Spring Launch',
        description: null,
        status: 'ACTIVE',
        goal: null,
      });
      prisma.discoveryBrief.findFirst.mockResolvedValue(null);
      aiUsage.assertWithinCap.mockResolvedValue(undefined);
      mockCreate.mockRejectedValue(new Error('network boom'));

      await expect(
        service.generate(contributor, organizationId, projectId),
      ).rejects.toBeInstanceOf(ServiceUnavailableException);
      expect(prisma.creativeBrief.create).not.toHaveBeenCalled();
    });
  });

  describe('list', () => {
    it('lets any member view generated briefs', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.creativeBrief.findMany.mockResolvedValue([]);

      await expect(
        service.list(viewer, organizationId, projectId),
      ).resolves.toEqual([]);
    });
  });

  describe('approve', () => {
    it('blocks a contributor from approving a brief', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId, name: 'P' });

      await expect(
        service.approve(contributor, organizationId, projectId, briefId),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('throws when the brief does not exist', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId, name: 'P' });
      prisma.creativeBrief.findFirst.mockResolvedValue(null);

      await expect(
        service.approve(manager, organizationId, projectId, briefId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('blocks re-approving an already-approved brief', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId, name: 'P' });
      prisma.creativeBrief.findFirst.mockResolvedValue({
        id: briefId,
        status: 'APPROVED',
      });

      await expect(
        service.approve(manager, organizationId, projectId, briefId),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.creativeBrief.update).not.toHaveBeenCalled();
    });

    it('approves a draft brief and logs activity', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId, name: 'P' });
      prisma.creativeBrief.findFirst.mockResolvedValue({
        id: briefId,
        status: 'DRAFT',
      });
      prisma.creativeBrief.update.mockResolvedValue({
        id: briefId,
        status: 'APPROVED',
      });

      const result = await service.approve(
        manager,
        organizationId,
        projectId,
        briefId,
      );

      expect(result).toEqual({ id: briefId, status: 'APPROVED' });
      expect(activityLog.record).toHaveBeenCalled();
    });
  });
});
