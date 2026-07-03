import { ConfigService } from '@nestjs/config';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
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
    invitations(user: AuthUser, organizationId: string): Promise<any>;
    createInvitation(user: AuthUser, organizationId: string, dto: CreateInvitationDto): Promise<any>;
    revokeInvitation(user: AuthUser, organizationId: string, invitationId: string): Promise<{
        revoked: boolean;
    }>;
    private assertCanView;
    private assertCanManage;
    private tokenHash;
    private isStaff;
}
