-- CreateEnum
CREATE TYPE "RecurrenceRule" AS ENUM ('WEEKLY', 'MONTHLY');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "recurrenceParentId" TEXT,
ADD COLUMN     "recurrenceRule" "RecurrenceRule";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_recurrenceParentId_fkey" FOREIGN KEY ("recurrenceParentId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

