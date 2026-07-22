var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ExportsService_1;
import { BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExportFormat, } from '../generated/prisma/client.js';
import { GetObjectCommand, PutObjectCommand, S3Client, } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { chromium } from 'playwright';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { CONTRIBUTE_ROLES, resolveOrganizationRole, } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
const exportInclude = {
    requestedBy: { select: { id: true, name: true } },
};
let ExportsService = ExportsService_1 = class ExportsService {
    prisma;
    config;
    activityLog;
    logger = new Logger(ExportsService_1.name);
    constructor(prisma, config, activityLog) {
        this.prisma = prisma;
        this.config = config;
        this.activityLog = activityLog;
    }
    async list(user, organizationId, projectId, assetId) {
        await this.assertCanView(user, organizationId);
        await this.findAssetOrThrow(organizationId, projectId, assetId);
        return this.prisma.assetExport.findMany({
            where: { assetRevision: { projectAssetId: assetId } },
            include: exportInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async requestExport(user, organizationId, projectId, assetId, dto) {
        await this.assertCanContribute(user, organizationId);
        const asset = await this.findAssetOrThrow(organizationId, projectId, assetId);
        const latest = await this.prisma.assetRevision.findFirst({
            where: { projectAssetId: assetId },
            orderBy: { createdAt: 'desc' },
            include: { values: true },
        });
        if (!latest || latest.status !== 'APPROVED') {
            throw new BadRequestException('Only an approved revision can be exported');
        }
        const template = await this.prisma.designTemplate.findUniqueOrThrow({
            where: { id: asset.templateId },
            include: { fields: true },
        });
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
        }
        catch (error) {
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
    async downloadUrl(user, organizationId, projectId, assetId, exportId) {
        await this.assertCanView(user, organizationId);
        await this.findAssetOrThrow(organizationId, projectId, assetId);
        const record = await this.prisma.assetExport.findFirst({
            where: { id: exportId, assetRevision: { projectAssetId: assetId } },
        });
        if (!record || record.status !== 'READY' || !record.objectKey) {
            throw new NotFoundException('Export not found');
        }
        const downloadUrl = await getSignedUrl(this.client(), new GetObjectCommand({
            Bucket: this.config.getOrThrow('S3_BUCKET'),
            Key: record.objectKey,
        }), { expiresIn: 300 });
        return { downloadUrl };
    }
    async render(fields, values, options) {
        const html = this.buildHtml(fields, values, options);
        const browser = await chromium.launch({
            executablePath: '/opt/pw-browsers/chromium',
        });
        try {
            const page = await browser.newPage({
                viewport: { width: options.canvasWidth, height: options.canvasHeight },
            });
            await page.setContent(html, { waitUntil: 'networkidle' });
            if (options.format === ExportFormat.PDF) {
                return await page.pdf({
                    width: `${options.canvasWidth}px`,
                    height: `${options.canvasHeight}px`,
                    printBackground: true,
                });
            }
            return await page.screenshot({ type: 'png' });
        }
        finally {
            await browser.close();
        }
    }
    buildHtml(fields, values, options) {
        const valueByFieldId = new Map(values.map((value) => [value.templateFieldId, value.value]));
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
                return `<div style="${box}background:${this.escapeAttr(value || '#ffffff')};"></div>`;
            }
            const textColor = field.color ?? '#111111';
            return `<div style="${box}font-family:sans-serif;font-size:${field.fontSize}px;color:${this.escapeAttr(textColor)};white-space:pre-wrap;">${this.escapeHtml(value)}</div>`;
        })
            .join('');
        return `<!doctype html><html><body style="margin:0;width:${options.canvasWidth}px;height:${options.canvasHeight}px;position:relative;background:#ffffff;">${fieldsHtml}</body></html>`;
    }
    escapeHtml(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    escapeAttr(value) {
        return value.replace(/"/g, '&quot;');
    }
    async uploadToS3(objectKey, buffer, format) {
        await this.client().send(new PutObjectCommand({
            Bucket: this.config.getOrThrow('S3_BUCKET'),
            Key: objectKey,
            Body: buffer,
            ContentType: format === ExportFormat.PDF ? 'application/pdf' : 'image/png',
            CacheControl: 'private, no-store',
        }));
    }
    client() {
        return new S3Client({
            region: this.config.get('S3_REGION') ?? 'auto',
            endpoint: this.config.get('S3_ENDPOINT') || undefined,
            forcePathStyle: this.config.get('S3_FORCE_PATH_STYLE') === 'true',
            credentials: {
                accessKeyId: this.config.getOrThrow('S3_ACCESS_KEY_ID'),
                secretAccessKey: this.config.getOrThrow('S3_SECRET_ACCESS_KEY'),
            },
        });
    }
    async assertCanView(user, organizationId) {
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role)
            throw new NotFoundException('Organization not found');
    }
    async assertCanContribute(user, organizationId) {
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role)
            throw new NotFoundException('Organization not found');
        if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
            throw new ForbiddenException('Only contributors, managers, and owners can export assets');
        }
        return role;
    }
    async findAssetOrThrow(organizationId, projectId, assetId) {
        const project = await this.prisma.project.findFirst({
            where: { id: projectId, organizationId },
            select: { id: true },
        });
        if (!project)
            throw new NotFoundException('Project not found');
        const asset = await this.prisma.projectAsset.findFirst({
            where: { id: assetId, projectId, unlinkedAt: null },
        });
        if (!asset)
            throw new NotFoundException('Asset not found');
        return asset;
    }
};
ExportsService = ExportsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ConfigService,
        ActivityLogService])
], ExportsService);
export { ExportsService };
//# sourceMappingURL=exports.service.js.map