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
import { CreateGoalDto } from './dto/create-goal.dto.js';
import { UpdateGoalDto } from './dto/update-goal.dto.js';
import { GoalsService } from './goals.service.js';
let GoalsController = class GoalsController {
    goals;
    constructor(goals) {
        this.goals = goals;
    }
    list(user, organizationId) {
        return this.goals.list(user, organizationId);
    }
    create(user, organizationId, dto) {
        return this.goals.create(user, organizationId, dto);
    }
    findOne(user, organizationId, goalId) {
        return this.goals.findOne(user, organizationId, goalId);
    }
    update(user, organizationId, goalId, dto) {
        return this.goals.update(user, organizationId, goalId, dto);
    }
    remove(user, organizationId, goalId) {
        return this.goals.remove(user, organizationId, goalId);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GoalsController.prototype, "list", null);
__decorate([
    Post(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CreateGoalDto]),
    __metadata("design:returntype", void 0)
], GoalsController.prototype, "create", null);
__decorate([
    Get(':goalId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('goalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], GoalsController.prototype, "findOne", null);
__decorate([
    Patch(':goalId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('goalId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, UpdateGoalDto]),
    __metadata("design:returntype", void 0)
], GoalsController.prototype, "update", null);
__decorate([
    Delete(':goalId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('goalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], GoalsController.prototype, "remove", null);
GoalsController = __decorate([
    Controller('organizations/:organizationId/goals'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [GoalsService])
], GoalsController);
export { GoalsController };
//# sourceMappingURL=goals.controller.js.map