import { OrganizationRole } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import type { PrismaService } from '../prisma/prisma.service';
export declare const MANAGE_ROLES: OrganizationRole[];
export declare const CONTRIBUTE_ROLES: OrganizationRole[];
export declare function isStaff(user: AuthUser): boolean;
export declare function resolveOrganizationRole(prisma: Pick<PrismaService, 'organizationMembership'>, user: AuthUser, organizationId: string): Promise<OrganizationRole | 'STAFF' | null>;
