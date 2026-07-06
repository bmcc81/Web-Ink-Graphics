-- CreateEnum
CREATE TYPE "DesignReviewStatus" AS ENUM ('PENDING', 'CHANGES_REQUESTED', 'APPROVED');

-- CreateTable
CREATE TABLE "DesignReview" (
    "id" TEXT NOT NULL,
    "designDocumentId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "assignedById" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "status" "DesignReviewStatus" NOT NULL DEFAULT 'PENDING',
    "decidedVersionId" TEXT,
    "decisionNote" TEXT,
    "decidedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignComment" (
    "id" TEXT NOT NULL,
    "designDocumentId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DesignReview_designDocumentId_status_idx" ON "DesignReview"("designDocumentId", "status");

-- CreateIndex
CREATE INDEX "DesignReview_reviewerId_status_idx" ON "DesignReview"("reviewerId", "status");

-- CreateIndex
CREATE INDEX "DesignComment_designDocumentId_createdAt_idx" ON "DesignComment"("designDocumentId", "createdAt");

-- AddForeignKey
ALTER TABLE "DesignReview" ADD CONSTRAINT "DesignReview_designDocumentId_fkey" FOREIGN KEY ("designDocumentId") REFERENCES "DesignDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignReview" ADD CONSTRAINT "DesignReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignReview" ADD CONSTRAINT "DesignReview_assignedById_fkey" FOREIGN KEY ("assignedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignReview" ADD CONSTRAINT "DesignReview_decidedVersionId_fkey" FOREIGN KEY ("decidedVersionId") REFERENCES "DesignVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignComment" ADD CONSTRAINT "DesignComment_designDocumentId_fkey" FOREIGN KEY ("designDocumentId") REFERENCES "DesignDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignComment" ADD CONSTRAINT "DesignComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
