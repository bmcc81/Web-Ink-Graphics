import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Organization: "Organization";
    readonly ActivityLogEntry: "ActivityLogEntry";
    readonly OrganizationInvitation: "OrganizationInvitation";
    readonly OrganizationMembership: "OrganizationMembership";
    readonly Client: "Client";
    readonly DiscoveryBrief: "DiscoveryBrief";
    readonly BriefAttachment: "BriefAttachment";
    readonly BriefRequirement: "BriefRequirement";
    readonly BriefQuestion: "BriefQuestion";
    readonly GeneratedPrompt: "GeneratedPrompt";
    readonly PortfolioProject: "PortfolioProject";
    readonly ProjectTranslation: "ProjectTranslation";
    readonly PortfolioImage: "PortfolioImage";
    readonly PortfolioCategory: "PortfolioCategory";
    readonly ContactSubmission: "ContactSubmission";
    readonly Project: "Project";
    readonly Budget: "Budget";
    readonly CampaignMetricEntry: "CampaignMetricEntry";
    readonly Goal: "Goal";
    readonly Milestone: "Milestone";
    readonly Task: "Task";
    readonly TaskComment: "TaskComment";
    readonly DesignDocument: "DesignDocument";
    readonly DesignVersion: "DesignVersion";
    readonly DesignReview: "DesignReview";
    readonly DesignComment: "DesignComment";
    readonly BrandKit: "BrandKit";
    readonly DesignTemplate: "DesignTemplate";
    readonly TemplateField: "TemplateField";
    readonly ProjectAsset: "ProjectAsset";
    readonly AssetRevision: "AssetRevision";
    readonly AssetFieldValue: "AssetFieldValue";
    readonly AssetExport: "AssetExport";
    readonly CreativeBrief: "CreativeBrief";
    readonly CreativeBriefVariant: "CreativeBriefVariant";
    readonly AiUsageRecord: "AiUsageRecord";
    readonly PlanDraft: "PlanDraft";
    readonly PlanDraftProject: "PlanDraftProject";
    readonly PlanDraftMilestone: "PlanDraftMilestone";
    readonly PlanDraftChannelRecommendation: "PlanDraftChannelRecommendation";
    readonly PerformanceRecommendation: "PerformanceRecommendation";
    readonly PerformanceRecommendationItem: "PerformanceRecommendationItem";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "organization" | "activityLogEntry" | "organizationInvitation" | "organizationMembership" | "client" | "discoveryBrief" | "briefAttachment" | "briefRequirement" | "briefQuestion" | "generatedPrompt" | "portfolioProject" | "projectTranslation" | "portfolioImage" | "portfolioCategory" | "contactSubmission" | "project" | "budget" | "campaignMetricEntry" | "goal" | "milestone" | "task" | "taskComment" | "designDocument" | "designVersion" | "designReview" | "designComment" | "brandKit" | "designTemplate" | "templateField" | "projectAsset" | "assetRevision" | "assetFieldValue" | "assetExport" | "creativeBrief" | "creativeBriefVariant" | "aiUsageRecord" | "planDraft" | "planDraftProject" | "planDraftMilestone" | "planDraftChannelRecommendation" | "performanceRecommendation" | "performanceRecommendationItem";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Organization: {
            payload: Prisma.$OrganizationPayload<ExtArgs>;
            fields: Prisma.OrganizationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                findFirst: {
                    args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                findMany: {
                    args: Prisma.OrganizationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                };
                create: {
                    args: Prisma.OrganizationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                createMany: {
                    args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                };
                delete: {
                    args: Prisma.OrganizationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                update: {
                    args: Prisma.OrganizationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                };
                upsert: {
                    args: Prisma.OrganizationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                aggregate: {
                    args: Prisma.OrganizationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganization>;
                };
                groupBy: {
                    args: Prisma.OrganizationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganizationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationCountAggregateOutputType> | number;
                };
            };
        };
        ActivityLogEntry: {
            payload: Prisma.$ActivityLogEntryPayload<ExtArgs>;
            fields: Prisma.ActivityLogEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ActivityLogEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ActivityLogEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>;
                };
                findFirst: {
                    args: Prisma.ActivityLogEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ActivityLogEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>;
                };
                findMany: {
                    args: Prisma.ActivityLogEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>[];
                };
                create: {
                    args: Prisma.ActivityLogEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>;
                };
                createMany: {
                    args: Prisma.ActivityLogEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ActivityLogEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>[];
                };
                delete: {
                    args: Prisma.ActivityLogEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>;
                };
                update: {
                    args: Prisma.ActivityLogEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.ActivityLogEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ActivityLogEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ActivityLogEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>[];
                };
                upsert: {
                    args: Prisma.ActivityLogEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityLogEntryPayload>;
                };
                aggregate: {
                    args: Prisma.ActivityLogEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActivityLogEntry>;
                };
                groupBy: {
                    args: Prisma.ActivityLogEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActivityLogEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ActivityLogEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActivityLogEntryCountAggregateOutputType> | number;
                };
            };
        };
        OrganizationInvitation: {
            payload: Prisma.$OrganizationInvitationPayload<ExtArgs>;
            fields: Prisma.OrganizationInvitationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganizationInvitationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganizationInvitationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>;
                };
                findFirst: {
                    args: Prisma.OrganizationInvitationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganizationInvitationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>;
                };
                findMany: {
                    args: Prisma.OrganizationInvitationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>[];
                };
                create: {
                    args: Prisma.OrganizationInvitationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>;
                };
                createMany: {
                    args: Prisma.OrganizationInvitationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrganizationInvitationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>[];
                };
                delete: {
                    args: Prisma.OrganizationInvitationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>;
                };
                update: {
                    args: Prisma.OrganizationInvitationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganizationInvitationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganizationInvitationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrganizationInvitationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>[];
                };
                upsert: {
                    args: Prisma.OrganizationInvitationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationInvitationPayload>;
                };
                aggregate: {
                    args: Prisma.OrganizationInvitationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganizationInvitation>;
                };
                groupBy: {
                    args: Prisma.OrganizationInvitationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationInvitationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganizationInvitationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationInvitationCountAggregateOutputType> | number;
                };
            };
        };
        OrganizationMembership: {
            payload: Prisma.$OrganizationMembershipPayload<ExtArgs>;
            fields: Prisma.OrganizationMembershipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganizationMembershipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>;
                };
                findFirst: {
                    args: Prisma.OrganizationMembershipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganizationMembershipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>;
                };
                findMany: {
                    args: Prisma.OrganizationMembershipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[];
                };
                create: {
                    args: Prisma.OrganizationMembershipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>;
                };
                createMany: {
                    args: Prisma.OrganizationMembershipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrganizationMembershipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[];
                };
                delete: {
                    args: Prisma.OrganizationMembershipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>;
                };
                update: {
                    args: Prisma.OrganizationMembershipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganizationMembershipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganizationMembershipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[];
                };
                upsert: {
                    args: Prisma.OrganizationMembershipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>;
                };
                aggregate: {
                    args: Prisma.OrganizationMembershipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganizationMembership>;
                };
                groupBy: {
                    args: Prisma.OrganizationMembershipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationMembershipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganizationMembershipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationMembershipCountAggregateOutputType> | number;
                };
            };
        };
        Client: {
            payload: Prisma.$ClientPayload<ExtArgs>;
            fields: Prisma.ClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findFirst: {
                    args: Prisma.ClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findMany: {
                    args: Prisma.ClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                create: {
                    args: Prisma.ClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                createMany: {
                    args: Prisma.ClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                delete: {
                    args: Prisma.ClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                update: {
                    args: Prisma.ClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                upsert: {
                    args: Prisma.ClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                aggregate: {
                    args: Prisma.ClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClient>;
                };
                groupBy: {
                    args: Prisma.ClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientCountAggregateOutputType> | number;
                };
            };
        };
        DiscoveryBrief: {
            payload: Prisma.$DiscoveryBriefPayload<ExtArgs>;
            fields: Prisma.DiscoveryBriefFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DiscoveryBriefFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DiscoveryBriefFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>;
                };
                findFirst: {
                    args: Prisma.DiscoveryBriefFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DiscoveryBriefFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>;
                };
                findMany: {
                    args: Prisma.DiscoveryBriefFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>[];
                };
                create: {
                    args: Prisma.DiscoveryBriefCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>;
                };
                createMany: {
                    args: Prisma.DiscoveryBriefCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DiscoveryBriefCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>[];
                };
                delete: {
                    args: Prisma.DiscoveryBriefDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>;
                };
                update: {
                    args: Prisma.DiscoveryBriefUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>;
                };
                deleteMany: {
                    args: Prisma.DiscoveryBriefDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DiscoveryBriefUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DiscoveryBriefUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>[];
                };
                upsert: {
                    args: Prisma.DiscoveryBriefUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DiscoveryBriefPayload>;
                };
                aggregate: {
                    args: Prisma.DiscoveryBriefAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDiscoveryBrief>;
                };
                groupBy: {
                    args: Prisma.DiscoveryBriefGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DiscoveryBriefGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DiscoveryBriefCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DiscoveryBriefCountAggregateOutputType> | number;
                };
            };
        };
        BriefAttachment: {
            payload: Prisma.$BriefAttachmentPayload<ExtArgs>;
            fields: Prisma.BriefAttachmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BriefAttachmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BriefAttachmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>;
                };
                findFirst: {
                    args: Prisma.BriefAttachmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BriefAttachmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>;
                };
                findMany: {
                    args: Prisma.BriefAttachmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>[];
                };
                create: {
                    args: Prisma.BriefAttachmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>;
                };
                createMany: {
                    args: Prisma.BriefAttachmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BriefAttachmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>[];
                };
                delete: {
                    args: Prisma.BriefAttachmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>;
                };
                update: {
                    args: Prisma.BriefAttachmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>;
                };
                deleteMany: {
                    args: Prisma.BriefAttachmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BriefAttachmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BriefAttachmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>[];
                };
                upsert: {
                    args: Prisma.BriefAttachmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefAttachmentPayload>;
                };
                aggregate: {
                    args: Prisma.BriefAttachmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBriefAttachment>;
                };
                groupBy: {
                    args: Prisma.BriefAttachmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BriefAttachmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BriefAttachmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BriefAttachmentCountAggregateOutputType> | number;
                };
            };
        };
        BriefRequirement: {
            payload: Prisma.$BriefRequirementPayload<ExtArgs>;
            fields: Prisma.BriefRequirementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BriefRequirementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BriefRequirementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>;
                };
                findFirst: {
                    args: Prisma.BriefRequirementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BriefRequirementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>;
                };
                findMany: {
                    args: Prisma.BriefRequirementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>[];
                };
                create: {
                    args: Prisma.BriefRequirementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>;
                };
                createMany: {
                    args: Prisma.BriefRequirementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BriefRequirementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>[];
                };
                delete: {
                    args: Prisma.BriefRequirementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>;
                };
                update: {
                    args: Prisma.BriefRequirementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>;
                };
                deleteMany: {
                    args: Prisma.BriefRequirementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BriefRequirementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BriefRequirementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>[];
                };
                upsert: {
                    args: Prisma.BriefRequirementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefRequirementPayload>;
                };
                aggregate: {
                    args: Prisma.BriefRequirementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBriefRequirement>;
                };
                groupBy: {
                    args: Prisma.BriefRequirementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BriefRequirementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BriefRequirementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BriefRequirementCountAggregateOutputType> | number;
                };
            };
        };
        BriefQuestion: {
            payload: Prisma.$BriefQuestionPayload<ExtArgs>;
            fields: Prisma.BriefQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BriefQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BriefQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.BriefQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BriefQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>;
                };
                findMany: {
                    args: Prisma.BriefQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>[];
                };
                create: {
                    args: Prisma.BriefQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>;
                };
                createMany: {
                    args: Prisma.BriefQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BriefQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>[];
                };
                delete: {
                    args: Prisma.BriefQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>;
                };
                update: {
                    args: Prisma.BriefQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.BriefQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BriefQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BriefQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.BriefQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BriefQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.BriefQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBriefQuestion>;
                };
                groupBy: {
                    args: Prisma.BriefQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BriefQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BriefQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BriefQuestionCountAggregateOutputType> | number;
                };
            };
        };
        GeneratedPrompt: {
            payload: Prisma.$GeneratedPromptPayload<ExtArgs>;
            fields: Prisma.GeneratedPromptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GeneratedPromptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GeneratedPromptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>;
                };
                findFirst: {
                    args: Prisma.GeneratedPromptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GeneratedPromptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>;
                };
                findMany: {
                    args: Prisma.GeneratedPromptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>[];
                };
                create: {
                    args: Prisma.GeneratedPromptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>;
                };
                createMany: {
                    args: Prisma.GeneratedPromptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GeneratedPromptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>[];
                };
                delete: {
                    args: Prisma.GeneratedPromptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>;
                };
                update: {
                    args: Prisma.GeneratedPromptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>;
                };
                deleteMany: {
                    args: Prisma.GeneratedPromptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GeneratedPromptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GeneratedPromptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>[];
                };
                upsert: {
                    args: Prisma.GeneratedPromptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedPromptPayload>;
                };
                aggregate: {
                    args: Prisma.GeneratedPromptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGeneratedPrompt>;
                };
                groupBy: {
                    args: Prisma.GeneratedPromptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneratedPromptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GeneratedPromptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneratedPromptCountAggregateOutputType> | number;
                };
            };
        };
        PortfolioProject: {
            payload: Prisma.$PortfolioProjectPayload<ExtArgs>;
            fields: Prisma.PortfolioProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortfolioProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortfolioProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                findFirst: {
                    args: Prisma.PortfolioProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortfolioProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                findMany: {
                    args: Prisma.PortfolioProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>[];
                };
                create: {
                    args: Prisma.PortfolioProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                createMany: {
                    args: Prisma.PortfolioProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortfolioProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>[];
                };
                delete: {
                    args: Prisma.PortfolioProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                update: {
                    args: Prisma.PortfolioProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.PortfolioProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortfolioProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortfolioProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>[];
                };
                upsert: {
                    args: Prisma.PortfolioProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                aggregate: {
                    args: Prisma.PortfolioProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePortfolioProject>;
                };
                groupBy: {
                    args: Prisma.PortfolioProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortfolioProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioProjectCountAggregateOutputType> | number;
                };
            };
        };
        ProjectTranslation: {
            payload: Prisma.$ProjectTranslationPayload<ExtArgs>;
            fields: Prisma.ProjectTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>;
                };
                findMany: {
                    args: Prisma.ProjectTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>[];
                };
                create: {
                    args: Prisma.ProjectTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>;
                };
                createMany: {
                    args: Prisma.ProjectTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectTranslationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>[];
                };
                delete: {
                    args: Prisma.ProjectTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>;
                };
                update: {
                    args: Prisma.ProjectTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectTranslationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectTranslation>;
                };
                groupBy: {
                    args: Prisma.ProjectTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectTranslationCountAggregateOutputType> | number;
                };
            };
        };
        PortfolioImage: {
            payload: Prisma.$PortfolioImagePayload<ExtArgs>;
            fields: Prisma.PortfolioImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortfolioImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortfolioImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>;
                };
                findFirst: {
                    args: Prisma.PortfolioImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortfolioImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>;
                };
                findMany: {
                    args: Prisma.PortfolioImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>[];
                };
                create: {
                    args: Prisma.PortfolioImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>;
                };
                createMany: {
                    args: Prisma.PortfolioImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortfolioImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>[];
                };
                delete: {
                    args: Prisma.PortfolioImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>;
                };
                update: {
                    args: Prisma.PortfolioImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>;
                };
                deleteMany: {
                    args: Prisma.PortfolioImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortfolioImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortfolioImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>[];
                };
                upsert: {
                    args: Prisma.PortfolioImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioImagePayload>;
                };
                aggregate: {
                    args: Prisma.PortfolioImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePortfolioImage>;
                };
                groupBy: {
                    args: Prisma.PortfolioImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortfolioImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioImageCountAggregateOutputType> | number;
                };
            };
        };
        PortfolioCategory: {
            payload: Prisma.$PortfolioCategoryPayload<ExtArgs>;
            fields: Prisma.PortfolioCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortfolioCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortfolioCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.PortfolioCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortfolioCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>;
                };
                findMany: {
                    args: Prisma.PortfolioCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>[];
                };
                create: {
                    args: Prisma.PortfolioCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>;
                };
                createMany: {
                    args: Prisma.PortfolioCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortfolioCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>[];
                };
                delete: {
                    args: Prisma.PortfolioCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>;
                };
                update: {
                    args: Prisma.PortfolioCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.PortfolioCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortfolioCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortfolioCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.PortfolioCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.PortfolioCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePortfolioCategory>;
                };
                groupBy: {
                    args: Prisma.PortfolioCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortfolioCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioCategoryCountAggregateOutputType> | number;
                };
            };
        };
        ContactSubmission: {
            payload: Prisma.$ContactSubmissionPayload<ExtArgs>;
            fields: Prisma.ContactSubmissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>;
                };
                findFirst: {
                    args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>;
                };
                findMany: {
                    args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[];
                };
                create: {
                    args: Prisma.ContactSubmissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>;
                };
                createMany: {
                    args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[];
                };
                delete: {
                    args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>;
                };
                update: {
                    args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>;
                };
                deleteMany: {
                    args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[];
                };
                upsert: {
                    args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>;
                };
                aggregate: {
                    args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContactSubmission>;
                };
                groupBy: {
                    args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactSubmissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactSubmissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactSubmissionCountAggregateOutputType> | number;
                };
            };
        };
        Project: {
            payload: Prisma.$ProjectPayload<ExtArgs>;
            fields: Prisma.ProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                findMany: {
                    args: Prisma.ProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                create: {
                    args: Prisma.ProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                createMany: {
                    args: Prisma.ProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                delete: {
                    args: Prisma.ProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                update: {
                    args: Prisma.ProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProject>;
                };
                groupBy: {
                    args: Prisma.ProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectCountAggregateOutputType> | number;
                };
            };
        };
        Budget: {
            payload: Prisma.$BudgetPayload<ExtArgs>;
            fields: Prisma.BudgetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BudgetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>;
                };
                findFirst: {
                    args: Prisma.BudgetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>;
                };
                findMany: {
                    args: Prisma.BudgetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>[];
                };
                create: {
                    args: Prisma.BudgetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>;
                };
                createMany: {
                    args: Prisma.BudgetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>[];
                };
                delete: {
                    args: Prisma.BudgetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>;
                };
                update: {
                    args: Prisma.BudgetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>;
                };
                deleteMany: {
                    args: Prisma.BudgetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BudgetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>[];
                };
                upsert: {
                    args: Prisma.BudgetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BudgetPayload>;
                };
                aggregate: {
                    args: Prisma.BudgetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBudget>;
                };
                groupBy: {
                    args: Prisma.BudgetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BudgetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BudgetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BudgetCountAggregateOutputType> | number;
                };
            };
        };
        CampaignMetricEntry: {
            payload: Prisma.$CampaignMetricEntryPayload<ExtArgs>;
            fields: Prisma.CampaignMetricEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CampaignMetricEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CampaignMetricEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>;
                };
                findFirst: {
                    args: Prisma.CampaignMetricEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CampaignMetricEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>;
                };
                findMany: {
                    args: Prisma.CampaignMetricEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>[];
                };
                create: {
                    args: Prisma.CampaignMetricEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>;
                };
                createMany: {
                    args: Prisma.CampaignMetricEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CampaignMetricEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>[];
                };
                delete: {
                    args: Prisma.CampaignMetricEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>;
                };
                update: {
                    args: Prisma.CampaignMetricEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.CampaignMetricEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CampaignMetricEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CampaignMetricEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>[];
                };
                upsert: {
                    args: Prisma.CampaignMetricEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignMetricEntryPayload>;
                };
                aggregate: {
                    args: Prisma.CampaignMetricEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCampaignMetricEntry>;
                };
                groupBy: {
                    args: Prisma.CampaignMetricEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignMetricEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CampaignMetricEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignMetricEntryCountAggregateOutputType> | number;
                };
            };
        };
        Goal: {
            payload: Prisma.$GoalPayload<ExtArgs>;
            fields: Prisma.GoalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GoalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                findFirst: {
                    args: Prisma.GoalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                findMany: {
                    args: Prisma.GoalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>[];
                };
                create: {
                    args: Prisma.GoalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                createMany: {
                    args: Prisma.GoalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>[];
                };
                delete: {
                    args: Prisma.GoalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                update: {
                    args: Prisma.GoalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                deleteMany: {
                    args: Prisma.GoalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GoalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>[];
                };
                upsert: {
                    args: Prisma.GoalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                aggregate: {
                    args: Prisma.GoalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGoal>;
                };
                groupBy: {
                    args: Prisma.GoalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GoalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GoalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GoalCountAggregateOutputType> | number;
                };
            };
        };
        Milestone: {
            payload: Prisma.$MilestonePayload<ExtArgs>;
            fields: Prisma.MilestoneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MilestoneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>;
                };
                findFirst: {
                    args: Prisma.MilestoneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>;
                };
                findMany: {
                    args: Prisma.MilestoneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>[];
                };
                create: {
                    args: Prisma.MilestoneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>;
                };
                createMany: {
                    args: Prisma.MilestoneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>[];
                };
                delete: {
                    args: Prisma.MilestoneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>;
                };
                update: {
                    args: Prisma.MilestoneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>;
                };
                deleteMany: {
                    args: Prisma.MilestoneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MilestoneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>[];
                };
                upsert: {
                    args: Prisma.MilestoneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MilestonePayload>;
                };
                aggregate: {
                    args: Prisma.MilestoneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMilestone>;
                };
                groupBy: {
                    args: Prisma.MilestoneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MilestoneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MilestoneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MilestoneCountAggregateOutputType> | number;
                };
            };
        };
        Task: {
            payload: Prisma.$TaskPayload<ExtArgs>;
            fields: Prisma.TaskFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TaskFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                findFirst: {
                    args: Prisma.TaskFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                findMany: {
                    args: Prisma.TaskFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>[];
                };
                create: {
                    args: Prisma.TaskCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                createMany: {
                    args: Prisma.TaskCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>[];
                };
                delete: {
                    args: Prisma.TaskDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                update: {
                    args: Prisma.TaskUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                deleteMany: {
                    args: Prisma.TaskDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TaskUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>[];
                };
                upsert: {
                    args: Prisma.TaskUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                aggregate: {
                    args: Prisma.TaskAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTask>;
                };
                groupBy: {
                    args: Prisma.TaskGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TaskCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskCountAggregateOutputType> | number;
                };
            };
        };
        TaskComment: {
            payload: Prisma.$TaskCommentPayload<ExtArgs>;
            fields: Prisma.TaskCommentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TaskCommentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TaskCommentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>;
                };
                findFirst: {
                    args: Prisma.TaskCommentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TaskCommentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>;
                };
                findMany: {
                    args: Prisma.TaskCommentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>[];
                };
                create: {
                    args: Prisma.TaskCommentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>;
                };
                createMany: {
                    args: Prisma.TaskCommentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TaskCommentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>[];
                };
                delete: {
                    args: Prisma.TaskCommentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>;
                };
                update: {
                    args: Prisma.TaskCommentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>;
                };
                deleteMany: {
                    args: Prisma.TaskCommentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TaskCommentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TaskCommentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>[];
                };
                upsert: {
                    args: Prisma.TaskCommentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskCommentPayload>;
                };
                aggregate: {
                    args: Prisma.TaskCommentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTaskComment>;
                };
                groupBy: {
                    args: Prisma.TaskCommentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskCommentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TaskCommentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskCommentCountAggregateOutputType> | number;
                };
            };
        };
        DesignDocument: {
            payload: Prisma.$DesignDocumentPayload<ExtArgs>;
            fields: Prisma.DesignDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DesignDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DesignDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.DesignDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DesignDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>;
                };
                findMany: {
                    args: Prisma.DesignDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>[];
                };
                create: {
                    args: Prisma.DesignDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>;
                };
                createMany: {
                    args: Prisma.DesignDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DesignDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>[];
                };
                delete: {
                    args: Prisma.DesignDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>;
                };
                update: {
                    args: Prisma.DesignDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.DesignDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DesignDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DesignDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.DesignDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.DesignDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDesignDocument>;
                };
                groupBy: {
                    args: Prisma.DesignDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DesignDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignDocumentCountAggregateOutputType> | number;
                };
            };
        };
        DesignVersion: {
            payload: Prisma.$DesignVersionPayload<ExtArgs>;
            fields: Prisma.DesignVersionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DesignVersionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DesignVersionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>;
                };
                findFirst: {
                    args: Prisma.DesignVersionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DesignVersionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>;
                };
                findMany: {
                    args: Prisma.DesignVersionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>[];
                };
                create: {
                    args: Prisma.DesignVersionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>;
                };
                createMany: {
                    args: Prisma.DesignVersionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DesignVersionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>[];
                };
                delete: {
                    args: Prisma.DesignVersionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>;
                };
                update: {
                    args: Prisma.DesignVersionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>;
                };
                deleteMany: {
                    args: Prisma.DesignVersionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DesignVersionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DesignVersionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>[];
                };
                upsert: {
                    args: Prisma.DesignVersionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignVersionPayload>;
                };
                aggregate: {
                    args: Prisma.DesignVersionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDesignVersion>;
                };
                groupBy: {
                    args: Prisma.DesignVersionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignVersionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DesignVersionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignVersionCountAggregateOutputType> | number;
                };
            };
        };
        DesignReview: {
            payload: Prisma.$DesignReviewPayload<ExtArgs>;
            fields: Prisma.DesignReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DesignReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DesignReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>;
                };
                findFirst: {
                    args: Prisma.DesignReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DesignReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>;
                };
                findMany: {
                    args: Prisma.DesignReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>[];
                };
                create: {
                    args: Prisma.DesignReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>;
                };
                createMany: {
                    args: Prisma.DesignReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DesignReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>[];
                };
                delete: {
                    args: Prisma.DesignReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>;
                };
                update: {
                    args: Prisma.DesignReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.DesignReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DesignReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DesignReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>[];
                };
                upsert: {
                    args: Prisma.DesignReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignReviewPayload>;
                };
                aggregate: {
                    args: Prisma.DesignReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDesignReview>;
                };
                groupBy: {
                    args: Prisma.DesignReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DesignReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignReviewCountAggregateOutputType> | number;
                };
            };
        };
        DesignComment: {
            payload: Prisma.$DesignCommentPayload<ExtArgs>;
            fields: Prisma.DesignCommentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DesignCommentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DesignCommentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>;
                };
                findFirst: {
                    args: Prisma.DesignCommentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DesignCommentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>;
                };
                findMany: {
                    args: Prisma.DesignCommentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>[];
                };
                create: {
                    args: Prisma.DesignCommentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>;
                };
                createMany: {
                    args: Prisma.DesignCommentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DesignCommentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>[];
                };
                delete: {
                    args: Prisma.DesignCommentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>;
                };
                update: {
                    args: Prisma.DesignCommentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>;
                };
                deleteMany: {
                    args: Prisma.DesignCommentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DesignCommentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DesignCommentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>[];
                };
                upsert: {
                    args: Prisma.DesignCommentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignCommentPayload>;
                };
                aggregate: {
                    args: Prisma.DesignCommentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDesignComment>;
                };
                groupBy: {
                    args: Prisma.DesignCommentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignCommentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DesignCommentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignCommentCountAggregateOutputType> | number;
                };
            };
        };
        BrandKit: {
            payload: Prisma.$BrandKitPayload<ExtArgs>;
            fields: Prisma.BrandKitFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandKitFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandKitFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>;
                };
                findFirst: {
                    args: Prisma.BrandKitFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandKitFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>;
                };
                findMany: {
                    args: Prisma.BrandKitFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>[];
                };
                create: {
                    args: Prisma.BrandKitCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>;
                };
                createMany: {
                    args: Prisma.BrandKitCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandKitCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>[];
                };
                delete: {
                    args: Prisma.BrandKitDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>;
                };
                update: {
                    args: Prisma.BrandKitUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandKitDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandKitUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandKitUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>[];
                };
                upsert: {
                    args: Prisma.BrandKitUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandKitPayload>;
                };
                aggregate: {
                    args: Prisma.BrandKitAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrandKit>;
                };
                groupBy: {
                    args: Prisma.BrandKitGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandKitGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandKitCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandKitCountAggregateOutputType> | number;
                };
            };
        };
        DesignTemplate: {
            payload: Prisma.$DesignTemplatePayload<ExtArgs>;
            fields: Prisma.DesignTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DesignTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DesignTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.DesignTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DesignTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>;
                };
                findMany: {
                    args: Prisma.DesignTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>[];
                };
                create: {
                    args: Prisma.DesignTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>;
                };
                createMany: {
                    args: Prisma.DesignTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DesignTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>[];
                };
                delete: {
                    args: Prisma.DesignTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>;
                };
                update: {
                    args: Prisma.DesignTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.DesignTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DesignTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DesignTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.DesignTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.DesignTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDesignTemplate>;
                };
                groupBy: {
                    args: Prisma.DesignTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DesignTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignTemplateCountAggregateOutputType> | number;
                };
            };
        };
        TemplateField: {
            payload: Prisma.$TemplateFieldPayload<ExtArgs>;
            fields: Prisma.TemplateFieldFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TemplateFieldFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TemplateFieldFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>;
                };
                findFirst: {
                    args: Prisma.TemplateFieldFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TemplateFieldFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>;
                };
                findMany: {
                    args: Prisma.TemplateFieldFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[];
                };
                create: {
                    args: Prisma.TemplateFieldCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>;
                };
                createMany: {
                    args: Prisma.TemplateFieldCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TemplateFieldCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[];
                };
                delete: {
                    args: Prisma.TemplateFieldDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>;
                };
                update: {
                    args: Prisma.TemplateFieldUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>;
                };
                deleteMany: {
                    args: Prisma.TemplateFieldDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TemplateFieldUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TemplateFieldUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[];
                };
                upsert: {
                    args: Prisma.TemplateFieldUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplateFieldPayload>;
                };
                aggregate: {
                    args: Prisma.TemplateFieldAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTemplateField>;
                };
                groupBy: {
                    args: Prisma.TemplateFieldGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TemplateFieldGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TemplateFieldCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TemplateFieldCountAggregateOutputType> | number;
                };
            };
        };
        ProjectAsset: {
            payload: Prisma.$ProjectAssetPayload<ExtArgs>;
            fields: Prisma.ProjectAssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProjectAssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProjectAssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>;
                };
                findFirst: {
                    args: Prisma.ProjectAssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProjectAssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>;
                };
                findMany: {
                    args: Prisma.ProjectAssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[];
                };
                create: {
                    args: Prisma.ProjectAssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>;
                };
                createMany: {
                    args: Prisma.ProjectAssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProjectAssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[];
                };
                delete: {
                    args: Prisma.ProjectAssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>;
                };
                update: {
                    args: Prisma.ProjectAssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>;
                };
                deleteMany: {
                    args: Prisma.ProjectAssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProjectAssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProjectAssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>[];
                };
                upsert: {
                    args: Prisma.ProjectAssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProjectAssetPayload>;
                };
                aggregate: {
                    args: Prisma.ProjectAssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProjectAsset>;
                };
                groupBy: {
                    args: Prisma.ProjectAssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectAssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProjectAssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProjectAssetCountAggregateOutputType> | number;
                };
            };
        };
        AssetRevision: {
            payload: Prisma.$AssetRevisionPayload<ExtArgs>;
            fields: Prisma.AssetRevisionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetRevisionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetRevisionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>;
                };
                findFirst: {
                    args: Prisma.AssetRevisionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetRevisionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>;
                };
                findMany: {
                    args: Prisma.AssetRevisionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>[];
                };
                create: {
                    args: Prisma.AssetRevisionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>;
                };
                createMany: {
                    args: Prisma.AssetRevisionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetRevisionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>[];
                };
                delete: {
                    args: Prisma.AssetRevisionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>;
                };
                update: {
                    args: Prisma.AssetRevisionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetRevisionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetRevisionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetRevisionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>[];
                };
                upsert: {
                    args: Prisma.AssetRevisionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRevisionPayload>;
                };
                aggregate: {
                    args: Prisma.AssetRevisionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetRevision>;
                };
                groupBy: {
                    args: Prisma.AssetRevisionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetRevisionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetRevisionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetRevisionCountAggregateOutputType> | number;
                };
            };
        };
        AssetFieldValue: {
            payload: Prisma.$AssetFieldValuePayload<ExtArgs>;
            fields: Prisma.AssetFieldValueFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetFieldValueFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetFieldValueFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>;
                };
                findFirst: {
                    args: Prisma.AssetFieldValueFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetFieldValueFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>;
                };
                findMany: {
                    args: Prisma.AssetFieldValueFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>[];
                };
                create: {
                    args: Prisma.AssetFieldValueCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>;
                };
                createMany: {
                    args: Prisma.AssetFieldValueCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetFieldValueCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>[];
                };
                delete: {
                    args: Prisma.AssetFieldValueDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>;
                };
                update: {
                    args: Prisma.AssetFieldValueUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>;
                };
                deleteMany: {
                    args: Prisma.AssetFieldValueDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetFieldValueUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetFieldValueUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>[];
                };
                upsert: {
                    args: Prisma.AssetFieldValueUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetFieldValuePayload>;
                };
                aggregate: {
                    args: Prisma.AssetFieldValueAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetFieldValue>;
                };
                groupBy: {
                    args: Prisma.AssetFieldValueGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetFieldValueGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetFieldValueCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetFieldValueCountAggregateOutputType> | number;
                };
            };
        };
        AssetExport: {
            payload: Prisma.$AssetExportPayload<ExtArgs>;
            fields: Prisma.AssetExportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetExportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetExportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>;
                };
                findFirst: {
                    args: Prisma.AssetExportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetExportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>;
                };
                findMany: {
                    args: Prisma.AssetExportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>[];
                };
                create: {
                    args: Prisma.AssetExportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>;
                };
                createMany: {
                    args: Prisma.AssetExportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetExportCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>[];
                };
                delete: {
                    args: Prisma.AssetExportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>;
                };
                update: {
                    args: Prisma.AssetExportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetExportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetExportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetExportUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>[];
                };
                upsert: {
                    args: Prisma.AssetExportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetExportPayload>;
                };
                aggregate: {
                    args: Prisma.AssetExportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetExport>;
                };
                groupBy: {
                    args: Prisma.AssetExportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetExportGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetExportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetExportCountAggregateOutputType> | number;
                };
            };
        };
        CreativeBrief: {
            payload: Prisma.$CreativeBriefPayload<ExtArgs>;
            fields: Prisma.CreativeBriefFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CreativeBriefFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CreativeBriefFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>;
                };
                findFirst: {
                    args: Prisma.CreativeBriefFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CreativeBriefFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>;
                };
                findMany: {
                    args: Prisma.CreativeBriefFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>[];
                };
                create: {
                    args: Prisma.CreativeBriefCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>;
                };
                createMany: {
                    args: Prisma.CreativeBriefCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CreativeBriefCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>[];
                };
                delete: {
                    args: Prisma.CreativeBriefDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>;
                };
                update: {
                    args: Prisma.CreativeBriefUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>;
                };
                deleteMany: {
                    args: Prisma.CreativeBriefDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CreativeBriefUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CreativeBriefUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>[];
                };
                upsert: {
                    args: Prisma.CreativeBriefUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefPayload>;
                };
                aggregate: {
                    args: Prisma.CreativeBriefAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCreativeBrief>;
                };
                groupBy: {
                    args: Prisma.CreativeBriefGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CreativeBriefGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CreativeBriefCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CreativeBriefCountAggregateOutputType> | number;
                };
            };
        };
        CreativeBriefVariant: {
            payload: Prisma.$CreativeBriefVariantPayload<ExtArgs>;
            fields: Prisma.CreativeBriefVariantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CreativeBriefVariantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CreativeBriefVariantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>;
                };
                findFirst: {
                    args: Prisma.CreativeBriefVariantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CreativeBriefVariantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>;
                };
                findMany: {
                    args: Prisma.CreativeBriefVariantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>[];
                };
                create: {
                    args: Prisma.CreativeBriefVariantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>;
                };
                createMany: {
                    args: Prisma.CreativeBriefVariantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CreativeBriefVariantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>[];
                };
                delete: {
                    args: Prisma.CreativeBriefVariantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>;
                };
                update: {
                    args: Prisma.CreativeBriefVariantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>;
                };
                deleteMany: {
                    args: Prisma.CreativeBriefVariantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CreativeBriefVariantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CreativeBriefVariantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>[];
                };
                upsert: {
                    args: Prisma.CreativeBriefVariantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CreativeBriefVariantPayload>;
                };
                aggregate: {
                    args: Prisma.CreativeBriefVariantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCreativeBriefVariant>;
                };
                groupBy: {
                    args: Prisma.CreativeBriefVariantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CreativeBriefVariantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CreativeBriefVariantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CreativeBriefVariantCountAggregateOutputType> | number;
                };
            };
        };
        AiUsageRecord: {
            payload: Prisma.$AiUsageRecordPayload<ExtArgs>;
            fields: Prisma.AiUsageRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AiUsageRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AiUsageRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>;
                };
                findFirst: {
                    args: Prisma.AiUsageRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AiUsageRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>;
                };
                findMany: {
                    args: Prisma.AiUsageRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>[];
                };
                create: {
                    args: Prisma.AiUsageRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>;
                };
                createMany: {
                    args: Prisma.AiUsageRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AiUsageRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>[];
                };
                delete: {
                    args: Prisma.AiUsageRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>;
                };
                update: {
                    args: Prisma.AiUsageRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.AiUsageRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AiUsageRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AiUsageRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>[];
                };
                upsert: {
                    args: Prisma.AiUsageRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AiUsageRecordPayload>;
                };
                aggregate: {
                    args: Prisma.AiUsageRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAiUsageRecord>;
                };
                groupBy: {
                    args: Prisma.AiUsageRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AiUsageRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AiUsageRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AiUsageRecordCountAggregateOutputType> | number;
                };
            };
        };
        PlanDraft: {
            payload: Prisma.$PlanDraftPayload<ExtArgs>;
            fields: Prisma.PlanDraftFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanDraftFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanDraftFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>;
                };
                findFirst: {
                    args: Prisma.PlanDraftFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanDraftFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>;
                };
                findMany: {
                    args: Prisma.PlanDraftFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>[];
                };
                create: {
                    args: Prisma.PlanDraftCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>;
                };
                createMany: {
                    args: Prisma.PlanDraftCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanDraftCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>[];
                };
                delete: {
                    args: Prisma.PlanDraftDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>;
                };
                update: {
                    args: Prisma.PlanDraftUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDraftDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanDraftUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanDraftUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>[];
                };
                upsert: {
                    args: Prisma.PlanDraftUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftPayload>;
                };
                aggregate: {
                    args: Prisma.PlanDraftAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlanDraft>;
                };
                groupBy: {
                    args: Prisma.PlanDraftGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanDraftCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftCountAggregateOutputType> | number;
                };
            };
        };
        PlanDraftProject: {
            payload: Prisma.$PlanDraftProjectPayload<ExtArgs>;
            fields: Prisma.PlanDraftProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanDraftProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanDraftProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>;
                };
                findFirst: {
                    args: Prisma.PlanDraftProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanDraftProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>;
                };
                findMany: {
                    args: Prisma.PlanDraftProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>[];
                };
                create: {
                    args: Prisma.PlanDraftProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>;
                };
                createMany: {
                    args: Prisma.PlanDraftProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanDraftProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>[];
                };
                delete: {
                    args: Prisma.PlanDraftProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>;
                };
                update: {
                    args: Prisma.PlanDraftProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDraftProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanDraftProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanDraftProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>[];
                };
                upsert: {
                    args: Prisma.PlanDraftProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftProjectPayload>;
                };
                aggregate: {
                    args: Prisma.PlanDraftProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlanDraftProject>;
                };
                groupBy: {
                    args: Prisma.PlanDraftProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanDraftProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftProjectCountAggregateOutputType> | number;
                };
            };
        };
        PlanDraftMilestone: {
            payload: Prisma.$PlanDraftMilestonePayload<ExtArgs>;
            fields: Prisma.PlanDraftMilestoneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanDraftMilestoneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanDraftMilestoneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>;
                };
                findFirst: {
                    args: Prisma.PlanDraftMilestoneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanDraftMilestoneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>;
                };
                findMany: {
                    args: Prisma.PlanDraftMilestoneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>[];
                };
                create: {
                    args: Prisma.PlanDraftMilestoneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>;
                };
                createMany: {
                    args: Prisma.PlanDraftMilestoneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanDraftMilestoneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>[];
                };
                delete: {
                    args: Prisma.PlanDraftMilestoneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>;
                };
                update: {
                    args: Prisma.PlanDraftMilestoneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDraftMilestoneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanDraftMilestoneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanDraftMilestoneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>[];
                };
                upsert: {
                    args: Prisma.PlanDraftMilestoneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftMilestonePayload>;
                };
                aggregate: {
                    args: Prisma.PlanDraftMilestoneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlanDraftMilestone>;
                };
                groupBy: {
                    args: Prisma.PlanDraftMilestoneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftMilestoneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanDraftMilestoneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftMilestoneCountAggregateOutputType> | number;
                };
            };
        };
        PlanDraftChannelRecommendation: {
            payload: Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>;
            fields: Prisma.PlanDraftChannelRecommendationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanDraftChannelRecommendationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanDraftChannelRecommendationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>;
                };
                findFirst: {
                    args: Prisma.PlanDraftChannelRecommendationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanDraftChannelRecommendationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>;
                };
                findMany: {
                    args: Prisma.PlanDraftChannelRecommendationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>[];
                };
                create: {
                    args: Prisma.PlanDraftChannelRecommendationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>;
                };
                createMany: {
                    args: Prisma.PlanDraftChannelRecommendationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanDraftChannelRecommendationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>[];
                };
                delete: {
                    args: Prisma.PlanDraftChannelRecommendationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>;
                };
                update: {
                    args: Prisma.PlanDraftChannelRecommendationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDraftChannelRecommendationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanDraftChannelRecommendationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanDraftChannelRecommendationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>[];
                };
                upsert: {
                    args: Prisma.PlanDraftChannelRecommendationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanDraftChannelRecommendationPayload>;
                };
                aggregate: {
                    args: Prisma.PlanDraftChannelRecommendationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlanDraftChannelRecommendation>;
                };
                groupBy: {
                    args: Prisma.PlanDraftChannelRecommendationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftChannelRecommendationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanDraftChannelRecommendationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanDraftChannelRecommendationCountAggregateOutputType> | number;
                };
            };
        };
        PerformanceRecommendation: {
            payload: Prisma.$PerformanceRecommendationPayload<ExtArgs>;
            fields: Prisma.PerformanceRecommendationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerformanceRecommendationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerformanceRecommendationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>;
                };
                findFirst: {
                    args: Prisma.PerformanceRecommendationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerformanceRecommendationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>;
                };
                findMany: {
                    args: Prisma.PerformanceRecommendationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>[];
                };
                create: {
                    args: Prisma.PerformanceRecommendationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>;
                };
                createMany: {
                    args: Prisma.PerformanceRecommendationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerformanceRecommendationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>[];
                };
                delete: {
                    args: Prisma.PerformanceRecommendationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>;
                };
                update: {
                    args: Prisma.PerformanceRecommendationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>;
                };
                deleteMany: {
                    args: Prisma.PerformanceRecommendationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerformanceRecommendationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerformanceRecommendationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>[];
                };
                upsert: {
                    args: Prisma.PerformanceRecommendationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationPayload>;
                };
                aggregate: {
                    args: Prisma.PerformanceRecommendationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerformanceRecommendation>;
                };
                groupBy: {
                    args: Prisma.PerformanceRecommendationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceRecommendationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerformanceRecommendationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceRecommendationCountAggregateOutputType> | number;
                };
            };
        };
        PerformanceRecommendationItem: {
            payload: Prisma.$PerformanceRecommendationItemPayload<ExtArgs>;
            fields: Prisma.PerformanceRecommendationItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerformanceRecommendationItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerformanceRecommendationItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>;
                };
                findFirst: {
                    args: Prisma.PerformanceRecommendationItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerformanceRecommendationItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>;
                };
                findMany: {
                    args: Prisma.PerformanceRecommendationItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>[];
                };
                create: {
                    args: Prisma.PerformanceRecommendationItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>;
                };
                createMany: {
                    args: Prisma.PerformanceRecommendationItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerformanceRecommendationItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>[];
                };
                delete: {
                    args: Prisma.PerformanceRecommendationItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>;
                };
                update: {
                    args: Prisma.PerformanceRecommendationItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>;
                };
                deleteMany: {
                    args: Prisma.PerformanceRecommendationItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerformanceRecommendationItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerformanceRecommendationItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>[];
                };
                upsert: {
                    args: Prisma.PerformanceRecommendationItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceRecommendationItemPayload>;
                };
                aggregate: {
                    args: Prisma.PerformanceRecommendationItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerformanceRecommendationItem>;
                };
                groupBy: {
                    args: Prisma.PerformanceRecommendationItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceRecommendationItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerformanceRecommendationItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceRecommendationItemCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const ActivityLogEntryScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly action: "action";
    readonly summary: "summary";
    readonly actorId: "actorId";
    readonly createdAt: "createdAt";
};
export type ActivityLogEntryScalarFieldEnum = (typeof ActivityLogEntryScalarFieldEnum)[keyof typeof ActivityLogEntryScalarFieldEnum];
export declare const OrganizationInvitationScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly role: "role";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly acceptedAt: "acceptedAt";
    readonly revokedAt: "revokedAt";
    readonly organizationId: "organizationId";
    readonly invitedById: "invitedById";
    readonly createdAt: "createdAt";
};
export type OrganizationInvitationScalarFieldEnum = (typeof OrganizationInvitationScalarFieldEnum)[keyof typeof OrganizationInvitationScalarFieldEnum];
export declare const OrganizationMembershipScalarFieldEnum: {
    readonly id: "id";
    readonly role: "role";
    readonly userId: "userId";
    readonly organizationId: "organizationId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizationMembershipScalarFieldEnum = (typeof OrganizationMembershipScalarFieldEnum)[keyof typeof OrganizationMembershipScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly id: "id";
    readonly companyName: "companyName";
    readonly industry: "industry";
    readonly website: "website";
    readonly serviceArea: "serviceArea";
    readonly status: "status";
    readonly contactName: "contactName";
    readonly contactEmail: "contactEmail";
    readonly contactPhone: "contactPhone";
    readonly generalNotes: "generalNotes";
    readonly organizationId: "organizationId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const DiscoveryBriefScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly status: "status";
    readonly meetingAt: "meetingAt";
    readonly projectType: "projectType";
    readonly projectSummary: "projectSummary";
    readonly motivation: "motivation";
    readonly currentProblems: "currentProblems";
    readonly successDefinition: "successDefinition";
    readonly targetLaunch: "targetLaunch";
    readonly budget: "budget";
    readonly decisionMakers: "decisionMakers";
    readonly primaryAudience: "primaryAudience";
    readonly secondaryAudiences: "secondaryAudiences";
    readonly audienceProblems: "audienceProblems";
    readonly commonObjections: "commonObjections";
    readonly desiredAction: "desiredAction";
    readonly designDirection: "designDirection";
    readonly likedSites: "likedSites";
    readonly dislikedSites: "dislikedSites";
    readonly brandAssets: "brandAssets";
    readonly seoTargets: "seoTargets";
    readonly targetLocations: "targetLocations";
    readonly currentPlatform: "currentPlatform";
    readonly integrations: "integrations";
    readonly hostingProvider: "hostingProvider";
    readonly domainRegistrar: "domainRegistrar";
    readonly compliance: "compliance";
    readonly assumptions: "assumptions";
    readonly outOfScope: "outOfScope";
    readonly rawNotes: "rawNotes";
    readonly approvedBy: "approvedBy";
    readonly approvedAt: "approvedAt";
    readonly clientId: "clientId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DiscoveryBriefScalarFieldEnum = (typeof DiscoveryBriefScalarFieldEnum)[keyof typeof DiscoveryBriefScalarFieldEnum];
export declare const BriefAttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly fileName: "fileName";
    readonly objectKey: "objectKey";
    readonly contentType: "contentType";
    readonly fileSize: "fileSize";
    readonly category: "category";
    readonly createdAt: "createdAt";
    readonly briefId: "briefId";
};
export type BriefAttachmentScalarFieldEnum = (typeof BriefAttachmentScalarFieldEnum)[keyof typeof BriefAttachmentScalarFieldEnum];
export declare const BriefRequirementScalarFieldEnum: {
    readonly id: "id";
    readonly referenceCode: "referenceCode";
    readonly category: "category";
    readonly priority: "priority";
    readonly status: "status";
    readonly title: "title";
    readonly details: "details";
    readonly rationale: "rationale";
    readonly acceptanceCriteria: "acceptanceCriteria";
    readonly briefId: "briefId";
    readonly sortOrder: "sortOrder";
};
export type BriefRequirementScalarFieldEnum = (typeof BriefRequirementScalarFieldEnum)[keyof typeof BriefRequirementScalarFieldEnum];
export declare const BriefQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly question: "question";
    readonly answer: "answer";
    readonly status: "status";
    readonly owner: "owner";
    readonly dueDate: "dueDate";
    readonly priority: "priority";
    readonly briefId: "briefId";
    readonly sortOrder: "sortOrder";
};
export type BriefQuestionScalarFieldEnum = (typeof BriefQuestionScalarFieldEnum)[keyof typeof BriefQuestionScalarFieldEnum];
export declare const GeneratedPromptScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly briefId: "briefId";
};
export type GeneratedPromptScalarFieldEnum = (typeof GeneratedPromptScalarFieldEnum)[keyof typeof GeneratedPromptScalarFieldEnum];
export declare const PortfolioProjectScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly clientName: "clientName";
    readonly projectUrl: "projectUrl";
    readonly status: "status";
    readonly featured: "featured";
    readonly displayOrder: "displayOrder";
    readonly completedAt: "completedAt";
    readonly publishedAt: "publishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PortfolioProjectScalarFieldEnum = (typeof PortfolioProjectScalarFieldEnum)[keyof typeof PortfolioProjectScalarFieldEnum];
