import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { GoalPeriod, GoalStatus, OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { GoalsService } from './goals.service';

describe('GoalsService', () => {
  const organizationId = 'organization-1';
  const owner: AuthUser = {
    id: 'user-owner',
    email: 'owner@example.com',
    name: 'Owner',
    role: Role.CUSTOMER,
  };
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
    goal: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    organizationMembership: {
      findUnique: jest.fn(),
    },
  };
  const activityLog = { record: jest.fn() };
  let service: GoalsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new GoalsService(prisma as never, activityLog as never);
  });

  describe('view permission', () => {
    it('lets staff list goals with no membership row', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);
      prisma.goal.findMany.mockResolvedValue([]);

      await expect(service.list(staff, organizationId)).resolves.toEqual([]);
    });

    it('lets any member view goals', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.goal.findMany.mockResolvedValue([]);

      await expect(service.list(viewer, organizationId)).resolves.toEqual([]);
    });

    it('rejects a user with no membership', async () => {
      actorMembership(null);

      await expect(
        service.list(outsider, organizationId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('IDOR guard', () => {
    it('throws NotFoundException when the goal belongs to a different organization', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.goal.findFirst.mockResolvedValue(null);

      await expect(
        service.findOne(owner, organizationId, 'goal-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.goal.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'goal-1', organizationId } }),
      );
    });
  });

  describe('create/edit/delete permission', () => {
    it('blocks a viewer from creating a goal', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.create(viewer, organizationId, {
          title: 'Grow signups',
          period: GoalPeriod.Q3,
          year: 2026,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.goal.create).not.toHaveBeenCalled();
    });

    it('lets a contributor create a goal', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.goal.create.mockResolvedValue({ id: 'goal-1' });

      await expect(
        service.create(contributor, organizationId, {
          title: 'Grow signups',
          period: GoalPeriod.Q3,
          year: 2026,
        }),
      ).resolves.toEqual({ id: 'goal-1' });
    });

    it('lets a contributor update a goal status', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.goal.findFirst.mockResolvedValue({ id: 'goal-1' });
      prisma.goal.update.mockResolvedValue({
        id: 'goal-1',
        status: GoalStatus.AT_RISK,
      });

      await expect(
        service.update(contributor, organizationId, 'goal-1', {
          status: GoalStatus.AT_RISK,
        }),
      ).resolves.toMatchObject({ status: GoalStatus.AT_RISK });
    });

    it('lets a contributor delete a goal (low blast radius, projects only detach)', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.goal.findFirst.mockResolvedValue({ id: 'goal-1' });
      prisma.goal.delete.mockResolvedValue({ id: 'goal-1' });

      await expect(
        service.remove(contributor, organizationId, 'goal-1'),
      ).resolves.toEqual({ removed: true });
    });

    it('throws when updating a goal that does not belong to the organization', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.goal.findFirst.mockResolvedValue(null);

      await expect(
        service.update(contributor, organizationId, 'missing', {
          status: GoalStatus.ACHIEVED,
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });
});
