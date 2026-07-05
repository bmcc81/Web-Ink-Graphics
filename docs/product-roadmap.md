# WebInk Customer Platform Roadmap

This roadmap keeps the platform focused on complete customer workflows rather
than disconnected features. Priorities may move when customer feedback reveals
a stronger dependency or opportunity.

## 1. Customer access and workspace foundation

**Status:** Complete — customer access and workspace administration are fully in place

- Organization invitations and account activation — implemented
- Membership and role management — implemented
- Customer-safe authentication and tenant isolation — implemented
- Customer dashboard shell — implemented

## 2. Planning, projects, and approvals

**Status:** Complete — the full planning workflow is in place

- Quarterly and annual goals — implemented
- Marketing initiatives, projects, milestones, and tasks — implemented
- Assignments, comments, notifications, and due dates — implemented
- Planned, approved, committed, and actual budgets — implemented
- Draft, review, changes requested, approved, production, and completed states — implemented
- Immutable approval and activity history — implemented

## 3. Connected design review and editing

**Priority:** High, after the project and approval workflow is stable

The first release should connect design work to the customer workspace instead
of attempting to reproduce a full professional design editor.

### Release 3A — Figma-connected design workspace

**Status:** Complete

- Attach a Figma design or frame to a WebInk project — implemented
- Display a secure preview and provide an explicit “Open in Figma” action — implemented
- Sync file, page, frame, thumbnail, and last-modified metadata — implemented
- Assign reviewers and due dates — implemented
- Record comments, revision requests, decisions, and final approval in WebInk — implemented
- Preserve design versions referenced by each approval — implemented
- Restrict access using organization and project membership — implemented
- Record every link, unlink, review, and approval action in the audit history — implemented

### Release 3B — Template-based editing

- WebInk-managed templates for flyers, social graphics, newsletters, and ads
- Customer-safe editable fields such as copy, image, color, and call to action
- Brand-kit enforcement for logos, fonts, colors, and spacing
- Save a new revision without overwriting an approved version
- Export approved assets for web, print, or campaign delivery

### Release 3C — AI-assisted creative work

- Generate a design brief from approved goals and audience information
- Suggest copy, layout directions, image concepts, and variants
- Score readiness using explicit criteria and confidence—not promised outcomes
- Require human review before publishing, exporting, or replacing approved work

### Suggested backend concepts

```text
DesignDocument
DesignFrame
DesignVersion
DesignReview
DesignComment
DesignApproval
BrandKit
DesignTemplate
TemplateField
ExportJob
```

All records must include an organization boundary. Provider tokens should be
encrypted and stored server-side; browsers should receive only scoped metadata
and short-lived access where required.

### Acceptance criteria for Release 3A

- A permitted member can connect a Figma frame to a project.
- A member without project access cannot read its design metadata or preview.
- Reviewers can request changes or approve a specific design version.
- Approval records identify the authenticated reviewer and cannot be silently
  rewritten by later Figma changes.
- Disconnecting a Figma file does not erase WebInk review or approval history.
- Provider failures produce a recoverable state without blocking the project.

## 4. AI planning copilot

- Guided discovery and plan creation
- Missing-information and risk detection
- Campaign, task, content, and channel recommendations
- Explainable readiness scoring with assumptions and confidence
- Per-organization usage limits and cost reporting

## 5. Measurement and automation

- Campaign metrics and actual-versus-planned reporting
- Analytics, search, email, and advertising integrations
- Recurring marketing activities
- Performance-informed recommendations
- Publishing approved completed work to the WebInk portfolio
