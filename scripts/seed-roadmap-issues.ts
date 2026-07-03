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
