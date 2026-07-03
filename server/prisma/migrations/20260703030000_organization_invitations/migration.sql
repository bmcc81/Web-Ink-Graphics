CREATE TABLE "OrganizationInvitation" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "OrganizationRole" NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "acceptedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "organizationId" TEXT NOT NULL,
    "invitedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OrganizationInvitation_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "OrganizationInvitation_tokenHash_key"
    ON "OrganizationInvitation"("tokenHash");
CREATE INDEX "OrganizationInvitation_organizationId_email_acceptedAt_revokedAt_idx"
    ON "OrganizationInvitation"("organizationId", "email", "acceptedAt", "revokedAt");
CREATE INDEX "OrganizationInvitation_expiresAt_idx"
    ON "OrganizationInvitation"("expiresAt");

ALTER TABLE "OrganizationInvitation"
    ADD CONSTRAINT "OrganizationInvitation_organizationId_fkey"
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "OrganizationInvitation"
    ADD CONSTRAINT "OrganizationInvitation_invitedById_fkey"
    FOREIGN KEY ("invitedById") REFERENCES "User"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;
