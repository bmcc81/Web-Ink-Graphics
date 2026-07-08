/*
  Warnings:

  - You are about to drop the column `estimatedCostCents` on the `AiUsageRecord` table. All the data in the column will be lost.
  - Added the required column `estimatedCostMicros` to the `AiUsageRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AiUsageRecord" DROP COLUMN "estimatedCostCents",
ADD COLUMN     "estimatedCostMicros" INTEGER NOT NULL;
