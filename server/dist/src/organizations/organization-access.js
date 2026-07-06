"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTRIBUTE_ROLES = exports.MANAGE_ROLES = void 0;
exports.isStaff = isStaff;
exports.resolveOrganizationRole = resolveOrganizationRole;
const client_1 = require("@prisma/client");
exports.MANAGE_ROLES = [
    client_1.OrganizationRole.OWNER,
    client_1.OrganizationRole.MANAGER,
];
exports.CONTRIBUTE_ROLES = [
    client_1.OrganizationRole.OWNER,
    client_1.OrganizationRole.MANAGER,
    client_1.OrganizationRole.CONTRIBUTOR,
    client_1.OrganizationRole.WEBINK_SPECIALIST,
];
function isStaff(user) {
    return user.role === client_1.Role.ADMIN || user.role === client_1.Role.EDITOR;
}
async function resolveOrganizationRole(prisma, user, organizationId) {
    if (isStaff(user))
        return 'STAFF';
    const membership = await prisma.organizationMembership.findUnique({
        where: { userId_organizationId: { userId: user.id, organizationId } },
        select: { role: true },
    });
    return membership?.role ?? null;
}
//# sourceMappingURL=organization-access.js.map