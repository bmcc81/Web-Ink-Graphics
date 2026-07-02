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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const contact_service_1 = require("./contact.service");
const contact_query_dto_1 = require("./dto/contact-query.dto");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_status_dto_1 = require("./dto/update-contact-status.dto");
let ContactController = class ContactController {
    contact;
    constructor(contact) {
        this.contact = contact;
    }
    create(dto) {
        return this.contact.create(dto);
    }
    async export(query, response) {
        const date = new Date().toISOString().slice(0, 10);
        response
            .type('text/csv')
            .attachment(`webink-leads-${date}.csv`)
            .send(await this.contact.exportCsv(query));
    }
    findAll(query) {
        return this.contact.findAll(query);
    }
    updateStatus(id, status) {
        return this.contact.updateStatus(id, status.contacted);
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('admin/export'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_query_dto_1.ContactQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "export", null);
__decorate([
    (0, common_1.Get)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_query_dto_1.ContactQueryDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('admin/:id/status'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_status_dto_1.UpdateContactStatusDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "updateStatus", null);
exports.ContactController = ContactController = __decorate([
    (0, common_1.Controller)('contact'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map