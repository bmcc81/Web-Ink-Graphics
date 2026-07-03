"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const prisma = new client_1.PrismaClient();
async function main() {
    const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;
    const name = process.env.ADMIN_NAME?.trim() || 'WebInk Administrator';
    if (!email || !password || password.length < 12) {
        throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required; the password must contain at least 12 characters.');
    }
    const passwordHash = await (0, bcryptjs_1.hash)(password, 12);
    const administrator = await prisma.user.upsert({
        where: { email },
        update: { name, role: client_1.Role.ADMIN, passwordHash },
        create: { email, name, role: client_1.Role.ADMIN, passwordHash },
    });
    const webInkOrganization = await prisma.organization.upsert({
        where: { slug: 'webink-graphics' },
        update: { name: 'WebInk Graphics' },
        create: { name: 'WebInk Graphics', slug: 'webink-graphics' },
    });
    await prisma.organizationMembership.upsert({
        where: {
            userId_organizationId: {
                userId: administrator.id,
                organizationId: webInkOrganization.id,
            },
        },
        update: { role: 'OWNER' },
        create: {
            userId: administrator.id,
            organizationId: webInkOrganization.id,
            role: 'OWNER',
        },
    });
    const categories = [
        { slug: 'website', nameEn: 'Website', nameFr: 'Site Web' },
        { slug: 'web-application', nameEn: 'Web application', nameFr: 'Application Web' },
        { slug: 'seo', nameEn: 'SEO', nameFr: 'Référencement' },
        { slug: 'email-newsletter', nameEn: 'Email newsletter', nameFr: 'Infolettre' },
        { slug: 'branding', nameEn: 'Branding', nameFr: 'Image de marque' },
        { slug: 'graphic-design', nameEn: 'Graphic design', nameFr: 'Design graphique' },
    ];
    await Promise.all(categories.map((category) => prisma.portfolioCategory.upsert({
        where: { slug: category.slug },
        update: category,
        create: category,
    })));
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
});
//# sourceMappingURL=seed.js.map