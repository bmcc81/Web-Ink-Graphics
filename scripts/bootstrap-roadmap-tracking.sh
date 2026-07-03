#!/usr/bin/env bash
set -euo pipefail

# -----------------------------------------------------------------------------
# WebInk Roadmap Tracking Bootstrap
#
# What this does:
# 1) Verifies required env vars + tools
# 2) Installs Node dependencies
# 3) Seeds EPIC/TASK issues + links child tasks + adds to Project #3 (Backlog)
# 4) Ensures workflow file exists for PR -> Project status sync
# 5) Updates docs/product-roadmap.md with generated issue snapshot
# 6) Optionally commits and pushes changes
#
# Usage:
#   chmod +x scripts/bootstrap-roadmap-tracking.sh
#   GH_TOKEN=xxx ./scripts/bootstrap-roadmap-tracking.sh
#
# Optional env overrides:
#   GITHUB_OWNER=bmcc81
#   GITHUB_REPO=Web-Ink-Graphics
#   PROJECT_NUMBER=3
#   BRANCH=chore/roadmap-tracking-bootstrap
#   AUTO_COMMIT=true
# -----------------------------------------------------------------------------

OWNER="${GITHUB_OWNER:-bmcc81}"
REPO="${GITHUB_REPO:-Web-Ink-Graphics}"
PROJECT_NUMBER="${PROJECT_NUMBER:-3}"
BRANCH="${BRANCH:-chore/roadmap-tracking-bootstrap}"
AUTO_COMMIT="${AUTO_COMMIT:-true}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "==> Bootstrapping roadmap tracking for ${OWNER}/${REPO} (Project #${PROJECT_NUMBER})"

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "ERROR: '$1' is required but not installed."
    exit 1
  }
}

require_cmd git
require_cmd node
require_cmd npm
require_cmd npx

if [[ -z "${GH_TOKEN:-}" ]]; then
  echo "ERROR: GH_TOKEN is required."
  echo "Set it with scopes that can manage issues + projects."
  exit 1
fi

if [[ ! -f "package.json" ]]; then
  cat > package.json <<'JSON'
{
  "name": "web-ink-roadmap-automation",
  "private": true,
  "scripts": {
    "roadmap:seed": "tsx scripts/seed-roadmap-issues.ts",
    "roadmap:update": "tsx scripts/update-roadmap-status.ts"
  },
  "devDependencies": {
    "@octokit/graphql": "^8.1.0",
    "@octokit/rest": "^21.0.2",
    "dotenv": "^16.4.5",
    "tsx": "^4.19.1"
  }
}
JSON
  echo "==> Created package.json"
fi

mkdir -p scripts .github/workflows

if [[ ! -f "scripts/seed-roadmap-issues.ts" ]]; then
  cat > scripts/seed-roadmap-issues.ts <<'TS'
import "dotenv/config";
import { Octokit } from "@octokit/rest";
import { graphql } from "@octokit/graphql";

const owner = process.env.GITHUB_OWNER || "bmcc81";
const repo = process.env.GITHUB_REPO || "Web-Ink-Graphics";
const projectNumber = Number(process.env.PROJECT_NUMBER || 3);
const token = process.env.GH_TOKEN;
if (!token) throw new Error("Missing GH_TOKEN");

const octokit = new Octokit({ auth: token });
const gql = graphql.defaults({ headers: { authorization: `token ${token}` } });

type EpicSpec = {
  title: string;
  body: string;
  labels: string[];
  tasks: Array<{ title: string; body?: string; labels?: string[] }>;
};

