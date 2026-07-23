var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FigmaService_1;
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
let FigmaService = FigmaService_1 = class FigmaService {
    config;
    logger = new Logger(FigmaService_1.name);
    constructor(config) {
        this.config = config;
    }
    parseFigmaUrl(rawUrl) {
        let url;
        try {
            url = new URL(rawUrl);
        }
        catch {
            throw new BadRequestException('That does not look like a valid URL');
        }
        if (!/(^|\.)figma\.com$/.test(url.hostname)) {
            throw new BadRequestException('Only figma.com links can be attached');
        }
        const match = url.pathname.match(/\/(file|design)\/([^/]+)/);
        if (!match) {
            throw new BadRequestException('Could not find a file key in this Figma link');
        }
        const fileKey = match[2];
        const nodeIdParam = url.searchParams.get('node-id');
        const nodeId = nodeIdParam ? nodeIdParam.replace('-', ':') : null;
        return { fileKey, nodeId };
    }
    async fetchMetadata(fileKey, nodeId) {
        const token = this.config.get('FIGMA_ACCESS_TOKEN');
        if (!token) {
            return null;
        }
        try {
            const headers = { 'X-Figma-Token': token };
            if (nodeId) {
                return await this.fetchNodeMetadata(fileKey, nodeId, headers);
            }
            return await this.fetchFileMetadata(fileKey, headers);
        }
        catch (error) {
            this.logger.error('Figma sync failed', error);
            return null;
        }
    }
    async fetchFileMetadata(fileKey, headers) {
        const response = await fetch(`https://api.figma.com/v1/files/${fileKey}?depth=1`, { headers });
        if (!response.ok) {
            this.logger.warn(`Figma file fetch returned ${response.status}`);
            return null;
        }
        const body = (await response.json());
        return {
            name: body.name ?? null,
            lastModified: body.lastModified ? new Date(body.lastModified) : null,
            thumbnailUrl: body.thumbnailUrl ?? null,
        };
    }
    async fetchNodeMetadata(fileKey, nodeId, headers) {
        const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`, { headers });
        if (!response.ok) {
            this.logger.warn(`Figma node fetch returned ${response.status}`);
            return null;
        }
        const body = (await response.json());
        const node = body.nodes?.[nodeId];
        const thumbnailUrl = await this.fetchThumbnail(fileKey, nodeId, headers);
        return {
            name: node?.document?.name ?? null,
            lastModified: body.lastModified ? new Date(body.lastModified) : null,
            thumbnailUrl,
        };
    }
    async fetchThumbnail(fileKey, nodeId, headers) {
        const response = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(nodeId)}`, { headers });
        if (!response.ok)
            return null;
        const body = (await response.json());
        if (!body.images)
            return null;
        const values = Object.values(body.images).filter((value) => Boolean(value));
        return values[0] ?? null;
    }
};
FigmaService = FigmaService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], FigmaService);
export { FigmaService };
//# sourceMappingURL=figma.service.js.map