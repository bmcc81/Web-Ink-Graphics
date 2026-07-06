-- AlterEnum
ALTER TYPE "ActivityEntityType" ADD VALUE 'BUDGET';

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "plannedAmount" DECIMAL(12,2),
    "approvedAmount" DECIMAL(12,2),
    "committedAmount" DECIMAL(12,2),
    "actualAmount" DECIMAL(12,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Budget_projectId_key" ON "Budget"("projectId");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
