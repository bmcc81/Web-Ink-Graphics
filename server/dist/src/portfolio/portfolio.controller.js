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
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, } from '@nestjs/common';
import { Role } from '../generated/prisma/client.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { Roles } from '../auth/roles.decorator.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto.js';
import { PortfolioQueryDto } from './dto/portfolio-query.dto.js';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto.js';
import { PortfolioService } from './portfolio.service.js';
let PortfolioController = class PortfolioController {
    portfolio;
    constructor(portfolio) {
        this.portfolio = portfolio;
    }
    findAll(query) {
        return this.portfolio.findAll(query);
    }
    findFeatured() {
        return this.portfolio.findFeatured();
    }
    findAllForAdmin(query) {
        return this.portfolio.findAll(query, true);
    }
    findCategories() {
        return this.portfolio.findCategories();
    }
    findOneForAdmin(slug) {
        return this.portfolio.findOne(slug);
    }
    findOne(slug) {
        return this.portfolio.findPublished(slug);
    }
    create(dto) {
        return this.portfolio.create(dto);
    }
    update(slug, dto) {
        return this.portfolio.update(slug, dto);
    }
    archive(slug) {
        return this.portfolio.archive(slug);
    }
};
__decorate([
    Get(),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PortfolioQueryDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findAll", null);
__decorate([
    Get('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findFeatured", null);
__decorate([
    Get('admin/all'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PortfolioQueryDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findAllForAdmin", null);
__decorate([
    Get('admin/categories'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findCategories", null);
__decorate([
    Get('admin/:slug'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findOneForAdmin", null);
__decorate([
    Get(':slug'),
    __param(0, Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "findOne", null);
__decorate([
    Post(),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePortfolioProjectDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "create", null);
__decorate([
    Patch(':slug'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN, Role.EDITOR),
    __param(0, Param('slug')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdatePortfolioProjectDto]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "update", null);
__decorate([
    Delete(':slug'),
    UseGuards(JwtAuthGuard, RolesGuard),
    Roles(Role.ADMIN),
    __param(0, Param('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PortfolioController.prototype, "archive", null);
PortfolioController = __decorate([
    Controller('portfolio'),
    __metadata("design:paramtypes", [PortfolioService])
], PortfolioController);
export { PortfolioController };
//# sourceMappingURL=portfolio.controller.js.map