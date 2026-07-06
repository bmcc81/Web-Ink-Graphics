import { ConfigService } from '@nestjs/config';
import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { AcceptInvitationDto } from './dto/accept-invitation.dto';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';
import { UpsertBrandKitDto } from './dto/upsert-brand-kit.dto';
export declare class OrganizationsService {
    private readonly prisma;
    private readonly config;
    private readonly activityLog;
    constructor(prisma: PrismaService, config: ConfigService, activityLog: ActivityLogService);
    members(user: AuthUser, organizationId: string): Promise<{
        id: string;
        role: import("@prisma/client").$Enums.OrganizationRole;
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
        role: import("@prisma/client").$Enums.OrganizationRole;
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
        createdByRole: import("@prisma/client").$Enums.Role | import("@prisma/client").$Enums.OrganizationRole;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.OrganizationRole;
        organization: {
            name: string;
        };
        expiresAt: Date;
    }>;
    revokeInvitation(user: AuthUser, organizationId: string, invitationId: string): Promise<{
        revoked: boolean;
    }>;
    inspectInvitation(token: string): Promise<{
        email: string;
        role: import("@prisma/client").$Enums.OrganizationRole;
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
        role: import("@prisma/client").$Enums.OrganizationRole;
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
