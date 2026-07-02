import { ConfigService } from '@nestjs/config';
import { CreateUploadDto } from './dto/create-upload.dto';
export declare class MediaService {
    private readonly config;
    constructor(config: ConfigService);
    createUpload(dto: CreateUploadDto): Promise<{
        uploadUrl: string;
        publicUrl: string | undefined;
        key: string;
        expiresIn: number;
        headers: {
            'Content-Type': "image/jpeg" | "image/png" | "image/webp" | "image/avif" | "application/pdf" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "text/plain";
            'Cache-Control': string;
        };
    }>;
    createDownload(objectKey: string, fileName: string): Promise<string>;
    deleteDiscoveryObject(objectKey: string): Promise<import("@aws-sdk/client-s3").DeleteObjectCommandOutput>;
    private client;
    private assertDiscoveryKey;
}
