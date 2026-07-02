CREATE TYPE "ClientStatus" AS ENUM ('LEAD', 'PROPOSAL', 'APPROVED', 'ACTIVE', 'INACTIVE');
CREATE TYPE "BriefStatus" AS ENUM ('DRAFT', 'COMPLETE', 'ARCHIVED');
CREATE TYPE "RequirementCategory" AS ENUM ('PAGE', 'FEATURE', 'CONTENT', 'SEO', 'DESIGN', 'TECHNICAL');
CREATE TYPE "RequirementPriority" AS ENUM ('MUST', 'SHOULD', 'FUTURE');
CREATE TYPE "QuestionStatus" AS ENUM ('OPEN', 'ANSWERED', 'FOLLOW_UP');

CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "industry" TEXT,
    "website" TEXT,
    "serviceArea" TEXT,
    "status" "ClientStatus" NOT NULL DEFAULT 'LEAD',
    "contactName" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "generalNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "DiscoveryBrief" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "BriefStatus" NOT NULL DEFAULT 'DRAFT',
    "meetingAt" TIMESTAMP(3),
    "projectType" TEXT NOT NULL,
    "projectSummary" TEXT,
    "motivation" TEXT,
    "currentProblems" TEXT,
    "successDefinition" TEXT,
    "targetLaunch" TEXT,
    "budget" TEXT,
    "decisionMakers" TEXT,
    "primaryAudience" TEXT,
    "secondaryAudiences" TEXT,
    "audienceProblems" TEXT,
    "commonObjections" TEXT,
    "desiredAction" TEXT,
    "designDirection" TEXT,
    "likedSites" TEXT,
    "dislikedSites" TEXT,
    "brandAssets" TEXT,
    "seoTargets" TEXT,
    "targetLocations" TEXT,
    "currentPlatform" TEXT,
    "integrations" TEXT,
    "hostingProvider" TEXT,
    "domainRegistrar" TEXT,
    "compliance" TEXT,
    "assumptions" TEXT,
    "outOfScope" TEXT,
    "rawNotes" TEXT,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "DiscoveryBrief_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BriefRequirement" (
    "id" TEXT NOT NULL,
    "category" "RequirementCategory" NOT NULL,
    "priority" "RequirementPriority" NOT NULL DEFAULT 'MUST',
    "title" TEXT NOT NULL,
    "details" TEXT,
    "rationale" TEXT,
    "acceptanceCriteria" TEXT,
    "briefId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "BriefRequirement_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BriefQuestion" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT,
    "status" "QuestionStatus" NOT NULL DEFAULT 'OPEN',
    "briefId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "BriefQuestion_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GeneratedPrompt" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "briefId" TEXT NOT NULL,
    CONSTRAINT "GeneratedPrompt_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Client_status_companyName_idx" ON "Client"("status", "companyName");
CREATE INDEX "DiscoveryBrief_clientId_status_idx" ON "DiscoveryBrief"("clientId", "status");
CREATE INDEX "DiscoveryBrief_meetingAt_idx" ON "DiscoveryBrief"("meetingAt");
CREATE INDEX "BriefRequirement_briefId_category_sortOrder_idx" ON "BriefRequirement"("briefId", "category", "sortOrder");
CREATE INDEX "BriefQuestion_briefId_status_sortOrder_idx" ON "BriefQuestion"("briefId", "status", "sortOrder");
CREATE INDEX "GeneratedPrompt_briefId_createdAt_idx" ON "GeneratedPrompt"("briefId", "createdAt");

ALTER TABLE "DiscoveryBrief"
    ADD CONSTRAINT "DiscoveryBrief_clientId_fkey"
    FOREIGN KEY ("clientId") REFERENCES "Client"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "BriefRequirement"
    ADD CONSTRAINT "BriefRequirement_briefId_fkey"
    FOREIGN KEY ("briefId") REFERENCES "DiscoveryBrief"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "BriefQuestion"
    ADD CONSTRAINT "BriefQuestion_briefId_fkey"
    FOREIGN KEY ("briefId") REFERENCES "DiscoveryBrief"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "GeneratedPrompt"
    ADD CONSTRAINT "GeneratedPrompt_briefId_fkey"
    FOREIGN KEY ("briefId") REFERENCES "DiscoveryBrief"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
