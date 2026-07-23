import { ConfigService } from '@nestjs/config';
import { OrganizationRole, Role } from '../generated/prisma/client.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { AcceptInvitationDto } from './dto/accept-invitation.dto.js';
import { CreateInvitationDto } from './dto/create-invitation.dto.js';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto.js';
import { UpsertBrandKitDto } from './dto/upsert-brand-kit.dto.js';
export declare class OrganizationsService {
    private readonly prisma;
    private readonly config;
    private readonly activityLog;
    constructor(prisma: PrismaService, config: ConfigService, activityLog: ActivityLogService);
    members(user: AuthUser, organizationId: string): Promise<{
        id: string;
        role: OrganizationRole;
        createdAt: Date;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }[]>;
    invitations(user: AuthUser, organizationId: string): Promise<{
        id: string;
        email: string;
        role: OrganizationRole;
        createdAt: Date;
        expiresAt: Date;
        acceptedAt: Date | null;
        revokedAt: Date | null;
        invitedBy: {
            name: string;
        };
    }[]>;
    createInvitation(user: AuthUser, organizationId: string, dto: CreateInvitationDto): Promise<{
        inviteUrl: string;
        delivery: "MANUAL";
        createdByRole: Role | OrganizationRole;
        id: string;
        email: string;
        role: OrganizationRole;
        expiresAt: Date;
        organization: {
            name: string;
        };
    }>;
    revokeInvitation(user: AuthUser, organizationId: string, invitationId: string): Promise<{
        revoked: boolean;
    }>;
    inspectInvitation(token: string): Promise<{
        email: string;
        role: OrganizationRole;
        expiresAt: Date;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        existingAccount: boolean;
    }>;
    acceptInvitation(token: string, dto: AcceptInvitationDto): Promise<{
        accepted: boolean;
        email: string;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        userId: string;
    }>;
    updateMemberRole(user: AuthUser, organizationId: string, membershipId: string, dto: UpdateMemberRoleDto): Promise<{
        id: string;
        role: OrganizationRole;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    removeMember(user: AuthUser, organizationId: string, membershipId: string): Promise<{
        removed: boolean;
    }>;
    getBrandKit(user: AuthUser, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        logoUrl: string | null;
        primaryColor: string | null;
        secondaryColor: string | null;
        accentColor: string | null;
        fontFamily: string | null;
    } | null>;
    upsertBrandKit(user: AuthUser, organizationId: string, dto: UpsertBrandKitDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        logoUrl: string | null;
        primaryColor: string | null;
        secondaryColor: string | null;
        accentColor: string | null;
        fontFamily: string | null;
    }>;
    private assertManagerScope;
    private assertRemainingOwner;
    private assertCanView;
    private assertCanManage;
    private tokenHash;
    private activeInvitation;
    private isStaff;
}
