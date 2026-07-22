import type { AuthUser } from '../auth/auth-user.js';
import { CreateUploadDto } from './dto/create-upload.dto.js';
import { MediaService } from './media.service.js';
export declare class MediaController {
    private readonly media;
    constructor(media: MediaService);
    createUpload(user: AuthUser, dto: CreateUploadDto): Promise<{
        uploadUrl: string;
        publicUrl: string | undefined;
        key: string;
        expiresIn: number;
        headers: {
            'Content-Type': "image/jpeg" | "image/png" | "image/webp" | "image/avif" | "application/pdf" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "text/plain";
            'Cache-Control': string;
        };
    }>;
}
