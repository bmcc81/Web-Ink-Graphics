import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
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
    project: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    milestone: {
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
    task: {
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },
    taskComment: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
    goal: {
      findFirst: jest.fn(),
    },
    organizationMembership: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
    },
  };
  let service: ProjectsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ProjectsService(prisma as never);
  });

  describe('view permission', () => {
    it('lets staff list projects with no membership row', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);
      prisma.project.findMany.mockResolvedValue([]);

      await expect(service.list(staff, organizationId)).resolves.toEqual([]);
    });

    it('lets any member view projects', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findMany.mockResolvedValue([]);

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
    it('throws NotFoundException when the project belongs to a different organization', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue(null);

      await expect(
        service.findOne(owner, organizationId, 'project-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.project.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'project-1', organizationId },
        }),
      );
    });
  });

  describe('create/edit permission', () => {
    it('blocks a viewer from creating a project', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.create(viewer, organizationId, { name: 'New project' }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.project.create).not.toHaveBeenCalled();
    });

    it('lets a contributor create a project', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.create.mockResolvedValue({ id: 'project-1' });

      await expect(
        service.create(contributor, organizationId, { name: 'New project' }),
      ).resolves.toEqual({ id: 'project-1' });
    });

    it('blocks a viewer from creating a milestone', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });

      await expect(
        service.createMilestone(viewer, organizationId, 'project-1', {
          name: 'Kickoff',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.milestone.create).not.toHaveBeenCalled();
    });

    it('blocks a viewer from creating a task', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });

      await expect(
        service.createTask(viewer, organizationId, 'project-1', {
          title: 'Write copy',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.task.create).not.toHaveBeenCalled();
    });
  });

  describe('delete-project permission', () => {
    it('blocks a contributor from deleting a project', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);

      await expect(
        service.remove(contributor, organizationId, 'project-1'),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.project.delete).not.toHaveBeenCalled();
    });

    it('lets an owner delete a project', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.project.delete.mockResolvedValue({ id: 'project-1' });

      await expect(
        service.remove(owner, organizationId, 'project-1'),
      ).resolves.toEqual({ removed: true });
    });
  });

  describe('milestone/task delete permission', () => {
    it('lets a contributor delete a milestone', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.milestone.findFirst.mockResolvedValue({ id: 'milestone-1' });
      prisma.milestone.delete.mockResolvedValue({ id: 'milestone-1' });

      await expect(
        service.removeMilestone(
          contributor,
          organizationId,
          'project-1',
          'milestone-1',
        ),
      ).resolves.toEqual({ removed: true });
    });

    it('lets a contributor delete a task', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.task.delete.mockResolvedValue({ id: 'task-1' });

      await expect(
        service.removeTask(contributor, organizationId, 'project-1', 'task-1'),
      ).resolves.toEqual({ removed: true });
    });
  });

  describe('sortOrder assignment', () => {
    it('sets sortOrder from the current sibling count for a milestone', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.milestone.count.mockResolvedValue(2);
      prisma.milestone.create.mockResolvedValue({ id: 'milestone-3' });

      await service.createMilestone(contributor, organizationId, 'project-1', {
        name: 'Launch',
      });

      const calls = prisma.milestone.create.mock.calls as unknown as Array<
        [{ data: { sortOrder: number } }]
      >;
      expect(calls[0][0].data.sortOrder).toBe(2);
    });

    it('sets sortOrder from the current sibling count for a task', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.count.mockResolvedValue(4);
      prisma.task.create.mockResolvedValue({ id: 'task-5' });

      await service.createTask(contributor, organizationId, 'project-1', {
        title: 'Review copy',
      });

      const calls = prisma.task.create.mock.calls as unknown as Array<
        [{ data: { sortOrder: number } }]
      >;
      expect(calls[0][0].data.sortOrder).toBe(4);
    });
  });

  describe('assignee validation', () => {
    it('rejects an assignee who is not a member of the organization', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.organizationMembership.findFirst.mockResolvedValue(null);

      await expect(
        service.createTask(contributor, organizationId, 'project-1', {
          title: 'Review copy',
          assigneeId: 'user-not-a-member',
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.task.create).not.toHaveBeenCalled();
    });

    it('accepts an assignee who is a member of the organization', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-1',
      });
      prisma.task.count.mockResolvedValue(0);
      prisma.task.create.mockResolvedValue({ id: 'task-1' });

      await expect(
        service.createTask(contributor, organizationId, 'project-1', {
          title: 'Review copy',
          assigneeId: 'user-viewer',
        }),
      ).resolves.toEqual({ id: 'task-1' });
    });
  });

  describe('milestone-scope validation', () => {
    it('rejects a milestoneId belonging to a different project', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.milestone.findFirst.mockResolvedValue(null);

      await expect(
        service.createTask(contributor, organizationId, 'project-1', {
          title: 'Review copy',
          milestoneId: 'milestone-from-another-project',
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.task.create).not.toHaveBeenCalled();
    });
  });

  describe('date parsing', () => {
    it('converts string dates to Date objects when creating a project', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.create.mockResolvedValue({ id: 'project-1' });

      await service.create(contributor, organizationId, {
        name: 'New project',
        startDate: '2026-08-01',
        targetLaunch: '2026-09-01',
      });

      const calls = prisma.project.create.mock.calls as unknown as Array<
        [{ data: { startDate: Date; targetLaunch: Date } }]
      >;
      expect(calls[0][0].data.startDate).toBeInstanceOf(Date);
      expect(calls[0][0].data.targetLaunch).toBeInstanceOf(Date);
    });
  });

  describe('goal-scope validation', () => {
    it('rejects a goalId belonging to a different organization when creating a project', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.goal.findFirst.mockResolvedValue(null);

      await expect(
        service.create(contributor, organizationId, {
          name: 'New project',
          goalId: 'goal-from-another-org',
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(prisma.project.create).not.toHaveBeenCalled();
    });

    it('links a project to a goal in the same organization', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.goal.findFirst.mockResolvedValue({ id: 'goal-1' });
      prisma.project.create.mockResolvedValue({ id: 'project-1' });

      await service.create(contributor, organizationId, {
        name: 'New project',
        goalId: 'goal-1',
      });

      const calls = prisma.project.create.mock.calls as unknown as Array<
        [{ data: { goalId: string } }]
      >;
      expect(calls[0][0].data.goalId).toBe('goal-1');
    });
  });

  describe('staff bypass', () => {
    it('lets staff create a project with no membership row', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);
      prisma.project.create.mockResolvedValue({ id: 'project-1' });

      await expect(
        service.create(staff, organizationId, { name: 'Staff project' }),
      ).resolves.toEqual({ id: 'project-1' });
    });

    it('lets staff delete a project with no membership row', async () => {
      prisma.organizationMembership.findUnique.mockResolvedValue(null);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.project.delete.mockResolvedValue({ id: 'project-1' });

      await expect(
        service.remove(staff, organizationId, 'project-1'),
      ).resolves.toEqual({ removed: true });
    });
  });

  describe('task comments', () => {
    it('lets any member view comments', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.taskComment.findMany.mockResolvedValue([]);

      await expect(
        service.listComments(viewer, organizationId, 'project-1', 'task-1'),
      ).resolves.toEqual([]);
    });

    it('blocks a viewer from posting a comment', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });

      await expect(
        service.createComment(viewer, organizationId, 'project-1', 'task-1', {
          body: 'Nice work',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.taskComment.create).not.toHaveBeenCalled();
    });

    it('lets a contributor post a comment authored by themselves', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.taskComment.create.mockResolvedValue({ id: 'comment-1' });

      await service.createComment(
        contributor,
        organizationId,
        'project-1',
        'task-1',
        { body: 'On it' },
      );

      const calls = prisma.taskComment.create.mock.calls as unknown as Array<
        [{ data: { taskId: string; authorId: string; body: string } }]
      >;
      expect(calls[0][0].data).toEqual({
        body: 'On it',
        taskId: 'task-1',
        authorId: contributor.id,
      });
    });

    it('lets the comment author delete their own comment', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.taskComment.findFirst.mockResolvedValue({
        authorId: contributor.id,
      });

      await expect(
        service.removeComment(
          contributor,
          organizationId,
          'project-1',
          'task-1',
          'comment-1',
        ),
      ).resolves.toEqual({ removed: true });
    });

    it("blocks a different contributor from deleting someone else's comment", async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.taskComment.findFirst.mockResolvedValue({
        authorId: 'someone-else',
      });

      await expect(
        service.removeComment(
          contributor,
          organizationId,
          'project-1',
          'task-1',
          'comment-1',
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.taskComment.delete).not.toHaveBeenCalled();
    });

    it('lets an owner delete any comment as a moderator', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.taskComment.findFirst.mockResolvedValue({
        authorId: 'someone-else',
      });

      await expect(
        service.removeComment(
          owner,
          organizationId,
          'project-1',
          'task-1',
          'comment-1',
        ),
      ).resolves.toEqual({ removed: true });
    });

    it('throws when the comment does not belong to the task', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: 'project-1' });
      prisma.task.findFirst.mockResolvedValue({ id: 'task-1' });
      prisma.taskComment.findFirst.mockResolvedValue(null);

      await expect(
        service.removeComment(
          contributor,
          organizationId,
          'project-1',
          'task-1',
          'comment-1',
        ),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });
});
