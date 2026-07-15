import { ConfigService } from '@nestjs/config';
import { ActivityLogService } from '../activity/activity-log.service';
import { AiUsageService } from '../ai-usage/ai-usage.service';
import type { AuthUser } from '../auth/auth-user';
import { GoalsService } from '../goals/goals.service';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsService } from '../projects/projects.service';
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
        status: import("@prisma/client").$Enums.PlanDraftStatus;
        summary: string;
        createdById: string;
        readinessScore: number;
        readinessNotes: string;
        discoveryBriefId: string;
        goalTitle: string;
        goalDescription: string | null;
        goalPeriod: import("@prisma/client").$Enums.GoalPeriod;
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
            status: import("@prisma/client").$Enums.PlanDraftStatus;
            summary: string;
            createdById: string;
            readinessScore: number;
            readinessNotes: string;
            discoveryBriefId: string;
            goalTitle: string;
            goalDescription: string | null;
            goalPeriod: import("@prisma/client").$Enums.GoalPeriod;
            goalYear: number;
            risks: string;
            contentIdeas: string;
            appliedById: string | null;
            appliedAt: Date | null;
        };
        followUpQuestions: {
            id: string;
            priority: import("@prisma/client").$Enums.FollowUpPriority;
            status: import("@prisma/client").$Enums.QuestionStatus;
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
            status: import("@prisma/client").$Enums.PlanDraftStatus;
            summary: string;
            createdById: string;
            readinessScore: number;
            readinessNotes: string;
            discoveryBriefId: string;
            goalTitle: string;
            goalDescription: string | null;
            goalPeriod: import("@prisma/client").$Enums.GoalPeriod;
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
