# WebInk Graphics

Lead-generation website and portfolio administration platform for WebInk Graphics.

Product direction and implementation priorities are tracked in
[`docs/product-roadmap.md`](docs/product-roadmap.md).

## Applications

- `src/` — Angular 21 public website with SSR and prerendering
- `server/` — NestJS API with Prisma and PostgreSQL
- `compose.yaml` — local PostgreSQL 17 service

## Requirements

- Node.js 22.20 or newer
- npm 10 or newer
- Docker Desktop, or an existing PostgreSQL database

## Local setup

Install dependencies:

```powershell
npm install
npm --prefix server install
```

Create the API environment file:

```powershell
Copy-Item server/.env.example server/.env
```

Replace `JWT_ACCESS_SECRET` with at least 32 random characters and set a strong initial
administrator password before continuing.

Start PostgreSQL and create the initial migration:

```powershell
docker compose up -d postgres
npm run db:migrate -- --name initial
npm --prefix server run prisma:seed
```

Run the two applications in separate terminals:

```powershell
npm start
npm run api:start
```

- Website: `http://localhost:4200`
- API: `http://localhost:3000/api`

## Portfolio API

- `GET /api/portfolio`
- `GET /api/portfolio/featured`
- `GET /api/portfolio/:slug`
- `GET /api/portfolio/admin/all` — authenticated, includes drafts and archived projects
- `GET /api/portfolio/admin/categories` — authenticated category list
- `GET /api/portfolio/admin/:slug` — authenticated draft/editor detail
- `POST /api/portfolio`
- `PATCH /api/portfolio/:slug`
- `DELETE /api/portfolio/:slug` — archives rather than permanently deleting
- `POST /api/contact` — public, validated and rate-limited lead capture
- `GET /api/contact/admin` — authenticated lead search and filtering
- `PATCH /api/contact/admin/:id/status` — authenticated contacted-state update
- `GET /api/contact/admin/export` — authenticated CSV export

List requests can be filtered with `status` and `category`, for example:

```text
GET /api/portfolio?status=PUBLISHED&category=website
```

Public portfolio reads return published projects only. Admin listing and every write endpoint
require a valid bearer token. Archiving additionally requires the `ADMIN` role.

The admin interface is available at `http://localhost:4200/admin/login`. Tokens are stored in
session storage and expire after 30 minutes.

The project editor supports bilingual case-study content, SEO metadata, publishing state,
categories, display ordering, featured projects, and external cover-image metadata.

## Customer workspaces and authorization

Customer data is separated by organization. A user can belong to one or more organizations
with an `OWNER`, `MANAGER`, `CONTRIBUTOR`, `VIEWER`, or `WEBINK_SPECIALIST` membership.
Customer accounts only receive clients, discovery briefs, attachments, and generated prompts
belonging to their verified memberships. WebInk `ADMIN` and `EDITOR` accounts retain staff
access across customer organizations.

Login responses include the user's organization memberships. `GET /api/auth/me` returns the
current profile and refreshed membership list. Only owners and managers can approve or revoke
approval of a discovery brief; the API records the authenticated approver rather than trusting
an approver name submitted by the browser.

WebInk staff and permitted organization managers can create company invitations from the
client administration screen. Invitation links support both new account activation and adding
a company to an existing account:

- `GET /api/invitations/:token` — inspect an active invitation
- `POST /api/invitations/:token/accept` — create or verify the account and add membership
- `GET /api/organizations/:organizationId/members` — list company members
- `GET|POST /api/organizations/:organizationId/invitations` — list or create invitations
- `DELETE /api/organizations/:organizationId/invitations/:invitationId` — revoke an invite

Customer activation is available at `/accept-invitation`; customer sign-in and the initial
workspace selector are available at `/portal/login` and `/portal`.

New clients created by WebInk staff automatically receive a customer organization. Existing
clients are assigned organizations by the organization-tenancy migration. Discovery uploads
require an accessible brief and use an organization-specific private storage prefix. Public
portfolio uploads and lead/portfolio administration remain restricted to WebInk staff.

## Client discovery briefs

Client discovery is available at `/admin/clients`. Create a client, start a discovery brief,
and use the guided editor during a meeting to capture:

- project goals, audience, scope, budget and timing
- brand, design, content, SEO and accessibility expectations
- technical requirements, integrations, hosting and domain details
- prioritized requirements, open questions, assumptions and exclusions

