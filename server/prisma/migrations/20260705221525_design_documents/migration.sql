-- AlterEnum
ALTER TYPE "ActivityEntityType" ADD VALUE 'DESIGN_DOCUMENT';

-- CreateTable
CREATE TABLE "DesignDocument" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "figmaFileKey" TEXT NOT NULL,
    "figmaNodeId" TEXT,
    "figmaUrl" TEXT NOT NULL,
    "linkedById" TEXT NOT NULL,
    "unlinkedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignVersion" (
    "id" TEXT NOT NULL,
    "designDocumentId" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "figmaLastModified" TIMESTAMP(3),
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DesignVersion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DesignDocument_projectId_unlinkedAt_idx" ON "DesignDocument"("projectId", "unlinkedAt");

-- CreateIndex
CREATE INDEX "DesignVersion_designDocumentId_syncedAt_idx" ON "DesignVersion"("designDocumentId", "syncedAt");

-- AddForeignKey
ALTER TABLE "DesignDocument" ADD CONSTRAINT "DesignDocument_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignDocument" ADD CONSTRAINT "DesignDocument_linkedById_fkey" FOREIGN KEY ("linkedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignVersion" ADD CONSTRAINT "DesignVersion_designDocumentId_fkey" FOREIGN KEY ("designDocumentId") REFERENCES "DesignDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;
