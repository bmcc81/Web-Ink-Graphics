-- CreateEnum
CREATE TYPE "RecommendationPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterEnum
ALTER TYPE "ActivityEntityType" ADD VALUE 'PERFORMANCE_RECOMMENDATION';

-- AlterEnum
ALTER TYPE "AiUsagePurpose" ADD VALUE 'PERFORMANCE_RECOMMENDATIONS';

-- CreateTable
CREATE TABLE "PerformanceRecommendation" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "confidenceScore" INTEGER NOT NULL,
    "confidenceNotes" TEXT NOT NULL,
    "dataSummary" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PerformanceRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerformanceRecommendationItem" (
    "id" TEXT NOT NULL,
    "performanceRecommendationId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rationale" TEXT NOT NULL,
    "priority" "RecommendationPriority" NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PerformanceRecommendationItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PerformanceRecommendation_projectId_createdAt_idx" ON "PerformanceRecommendation"("projectId", "createdAt");

-- CreateIndex
CREATE INDEX "PerformanceRecommendationItem_performanceRecommendationId_s_idx" ON "PerformanceRecommendationItem"("performanceRecommendationId", "sortOrder");

-- AddForeignKey
ALTER TABLE "PerformanceRecommendation" ADD CONSTRAINT "PerformanceRecommendation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformanceRecommendation" ADD CONSTRAINT "PerformanceRecommendation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformanceRecommendationItem" ADD CONSTRAINT "PerformanceRecommendationItem_performanceRecommendationId_fkey" FOREIGN KEY ("performanceRecommendationId") REFERENCES "PerformanceRecommendation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

