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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
let OrganizationsService = class OrganizationsService {
    prisma;
    config;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async members(user, organizationId) {
        await this.assertCanView(user, organizationId);
        return this.prisma.organizationMembership.findMany({
            where: { organizationId },
            select: {
                id: true,
                role: true,
                createdAt: true,
                user: {
                    select: { id: true, name: true, email: true },
                },
            },
            orderBy: { user: { name: 'asc' } },
        });
    }
    async invitations(user, organizationId) {
        await this.assertCanManage(user, organizationId);
        return this.prisma.organizationInvitation.findMany({
            where: { organizationId },
            select: {
                id: true,
                email: true,
                role: true,
                expiresAt: true,
                acceptedAt: true,
                revokedAt: true,
                createdAt: true,
                invitedBy: { select: { name: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createInvitation(user, organizationId, dto) {
        const managerRole = await this.assertCanManage(user, organizationId, dto.role);
        const email = dto.email.trim().toLowerCase();
        const existingMember = await this.prisma.organizationMembership.findFirst({
            where: { organizationId, user: { email } },
            select: { id: true },
        });
        if (existingMember) {
            throw new common_1.ConflictException('This user is already a member');
        }
        await this.prisma.organizationInvitation.updateMany({
            where: {
                organizationId,
                email,
                acceptedAt: null,
                revokedAt: null,
            },
            data: { revokedAt: new Date() },
        });
        const token = (0, crypto_1.randomBytes)(32).toString('base64url');
        const invitation = await this.prisma.organizationInvitation.create({
            data: {
                email,
                role: dto.role,
                tokenHash: this.tokenHash(token),
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                organizationId,
                invitedById: user.id,
            },
            select: {
                id: true,
                email: true,
                role: true,
                expiresAt: true,
                organization: { select: { name: true } },
            },
        });
        const siteUrl = this.config
            .getOrThrow('SITE_URL')
            .replace(/\/+$/, '');
        return {
            ...invitation,
            inviteUrl: `${siteUrl}/accept-invitation?token=${encodeURIComponent(token)}`,
            delivery: 'MANUAL',
            createdByRole: managerRole,
        };
    }
    async revokeInvitation(user, organizationId, invitationId) {
        await this.assertCanManage(user, organizationId);
        const result = await this.prisma.organizationInvitation.updateMany({
            where: {
                id: invitationId,
                organizationId,
                acceptedAt: null,
                revokedAt: null,
            },
            data: { revokedAt: new Date() },
        });
        if (!result.count) {
            throw new common_1.NotFoundException('Active invitation not found');
        }
        return { revoked: true };
    }
    async inspectInvitation(token) {
        const invitation = await this.activeInvitation(token);
        const existingUser = await this.prisma.user.findUnique({
            where: { email: invitation.email },
            select: { id: true },
        });
        return {
            email: invitation.email,
            role: invitation.role,
            expiresAt: invitation.expiresAt,
            organization: invitation.organization,
            existingAccount: Boolean(existingUser),
        };
    }
    async acceptInvitation(token, dto) {
        const invitation = await this.activeInvitation(token);
        const existingUser = await this.prisma.user.findUnique({
            where: { email: invitation.email },
            select: {
                id: true,
                passwordHash: true,
            },
        });
        if (existingUser &&
            !(await (0, bcryptjs_1.compare)(dto.password, existingUser.passwordHash))) {
            throw new common_1.UnauthorizedException('Use the password for the existing account associated with this email');
        }
        const name = dto.name?.trim();
        if (!existingUser && (!name || name.length < 2)) {
            throw new common_1.BadRequestException('A name is required when creating a new account');
        }
        const passwordHash = existingUser
            ? undefined
            : await (0, bcryptjs_1.hash)(dto.password, 12);
        const result = await this.prisma.$transaction(async (transaction) => {
            const accepted = await transaction.organizationInvitation.updateMany({
                where: {
                    id: invitation.id,
                    acceptedAt: null,
                    revokedAt: null,
                    expiresAt: { gt: new Date() },
                },
                data: { acceptedAt: new Date() },
            });
            if (!accepted.count) {
                throw new common_1.ConflictException('This invitation is no longer active');
            }
            const account = existingUser ??
                (await transaction.user.create({
                    data: {
                        email: invitation.email,
                        name: name,
                        passwordHash: passwordHash,
                        role: client_1.Role.CUSTOMER,
                    },
                    select: { id: true },
                }));
            await transaction.organizationMembership.upsert({
                where: {
                    userId_organizationId: {
                        userId: account.id,
                        organizationId: invitation.organizationId,
                    },
                },
                update: { role: invitation.role },
                create: {
                    userId: account.id,
                    organizationId: invitation.organizationId,
                    role: invitation.role,
                },
            });
            return account;
        });
        return {
            accepted: true,
            email: invitation.email,
            organization: invitation.organization,
            userId: result.id,
        };
    }
    async assertCanView(user, organizationId) {
        if (this.isStaff(user))
            return;
        const membership = await this.prisma.organizationMembership.findUnique({
            where: { userId_organizationId: { userId: user.id, organizationId } },
            select: { id: true },
        });
        if (!membership)
            throw new common_1.NotFoundException('Organization not found');
    }
    async assertCanManage(user, organizationId, invitationRole) {
        if (this.isStaff(user))
            return user.role;
        const membership = await this.prisma.organizationMembership.findUnique({
            where: { userId_organizationId: { userId: user.id, organizationId } },
            select: { role: true },
        });
        if (!membership ||
            !new Set([
                client_1.OrganizationRole.OWNER,
                client_1.OrganizationRole.MANAGER,
            ]).has(membership.role)) {
            throw new common_1.ForbiddenException('Only organization owners and managers can manage invitations');
        }
        if (membership.role === client_1.OrganizationRole.MANAGER &&
            invitationRole &&
            !new Set([
                client_1.OrganizationRole.CONTRIBUTOR,
                client_1.OrganizationRole.VIEWER,
            ]).has(invitationRole)) {
            throw new common_1.ForbiddenException('Managers can only invite contributors and viewers');
        }
        return membership.role;
    }
    tokenHash(token) {
        return (0, crypto_1.createHash)('sha256').update(token).digest('hex');
    }
    async activeInvitation(token) {
        if (!token || token.length < 32 || token.length > 256) {
            throw new common_1.NotFoundException('Invitation not found');
        }
        const invitation = await this.prisma.organizationInvitation.findUnique({
            where: { tokenHash: this.tokenHash(token) },
            select: {
                id: true,
                email: true,
                role: true,
                expiresAt: true,
                acceptedAt: true,
                revokedAt: true,
                organizationId: true,
                organization: { select: { id: true, name: true, slug: true } },
            },
        });
        if (!invitation ||
            invitation.acceptedAt ||
            invitation.revokedAt ||
            invitation.expiresAt <= new Date()) {
            throw new common_1.NotFoundException('Invitation not found or no longer active');
        }
        return invitation;
    }
    isStaff(user) {
        return user.role === client_1.Role.ADMIN || user.role === client_1.Role.EDITOR;
    }
};
exports.OrganizationsService = OrganizationsService;
exports.OrganizationsService = OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], OrganizationsService);
//# sourceMappingURL=organizations.service.js.map