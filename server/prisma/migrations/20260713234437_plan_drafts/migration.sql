-- CreateEnum
CREATE TYPE "PlanDraftStatus" AS ENUM ('DRAFT', 'APPLIED');

-- AlterEnum
ALTER TYPE "ActivityEntityType" ADD VALUE 'PLAN_DRAFT';

-- AlterEnum
ALTER TYPE "AiUsagePurpose" ADD VALUE 'PLANNING_COPILOT';

-- CreateTable
CREATE TABLE "PlanDraft" (
    "id" TEXT NOT NULL,
    "discoveryBriefId" TEXT NOT NULL,
    "goalTitle" TEXT NOT NULL,
    "goalDescription" TEXT,
    "goalPeriod" "GoalPeriod" NOT NULL,
    "goalYear" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "risks" TEXT NOT NULL,
    "readinessScore" INTEGER NOT NULL,
    "readinessNotes" TEXT NOT NULL,
    "status" "PlanDraftStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL,
    "appliedById" TEXT,
    "appliedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanDraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDraftProject" (
    "id" TEXT NOT NULL,
    "planDraftId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PlanDraftProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDraftMilestone" (
    "id" TEXT NOT NULL,
    "planDraftProjectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tasks" TEXT[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PlanDraftMilestone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlanDraft_discoveryBriefId_createdAt_idx" ON "PlanDraft"("discoveryBriefId", "createdAt");

-- CreateIndex
CREATE INDEX "PlanDraftProject_planDraftId_sortOrder_idx" ON "PlanDraftProject"("planDraftId", "sortOrder");

-- CreateIndex
CREATE INDEX "PlanDraftMilestone_planDraftProjectId_sortOrder_idx" ON "PlanDraftMilestone"("planDraftProjectId", "sortOrder");

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_discoveryBriefId_fkey" FOREIGN KEY ("discoveryBriefId") REFERENCES "DiscoveryBrief"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraft" ADD CONSTRAINT "PlanDraft_appliedById_fkey" FOREIGN KEY ("appliedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraftProject" ADD CONSTRAINT "PlanDraftProject_planDraftId_fkey" FOREIGN KEY ("planDraftId") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanDraftMilestone" ADD CONSTRAINT "PlanDraftMilestone_planDraftProjectId_fkey" FOREIGN KEY ("planDraftProjectId") REFERENCES "PlanDraftProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
