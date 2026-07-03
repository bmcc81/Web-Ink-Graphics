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
exports.InvitationsController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const accept_invitation_dto_1 = require("./dto/accept-invitation.dto");
const organizations_service_1 = require("./organizations.service");
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
exports.InvitationsController = InvitationsController;
__decorate([
    (0, common_1.Get)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "inspect", null);
__decorate([
    (0, common_1.Post)(':token/accept'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, accept_invitation_dto_1.AcceptInvitationDto]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "accept", null);
exports.InvitationsController = InvitationsController = __decorate([
    (0, common_1.Controller)('invitations'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60_000 } }),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
], InvitationsController);
//# sourceMappingURL=invitations.controller.js.map