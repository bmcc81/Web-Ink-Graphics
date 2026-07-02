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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const media_service_1 = require("../media/media.service");
const briefInclude = {
    client: true,
    requirements: { orderBy: { sortOrder: 'asc' } },
    openQuestions: { orderBy: { sortOrder: 'asc' } },
    generatedPrompts: { orderBy: { createdAt: 'desc' }, take: 5 },
    attachments: { orderBy: { createdAt: 'desc' } },
};
let ClientsService = class ClientsService {
    prisma;
    media;
    constructor(prisma, media) {
        this.prisma = prisma;
        this.media = media;
    }
    findAll() {
        return this.prisma.client.findMany({
            include: {
                _count: { select: { discoveryBriefs: true } },
                discoveryBriefs: {
                    orderBy: { updatedAt: 'desc' },
                    take: 1,
                    select: {
                        id: true,
                        title: true,
                        status: true,
                        updatedAt: true,
                        _count: { select: { requirements: true } },
                        openQuestions: {
                            where: { status: { not: 'ANSWERED' } },
                            select: { dueDate: true, priority: true },
                        },
                    },
                },
            },
            orderBy: { companyName: 'asc' },
        });
    }
    async findOne(id) {
        const client = await this.prisma.client.findUnique({
            where: { id },
            include: { discoveryBriefs: { orderBy: { updatedAt: 'desc' } } },
        });
        if (!client)
            throw new common_1.NotFoundException('Client not found');
        return client;
    }
    create(dto) {
        return this.prisma.client.create({ data: this.clean(dto) });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.client.update({ where: { id }, data: this.clean(dto) });
    }
    async createBrief(clientId, dto) {
        await this.findOne(clientId);
        const { requirements, openQuestions, meetingAt, ...brief } = dto;
        return this.prisma.discoveryBrief.create({
            data: {
                ...this.clean(brief),
                meetingAt: meetingAt ? new Date(meetingAt) : undefined,
                approvedAt: brief.status === 'APPROVED' ? new Date() : undefined,
                client: { connect: { id: clientId } },
                requirements: requirements
                    ? {
                        create: requirements.map((item, sortOrder) => {
                            const data = this.withoutPersistenceFields(item);
                            return {
                                ...data,
                                referenceCode: data.referenceCode || this.requirementCode(sortOrder),
                                sortOrder,
                            };
                        }),
                    }
                    : undefined,
                openQuestions: openQuestions
                    ? {
                        create: openQuestions.map((item, sortOrder) => ({
                            ...this.questionData(item),
                            sortOrder,
                        })),
                    }
                    : undefined,
            },
            include: briefInclude,
        });
    }
    async findBrief(id) {
        const brief = await this.prisma.discoveryBrief.findUnique({
            where: { id },
            include: briefInclude,
        });
        if (!brief)
            throw new common_1.NotFoundException('Discovery brief not found');
        return brief;
    }
    async updateBrief(id, dto) {
        const existing = await this.findBrief(id);
        const { requirements, openQuestions, meetingAt, ...brief } = dto;
        const existingRequirements = requirements?.filter((item) => Boolean(item.id)) || [];
        const newRequirements = requirements?.filter((item) => !item.id) || [];
        const existingQuestions = openQuestions?.filter((item) => Boolean(item.id)) || [];
        const newQuestions = openQuestions?.filter((item) => !item.id) || [];
        return this.prisma.discoveryBrief.update({
            where: { id },
            data: {
                ...this.clean(brief),
                meetingAt: meetingAt
                    ? new Date(meetingAt)
                    : meetingAt === ''
                        ? null
                        : undefined,
                approvedAt: dto.status === 'APPROVED' && !existing.approvedAt
                    ? new Date()
                    : undefined,
                requirements: requirements
                    ? {
                        deleteMany: {
                            id: { notIn: existingRequirements.map((item) => item.id) },
                        },
                        update: existingRequirements.map((item, sortOrder) => {
                            const data = this.withoutPersistenceFields(item);
                            return {
                                where: { id: item.id },
                                data: {
                                    ...data,
                                    referenceCode: data.referenceCode || this.requirementCode(sortOrder),
                                    sortOrder,
                                },
                            };
                        }),
                        create: newRequirements.map((item, offset) => {
                            const sortOrder = existingRequirements.length + offset;
                            const data = this.withoutPersistenceFields(item);
                            return {
                                ...data,
                                referenceCode: data.referenceCode || this.requirementCode(sortOrder),
                                sortOrder,
                            };
                        }),
                    }
                    : undefined,
                openQuestions: openQuestions
                    ? {
                        deleteMany: {
                            id: { notIn: existingQuestions.map((item) => item.id) },
                        },
                        update: existingQuestions.map((item, sortOrder) => ({
                            where: { id: item.id },
                            data: {
                                ...this.questionData(item),
                                sortOrder,
                            },
                        })),
                        create: newQuestions.map((item, offset) => ({
                            ...this.questionData(item),
                            sortOrder: existingQuestions.length + offset,
                        })),
                    }
                    : undefined,
            },
            include: briefInclude,
        });
    }
    async generatePrompt(id, outputType = 'IMPLEMENTATION') {
        const brief = await this.findBrief(id);
        const content = this.buildPrompt(brief, outputType);
        const saved = await this.prisma.generatedPrompt.create({
            data: { briefId: id, content },
        });
        return saved;
    }
    async addAttachment(id, dto) {
        await this.findBrief(id);
        return this.prisma.briefAttachment.create({
            data: { ...dto, briefId: id },
        });
    }
    async attachmentDownload(id) {
        const attachment = await this.prisma.briefAttachment.findUnique({
            where: { id },
        });
        if (!attachment)
            throw new common_1.NotFoundException('Attachment not found');
        return {
            downloadUrl: await this.media.createDownload(attachment.objectKey, attachment.fileName),
            expiresIn: 300,
        };
    }
    async deleteAttachment(id) {
        const attachment = await this.prisma.briefAttachment.findUnique({
            where: { id },
        });
        if (!attachment)
            throw new common_1.NotFoundException('Attachment not found');
        await this.media.deleteDiscoveryObject(attachment.objectKey);
        await this.prisma.briefAttachment.delete({ where: { id } });
        return { deleted: true };
    }
    buildPrompt(brief, outputType) {
        const section = (heading, value) => `## ${heading}\n${value?.trim() || 'Not provided — clarify before implementation.'}`;
        const requirements = brief.requirements.length
            ? brief.requirements
                .map((item) => `- ${item.referenceCode || 'UNNUMBERED'} [${item.status}] [${item.priority}] [${item.category}] ${item.title}\n  Details: ${item.details || 'Not provided'}\n  Acceptance criteria: ${item.acceptanceCriteria || 'Not defined'}`)
                .join('\n')
            : 'No structured requirements recorded.';
        const questions = brief.openQuestions.filter((item) => item.status !== 'ANSWERED');
        const unanswered = questions.length
            ? questions
                .map((item) => `- [${item.priority}] ${item.question}${item.owner ? ` — Owner: ${item.owner}` : ' — Owner: unassigned'}${item.dueDate ? ` — Due: ${item.dueDate.toISOString().slice(0, 10)}` : ' — Due: not set'}${item.answer ? ` — Current note: ${item.answer}` : ''}`)
                .join('\n')
            : 'No unresolved questions recorded.';
        const outputs = {
            IMPLEMENTATION: {
                title: 'Website Implementation Brief',
                instructions: [
                    'Inspect the existing repository before making changes.',
                    'Summarize the proposed implementation.',
                    'List unresolved blockers and assumptions.',
                    'Produce an implementation plan mapped to the requirements.',
                    'Implement only work that does not depend on unanswered questions.',
                    'Run appropriate tests and report verification results.',
                ],
            },
            TECHNICAL_PLAN: {
                title: 'Technical Planning Brief',
                instructions: [
                    'Do not modify the repository.',
                    'Assess the current architecture and constraints.',
                    'Propose the data model, APIs, components, integrations and deployment changes.',
                    'Map each technical decision to a recorded requirement.',
                    'Identify risks, dependencies, blockers and verification steps.',
                    'Provide a phased implementation plan with acceptance checks.',
                ],
            },
            PROPOSAL: {
                title: 'Client Proposal Brief',
                instructions: [
                    'Do not modify the repository.',
                    'Write a client-facing proposal in plain language.',
                    'Include objectives, recommended scope, deliverables, exclusions and assumptions.',
                    'Separate required work from optional or future work.',
                    'Identify information needed before a reliable estimate can be finalized.',
                    'Do not invent prices, dates or commitments.',
                ],
            },
            WEBSITE_AUDIT: {
                title: 'Website Audit Brief',
                instructions: [
                    'Do not modify the repository.',
                    'Audit the current website against the stated business goals.',
                    'Review usability, conversion, content, SEO, accessibility, performance and technical risk.',
                    'Separate observed evidence from assumptions.',
                    'Prioritize findings by impact and effort.',
                    'Recommend measurable next actions and verification methods.',
                ],
            },
            CONTENT_SEO: {
                title: 'Content and SEO Planning Brief',
                instructions: [
                    'Do not modify the repository.',
                    'Propose the information architecture and page-level content plan.',
                    'Map audiences, search intent and desired actions to each recommended page.',
                    'Identify missing source material and client content responsibilities.',
                    'Recommend on-page SEO, internal linking and local search considerations.',
                    'Define measurable content and search acceptance checks.',
                ],
            },
            FEATURE: {
                title: 'Feature Implementation Brief',
                instructions: [
                    'Inspect the existing repository before making changes.',
                    'Translate the selected requirements into testable feature behavior.',
                    'Identify affected components, APIs, data and integrations.',
                    'Call out edge cases, security concerns and unanswered questions.',
                    'Implement only clearly scoped behavior.',
                    'Run focused tests and report acceptance-check results.',
                ],
            },
        };
        const output = outputs[outputType];
        return [
            `# ${output.title}`,
            'Use this discovery brief as the source of truth. Do not invent missing requirements. Identify blockers before implementation.',
            section('Client', `${brief.client.companyName}${brief.client.industry ? ` — ${brief.client.industry}` : ''}`),
            section('Project type', brief.projectType),
            section('Project objective', brief.projectSummary),
            section('Why now', brief.motivation),
            section('Current problems', brief.currentProblems),
            section('Definition of success', brief.successDefinition),
            section('Audience', [brief.primaryAudience, brief.secondaryAudiences]
                .filter(Boolean)
                .join('\n')),
            section('Audience problems and objections', [brief.audienceProblems, brief.commonObjections]
                .filter(Boolean)
                .join('\n')),
            section('Desired visitor action', brief.desiredAction),
            section('Design direction', [
                brief.designDirection,
                brief.likedSites,
                brief.dislikedSites,
                brief.brandAssets,
            ]
                .filter(Boolean)
                .join('\n')),
            section('SEO and locations', [brief.seoTargets, brief.targetLocations].filter(Boolean).join('\n')),
            section('Technical context', [
                brief.currentPlatform,
                brief.integrations,
                brief.hostingProvider,
                brief.domainRegistrar,
                brief.compliance,
            ]
                .filter(Boolean)
                .join('\n')),
            section('Timeline and budget', [brief.targetLaunch, brief.budget].filter(Boolean).join('\n')),
            section('Approval status', brief.status === 'APPROVED'
                ? `Approved${brief.approvedBy ? ` by ${brief.approvedBy}` : ''}${brief.approvedAt ? ` on ${brief.approvedAt.toISOString().slice(0, 10)}` : ''}`
                : `${(brief.status || 'DRAFT').replaceAll('_', ' ')} — implementation scope is not yet approved.`),
            `## Structured requirements\n${requirements}`,
            `## Attached source files\n${brief.attachments.length
                ? brief.attachments
                    .map((item) => `- [${item.category}] ${item.fileName} (${item.contentType}) — retrieve through the authenticated discovery brief.`)
                    .join('\n')
                : 'No source files attached.'}`,
            section('Assumptions', brief.assumptions),
            section('Out of scope', brief.outOfScope),
            `## Unresolved questions\n${unanswered}`,
            section('Raw meeting notes', brief.rawNotes),
            `## Instructions for Codex\n${output.instructions.map((instruction, index) => `${index + 1}. ${instruction}`).join('\n')}`,
        ].join('\n\n');
    }
    clean(value) {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [
            key,
            item === '' ? undefined : item,
        ]));
    }
    requirementCode(sortOrder) {
        return `REQ-${String(sortOrder + 1).padStart(3, '0')}`;
    }
    questionData(item) {
        const data = this.withoutPersistenceFields(item);
        return {
            ...data,
            owner: data.owner || null,
            dueDate: data.dueDate ? new Date(data.dueDate) : null,
        };
    }
    withoutPersistenceFields(item) {
        return Object.fromEntries(Object.entries(item).filter(([key]) => key !== 'id' && key !== 'sortOrder'));
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        media_service_1.MediaService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map