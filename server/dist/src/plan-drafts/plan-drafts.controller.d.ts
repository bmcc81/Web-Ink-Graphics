import type { AuthUser } from '../auth/auth-user.js';
import { PlanDraftsService } from './plan-drafts.service.js';
export declare class PlanDraftsController {
    private readonly planDrafts;
    constructor(planDrafts: PlanDraftsService);
    list(user: AuthUser, briefId: string): Promise<({
        projects: ({
            milestones: {
                id: string;
                name: string;
                sortOrder: number;
                planDraftProjectId: string;
                tasks: string[];
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
            rationale: string;
            sortOrder: number;
            planDraftId: string;
            channel: string;
        }[];
        appliedBy: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        summary: string;
        status: import("../generated/prisma/enums.js").PlanDraftStatus;
        createdById: string;
        readinessScore: number;
        readinessNotes: string;
        discoveryBriefId: string;
        goalTitle: string;
        goalDescription: string | null;
        goalPeriod: import("../generated/prisma/enums.js").GoalPeriod;
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
                    planDraftProjectId: string;
                    tasks: string[];
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
                rationale: string;
                sortOrder: number;
                planDraftId: string;
                channel: string;
            }[];
            appliedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            summary: string;
            status: import("../generated/prisma/enums.js").PlanDraftStatus;
            createdById: string;
            readinessScore: number;
            readinessNotes: string;
            discoveryBriefId: string;
            goalTitle: string;
            goalDescription: string | null;
            goalPeriod: import("../generated/prisma/enums.js").GoalPeriod;
            goalYear: number;
            risks: string;
            contentIdeas: string;
            appliedById: string | null;
            appliedAt: Date | null;
        };
        followUpQuestions: {
            id: string;
            status: import("../generated/prisma/enums.js").QuestionStatus;
            briefId: string;
            priority: import("../generated/prisma/enums.js").FollowUpPriority;
            sortOrder: number;
            question: string;
            answer: string | null;
            owner: string | null;
            dueDate: Date | null;
        }[];
    }>;
    apply(user: AuthUser, briefId: string, planDraftId: string): Promise<{
        planDraft: {
            projects: ({
                milestones: {
                    id: string;
                    name: string;
                    sortOrder: number;
                    planDraftProjectId: string;
                    tasks: string[];
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
                rationale: string;
                sortOrder: number;
                planDraftId: string;
                channel: string;
            }[];
            appliedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            summary: string;
            status: import("../generated/prisma/enums.js").PlanDraftStatus;
            createdById: string;
            readinessScore: number;
            readinessNotes: string;
            discoveryBriefId: string;
            goalTitle: string;
            goalDescription: string | null;
            goalPeriod: import("../generated/prisma/enums.js").GoalPeriod;
            goalYear: number;
            risks: string;
            contentIdeas: string;
            appliedById: string | null;
            appliedAt: Date | null;
        };
        goalId: string;
    }>;
}
