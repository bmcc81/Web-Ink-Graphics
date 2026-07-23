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
import { Body, Controller, Get, Param, Patch, Post, UseGuards, } from '@nestjs/common';
import { Role } from '../generated/prisma/client.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { CreateDesignTemplateDto } from './dto/create-design-template.dto.js';
import { UpdateDesignTemplateDto } from './dto/update-design-template.dto.js';
import { TemplatesService } from './templates.service.js';
let TemplatesController = class TemplatesController {
    templates;
    constructor(templates) {
        this.templates = templates;
    }
    list(user) {
        return this.templates.list(user);
    }
    findOne(user, id) {
        return this.templates.findOne(user, id);
    }
    create(dto) {
        return this.templates.create(dto);
    }
    update(id, dto) {
        return this.templates.update(id, dto);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TemplatesController.prototype, "list", null);
__decorate([
    Get(':id'),
    __param(0, CurrentUser()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TemplatesController.prototype, "findOne", null);
__decorate([
    Post(),
    UseGuards(RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDesignTemplateDto]),
    __metadata("design:returntype", void 0)
], TemplatesController.prototype, "create", null);
__decorate([
    Patch(':id'),
    UseGuards(RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateDesignTemplateDto]),
    __metadata("design:returntype", void 0)
], TemplatesController.prototype, "update", null);
TemplatesController = __decorate([
    Controller('templates'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [TemplatesService])
], TemplatesController);
export { TemplatesController };
//# sourceMappingURL=templates.controller.js.map