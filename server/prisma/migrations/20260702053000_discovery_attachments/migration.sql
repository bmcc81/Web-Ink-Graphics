CREATE TYPE "AttachmentCategory" AS ENUM (
  'BRAND',
  'CONTENT',
  'REFERENCE',
  'CONTRACT',
  'SCREENSHOT',
  'OTHER'
);

CREATE TABLE "BriefAttachment" (
  "id" TEXT NOT NULL,
  "fileName" TEXT NOT NULL,
  "objectKey" TEXT NOT NULL,
  "contentType" TEXT NOT NULL,
  "fileSize" INTEGER NOT NULL,
  "category" "AttachmentCategory" NOT NULL DEFAULT 'OTHER',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "briefId" TEXT NOT NULL,
  CONSTRAINT "BriefAttachment_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "BriefAttachment_objectKey_key"
ON "BriefAttachment"("objectKey");

CREATE INDEX "BriefAttachment_briefId_category_createdAt_idx"
ON "BriefAttachment"("briefId", "category", "createdAt");

ALTER TABLE "BriefAttachment"
ADD CONSTRAINT "BriefAttachment_briefId_fkey"
FOREIGN KEY ("briefId") REFERENCES "DiscoveryBrief"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
