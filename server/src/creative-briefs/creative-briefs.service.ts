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
import { ActivityLogService } from '../activity/activity-log.service';
import type { AuthUser } from '../auth/auth-user';
import {
  CONTRIBUTE_ROLES,
  MANAGE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { AiUsageService } from './ai-usage.service';

const HAIKU_MODEL = 'claude-haiku-4-5';

const briefInclude = {
  createdBy: { select: { id: true, name: true } },
  approvedBy: { select: { id: true, name: true } },
  variants: { orderBy: { sortOrder: 'asc' as const } },
};

interface GeneratedBriefVariant {
  label: string;
  copyAngle: string;
  imageConcept: string;
}

interface GeneratedBriefContent {
  summary: string;
  audienceNotes: string;
  copyAngles: string;
  layoutDirection: string;
  readinessScore: number;
  readinessNotes: string;
  variants: GeneratedBriefVariant[];
}

@Injectable()
export class CreativeBriefsService {
  private readonly logger = new Logger(CreativeBriefsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly activityLog: ActivityLogService,
    private readonly aiUsage: AiUsageService,
  ) {}

  async list(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    return this.prisma.creativeBrief.findMany({
      where: { projectId },
      include: briefInclude,
      orderBy: { createdAt: 'desc' },
    });
  }

  async generate(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanContribute(user, organizationId);
    const project = await this.findProjectWithContext(
      organizationId,
      projectId,
    );
    const apiKey = this.config.get<string>('ANTHROPIC_API_KEY');
    if (!apiKey) {
      throw new ServiceUnavailableException(
        'AI-assisted creative work is not configured for this environment.',
      );
    }
    await this.aiUsage.assertWithinCap(organizationId);

    const discoveryBrief = await this.latestDiscoveryBrief(organizationId);
    const context = this.buildContext(project, discoveryBrief);

    let response: Anthropic.Message;
    try {
      response = await this.callClaude(apiKey, context);
    } catch (error) {
      this.logger.error('Creative brief generation failed', error);
      throw new ServiceUnavailableException(
        'The creative brief could not be generated right now. Try again shortly.',
      );
    }

    const parsed = this.parseResponse(response);
    await this.aiUsage.record(
      organizationId,
      user,
      'CREATIVE_BRIEF',
      HAIKU_MODEL,
      response.usage.input_tokens,
      response.usage.output_tokens,
    );

    const brief = await this.prisma.creativeBrief.create({
      data: {
        projectId,
        summary: parsed.summary,
        audienceNotes: parsed.audienceNotes,
        copyAngles: parsed.copyAngles,
        layoutDirection: parsed.layoutDirection,
        readinessScore: parsed.readinessScore,
        readinessNotes: parsed.readinessNotes,
        createdById: user.id,
        variants: {
          create: parsed.variants.map((variant, index) => ({
            label: variant.label,
            copyAngle: variant.copyAngle,
            imageConcept: variant.imageConcept,
            sortOrder: index,
          })),
        },
      },
      include: briefInclude,
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'CREATIVE_BRIEF',
      entityId: brief.id,
      action: 'CREATED',
      summary: `Creative brief generated for "${project.name}"`,
      actorId: user.id,
    });
    return brief;
  }

  async approve(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    briefId: string,
  ) {
    await this.assertCanManage(user, organizationId);
    const project = await this.findProjectOrThrow(organizationId, projectId);
    const brief = await this.prisma.creativeBrief.findFirst({
      where: { id: briefId, projectId },
    });
    if (!brief) throw new NotFoundException('Creative brief not found');
    if (brief.status === 'APPROVED') {
      throw new BadRequestException('This brief has already been approved');
    }
    const updated = await this.prisma.creativeBrief.update({
      where: { id: briefId },
      data: {
        status: 'APPROVED',
        approvedById: user.id,
        approvedAt: new Date(),
      },
      include: briefInclude,
    });
    await this.activityLog.record({
      organizationId,
      entityType: 'CREATIVE_BRIEF',
      entityId: briefId,
      action: 'STATUS_CHANGED',
      summary: `Creative brief for "${project.name}" approved`,
      actorId: user.id,
    });
    return updated;
  }

  private async callClaude(apiKey: string, context: string) {
    const client = new Anthropic({ apiKey });
    return client.messages.create({
      model: HAIKU_MODEL,
      max_tokens: 1500,
      system:
        'You are a marketing strategist helping a small agency turn a project brief into a structured creative brief for their design team. Be concrete and specific; do not invent facts not implied by the context. If information is missing, say so in the relevant field rather than guessing.',
      messages: [
        {
          role: 'user',
          content: `Generate a creative brief from this project context:\n\n${context}`,
        },
      ],
      output_config: {
        format: {
          type: 'json_schema',
          schema: {
            type: 'object',
            properties: {
              summary: {
                type: 'string',
                description: 'A 2-3 sentence creative summary of the project',
              },
              audienceNotes: {
                type: 'string',
                description:
                  'Who the target audience is and what matters to them',
              },
              copyAngles: {
                type: 'string',
                description:
                  '2-4 suggested copy/messaging angles, one per line',
              },
              layoutDirection: {
                type: 'string',
                description: 'Suggested layout and visual direction',
              },
              readinessScore: {
                type: 'integer',
                description:
                  'A 0-100 confidence score for how ready this brief is to hand to a designer, based on how much real context was available',
              },
              readinessNotes: {
                type: 'string',
                description:
                  'Explicit reasoning for the readiness score, including what information is missing or assumed',
              },
              variants: {
                type: 'array',
                description:
                  '2-3 distinct creative variants, each pairing a copy angle with an image concept a photographer or designer could act on',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      type: 'string',
                      description:
                        "A short name for this creative direction, e.g. 'Bold and direct' or 'Warm and personal'",
                    },
                    copyAngle: {
                      type: 'string',
                      description:
                        'A single copy/messaging angle for this variant',
                    },
                    imageConcept: {
                      type: 'string',
                      description:
                        'A concrete, descriptive image concept for this variant (subject, setting, mood, framing)',
                    },
                  },
                  required: ['label', 'copyAngle', 'imageConcept'],
                  additionalProperties: false,
                },
              },
            },
            required: [
              'summary',
              'audienceNotes',
              'copyAngles',
              'layoutDirection',
              'readinessScore',
              'readinessNotes',
              'variants',
            ],
            additionalProperties: false,
          },
        },
      },
    });
  }

  private parseResponse(response: Anthropic.Message): GeneratedBriefContent {
    const textBlock = response.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text',
    );
    if (!textBlock) {
      throw new ServiceUnavailableException(
        'The creative brief could not be generated right now. Try again shortly.',
      );
    }
    const parsed = JSON.parse(textBlock.text) as GeneratedBriefContent;
    return {
      ...parsed,
      readinessScore: Math.max(
        0,
        Math.min(100, Math.round(parsed.readinessScore)),
      ),
      variants: Array.isArray(parsed.variants) ? parsed.variants : [],
    };
  }

  private buildContext(
    project: {
      name: string;
      description: string | null;
      status: string;
      goal: {
        title: string;
        description: string | null;
        period: string;
        year: number;
        status: string;
      } | null;
    },
    discoveryBrief: {
      projectSummary: string | null;
      primaryAudience: string | null;
      secondaryAudiences: string | null;
      audienceProblems: string | null;
      desiredAction: string | null;
      designDirection: string | null;
    } | null,
  ) {
    const lines: string[] = [];
    lines.push(`Project: ${project.name}`);
    if (project.description) {
      lines.push(`Project description: ${project.description}`);
    }
    lines.push(`Project status: ${project.status}`);
    if (project.goal) {
      lines.push(
        `Linked goal: ${project.goal.title} (${project.goal.period} ${project.goal.year}, status ${project.goal.status})`,
      );
      if (project.goal.description) {
        lines.push(`Goal description: ${project.goal.description}`);
      }
    }
    if (discoveryBrief) {
      lines.push('Audience and brand context from discovery:');
      if (discoveryBrief.projectSummary) {
        lines.push(`Project summary: ${discoveryBrief.projectSummary}`);
      }
      if (discoveryBrief.primaryAudience) {
        lines.push(`Primary audience: ${discoveryBrief.primaryAudience}`);
      }
      if (discoveryBrief.secondaryAudiences) {
        lines.push(`Secondary audiences: ${discoveryBrief.secondaryAudiences}`);
      }
      if (discoveryBrief.audienceProblems) {
        lines.push(`Audience problems: ${discoveryBrief.audienceProblems}`);
      }
      if (discoveryBrief.desiredAction) {
        lines.push(`Desired action: ${discoveryBrief.desiredAction}`);
      }
      if (discoveryBrief.designDirection) {
        lines.push(
          `Design direction preferences: ${discoveryBrief.designDirection}`,
        );
      }
    }
    return lines.join('\n');
  }

  private async latestDiscoveryBrief(organizationId: string) {
    return this.prisma.discoveryBrief.findFirst({
      where: { client: { organizationId } },
      orderBy: { updatedAt: 'desc' },
    });
  }

  private async assertCanView(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
  }

  private async assertCanContribute(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only contributors, managers, and owners can generate creative briefs',
      );
    }
    return role;
  }

  private async assertCanManage(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !MANAGE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only organization owners and managers can approve creative briefs',
      );
    }
    return role;
  }

  private async findProjectOrThrow(organizationId: string, projectId: string) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: { id: true, name: true },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  private async findProjectWithContext(
    organizationId: string,
    projectId: string,
  ) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: {
        name: true,
        description: true,
        status: true,
        goal: {
          select: {
            title: true,
            description: true,
            period: true,
            year: true,
            status: true,
          },
        },
      },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }
}
