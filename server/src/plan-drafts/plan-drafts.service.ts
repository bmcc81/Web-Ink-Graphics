import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Anthropic from '@anthropic-ai/sdk';
import { GoalPeriod, OrganizationRole, Prisma, Role } from '@prisma/client';
import { ActivityLogService } from '../activity/activity-log.service';
import { AiUsageService } from '../ai-usage/ai-usage.service';
import type { AuthUser } from '../auth/auth-user';
import { GoalsService } from '../goals/goals.service';
import {
  MANAGE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsService } from '../projects/projects.service';

const HAIKU_MODEL = 'claude-haiku-4-5';
const VALID_PERIODS: GoalPeriod[] = ['Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL'];

const planDraftInclude = {
  createdBy: { select: { id: true, name: true } },
  appliedBy: { select: { id: true, name: true } },
  projects: {
    orderBy: { sortOrder: 'asc' as const },
    include: { milestones: { orderBy: { sortOrder: 'asc' as const } } },
  },
  channelRecommendations: { orderBy: { sortOrder: 'asc' as const } },
};

interface GeneratedPlanMilestone {
  name: string;
  tasks: string[];
}

interface GeneratedPlanProject {
  name: string;
  description: string;
  milestones: GeneratedPlanMilestone[];
}

interface GeneratedChannelRecommendation {
  channel: string;
  rationale: string;
}

interface GeneratedPlanContent {
  goalTitle: string;
  goalDescription: string;
  goalPeriod: GoalPeriod;
  goalYear: number;
  summary: string;
  risks: string;
  contentIdeas: string;
  readinessScore: number;
  readinessNotes: string;
  projects: GeneratedPlanProject[];
  channelRecommendations: GeneratedChannelRecommendation[];
}

@Injectable()
export class PlanDraftsService {
  private readonly logger = new Logger(PlanDraftsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly activityLog: ActivityLogService,
    private readonly aiUsage: AiUsageService,
    private readonly goals: GoalsService,
    private readonly projects: ProjectsService,
  ) {}

