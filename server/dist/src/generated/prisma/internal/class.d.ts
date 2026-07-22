import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organization(): Prisma.OrganizationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get activityLogEntry(): Prisma.ActivityLogEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organizationInvitation(): Prisma.OrganizationInvitationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organizationMembership(): Prisma.OrganizationMembershipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get client(): Prisma.ClientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get discoveryBrief(): Prisma.DiscoveryBriefDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get briefAttachment(): Prisma.BriefAttachmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get briefRequirement(): Prisma.BriefRequirementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get briefQuestion(): Prisma.BriefQuestionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get generatedPrompt(): Prisma.GeneratedPromptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portfolioProject(): Prisma.PortfolioProjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get projectTranslation(): Prisma.ProjectTranslationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portfolioImage(): Prisma.PortfolioImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get portfolioCategory(): Prisma.PortfolioCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get project(): Prisma.ProjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get budget(): Prisma.BudgetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get campaignMetricEntry(): Prisma.CampaignMetricEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get goal(): Prisma.GoalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get milestone(): Prisma.MilestoneDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get task(): Prisma.TaskDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taskComment(): Prisma.TaskCommentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get designDocument(): Prisma.DesignDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get designVersion(): Prisma.DesignVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get designReview(): Prisma.DesignReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get designComment(): Prisma.DesignCommentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get brandKit(): Prisma.BrandKitDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get designTemplate(): Prisma.DesignTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get templateField(): Prisma.TemplateFieldDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get projectAsset(): Prisma.ProjectAssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetRevision(): Prisma.AssetRevisionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetFieldValue(): Prisma.AssetFieldValueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetExport(): Prisma.AssetExportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get creativeBrief(): Prisma.CreativeBriefDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get creativeBriefVariant(): Prisma.CreativeBriefVariantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aiUsageRecord(): Prisma.AiUsageRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get planDraft(): Prisma.PlanDraftDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get planDraftProject(): Prisma.PlanDraftProjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get planDraftMilestone(): Prisma.PlanDraftMilestoneDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get planDraftChannelRecommendation(): Prisma.PlanDraftChannelRecommendationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get performanceRecommendation(): Prisma.PerformanceRecommendationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get performanceRecommendationItem(): Prisma.PerformanceRecommendationItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
