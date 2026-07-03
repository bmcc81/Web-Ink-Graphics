import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrganizationRole, Role } from '@prisma/client';
import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';
import { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUploadDto } from './dto/create-upload.dto';

const extensions: Record<CreateUploadDto['contentType'], string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    'docx',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'text/plain': 'txt',
};

@Injectable()
export class MediaService {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async createUpload(user: AuthUser, dto: CreateUploadDto) {
    const purpose = dto.purpose ?? 'PORTFOLIO';
    const folder =
      purpose === 'DISCOVERY'
        ? await this.discoveryFolder(user, dto.briefId)
        : this.portfolioFolder(user);
    const bucket = this.config.getOrThrow<string>('S3_BUCKET');
    const key = `${folder}/${new Date().toISOString().slice(0, 7)}/${randomUUID()}.${extensions[dto.contentType]}`;
    const client = this.client();
    const isPublic = purpose === 'PORTFOLIO';
    const publicBaseUrl = isPublic
      ? this.config.getOrThrow<string>('S3_PUBLIC_URL').replace(/\/+$/, '')
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

  createDownload(objectKey: string, fileName: string) {
    this.assertDiscoveryKey(objectKey);
    return getSignedUrl(
      this.client(),
      new GetObjectCommand({
        Bucket: this.config.getOrThrow<string>('S3_BUCKET'),
        Key: objectKey,
        ResponseContentDisposition: `attachment; filename="${fileName.replaceAll('"', '')}"`,
      }),
      { expiresIn: 300 },
    );
  }

  deleteDiscoveryObject(objectKey: string) {
    this.assertDiscoveryKey(objectKey);
    return this.client().send(
      new DeleteObjectCommand({
        Bucket: this.config.getOrThrow<string>('S3_BUCKET'),
        Key: objectKey,
      }),
    );
  }

  private client() {
    const endpoint = this.config.get<string>('S3_ENDPOINT');
    return new S3Client({
      region: this.config.get<string>('S3_REGION') ?? 'auto',
      endpoint: endpoint || undefined,
      forcePathStyle: this.config.get<string>('S3_FORCE_PATH_STYLE') === 'true',
      credentials: {
        accessKeyId: this.config.getOrThrow<string>('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.config.getOrThrow<string>('S3_SECRET_ACCESS_KEY'),
      },
    });
  }

  private assertDiscoveryKey(objectKey: string) {
    if (!objectKey.startsWith('discovery/')) {
      throw new Error('Invalid discovery object key');
    }
  }

  private portfolioFolder(user: AuthUser) {
    if (!this.isStaff(user)) {
      throw new ForbiddenException(
        'Only WebInk staff can upload public portfolio media',
      );
    }
    return 'portfolio';
  }

  private async discoveryFolder(user: AuthUser, briefId?: string) {
    if (!briefId) {
      throw new BadRequestException(
        'briefId is required for a discovery upload',
      );
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

  private isStaff(user: AuthUser) {
    return user.role === Role.ADMIN || user.role === Role.EDITOR;
  }
}
