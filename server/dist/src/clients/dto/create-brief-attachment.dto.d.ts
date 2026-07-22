import { AttachmentCategory } from '../../generated/prisma/client.js';
export declare class CreateBriefAttachmentDto {
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category: AttachmentCategory;
}
