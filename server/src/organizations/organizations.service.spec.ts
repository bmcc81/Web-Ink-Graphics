import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '../generated/prisma/client.js';
import { hash } from 'bcryptjs';
import type { AuthUser } from '../auth/auth-user.js';
import { OrganizationsService } from './organizations.service.js';

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
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
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
  const activityLog = { record: jest.fn() };
  let service: OrganizationsService;

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.$transaction.mockImplementation(
      (operation: (transaction: typeof prisma) => unknown) => operation(prisma),
    );
    service = new OrganizationsService(
      prisma as never,
      config as never,
      activityLog as never,
    );
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

describe('OrganizationsService member management', () => {
  const organizationId = 'organization-1';
  const owner: AuthUser = {
    id: 'user-owner',
    email: 'owner@example.com',
    name: 'Owner',
    role: Role.CUSTOMER,
  };
  const manager: AuthUser = {
    id: 'user-manager',
    email: 'manager@example.com',
    name: 'Manager',
    role: Role.CUSTOMER,
  };
  const staff: AuthUser = {
    id: 'user-staff',
    email: 'staff@example.com',
    name: 'Staff',
    role: Role.ADMIN,
  };
  const outsider: AuthUser = {
    id: 'user-outsider',
    email: 'outsider@example.com',
    name: 'Outsider',
    role: Role.CUSTOMER,
  };

  const prisma = {
    organizationMembership: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
    $transaction: jest.fn(),
  };
  const config = { getOrThrow: jest.fn() };
  const activityLog = { record: jest.fn() };
  let service: OrganizationsService;

  function actorMembership(role: OrganizationRole) {
    prisma.organizationMembership.findUnique.mockResolvedValue({ role });
  }

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.$transaction.mockImplementation(
      (operation: (transaction: typeof prisma) => unknown) => operation(prisma),
    );
    service = new OrganizationsService(
      prisma as never,
      config as never,
      activityLog as never,
    );
  });

  describe('updateMemberRole', () => {
    it('lets an owner promote a contributor to manager', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.CONTRIBUTOR,
      });
      prisma.organizationMembership.update.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.MANAGER,
        user: { id: 'user-2', name: 'Target', email: 'target@example.com' },
      });

      const result = await service.updateMemberRole(
        owner,
        organizationId,
        'membership-target',
        { role: OrganizationRole.MANAGER },
      );

      expect(result.role).toBe(OrganizationRole.MANAGER);
      expect(prisma.organizationMembership.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'membership-target' },
          data: { role: OrganizationRole.MANAGER },
        }),
      );
    });

    it('lets a manager change a contributor to viewer', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.CONTRIBUTOR,
      });
      prisma.organizationMembership.update.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.VIEWER,
        user: { id: 'user-2', name: 'Target', email: 'target@example.com' },
      });

      await expect(
        service.updateMemberRole(manager, organizationId, 'membership-target', {
          role: OrganizationRole.VIEWER,
        }),
      ).resolves.toMatchObject({ role: OrganizationRole.VIEWER });
    });

    it('blocks a manager from changing another manager', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.MANAGER,
      });

      await expect(
        service.updateMemberRole(manager, organizationId, 'membership-target', {
          role: OrganizationRole.VIEWER,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.organizationMembership.update).not.toHaveBeenCalled();
    });

    it('blocks a manager from promoting a contributor to manager', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.CONTRIBUTOR,
      });

      await expect(
        service.updateMemberRole(manager, organizationId, 'membership-target', {
          role: OrganizationRole.MANAGER,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.organizationMembership.update).not.toHaveBeenCalled();
    });

    it('rejects demoting the sole remaining owner', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.OWNER,
      });
      prisma.organizationMembership.count.mockResolvedValue(0);

      await expect(
        service.updateMemberRole(owner, organizationId, 'membership-target', {
          role: OrganizationRole.MANAGER,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.organizationMembership.update).not.toHaveBeenCalled();
    });

    it('allows demoting an owner when another owner remains', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.OWNER,
      });
      prisma.organizationMembership.count.mockResolvedValue(1);
      prisma.organizationMembership.update.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.MANAGER,
        user: { id: 'user-2', name: 'Target', email: 'target@example.com' },
      });

      await expect(
        service.updateMemberRole(owner, organizationId, 'membership-target', {
          role: OrganizationRole.MANAGER,
        }),
      ).resolves.toMatchObject({ role: OrganizationRole.MANAGER });
    });

    it('throws when the membership does not belong to the organization', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue(null);

      await expect(
        service.updateMemberRole(owner, organizationId, 'missing', {
          role: OrganizationRole.VIEWER,
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('rejects a caller who is not an owner or manager', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue({
        role: OrganizationRole.VIEWER,
      });

      await expect(
        service.updateMemberRole(
          outsider,
          organizationId,
          'membership-target',
          {
            role: OrganizationRole.CONTRIBUTOR,
          },
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.organizationMembership.findFirst).not.toHaveBeenCalled();
    });

    it('lets staff update roles regardless of org membership', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.CONTRIBUTOR,
      });
      prisma.organizationMembership.update.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.MANAGER,
        user: { id: 'user-2', name: 'Target', email: 'target@example.com' },
      });

      await expect(
        service.updateMemberRole(staff, organizationId, 'membership-target', {
          role: OrganizationRole.MANAGER,
        }),
      ).resolves.toMatchObject({ role: OrganizationRole.MANAGER });
    });
  });

  describe('removeMember', () => {
    it('lets an owner remove a viewer', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.VIEWER,
      });

      await expect(
        service.removeMember(owner, organizationId, 'membership-target'),
      ).resolves.toEqual({ removed: true });
      expect(prisma.organizationMembership.delete).toHaveBeenCalledWith({
        where: { id: 'membership-target' },
      });
    });

    it('blocks a manager from removing a webink specialist', async () => {
      actorMembership(OrganizationRole.MANAGER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.WEBINK_SPECIALIST,
      });

      await expect(
        service.removeMember(manager, organizationId, 'membership-target'),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.organizationMembership.delete).not.toHaveBeenCalled();
    });

    it('rejects removing the sole remaining owner', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-target',
        role: OrganizationRole.OWNER,
      });
      prisma.organizationMembership.count.mockResolvedValue(0);

      await expect(
        service.removeMember(owner, organizationId, 'membership-target'),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.organizationMembership.delete).not.toHaveBeenCalled();
    });

    it('throws when the membership does not belong to the organization', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.organizationMembership.findFirst.mockResolvedValue(null);

      await expect(
        service.removeMember(owner, organizationId, 'missing'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });
});

