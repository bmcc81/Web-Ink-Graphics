-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "portfolioProjectId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Project_portfolioProjectId_key" ON "Project"("portfolioProjectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_portfolioProjectId_fkey" FOREIGN KEY ("portfolioProjectId") REFERENCES "PortfolioProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

