import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { ExportFormat, OrganizationRole, Role } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { ExportsService } from './exports.service';

const mockScreenshot = jest.fn<Promise<Buffer>, []>();
const mockPdf = jest.fn<Promise<Buffer>, []>();
const mockSetContent = jest.fn<Promise<void>, []>();
const mockNewPage = jest.fn<Promise<unknown>, []>();
const mockClose = jest.fn<Promise<void>, []>();
const mockLaunch = jest.fn<Promise<unknown>, []>();

jest.mock('playwright', () => ({
  chromium: { launch: (): Promise<unknown> => mockLaunch() },
}));

const mockS3Send = jest.fn<Promise<unknown>, []>();
jest.mock('@aws-sdk/client-s3', () => ({
  S3Client: jest.fn().mockImplementation(() => ({ send: mockS3Send })),
  PutObjectCommand: jest
    .fn()
    .mockImplementation((input: unknown) => ({ input })),
  GetObjectCommand: jest
    .fn()
    .mockImplementation((input: unknown) => ({ input })),
}));

const mockGetSignedUrl = jest.fn<Promise<string>, []>();
jest.mock('@aws-sdk/s3-request-presigner', () => ({
  getSignedUrl: (): Promise<string> => mockGetSignedUrl(),
}));

const mockDnsLookup =
  jest.fn<Promise<Array<{ address: string; family: number }>>, [string]>();
jest.mock('dns/promises', () => ({
  lookup: (hostname: string, options: unknown) =>
    mockDnsLookup(hostname, options),
}));

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
      setDefaultTimeout: jest.fn(),
      setDefaultNavigationTimeout: jest.fn(),
    });
    mockClose.mockResolvedValue(undefined);
    mockLaunch.mockResolvedValue({ newPage: mockNewPage, close: mockClose });
    mockS3Send.mockResolvedValue({});
    mockGetSignedUrl.mockResolvedValue('https://signed.example/download');
    // A public, non-routable-for-real TEST-NET-3 address (RFC 5737): safe
    // default resolution for image URLs used across most tests.
    mockDnsLookup.mockResolvedValue([{ address: '203.0.113.10', family: 4 }]);
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

    it('rejects an IMAGE field value that is not http(s)', async () => {
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
        values: [{ templateFieldId: 'field-1', value: 'file:///etc/passwd' }],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [
          {
            id: 'field-1',
            fieldType: 'IMAGE',
            x: 0,
            y: 0,
            width: 100,
            height: 40,
          },
        ],
      });

      await expect(
        service.requestExport(contributor, organizationId, projectId, assetId, {
          format: ExportFormat.PNG,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.assetExport.create).not.toHaveBeenCalled();
      expect(mockLaunch).not.toHaveBeenCalled();
    });

    it('rejects an IMAGE field value that resolves to a private/link-local address (SSRF)', async () => {
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
        values: [
          {
            templateFieldId: 'field-1',
            value: 'http://metadata.internal/latest/meta-data/',
          },
        ],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [
          {
            id: 'field-1',
            fieldType: 'IMAGE',
            x: 0,
            y: 0,
            width: 100,
            height: 40,
          },
        ],
      });
      mockDnsLookup.mockResolvedValue([
        { address: '169.254.169.254', family: 4 },
      ]);

      await expect(
        service.requestExport(contributor, organizationId, projectId, assetId, {
          format: ExportFormat.PNG,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.assetExport.create).not.toHaveBeenCalled();
      expect(mockLaunch).not.toHaveBeenCalled();
    });

    it('rejects a literal loopback/private IP used directly as an IMAGE value', async () => {
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
        values: [
          { templateFieldId: 'field-1', value: 'http://127.0.0.1:8080/admin' },
        ],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [
          {
            id: 'field-1',
            fieldType: 'IMAGE',
            x: 0,
            y: 0,
            width: 100,
            height: 40,
          },
        ],
      });

      await expect(
        service.requestExport(contributor, organizationId, projectId, assetId, {
          format: ExportFormat.PNG,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(mockLaunch).not.toHaveBeenCalled();
    });

    it('rejects a COLOR field value that smuggles a url(...) reference', async () => {
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
        values: [
          {
            templateFieldId: 'field-1',
            value: 'red;background:url(http://169.254.169.254/)',
          },
        ],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [
          {
            id: 'field-1',
            fieldType: 'COLOR',
            x: 0,
            y: 0,
            width: 100,
            height: 40,
          },
        ],
      });

      await expect(
        service.requestExport(contributor, organizationId, projectId, assetId, {
          format: ExportFormat.PNG,
        }),
      ).rejects.toBeInstanceOf(BadRequestException);
      expect(prisma.assetExport.create).not.toHaveBeenCalled();
      expect(mockLaunch).not.toHaveBeenCalled();
    });

    it('accepts a valid https IMAGE value and a valid hex COLOR value', async () => {
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
        values: [
          {
            templateFieldId: 'field-1',
            value: 'https://cdn.example.com/cover.png',
          },
          { templateFieldId: 'field-2', value: '#ff8800' },
        ],
      });
      prisma.designTemplate.findUniqueOrThrow.mockResolvedValue({
        id: 'template-1',
        canvasWidth: 800,
        canvasHeight: 600,
        fields: [
          {
            id: 'field-1',
            fieldType: 'IMAGE',
            x: 0,
            y: 0,
            width: 100,
            height: 40,
          },
          {
            id: 'field-2',
            fieldType: 'COLOR',
            x: 0,
            y: 50,
            width: 100,
            height: 40,
          },
        ],
      });
      prisma.assetExport.create.mockResolvedValue({ id: 'export-4' });
      prisma.assetExport.update.mockResolvedValue({
        id: 'export-4',
        status: 'READY',
      });

      const result = await service.requestExport(
        contributor,
        organizationId,
        projectId,
        assetId,
        { format: ExportFormat.PNG },
      );

      expect(result).toEqual({ id: 'export-4', status: 'READY' });
      expect(mockDnsLookup).toHaveBeenCalledWith(
        'cdn.example.com',
        expect.objectContaining({ all: true }),
      );
      const htmlPassedToSetContent = mockSetContent.mock
        .calls[0][0] as string;
      expect(htmlPassedToSetContent).toContain(
        'https://cdn.example.com/cover.png',
      );
      expect(htmlPassedToSetContent).toContain('#ff8800');
      expect(mockSetContent).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ timeout: expect.any(Number) }),
      );
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
