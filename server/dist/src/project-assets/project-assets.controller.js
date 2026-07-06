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
exports.ProjectAssetsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_project_asset_dto_1 = require("./dto/create-project-asset.dto");
const update_asset_values_dto_1 = require("./dto/update-asset-values.dto");
const project_assets_service_1 = require("./project-assets.service");
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
exports.ProjectAssetsController = ProjectAssetsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, create_project_asset_dto_1.CreateProjectAssetDto]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "attach", null);
__decorate([
    (0, common_1.Get)(':assetId/revisions'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "listRevisions", null);
__decorate([
    (0, common_1.Patch)(':assetId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, update_asset_values_dto_1.UpdateAssetValuesDto]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "updateValues", null);
__decorate([
    (0, common_1.Post)(':assetId/approve'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "approve", null);
__decorate([
    (0, common_1.Delete)(':assetId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('assetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], ProjectAssetsController.prototype, "unlink", null);
exports.ProjectAssetsController = ProjectAssetsController = __decorate([
    (0, common_1.Controller)('organizations/:organizationId/projects/:projectId/assets'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [project_assets_service_1.ProjectAssetsService])
], ProjectAssetsController);
//# sourceMappingURL=project-assets.controller.js.map