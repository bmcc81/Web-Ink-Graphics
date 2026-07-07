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
exports.CreativeBriefsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const creative_briefs_service_1 = require("./creative-briefs.service");
let CreativeBriefsController = class CreativeBriefsController {
    creativeBriefs;
    constructor(creativeBriefs) {
        this.creativeBriefs = creativeBriefs;
    }
    list(user, organizationId, projectId) {
        return this.creativeBriefs.list(user, organizationId, projectId);
    }
    generate(user, organizationId, projectId) {
        return this.creativeBriefs.generate(user, organizationId, projectId);
    }
    approve(user, organizationId, projectId, briefId) {
        return this.creativeBriefs.approve(user, organizationId, projectId, briefId);
    }
};
exports.CreativeBriefsController = CreativeBriefsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], CreativeBriefsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], CreativeBriefsController.prototype, "generate", null);
__decorate([
    (0, common_1.Patch)(':briefId/approve'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('projectId')),
    __param(3, (0, common_1.Param)('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], CreativeBriefsController.prototype, "approve", null);
exports.CreativeBriefsController = CreativeBriefsController = __decorate([
    (0, common_1.Controller)('organizations/:organizationId/projects/:projectId/creative-briefs'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [creative_briefs_service_1.CreativeBriefsService])
], CreativeBriefsController);
//# sourceMappingURL=creative-briefs.controller.js.map