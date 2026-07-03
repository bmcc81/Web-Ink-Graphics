declare const contentTypes: readonly ["image/jpeg", "image/png", "image/webp", "image/avif", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/plain"];
export declare class CreateUploadDto {
    fileName: string;
    contentType: (typeof contentTypes)[number];
    fileSize: number;
    purpose?: 'PORTFOLIO' | 'DISCOVERY';
    briefId?: string;
}
export {};
