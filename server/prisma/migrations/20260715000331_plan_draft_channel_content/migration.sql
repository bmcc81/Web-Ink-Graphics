/*
  Warnings:

  - Added the required column `contentIdeas` to the `PlanDraft` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlanDraft" ADD COLUMN     "contentIdeas" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PlanDraftChannelRecommendation" (
    "id" TEXT NOT NULL,
    "planDraftId" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "rationale" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PlanDraftChannelRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlanDraftChannelRecommendation_planDraftId_sortOrder_idx" ON "PlanDraftChannelRecommendation"("planDraftId", "sortOrder");

-- AddForeignKey
ALTER TABLE "PlanDraftChannelRecommendation" ADD CONSTRAINT "PlanDraftChannelRecommendation_planDraftId_fkey" FOREIGN KEY ("planDraftId") REFERENCES "PlanDraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;
