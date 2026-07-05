import { BadRequestException, Injectable, Logger } from '@nestjs/common';
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

@Injectable()
export class FigmaService {
  private readonly logger = new Logger(FigmaService.name);

  constructor(private readonly config: ConfigService) {}

  parseFigmaUrl(rawUrl: string): ParsedFigmaUrl {
    let url: URL;
    try {
      url = new URL(rawUrl);
    } catch {
      throw new BadRequestException('That does not look like a valid URL');
    }
    if (!/(^|\.)figma\.com$/.test(url.hostname)) {
      throw new BadRequestException('Only figma.com links can be attached');
    }
    const match = url.pathname.match(/\/(file|design)\/([^/]+)/);
    if (!match) {
      throw new BadRequestException(
        'Could not find a file key in this Figma link',
      );
    }
    const fileKey = match[2];
    const nodeIdParam = url.searchParams.get('node-id');
    const nodeId = nodeIdParam ? nodeIdParam.replace('-', ':') : null;
    return { fileKey, nodeId };
  }

  async fetchMetadata(
    fileKey: string,
    nodeId: string | null,
  ): Promise<FigmaMetadata | null> {
    const token = this.config.get<string>('FIGMA_ACCESS_TOKEN');
    if (!token) {
      return null;
    }
    try {
      const headers = { 'X-Figma-Token': token };
      if (nodeId) {
        return await this.fetchNodeMetadata(fileKey, nodeId, headers);
      }
      return await this.fetchFileMetadata(fileKey, headers);
    } catch (error: unknown) {
      this.logger.error('Figma sync failed', error);
      return null;
    }
  }

  private async fetchFileMetadata(
    fileKey: string,
    headers: Record<string, string>,
  ): Promise<FigmaMetadata | null> {
    const response = await fetch(
      `https://api.figma.com/v1/files/${fileKey}?depth=1`,
      { headers },
    );
    if (!response.ok) {
      this.logger.warn(`Figma file fetch returned ${response.status}`);
      return null;
    }
    const body = (await response.json()) as {
      name?: string;
      lastModified?: string;
      thumbnailUrl?: string;
    };
    return {
      name: body.name ?? null,
      lastModified: body.lastModified ? new Date(body.lastModified) : null,
      thumbnailUrl: body.thumbnailUrl ?? null,
    };
  }

  private async fetchNodeMetadata(
    fileKey: string,
    nodeId: string,
    headers: Record<string, string>,
  ): Promise<FigmaMetadata | null> {
    const response = await fetch(
      `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`,
      { headers },
    );
    if (!response.ok) {
      this.logger.warn(`Figma node fetch returned ${response.status}`);
      return null;
    }
    const body = (await response.json()) as {
      lastModified?: string;
      nodes?: Record<string, { document?: { name?: string } }>;
    };
    const node = body.nodes?.[nodeId];
    const thumbnailUrl = await this.fetchThumbnail(fileKey, nodeId, headers);
    return {
      name: node?.document?.name ?? null,
      lastModified: body.lastModified ? new Date(body.lastModified) : null,
      thumbnailUrl,
    };
  }

  private async fetchThumbnail(
    fileKey: string,
    nodeId: string,
    headers: Record<string, string>,
  ): Promise<string | null> {
    const response = await fetch(
      `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(nodeId)}`,
      { headers },
    );
    if (!response.ok) return null;
    const body = (await response.json()) as {
      images?: Record<string, string | null>;
    };
    if (!body.images) return null;
    const values = Object.values(body.images).filter((value): value is string =>
      Boolean(value),
    );
    return values[0] ?? null;
  }
}
