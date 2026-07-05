import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { DesignsService } from './designs.service';

describe('DesignsService', () => {
  const organizationId = 'organization-1';
  const projectId = 'project-1';
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

  const prisma = {
    project: { findFirst: jest.fn() },
    designDocument: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      findUniqueOrThrow: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    designVersion: {
      create: jest.fn(),
    },
    organizationMembership: { findUnique: jest.fn() },
  };
  const activityLog = { record: jest.fn() };
  const figma = {
    parseFigmaUrl: jest.fn(),
    fetchMetadata: jest.fn(),
  };
  let service: DesignsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new DesignsService(
      prisma as never,
      activityLog as never,
      figma as never,
    );
  });

  describe('view permission', () => {
    it('lets any member list designs', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findMany.mockResolvedValue([]);

      await expect(
        service.list(viewer, organizationId, projectId),
      ).resolves.toEqual([]);
    });

    it('rejects a user with no membership', async () => {
      actorMembership(null);

      await expect(
        service.list(owner, organizationId, projectId),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('attach', () => {
    it('blocks a viewer from attaching a design', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.attach(viewer, organizationId, projectId, {
          figmaUrl: 'https://www.figma.com/file/abc/Name',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.designDocument.create).not.toHaveBeenCalled();
    });

    it('creates a design document with a version when Figma metadata is available', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      figma.parseFigmaUrl.mockReturnValue({ fileKey: 'abc', nodeId: '1:2' });
      figma.fetchMetadata.mockResolvedValue({
        name: 'Homepage',
        lastModified: new Date('2026-01-01'),
        thumbnailUrl: 'https://figma-thumb.example/abc.png',
      });
      prisma.designDocument.create.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });

      const result = await service.attach(
        contributor,
        organizationId,
        projectId,
        { figmaUrl: 'https://www.figma.com/file/abc/Name?node-id=1-2' },
      );

      expect(result).toEqual({ id: 'design-1', name: 'Homepage' });
      const calls = prisma.designDocument.create.mock.calls as unknown as Array<
        [{ data: { versions?: unknown } }]
      >;
      expect(calls[0][0].data.versions).toBeDefined();
    });

    it('creates a design document without a version when Figma is not configured', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      figma.parseFigmaUrl.mockReturnValue({ fileKey: 'abc', nodeId: null });
      figma.fetchMetadata.mockResolvedValue(null);
      prisma.designDocument.create.mockResolvedValue({
        id: 'design-1',
        name: 'Untitled design',
      });

      await service.attach(contributor, organizationId, projectId, {
        figmaUrl: 'https://www.figma.com/file/abc/Name',
      });

      const calls = prisma.designDocument.create.mock.calls as unknown as Array<
        [{ data: { versions?: unknown; name: string } }]
      >;
      expect(calls[0][0].data.versions).toBeUndefined();
      expect(calls[0][0].data.name).toBe('Untitled design');
    });
  });

  describe('sync', () => {
    it('returns synced: false without creating a version when Figma is unavailable', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
        figmaFileKey: 'abc',
        figmaNodeId: null,
      });
      figma.fetchMetadata.mockResolvedValue(null);

      const result = await service.sync(
        contributor,
        organizationId,
        projectId,
        'design-1',
      );

      expect(result.synced).toBe(false);
      expect(prisma.designVersion.create).not.toHaveBeenCalled();
    });

    it('creates a new version when Figma metadata is available', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
        figmaFileKey: 'abc',
        figmaNodeId: null,
      });
      figma.fetchMetadata.mockResolvedValue({
        name: 'Homepage v2',
        lastModified: new Date('2026-02-01'),
        thumbnailUrl: 'https://figma-thumb.example/abc.png',
      });
      prisma.designDocument.findUniqueOrThrow.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });

      const result = await service.sync(
        contributor,
        organizationId,
        projectId,
        'design-1',
      );

      expect(result.synced).toBe(true);
      const calls = prisma.designVersion.create.mock.calls as unknown as Array<
        [{ data: { designDocumentId: string } }]
      >;
      expect(calls[0][0].data.designDocumentId).toBe('design-1');
    });

    it('throws when the design does not belong to the project', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue(null);

      await expect(
        service.sync(contributor, organizationId, projectId, 'missing'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('unlink', () => {
    it('soft-unlinks a design and preserves it for history', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });

      await expect(
        service.unlink(contributor, organizationId, projectId, 'design-1'),
      ).resolves.toEqual({ removed: true });
      const calls = prisma.designDocument.update.mock.calls as unknown as Array<
        [{ where: { id: string }; data: { unlinkedAt: Date } }]
      >;
      expect(calls[0][0].where).toEqual({ id: 'design-1' });
      expect(calls[0][0].data.unlinkedAt).toBeInstanceOf(Date);
    });

    it('blocks a viewer from unlinking a design', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.unlink(viewer, organizationId, projectId, 'design-1'),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.designDocument.update).not.toHaveBeenCalled();
    });

    it('does not return an already-unlinked design', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue(null);

      await expect(
        service.unlink(contributor, organizationId, projectId, 'design-1'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });
});
