-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('IMPRESSIONS', 'CLICKS', 'WEBSITE_VISITS', 'LEADS', 'CONVERSIONS', 'REVENUE');

-- AlterEnum
ALTER TYPE "ActivityEntityType" ADD VALUE 'CAMPAIGN_METRIC';

-- CreateTable
CREATE TABLE "CampaignMetricEntry" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "metricType" "MetricType" NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "actualValue" DECIMAL(14,2) NOT NULL,
    "plannedValue" DECIMAL(14,2),
    "notes" TEXT,
    "recordedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CampaignMetricEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CampaignMetricEntry_projectId_metricType_periodStart_idx" ON "CampaignMetricEntry"("projectId", "metricType", "periodStart");

-- AddForeignKey
ALTER TABLE "CampaignMetricEntry" ADD CONSTRAINT "CampaignMetricEntry_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignMetricEntry" ADD CONSTRAINT "CampaignMetricEntry_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
