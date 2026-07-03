import { AcceptInvitationDto } from './dto/accept-invitation.dto';
import { OrganizationsService } from './organizations.service';
export declare class InvitationsController {
    private readonly organizations;
    constructor(organizations: OrganizationsService);
    inspect(token: string): Promise<{
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
