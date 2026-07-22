import { jest as jestGlobals } from '@jest/globals';
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import {
  ExportFormat,
  OrganizationRole,
  Role,
} from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';

const mockScreenshot = jest.fn<Promise<Buffer>, []>();
const mockPdf = jest.fn<Promise<Buffer>, []>();
const mockSetContent = jest.fn<Promise<void>, []>();
const mockNewPage = jest.fn<Promise<unknown>, []>();
const mockClose = jest.fn<Promise<void>, []>();
const mockLaunch = jest.fn<Promise<unknown>, []>();

jestGlobals.unstable_mockModule('playwright', () => ({
  chromium: { launch: (): Promise<unknown> => mockLaunch() },
}));

const mockS3Send = jest.fn<Promise<unknown>, []>();
jestGlobals.unstable_mockModule('@aws-sdk/client-s3', () => ({
  S3Client: jest.fn().mockImplementation(() => ({ send: mockS3Send })),
  PutObjectCommand: jest
    .fn()
    .mockImplementation((input: unknown) => ({ input })),
  GetObjectCommand: jest
    .fn()
    .mockImplementation((input: unknown) => ({ input })),
}));

const mockGetSignedUrl = jest.fn<Promise<string>, []>();
jestGlobals.unstable_mockModule('@aws-sdk/s3-request-presigner', () => ({
  getSignedUrl: (): Promise<string> => mockGetSignedUrl(),
}));

const { ExportsService } = await import('./exports.service.js');
type ExportsService = InstanceType<typeof ExportsService>;