const epics: EpicSpec[] = [
  {
    title: "EPIC: 1. Customer access and workspace foundation",
    body: "Roadmap section 1.\n\nStatus: Foundation complete; member administration is the next refinement.",
    labels: ["roadmap", "epic", "area:foundation"],
    tasks: [
      { title: "TASK: Membership and role management", labels: ["roadmap", "task", "area:foundation"] },
      { title: "TASK: Validate and harden organization invitation flow", labels: ["roadmap", "task", "area:foundation"] },
      { title: "TASK: Dashboard shell UX refinement for customer workspace", labels: ["roadmap", "task", "area:foundation"] }
    ]
  },
  {
    title: "EPIC: 2. Planning, projects, and approvals",
    body: "Roadmap section 2.\n\nPriority: Next",
    labels: ["roadmap", "epic", "area:projects"],
    tasks: [
      { title: "TASK: Quarterly and annual goals", labels: ["roadmap", "task", "area:projects"] },
      { title: "TASK: Marketing initiatives, projects, milestones, and tasks", labels: ["roadmap", "task", "area:projects"] },
      { title: "TASK: Assignments, comments, notifications, and due dates", labels: ["roadmap", "task", "area:projects"] },
      { title: "TASK: Planned, approved, committed, and actual budgets", labels: ["roadmap", "task", "area:projects"] },
      { title: "TASK: Workflow states (draft → review → changes requested → approved → production → completed)", labels: ["roadmap", "task", "area:projects"] },
      { title: "TASK: Immutable approval and activity history", labels: ["roadmap", "task", "area:projects"] }
    ]
  },
  {
    title: "EPIC: 3. Connected design review and editing",
    body: "Roadmap section 3.\n\nPriority: High, after project/approval workflow is stable.",
    labels: ["roadmap", "epic", "area:design"],
    tasks: [
      { title: "TASK (R3A): Attach a Figma design or frame to a WebInk project", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Secure preview + explicit Open in Figma action", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Sync file/page/frame/thumbnail/last-modified metadata", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Assign reviewers and due dates", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Record comments/revision requests/decisions/final approval", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Preserve design versions per approval", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Restrict access by org and project membership", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A): Audit history for link/unlink/review/approval actions", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3B): WebInk-managed templates (flyers/social/newsletters/ads)", labels: ["roadmap", "task", "area:design", "release:3B"] },
      { title: "TASK (R3B): Editable fields (copy/image/color/CTA)", labels: ["roadmap", "task", "area:design", "release:3B"] },
      { title: "TASK (R3B): Brand-kit enforcement (logos/fonts/colors/spacing)", labels: ["roadmap", "task", "area:design", "release:3B"] },
      { title: "TASK (R3B): Save revisions without overwriting approved versions", labels: ["roadmap", "task", "area:design", "release:3B"] },
      { title: "TASK (R3B): Export approved assets for web/print/campaign delivery", labels: ["roadmap", "task", "area:design", "release:3B"] },
      { title: "TASK (R3C): Generate design brief from approved goals + audience", labels: ["roadmap", "task", "area:design", "release:3C"] },
      { title: "TASK (R3C): Suggest copy/layout/image concepts/variants", labels: ["roadmap", "task", "area:design", "release:3C"] },
      { title: "TASK (R3C): Score readiness with explicit criteria + confidence", labels: ["roadmap", "task", "area:design", "release:3C"] },
      { title: "TASK (R3C): Require human review before publish/export/replace", labels: ["roadmap", "task", "area:design", "release:3C"] },
      { title: "TASK (R3A Acceptance): Figma frame can be connected by permitted member", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A Acceptance): Unauthorized members cannot access metadata/preview", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A Acceptance): Reviewers can request changes or approve specific version", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A Acceptance): Approval records are immutable across later Figma changes", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A Acceptance): Disconnecting Figma does not erase review history", labels: ["roadmap", "task", "area:design", "release:3A"] },
      { title: "TASK (R3A Acceptance): Provider failures are recoverable", labels: ["roadmap", "task", "area:design", "release:3A"] }
    ]
  },
  {
    title: "EPIC: 4. AI planning copilot",
    body: "Roadmap section 4.",
    labels: ["roadmap", "epic", "area:ai"],
    tasks: [
      { title: "TASK: Guided discovery and plan creation", labels: ["roadmap", "task", "area:ai"] },
      { title: "TASK: Missing-information and risk detection", labels: ["roadmap", "task", "area:ai"] },
      { title: "TASK: Campaign/task/content/channel recommendations", labels: ["roadmap", "task", "area:ai"] },
      { title: "TASK: Explainable readiness scoring with assumptions/confidence", labels: ["roadmap", "task", "area:ai"] },
      { title: "TASK: Per-organization usage limits and cost reporting", labels: ["roadmap", "task", "area:ai"] }
    ]
  },
  {
    title: "EPIC: 5. Measurement and automation",
    body: "Roadmap section 5.",
    labels: ["roadmap", "epic", "area:measurement"],
    tasks: [
      { title: "TASK: Campaign metrics and actual-versus-planned reporting", labels: ["roadmap", "task", "area:measurement"] },
      { title: "TASK: Analytics/search/email/advertising integrations", labels: ["roadmap", "task", "area:measurement"] },
      { title: "TASK: Recurring marketing activities", labels: ["roadmap", "task", "area:measurement"] },
      { title: "TASK: Performance-informed recommendations", labels: ["roadmap", "task", "area:measurement"] },
      { title: "TASK: Publish approved completed work to WebInk portfolio", labels: ["roadmap", "task", "area:measurement"] }
    ]
  }
];