export declare const ProjectTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly locale: "locale";
    readonly title: "title";
    readonly summary: "summary";
    readonly challenge: "challenge";
    readonly solution: "solution";
    readonly results: "results";
    readonly seoTitle: "seoTitle";
    readonly metaDescription: "metaDescription";
    readonly projectId: "projectId";
};
export type ProjectTranslationScalarFieldEnum = (typeof ProjectTranslationScalarFieldEnum)[keyof typeof ProjectTranslationScalarFieldEnum];
export declare const PortfolioImageScalarFieldEnum: {
    readonly id: "id";
    readonly url: "url";
    readonly altTextEn: "altTextEn";
    readonly altTextFr: "altTextFr";
    readonly width: "width";
    readonly height: "height";
    readonly sortOrder: "sortOrder";
    readonly isCover: "isCover";
    readonly projectId: "projectId";
};
export type PortfolioImageScalarFieldEnum = (typeof PortfolioImageScalarFieldEnum)[keyof typeof PortfolioImageScalarFieldEnum];
export declare const PortfolioCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly nameEn: "nameEn";
    readonly nameFr: "nameFr";
};
export type PortfolioCategoryScalarFieldEnum = (typeof PortfolioCategoryScalarFieldEnum)[keyof typeof PortfolioCategoryScalarFieldEnum];
export declare const ContactSubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly company: "company";
    readonly email: "email";
    readonly phone: "phone";
    readonly service: "service";
    readonly budget: "budget";
    readonly launchDate: "launchDate";
    readonly website: "website";
    readonly message: "message";
    readonly source: "source";
    readonly createdAt: "createdAt";
    readonly contactedAt: "contactedAt";
};
export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly status: "status";
    readonly startDate: "startDate";
    readonly targetLaunch: "targetLaunch";
    readonly organizationId: "organizationId";
    readonly goalId: "goalId";
    readonly portfolioProjectId: "portfolioProjectId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const BudgetScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly currency: "currency";
    readonly plannedAmount: "plannedAmount";
    readonly approvedAmount: "approvedAmount";
    readonly committedAmount: "committedAmount";
    readonly actualAmount: "actualAmount";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum];
