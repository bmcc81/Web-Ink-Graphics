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
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateProjectAssetDto } from './dto/create-project-asset.dto.js';
import { UpdateAssetValuesDto } from './dto/update-asset-values.dto.js';
import { ProjectAssetsService } from './project-assets.service.js';
let ProjectAssetsController = class ProjectAssetsController {
    assets;
    constructor(assets) {
        this.assets = assets;
    }
    list(user, organizationId, projectId) {
        return this.assets.list(user, organizationId, projectId);
    }
    attach(user, organizationId, projectId, dto) {
        return this.assets.attach(user, organizationId, projectId, dto);
    }
    listRevisions(user, organizationId, projectId, assetId) {
        return this.assets.listRevisions(user, organizationId, projectId, assetId);
    }
    updateValues(user, organizationId, projectId, assetId, dto) {
        return this.assets.updateValues(user, organizationId, projectId, assetId, dto);
    }
    approve(user, organizationId, projectId, assetId) {
        return this.assets.approve(user, organizationId, projectId, assetId);
    }
    unlink(user, organizationId, projectId, assetId) {
        return this.assets.unlink(user, organizationId, projectId, assetId);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, CreateProjectAssetDto]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "attach", null);
__decorate([
    Get(':assetId/revisions'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "listRevisions", null);
__decorate([
    Patch(':assetId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, UpdateAssetValuesDto]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "updateValues", null);
__decorate([
    Post(':assetId/approve'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "approve", null);
__decorate([
    Delete(':assetId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "unlink", null);
ProjectAssetsController = __decorate([
    Controller('organizations/:organizationId/projects/:projectId/assets'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ProjectAssetsService])
], ProjectAssetsController);
export { ProjectAssetsController };
//# sourceMappingURL=project-assets.controller.js.map