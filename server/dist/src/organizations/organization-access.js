import { OrganizationRole, Role } from '../generated/prisma/client.js';
export const MANAGE_ROLES = [
    OrganizationRole.OWNER,
    OrganizationRole.MANAGER,
];
export const CONTRIBUTE_ROLES = [
    OrganizationRole.OWNER,
    OrganizationRole.MANAGER,
    OrganizationRole.CONTRIBUTOR,
    OrganizationRole.WEBINK_SPECIALIST,
];
export function isStaff(user) {
    return user.role === Role.ADMIN || user.role === Role.EDITOR;
}
export async function resolveOrganizationRole(prisma, user, organizationId) {
    if (isStaff(user))
        return 'STAFF';
    const membership = await prisma.organizationMembership.findUnique({
        where: { userId_organizationId: { userId: user.id, organizationId } },
        select: { role: true },
    });
    return membership?.role ?? null;
}
//# sourceMappingURL=organization-access.js.map