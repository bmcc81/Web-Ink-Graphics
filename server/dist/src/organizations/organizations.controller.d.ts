import type { AuthUser } from '../auth/auth-user.js';
import { CreateInvitationDto } from './dto/create-invitation.dto.js';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto.js';
import { UpsertBrandKitDto } from './dto/upsert-brand-kit.dto.js';
import { OrganizationsService } from './organizations.service.js';
export declare class OrganizationsController {
    private readonly organizations;
    constructor(organizations: OrganizationsService);
    members(user: AuthUser, organizationId: string): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
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
        role: import("../generated/prisma/enums.js").OrganizationRole;
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
        createdByRole: import("../generated/prisma/enums.js").Role | import("../generated/prisma/enums.js").OrganizationRole;
        id: string;
        email: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        expiresAt: Date;
        organization: {
            name: string;
        };
    }>;
    updateMemberRole(user: AuthUser, organizationId: string, membershipId: string, dto: UpdateMemberRoleDto): Promise<{
        id: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    removeMember(user: AuthUser, organizationId: string, membershipId: string): Promise<{
        removed: boolean;
    }>;
    revokeInvitation(user: AuthUser, organizationId: string, invitationId: string): Promise<{
        revoked: boolean;
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
}