describe('OrganizationsService brand kit', () => {
  const organizationId = 'organization-1';
  const owner: AuthUser = {
    id: 'user-owner',
    email: 'owner@example.com',
    name: 'Owner',
    role: Role.CUSTOMER,
  };
  const viewer: AuthUser = {
    id: 'user-viewer',
    email: 'viewer@example.com',
    name: 'Viewer',
    role: Role.CUSTOMER,
  };

  const prisma = {
    organizationMembership: { findUnique: jest.fn() },
    brandKit: { findUnique: jest.fn(), upsert: jest.fn() },
  };
  const config = { getOrThrow: jest.fn() };
  const activityLog = { record: jest.fn() };
  let service: OrganizationsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new OrganizationsService(
      prisma as never,
      config as never,
      activityLog as never,
    );
  });

  describe('getBrandKit', () => {
    it('lets any member view the brand kit', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.brandKit.findUnique.mockResolvedValue({
        organizationId,
        primaryColor: '#123456',
      });

      await expect(
        service.getBrandKit(viewer, organizationId),
      ).resolves.toMatchObject({ primaryColor: '#123456' });
    });

    it('rejects a user with no membership', async () => {
      actorMembership(null);

      await expect(
        service.getBrandKit(viewer, organizationId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('upsertBrandKit', () => {
    it('blocks a viewer from updating the brand kit', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.upsertBrandKit(viewer, organizationId, {
          primaryColor: '#111111',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.brandKit.upsert).not.toHaveBeenCalled();
    });

    it('lets an owner create the brand kit', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.brandKit.upsert.mockResolvedValue({
        id: 'brand-kit-1',
        organizationId,
        primaryColor: '#111111',
      });

      await expect(
        service.upsertBrandKit(owner, organizationId, {
          primaryColor: '#111111',
        }),
      ).resolves.toMatchObject({ primaryColor: '#111111' });
      expect(prisma.brandKit.upsert).toHaveBeenCalledWith(
        expect.objectContaining({ where: { organizationId } }),
      );
    });
  });
});
