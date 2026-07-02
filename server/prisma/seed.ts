import { PrismaClient, Role } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME?.trim() || 'WebInk Administrator';

  if (!email || !password || password.length < 12) {
    throw new Error(
      'ADMIN_EMAIL and ADMIN_PASSWORD are required; the password must contain at least 12 characters.',
    );
  }

  const passwordHash = await hash(password, 12);
  await prisma.user.upsert({
    where: { email },
    update: { name, role: Role.ADMIN, passwordHash },
    create: { email, name, role: Role.ADMIN, passwordHash },
  });

  const categories = [
    { slug: 'website', nameEn: 'Website', nameFr: 'Site Web' },
    { slug: 'web-application', nameEn: 'Web application', nameFr: 'Application Web' },
    { slug: 'seo', nameEn: 'SEO', nameFr: 'Référencement' },
    { slug: 'email-newsletter', nameEn: 'Email newsletter', nameFr: 'Infolettre' },
    { slug: 'branding', nameEn: 'Branding', nameFr: 'Image de marque' },
    { slug: 'graphic-design', nameEn: 'Graphic design', nameFr: 'Design graphique' },
  ];

  await Promise.all(
    categories.map((category) =>
      prisma.portfolioCategory.upsert({
        where: { slug: category.slug },
        update: category,
        create: category,
      }),
    ),
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
  });
