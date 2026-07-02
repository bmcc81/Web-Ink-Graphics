CREATE TYPE "RequirementStatus" AS ENUM (
  'PLANNED',
  'IN_PROGRESS',
  'COMPLETED',
  'DEFERRED',
  'REJECTED'
);

ALTER TABLE "BriefRequirement"
ADD COLUMN "referenceCode" TEXT,
ADD COLUMN "status" "RequirementStatus" NOT NULL DEFAULT 'PLANNED';

CREATE INDEX "BriefRequirement_briefId_status_idx"
ON "BriefRequirement"("briefId", "status");
