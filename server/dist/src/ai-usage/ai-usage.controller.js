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
import { Controller, Get, NotFoundException, Param, UseGuards, } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { resolveOrganizationRole } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { AiUsageService } from './ai-usage.service.js';
let AiUsageController = class AiUsageController {
    aiUsage;
    prisma;
    constructor(aiUsage, prisma) {
        this.aiUsage = aiUsage;
        this.prisma = prisma;
    }
    async summary(user, organizationId) {
        const role = await resolveOrganizationRole(this.prisma, user, organizationId);
        if (!role)
            throw new NotFoundException('Organization not found');
        return this.aiUsage.summary(organizationId);
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AiUsageController.prototype, "summary", null);
AiUsageController = __decorate([
    Controller('organizations/:organizationId/ai-usage'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [AiUsageService,
        PrismaService])
], AiUsageController);
export { AiUsageController };
//# sourceMappingURL=ai-usage.controller.js.map