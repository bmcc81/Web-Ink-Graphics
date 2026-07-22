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
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { ActivityLogService } from './activity-log.service.js';
let ActivityLogController = class ActivityLogController {
    activityLog;
    constructor(activityLog) {
        this.activityLog = activityLog;
    }
    list(user, organizationId) {
        return this.activityLog.list(user, organizationId);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ActivityLogController.prototype, "list", null);
ActivityLogController = __decorate([
    Controller('organizations/:organizationId/activity'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [ActivityLogService])
], ActivityLogController);
export { ActivityLogController };
//# sourceMappingURL=activity-log.controller.js.map