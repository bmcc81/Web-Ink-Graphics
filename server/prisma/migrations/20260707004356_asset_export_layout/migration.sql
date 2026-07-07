-- CreateEnum
CREATE TYPE "ExportFormat" AS ENUM ('PNG', 'PDF');

-- CreateEnum
CREATE TYPE "ExportStatus" AS ENUM ('PENDING', 'READY', 'FAILED');

-- AlterTable
ALTER TABLE "DesignTemplate" ADD COLUMN     "canvasHeight" INTEGER NOT NULL DEFAULT 1200,
ADD COLUMN     "canvasWidth" INTEGER NOT NULL DEFAULT 1200;

-- AlterTable
ALTER TABLE "TemplateField" ADD COLUMN     "color" TEXT,
ADD COLUMN     "fontSize" INTEGER NOT NULL DEFAULT 24,
ADD COLUMN     "height" INTEGER NOT NULL DEFAULT 60,
ADD COLUMN     "width" INTEGER NOT NULL DEFAULT 200,
ADD COLUMN     "x" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "y" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "AssetExport" (
    "id" TEXT NOT NULL,
    "assetRevisionId" TEXT NOT NULL,
    "format" "ExportFormat" NOT NULL,
    "status" "ExportStatus" NOT NULL DEFAULT 'PENDING',
    "objectKey" TEXT,
    "errorMessage" TEXT,
    "requestedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "AssetExport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AssetExport_assetRevisionId_createdAt_idx" ON "AssetExport"("assetRevisionId", "createdAt");

-- AddForeignKey
ALTER TABLE "AssetExport" ADD CONSTRAINT "AssetExport_assetRevisionId_fkey" FOREIGN KEY ("assetRevisionId") REFERENCES "AssetRevision"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetExport" ADD CONSTRAINT "AssetExport_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
