import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationRole, Role } from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import { ProjectAssetsService } from './project-assets.service.js';

describe('ProjectAssetsService', () => {
  const organizationId = 'organization-1';
  const projectId = 'project-1';
  const contributor: AuthUser = {
    id: 'user-contributor',
    email: 'contributor@example.com',
    name: 'Contributor',
    role: Role.CUSTOMER,
  };
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

  const headlineField = {
    id: 'field-headline',
    key: 'headline',
    label: 'Headline',
    fieldType: 'TEXT',
    required: true,
    maxLength: 40,
  };
  const colorField = {
    id: 'field-color',
    key: 'accent',
    label: 'Accent color',
    fieldType: 'COLOR',
    required: false,
    maxLength: null,
  };
  const urlField = {
    id: 'field-url',
    key: 'ctaUrl',
    label: 'CTA URL',
    fieldType: 'CTA_URL',
    required: false,
    maxLength: null,
  };
  const template = {
    id: 'template-1',
    name: 'Flyer',
    fields: [headlineField, colorField, urlField],
  };

  const prisma = {
    project: { findFirst: jest.fn() },
    designTemplate: { findFirst: jest.fn(), findUniqueOrThrow: jest.fn() },
    brandKit: { findUnique: jest.fn() },
    projectAsset: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    assetRevision: {
      findFirst: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findUniqueOrThrow: jest.fn(),
    },
    assetFieldValue: { deleteMany: jest.fn(), createMany: jest.fn() },
    organizationMembership: { findUnique: jest.fn() },
    $transaction: jest.fn(),
  };
  const activityLog = { record: jest.fn() };
  let service: ProjectAssetsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    prisma.$transaction.mockImplementation((ops: unknown[]) =>
      Promise.all(ops as Promise<unknown>[]),
    );
    service = new ProjectAssetsService(prisma as never, activityLog as never);
  });

  describe('attach', () => {
    it('blocks a viewer from attaching an asset', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.attach(viewer, organizationId, projectId, {
          templateId: 'template-1',
          values: [],
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.projectAsset.create).not.toHaveBeenCalled();
    });

    it('rejects an unknown field key', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);

      await expect(
        service.attach(contributor, organizationId, projectId, {
          templateId: 'template-1',
          values: [{ key: 'not-a-field', value: 'x' }],
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.projectAsset.create).not.toHaveBeenCalled();
    });

    it('rejects a value exceeding maxLength', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);

      await expect(
        service.attach(contributor, organizationId, projectId, {
          templateId: 'template-1',
          values: [{ key: 'headline', value: 'x'.repeat(41) }],
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('rejects a non-hex color value', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);

      await expect(
        service.attach(contributor, organizationId, projectId, {
          templateId: 'template-1',
          values: [{ key: 'accent', value: 'not-a-color' }],
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('rejects a color outside the brand kit palette', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue({
        primaryColor: '#111111',
        secondaryColor: null,
        accentColor: null,
      });

      await expect(
        service.attach(contributor, organizationId, projectId, {
          templateId: 'template-1',
          values: [{ key: 'accent', value: '#ffffff' }],
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('accepts a color matching the brand kit palette', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue({
        primaryColor: '#111111',
        secondaryColor: null,
        accentColor: null,
      });
      prisma.projectAsset.create.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
      });

      await expect(
        service.attach(contributor, organizationId, projectId, {
          templateId: 'template-1',
          values: [{ key: 'accent', value: '#111111' }],
        }),
      ).resolves.toEqual({ id: 'asset-1', name: 'Flyer' });
    });

    it('rejects an invalid CTA URL', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);

      await expect(
        service.attach(contributor, organizationId, projectId, {
          templateId: 'template-1',
          values: [{ key: 'ctaUrl', value: 'not a url' }],
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
    });

    it('creates the asset with a first draft revision', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.designTemplate.findFirst.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);
      prisma.projectAsset.create.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
      });

      await service.attach(contributor, organizationId, projectId, {
        templateId: 'template-1',
        values: [{ key: 'headline', value: 'Big sale' }],
      });

      const calls = prisma.projectAsset.create.mock.calls as unknown as Array<
        [
          {
            data: {
              revisions: {
                create: {
                  values: {
                    create: Array<{ templateFieldId: string; value: string }>;
                  };
                };
              };
            };
          },
        ]
      >;
      expect(calls[0][0].data.revisions.create.values.create).toEqual([
        { templateFieldId: 'field-headline', value: 'Big sale' },
      ]);
    });
  });

  describe('updateValues', () => {
    it('updates the values in place when the latest revision is still a draft', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'DRAFT',
        values: [{ templateFieldId: 'field-headline', value: 'Old' }],
      });
      prisma.assetRevision.findUniqueOrThrow.mockResolvedValue({
        id: 'revision-1',
        status: 'DRAFT',
      });

      await service.updateValues(
        contributor,
        organizationId,
        projectId,
        'asset-1',
        {
          values: [{ key: 'headline', value: 'New' }],
        },
      );

      expect(prisma.assetFieldValue.deleteMany).toHaveBeenCalledWith({
        where: { revisionId: 'revision-1' },
      });
      expect(prisma.assetRevision.create).not.toHaveBeenCalled();
    });

    it('creates a new draft revision instead of overwriting an approved one', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue(template);
      prisma.brandKit.findUnique.mockResolvedValue(null);
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'APPROVED',
        values: [{ templateFieldId: 'field-headline', value: 'Approved text' }],
      });
      prisma.assetRevision.create.mockResolvedValue({
        id: 'revision-2',
        status: 'DRAFT',
      });

      const result = await service.updateValues(
        contributor,
        organizationId,
        projectId,
        'asset-1',
        { values: [{ key: 'headline', value: 'New draft text' }] },
      );

      expect(result).toEqual({ id: 'revision-2', status: 'DRAFT' });
      expect(prisma.assetFieldValue.deleteMany).not.toHaveBeenCalled();
      const calls = prisma.assetRevision.create.mock.calls as unknown as Array<
        [
          {
            data: {
              values: {
                create: Array<{ templateFieldId: string; value: string }>;
              };
            };
          },
        ]
      >;
      expect(calls[0][0].data.values.create).toEqual(
        expect.arrayContaining([
          { templateFieldId: 'field-headline', value: 'New draft text' },
        ]),
      );
    });
  });

  describe('approve', () => {
    it('blocks a contributor from approving (manage roles only)', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);

      await expect(
        service.approve(contributor, organizationId, projectId, 'asset-1'),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.assetRevision.update).not.toHaveBeenCalled();
    });

    it('rejects approval when a required field is missing', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'DRAFT',
        values: [],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue(template);

      await expect(
        service.approve(owner, organizationId, projectId, 'asset-1'),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.assetRevision.update).not.toHaveBeenCalled();
    });

    it('approves when all required fields are present', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'DRAFT',
        values: [{ templateFieldId: 'field-headline', value: 'Big sale' }],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue(template);
      prisma.assetRevision.update.mockResolvedValue({
        id: 'revision-1',
        status: 'APPROVED',
      });

      await expect(
        service.approve(owner, organizationId, projectId, 'asset-1'),
      ).resolves.toEqual({ id: 'revision-1', status: 'APPROVED' });
    });

    it('rejects approving an already-approved revision', async () => {
      actorMembership(OrganizationRole.OWNER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'APPROVED',
        values: [],
      });

      await expect(
        service.approve(owner, organizationId, projectId, 'asset-1'),
      ).rejects.toBeInstanceOf(BadRequestException);
    });
  });

  describe('unlink', () => {
    it('soft-unlinks the asset', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: 'asset-1',
        name: 'Flyer',
      });

      await expect(
        service.unlink(contributor, organizationId, projectId, 'asset-1'),
      ).resolves.toEqual({ removed: true });
      expect(prisma.projectAsset.update).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'asset-1' } }),
      );
    });

    it('throws when the asset does not exist', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue(null);

      await expect(
        service.unlink(contributor, organizationId, projectId, 'missing'),
      ).rejects.toBeInstanceOf(NotFoundException);
    });
  });
});