describe('ExportsService', () => {
  const organizationId = 'organization-1';
  const projectId = 'project-1';
  const assetId = 'asset-1';
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
    projectAsset: { findFirst: jest.fn() },
    assetRevision: { findFirst: jest.fn() },
    designTemplate: { findUniqueOrThrow: jest.fn() },
    assetExport: {
      create: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
      findFirst: jest.fn(),
    },
    organizationMembership: { findUnique: jest.fn() },
  };
  const config = {
    getOrThrow: jest.fn((key: string) => `mock-${key}`),
    get: jest.fn(),
  };
  const activityLog = { record: jest.fn() };
  let service: ExportsService;

  function actorMembership(role: OrganizationRole | null) {
    prisma.organizationMembership.findUnique.mockResolvedValue(
      role ? { role } : null,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ExportsService(
      prisma as never,
      config as never,
      activityLog as never,
    );

    mockScreenshot.mockResolvedValue(Buffer.from('png-bytes'));
    mockPdf.mockResolvedValue(Buffer.from('pdf-bytes'));
    mockSetContent.mockResolvedValue(undefined);
    mockNewPage.mockResolvedValue({
      setContent: mockSetContent,
      screenshot: mockScreenshot,
      pdf: mockPdf,
    });
    mockClose.mockResolvedValue(undefined);
    mockLaunch.mockResolvedValue({ newPage: mockNewPage, close: mockClose });
    mockS3Send.mockResolvedValue({});
    mockGetSignedUrl.mockResolvedValue('https://signed.example/download');
  });

  describe('requestExport', () => {
    it('blocks a viewer from requesting an export', async () => {
      actorMembership(OrganizationRole.VIEWER);

      await expect(
        service.requestExport(viewer, organizationId, projectId, assetId, {
          format: ExportFormat.PNG,
        }),
      ).rejects.toBeInstanceOf(ForbiddenException);
      expect(prisma.assetExport.create).not.toHaveBeenCalled();
    });

    it('rejects exporting when the latest revision is not approved', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'DRAFT',
        values: [],
      });

      await expect(
        service.requestExport(contributor, organizationId, projectId, assetId, {
          format: ExportFormat.PNG,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.assetExport.create).not.toHaveBeenCalled();
    });

    it('renders and uploads a PNG export for an approved revision', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'APPROVED',
        values: [{ templateFieldId: 'field-1', value: 'Hello' }],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [
          {
            id: 'field-1',
            fieldType: 'TEXT',
            x: 0,
            y: 0,
            width: 100,
            height: 40,
            fontSize: 24,
            color: null,
          },
        ],
      });
      prisma.assetExport.create.mockResolvedValue({ id: 'export-1' });
      prisma.assetExport.update.mockResolvedValue({
        id: 'export-1',
        status: 'READY',
      });

      const result = await service.requestExport(
        contributor,
        organizationId,
        projectId,
        assetId,
        { format: ExportFormat.PNG },
      );

      expect(result).toEqual({ id: 'export-1', status: 'READY' });
      expect(mockScreenshot).toHaveBeenCalled();
      expect(mockPdf).not.toHaveBeenCalled();
      expect(mockS3Send).toHaveBeenCalled();
      const updateCalls = prisma.assetExport.update.mock
        .calls as unknown as Array<
        [{ data: { status: string; objectKey?: string } }]
      >;
      expect(updateCalls[0][0].data.status).toBe('READY');
      expect(updateCalls[0][0].data.objectKey).toContain('.png');
    });

    it('renders a PDF export when requested', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'APPROVED',
        values: [],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [],
      });
      prisma.assetExport.create.mockResolvedValue({ id: 'export-2' });
      prisma.assetExport.update.mockResolvedValue({
        id: 'export-2',
        status: 'READY',
      });

      await service.requestExport(
        contributor,
        organizationId,
        projectId,
        assetId,
        { format: ExportFormat.PDF },
      );

      expect(mockPdf).toHaveBeenCalled();
      expect(mockScreenshot).not.toHaveBeenCalled();
      const updateCalls = prisma.assetExport.update.mock
        .calls as unknown as Array<[{ data: { objectKey?: string } }]>;
      expect(updateCalls[0][0].data.objectKey).toContain('.pdf');
    });

    it('marks the export FAILED when rendering throws', async () => {
      actorMembership(OrganizationRole.CONTRIBUTOR);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
        templateId: 'template-1',
      });
      prisma.assetRevision.findFirst.mockResolvedValue({
        id: 'revision-1',
        status: 'APPROVED',
        values: [],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [],
      });
      prisma.assetExport.create.mockResolvedValue({ id: 'export-3' });
      mockLaunch.mockRejectedValue(new Error('boom'));
      prisma.assetExport.update.mockResolvedValue({
        id: 'export-3',
        status: 'FAILED',
      });

      const result = await service.requestExport(
        contributor,
        organizationId,
        projectId,
        assetId,
        { format: ExportFormat.PNG },
      );

      expect(result).toEqual({ id: 'export-3', status: 'FAILED' });
      const updateCalls = prisma.assetExport.update.mock
        .calls as unknown as Array<[{ data: { status: string } }]>;
      expect(updateCalls[0][0].data.status).toBe('FAILED');
    });
  });

  describe('downloadUrl', () => {
    it('throws when the export is not ready', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
      });
      prisma.assetExport.findFirst.mockResolvedValue({
        id: 'export-1',
        status: 'PENDING',
        objectKey: null,
      });

      await expect(
        service.downloadUrl(
          viewer,
          organizationId,
          projectId,
          assetId,
          'export-1',
        ),
      ).rejects.toBeInstanceOf(NotFoundException);
    });

    it('returns a signed download url for a ready export', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
      });
      prisma.assetExport.findFirst.mockResolvedValue({
        id: 'export-1',
        status: 'READY',
        objectKey: 'exports/org/export-1.png',
      });

      await expect(
        service.downloadUrl(
          viewer,
          organizationId,
          projectId,
          assetId,
          'export-1',
        ),
      ).resolves.toEqual({ downloadUrl: 'https://signed.example/download' });
    });
  });

  describe('list', () => {
    it('lets any member view export history', async () => {
      actorMembership(OrganizationRole.VIEWER);
      prisma.project.findFirst.mockResolvedValue({ id: projectId });
      prisma.projectAsset.findFirst.mockResolvedValue({
        id: assetId,
        name: 'Flyer',
      });
      prisma.assetExport.findMany.mockResolvedValue([]);

      await expect(
        service.list(viewer, organizationId, projectId, assetId),
      ).resolves.toEqual([]);
    });
  });
});
