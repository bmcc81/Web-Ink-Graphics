import { AttachmentCategory } from '@prisma/client';
export declare class CreateBriefAttachmentDto {
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category: AttachmentCategory;
}