async function ensureLabel(name: string) {
  try {
    await octokit.issues.getLabel({ owner, repo, name });
  } catch {
    await octokit.issues.createLabel({ owner, repo, name, color: "6f42c1", description: `Roadmap label: ${name}` });
  }
}

async function getProject() {
  const q = `
    query($owner:String!, $number:Int!) {
      user(login:$owner) {
        projectV2(number:$number) {
          id
          fields(first:50) {
            nodes {
              ... on ProjectV2FieldCommon { id name }
              ... on ProjectV2SingleSelectField { id name options { id name } }
            }
          }
        }
      }
    }`;
  const res: any = await gql(q, { owner, number: projectNumber });
  const project = res.user?.projectV2;
  if (!project) throw new Error("Project not found");
  const status = project.fields.nodes.find((f: any) => f.name === "Status");
  if (!status) throw new Error("Status field not found");
  const backlog = status.options.find((o: any) => o.name === "Backlog");
  if (!backlog) throw new Error("Status option 'Backlog' not found");
  return { projectId: project.id, statusFieldId: status.id, backlogOptionId: backlog.id };
}

async function addToProject(projectId: string, contentId: string): Promise<string> {
  const m = `
    mutation($projectId:ID!, $contentId:ID!) {
      addProjectV2ItemById(input:{projectId:$projectId, contentId:$contentId}) { item { id } }
    }`;
  const res: any = await gql(m, { projectId, contentId });
  return res.addProjectV2ItemById.item.id;
}

async function setStatus(projectId: string, itemId: string, fieldId: string, optionId: string) {
  const m = `
    mutation($projectId:ID!, $itemId:ID!, $fieldId:ID!, $optionId:String!) {
      updateProjectV2ItemFieldValue(input:{
        projectId:$projectId, itemId:$itemId, fieldId:$fieldId, value:{singleSelectOptionId:$optionId}
      }) { projectV2Item { id } }
    }`;
  await gql(m, { projectId, itemId, fieldId, optionId });
}

async function createIssue(title: string, body: string, labels: string[]) {
  const i = await octokit.issues.create({ owner, repo, title, body, labels });
  return i.data;
}

(async () => {
  const labels = [...new Set(epics.flatMap(e => [...e.labels, ...e.tasks.flatMap(t => t.labels || [])]))];
  for (const l of labels) await ensureLabel(l);

  const { projectId, statusFieldId, backlogOptionId } = await getProject();

  for (const epic of epics) {
    const epicIssue = await createIssue(epic.title, epic.body, epic.labels);
    const children: string[] = [];

    for (const task of epic.tasks) {
      const child = await createIssue(
        task.title,
        (task.body || "Roadmap-derived child task.") + `\n\nParent Epic: #${epicIssue.number}`,
        task.labels || ["roadmap", "task"]
      );
      children.push(`- [ ] #${child.number}`);

      const childItemId = await addToProject(projectId, child.node_id);
      await setStatus(projectId, childItemId, statusFieldId, backlogOptionId);
    }

    await octokit.issues.update({
      owner,
      repo,
      issue_number: epicIssue.number,
      body: `${epic.body}\n\n## Child Tasks\n${children.join("\n")}`
    });

    const epicItemId = await addToProject(projectId, epicIssue.node_id);
    await setStatus(projectId, epicItemId, statusFieldId, backlogOptionId);

    console.log(`Created ${epic.title} with ${epic.tasks.length} child tasks`);
  }

  console.log("Seeding complete.");
})().catch(err => {
  console.error(err);
  process.exit(1);
});
TS
  echo "==> Created scripts/seed-roadmap-issues.ts"
