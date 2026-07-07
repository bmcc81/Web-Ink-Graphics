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
exports.ExportsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_export_dto_1 = require("./dto/create-export.dto");
const exports_service_1 = require("./exports.service");
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
exports.ExportsController = ExportsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ExportsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, create_export_dto_1.CreateExportDto]),
    __metadata("design:returntype", void 0)
], ExportsController.prototype, "requestExport", null);
__decorate([
    (0, common_1.Get)(':exportId/download'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __param(4, (0, common_1.Param)('exportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ExportsController.prototype, "downloadUrl", null);
exports.ExportsController = ExportsController = __decorate([
    (0, common_1.Controller)('organizations/:organizationId/projects/:projectId/assets/:assetId/exports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [exports_service_1.ExportsService])
], ExportsController);
//# sourceMappingURL=exports.controller.js.map