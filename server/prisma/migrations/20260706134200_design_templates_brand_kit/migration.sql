-- CreateEnum
CREATE TYPE "TemplateCategory" AS ENUM ('FLYER', 'SOCIAL_GRAPHIC', 'NEWSLETTER', 'AD');

-- CreateEnum
CREATE TYPE "TemplateFieldType" AS ENUM ('TEXT', 'IMAGE', 'COLOR', 'CTA_TEXT', 'CTA_URL');

-- CreateEnum
CREATE TYPE "AssetRevisionStatus" AS ENUM ('DRAFT', 'APPROVED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ActivityEntityType" ADD VALUE 'BRAND_KIT';
ALTER TYPE "ActivityEntityType" ADD VALUE 'PROJECT_ASSET';

-- CreateTable
CREATE TABLE "BrandKit" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "logoUrl" TEXT,
    "primaryColor" TEXT,
    "secondaryColor" TEXT,
    "accentColor" TEXT,
    "fontFamily" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrandKit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "TemplateCategory" NOT NULL,
    "previewImageUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateField" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "fieldType" "TemplateFieldType" NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "maxLength" INTEGER,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TemplateField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectAsset" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "unlinkedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetRevision" (
    "id" TEXT NOT NULL,
    "projectAssetId" TEXT NOT NULL,
    "status" "AssetRevisionStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL,
    "approvedById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssetRevision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetFieldValue" (
    "id" TEXT NOT NULL,
    "revisionId" TEXT NOT NULL,
    "templateFieldId" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "AssetFieldValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BrandKit_organizationId_key" ON "BrandKit"("organizationId");

-- CreateIndex
CREATE INDEX "DesignTemplate_category_isPublished_idx" ON "DesignTemplate"("category", "isPublished");

-- CreateIndex
CREATE INDEX "TemplateField_templateId_sortOrder_idx" ON "TemplateField"("templateId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateField_templateId_key_key" ON "TemplateField"("templateId", "key");

-- CreateIndex
CREATE INDEX "ProjectAsset_projectId_unlinkedAt_idx" ON "ProjectAsset"("projectId", "unlinkedAt");

-- CreateIndex
CREATE INDEX "AssetRevision_projectAssetId_createdAt_idx" ON "AssetRevision"("projectAssetId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "AssetFieldValue_revisionId_templateFieldId_key" ON "AssetFieldValue"("revisionId", "templateFieldId");

-- AddForeignKey
ALTER TABLE "BrandKit" ADD CONSTRAINT "BrandKit_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DesignTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DesignTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAsset" ADD CONSTRAINT "ProjectAsset_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetRevision" ADD CONSTRAINT "AssetRevision_projectAssetId_fkey" FOREIGN KEY ("projectAssetId") REFERENCES "ProjectAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetRevision" ADD CONSTRAINT "AssetRevision_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetRevision" ADD CONSTRAINT "AssetRevision_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetFieldValue" ADD CONSTRAINT "AssetFieldValue_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "AssetRevision"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetFieldValue" ADD CONSTRAINT "AssetFieldValue_templateFieldId_fkey" FOREIGN KEY ("templateFieldId") REFERENCES "TemplateField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
