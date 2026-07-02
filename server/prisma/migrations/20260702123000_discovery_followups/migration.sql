CREATE TYPE "FollowUpPriority" AS ENUM (
  'LOW',
  'NORMAL',
  'HIGH',
  'URGENT'
);

ALTER TABLE "BriefQuestion"
ADD COLUMN "owner" TEXT,
ADD COLUMN "dueDate" TIMESTAMP(3),
ADD COLUMN "priority" "FollowUpPriority" NOT NULL DEFAULT 'NORMAL';

CREATE INDEX "BriefQuestion_briefId_dueDate_status_idx"
ON "BriefQuestion"("briefId", "dueDate", "status");
