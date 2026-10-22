-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Active', 'Archived');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "meetings" INTEGER NOT NULL DEFAULT 0,
    "documents" INTEGER NOT NULL DEFAULT 0,
    "designs" INTEGER NOT NULL DEFAULT 0,
    "testCases" INTEGER NOT NULL DEFAULT 0,
    "updated" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_tenantId_idx" ON "Project"("tenantId");
