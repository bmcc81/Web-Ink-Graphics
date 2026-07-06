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
exports.OrganizationsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_invitation_dto_1 = require("./dto/create-invitation.dto");
const update_member_role_dto_1 = require("./dto/update-member-role.dto");
const upsert_brand_kit_dto_1 = require("./dto/upsert-brand-kit.dto");
const organizations_service_1 = require("./organizations.service");
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
exports.OrganizationsController = OrganizationsController;
__decorate([
    (0, common_1.Get)(':organizationId/members'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "members", null);
__decorate([
    (0, common_1.Get)(':organizationId/invitations'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "invitations", null);
__decorate([
    (0, common_1.Post)(':organizationId/invitations'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_invitation_dto_1.CreateInvitationDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "createInvitation", null);
__decorate([
    (0, common_1.Patch)(':organizationId/members/:membershipId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('membershipId')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, update_member_role_dto_1.UpdateMemberRoleDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "updateMemberRole", null);
__decorate([
    (0, common_1.Delete)(':organizationId/members/:membershipId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('membershipId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "removeMember", null);
__decorate([
    (0, common_1.Delete)(':organizationId/invitations/:invitationId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Param)('invitationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "revokeInvitation", null);
__decorate([
    (0, common_1.Get)(':organizationId/brand-kit'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "getBrandKit", null);
__decorate([
    (0, common_1.Put)(':organizationId/brand-kit'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('organizationId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, upsert_brand_kit_dto_1.UpsertBrandKitDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "upsertBrandKit", null);
exports.OrganizationsController = OrganizationsController = __decorate([
    (0, common_1.Controller)('organizations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
], OrganizationsController);
//# sourceMappingURL=organizations.controller.js.map