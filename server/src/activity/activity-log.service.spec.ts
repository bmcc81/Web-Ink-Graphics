import { NotFoundException } from '@nestjs/common';
import { OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { ActivityLogService } from './activity-log.service';

describe('ActivityLogService', () => {
  const organizationId = 'organization-1';
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
    activityLogEntry: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    organizationMembership: {
      findUnique: jest.fn(),
    },
  };
  let service: ActivityLogService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ActivityLogService(prisma as never);
  });

  describe('record', () => {
    it('creates an activity log entry', async () => {
      prisma.activityLogEntry.create.mockResolvedValue({ id: 'entry-1' });

      await service.record({
        organizationId,
        entityType: 'PROJECT',
        entityId: 'project-1',
        action: 'CREATED',
        summary: 'Project "Launch" created',
        actorId: 'user-owner',
      });

      expect(prisma.activityLogEntry.create).toHaveBeenCalledWith({
        data: {
          organizationId,
          entityType: 'PROJECT',
          entityId: 'project-1',
          action: 'CREATED',
          summary: 'Project "Launch" created',
          actorId: 'user-owner',
        },
      });
    });
  });

  describe('list', () => {
    it('lets staff list activity with no membership row', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);
      prisma.activityLogEntry.findMany.mockResolvedValue([]);

      await expect(service.list(staff, organizationId)).resolves.toEqual([]);
    });

    it('lets any member view activity', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue({
        role: OrganizationRole.VIEWER,
      });
      prisma.activityLogEntry.findMany.mockResolvedValue([]);

      await expect(service.list(viewer, organizationId)).resolves.toEqual([]);
    });

    it('rejects a user with no membership', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);

      await expect(
        service.list(outsider, organizationId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('orders entries newest first and respects the take limit', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue({
        role: OrganizationRole.OWNER,
      });
      prisma.activityLogEntry.findMany.mockResolvedValue([]);

      await service.list(viewer, organizationId, 10);

      expect(prisma.activityLogEntry.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { organizationId },
          orderBy: { createdAt: 'desc' },
          take: 10,
        }),
      );
    });
  });
});
