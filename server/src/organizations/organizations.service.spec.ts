import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { OrganizationRole } from '@prisma/client';
import { hash } from 'bcryptjs';
import { OrganizationsService } from './organizations.service';

describe('OrganizationsService invitation acceptance', () => {
  const token = 'a'.repeat(43);
  const invitation = {
    id: 'invite-1',
    email: 'owner@example.com',
    role: OrganizationRole.OWNER,
    expiresAt: new Date(Date.now() + 60_000),
    acceptedAt: null,
    revokedAt: null,
    organizationId: 'organization-1',
    organization: {
      id: 'organization-1',
      name: 'Acme Inc.',
      slug: 'acme',
    },
  };
  const prisma = {
    organizationInvitation: {
      findUnique: jest.fn(),
      updateMany: jest.fn(),
    },
    organizationMembership: {
      upsert: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    $transaction: jest.fn(),
  };
  const config = {
    getOrThrow: jest.fn(),
  };
  let service: OrganizationsService;

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.$transaction.mockImplementation(
      (operation: (transaction: typeof prisma) => unknown) => operation(prisma),
    );
    service = new OrganizationsService(prisma as never, config as never);
  });

  it('returns invitation context without exposing the token hash', async () => {
    prisma.organizationInvitation.findUnique.mockResolvedValue(invitation);
    prisma.user.findUnique.mockResolvedValue(null);

    const result = await service.inspectInvitation(token);

    expect(result).toEqual({
      email: invitation.email,
      role: invitation.role,
      expiresAt: invitation.expiresAt,
      organization: invitation.organization,
      existingAccount: false,
    });
  });

  it('creates a customer account and membership atomically', async () => {
    prisma.organizationInvitation.findUnique.mockResolvedValue(invitation);
    prisma.organizationInvitation.updateMany.mockResolvedValue({ count: 1 });
    prisma.user.findUnique.mockResolvedValue(null);
    prisma.user.create.mockResolvedValue({ id: 'user-1' });
    prisma.organizationMembership.upsert.mockResolvedValue({
      id: 'membership-1',
    });

    const result = await service.acceptInvitation(token, {
      name: 'Alex Owner',
      password: 'a secure password',
    });

    expect(result).toMatchObject({
      accepted: true,
      email: invitation.email,
      userId: 'user-1',
    });
    type UserCreate = {
      data: { email: string; name: string; role: string };
    };
    type MembershipUpsert = {
      create: {
        organizationId: string;
        role: OrganizationRole;
        userId: string;
      };
    };
    const userCalls = prisma.user.create.mock.calls as unknown as Array<
      [UserCreate]
    >;
    const membershipCalls = prisma.organizationMembership.upsert.mock
      .calls as unknown as Array<[MembershipUpsert]>;
    expect(userCalls[0][0].data).toMatchObject({
      email: invitation.email,
      name: 'Alex Owner',
      role: 'CUSTOMER',
    });
    expect(membershipCalls[0][0].create).toEqual({
      organizationId: invitation.organizationId,
      role: OrganizationRole.OWNER,
      userId: 'user-1',
    });
  });

  it('requires the current password when the email already has an account', async () => {
    prisma.organizationInvitation.findUnique.mockResolvedValue(invitation);
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      passwordHash: await hash('the correct password', 4),
    });

    await expect(
      service.acceptInvitation(token, { password: 'the wrong password' }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('rejects an expired invitation', async () => {
    prisma.organizationInvitation.findUnique.mockResolvedValue({
      ...invitation,
      expiresAt: new Date(Date.now() - 60_000),
    });

    await expect(service.inspectInvitation(token)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
