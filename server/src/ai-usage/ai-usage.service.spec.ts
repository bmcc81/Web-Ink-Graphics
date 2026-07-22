import { ForbiddenException } from '@nestjs/common';
import { Role } from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import { AiUsageService } from './ai-usage.service.js';

describe('AiUsageService', () => {
  const organizationId = 'organization-1';
  const user: AuthUser = {
    id: 'user-1',
    email: 'user@example.com',
    name: 'User',
    role: Role.CUSTOMER,
  };

  const prisma = {
    aiUsageRecord: {
      count: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };
  const config = { get: jest.fn() };
  let service: AiUsageService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new AiUsageService(prisma as never, config as never);
  });

  describe('assertWithinCap', () => {
    it('allows the call when usage is below the default cap', async () => {
      config.get.mockReturnValue(undefined);
      prisma.aiUsageRecord.count.mockResolvedValue(49);

      await expect(
        service.assertWithinCap(organizationId),
      ).resolves.toBeUndefined();
    });

    it('blocks the call once the default cap of 50 is reached', async () => {
      config.get.mockReturnValue(undefined);
      prisma.aiUsageRecord.count.mockResolvedValue(50);

      await expect(
        service.assertWithinCap(organizationId),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('respects a configured AI_MONTHLY_CALL_CAP', async () => {
      config.get.mockReturnValue('5');
      prisma.aiUsageRecord.count.mockResolvedValue(5);

      await expect(
        service.assertWithinCap(organizationId),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('falls back to the default cap for a non-numeric config value', async () => {
      config.get.mockReturnValue('not-a-number');
      prisma.aiUsageRecord.count.mockResolvedValue(50);

      await expect(
        service.assertWithinCap(organizationId),
      ).rejects.toBeInstanceOf(ForbiddenException);
    });
  });

  describe('record', () => {
    it('estimates cost in micros from prompt and completion tokens', async () => {
      await service.record(
        organizationId,
        user,
        'CREATIVE_BRIEF',
        'claude-haiku-4-5',
        1000,
        200,
      );

      expect(prisma.aiUsageRecord.create).toHaveBeenCalledWith({
        data: {
          organizationId,
          requestedById: user.id,
          purpose: 'CREATIVE_BRIEF',
          model: 'claude-haiku-4-5',
          promptTokens: 1000,
          completionTokens: 200,
          estimatedCostMicros: 1000 * 1 + 200 * 5,
        },
      });
    });
  });

  describe('summary', () => {
    it('sums estimated cost and reports usage against the cap', async () => {
      config.get.mockReturnValue(undefined);
      prisma.aiUsageRecord.findMany.mockResolvedValue([
        { estimatedCostMicros: 1000 },
        { estimatedCostMicros: 2500 },
      ]);

      await expect(service.summary(organizationId)).resolves.toEqual({
        callsUsed: 2,
        callsCap: 50,
        estimatedCostUsd: 3500 / 1_000_000,
      });
    });
  });
});
