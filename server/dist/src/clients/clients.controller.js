var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { CreateDiscoveryBriefDto } from './dto/create-discovery-brief.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { UpdateDiscoveryBriefDto } from './dto/update-discovery-brief.dto.js';
import { GeneratePromptDto } from './dto/generate-prompt.dto.js';
import { CreateBriefAttachmentDto } from './dto/create-brief-attachment.dto.js';
let ClientsController = class ClientsController {
    clients;
    constructor(clients) {
        this.clients = clients;
    }
    findAll(user) {
        return this.clients.findAll(user);
    }
    create(user, dto) {
        return this.clients.create(user, dto);
    }
    findBrief(user, briefId) {
        return this.clients.findBrief(user, briefId);
    }
    updateBrief(user, briefId, dto) {
        return this.clients.updateBrief(user, briefId, dto);
    }
    generatePrompt(user, briefId, dto) {
        return this.clients.generatePrompt(user, briefId, dto.outputType);
    }
    addAttachment(user, briefId, dto) {
        return this.clients.addAttachment(user, briefId, dto);
    }
    attachmentDownload(user, attachmentId) {
        return this.clients.attachmentDownload(user, attachmentId);
    }
    deleteAttachment(user, attachmentId) {
        return this.clients.deleteAttachment(user, attachmentId);
    }
    findOne(user, id) {
        return this.clients.findOne(user, id);
    }
    update(user, id, dto) {
        return this.clients.update(user, id, dto);
    }
    createBrief(user, id, dto) {
        return this.clients.createBrief(user, id, dto);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAll", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    Get('briefs/:briefId'),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findBrief", null);
__decorate([
    Patch('briefs/:briefId'),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateDiscoveryBriefDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateBrief", null);
__decorate([
    Post('briefs/:briefId/generate-prompt'),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, GeneratePromptDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "generatePrompt", null);
__decorate([
    Post('briefs/:briefId/attachments'),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CreateBriefAttachmentDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "addAttachment", null);
__decorate([
    Get('attachments/:attachmentId/download'),
    __param(0, CurrentUser()),
    __param(1, Param('attachmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "attachmentDownload", null);
__decorate([
    Delete('attachments/:attachmentId'),
    __param(0, CurrentUser()),
    __param(1, Param('attachmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "deleteAttachment", null);
__decorate([
    Get(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    Post(':id/briefs'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CreateDiscoveryBriefDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createBrief", null);
ClientsController = __decorate([
    Controller('clients'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ClientsService])
], ClientsController);
export { ClientsController };
//# sourceMappingURL=clients.controller.js.map