export declare const CampaignMetricEntryScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly metricType: "metricType";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly actualValue: "actualValue";
    readonly plannedValue: "plannedValue";
    readonly notes: "notes";
    readonly recordedById: "recordedById";
    readonly createdAt: "createdAt";
};
export type CampaignMetricEntryScalarFieldEnum = (typeof CampaignMetricEntryScalarFieldEnum)[keyof typeof CampaignMetricEntryScalarFieldEnum];
export declare const GoalScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly period: "period";
    readonly year: "year";
    readonly status: "status";
    readonly organizationId: "organizationId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum];
export declare const MilestoneScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly status: "status";
    readonly dueDate: "dueDate";
    readonly sortOrder: "sortOrder";
    readonly projectId: "projectId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly dueDate: "dueDate";
    readonly sortOrder: "sortOrder";
    readonly projectId: "projectId";
    readonly milestoneId: "milestoneId";
    readonly assigneeId: "assigneeId";
    readonly recurrenceRule: "recurrenceRule";
    readonly recurrenceParentId: "recurrenceParentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const TaskCommentScalarFieldEnum: {
    readonly id: "id";
    readonly body: "body";
    readonly taskId: "taskId";
    readonly authorId: "authorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskCommentScalarFieldEnum = (typeof TaskCommentScalarFieldEnum)[keyof typeof TaskCommentScalarFieldEnum];
