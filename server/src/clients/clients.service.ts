import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationRole, Prisma, Role } from '@prisma/client';
import { randomUUID } from 'crypto';
import { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateDiscoveryBriefDto } from './dto/create-discovery-brief.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UpdateDiscoveryBriefDto } from './dto/update-discovery-brief.dto';
import { PromptOutputType } from './dto/generate-prompt.dto';
import { MediaService } from '../media/media.service';
import { CreateBriefAttachmentDto } from './dto/create-brief-attachment.dto';
import { BriefQuestionDto } from './dto/brief-question.dto';

const briefInclude = {
  client: true,
  requirements: { orderBy: { sortOrder: 'asc' as const } },
  openQuestions: { orderBy: { sortOrder: 'asc' as const } },
  generatedPrompts: { orderBy: { createdAt: 'desc' as const }, take: 5 },
  attachments: { orderBy: { createdAt: 'desc' as const } },
};

@Injectable()
export class ClientsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly media: MediaService,
  ) {}

  findAll(user: AuthUser) {
    return this.prisma.client.findMany({
      where: this.clientAccessWhere(user),
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

  async findOne(user: AuthUser, id: string, write = false) {
    const client = await this.prisma.client.findFirst({
      where: { id, ...this.clientAccessWhere(user, write) },
      include: { discoveryBriefs: { orderBy: { updatedAt: 'desc' } } },
    });
    if (!client) throw new NotFoundException('Client not found');
    return client;
  }

  async create(user: AuthUser, dto: CreateClientDto) {
    this.assertStaff(user);
    const organization = await this.prisma.organization.create({
      data: {
        name: dto.companyName,
        slug: this.organizationSlug(dto.companyName),
        clients: { create: this.clean(dto) },
      },
      include: { clients: true },
    });
    return organization.clients[0];
  }

  async update(user: AuthUser, id: string, dto: UpdateClientDto) {
    await this.findOne(user, id, true);
    return this.prisma.client.update({ where: { id }, data: this.clean(dto) });
  }

  async createBrief(
    user: AuthUser,
    clientId: string,
    dto: CreateDiscoveryBriefDto,
  ) {
    await this.findOne(user, clientId, true);
    if (dto.status === 'APPROVED') {
      await this.assertCanApprove(user, clientId);
    }
    const { requirements, openQuestions, meetingAt, ...brief } = dto;
    return this.prisma.discoveryBrief.create({
      data: {
        ...this.clean(brief),
        meetingAt: meetingAt ? new Date(meetingAt) : undefined,
        approvedAt: brief.status === 'APPROVED' ? new Date() : undefined,
        approvedBy: brief.status === 'APPROVED' ? user.name : undefined,
        client: { connect: { id: clientId } },
        requirements: requirements
          ? {
              create: requirements.map((item, sortOrder) => {
                const data = this.withoutPersistenceFields(item);
                return {
                  ...data,
                  referenceCode:
                    data.referenceCode || this.requirementCode(sortOrder),
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

  async findBrief(user: AuthUser, id: string, write = false) {
    const brief = await this.prisma.discoveryBrief.findFirst({
      where: {
        id,
        client: this.clientAccessWhere(user, write),
      },
      include: briefInclude,
    });
    if (!brief) throw new NotFoundException('Discovery brief not found');
    return brief;
  }

  async updateBrief(user: AuthUser, id: string, dto: UpdateDiscoveryBriefDto) {
    const existing = await this.findBrief(user, id, true);
    const approving =
      dto.status === 'APPROVED' && existing.status !== 'APPROVED';
    const revokingApproval =
      existing.status === 'APPROVED' &&
      dto.status !== undefined &&
      dto.status !== 'APPROVED';
    if (approving || revokingApproval) {
      await this.assertCanApprove(user, existing.clientId);
    }
    const { requirements, openQuestions, meetingAt, ...brief } = dto;
    const existingRequirements =
      requirements?.filter((item): item is typeof item & { id: string } =>
        Boolean(item.id),
      ) || [];
    const newRequirements = requirements?.filter((item) => !item.id) || [];
    const existingQuestions =
      openQuestions?.filter((item): item is typeof item & { id: string } =>
        Boolean(item.id),
      ) || [];
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
        approvedAt:
          approving && !existing.approvedAt
            ? new Date()
            : revokingApproval
              ? null
              : undefined,
        approvedBy: approving ? user.name : revokingApproval ? null : undefined,
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
                    referenceCode:
                      data.referenceCode || this.requirementCode(sortOrder),
                    sortOrder,
                  },
                };
              }),
              create: newRequirements.map((item, offset) => {
                const sortOrder = existingRequirements.length + offset;
                const data = this.withoutPersistenceFields(item);
                return {
                  ...data,
                  referenceCode:
                    data.referenceCode || this.requirementCode(sortOrder),
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

  async generatePrompt(
    user: AuthUser,
    id: string,
    outputType: PromptOutputType = 'IMPLEMENTATION',
  ) {
    const brief = await this.findBrief(user, id, true);
    const content = this.buildPrompt(brief, outputType);
    const saved = await this.prisma.generatedPrompt.create({
      data: { briefId: id, content },
    });
    return saved;
  }

  async addAttachment(
    user: AuthUser,
    id: string,
    dto: CreateBriefAttachmentDto,
  ) {
    const brief = await this.findBrief(user, id, true);
    if (
      !this.isStaff(user) &&
      !dto.objectKey.startsWith(`discovery/${brief.client.organizationId}/`)
    ) {
      throw new ForbiddenException(
        'The uploaded file does not belong to this organization',
      );
    }
    return this.prisma.briefAttachment.create({
      data: { ...dto, briefId: id },
    });
  }

  async attachmentDownload(user: AuthUser, id: string) {
    const attachment = await this.prisma.briefAttachment.findFirst({
      where: {
        id,
        brief: { client: this.clientAccessWhere(user) },
      },
    });
    if (!attachment) throw new NotFoundException('Attachment not found');
    return {
      downloadUrl: await this.media.createDownload(
        attachment.objectKey,
        attachment.fileName,
      ),
      expiresIn: 300,
    };
  }

  async deleteAttachment(user: AuthUser, id: string) {
    const attachment = await this.prisma.briefAttachment.findFirst({
      where: {
        id,
        brief: { client: this.clientAccessWhere(user, true) },
      },
    });
    if (!attachment) throw new NotFoundException('Attachment not found');
    await this.media.deleteDiscoveryObject(attachment.objectKey);
    await this.prisma.briefAttachment.delete({ where: { id } });
    return { deleted: true };
  }

  private buildPrompt(
    brief: Awaited<ReturnType<ClientsService['findBrief']>>,
    outputType: PromptOutputType,
  ) {
    const section = (heading: string, value?: string | null) =>
      `## ${heading}\n${value?.trim() || 'Not provided — clarify before implementation.'}`;
    const requirements = brief.requirements.length
      ? brief.requirements
          .map(
            (item) =>
              `- ${item.referenceCode || 'UNNUMBERED'} [${item.status}] [${item.priority}] [${item.category}] ${item.title}\n  Details: ${item.details || 'Not provided'}\n  Acceptance criteria: ${item.acceptanceCriteria || 'Not defined'}`,
          )
          .join('\n')
      : 'No structured requirements recorded.';
    const questions = brief.openQuestions.filter(
      (item) => item.status !== 'ANSWERED',
    );
    const unanswered = questions.length
      ? questions
          .map(
            (item) =>
              `- [${item.priority}] ${item.question}${item.owner ? ` — Owner: ${item.owner}` : ' — Owner: unassigned'}${item.dueDate ? ` — Due: ${item.dueDate.toISOString().slice(0, 10)}` : ' — Due: not set'}${item.answer ? ` — Current note: ${item.answer}` : ''}`,
          )
          .join('\n')
      : 'No unresolved questions recorded.';

    const outputs: Record<
      PromptOutputType,
      { title: string; instructions: string[] }
    > = {
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
      section(
        'Client',
        `${brief.client.companyName}${brief.client.industry ? ` — ${brief.client.industry}` : ''}`,
      ),
      section('Project type', brief.projectType),
      section('Project objective', brief.projectSummary),
      section('Why now', brief.motivation),
      section('Current problems', brief.currentProblems),
      section('Definition of success', brief.successDefinition),
      section(
        'Audience',
        [brief.primaryAudience, brief.secondaryAudiences]
          .filter(Boolean)
          .join('\n'),
      ),
      section(
        'Audience problems and objections',
        [brief.audienceProblems, brief.commonObjections]
          .filter(Boolean)
          .join('\n'),
      ),
      section('Desired visitor action', brief.desiredAction),
      section(
        'Design direction',
        [
          brief.designDirection,
          brief.likedSites,
          brief.dislikedSites,
          brief.brandAssets,
        ]
          .filter(Boolean)
          .join('\n'),
      ),
      section(
        'SEO and locations',
        [brief.seoTargets, brief.targetLocations].filter(Boolean).join('\n'),
      ),
      section(
        'Technical context',
        [
          brief.currentPlatform,
          brief.integrations,
          brief.hostingProvider,
          brief.domainRegistrar,
          brief.compliance,
        ]
          .filter(Boolean)
          .join('\n'),
      ),
      section(
        'Timeline and budget',
        [brief.targetLaunch, brief.budget].filter(Boolean).join('\n'),
      ),
      section(
        'Approval status',
        brief.status === 'APPROVED'
          ? `Approved${brief.approvedBy ? ` by ${brief.approvedBy}` : ''}${brief.approvedAt ? ` on ${brief.approvedAt.toISOString().slice(0, 10)}` : ''}`
          : `${(brief.status || 'DRAFT').replaceAll('_', ' ')} — implementation scope is not yet approved.`,
      ),
      `## Structured requirements\n${requirements}`,
      `## Attached source files\n${
        brief.attachments.length
          ? brief.attachments
              .map(
                (item) =>
                  `- [${item.category}] ${item.fileName} (${item.contentType}) — retrieve through the authenticated discovery brief.`,
              )
              .join('\n')
          : 'No source files attached.'
      }`,
      section('Assumptions', brief.assumptions),
      section('Out of scope', brief.outOfScope),
      `## Unresolved questions\n${unanswered}`,
      section('Raw meeting notes', brief.rawNotes),
      `## Instructions for Codex\n${output.instructions.map((instruction, index) => `${index + 1}. ${instruction}`).join('\n')}`,
    ].join('\n\n');
  }

  private clean<T extends object>(value: T): T {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        item === '' ? undefined : item,
      ]),
    ) as T;
  }

  private clientAccessWhere(
    user: AuthUser,
    write = false,
    approve = false,
  ): Prisma.ClientWhereInput {
    if (this.isStaff(user)) {
      return {};
    }

    const roles = approve
      ? [OrganizationRole.OWNER, OrganizationRole.MANAGER]
      : write
        ? [
            OrganizationRole.OWNER,
            OrganizationRole.MANAGER,
            OrganizationRole.CONTRIBUTOR,
            OrganizationRole.WEBINK_SPECIALIST,
          ]
        : Object.values(OrganizationRole);

    return {
      organization: {
        memberships: {
          some: {
            userId: user.id,
            role: { in: roles },
          },
        },
      },
    };
  }

  private async assertCanApprove(user: AuthUser, clientId: string) {
    if (this.isStaff(user)) {
      return;
    }

    const client = await this.prisma.client.findFirst({
      where: {
        id: clientId,
        ...this.clientAccessWhere(user, false, true),
      },
      select: { id: true },
    });
    if (!client) {
      throw new ForbiddenException(
        'Only an organization owner or manager can change approval status',
      );
    }
  }

  private assertStaff(user: AuthUser) {
    if (!this.isStaff(user)) {
      throw new ForbiddenException(
        'Only WebInk staff can create customer companies',
      );
    }
  }

  private isStaff(user: AuthUser) {
    return user.role === Role.ADMIN || user.role === Role.EDITOR;
  }

  private organizationSlug(companyName: string) {
    const base =
      companyName
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 60) || 'company';
    return `${base}-${randomUUID().slice(0, 8)}`;
  }

  private requirementCode(sortOrder: number) {
    return `REQ-${String(sortOrder + 1).padStart(3, '0')}`;
  }

  private questionData(item: BriefQuestionDto) {
    const data = this.withoutPersistenceFields(item);
    return {
      ...data,
      owner: data.owner || null,
      dueDate: data.dueDate ? new Date(data.dueDate) : null,
    };
  }

  private withoutPersistenceFields<
    T extends { id?: string; sortOrder?: number },
  >(item: T): Omit<T, 'id' | 'sortOrder'> {
    return Object.fromEntries(
      Object.entries(item).filter(
        ([key]) => key !== 'id' && key !== 'sortOrder',
      ),
    ) as Omit<T, 'id' | 'sortOrder'>;
  }
}
