CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR');
CREATE TYPE "ProjectStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE "Locale" AS ENUM ('EN', 'FR');

CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'EDITOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PortfolioProject" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "clientName" TEXT,
    "projectUrl" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "completedAt" TIMESTAMP(3),
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "PortfolioProject_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ProjectTranslation" (
    "id" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "challenge" TEXT,
    "solution" TEXT,
    "results" TEXT,
    "seoTitle" TEXT,
    "metaDescription" TEXT,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "ProjectTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PortfolioImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "altTextEn" TEXT NOT NULL,
    "altTextFr" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isCover" BOOLEAN NOT NULL DEFAULT false,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "PortfolioImage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PortfolioCategory" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameFr" TEXT NOT NULL,
    CONSTRAINT "PortfolioCategory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ContactSubmission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "service" TEXT NOT NULL,
    "budget" TEXT,
    "launchDate" TEXT,
    "website" TEXT,
    "message" TEXT NOT NULL,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactedAt" TIMESTAMP(3),
    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "_PortfolioCategoryToPortfolioProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PortfolioCategoryToPortfolioProject_AB_pkey" PRIMARY KEY ("A", "B")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "PortfolioProject_slug_key" ON "PortfolioProject"("slug");
CREATE INDEX "PortfolioProject_status_displayOrder_idx" ON "PortfolioProject"("status", "displayOrder");
CREATE INDEX "PortfolioProject_featured_status_idx" ON "PortfolioProject"("featured", "status");
CREATE UNIQUE INDEX "ProjectTranslation_projectId_locale_key" ON "ProjectTranslation"("projectId", "locale");
CREATE INDEX "PortfolioImage_projectId_sortOrder_idx" ON "PortfolioImage"("projectId", "sortOrder");
CREATE UNIQUE INDEX "PortfolioCategory_slug_key" ON "PortfolioCategory"("slug");
CREATE INDEX "ContactSubmission_createdAt_idx" ON "ContactSubmission"("createdAt");
CREATE INDEX "_PortfolioCategoryToPortfolioProject_B_index" ON "_PortfolioCategoryToPortfolioProject"("B");

ALTER TABLE "ProjectTranslation"
    ADD CONSTRAINT "ProjectTranslation_projectId_fkey"
    FOREIGN KEY ("projectId") REFERENCES "PortfolioProject"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PortfolioImage"
    ADD CONSTRAINT "PortfolioImage_projectId_fkey"
    FOREIGN KEY ("projectId") REFERENCES "PortfolioProject"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_PortfolioCategoryToPortfolioProject"
    ADD CONSTRAINT "_PortfolioCategoryToPortfolioProject_A_fkey"
    FOREIGN KEY ("A") REFERENCES "PortfolioCategory"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_PortfolioCategoryToPortfolioProject"
    ADD CONSTRAINT "_PortfolioCategoryToPortfolioProject_B_fkey"
    FOREIGN KEY ("B") REFERENCES "PortfolioProject"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