export declare const DesignDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly name: "name";
    readonly figmaFileKey: "figmaFileKey";
    readonly figmaNodeId: "figmaNodeId";
    readonly figmaUrl: "figmaUrl";
    readonly linkedById: "linkedById";
    readonly unlinkedAt: "unlinkedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DesignDocumentScalarFieldEnum = (typeof DesignDocumentScalarFieldEnum)[keyof typeof DesignDocumentScalarFieldEnum];
export declare const DesignVersionScalarFieldEnum: {
    readonly id: "id";
    readonly designDocumentId: "designDocumentId";
    readonly thumbnailUrl: "thumbnailUrl";
    readonly figmaLastModified: "figmaLastModified";
    readonly syncedAt: "syncedAt";
};
export type DesignVersionScalarFieldEnum = (typeof DesignVersionScalarFieldEnum)[keyof typeof DesignVersionScalarFieldEnum];
export declare const DesignReviewScalarFieldEnum: {
    readonly id: "id";
    readonly designDocumentId: "designDocumentId";
    readonly reviewerId: "reviewerId";
    readonly assignedById: "assignedById";
    readonly dueDate: "dueDate";
    readonly status: "status";
    readonly decidedVersionId: "decidedVersionId";
    readonly decisionNote: "decisionNote";
    readonly decidedAt: "decidedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DesignReviewScalarFieldEnum = (typeof DesignReviewScalarFieldEnum)[keyof typeof DesignReviewScalarFieldEnum];
export declare const DesignCommentScalarFieldEnum: {
    readonly id: "id";
    readonly designDocumentId: "designDocumentId";
    readonly authorId: "authorId";
    readonly body: "body";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DesignCommentScalarFieldEnum = (typeof DesignCommentScalarFieldEnum)[keyof typeof DesignCommentScalarFieldEnum];
export declare const BrandKitScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly logoUrl: "logoUrl";
    readonly primaryColor: "primaryColor";
    readonly secondaryColor: "secondaryColor";
    readonly accentColor: "accentColor";
    readonly fontFamily: "fontFamily";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandKitScalarFieldEnum = (typeof BrandKitScalarFieldEnum)[keyof typeof BrandKitScalarFieldEnum];
export declare const DesignTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly category: "category";
    readonly previewImageUrl: "previewImageUrl";
    readonly isPublished: "isPublished";
    readonly canvasWidth: "canvasWidth";
    readonly canvasHeight: "canvasHeight";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DesignTemplateScalarFieldEnum = (typeof DesignTemplateScalarFieldEnum)[keyof typeof DesignTemplateScalarFieldEnum];
export declare const TemplateFieldScalarFieldEnum: {
    readonly id: "id";
    readonly templateId: "templateId";
    readonly key: "key";
    readonly label: "label";
    readonly fieldType: "fieldType";
    readonly required: "required";
    readonly maxLength: "maxLength";
    readonly sortOrder: "sortOrder";
    readonly x: "x";
    readonly y: "y";
    readonly width: "width";
    readonly height: "height";
    readonly fontSize: "fontSize";
    readonly color: "color";
};
export type TemplateFieldScalarFieldEnum = (typeof TemplateFieldScalarFieldEnum)[keyof typeof TemplateFieldScalarFieldEnum];
export declare const ProjectAssetScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly templateId: "templateId";
    readonly name: "name";
    readonly createdById: "createdById";
    readonly unlinkedAt: "unlinkedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectAssetScalarFieldEnum = (typeof ProjectAssetScalarFieldEnum)[keyof typeof ProjectAssetScalarFieldEnum];
export declare const AssetRevisionScalarFieldEnum: {
    readonly id: "id";
    readonly projectAssetId: "projectAssetId";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly createdAt: "createdAt";
};
export type AssetRevisionScalarFieldEnum = (typeof AssetRevisionScalarFieldEnum)[keyof typeof AssetRevisionScalarFieldEnum];
export declare const AssetFieldValueScalarFieldEnum: {
    readonly id: "id";
    readonly revisionId: "revisionId";
    readonly templateFieldId: "templateFieldId";
    readonly value: "value";
};
export type AssetFieldValueScalarFieldEnum = (typeof AssetFieldValueScalarFieldEnum)[keyof typeof AssetFieldValueScalarFieldEnum];
export declare const AssetExportScalarFieldEnum: {
    readonly id: "id";
    readonly assetRevisionId: "assetRevisionId";
    readonly format: "format";
    readonly status: "status";
    readonly objectKey: "objectKey";
    readonly errorMessage: "errorMessage";
    readonly requestedById: "requestedById";
    readonly createdAt: "createdAt";
    readonly completedAt: "completedAt";
};
export type AssetExportScalarFieldEnum = (typeof AssetExportScalarFieldEnum)[keyof typeof AssetExportScalarFieldEnum];
export declare const CreativeBriefScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly summary: "summary";
    readonly audienceNotes: "audienceNotes";
    readonly copyAngles: "copyAngles";
    readonly layoutDirection: "layoutDirection";
    readonly readinessScore: "readinessScore";
    readonly readinessNotes: "readinessNotes";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CreativeBriefScalarFieldEnum = (typeof CreativeBriefScalarFieldEnum)[keyof typeof CreativeBriefScalarFieldEnum];
export declare const CreativeBriefVariantScalarFieldEnum: {
    readonly id: "id";
    readonly creativeBriefId: "creativeBriefId";
    readonly label: "label";
    readonly copyAngle: "copyAngle";
    readonly imageConcept: "imageConcept";
    readonly sortOrder: "sortOrder";
};
export type CreativeBriefVariantScalarFieldEnum = (typeof CreativeBriefVariantScalarFieldEnum)[keyof typeof CreativeBriefVariantScalarFieldEnum];
export declare const AiUsageRecordScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly requestedById: "requestedById";
    readonly purpose: "purpose";
    readonly model: "model";
    readonly promptTokens: "promptTokens";
    readonly completionTokens: "completionTokens";
    readonly estimatedCostMicros: "estimatedCostMicros";
    readonly createdAt: "createdAt";
};
export type AiUsageRecordScalarFieldEnum = (typeof AiUsageRecordScalarFieldEnum)[keyof typeof AiUsageRecordScalarFieldEnum];
export declare const PlanDraftScalarFieldEnum: {
    readonly id: "id";
    readonly discoveryBriefId: "discoveryBriefId";
    readonly goalTitle: "goalTitle";
    readonly goalDescription: "goalDescription";
    readonly goalPeriod: "goalPeriod";
    readonly goalYear: "goalYear";
    readonly summary: "summary";
    readonly risks: "risks";
    readonly contentIdeas: "contentIdeas";
    readonly readinessScore: "readinessScore";
    readonly readinessNotes: "readinessNotes";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly appliedById: "appliedById";
    readonly appliedAt: "appliedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PlanDraftScalarFieldEnum = (typeof PlanDraftScalarFieldEnum)[keyof typeof PlanDraftScalarFieldEnum];
export declare const PlanDraftProjectScalarFieldEnum: {
    readonly id: "id";
    readonly planDraftId: "planDraftId";
    readonly name: "name";
    readonly description: "description";
    readonly sortOrder: "sortOrder";
};
export type PlanDraftProjectScalarFieldEnum = (typeof PlanDraftProjectScalarFieldEnum)[keyof typeof PlanDraftProjectScalarFieldEnum];
export declare const PlanDraftMilestoneScalarFieldEnum: {
    readonly id: "id";
    readonly planDraftProjectId: "planDraftProjectId";
    readonly name: "name";
    readonly tasks: "tasks";
    readonly sortOrder: "sortOrder";
};
export type PlanDraftMilestoneScalarFieldEnum = (typeof PlanDraftMilestoneScalarFieldEnum)[keyof typeof PlanDraftMilestoneScalarFieldEnum];
export declare const PlanDraftChannelRecommendationScalarFieldEnum: {
    readonly id: "id";
    readonly planDraftId: "planDraftId";
    readonly channel: "channel";
    readonly rationale: "rationale";
    readonly sortOrder: "sortOrder";
};
export type PlanDraftChannelRecommendationScalarFieldEnum = (typeof PlanDraftChannelRecommendationScalarFieldEnum)[keyof typeof PlanDraftChannelRecommendationScalarFieldEnum];
export declare const PerformanceRecommendationScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly summary: "summary";
    readonly confidenceScore: "confidenceScore";
    readonly confidenceNotes: "confidenceNotes";
    readonly dataSummary: "dataSummary";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
};
export type PerformanceRecommendationScalarFieldEnum = (typeof PerformanceRecommendationScalarFieldEnum)[keyof typeof PerformanceRecommendationScalarFieldEnum];
export declare const PerformanceRecommendationItemScalarFieldEnum: {
    readonly id: "id";
    readonly performanceRecommendationId: "performanceRecommendationId";
    readonly title: "title";
    readonly rationale: "rationale";
    readonly priority: "priority";
    readonly sortOrder: "sortOrder";
};
export type PerformanceRecommendationItemScalarFieldEnum = (typeof PerformanceRecommendationItemScalarFieldEnum)[keyof typeof PerformanceRecommendationItemScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumActivityEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityEntityType'>;
export type ListEnumActivityEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityEntityType[]'>;
export type EnumActivityActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityAction'>;
export type ListEnumActivityActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityAction[]'>;
export type EnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole'>;
export type ListEnumOrganizationRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizationRole[]'>;
export type EnumClientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientStatus'>;
export type ListEnumClientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClientStatus[]'>;
export type EnumBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BriefStatus'>;
export type ListEnumBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BriefStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumAttachmentCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttachmentCategory'>;
export type ListEnumAttachmentCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttachmentCategory[]'>;
export type EnumRequirementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementCategory'>;
export type ListEnumRequirementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementCategory[]'>;
export type EnumRequirementPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementPriority'>;
export type ListEnumRequirementPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementPriority[]'>;
export type EnumRequirementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementStatus'>;
export type ListEnumRequirementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequirementStatus[]'>;
export type EnumQuestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionStatus'>;
export type ListEnumQuestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionStatus[]'>;
export type EnumFollowUpPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpPriority'>;
export type ListEnumFollowUpPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpPriority[]'>;
export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>;
export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Locale'>;
export type ListEnumLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Locale[]'>;
export type EnumProjectWorkflowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectWorkflowStatus'>;
export type ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectWorkflowStatus[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>;
export type ListEnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType[]'>;
export type EnumGoalPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalPeriod'>;
export type ListEnumGoalPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalPeriod[]'>;
export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>;
export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>;
export type EnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus'>;
export type ListEnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus[]'>;
export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>;
export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>;
export type EnumRecurrenceRuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurrenceRule'>;
export type ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurrenceRule[]'>;
export type EnumDesignReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignReviewStatus'>;
export type ListEnumDesignReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesignReviewStatus[]'>;
export type EnumTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateCategory'>;
export type ListEnumTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateCategory[]'>;
export type EnumTemplateFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateFieldType'>;
export type ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateFieldType[]'>;
export type EnumAssetRevisionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetRevisionStatus'>;
export type ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetRevisionStatus[]'>;
export type EnumExportFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportFormat'>;
export type ListEnumExportFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportFormat[]'>;
export type EnumExportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportStatus'>;
export type ListEnumExportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExportStatus[]'>;
export type EnumCreativeBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreativeBriefStatus'>;
export type ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreativeBriefStatus[]'>;
export type EnumAiUsagePurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AiUsagePurpose'>;
export type ListEnumAiUsagePurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AiUsagePurpose[]'>;
export type EnumPlanDraftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanDraftStatus'>;
export type ListEnumPlanDraftStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanDraftStatus[]'>;
export type EnumRecommendationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationPriority'>;
export type ListEnumRecommendationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationPriority[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    organization?: Prisma.OrganizationOmit;
    activityLogEntry?: Prisma.ActivityLogEntryOmit;
    organizationInvitation?: Prisma.OrganizationInvitationOmit;
    organizationMembership?: Prisma.OrganizationMembershipOmit;
    client?: Prisma.ClientOmit;
    discoveryBrief?: Prisma.DiscoveryBriefOmit;
    briefAttachment?: Prisma.BriefAttachmentOmit;
    briefRequirement?: Prisma.BriefRequirementOmit;
    briefQuestion?: Prisma.BriefQuestionOmit;
    generatedPrompt?: Prisma.GeneratedPromptOmit;
    portfolioProject?: Prisma.PortfolioProjectOmit;
    projectTranslation?: Prisma.ProjectTranslationOmit;
    portfolioImage?: Prisma.PortfolioImageOmit;
    portfolioCategory?: Prisma.PortfolioCategoryOmit;
    contactSubmission?: Prisma.ContactSubmissionOmit;
    project?: Prisma.ProjectOmit;
    budget?: Prisma.BudgetOmit;
    campaignMetricEntry?: Prisma.CampaignMetricEntryOmit;
    goal?: Prisma.GoalOmit;
    milestone?: Prisma.MilestoneOmit;
    task?: Prisma.TaskOmit;
    taskComment?: Prisma.TaskCommentOmit;
    designDocument?: Prisma.DesignDocumentOmit;
    designVersion?: Prisma.DesignVersionOmit;
    designReview?: Prisma.DesignReviewOmit;
    designComment?: Prisma.DesignCommentOmit;
    brandKit?: Prisma.BrandKitOmit;
    designTemplate?: Prisma.DesignTemplateOmit;
    templateField?: Prisma.TemplateFieldOmit;
    projectAsset?: Prisma.ProjectAssetOmit;
    assetRevision?: Prisma.AssetRevisionOmit;
    assetFieldValue?: Prisma.AssetFieldValueOmit;
    assetExport?: Prisma.AssetExportOmit;
    creativeBrief?: Prisma.CreativeBriefOmit;
    creativeBriefVariant?: Prisma.CreativeBriefVariantOmit;
    aiUsageRecord?: Prisma.AiUsageRecordOmit;
    planDraft?: Prisma.PlanDraftOmit;
    planDraftProject?: Prisma.PlanDraftProjectOmit;
    planDraftMilestone?: Prisma.PlanDraftMilestoneOmit;
    planDraftChannelRecommendation?: Prisma.PlanDraftChannelRecommendationOmit;
    performanceRecommendation?: Prisma.PerformanceRecommendationOmit;
    performanceRecommendationItem?: Prisma.PerformanceRecommendationItemOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
