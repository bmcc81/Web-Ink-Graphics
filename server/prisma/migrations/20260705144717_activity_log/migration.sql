-- CreateEnum
CREATE TYPE "ActivityAction" AS ENUM ('CREATED', 'UPDATED', 'STATUS_CHANGED', 'DELETED');

-- CreateEnum
CREATE TYPE "ActivityEntityType" AS ENUM ('PROJECT', 'MILESTONE', 'TASK', 'GOAL');

-- CreateTable
CREATE TABLE "ActivityLogEntry" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "entityType" "ActivityEntityType" NOT NULL,
    "entityId" TEXT NOT NULL,
    "action" "ActivityAction" NOT NULL,
    "summary" TEXT NOT NULL,
    "actorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityLogEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ActivityLogEntry_organizationId_createdAt_idx" ON "ActivityLogEntry"("organizationId", "createdAt");

-- CreateIndex
CREATE INDEX "ActivityLogEntry_organizationId_entityType_entityId_idx" ON "ActivityLogEntry"("organizationId", "entityType", "entityId");

-- AddForeignKey
ALTER TABLE "ActivityLogEntry" ADD CONSTRAINT "ActivityLogEntry_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLogEntry" ADD CONSTRAINT "ActivityLogEntry_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
