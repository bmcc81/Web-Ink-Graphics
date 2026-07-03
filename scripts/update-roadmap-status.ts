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
