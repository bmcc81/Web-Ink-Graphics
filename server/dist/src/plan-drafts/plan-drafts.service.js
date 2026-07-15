"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PlanDraftsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDraftsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const client_1 = require("@prisma/client");
const activity_log_service_1 = require("../activity/activity-log.service");
const ai_usage_service_1 = require("../ai-usage/ai-usage.service");
const goals_service_1 = require("../goals/goals.service");
const organization_access_1 = require("../organizations/organization-access");
const prisma_service_1 = require("../prisma/prisma.service");
const projects_service_1 = require("../projects/projects.service");
const HAIKU_MODEL = 'claude-haiku-4-5';
const VALID_PERIODS = ['Q1', 'Q2', 'Q3', 'Q4', 'ANNUAL'];
const planDraftInclude = {
    createdBy: { select: { id: true, name: true } },
    appliedBy: { select: { id: true, name: true } },
    projects: {
        orderBy: { sortOrder: 'asc' },
        include: { milestones: { orderBy: { sortOrder: 'asc' } } },
    },
    channelRecommendations: { orderBy: { sortOrder: 'asc' } },
};
let PlanDraftsService = PlanDraftsService_1 = class PlanDraftsService {
    prisma;
    config;
    activityLog;
    aiUsage;
    goals;
    projects;
    logger = new common_1.Logger(PlanDraftsService_1.name);
    constructor(prisma, config, activityLog, aiUsage, goals, projects) {
        this.prisma = prisma;
        this.config = config;
        this.activityLog = activityLog;
        this.aiUsage = aiUsage;
        this.goals = goals;
        this.projects = projects;
    }
    async list(user, briefId) {
        const brief = await this.findBrief(user, briefId, false);
        return this.prisma.planDraft.findMany({
            where: { discoveryBriefId: brief.id },
            include: planDraftInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async generate(user, briefId) {
        const brief = await this.findBrief(user, briefId, true);
        const apiKey = this.config.get('ANTHROPIC_API_KEY');
        if (!apiKey) {
            throw new common_1.ServiceUnavailableException('AI-assisted planning is not configured for this environment.');
        }
        await this.aiUsage.assertWithinCap(brief.client.organizationId);
        const context = this.buildContext(brief);
        let response;
        try {
            response = await this.callClaude(apiKey, context);
        }
        catch (error) {
            this.logger.error('Plan draft generation failed', error);
            throw new common_1.ServiceUnavailableException('The plan draft could not be generated right now. Try again shortly.');
        }
        const parsed = this.parseResponse(response);
        await this.aiUsage.record(brief.client.organizationId, user, 'PLANNING_COPILOT', HAIKU_MODEL, response.usage.input_tokens, response.usage.output_tokens);
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
        const followUpQuestions = await this.createFollowUpQuestionsFromRisks(brief.id, brief.openQuestions, parsed.risks);
        return { planDraft, followUpQuestions };
    }
    async apply(user, briefId, planDraftId) {
        const brief = await this.findBrief(user, briefId, false);
        const organizationId = brief.client.organizationId;
        await this.assertCanApply(user, organizationId);
        const planDraft = await this.prisma.planDraft.findFirst({
            where: { id: planDraftId, discoveryBriefId: brief.id },
            include: planDraftInclude,
        });
        if (!planDraft)
            throw new common_1.NotFoundException('Plan draft not found');
        if (planDraft.status === 'APPLIED') {
            throw new common_1.BadRequestException('This plan draft has already been applied');
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
                const createdMilestone = await this.projects.createMilestone(user, organizationId, createdProject.id, { name: this.truncate(milestone.name, 160) });
                for (const taskTitle of milestone.tasks) {
                    const trimmed = taskTitle.trim();
                    if (!trimmed)
                        continue;
                    await this.projects.createTask(user, organizationId, createdProject.id, {
                        title: this.truncate(trimmed, 200),
                        milestoneId: createdMilestone.id,
                    });
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
    async createFollowUpQuestionsFromRisks(briefId, existingOpenQuestions, risks) {
        const existingTexts = new Set(existingOpenQuestions.map((q) => q.question.trim().toLowerCase()));
        const riskLines = risks
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line && !existingTexts.has(line.toLowerCase()));
        if (!riskLines.length)
            return [];
        const baseSortOrder = await this.prisma.briefQuestion.count({
            where: { briefId },
        });
        const created = [];
        for (const [index, line] of riskLines.entries()) {
            created.push(await this.prisma.briefQuestion.create({
                data: {
                    briefId,
                    question: line,
                    status: 'OPEN',
                    priority: 'HIGH',
                    sortOrder: baseSortOrder + index,
                },
            }));
        }
        return created;
    }
    async callClaude(apiKey, context) {
        const client = new sdk_1.default({ apiKey });
        return client.messages.create({
            model: HAIKU_MODEL,
            max_tokens: 3000,
            system: 'You are a marketing operations lead turning a client discovery brief into a starter marketing plan for an agency team. Be concrete and specific; do not invent facts not implied by the context. If information is missing, say so explicitly rather than guessing.',
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
                                description: 'Key risks and missing information that could affect the plan, one per line',
                            },
                            contentIdeas: {
                                type: 'string',
                                description: '2-4 concrete content ideas or topics that support this plan, one per line',
                            },
                            readinessScore: {
                                type: 'integer',
                                description: 'A 0-100 confidence score for how ready this plan is to hand to the team, based on how much real context was available',
                            },
                            readinessNotes: {
                                type: 'string',
                                description: 'Explicit reasoning for the readiness score, including what information is missing or assumed',
                            },
                            projects: {
                                type: 'array',
                                description: '1-3 suggested projects that break the goal into deliverable pieces of work',
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
                                                        description: '2-5 concrete, actionable task titles for this milestone',
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
                                description: '1-4 recommended marketing channels for this plan, each with a short rationale',
                                items: {
                                    type: 'object',
                                    properties: {
                                        channel: {
                                            type: 'string',
                                            description: "The channel name, e.g. 'Local SEO', 'Email', 'Instagram'",
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
    parseResponse(response) {
        const textBlock = response.content.find((block) => block.type === 'text');
        if (!textBlock) {
            throw new common_1.ServiceUnavailableException('The plan draft could not be generated right now. Try again shortly.');
        }
        const parsed = JSON.parse(textBlock.text);
        const projects = Array.isArray(parsed.projects) ? parsed.projects : [];
        const channelRecommendations = Array.isArray(parsed.channelRecommendations)
            ? parsed.channelRecommendations
            : [];
        return {
            ...parsed,
            goalPeriod: this.normalizePeriod(parsed.goalPeriod),
            goalYear: Math.max(2000, Math.min(2100, Math.round(parsed.goalYear))),
            readinessScore: Math.max(0, Math.min(100, Math.round(parsed.readinessScore))),
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
    normalizePeriod(period) {
        return VALID_PERIODS.includes(period)
            ? period
            : 'ANNUAL';
    }
    truncate(value, maxLength) {
        const trimmed = value.trim();
        if (!trimmed)
            return 'Untitled';
        return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
    }
    buildContext(brief) {
        const lines = [];
        lines.push(`Brief: ${brief.title}`);
        lines.push(`Project type: ${brief.projectType}`);
        if (brief.projectSummary)
            lines.push(`Summary: ${brief.projectSummary}`);
        if (brief.motivation)
            lines.push(`Motivation: ${brief.motivation}`);
        if (brief.currentProblems) {
            lines.push(`Current problems: ${brief.currentProblems}`);
        }
        if (brief.successDefinition) {
            lines.push(`Definition of success: ${brief.successDefinition}`);
        }
        if (brief.targetLaunch)
            lines.push(`Target launch: ${brief.targetLaunch}`);
        if (brief.budget)
            lines.push(`Budget: ${brief.budget}`);
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
        if (brief.seoTargets)
            lines.push(`SEO targets: ${brief.seoTargets}`);
        if (brief.targetLocations) {
            lines.push(`Target locations: ${brief.targetLocations}`);
        }
        if (brief.currentPlatform) {
            lines.push(`Current platform: ${brief.currentPlatform}`);
        }
        if (brief.integrations)
            lines.push(`Integrations: ${brief.integrations}`);
        if (brief.compliance)
            lines.push(`Compliance needs: ${brief.compliance}`);
        if (brief.assumptions)
            lines.push(`Assumptions: ${brief.assumptions}`);
        if (brief.outOfScope)
            lines.push(`Out of scope: ${brief.outOfScope}`);
        if (brief.requirements.length) {
            lines.push('Known requirements:');
            for (const requirement of brief.requirements) {
                lines.push(`- [${requirement.category}/${requirement.priority}] ${requirement.title}`);
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
    async findBrief(user, briefId, write) {
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
        if (!brief)
            throw new common_1.NotFoundException('Discovery brief not found');
        return brief;
    }
    clientAccessWhere(user, write) {
        if (this.isStaff(user))
            return {};
        const roles = write
            ? [
                client_1.OrganizationRole.OWNER,
                client_1.OrganizationRole.MANAGER,
                client_1.OrganizationRole.CONTRIBUTOR,
                client_1.OrganizationRole.WEBINK_SPECIALIST,
            ]
            : Object.values(client_1.OrganizationRole);
        return {
            organization: {
                memberships: { some: { userId: user.id, role: { in: roles } } },
            },
        };
    }
    isStaff(user) {
        return user.role === client_1.Role.ADMIN || user.role === client_1.Role.EDITOR;
    }
    async assertCanApply(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.MANAGE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only organization owners and managers can apply a plan draft');
        }
    }
};
exports.PlanDraftsService = PlanDraftsService;
exports.PlanDraftsService = PlanDraftsService = PlanDraftsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        activity_log_service_1.ActivityLogService,
        ai_usage_service_1.AiUsageService,
        goals_service_1.GoalsService,
        projects_service_1.ProjectsService])
], PlanDraftsService);
//# sourceMappingURL=plan-drafts.service.js.map