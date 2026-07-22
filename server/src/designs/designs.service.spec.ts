import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import { DesignReviewDecision } from './dto/decide-design-review.dto.js';
import { DesignsService } from './designs.service.js';

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
      findFirst: jest.fn(),
    },
    designReview: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    designComment: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
    organizationMembership: { findUnique: jest.fn(), findFirst: jest.fn() },
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

  describe('listReviews', () => {
    it('lets any member list reviews', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designReview.findMany.mockResolvedValue([]);

      await expect(
        service.listReviews(viewer, organizationId, projectId, 'design-1'),
      ).resolves.toEqual([]);
    });
  });

  describe('createReview', () => {
    it('blocks a viewer from assigning a review', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.createReview(viewer, organizationId, projectId, 'design-1', {
          reviewerId: 'user-viewer',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.designReview.create).not.toHaveBeenCalled();
    });

    it('rejects a reviewer who is not an organization member', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.organizationMembership.findFirst.mockResolvedValue(null);

      await expect(
        service.createReview(
          contributor,
          organizationId,
          projectId,
          'design-1',
          {
            reviewerId: 'not-a-member',
          },
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.designReview.create).not.toHaveBeenCalled();
    });

    it('assigns a reviewer who is an organization member', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.organizationMembership.findFirst.mockResolvedValue({
        id: 'membership-1',
      });
      prisma.designReview.create.mockResolvedValue({
        id: 'review-1',
        reviewer: { id: 'user-viewer', name: 'Viewer' },
      });

      const result = await service.createReview(
        contributor,
        organizationId,
        projectId,
        'design-1',
        { reviewerId: 'user-viewer' },
      );

      expect(result).toEqual({
        id: 'review-1',
        reviewer: { id: 'user-viewer', name: 'Viewer' },
      });
      const calls = prisma.designReview.create.mock.calls as unknown as Array<
        [{ data: { reviewerId: string; assignedById: string } }]
      >;
      expect(calls[0][0].data.reviewerId).toBe('user-viewer');
      expect(calls[0][0].data.assignedById).toBe(contributor.id);
    });
  });

  describe('decideReview', () => {
    it('lets the assigned reviewer approve', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designReview.findFirst.mockResolvedValue({
        id: 'review-1',
        reviewerId: contributor.id,
        status: 'PENDING',
      });
      prisma.designVersion.findFirst.mockResolvedValue({ id: 'version-1' });
      prisma.designReview.update.mockResolvedValue({
        id: 'review-1',
        status: 'APPROVED',
        reviewer: { id: contributor.id, name: 'Contributor' },
      });

      const result = await service.decideReview(
        contributor,
        organizationId,
        projectId,
        'design-1',
        'review-1',
        { decision: DesignReviewDecision.APPROVED },
      );

      expect(result.status).toBe('APPROVED');
      const calls = prisma.designReview.update.mock.calls as unknown as Array<
        [{ data: { decidedVersionId?: string } }]
      >;
      expect(calls[0][0].data.decidedVersionId).toBe('version-1');
    });

    it('blocks a non-assigned, non-manager user from deciding', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designReview.findFirst.mockResolvedValue({
        id: 'review-1',
        reviewerId: 'someone-else',
        status: 'PENDING',
      });

      await expect(
        service.decideReview(
          contributor,
          organizationId,
          projectId,
          'design-1',
          'review-1',
          { decision: DesignReviewDecision.APPROVED },
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.designReview.update).not.toHaveBeenCalled();
    });

    it('lets an organization owner override and decide', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designReview.findFirst.mockResolvedValue({
        id: 'review-1',
        reviewerId: 'someone-else',
        status: 'PENDING',
      });
      prisma.designVersion.findFirst.mockResolvedValue(null);
      prisma.designReview.update.mockResolvedValue({
        id: 'review-1',
        status: 'CHANGES_REQUESTED',
        reviewer: { id: 'someone-else', name: 'Someone Else' },
      });

      await expect(
        service.decideReview(
          owner,
          organizationId,
          projectId,
          'design-1',
          'review-1',
          { decision: DesignReviewDecision.CHANGES_REQUESTED },
        ),
      ).resolves.toEqual(
        expect.objectContaining({ status: 'CHANGES_REQUESTED' }),
      );
    });

    it('rejects deciding a review that has already been approved', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designReview.findFirst.mockResolvedValue({
        id: 'review-1',
        reviewerId: contributor.id,
        status: 'APPROVED',
      });

      await expect(
        service.decideReview(
          contributor,
          organizationId,
          projectId,
          'design-1',
          'review-1',
          { decision: DesignReviewDecision.CHANGES_REQUESTED },
        ),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.designReview.update).not.toHaveBeenCalled();
    });

    it('throws when the review does not exist', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designReview.findFirst.mockResolvedValue(null);

      await expect(
        service.decideReview(
          contributor,
          organizationId,
          projectId,
          'design-1',
          'missing',
          { decision: DesignReviewDecision.APPROVED },
        ),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });

  describe('listComments', () => {
    it('lets any member list comments', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designComment.findMany.mockResolvedValue([]);

      await expect(
        service.listComments(viewer, organizationId, projectId, 'design-1'),
      ).resolves.toEqual([]);
    });
  });

  describe('createComment', () => {
    it('blocks a viewer from commenting', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.createComment(viewer, organizationId, projectId, 'design-1', {
          body: 'Looks good',
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.designComment.create).not.toHaveBeenCalled();
    });

    it('creates a comment authored by the caller', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designComment.create.mockResolvedValue({
        id: 'comment-1',
        body: 'Looks good',
      });

      await service.createComment(
        contributor,
        organizationId,
        projectId,
        'design-1',
        { body: 'Looks good' },
      );

      const calls = prisma.designComment.create.mock.calls as unknown as Array<
        [{ data: { authorId: string; body: string } }]
      >;
      expect(calls[0][0].data.authorId).toBe(contributor.id);
      expect(calls[0][0].data.body).toBe('Looks good');
    });
  });

  describe('removeComment', () => {
    it('lets the author delete their own comment', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designComment.findFirst.mockResolvedValue({
        authorId: contributor.id,
      });

      await expect(
        service.removeComment(
          contributor,
          organizationId,
          projectId,
          'design-1',
          'comment-1',
        ),
      ).resolves.toEqual({ removed: true });
      expect(prisma.designComment.delete).toHaveBeenCalledWith({
        where: { id: 'comment-1' },
      });
    });

    it('blocks a non-author, non-manager from deleting', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designComment.findFirst.mockResolvedValue({
        authorId: 'someone-else',
      });

      await expect(
        service.removeComment(
          contributor,
          organizationId,
          projectId,
          'design-1',
          'comment-1',
        ),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.designComment.delete).not.toHaveBeenCalled();
    });

    it('lets an organization owner delete any comment', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designComment.findFirst.mockResolvedValue({
        authorId: 'someone-else',
      });

      await expect(
        service.removeComment(
          owner,
          organizationId,
          projectId,
          'design-1',
          'comment-1',
        ),
      ).resolves.toEqual({ removed: true });
    });

    it('throws when the comment does not exist', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designDocument.findFirst.mockResolvedValue({
        id: 'design-1',
        name: 'Homepage',
      });
      prisma.designComment.findFirst.mockResolvedValue(null);

      await expect(
        service.removeComment(
          contributor,
          organizationId,
          projectId,
          'design-1',
          'missing',
        ),
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
