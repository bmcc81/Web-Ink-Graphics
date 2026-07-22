import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Role } from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import { MediaService } from './media.service.js';

describe('MediaService tenant authorization', () => {
  const customer: AuthUser = {
    id: 'customer-1',
    email: 'customer@example.com',
    name: 'Customer',
    role: Role.CUSTOMER,
  };
  const config = {
    getOrThrow: jest.fn(),
  };
  const prisma = {
    discoveryBrief: {
      findFirst: jest.fn(),
    },
  };
  let service: MediaService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new MediaService(config as never, prisma as never);
  });

  it('rejects public portfolio uploads from customer accounts', async () => {
    await expect(
      service.createUpload(customer, {
        fileName: 'image.png',
        contentType: 'image/png',
        fileSize: 100,
        purpose: 'PORTFOLIO',
      }),
    ).rejects.toBeInstanceOf(ForbiddenException);
    expect(config.getOrThrow).not.toHaveBeenCalled();
  });

  it('does not issue a discovery upload for an inaccessible brief', async () => {
    prisma.discoveryBrief.findFirst.mockResolvedValue(null);

    await expect(
      service.createUpload(customer, {
        fileName: 'brief.pdf',
        contentType: 'application/pdf',
        fileSize: 100,
        purpose: 'DISCOVERY',
        briefId: 'brief-1',
      }),
    ).rejects.toBeInstanceOf(NotFoundException);
    type BriefLookup = {
      where: { id: string; client?: object };
    };
    const calls = prisma.discoveryBrief.findFirst.mock
      .calls as unknown as Array<[BriefLookup]>;
    expect(calls[0][0].where.id).toBe('brief-1');
    expect(calls[0][0].where.client).toBeDefined();
    expect(config.getOrThrow).not.toHaveBeenCalled();
  });
});
