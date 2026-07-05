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
exports.DesignsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_design_document_dto_1 = require("./dto/create-design-document.dto");
const designs_service_1 = require("./designs.service");
let DesignsController = class DesignsController {
    designs;
    constructor(designs) {
        this.designs = designs;
    }
    list(user, organizationId, projectId) {
        return this.designs.list(user, organizationId, projectId);
    }
    attach(user, organizationId, projectId, dto) {
        return this.designs.attach(user, organizationId, projectId, dto);
    }
    sync(user, organizationId, projectId, designId) {
        return this.designs.sync(user, organizationId, projectId, designId);
    }
    unlink(user, organizationId, projectId, designId) {
        return this.designs.unlink(user, organizationId, projectId, designId);
    }
};
exports.DesignsController = DesignsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, create_design_document_dto_1.CreateDesignDocumentDto]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "attach", null);
__decorate([
    (0, common_1.Post)(':designId/sync'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('designId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "sync", null);
__decorate([
    (0, common_1.Delete)(':designId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('designId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], DesignsController.prototype, "unlink", null);
exports.DesignsController = DesignsController = __decorate([
    (0, common_1.Controller)('organizations/:organizationId/projects/:projectId/designs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [designs_service_1.DesignsService])
], DesignsController);
//# sourceMappingURL=designs.controller.js.map