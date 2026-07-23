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
import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { PlanDraftsService } from './plan-drafts.service.js';
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
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PlanDraftsController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PlanDraftsController.prototype, "generate", null);
__decorate([
    Post(':planDraftId/apply'),
    __param(0, CurrentUser()),
    __param(1, Param('briefId')),
    __param(2, Param('planDraftId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], PlanDraftsController.prototype, "apply", null);
PlanDraftsController = __decorate([
    Controller('clients/briefs/:briefId/plan-drafts'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [PlanDraftsService])
], PlanDraftsController);
export { PlanDraftsController };
//# sourceMappingURL=plan-drafts.controller.js.map