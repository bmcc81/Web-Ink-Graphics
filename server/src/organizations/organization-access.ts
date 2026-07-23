import { OrganizationRole, Role } from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import type { PrismaService } from '../prisma/prisma.service.js';

export const MANAGE_ROLES: OrganizationRole[] = [
  OrganizationRole.OWNER,
  OrganizationRole.MANAGER,
];

export const CONTRIBUTE_ROLES: OrganizationRole[] = [
  OrganizationRole.OWNER,
  OrganizationRole.MANAGER,
  OrganizationRole.CONTRIBUTOR,
  OrganizationRole.WEBINK_SPECIALIST,
];

export function isStaff(user: AuthUser): boolean {
  return user.role === Role.ADMIN || user.role === Role.EDITOR;
}

export async function resolveOrganizationRole(
  prisma: Pick<PrismaService, 'organizationMembership'>,
  user: AuthUser,
  organizationId: string,
): Promise<OrganizationRole | 'STAFF' | null> {
  if (isStaff(user)) return 'STAFF';
  const membership = await prisma.organizationMembership.findUnique({
    where: { userId_organizationId: { userId: user.id, organizationId } },
    select: { role: true },
  });
  return membership?.role ?? null;
}
