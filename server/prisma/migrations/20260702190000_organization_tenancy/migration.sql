CREATE TYPE "OrganizationRole" AS ENUM (
    'OWNER',
    'MANAGER',
    'CONTRIBUTOR',
    'VIEWER',
    'WEBINK_SPECIALIST'
);

ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';

CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "OrganizationMembership" (
    "id" TEXT NOT NULL,
    "role" "OrganizationRole" NOT NULL DEFAULT 'VIEWER',
    "userId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "OrganizationMembership_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Client" ADD COLUMN "organizationId" TEXT;

INSERT INTO "Organization" ("id", "name", "slug", "createdAt", "updatedAt")
SELECT
    'org-' || "id",
    "companyName",
    'client-' || "id",
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
FROM "Client";

UPDATE "Client"
SET "organizationId" = 'org-' || "id";

ALTER TABLE "Client" ALTER COLUMN "organizationId" SET NOT NULL;

CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");
CREATE INDEX "Organization_name_idx" ON "Organization"("name");
CREATE UNIQUE INDEX "OrganizationMembership_userId_organizationId_key"
    ON "OrganizationMembership"("userId", "organizationId");
CREATE INDEX "OrganizationMembership_organizationId_role_idx"
    ON "OrganizationMembership"("organizationId", "role");
CREATE INDEX "Client_organizationId_status_idx"
    ON "Client"("organizationId", "status");

ALTER TABLE "OrganizationMembership"
    ADD CONSTRAINT "OrganizationMembership_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "OrganizationMembership"
    ADD CONSTRAINT "OrganizationMembership_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Client"
    ADD CONSTRAINT "Client_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
