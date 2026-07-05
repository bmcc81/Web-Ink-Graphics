"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigmaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let FigmaService = FigmaService_1 = class FigmaService {
    config;
    logger = new common_1.Logger(FigmaService_1.name);
    constructor(config) {
        this.config = config;
    }
    parseFigmaUrl(rawUrl) {
        let url;
        try {
            url = new URL(rawUrl);
        }
        catch {
            throw new common_1.BadRequestException('That does not look like a valid URL');
        }
        if (!/(^|\.)figma\.com$/.test(url.hostname)) {
            throw new common_1.BadRequestException('Only figma.com links can be attached');
        }
        const match = url.pathname.match(/\/(file|design)\/([^/]+)/);
        if (!match) {
            throw new common_1.BadRequestException('Could not find a file key in this Figma link');
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
exports.FigmaService = FigmaService;
exports.FigmaService = FigmaService = FigmaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FigmaService);
//# sourceMappingURL=figma.service.js.map