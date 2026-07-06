-- CreateEnum
CREATE TYPE "GoalPeriod" AS ENUM ('Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL');

-- CreateEnum
CREATE TYPE "GoalStatus" AS ENUM ('ON_TRACK', 'AT_RISK', 'OFF_TRACK', 'ACHIEVED');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "goalId" TEXT;

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "period" "GoalPeriod" NOT NULL,
    "year" INTEGER NOT NULL,
    "status" "GoalStatus" NOT NULL DEFAULT 'ON_TRACK',
    "organizationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Goal_organizationId_year_period_idx" ON "Goal"("organizationId", "year", "period");

-- CreateIndex
CREATE INDEX "Project_goalId_idx" ON "Project"("goalId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
