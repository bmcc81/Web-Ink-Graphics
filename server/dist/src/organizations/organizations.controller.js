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
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards, } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { CreateInvitationDto } from './dto/create-invitation.dto.js';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto.js';
import { UpsertBrandKitDto } from './dto/upsert-brand-kit.dto.js';
import { OrganizationsService } from './organizations.service.js';
let OrganizationsController = class OrganizationsController {
    organizations;
    constructor(organizations) {
        this.organizations = organizations;
    }
    members(user, organizationId) {
        return this.organizations.members(user, organizationId);
    }
    invitations(user, organizationId) {
        return this.organizations.invitations(user, organizationId);
    }
    createInvitation(user, organizationId, dto) {
        return this.organizations.createInvitation(user, organizationId, dto);
    }
    updateMemberRole(user, organizationId, membershipId, dto) {
        return this.organizations.updateMemberRole(user, organizationId, membershipId, dto);
    }
    removeMember(user, organizationId, membershipId) {
        return this.organizations.removeMember(user, organizationId, membershipId);
    }
    revokeInvitation(user, organizationId, invitationId) {
        return this.organizations.revokeInvitation(user, organizationId, invitationId);
    }
    getBrandKit(user, organizationId) {
        return this.organizations.getBrandKit(user, organizationId);
    }
    upsertBrandKit(user, organizationId, dto) {
        return this.organizations.upsertBrandKit(user, organizationId, dto);
    }
};
__decorate([
    Get(':organizationId/members'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "members", null);
__decorate([
    Get(':organizationId/invitations'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "invitations", null);
__decorate([
    Post(':organizationId/invitations'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, CreateInvitationDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "createInvitation", null);
__decorate([
    Patch(':organizationId/members/:membershipId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('membershipId')),
    __param(3, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, UpdateMemberRoleDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "updateMemberRole", null);
__decorate([
    Delete(':organizationId/members/:membershipId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('membershipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "removeMember", null);
__decorate([
    Delete(':organizationId/invitations/:invitationId'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Param('invitationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "revokeInvitation", null);
__decorate([
    Get(':organizationId/brand-kit'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "getBrandKit", null);
__decorate([
    Put(':organizationId/brand-kit'),
    __param(0, CurrentUser()),
    __param(1, Param('organizationId')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpsertBrandKitDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "upsertBrandKit", null);
OrganizationsController = __decorate([
    Controller('organizations'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [OrganizationsService])
], OrganizationsController);
export { OrganizationsController };
//# sourceMappingURL=organizations.controller.js.map