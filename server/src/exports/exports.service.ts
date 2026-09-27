import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ExportFormat,
  TemplateField,
  type AssetFieldValue,
} from '@prisma/client';
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { chromium } from 'playwright';
import { lookup as dnsLookup } from 'dns/promises';
import { isIP } from 'net';
import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import {
  CONTRIBUTE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExportDto } from './dto/create-export.dto';

const exportInclude = {
  requestedBy: { select: { id: true, name: true } },
};

const RENDER_TIMEOUT_MS = 15_000;

// Matches a hex color, an rgb()/rgba()/hsl()/hsla() functional value, or a
// bare CSS named color — never parentheses-free text that could smuggle a
// url(...) reference or break out of the style attribute.
const SAFE_COLOR_PATTERN =
  /^(#[0-9a-fA-F]{3,8}|(?:rgb|rgba|hsl|hsla)\(\s*[\d.]+%?\s*,\s*[\d.]+%?\s*,\s*[\d.]+%?\s*(?:,\s*[\d.]+\s*)?\)|[a-zA-Z]+)$/;

@Injectable()
export class ExportsService {
  private readonly logger = new Logger(ExportsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly activityLog: ActivityLogService,
  ) {}

  async list(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
  ) {
    await this.assertCanView(user, organizationId);
    await this.findAssetOrThrow(organizationId, projectId, assetId);
    return this.prisma.assetExport.findMany({
      where: { assetRevision: { projectAssetId: assetId } },
      include: exportInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async requestExport(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
    dto: CreateExportDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    const asset = await this.findAssetOrThrow(
      organizationId,
      projectId,
      assetId,
    );
    const latest = await this.prisma.assetRevision.findFirst({
      where: { projectAssetId: assetId },
      orderBy: { createdAt: 'desc' },
      include: { values: true },
    });
    if (!latest || latest.status !== 'APPROVED') {
      throw new BadRequestException(
        'Only an approved revision can be exported',
      );
    }
    const template = await this.prisma.designTemplate.findUniqueOrThrow({
      where: { id: asset.templateId },
      include: { fields: true },
    });

    await this.assertFieldValuesAreSafe(template.fields, latest.values);

    const exportRecord = await this.prisma.assetExport.create({
      data: {
        assetRevisionId: latest.id,
        format: dto.format,
        requestedById: user.id,
      },
      include: exportInclude,
    });

    try {
      const buffer = await this.render(template.fields, latest.values, {
        canvasWidth: template.canvasWidth,
        canvasHeight: template.canvasHeight,
        format: dto.format,
      });
      const objectKey = `exports/${organizationId}/${exportRecord.id}.${dto.format === ExportFormat.PDF ? 'pdf' : 'png'}`;
      await this.uploadToS3(objectKey, buffer, dto.format);
      const ready = await this.prisma.assetExport.update({
        where: { id: exportRecord.id },
        data: { status: 'READY', objectKey, completedAt: new Date() },
        include: exportInclude,
      });
      await this.activityLog.record({
        organizationId,
        entityType: 'PROJECT_ASSET',
        entityId: assetId,
        action: 'UPDATED',
        summary: `"${asset.name}" exported as ${dto.format}`,
        actorId: user.id,
      });
      return ready;
    } catch (error) {
      this.logger.error('Asset export rendering failed', error);
      return this.prisma.assetExport.update({
        where: { id: exportRecord.id },
        data: {
          status: 'FAILED',
          errorMessage: 'The export could not be rendered.',
          completedAt: new Date(),
        },
        include: exportInclude,
      });
    }
  }

  async downloadUrl(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    assetId: string,
    exportId: string,
  ) {
    await this.assertCanView(user, organizationId);
    await this.findAssetOrThrow(organizationId, projectId, assetId);
    const record = await this.prisma.assetExport.findFirst({
      where: { id: exportId, assetRevision: { projectAssetId: assetId } },
    });
    if (!record || record.status !== 'READY' || !record.objectKey) {
      throw new NotFoundException('Export not found');
    }
    const downloadUrl = await getSignedUrl(
      this.client(),
      new GetObjectCommand({
        Bucket: this.config.getOrThrow<string>('S3_BUCKET'),
        Key: record.objectKey,
      }),
      { expiresIn: 300 },
    );
    return { downloadUrl };
  }

  private async render(
    fields: TemplateField[],
    values: AssetFieldValue[],
    options: {
      canvasWidth: number;
      canvasHeight: number;
      format: ExportFormat;
    },
  ) {
    const html = this.buildHtml(fields, values, options);
    const browser = await chromium.launch({
      executablePath: '/opt/pw-browsers/chromium',
    });
    try {
      const page = await browser.newPage({
        viewport: { width: options.canvasWidth, height: options.canvasHeight },
      });
      page.setDefaultTimeout(RENDER_TIMEOUT_MS);
      page.setDefaultNavigationTimeout(RENDER_TIMEOUT_MS);
      await page.setContent(html, {
        waitUntil: 'networkidle',
        timeout: RENDER_TIMEOUT_MS,
      });
      if (options.format === ExportFormat.PDF) {
        return await page.pdf({
          width: `${options.canvasWidth}px`,
          height: `${options.canvasHeight}px`,
          printBackground: true,
        });
      }
      return await page.screenshot({ type: 'png' });
    } finally {
      await browser.close();
    }
  }

  private buildHtml(
    fields: TemplateField[],
    values: AssetFieldValue[],
    options: { canvasWidth: number; canvasHeight: number },
  ) {
    const valueByFieldId = new Map(
      values.map((value) => [value.templateFieldId, value.value]),
    );
    const fieldsHtml = fields
      .map((field) => {
        const value = valueByFieldId.get(field.id) ?? '';
        const box = `position:absolute;left:${field.x}px;top:${field.y}px;width:${field.width}px;height:${field.height}px;`;
        if (field.fieldType === 'IMAGE') {
          return value
            ? `<img src="${this.escapeAttr(value)}" style="${box}object-fit:cover;" />`
            : '';
        }
        if (field.fieldType === 'COLOR') {
          return `<div style="${box}background:${this.sanitizeColor(value)};"></div>`;
        }
        const textColor = field.color ?? '#111111';
        return `<div style="${box}font-family:sans-serif;font-size:${field.fontSize}px;color:${this.escapeAttr(textColor)};white-space:pre-wrap;">${this.escapeHtml(value)}</div>`;
      })
      .join('');
    return `<!doctype html><html><body style="margin:0;width:${options.canvasWidth}px;height:${options.canvasHeight}px;position:relative;background:#ffffff;">${fieldsHtml}</body></html>`;
  }

  private escapeHtml(value: string) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private escapeAttr(value: string) {
    return value.replace(/"/g, '&quot;');
  }

  /**
   * Validates every field value against the shape its template field
   * requires before an export job (and the headless-Chromium render behind
   * it) is ever created. IMAGE values are checked to be http(s) URLs that
   * do not resolve to a private, loopback, or link-local address (blocking
   * SSRF against internal services and cloud metadata endpoints), and
   * COLOR values are restricted to safe CSS color syntax.
   */
  private async assertFieldValuesAreSafe(
    fields: TemplateField[],
    values: AssetFieldValue[],
  ) {
    const fieldById = new Map(fields.map((field) => [field.id, field]));
    for (const value of values) {
      const field = fieldById.get(value.templateFieldId);
      if (!field || !value.value) continue;
      if (field.fieldType === 'IMAGE') {
        await this.assertSafeImageUrl(value.value);
      }
      if (field.fieldType === 'COLOR') {
        this.sanitizeColor(value.value);
      }
    }
  }

  private sanitizeColor(value: string) {
    const trimmed = (value || '#ffffff').trim();
    if (!SAFE_COLOR_PATTERN.test(trimmed)) {
      throw new BadRequestException(
        'Color field values must be a hex, rgb()/rgba(), hsl()/hsla(), or named CSS color',
      );
    }
    return trimmed;
  }

  private async assertSafeImageUrl(rawUrl: string) {
    let url: URL;
    try {
      url = new URL(rawUrl);
    } catch {
      throw new BadRequestException('Image field values must be a valid URL');
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new BadRequestException(
        'Image field values must use http or https',
      );
    }
    const hostname = url.hostname.toLowerCase();
    if (hostname === 'localhost') {
      throw new BadRequestException('This image URL is not allowed');
    }

    const addresses = isIP(hostname)
      ? [hostname]
      : await dnsLookup(hostname, { all: true })
          .then((records) => records.map((record) => record.address))
          .catch(() => []);

    if (!addresses.length) {
      throw new BadRequestException('Could not resolve the image URL host');
    }
    if (addresses.some((address) => this.isBlockedAddress(address))) {
      throw new BadRequestException(
        'Image URLs may not point to internal or private network addresses',
      );
    }
  }

  private isBlockedAddress(address: string): boolean {
    if (isIP(address) === 4) {
      const [a, b] = address.split('.').map(Number);
      return (
        a === 127 || // loopback
        a === 10 || // private
        (a === 172 && b >= 16 && b <= 31) || // private
        (a === 192 && b === 168) || // private
        (a === 169 && b === 254) || // link-local, incl. cloud metadata
        a === 0 ||
        a >= 224 // multicast / reserved
      );
    }
    const lower = address.toLowerCase();
    if (lower.startsWith('::ffff:')) {
      return this.isBlockedAddress(lower.slice('::ffff:'.length));
    }
    return (
      lower === '::1' || // loopback
      lower === '::' ||
      lower.startsWith('fe80:') || // link-local
      lower.startsWith('fc') || // unique local
      lower.startsWith('fd')
    );
  }

  private async uploadToS3(
    objectKey: string,
    buffer: Buffer,
    format: ExportFormat,
  ) {
    await this.client().send(
      new PutObjectCommand({
        Bucket: this.config.getOrThrow<string>('S3_BUCKET'),
        Key: objectKey,
        Body: buffer,
        ContentType:
          format === ExportFormat.PDF ? 'application/pdf' : 'image/png',
        CacheControl: 'private, no-store',
      }),
    );
  }

  private client() {
    return new S3Client({
      region: this.config.get<string>('S3_REGION') ?? 'auto',
      endpoint: this.config.get<string>('S3_ENDPOINT') || undefined,
      forcePathStyle: this.config.get<string>('S3_FORCE_PATH_STYLE') === 'true',
      credentials: {
        accessKeyId: this.config.getOrThrow<string>('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.config.getOrThrow<string>('S3_SECRET_ACCESS_KEY'),
      },
    });
  }

  private async assertCanView(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
  }

  private async assertCanContribute(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only contributors, managers, and owners can export assets',
      );
    }
    return role;
  }

  private async findAssetOrThrow(
    organizationId: string,
    projectId: string,
    assetId: string,
  ) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: { id: true },
    });
    if (!project) throw new NotFoundException('Project not found');
    const asset = await this.prisma.projectAsset.findFirst({
      where: { id: assetId, projectId, unlinkedAt: null },
    });
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }
}
