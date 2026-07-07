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
var CreativeBriefsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreativeBriefsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
const activity_log_service_1 = require("../activity/activity-log.service");
const organization_access_1 = require("../organizations/organization-access");
const prisma_service_1 = require("../prisma/prisma.service");
const ai_usage_service_1 = require("./ai-usage.service");
const HAIKU_MODEL = 'claude-haiku-4-5';
const briefInclude = {
    createdBy: { select: { id: true, name: true } },
    approvedBy: { select: { id: true, name: true } },
    variants: { orderBy: { sortOrder: 'asc' } },
};
let CreativeBriefsService = CreativeBriefsService_1 = class CreativeBriefsService {
    prisma;
    config;
    activityLog;
    aiUsage;
    logger = new common_1.Logger(CreativeBriefsService_1.name);
    constructor(prisma, config, activityLog, aiUsage) {
        this.prisma = prisma;
        this.config = config;
        this.activityLog = activityLog;
        this.aiUsage = aiUsage;
    }
    async list(user, organizationId, projectId) {
        await this.assertCanView(user, organizationId);
        await this.findProjectOrThrow(organizationId, projectId);
        return this.prisma.creativeBrief.findMany({
            where: { projectId },
            include: briefInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async generate(user, organizationId, projectId) {
        await this.assertCanContribute(user, organizationId);
        const project = await this.findProjectWithContext(organizationId, projectId);
        const apiKey = this.config.get('ANTHROPIC_API_KEY');
        if (!apiKey) {
            throw new common_1.ServiceUnavailableException('AI-assisted creative work is not configured for this environment.');
        }
        await this.aiUsage.assertWithinCap(organizationId);
        const discoveryBrief = await this.latestDiscoveryBrief(organizationId);
        const context = this.buildContext(project, discoveryBrief);
        let response;
        try {
            response = await this.callClaude(apiKey, context);
        }
        catch (error) {
            this.logger.error('Creative brief generation failed', error);
            throw new common_1.ServiceUnavailableException('The creative brief could not be generated right now. Try again shortly.');
        }
        const parsed = this.parseResponse(response);
        await this.aiUsage.record(organizationId, user, 'CREATIVE_BRIEF', HAIKU_MODEL, response.usage.input_tokens, response.usage.output_tokens);
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
    async approve(user, organizationId, projectId, briefId) {
        await this.assertCanManage(user, organizationId);
        const project = await this.findProjectOrThrow(organizationId, projectId);
        const brief = await this.prisma.creativeBrief.findFirst({
            where: { id: briefId, projectId },
        });
        if (!brief)
            throw new common_1.NotFoundException('Creative brief not found');
        if (brief.status === 'APPROVED') {
            throw new common_1.BadRequestException('This brief has already been approved');
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
    async callClaude(apiKey, context) {
        const client = new sdk_1.default({ apiKey });
        return client.messages.create({
            model: HAIKU_MODEL,
            max_tokens: 1500,
            system: 'You are a marketing strategist helping a small agency turn a project brief into a structured creative brief for their design team. Be concrete and specific; do not invent facts not implied by the context. If information is missing, say so in the relevant field rather than guessing.',
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
                                description: 'Who the target audience is and what matters to them',
                            },
                            copyAngles: {
                                type: 'string',
                                description: '2-4 suggested copy/messaging angles, one per line',
                            },
                            layoutDirection: {
                                type: 'string',
                                description: 'Suggested layout and visual direction',
                            },
                            readinessScore: {
                                type: 'integer',
                                description: 'A 0-100 confidence score for how ready this brief is to hand to a designer, based on how much real context was available',
                            },
                            readinessNotes: {
                                type: 'string',
                                description: 'Explicit reasoning for the readiness score, including what information is missing or assumed',
                            },
                            variants: {
                                type: 'array',
                                description: '2-3 distinct creative variants, each pairing a copy angle with an image concept a photographer or designer could act on',
                                items: {
                                    type: 'object',
                                    properties: {
                                        label: {
                                            type: 'string',
                                            description: "A short name for this creative direction, e.g. 'Bold and direct' or 'Warm and personal'",
                                        },
                                        copyAngle: {
                                            type: 'string',
                                            description: 'A single copy/messaging angle for this variant',
                                        },
                                        imageConcept: {
                                            type: 'string',
                                            description: 'A concrete, descriptive image concept for this variant (subject, setting, mood, framing)',
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
    parseResponse(response) {
        const textBlock = response.content.find((block) => block.type === 'text');
        if (!textBlock) {
            throw new common_1.ServiceUnavailableException('The creative brief could not be generated right now. Try again shortly.');
        }
        const parsed = JSON.parse(textBlock.text);
        return {
            ...parsed,
            readinessScore: Math.max(0, Math.min(100, Math.round(parsed.readinessScore))),
            variants: Array.isArray(parsed.variants) ? parsed.variants : [],
        };
    }
    buildContext(project, discoveryBrief) {
        const lines = [];
        lines.push(`Project: ${project.name}`);
        if (project.description) {
            lines.push(`Project description: ${project.description}`);
        }
        lines.push(`Project status: ${project.status}`);
        if (project.goal) {
            lines.push(`Linked goal: ${project.goal.title} (${project.goal.period} ${project.goal.year}, status ${project.goal.status})`);
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
                lines.push(`Design direction preferences: ${discoveryBrief.designDirection}`);
            }
        }
        return lines.join('\n');
    }
    async latestDiscoveryBrief(organizationId) {
        return this.prisma.discoveryBrief.findFirst({
            where: { client: { organizationId } },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async assertCanView(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
    }
    async assertCanContribute(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.CONTRIBUTE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only contributors, managers, and owners can generate creative briefs');
        }
        return role;
    }
    async assertCanManage(user, organizationId) {
        const role = await (0, organization_access_1.resolveOrganizationRole)(this.prisma, user, organizationId);
        if (!role)
            throw new common_1.NotFoundException('Organization not found');
        if (role !== 'STAFF' && !organization_access_1.MANAGE_ROLES.includes(role)) {
            throw new common_1.ForbiddenException('Only organization owners and managers can approve creative briefs');
        }
        return role;
    }
    async findProjectOrThrow(organizationId, projectId) {
        const project = await this.prisma.project.findFirst({
            where: { id: projectId, organizationId },
            select: { id: true, name: true },
        });
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
    async findProjectWithContext(organizationId, projectId) {
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
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
};
exports.CreativeBriefsService = CreativeBriefsService;
exports.CreativeBriefsService = CreativeBriefsService = CreativeBriefsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        activity_log_service_1.ActivityLogService,
        ai_usage_service_1.AiUsageService])
], CreativeBriefsService);
//# sourceMappingURL=creative-briefs.service.js.map