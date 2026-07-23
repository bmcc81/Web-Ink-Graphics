import { AcceptInvitationDto } from './dto/accept-invitation.dto.js';
import { OrganizationsService } from './organizations.service.js';
export declare class InvitationsController {
    private readonly organizations;
    constructor(organizations: OrganizationsService);
    inspect(token: string): Promise<{
        email: string;
        role: import("../generated/prisma/enums.js").OrganizationRole;
        expiresAt: Date;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        existingAccount: boolean;
    }>;
    accept(token: string, dto: AcceptInvitationDto): Promise<{
        accepted: boolean;
        email: string;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        userId: string;
    }>;
}
