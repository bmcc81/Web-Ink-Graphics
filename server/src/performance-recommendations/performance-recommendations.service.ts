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
import { RecommendationPriority } from '@prisma/client';
import { ActivityLogService } from '../activity/activity-log.service';
import { AiUsageService } from '../ai-usage/ai-usage.service';
import type { AuthUser } from '../auth/auth-user';
import { CampaignMetricsService } from '../campaign-metrics/campaign-metrics.service';
import {
  CONTRIBUTE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';

const HAIKU_MODEL = 'claude-haiku-4-5';

const recommendationInclude = {
  createdBy: { select: { id: true, name: true } },
  items: { orderBy: { sortOrder: 'asc' as const } },
};

interface GeneratedRecommendationItem {
  title: string;
  rationale: string;
  priority: RecommendationPriority;
}

interface GeneratedRecommendationContent {
  summary: string;
  dataSummary: string;
  confidenceScore: number;
  confidenceNotes: string;
  items: GeneratedRecommendationItem[];
}

@Injectable()
export class PerformanceRecommendationsService {
  private readonly logger = new Logger(PerformanceRecommendationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly activityLog: ActivityLogService,
    private readonly aiUsage: AiUsageService,
    private readonly campaignMetrics: CampaignMetricsService,
  ) {}

  async list(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    return this.prisma.performanceRecommendation.findMany({
      where: { projectId },
      include: recommendationInclude,
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
        'AI-assisted recommendations are not configured for this environment.',
      );
    }

    const summary = await this.campaignMetrics.summary(
      user,
      organizationId,
      projectId,
    );
    if (!summary.budget && summary.metrics.length === 0) {
      throw new BadRequestException(
        'Log at least one campaign metric or set a budget before generating performance recommendations.',
      );
    }

    await this.aiUsage.assertWithinCap(organizationId);

    const context = this.buildContext(project, summary);

    let response: Anthropic.Message;
    try {
      response = await this.callClaude(apiKey, context);
    } catch (error) {
      this.logger.error('Performance recommendation generation failed', error);
      throw new ServiceUnavailableException(
        'The performance recommendations could not be generated right now. Try again shortly.',
      );
    }

    const parsed = this.parseResponse(response);
    await this.aiUsage.record(
      organizationId,
      user,
      'PERFORMANCE_RECOMMENDATIONS',
      HAIKU_MODEL,
      response.usage.input_tokens,
      response.usage.output_tokens,
    );

    const recommendation = await this.prisma.performanceRecommendation.create({
      data: {
        projectId,
        summary: parsed.summary,
        confidenceScore: parsed.confidenceScore,
        confidenceNotes: parsed.confidenceNotes,
        dataSummary: parsed.dataSummary,
        createdById: user.id,
        items: {
          create: parsed.items.map((item, index) => ({
            title: item.title,
            rationale: item.rationale,
            priority: item.priority,
            sortOrder: index,
          })),
        },
      },
      include: recommendationInclude,
    });

    await this.activityLog.record({
      organizationId,
      entityType: 'PERFORMANCE_RECOMMENDATION',
      entityId: recommendation.id,
      action: 'CREATED',
      summary: `Performance recommendations generated for "${project.name}"`,
      actorId: user.id,
    });

    return recommendation;
  }

  private async callClaude(apiKey: string, context: string) {
    const client = new Anthropic({ apiKey });
    return client.messages.create({
      model: HAIKU_MODEL,
      max_tokens: 2000,
      system:
        "You are a marketing performance analyst reviewing a project's logged campaign metrics and budget for an agency team. Be concrete and specific; do not invent numbers not present in the data. Explicitly account for how sparse or limited the data is when setting your confidence score, and never claim certainty the data does not support.",
      messages: [
        {
          role: 'user',
          content: `Review this project's performance data and suggest improvements:\n\n${context}`,
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
                description:
                  '2-3 sentence overall assessment of performance so far',
              },
              dataSummary: {
                type: 'string',
                description:
                  'A 1-sentence factual description of what data was available (e.g. how many metrics were logged, over what period, whether a budget exists)',
              },
              confidenceScore: {
                type: 'integer',
                description:
                  'A 0-100 confidence score reflecting how much real data was available to base these recommendations on. Sparse data should score low.',
              },
              confidenceNotes: {
                type: 'string',
                description:
                  'Explicit reasoning for the confidence score, including what data is missing or limited',
              },
              items: {
                type: 'array',
                description: '2-5 concrete, actionable recommendations',
                items: {
                  type: 'object',
                  properties: {
                    title: { type: 'string' },
                    rationale: { type: 'string' },
                    priority: {
                      type: 'string',
                      description: 'One of: LOW, MEDIUM, HIGH',
                    },
                  },
                  required: ['title', 'rationale', 'priority'],
                  additionalProperties: false,
                },
              },
            },
            required: [
              'summary',
              'dataSummary',
              'confidenceScore',
              'confidenceNotes',
              'items',
            ],
            additionalProperties: false,
          },
        },
      },
    });
  }

  private parseResponse(
    response: Anthropic.Message,
  ): GeneratedRecommendationContent {
    const textBlock = response.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text',
    );
    if (!textBlock) {
      throw new ServiceUnavailableException(
        'The performance recommendations could not be generated right now. Try again shortly.',
      );
    }
    const parsed = JSON.parse(textBlock.text) as GeneratedRecommendationContent;
    const items = Array.isArray(parsed.items) ? parsed.items : [];
    const validPriorities: RecommendationPriority[] = ['LOW', 'MEDIUM', 'HIGH'];
    return {
      ...parsed,
      confidenceScore: Math.max(
        0,
        Math.min(100, Math.round(parsed.confidenceScore)),
      ),
      items: items.map((item) => ({
        title: item.title,
        rationale: item.rationale,
        priority: validPriorities.includes(item.priority)
          ? item.priority
          : 'MEDIUM',
      })),
    };
  }

  private buildContext(
    project: {
      name: string;
      description: string | null;
      status: string;
      goal: { title: string; period: string; year: number } | null;
    },
    summary: Awaited<ReturnType<CampaignMetricsService['summary']>>,
  ) {
    const lines: string[] = [];
    lines.push(`Project: ${project.name}`);
    if (project.description) lines.push(`Description: ${project.description}`);
    lines.push(`Status: ${project.status}`);
    if (project.goal) {
      lines.push(
        `Linked goal: ${project.goal.title} (${project.goal.period} ${project.goal.year})`,
      );
    }

    if (summary.budget) {
      lines.push('Budget:');
      lines.push(`- Currency: ${summary.budget.currency}`);
      if (summary.budget.plannedAmount !== null) {
        lines.push(`- Planned: ${summary.budget.plannedAmount.toString()}`);
      }
      if (summary.budget.actualAmount !== null) {
        lines.push(`- Actual: ${summary.budget.actualAmount.toString()}`);
      }
      if (summary.budget.variance !== null) {
        lines.push(`- Variance (actual - planned): ${summary.budget.variance}`);
      }
    } else {
      lines.push('Budget: none set.');
    }

    if (summary.metrics.length) {
      lines.push('Logged campaign metrics:');
      for (const metric of summary.metrics) {
        lines.push(
          `- ${metric.metricType}: actual ${metric.actualTotal}` +
            (metric.plannedTotal !== null
              ? `, planned ${metric.plannedTotal}, variance ${metric.variance}`
              : ', no planned target set') +
            ` (from ${metric.entryCount} logged ${metric.entryCount === 1 ? 'entry' : 'entries'})`,
        );
      }
    } else {
      lines.push('No campaign metrics have been logged yet.');
    }

    return lines.join('\n');
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
        'Only contributors, managers, and owners can generate performance recommendations',
      );
    }
    return role;
  }

  private async findProjectOrThrow(organizationId: string, projectId: string) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      select: { id: true },
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
        goal: { select: { title: true, period: true, year: true } },
      },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }
}
