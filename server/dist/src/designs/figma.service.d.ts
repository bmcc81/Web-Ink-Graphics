import { ConfigService } from '@nestjs/config';
export interface ParsedFigmaUrl {
    fileKey: string;
    nodeId: string | null;
}
export interface FigmaMetadata {
    name: string | null;
    lastModified: Date | null;
    thumbnailUrl: string | null;
}
export declare class FigmaService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    parseFigmaUrl(rawUrl: string): ParsedFigmaUrl;
    fetchMetadata(fileKey: string, nodeId: string | null): Promise<FigmaMetadata | null>;
    private fetchFileMetadata;
    private fetchNodeMetadata;
    private fetchThumbnail;
}