  async list(user: AuthUser, briefId: string) {
    const brief = await this.findBrief(user, briefId, false);
    return this.prisma.planDraft.findMany({
      where: { discoveryBriefId: brief.id },
      include: planDraftInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async generate(user: AuthUser, briefId: string) {
    const brief = await this.findBrief(user, briefId, true);
    const apiKey = this.config.get<string>('ANTHROPIC_API_KEY');
    if (!apiKey) {
      throw new ServiceUnavailableException(
        'AI-assisted planning is not configured for this environment.',
      );
    }
    await this.aiUsage.assertWithinCap(brief.client.organizationId);

    const context = this.buildContext(brief);

    let response: Anthropic.Message;
    try {
      response = await this.callClaude(apiKey, context);
    } catch (error) {
      this.logger.error('Plan draft generation failed', error);
      throw new ServiceUnavailableException(
        'The plan draft could not be generated right now. Try again shortly.',
      );
    }

    const parsed = this.parseResponse(response);
    await this.aiUsage.record(
      brief.client.organizationId,
      user,
      'PLANNING_COPILOT',
      HAIKU_MODEL,
      response.usage.input_tokens,
      response.usage.output_tokens,
    );

    const planDraft = await this.prisma.planDraft.create({
      data: {
        discoveryBriefId: brief.id,
        goalTitle: parsed.goalTitle,
        goalDescription: parsed.goalDescription,
        goalPeriod: parsed.goalPeriod,
        goalYear: parsed.goalYear,
        summary: parsed.summary,
        risks: parsed.risks,
        contentIdeas: parsed.contentIdeas,
        readinessScore: parsed.readinessScore,
        readinessNotes: parsed.readinessNotes,
        createdById: user.id,
        projects: {
          create: parsed.projects.map((project, index) => ({
            name: project.name,
            description: project.description,
            sortOrder: index,
            milestones: {
              create: project.milestones.map((milestone, milestoneIndex) => ({
                name: milestone.name,
                tasks: milestone.tasks,
                sortOrder: milestoneIndex,
              })),
            },
          })),
        },
        channelRecommendations: {
          create: parsed.channelRecommendations.map((rec, index) => ({
            channel: rec.channel,
            rationale: rec.rationale,
            sortOrder: index,
          })),
        },
      },
      include: planDraftInclude,
    });

    await this.activityLog.record({
      organizationId: brief.client.organizationId,
      entityType: 'PLAN_DRAFT',
      entityId: planDraft.id,
      action: 'CREATED',
      summary: `Plan draft generated for "${brief.title}"`,
      actorId: user.id,
    });

    const followUpQuestions = await this.createFollowUpQuestionsFromRisks(
      brief.id,
      brief.openQuestions,
      parsed.risks,
    );

    return { planDraft, followUpQuestions };
  }

  async apply(user: AuthUser, briefId: string, planDraftId: string) {
    const brief = await this.findBrief(user, briefId, false);
    const organizationId = brief.client.organizationId;
    await this.assertCanApply(user, organizationId);

    const planDraft = await this.prisma.planDraft.findFirst({
      where: { id: planDraftId, discoveryBriefId: brief.id },
      include: planDraftInclude,
    });
    if (!planDraft) throw new NotFoundException('Plan draft not found');
    if (planDraft.status === 'APPLIED') {
      throw new BadRequestException('This plan draft has already been applied');
    }

    const goal = await this.goals.create(user, organizationId, {
      title: this.truncate(planDraft.goalTitle, 160),
      description: planDraft.goalDescription ?? undefined,
      period: planDraft.goalPeriod,
      year: planDraft.goalYear,
    });

    for (const project of planDraft.projects) {
      const createdProject = await this.projects.create(user, organizationId, {
        name: this.truncate(project.name, 160),
        description: project.description ?? undefined,
        goalId: goal.id,
      });

      for (const milestone of project.milestones) {
        const createdMilestone = await this.projects.createMilestone(
          user,
          organizationId,
          createdProject.id,
          { name: this.truncate(milestone.name, 160) },
        );

        for (const taskTitle of milestone.tasks) {
          const trimmed = taskTitle.trim();
          if (!trimmed) continue;
          await this.projects.createTask(
            user,
            organizationId,
            createdProject.id,
            {
              title: this.truncate(trimmed, 200),
              milestoneId: createdMilestone.id,
            },
          );
        }
      }
    }

    const updated = await this.prisma.planDraft.update({
      where: { id: planDraftId },
      data: { status: 'APPLIED', appliedById: user.id, appliedAt: new Date() },
      include: planDraftInclude,
    });

    await this.activityLog.record({
      organizationId,
      entityType: 'PLAN_DRAFT',
      entityId: planDraftId,
      action: 'STATUS_CHANGED',
      summary: `Plan draft applied, creating goal "${goal.title}"`,
      actorId: user.id,
    });

    return { planDraft: updated, goalId: goal.id };
  }

  private async createFollowUpQuestionsFromRisks(
    briefId: string,
    existingOpenQuestions: { question: string }[],
    risks: string,
  ) {
    const existingTexts = new Set(
      existingOpenQuestions.map((q) => q.question.trim().toLowerCase()),
    );
    const riskLines = risks
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !existingTexts.has(line.toLowerCase()));
    if (!riskLines.length) return [];

    const baseSortOrder = await this.prisma.briefQuestion.count({
      where: { briefId },
    });
    const created = [];
    for (const [index, line] of riskLines.entries()) {
      created.push(
        await this.prisma.briefQuestion.create({
          data: {
            briefId,
            question: line,
            status: 'OPEN',
            priority: 'HIGH',
            sortOrder: baseSortOrder + index,
          },
        }),
      );
    }
    return created;
  }

  private async callClaude(apiKey: string, context: string) {
    const client = new Anthropic({ apiKey });
    return client.messages.create({
      model: HAIKU_MODEL,
      max_tokens: 3000,
      system:
        'You are a marketing operations lead turning a client discovery brief into a starter marketing plan for an agency team. Be concrete and specific; do not invent facts not implied by the context. If information is missing, say so explicitly rather than guessing.',
      messages: [
        {
          role: 'user',
          content: `Generate a starter plan from this discovery brief:\n\n${context}`,
        },
      ],
      output_config: {
        format: {
          type: 'json_schema',
          schema: {
            type: 'object',
            properties: {
              goalTitle: {
                type: 'string',
                description: 'A short title for the overarching goal',
              },
              goalDescription: {
                type: 'string',
                description: 'A 1-2 sentence description of the goal',
              },
              goalPeriod: {
                type: 'string',
                description: 'One of: Q1, Q2, Q3, Q4, ANNUAL',
              },
              goalYear: {
                type: 'integer',
                description: 'The calendar year this goal targets',
              },
              summary: {
                type: 'string',
                description: '2-3 sentence overview of the suggested plan',
              },
              risks: {
                type: 'string',
                description:
                  'Key risks and missing information that could affect the plan, one per line',
              },
              contentIdeas: {
                type: 'string',
                description:
                  '2-4 concrete content ideas or topics that support this plan, one per line',
              },
              readinessScore: {
                type: 'integer',
                description:
                  'A 0-100 confidence score for how ready this plan is to hand to the team, based on how much real context was available',
              },
              readinessNotes: {
                type: 'string',
                description:
                  'Explicit reasoning for the readiness score, including what information is missing or assumed',
              },
              projects: {
                type: 'array',
                description:
                  '1-3 suggested projects that break the goal into deliverable pieces of work',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    description: { type: 'string' },
                    milestones: {
                      type: 'array',
                      description: '2-4 milestones for this project',
                      items: {
                        type: 'object',
                        properties: {
                          name: { type: 'string' },
                          tasks: {
                            type: 'array',
                            description:
                              '2-5 concrete, actionable task titles for this milestone',
                            items: { type: 'string' },
                          },
                        },
                        required: ['name', 'tasks'],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ['name', 'description', 'milestones'],
                  additionalProperties: false,
                },
              },
              channelRecommendations: {
                type: 'array',
                description:
                  '1-4 recommended marketing channels for this plan, each with a short rationale',
                items: {
                  type: 'object',
                  properties: {
                    channel: {
                      type: 'string',
                      description:
                        "The channel name, e.g. 'Local SEO', 'Email', 'Instagram'",
                    },
                    rationale: {
                      type: 'string',
                      description: 'Why this channel fits this plan',
                    },
                  },
                  required: ['channel', 'rationale'],
                  additionalProperties: false,
                },
              },
            },
            required: [
              'goalTitle',
              'goalDescription',
              'goalPeriod',
              'goalYear',
              'summary',
              'risks',
              'contentIdeas',
              'readinessScore',
              'readinessNotes',
              'projects',
              'channelRecommendations',
            ],
            additionalProperties: false,
          },
        },
      },
    });
  }

  private parseResponse(response: Anthropic.Message): GeneratedPlanContent {
    const textBlock = response.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text',
    );
    if (!textBlock) {
      throw new ServiceUnavailableException(
        'The plan draft could not be generated right now. Try again shortly.',
      );
    }
    const parsed = JSON.parse(textBlock.text) as GeneratedPlanContent;
    const projects = Array.isArray(parsed.projects) ? parsed.projects : [];
    const channelRecommendations = Array.isArray(parsed.channelRecommendations)
      ? parsed.channelRecommendations
      : [];
    return {
      ...parsed,
      goalPeriod: this.normalizePeriod(parsed.goalPeriod),
      goalYear: Math.max(2000, Math.min(2100, Math.round(parsed.goalYear))),
      readinessScore: Math.max(
        0,
        Math.min(100, Math.round(parsed.readinessScore)),
      ),
      projects: projects.map((project) => ({
        name: project.name,
        description: project.description,
        milestones: Array.isArray(project.milestones)
          ? project.milestones.map((milestone) => ({
              name: milestone.name,
              tasks: Array.isArray(milestone.tasks) ? milestone.tasks : [],
            }))
          : [],
      })),
      channelRecommendations: channelRecommendations.map((rec) => ({
        channel: rec.channel,
        rationale: rec.rationale,
      })),
    };
  }

  private normalizePeriod(period: unknown): GoalPeriod {
    return VALID_PERIODS.includes(period as GoalPeriod)
      ? (period as GoalPeriod)
      : 'ANNUAL';
  }

  private truncate(value: string, maxLength: number) {
    const trimmed = value.trim();
    if (!trimmed) return 'Untitled';
    return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
  }

  private buildContext(
    brief: Awaited<ReturnType<PlanDraftsService['findBrief']>>,
  ) {
    const lines: string[] = [];
    lines.push(`Brief: ${brief.title}`);
    lines.push(`Project type: ${brief.projectType}`);
    if (brief.projectSummary) lines.push(`Summary: ${brief.projectSummary}`);
    if (brief.motivation) lines.push(`Motivation: ${brief.motivation}`);
    if (brief.currentProblems) {
      lines.push(`Current problems: ${brief.currentProblems}`);
    }
    if (brief.successDefinition) {
      lines.push(`Definition of success: ${brief.successDefinition}`);
    }
    if (brief.targetLaunch) lines.push(`Target launch: ${brief.targetLaunch}`);
    if (brief.budget) lines.push(`Budget: ${brief.budget}`);
    if (brief.primaryAudience) {
      lines.push(`Primary audience: ${brief.primaryAudience}`);
    }
    if (brief.secondaryAudiences) {
      lines.push(`Secondary audiences: ${brief.secondaryAudiences}`);
    }
    if (brief.audienceProblems) {
      lines.push(`Audience problems: ${brief.audienceProblems}`);
    }
    if (brief.desiredAction)
      lines.push(`Desired action: ${brief.desiredAction}`);
    if (brief.designDirection) {
      lines.push(`Design direction: ${brief.designDirection}`);
    }
    if (brief.seoTargets) lines.push(`SEO targets: ${brief.seoTargets}`);
    if (brief.targetLocations) {
      lines.push(`Target locations: ${brief.targetLocations}`);
    }
    if (brief.currentPlatform) {
      lines.push(`Current platform: ${brief.currentPlatform}`);
    }
    if (brief.integrations) lines.push(`Integrations: ${brief.integrations}`);
    if (brief.compliance) lines.push(`Compliance needs: ${brief.compliance}`);
    if (brief.assumptions) lines.push(`Assumptions: ${brief.assumptions}`);
    if (brief.outOfScope) lines.push(`Out of scope: ${brief.outOfScope}`);

    if (brief.requirements.length) {
      lines.push('Known requirements:');
      for (const requirement of brief.requirements) {
        lines.push(
          `- [${requirement.category}/${requirement.priority}] ${requirement.title}`,
        );
      }
    }
    if (brief.openQuestions.length) {
      lines.push('Open questions still unresolved:');
      for (const question of brief.openQuestions) {
        lines.push(`- ${question.question}`);
      }
    }

    return lines.join('\n');
  }

  private async findBrief(user: AuthUser, briefId: string, write: boolean) {
    const brief = await this.prisma.discoveryBrief.findFirst({
      where: { id: briefId, client: this.clientAccessWhere(user, write) },
      include: {
        client: { select: { id: true, organizationId: true } },
        requirements: { orderBy: { sortOrder: 'asc' } },
        openQuestions: {
          where: { status: 'OPEN' },
          orderBy: { sortOrder: 'asc' },
        },
      },
    });
    if (!brief) throw new NotFoundException('Discovery brief not found');
    return brief;
  }

  private clientAccessWhere(
    user: AuthUser,
    write: boolean,
  ): Prisma.ClientWhereInput {
    if (this.isStaff(user)) return {};
    const roles = write
      ? [
          OrganizationRole.OWNER,
          OrganizationRole.MANAGER,
          OrganizationRole.CONTRIBUTOR,
          OrganizationRole.WEBINK_SPECIALIST,
        ]
      : Object.values(OrganizationRole);
    return {
      organization: {
        memberships: { some: { userId: user.id, role: { in: roles } } },
      },
    };
  }

  private isStaff(user: AuthUser) {
    return user.role === Role.ADMIN || user.role === Role.EDITOR;
  }

  private async assertCanApply(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !MANAGE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only organization owners and managers can apply a plan draft',
      );
    }
  }
}
