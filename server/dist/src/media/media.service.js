"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
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
            : this.portfolioFolder(user);
        const bucket = this.config.getOrThrow('S3_BUCKET');
        const key = `${folder}/${new Date().toISOString().slice(0, 7)}/${(0, crypto_1.randomUUID)()}.${extensions[dto.contentType]}`;
        const client = this.client();
        const isPublic = purpose === 'PORTFOLIO';
        const publicBaseUrl = isPublic
            ? this.config.getOrThrow('S3_PUBLIC_URL').replace(/\/+$/, '')
            : '';
        const cacheControl = isPublic
            ? 'public, max-age=31536000, immutable'
            : 'private, no-store';
        const command = new client_s3_1.PutObjectCommand({
            Bucket: bucket,
            Key: key,
            ContentType: dto.contentType,
            ContentLength: dto.fileSize,
            CacheControl: cacheControl,
        });
        return {
            uploadUrl: await (0, s3_request_presigner_1.getSignedUrl)(client, command, { expiresIn: 300 }),
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
        return (0, s3_request_presigner_1.getSignedUrl)(this.client(), new client_s3_1.GetObjectCommand({
            Bucket: this.config.getOrThrow('S3_BUCKET'),
            Key: objectKey,
            ResponseContentDisposition: `attachment; filename="${fileName.replaceAll('"', '')}"`,
        }), { expiresIn: 300 });
    }
    deleteDiscoveryObject(objectKey) {
        this.assertDiscoveryKey(objectKey);
        return this.client().send(new client_s3_1.DeleteObjectCommand({
            Bucket: this.config.getOrThrow('S3_BUCKET'),
            Key: objectKey,
        }));
    }
    client() {
        const endpoint = this.config.get('S3_ENDPOINT');
        return new client_s3_1.S3Client({
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
            throw new common_1.ForbiddenException('Only WebInk staff can upload public portfolio media');
        }
        return 'portfolio';
    }
    async discoveryFolder(user, briefId) {
        if (!briefId) {
            throw new common_1.BadRequestException('briefId is required for a discovery upload');
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
                                                client_1.OrganizationRole.OWNER,
                                                client_1.OrganizationRole.MANAGER,
                                                client_1.OrganizationRole.CONTRIBUTOR,
                                                client_1.OrganizationRole.WEBINK_SPECIALIST,
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
            throw new common_1.NotFoundException('Discovery brief not found');
        }
        return `discovery/${brief.client.organizationId}`;
    }
    isStaff(user) {
        return user.role === client_1.Role.ADMIN || user.role === client_1.Role.EDITOR;
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], MediaService);
//# sourceMappingURL=media.service.js.map