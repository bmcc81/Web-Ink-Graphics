import { ConfigService } from '@nestjs/config';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { AcceptInvitationDto } from './dto/accept-invitation.dto';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';
export declare class OrganizationsService {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
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
    private assertManagerScope;
    private assertRemainingOwner;
    private assertCanView;
    private assertCanManage;
    private tokenHash;
    private activeInvitation;
    private isStaff;
}
