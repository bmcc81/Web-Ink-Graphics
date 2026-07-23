export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly EDITOR: "EDITOR";
    readonly CUSTOMER: "CUSTOMER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const OrganizationRole: {
    readonly OWNER: "OWNER";
    readonly MANAGER: "MANAGER";
    readonly CONTRIBUTOR: "CONTRIBUTOR";
    readonly VIEWER: "VIEWER";
    readonly WEBINK_SPECIALIST: "WEBINK_SPECIALIST";
};
export type OrganizationRole = (typeof OrganizationRole)[keyof typeof OrganizationRole];
export declare const ProjectStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const Locale: {
    readonly EN: "EN";
    readonly FR: "FR";
};
export type Locale = (typeof Locale)[keyof typeof Locale];
export declare const ClientStatus: {
    readonly LEAD: "LEAD";
    readonly PROPOSAL: "PROPOSAL";
    readonly APPROVED: "APPROVED";
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
export type ClientStatus = (typeof ClientStatus)[keyof typeof ClientStatus];
export declare const BriefStatus: {
    readonly DRAFT: "DRAFT";
    readonly INTERNAL_REVIEW: "INTERNAL_REVIEW";
    readonly CLIENT_REVIEW: "CLIENT_REVIEW";
    readonly APPROVED: "APPROVED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETE: "COMPLETE";
    readonly ARCHIVED: "ARCHIVED";
};
export type BriefStatus = (typeof BriefStatus)[keyof typeof BriefStatus];
export declare const RequirementCategory: {
    readonly PAGE: "PAGE";
    readonly FEATURE: "FEATURE";
    readonly CONTENT: "CONTENT";
    readonly SEO: "SEO";
    readonly DESIGN: "DESIGN";
    readonly TECHNICAL: "TECHNICAL";
};
export type RequirementCategory = (typeof RequirementCategory)[keyof typeof RequirementCategory];
export declare const RequirementPriority: {
    readonly MUST: "MUST";
    readonly SHOULD: "SHOULD";
    readonly FUTURE: "FUTURE";
};
export type RequirementPriority = (typeof RequirementPriority)[keyof typeof RequirementPriority];
export declare const RequirementStatus: {
    readonly PLANNED: "PLANNED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly DEFERRED: "DEFERRED";
    readonly REJECTED: "REJECTED";
};
export type RequirementStatus = (typeof RequirementStatus)[keyof typeof RequirementStatus];
export declare const QuestionStatus: {
    readonly OPEN: "OPEN";
    readonly ANSWERED: "ANSWERED";
    readonly FOLLOW_UP: "FOLLOW_UP";
};
export type QuestionStatus = (typeof QuestionStatus)[keyof typeof QuestionStatus];
export declare const FollowUpPriority: {
    readonly LOW: "LOW";
    readonly NORMAL: "NORMAL";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type FollowUpPriority = (typeof FollowUpPriority)[keyof typeof FollowUpPriority];
export declare const AttachmentCategory: {
    readonly BRAND: "BRAND";
    readonly CONTENT: "CONTENT";
    readonly REFERENCE: "REFERENCE";
    readonly CONTRACT: "CONTRACT";
    readonly SCREENSHOT: "SCREENSHOT";
    readonly OTHER: "OTHER";
};
export type AttachmentCategory = (typeof AttachmentCategory)[keyof typeof AttachmentCategory];
export declare const ProjectWorkflowStatus: {
    readonly DRAFT: "DRAFT";
    readonly REVIEW: "REVIEW";
    readonly CHANGES_REQUESTED: "CHANGES_REQUESTED";
    readonly APPROVED: "APPROVED";
    readonly PRODUCTION: "PRODUCTION";
    readonly COMPLETED: "COMPLETED";
};
export type ProjectWorkflowStatus = (typeof ProjectWorkflowStatus)[keyof typeof ProjectWorkflowStatus];
export declare const MilestoneStatus: {
    readonly PLANNED: "PLANNED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
};
export type MilestoneStatus = (typeof MilestoneStatus)[keyof typeof MilestoneStatus];
export declare const TaskStatus: {
    readonly TODO: "TODO";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly DONE: "DONE";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const RecurrenceRule: {
    readonly WEEKLY: "WEEKLY";
    readonly MONTHLY: "MONTHLY";
};
export type RecurrenceRule = (typeof RecurrenceRule)[keyof typeof RecurrenceRule];
export declare const GoalPeriod: {
    readonly Q1: "Q1";
    readonly Q2: "Q2";
    readonly Q3: "Q3";
    readonly Q4: "Q4";
    readonly ANNUAL: "ANNUAL";
};
export type GoalPeriod = (typeof GoalPeriod)[keyof typeof GoalPeriod];
export declare const GoalStatus: {
    readonly ON_TRACK: "ON_TRACK";
    readonly AT_RISK: "AT_RISK";
    readonly OFF_TRACK: "OFF_TRACK";
    readonly ACHIEVED: "ACHIEVED";
};
export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus];
export declare const ActivityAction: {
    readonly CREATED: "CREATED";
    readonly UPDATED: "UPDATED";
    readonly STATUS_CHANGED: "STATUS_CHANGED";
    readonly DELETED: "DELETED";
};
export type ActivityAction = (typeof ActivityAction)[keyof typeof ActivityAction];
export declare const ActivityEntityType: {
    readonly PROJECT: "PROJECT";
    readonly MILESTONE: "MILESTONE";
    readonly TASK: "TASK";
    readonly GOAL: "GOAL";
    readonly BUDGET: "BUDGET";
    readonly DESIGN_DOCUMENT: "DESIGN_DOCUMENT";
    readonly BRAND_KIT: "BRAND_KIT";
    readonly PROJECT_ASSET: "PROJECT_ASSET";
    readonly CREATIVE_BRIEF: "CREATIVE_BRIEF";
    readonly PLAN_DRAFT: "PLAN_DRAFT";
    readonly CAMPAIGN_METRIC: "CAMPAIGN_METRIC";
    readonly PERFORMANCE_RECOMMENDATION: "PERFORMANCE_RECOMMENDATION";
};
export type ActivityEntityType = (typeof ActivityEntityType)[keyof typeof ActivityEntityType];
export declare const MetricType: {
    readonly IMPRESSIONS: "IMPRESSIONS";
    readonly CLICKS: "CLICKS";
    readonly WEBSITE_VISITS: "WEBSITE_VISITS";
    readonly LEADS: "LEADS";
    readonly CONVERSIONS: "CONVERSIONS";
    readonly REVENUE: "REVENUE";
};
export type MetricType = (typeof MetricType)[keyof typeof MetricType];
export declare const DesignReviewStatus: {
    readonly PENDING: "PENDING";
    readonly CHANGES_REQUESTED: "CHANGES_REQUESTED";
    readonly APPROVED: "APPROVED";
};
export type DesignReviewStatus = (typeof DesignReviewStatus)[keyof typeof DesignReviewStatus];
export declare const TemplateCategory: {
    readonly FLYER: "FLYER";
    readonly SOCIAL_GRAPHIC: "SOCIAL_GRAPHIC";
    readonly NEWSLETTER: "NEWSLETTER";
    readonly AD: "AD";
};
export type TemplateCategory = (typeof TemplateCategory)[keyof typeof TemplateCategory];
export declare const TemplateFieldType: {
    readonly TEXT: "TEXT";
    readonly IMAGE: "IMAGE";
    readonly COLOR: "COLOR";
    readonly CTA_TEXT: "CTA_TEXT";
    readonly CTA_URL: "CTA_URL";
};
export type TemplateFieldType = (typeof TemplateFieldType)[keyof typeof TemplateFieldType];
export declare const AssetRevisionStatus: {
    readonly DRAFT: "DRAFT";
    readonly APPROVED: "APPROVED";
};
export type AssetRevisionStatus = (typeof AssetRevisionStatus)[keyof typeof AssetRevisionStatus];
export declare const ExportFormat: {
    readonly PNG: "PNG";
    readonly PDF: "PDF";
};
export type ExportFormat = (typeof ExportFormat)[keyof typeof ExportFormat];
export declare const ExportStatus: {
    readonly PENDING: "PENDING";
    readonly READY: "READY";
    readonly FAILED: "FAILED";
};
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];
export declare const CreativeBriefStatus: {
    readonly DRAFT: "DRAFT";
    readonly APPROVED: "APPROVED";
};
export type CreativeBriefStatus = (typeof CreativeBriefStatus)[keyof typeof CreativeBriefStatus];
export declare const AiUsagePurpose: {
    readonly CREATIVE_BRIEF: "CREATIVE_BRIEF";
    readonly PLANNING_COPILOT: "PLANNING_COPILOT";
    readonly PERFORMANCE_RECOMMENDATIONS: "PERFORMANCE_RECOMMENDATIONS";
};
export type AiUsagePurpose = (typeof AiUsagePurpose)[keyof typeof AiUsagePurpose];
export declare const PlanDraftStatus: {
    readonly DRAFT: "DRAFT";
    readonly APPLIED: "APPLIED";
};
export type PlanDraftStatus = (typeof PlanDraftStatus)[keyof typeof PlanDraftStatus];
export declare const RecommendationPriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
};
export type RecommendationPriority = (typeof RecommendationPriority)[keyof typeof RecommendationPriority];
