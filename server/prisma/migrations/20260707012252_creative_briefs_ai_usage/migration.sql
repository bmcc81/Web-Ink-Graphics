-- CreateEnum
CREATE TYPE "CreativeBriefStatus" AS ENUM ('DRAFT', 'APPROVED');

-- CreateEnum
CREATE TYPE "AiUsagePurpose" AS ENUM ('CREATIVE_BRIEF');

-- AlterEnum
ALTER TYPE "ActivityEntityType" ADD VALUE 'CREATIVE_BRIEF';

-- CreateTable
CREATE TABLE "CreativeBrief" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "audienceNotes" TEXT NOT NULL,
    "copyAngles" TEXT NOT NULL,
    "layoutDirection" TEXT NOT NULL,
    "readinessScore" INTEGER NOT NULL,
    "readinessNotes" TEXT NOT NULL,
    "status" "CreativeBriefStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL,
    "approvedById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreativeBrief_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiUsageRecord" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "requestedById" TEXT NOT NULL,
    "purpose" "AiUsagePurpose" NOT NULL,
    "model" TEXT NOT NULL,
    "promptTokens" INTEGER NOT NULL,
    "completionTokens" INTEGER NOT NULL,
    "estimatedCostCents" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiUsageRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreativeBrief_projectId_createdAt_idx" ON "CreativeBrief"("projectId", "createdAt");

-- CreateIndex
CREATE INDEX "AiUsageRecord_organizationId_createdAt_idx" ON "AiUsageRecord"("organizationId", "createdAt");

-- AddForeignKey
ALTER TABLE "CreativeBrief" ADD CONSTRAINT "CreativeBrief_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreativeBrief" ADD CONSTRAINT "CreativeBrief_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreativeBrief" ADD CONSTRAINT "CreativeBrief_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiUsageRecord" ADD CONSTRAINT "AiUsageRecord_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiUsageRecord" ADD CONSTRAINT "AiUsageRecord_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
