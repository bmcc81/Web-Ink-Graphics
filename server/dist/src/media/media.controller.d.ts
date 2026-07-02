import { CreateUploadDto } from './dto/create-upload.dto';
import { MediaService } from './media.service';
export declare class MediaController {
    private readonly media;
    constructor(media: MediaService);
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
}
