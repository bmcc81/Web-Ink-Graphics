var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrganizationRole, Role } from '../generated/prisma/client.js';
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client, } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';
import { CONTRIBUTE_ROLES, resolveOrganizationRole, } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
const extensions = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/avif': 'avif',
    'application/pdf': 'pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'text/plain': 'txt',
};
let MediaService = class MediaService {
    config;
    prisma;
    constructor(config, prisma) {
        this.config = config;
        this.prisma = prisma;
    }
    async createUpload(user, dto) {
        const purpose = dto.purpose ?? 'PORTFOLIO';
        const folder = purpose === 'DISCOVERY'
            ? await this.discoveryFolder(user, dto.briefId)
            : purpose === 'ASSET'
                ? await this.assetFolder(user, dto.organizationId)
                : this.portfolioFolder(user);
        const bucket = this.config.getOrThrow('S3_BUCKET');
        const key = `${folder}/${new Date().toISOString().slice(0, 7)}/${randomUUID()}.${extensions[dto.contentType]}`;
        const client = this.client();
        const isPublic = purpose === 'PORTFOLIO' || purpose === 'ASSET';
        const publicBaseUrl = isPublic
            ? this.config.getOrThrow('S3_PUBLIC_URL').replace(/\/+$/, '')
            : '';
        const cacheControl = isPublic
            ? 'public, max-age=31536000, immutable'
            : 'private, no-store';
        const command = new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            ContentType: dto.contentType,
            ContentLength: dto.fileSize,
            CacheControl: cacheControl,
        });
        return {
            uploadUrl: await getSignedUrl(client, command, { expiresIn: 300 }),
            publicUrl: isPublic ? `${publicBaseUrl}/${key}` : undefined,
            key,
            expiresIn: 300,
            headers: {
                'Content-Type': dto.contentType,
                'Cache-Control': cacheControl,
            },
        };
    }
    createDownload(objectKey, fileName) {
        this.assertDiscoveryKey(objectKey);
        return getSignedUrl(this.client(), new GetObjectCommand({
            Bucket: this.config.getOrThrow('S3_BUCKET'),
            Key: objectKey,
            ResponseContentDisposition: `attachment; filename="${fileName.replaceAll('"', '')}"`,
        }), { expiresIn: 300 });
    }
    deleteDiscoveryObject(objectKey) {
        this.assertDiscoveryKey(objectKey);
        return this.client().send(new DeleteObjectCommand({
            Bucket: this.config.getOrThrow('S3_BUCKET'),
            Key: objectKey,
        }));
    }
    client() {
        const endpoint = this.config.get('S3_ENDPOINT');
        return new S3Client({
            region: this.config.get('S3_REGION') ?? 'auto',
            endpoint: endpoint || undefined,
            forcePathStyle: this.config.get('S3_FORCE_PATH_STYLE') === 'true',
            credentials: {
                accessKeyId: this.config.getOrThrow('S3_ACCESS_KEY_ID'),
                secretAccessKey: this.config.getOrThrow('S3_SECRET_ACCESS_KEY'),
            },
        });
    }
    assertDiscoveryKey(objectKey) {
        if (!objectKey.startsWith('discovery/')) {
            throw new Error('Invalid discovery object key');
        }
    }
    portfolioFolder(user) {
        if (!this.isStaff(user)) {
            throw new ForbiddenException('Only WebInk staff can upload public portfolio media');
        }
        return 'portfolio';
    }
    async discoveryFolder(user, briefId) {
        if (!briefId) {
            throw new BadRequestException('briefId is required for a discovery upload');
        }
        const brief = await this.prisma.discoveryBrief.findFirst({
            where: {
                id: briefId,
                ...(this.isStaff(user)
                    ? {}
                    : {
                        client: {
                            organization: {
                                memberships: {
                                    some: {
                                        userId: user.id,
                                        role: {
                                            in: [
                                                OrganizationRole.OWNER,
                                                OrganizationRole.MANAGER,
                                                OrganizationRole.CONTRIBUTOR,
                                                OrganizationRole.WEBINK_SPECIALIST,
                                            ],
                                        },
                                    },
                                },
                            },
                        },
                    }),
            },
            select: { client: { select: { organizationId: true } } },
        });
        if (!brief) {
            throw new NotFoundException('Discovery brief not found');
        }
        return `discovery/${brief.client.organizationId}`;
    }
    isStaff(user) {
        return user.role === Role.ADMIN || user.role === Role.EDITOR;
    }
    async assetFolder(user, organizationId) {
        if (!organizationId) {
            throw new BadRequestException('organizationId is required for an asset upload');
        }
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role) {
            throw new NotFoundException('Organization not found');
        }
        if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
            throw new ForbiddenException('Only contributors, managers, and owners can upload project assets');
        }
        return `assets/${organizationId}`;
    }
};
MediaService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService,
        PrismaService])
], MediaService);
export { MediaService };
//# sourceMappingURL=media.service.js.map