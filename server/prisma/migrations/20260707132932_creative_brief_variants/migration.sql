-- CreateTable
CREATE TABLE "CreativeBriefVariant" (
    "id" TEXT NOT NULL,
    "creativeBriefId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "copyAngle" TEXT NOT NULL,
    "imageConcept" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CreativeBriefVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreativeBriefVariant_creativeBriefId_sortOrder_idx" ON "CreativeBriefVariant"("creativeBriefId", "sortOrder");

-- AddForeignKey
ALTER TABLE "CreativeBriefVariant" ADD CONSTRAINT "CreativeBriefVariant_creativeBriefId_fkey" FOREIGN KEY ("creativeBriefId") REFERENCES "CreativeBrief"("id") ON DELETE CASCADE ON UPDATE CASCADE;