fi

if [[ ! -f "scripts/update-roadmap-status.ts" ]]; then
  cat > scripts/update-roadmap-status.ts <<'TS'
import "dotenv/config";
import { Octokit } from "@octokit/rest";
import fs from "node:fs/promises";
import path from "node:path";

const owner = process.env.GITHUB_OWNER || "bmcc81";
const repo = process.env.GITHUB_REPO || "Web-Ink-Graphics";
const token = process.env.GH_TOKEN;
if (!token) throw new Error("Missing GH_TOKEN");

const octokit = new Octokit({ auth: token });

(async () => {
  const roadmapPath = path.join(process.cwd(), "docs", "product-roadmap.md");
  const openIssues = await octokit.paginate(octokit.issues.listForRepo, {
    owner, repo, state: "open", labels: "roadmap", per_page: 100
  });

  const epics = openIssues.filter(i => i.title.startsWith("EPIC:"));
  const tasks = openIssues.filter(i => i.title.startsWith("TASK:") || i.title.startsWith("TASK ("));

  const stamp = new Date().toISOString().slice(0, 10);
  const block = [
    "",
    "## Generated issue tracking snapshot",
    "",
    `Last generated: ${stamp}`,
    "",
    "### Epics",
    ...epics.map(e => `- #${e.number} ${e.title}`),
    "",
    "### Tasks (open)",
    ...tasks.map(t => `- #${t.number} ${t.title}`),
    ""
  ].join("\n");

  let md = await fs.readFile(roadmapPath, "utf8");
  const marker = "## Generated issue tracking snapshot";
  if (md.includes(marker)) md = md.slice(0, md.indexOf(marker)).trimEnd() + "\n";
  md += block;

  await fs.writeFile(roadmapPath, md, "utf8");
  console.log("Updated docs/product-roadmap.md");
})().catch(err => {
  console.error(err);
  process.exit(1);
});
TS
  echo "==> Created scripts/update-roadmap-status.ts"
fi

if [[ ! -f ".github/workflows/project-status-sync.yml" ]]; then
  cat > .github/workflows/project-status-sync.yml <<'YAML'
name: Project Status Sync

on:
  pull_request:
    types: [opened, reopened, ready_for_review, converted_to_draft, closed]

