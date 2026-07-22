import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlanDraftChannelRecommendationModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanDraftChannelRecommendationPayload>;
export type AggregatePlanDraftChannelRecommendation = {
    _count: PlanDraftChannelRecommendationCountAggregateOutputType | null;
    _avg: PlanDraftChannelRecommendationAvgAggregateOutputType | null;
    _sum: PlanDraftChannelRecommendationSumAggregateOutputType | null;
    _min: PlanDraftChannelRecommendationMinAggregateOutputType | null;
    _max: PlanDraftChannelRecommendationMaxAggregateOutputType | null;
};
export type PlanDraftChannelRecommendationAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PlanDraftChannelRecommendationSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PlanDraftChannelRecommendationMinAggregateOutputType = {
    id: string | null;
    planDraftId: string | null;
    channel: string | null;
    rationale: string | null;
    sortOrder: number | null;
};
export type PlanDraftChannelRecommendationMaxAggregateOutputType = {
    id: string | null;
    planDraftId: string | null;
    channel: string | null;
    rationale: string | null;
    sortOrder: number | null;
};
export type PlanDraftChannelRecommendationCountAggregateOutputType = {
    id: number;
    planDraftId: number;
    channel: number;
    rationale: number;
    sortOrder: number;
    _all: number;
};
export type PlanDraftChannelRecommendationAvgAggregateInputType = {
    sortOrder?: true;
};
export type PlanDraftChannelRecommendationSumAggregateInputType = {
    sortOrder?: true;
};
export type PlanDraftChannelRecommendationMinAggregateInputType = {
    id?: true;
    planDraftId?: true;
    channel?: true;
    rationale?: true;
    sortOrder?: true;
};
export type PlanDraftChannelRecommendationMaxAggregateInputType = {
    id?: true;
    planDraftId?: true;
    channel?: true;
    rationale?: true;
    sortOrder?: true;
};
export type PlanDraftChannelRecommendationCountAggregateInputType = {
    id?: true;
    planDraftId?: true;
    channel?: true;
    rationale?: true;
    sortOrder?: true;
    _all?: true;
};
export type PlanDraftChannelRecommendationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    orderBy?: Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput | Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanDraftChannelRecommendationCountAggregateInputType;
    _avg?: PlanDraftChannelRecommendationAvgAggregateInputType;
    _sum?: PlanDraftChannelRecommendationSumAggregateInputType;
    _min?: PlanDraftChannelRecommendationMinAggregateInputType;
    _max?: PlanDraftChannelRecommendationMaxAggregateInputType;
};
export type GetPlanDraftChannelRecommendationAggregateType<T extends PlanDraftChannelRecommendationAggregateArgs> = {
    [P in keyof T & keyof AggregatePlanDraftChannelRecommendation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlanDraftChannelRecommendation[P]> : Prisma.GetScalarType<T[P], AggregatePlanDraftChannelRecommendation[P]>;
};
export type PlanDraftChannelRecommendationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    orderBy?: Prisma.PlanDraftChannelRecommendationOrderByWithAggregationInput | Prisma.PlanDraftChannelRecommendationOrderByWithAggregationInput[];
    by: Prisma.PlanDraftChannelRecommendationScalarFieldEnum[] | Prisma.PlanDraftChannelRecommendationScalarFieldEnum;
    having?: Prisma.PlanDraftChannelRecommendationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanDraftChannelRecommendationCountAggregateInputType | true;
    _avg?: PlanDraftChannelRecommendationAvgAggregateInputType;
    _sum?: PlanDraftChannelRecommendationSumAggregateInputType;
    _min?: PlanDraftChannelRecommendationMinAggregateInputType;
    _max?: PlanDraftChannelRecommendationMaxAggregateInputType;
};
export type PlanDraftChannelRecommendationGroupByOutputType = {
    id: string;
    planDraftId: string;
    channel: string;
    rationale: string;
    sortOrder: number;
    _count: PlanDraftChannelRecommendationCountAggregateOutputType | null;
    _avg: PlanDraftChannelRecommendationAvgAggregateOutputType | null;
    _sum: PlanDraftChannelRecommendationSumAggregateOutputType | null;
    _min: PlanDraftChannelRecommendationMinAggregateOutputType | null;
    _max: PlanDraftChannelRecommendationMaxAggregateOutputType | null;
};
export type GetPlanDraftChannelRecommendationGroupByPayload<T extends PlanDraftChannelRecommendationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanDraftChannelRecommendationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanDraftChannelRecommendationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanDraftChannelRecommendationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanDraftChannelRecommendationGroupByOutputType[P]>;
}>>;
export type PlanDraftChannelRecommendationWhereInput = {
    AND?: Prisma.PlanDraftChannelRecommendationWhereInput | Prisma.PlanDraftChannelRecommendationWhereInput[];
    OR?: Prisma.PlanDraftChannelRecommendationWhereInput[];
    NOT?: Prisma.PlanDraftChannelRecommendationWhereInput | Prisma.PlanDraftChannelRecommendationWhereInput[];
    id?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    planDraftId?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    channel?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    rationale?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    sortOrder?: Prisma.IntFilter<"PlanDraftChannelRecommendation"> | number;
    planDraft?: Prisma.XOR<Prisma.PlanDraftScalarRelationFilter, Prisma.PlanDraftWhereInput>;
};
export type PlanDraftChannelRecommendationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    planDraft?: Prisma.PlanDraftOrderByWithRelationInput;
};
export type PlanDraftChannelRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlanDraftChannelRecommendationWhereInput | Prisma.PlanDraftChannelRecommendationWhereInput[];
    OR?: Prisma.PlanDraftChannelRecommendationWhereInput[];
    NOT?: Prisma.PlanDraftChannelRecommendationWhereInput | Prisma.PlanDraftChannelRecommendationWhereInput[];
    planDraftId?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    channel?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    rationale?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    sortOrder?: Prisma.IntFilter<"PlanDraftChannelRecommendation"> | number;
    planDraft?: Prisma.XOR<Prisma.PlanDraftScalarRelationFilter, Prisma.PlanDraftWhereInput>;
}, "id">;
export type PlanDraftChannelRecommendationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.PlanDraftChannelRecommendationCountOrderByAggregateInput;
    _avg?: Prisma.PlanDraftChannelRecommendationAvgOrderByAggregateInput;
    _max?: Prisma.PlanDraftChannelRecommendationMaxOrderByAggregateInput;
    _min?: Prisma.PlanDraftChannelRecommendationMinOrderByAggregateInput;
    _sum?: Prisma.PlanDraftChannelRecommendationSumOrderByAggregateInput;
};
export type PlanDraftChannelRecommendationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanDraftChannelRecommendationScalarWhereWithAggregatesInput | Prisma.PlanDraftChannelRecommendationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanDraftChannelRecommendationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanDraftChannelRecommendationScalarWhereWithAggregatesInput | Prisma.PlanDraftChannelRecommendationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlanDraftChannelRecommendation"> | string;
    planDraftId?: Prisma.StringWithAggregatesFilter<"PlanDraftChannelRecommendation"> | string;
    channel?: Prisma.StringWithAggregatesFilter<"PlanDraftChannelRecommendation"> | string;
    rationale?: Prisma.StringWithAggregatesFilter<"PlanDraftChannelRecommendation"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PlanDraftChannelRecommendation"> | number;
};
export type PlanDraftChannelRecommendationCreateInput = {
    id?: string;
    channel: string;
    rationale: string;
    sortOrder?: number;
    planDraft: Prisma.PlanDraftCreateNestedOneWithoutChannelRecommendationsInput;
};
export type PlanDraftChannelRecommendationUncheckedCreateInput = {
    id?: string;
    planDraftId: string;
    channel: string;
    rationale: string;
    sortOrder?: number;
};
export type PlanDraftChannelRecommendationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    planDraft?: Prisma.PlanDraftUpdateOneRequiredWithoutChannelRecommendationsNestedInput;
};
export type PlanDraftChannelRecommendationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftChannelRecommendationCreateManyInput = {
    id?: string;
    planDraftId: string;
    channel: string;
    rationale: string;
    sortOrder?: number;
};
export type PlanDraftChannelRecommendationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftChannelRecommendationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftChannelRecommendationListRelationFilter = {
    every?: Prisma.PlanDraftChannelRecommendationWhereInput;
    some?: Prisma.PlanDraftChannelRecommendationWhereInput;
    none?: Prisma.PlanDraftChannelRecommendationWhereInput;
};
export type PlanDraftChannelRecommendationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlanDraftChannelRecommendationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftChannelRecommendationAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftChannelRecommendationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftChannelRecommendationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftChannelRecommendationSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftChannelRecommendationCreateNestedManyWithoutPlanDraftInput = {
    create?: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput[] | Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftChannelRecommendationCreateManyPlanDraftInputEnvelope;
    connect?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
};
export type PlanDraftChannelRecommendationUncheckedCreateNestedManyWithoutPlanDraftInput = {
    create?: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput[] | Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftChannelRecommendationCreateManyPlanDraftInputEnvelope;
    connect?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
};
export type PlanDraftChannelRecommendationUpdateManyWithoutPlanDraftNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput[] | Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput[];
    upsert?: Prisma.PlanDraftChannelRecommendationUpsertWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationUpsertWithWhereUniqueWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftChannelRecommendationCreateManyPlanDraftInputEnvelope;
    set?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    disconnect?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    delete?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    connect?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    update?: Prisma.PlanDraftChannelRecommendationUpdateWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationUpdateWithWhereUniqueWithoutPlanDraftInput[];
    updateMany?: Prisma.PlanDraftChannelRecommendationUpdateManyWithWhereWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationUpdateManyWithWhereWithoutPlanDraftInput[];
    deleteMany?: Prisma.PlanDraftChannelRecommendationScalarWhereInput | Prisma.PlanDraftChannelRecommendationScalarWhereInput[];
};
export type PlanDraftChannelRecommendationUncheckedUpdateManyWithoutPlanDraftNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput[] | Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput[];
    upsert?: Prisma.PlanDraftChannelRecommendationUpsertWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationUpsertWithWhereUniqueWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftChannelRecommendationCreateManyPlanDraftInputEnvelope;
    set?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    disconnect?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    delete?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    connect?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput | Prisma.PlanDraftChannelRecommendationWhereUniqueInput[];
    update?: Prisma.PlanDraftChannelRecommendationUpdateWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationUpdateWithWhereUniqueWithoutPlanDraftInput[];
    updateMany?: Prisma.PlanDraftChannelRecommendationUpdateManyWithWhereWithoutPlanDraftInput | Prisma.PlanDraftChannelRecommendationUpdateManyWithWhereWithoutPlanDraftInput[];
    deleteMany?: Prisma.PlanDraftChannelRecommendationScalarWhereInput | Prisma.PlanDraftChannelRecommendationScalarWhereInput[];
};
export type PlanDraftChannelRecommendationCreateWithoutPlanDraftInput = {
    id?: string;
    channel: string;
    rationale: string;
    sortOrder?: number;
};
export type PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput = {
    id?: string;
    channel: string;
    rationale: string;
    sortOrder?: number;
};
export type PlanDraftChannelRecommendationCreateOrConnectWithoutPlanDraftInput = {
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput>;
};
export type PlanDraftChannelRecommendationCreateManyPlanDraftInputEnvelope = {
    data: Prisma.PlanDraftChannelRecommendationCreateManyPlanDraftInput | Prisma.PlanDraftChannelRecommendationCreateManyPlanDraftInput[];
    skipDuplicates?: boolean;
};
export type PlanDraftChannelRecommendationUpsertWithWhereUniqueWithoutPlanDraftInput = {
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateWithoutPlanDraftInput>;
    create: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateWithoutPlanDraftInput>;
};
export type PlanDraftChannelRecommendationUpdateWithWhereUniqueWithoutPlanDraftInput = {
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateWithoutPlanDraftInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateWithoutPlanDraftInput>;
};
export type PlanDraftChannelRecommendationUpdateManyWithWhereWithoutPlanDraftInput = {
    where: Prisma.PlanDraftChannelRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateManyMutationInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateManyWithoutPlanDraftInput>;
};
export type PlanDraftChannelRecommendationScalarWhereInput = {
    AND?: Prisma.PlanDraftChannelRecommendationScalarWhereInput | Prisma.PlanDraftChannelRecommendationScalarWhereInput[];
    OR?: Prisma.PlanDraftChannelRecommendationScalarWhereInput[];
    NOT?: Prisma.PlanDraftChannelRecommendationScalarWhereInput | Prisma.PlanDraftChannelRecommendationScalarWhereInput[];
    id?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    planDraftId?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    channel?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    rationale?: Prisma.StringFilter<"PlanDraftChannelRecommendation"> | string;
    sortOrder?: Prisma.IntFilter<"PlanDraftChannelRecommendation"> | number;
};
export type PlanDraftChannelRecommendationCreateManyPlanDraftInput = {
    id?: string;
    channel: string;
    rationale: string;
    sortOrder?: number;
};
export type PlanDraftChannelRecommendationUpdateWithoutPlanDraftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftChannelRecommendationUncheckedUpdateWithoutPlanDraftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftChannelRecommendationUncheckedUpdateManyWithoutPlanDraftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftChannelRecommendationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftId?: boolean;
    channel?: boolean;
    rationale?: boolean;
    sortOrder?: boolean;
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftChannelRecommendation"]>;
export type PlanDraftChannelRecommendationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftId?: boolean;
    channel?: boolean;
    rationale?: boolean;
    sortOrder?: boolean;
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftChannelRecommendation"]>;
export type PlanDraftChannelRecommendationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftId?: boolean;
    channel?: boolean;
    rationale?: boolean;
    sortOrder?: boolean;
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftChannelRecommendation"]>;
export type PlanDraftChannelRecommendationSelectScalar = {
    id?: boolean;
    planDraftId?: boolean;
    channel?: boolean;
    rationale?: boolean;
    sortOrder?: boolean;
};
export type PlanDraftChannelRecommendationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "planDraftId" | "channel" | "rationale" | "sortOrder", ExtArgs["result"]["planDraftChannelRecommendation"]>;
export type PlanDraftChannelRecommendationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
};
export type PlanDraftChannelRecommendationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
};
export type PlanDraftChannelRecommendationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
};
export type $PlanDraftChannelRecommendationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlanDraftChannelRecommendation";
    objects: {
        planDraft: Prisma.$PlanDraftPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        planDraftId: string;
        channel: string;
        rationale: string;
        sortOrder: number;
    }, ExtArgs["result"]["planDraftChannelRecommendation"]>;
    composites: {};
};
export type PlanDraftChannelRecommendationGetPayload<S extends boolean | null | undefined | PlanDraftChannelRecommendationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload, S>;
export type PlanDraftChannelRecommendationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanDraftChannelRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanDraftChannelRecommendationCountAggregateInputType | true;
};
export interface PlanDraftChannelRecommendationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlanDraftChannelRecommendation'];
        meta: {
            name: 'PlanDraftChannelRecommendation';
        };
    };
    findUnique<T extends PlanDraftChannelRecommendationFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlanDraftChannelRecommendationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlanDraftChannelRecommendationFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanDraftChannelRecommendationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlanDraftChannelRecommendationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanDraftChannelRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlanDraftChannelRecommendationFindManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftChannelRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlanDraftChannelRecommendationCreateArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationCreateArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlanDraftChannelRecommendationCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftChannelRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlanDraftChannelRecommendationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanDraftChannelRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlanDraftChannelRecommendationDeleteArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlanDraftChannelRecommendationUpdateArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlanDraftChannelRecommendationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftChannelRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlanDraftChannelRecommendationUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlanDraftChannelRecommendationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlanDraftChannelRecommendationUpsertArgs>(args: Prisma.SelectSubset<T, PlanDraftChannelRecommendationUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanDraftChannelRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftChannelRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlanDraftChannelRecommendationCountArgs>(args?: Prisma.Subset<T, PlanDraftChannelRecommendationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanDraftChannelRecommendationCountAggregateOutputType> : number>;
    aggregate<T extends PlanDraftChannelRecommendationAggregateArgs>(args: Prisma.Subset<T, PlanDraftChannelRecommendationAggregateArgs>): Prisma.PrismaPromise<GetPlanDraftChannelRecommendationAggregateType<T>>;
    groupBy<T extends PlanDraftChannelRecommendationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanDraftChannelRecommendationGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanDraftChannelRecommendationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanDraftChannelRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanDraftChannelRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlanDraftChannelRecommendationFieldRefs;
}
export interface Prisma__PlanDraftChannelRecommendationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    planDraft<T extends Prisma.PlanDraftDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlanDraftDefaultArgs<ExtArgs>>): Prisma.Prisma__PlanDraftClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlanDraftChannelRecommendationFieldRefs {
    readonly id: Prisma.FieldRef<"PlanDraftChannelRecommendation", 'String'>;
    readonly planDraftId: Prisma.FieldRef<"PlanDraftChannelRecommendation", 'String'>;
    readonly channel: Prisma.FieldRef<"PlanDraftChannelRecommendation", 'String'>;
    readonly rationale: Prisma.FieldRef<"PlanDraftChannelRecommendation", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"PlanDraftChannelRecommendation", 'Int'>;
}
export type PlanDraftChannelRecommendationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
};
export type PlanDraftChannelRecommendationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
};
export type PlanDraftChannelRecommendationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    orderBy?: Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput | Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftChannelRecommendationScalarFieldEnum | Prisma.PlanDraftChannelRecommendationScalarFieldEnum[];
};
export type PlanDraftChannelRecommendationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    orderBy?: Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput | Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftChannelRecommendationScalarFieldEnum | Prisma.PlanDraftChannelRecommendationScalarFieldEnum[];
};
export type PlanDraftChannelRecommendationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    orderBy?: Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput | Prisma.PlanDraftChannelRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftChannelRecommendationScalarFieldEnum | Prisma.PlanDraftChannelRecommendationScalarFieldEnum[];
};
export type PlanDraftChannelRecommendationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateInput>;
};
export type PlanDraftChannelRecommendationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlanDraftChannelRecommendationCreateManyInput | Prisma.PlanDraftChannelRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlanDraftChannelRecommendationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    data: Prisma.PlanDraftChannelRecommendationCreateManyInput | Prisma.PlanDraftChannelRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PlanDraftChannelRecommendationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlanDraftChannelRecommendationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateInput>;
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
};
export type PlanDraftChannelRecommendationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateManyMutationInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    limit?: number;
};
export type PlanDraftChannelRecommendationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateManyMutationInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    limit?: number;
    include?: Prisma.PlanDraftChannelRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlanDraftChannelRecommendationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftChannelRecommendationCreateInput, Prisma.PlanDraftChannelRecommendationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlanDraftChannelRecommendationUpdateInput, Prisma.PlanDraftChannelRecommendationUncheckedUpdateInput>;
};
export type PlanDraftChannelRecommendationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
    where: Prisma.PlanDraftChannelRecommendationWhereUniqueInput;
};
export type PlanDraftChannelRecommendationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftChannelRecommendationWhereInput;
    limit?: number;
};
export type PlanDraftChannelRecommendationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftChannelRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftChannelRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftChannelRecommendationInclude<ExtArgs> | null;
};
