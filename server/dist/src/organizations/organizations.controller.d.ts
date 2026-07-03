import type { AuthUser } from '../auth/auth-user';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { OrganizationsService } from './organizations.service';
export declare class OrganizationsController {
    private readonly organizations;
    constructor(organizations: OrganizationsService);
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
}
