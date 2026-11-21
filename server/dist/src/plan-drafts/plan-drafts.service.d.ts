import { ConfigService } from '@nestjs/config';
import { GoalPeriod } from '../generated/prisma/client.js';
import { ActivityLogService } from '../activity/activity-log.service.js';
import { AiUsageService } from '../ai-usage/ai-usage.service.js';
import type { AuthUser } from '../auth/auth-user.js';
import { GoalsService } from '../goals/goals.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ProjectsService } from '../projects/projects.service.js';
export declare class PlanDraftsService {
    private readonly prisma;
    private readonly config;
    private readonly activityLog;
    private readonly aiUsage;
    private readonly goals;
    private readonly projects;
    private readonly logger;
    constructor(prisma: PrismaService, config: ConfigService, activityLog: ActivityLogService, aiUsage: AiUsageService, goals: GoalsService, projects: ProjectsService);
    list(user: AuthUser, briefId: string): Promise<({
        projects: ({
            milestones: {
                id: string;
                name: string;
                sortOrder: number;
                tasks: string[];
                planDraftProjectId: string;
            }[];
        } & {
            id: string;
            name: string;
            sortOrder: number;
            description: string | null;
            planDraftId: string;
        })[];
        createdBy: {
            id: string;
            name: string;
        };
        channelRecommendations: {
            id: string;
            sortOrder: number;
            rationale: string;
            channel: string;
            planDraftId: string;
        }[];
        appliedBy: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").PlanDraftStatus;
        summary: string;
        createdById: string;
        readinessScore: number;
        readinessNotes: string;
        discoveryBriefId: string;
        goalTitle: string;
        goalDescription: string | null;
        goalPeriod: GoalPeriod;
        goalYear: number;
        risks: string;
        contentIdeas: string;
        appliedById: string | null;
        appliedAt: Date | null;
    })[]>;
    generate(user: AuthUser, briefId: string): Promise<{
        planDraft: {
            projects: ({
                milestones: {
                    id: string;
                    name: string;
                    sortOrder: number;
                    tasks: string[];
                    planDraftProjectId: string;
                }[];
            } & {
                id: string;
                name: string;
                sortOrder: number;
                description: string | null;
                planDraftId: string;
            })[];
            createdBy: {
                id: string;
                name: string;
            };
            channelRecommendations: {
                id: string;
                sortOrder: number;
                rationale: string;
                channel: string;
                planDraftId: string;
            }[];
            appliedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../generated/prisma/enums.js").PlanDraftStatus;
            summary: string;
            createdById: string;
            readinessScore: number;
            readinessNotes: string;
            discoveryBriefId: string;
            goalTitle: string;
            goalDescription: string | null;
            goalPeriod: GoalPeriod;
            goalYear: number;
            risks: string;
            contentIdeas: string;
            appliedById: string | null;
            appliedAt: Date | null;
        };
        followUpQuestions: {
            id: string;
            priority: import("../generated/prisma/enums.js").FollowUpPriority;
            status: import("../generated/prisma/enums.js").QuestionStatus;
            question: string;
            answer: string | null;
            owner: string | null;
            dueDate: Date | null;
            sortOrder: number;
            briefId: string;
        }[];
    }>;
    apply(user: AuthUser, briefId: string, planDraftId: string): Promise<{
        planDraft: {
            projects: ({
                milestones: {
                    id: string;
                    name: string;
                    sortOrder: number;
                    tasks: string[];
                    planDraftProjectId: string;
                }[];
            } & {
                id: string;
                name: string;
                sortOrder: number;
                description: string | null;
                planDraftId: string;
            })[];
            createdBy: {
                id: string;
                name: string;
            };
            channelRecommendations: {
                id: string;
                sortOrder: number;
                rationale: string;
                channel: string;
                planDraftId: string;
            }[];
            appliedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../generated/prisma/enums.js").PlanDraftStatus;
            summary: string;
            createdById: string;
            readinessScore: number;
            readinessNotes: string;
            discoveryBriefId: string;
            goalTitle: string;
            goalDescription: string | null;
            goalPeriod: GoalPeriod;
            goalYear: number;
            risks: string;
            contentIdeas: string;
            appliedById: string | null;
            appliedAt: Date | null;
        };
        goalId: string;
    }>;
    private createFollowUpQuestionsFromRisks;
    private callClaude;
    private parseResponse;
    private normalizePeriod;
    private truncate;
    private buildContext;
    private findBrief;
    private clientAccessWhere;
    private isStaff;
    private assertCanApply;
}