permissions:
  contents: read
  pull-requests: read
  issues: write
  repository-projects: write

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Update Project item status from PR lifecycle
        uses: actions/github-script@v7
        env:
          PROJECT_OWNER: bmcc81
          PROJECT_NUMBER: "3"
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          script: |
            const owner = context.repo.owner;
            const repo = context.repo.repo;
            const pr = context.payload.pull_request;
            const action = context.payload.action;
            const projectOwner = process.env.PROJECT_OWNER;
            const projectNumber = Number(process.env.PROJECT_NUMBER);

            const text = `${pr.title}\n${pr.body || ""}`;
            const refs = [...text.matchAll(/(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\s+#(\d+)/gi)];
            const issueNumbers = [...new Set(refs.map(m => Number(m[1])))];
            if (!issueNumbers.length) return;

            const projectData = await github.graphql(`
              query($login:String!, $number:Int!) {
                user(login:$login) {
                  projectV2(number:$number) {
                    id
                    fields(first:50) {
                      nodes {
                        ... on ProjectV2FieldCommon { id name }
                        ... on ProjectV2SingleSelectField {
                          id name
                          options { id name }
                        }
                      }
                    }
                  }
                }
              }`, { login: projectOwner, number: projectNumber });

            const project = projectData.user?.projectV2;
            if (!project) throw new Error("Project not found");
            const statusField = project.fields.nodes.find(f => f.name === "Status");
            if (!statusField) throw new Error("Status field not found");

            const map = {
              opened: "Review",
              reopened: "Review",
              ready_for_review: "Review",
              converted_to_draft: "In Progress",
              closed: pr.merged ? "Done" : "In Progress"
            };
            const target = map[action];
            if (!target) return;

            const option = statusField.options.find(o => o.name === target);
            if (!option) throw new Error(`Status option '${target}' not found`);

            for (const issue_number of issueNumbers) {
              const issue = await github.rest.issues.get({ owner, repo, issue_number });

              // Add item if not already present
              let itemId = null;
              const scan = await github.graphql(`
                query($projectId:ID!) {
                  node(id:$projectId) {
                    ... on ProjectV2 {
                      items(first:100) {
                        nodes {
                          id
                          content { ... on Issue { id } }
                        }
                      }
                    }
                  }
                }`, { projectId: project.id });

              const hit = scan.node.items.nodes.find(n => n.content?.id === issue.data.node_id);
              if (hit) itemId = hit.id;

              if (!itemId) {
                const added = await github.graphql(`
                  mutation($projectId:ID!, $contentId:ID!) {
                    addProjectV2ItemById(input:{projectId:$projectId, contentId:$contentId}) {
                      item { id }
                    }
                  }`, { projectId: project.id, contentId: issue.data.node_id });
                itemId = added.addProjectV2ItemById.item.id;
              }

              await github.graphql(`
                mutation($projectId:ID!, $itemId:ID!, $fieldId:ID!, $optionId:String!) {
                  updateProjectV2ItemFieldValue(input:{
                    projectId:$projectId,
                    itemId:$itemId,
                    fieldId:$fieldId,
                    value:{singleSelectOptionId:$optionId}
                  }) { projectV2Item { id } }
                }`, {
                  projectId: project.id,
                  itemId,
                  fieldId: statusField.id,
                  optionId: option.id
                });
            }
YAML
  echo "==> Created .github/workflows/project-status-sync.yml"
fi

echo "==> Installing npm dependencies"
npm install

echo "==> Seeding roadmap EPIC/TASK issues into ${OWNER}/${REPO}"
GH_TOKEN="$GH_TOKEN" GITHUB_OWNER="$OWNER" GITHUB_REPO="$REPO" PROJECT_NUMBER="$PROJECT_NUMBER" \
  npx tsx scripts/seed-roadmap-issues.ts

echo "==> Updating docs/product-roadmap.md status snapshot"
GH_TOKEN="$GH_TOKEN" GITHUB_OWNER="$OWNER" GITHUB_REPO="$REPO" \
  npx tsx scripts/update-roadmap-status.ts

if [[ "$AUTO_COMMIT" == "true" ]]; then
  echo "==> Preparing git commit on branch ${BRANCH}"
  CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
  if [[ "$CURRENT_BRANCH" != "$BRANCH" ]]; then
    git checkout -B "$BRANCH"
  fi

  git add package.json package-lock.json scripts .github/workflows/project-status-sync.yml docs/product-roadmap.md || true

  if git diff --cached --quiet; then
    echo "==> No local file changes to commit."
  else
    git commit -m "chore: bootstrap roadmap epics/tasks + project status automation"
    echo "==> Commit created."
    echo "==> Push with: git push -u origin ${BRANCH}"
  fi
else
  echo "==> AUTO_COMMIT=false; skipping commit."
fi

echo "✅ Bootstrap complete."
echo "Next:"
echo "1) Confirm Project #${PROJECT_NUMBER} has statuses: Backlog, Ready, In Progress, Review, Done"
echo "2) Push branch and open PR"
echo "3) Use 'Closes #<issue>' in PR bodies so status automation can move items to Done on merge"