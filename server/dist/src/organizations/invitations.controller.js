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
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { AcceptInvitationDto } from './dto/accept-invitation.dto.js';
import { OrganizationsService } from './organizations.service.js';
let InvitationsController = class InvitationsController {
    organizations;
    constructor(organizations) {
        this.organizations = organizations;
    }
    inspect(token) {
        return this.organizations.inspectInvitation(token);
    }
    accept(token, dto) {
        return this.organizations.acceptInvitation(token, dto);
    }
};
__decorate([
    Get(':token'),
    __param(0, Param('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "inspect", null);
__decorate([
    Post(':token/accept'),
    __param(0, Param('token')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AcceptInvitationDto]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "accept", null);
InvitationsController = __decorate([
    Controller('invitations'),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 10, ttl: 60_000 } }),
    __metadata("design:paramtypes", [OrganizationsService])
], InvitationsController);
export { InvitationsController };
//# sourceMappingURL=invitations.controller.js.map