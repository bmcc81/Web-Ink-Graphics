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
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateExportDto } from './dto/create-export.dto.js';
import { ExportsService } from './exports.service.js';
let ExportsController = class ExportsController {
    exports;
    constructor(exports) {
        this.exports = exports;
    }
    list(user, organizationId, projectId, assetId) {
        return this.exports.list(user, organizationId, projectId, assetId);
    }
    requestExport(user, organizationId, projectId, assetId, dto) {
        return this.exports.requestExport(user, organizationId, projectId, assetId, dto);
    }
    downloadUrl(user, organizationId, projectId, assetId, exportId) {
        return this.exports.downloadUrl(user, organizationId, projectId, assetId, exportId);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ExportsController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __param(4, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, CreateExportDto]),
    __metadata("design:returntype", void 0)
], ExportsController.prototype, "requestExport", null);
__decorate([
    Get(':exportId/download'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('projectId')),
    __param(3, Param('assetId')),
    __param(4, Param('exportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ExportsController.prototype, "downloadUrl", null);
ExportsController = __decorate([
    Controller('organizations/:organizationId/projects/:projectId/assets/:assetId/exports'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ExportsService])
], ExportsController);
export { ExportsController };
//# sourceMappingURL=exports.controller.js.map