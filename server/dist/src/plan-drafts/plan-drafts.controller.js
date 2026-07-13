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
exports.PlanDraftsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const plan_drafts_service_1 = require("./plan-drafts.service");
let PlanDraftsController = class PlanDraftsController {
    planDrafts;
    constructor(planDrafts) {
        this.planDrafts = planDrafts;
    }
    list(user, briefId) {
        return this.planDrafts.list(user, briefId);
    }
    generate(user, briefId) {
        return this.planDrafts.generate(user, briefId);
    }
    apply(user, briefId, planDraftId) {
        return this.planDrafts.apply(user, briefId, planDraftId);
    }
};
exports.PlanDraftsController = PlanDraftsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PlanDraftsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PlanDraftsController.prototype, "generate", null);
__decorate([
    (0, common_1.Post)(':planDraftId/apply'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('briefId')),
    __param(2, (0, common_1.Param)('planDraftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], PlanDraftsController.prototype, "apply", null);
exports.PlanDraftsController = PlanDraftsController = __decorate([
    (0, common_1.Controller)('clients/briefs/:briefId/plan-drafts'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [plan_drafts_service_1.PlanDraftsService])
], PlanDraftsController);
//# sourceMappingURL=plan-drafts.controller.js.map