The editor can generate and copy a structured Markdown prompt for Codex. Missing information
and unanswered questions remain visible in the prompt so they are not silently treated as
decisions.

All client endpoints require authentication:

- `GET /api/clients` and `POST /api/clients`
- `GET /api/clients/:id` and `PATCH /api/clients/:id`
- `POST /api/clients/:id/briefs`
- `GET /api/clients/briefs/:briefId` and `PATCH /api/clients/briefs/:briefId`
- `POST /api/clients/briefs/:briefId/generate-prompt`

## Portfolio media storage

The project editor can upload JPEG, PNG, WebP and AVIF images up to 10 MB directly to an
S3-compatible bucket. Configure the `S3_*` values in `server/.env`. Cloudflare R2, Amazon S3
and MinIO-compatible providers are supported.

The API endpoint `POST /api/media/upload-url` requires authentication and returns a presigned
PUT URL valid for five minutes. Storage credentials are never sent to the browser.

Configure the bucket to allow PUT requests from the administration website. A development
CORS policy is:

```json
[
  {
    "AllowedOrigins": ["http://localhost:4200"],
    "AllowedMethods": ["PUT"],
    "AllowedHeaders": ["Content-Type", "Cache-Control"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

Add the production administration origin before deployment. Uploaded objects use immutable
cache headers. A later cleanup job should remove abandoned uploads that were never attached
to a saved portfolio project.

## Rendering and deployment routing

Fixed marketing pages are prerendered. `/portfolio` and `/portfolio/:slug` are rendered on
the server at request time so published database content and case-study metadata remain
indexable without requiring PostgreSQL during the Angular build.

Production must route both applications behind the same public origin:

- `/api/*` to the NestJS API
- `/sitemap.xml` and `/robots.txt` to the NestJS API
- all other requests to the Angular SSR server

The Angular server uses the incoming request origin when loading portfolio data. This avoids
hard-coded production API domains and allows canonical and Open Graph URLs to match the
requested hostname.

Set `SITE_URL` in `server/.env` to the canonical public origin. The sitemap combines fixed
marketing URLs with all published case studies and uses each project's update date as
`lastmod`. Draft and archived projects are excluded.

## Lead capture and email

Homepage inquiries are validated, rate-limited to five requests per minute per client,
checked with a hidden honeypot and stored in `ContactSubmission` before any email is attempted.

Set the `SMTP_*`, `MAIL_FROM` and `LEAD_NOTIFICATION_TO` values in `server/.env` to enable an
internal notification and customer acknowledgement. If `SMTP_HOST` is blank, inquiries are
still stored without sending email. SMTP failures do not discard saved leads.

Lead management is available at `/admin/leads`. It supports new, contacted and combined
views; search across name, company, email and message; reversible status changes; and CSV
export. Exported values are neutralized against spreadsheet formula injection.

The API trusts one reverse-proxy hop when determining client IP addresses. The production
proxy must replace incoming forwarding headers rather than appending untrusted client values.

## Verification

```powershell
npm run build
npm test -- --watch=false
npm run api:build
npm run api:test -- --runInBand
```

## Production deployment

Production configuration is validated when `NODE_ENV=production`. Copy both example files
and replace every placeholder:

```powershell
Copy-Item .env.production.example .env.production
Copy-Item server/.env.production.example server/.env.production
```

Build and start the PostgreSQL, API, Angular SSR and Nginx services:

```powershell
docker compose -f compose.production.yaml up -d --build
```

The API container runs `prisma migrate deploy` before starting. Create the first administrator
after the initial deployment:

```powershell
docker compose -f compose.production.yaml exec api npm run prisma:seed:prod
```

Health endpoints:

- `/api/health/live` checks the API process.
- `/api/health/ready` verifies PostgreSQL connectivity.

The included Nginx configuration is HTTP-only. Terminate TLS at a managed load balancer or
replace it with a certificate-aware reverse proxy before exposing the deployment publicly.

### PostgreSQL backups

Back up the database outside the application container and encrypt copies at rest. A basic
logical backup command is:

```powershell
docker compose -f compose.production.yaml exec -T postgres pg_dump -U webink -Fc webink_graphics > webink_graphics.dump
```

Test restoration regularly in a separate database:

```powershell
pg_restore --clean --if-exists --no-owner --dbname webink_graphics_restore webink_graphics.dump
```

Use automated daily backups with retention appropriate to the business. S3-compatible
portfolio media requires a separate provider-side lifecycle and backup policy.
# Web-Ink-Graphics
