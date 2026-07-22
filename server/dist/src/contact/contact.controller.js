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
import { Body, Controller, Get, Param, Patch, Post, Query, Res, UseGuards, } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { Role } from '../generated/prisma/client.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { ContactService } from './contact.service.js';
import { ContactQueryDto } from './dto/contact-query.dto.js';
import { CreateContactDto } from './dto/create-contact.dto.js';
import { UpdateContactStatusDto } from './dto/update-contact-status.dto.js';
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
__decorate([
    Post(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "create", null);
__decorate([
    Get('admin/export'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Query()),
    __param(1, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ContactQueryDto, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "export", null);
__decorate([
    Get('admin'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ContactQueryDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findAll", null);
__decorate([
    Patch('admin/:id/status'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateContactStatusDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "updateStatus", null);
ContactController = __decorate([
    Controller('contact'),
    __metadata("design:paramtypes", [ContactService])
], ContactController);
export { ContactController };
//# sourceMappingURL=contact.controller.js.map