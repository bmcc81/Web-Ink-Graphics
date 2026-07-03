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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const clients_service_1 = require("./clients.service");
const create_client_dto_1 = require("./dto/create-client.dto");
const create_discovery_brief_dto_1 = require("./dto/create-discovery-brief.dto");
const update_client_dto_1 = require("./dto/update-client.dto");
const update_discovery_brief_dto_1 = require("./dto/update-discovery-brief.dto");
const generate_prompt_dto_1 = require("./dto/generate-prompt.dto");
const create_brief_attachment_dto_1 = require("./dto/create-brief-attachment.dto");
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
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('briefs/:briefId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findBrief", null);
__decorate([
    (0, common_1.Patch)('briefs/:briefId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_discovery_brief_dto_1.UpdateDiscoveryBriefDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateBrief", null);
__decorate([
    (0, common_1.Post)('briefs/:briefId/generate-prompt'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, generate_prompt_dto_1.GeneratePromptDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "generatePrompt", null);
__decorate([
    (0, common_1.Post)('briefs/:briefId/attachments'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_brief_attachment_dto_1.CreateBriefAttachmentDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "addAttachment", null);
__decorate([
    (0, common_1.Get)('attachments/:attachmentId/download'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('attachmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "attachmentDownload", null);
__decorate([
    (0, common_1.Delete)('attachments/:attachmentId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('attachmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "deleteAttachment", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/briefs'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_discovery_brief_dto_1.CreateDiscoveryBriefDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createBrief", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map