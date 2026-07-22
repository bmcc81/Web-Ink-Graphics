import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlanDraftMilestoneModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanDraftMilestonePayload>;
export type AggregatePlanDraftMilestone = {
    _count: PlanDraftMilestoneCountAggregateOutputType | null;
    _avg: PlanDraftMilestoneAvgAggregateOutputType | null;
    _sum: PlanDraftMilestoneSumAggregateOutputType | null;
    _min: PlanDraftMilestoneMinAggregateOutputType | null;
    _max: PlanDraftMilestoneMaxAggregateOutputType | null;
};
export type PlanDraftMilestoneAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PlanDraftMilestoneSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PlanDraftMilestoneMinAggregateOutputType = {
    id: string | null;
    planDraftProjectId: string | null;
    name: string | null;
    sortOrder: number | null;
};
export type PlanDraftMilestoneMaxAggregateOutputType = {
    id: string | null;
    planDraftProjectId: string | null;
    name: string | null;
    sortOrder: number | null;
};
export type PlanDraftMilestoneCountAggregateOutputType = {
    id: number;
    planDraftProjectId: number;
    name: number;
    tasks: number;
    sortOrder: number;
    _all: number;
};
export type PlanDraftMilestoneAvgAggregateInputType = {
    sortOrder?: true;
};
export type PlanDraftMilestoneSumAggregateInputType = {
    sortOrder?: true;
};
export type PlanDraftMilestoneMinAggregateInputType = {
    id?: true;
    planDraftProjectId?: true;
    name?: true;
    sortOrder?: true;
};
export type PlanDraftMilestoneMaxAggregateInputType = {
    id?: true;
    planDraftProjectId?: true;
    name?: true;
    sortOrder?: true;
};
export type PlanDraftMilestoneCountAggregateInputType = {
    id?: true;
    planDraftProjectId?: true;
    name?: true;
    tasks?: true;
    sortOrder?: true;
    _all?: true;
};
export type PlanDraftMilestoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftMilestoneWhereInput;
    orderBy?: Prisma.PlanDraftMilestoneOrderByWithRelationInput | Prisma.PlanDraftMilestoneOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftMilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanDraftMilestoneCountAggregateInputType;
    _avg?: PlanDraftMilestoneAvgAggregateInputType;
    _sum?: PlanDraftMilestoneSumAggregateInputType;
    _min?: PlanDraftMilestoneMinAggregateInputType;
    _max?: PlanDraftMilestoneMaxAggregateInputType;
};
export type GetPlanDraftMilestoneAggregateType<T extends PlanDraftMilestoneAggregateArgs> = {
    [P in keyof T & keyof AggregatePlanDraftMilestone]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlanDraftMilestone[P]> : Prisma.GetScalarType<T[P], AggregatePlanDraftMilestone[P]>;
};
export type PlanDraftMilestoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftMilestoneWhereInput;
    orderBy?: Prisma.PlanDraftMilestoneOrderByWithAggregationInput | Prisma.PlanDraftMilestoneOrderByWithAggregationInput[];
    by: Prisma.PlanDraftMilestoneScalarFieldEnum[] | Prisma.PlanDraftMilestoneScalarFieldEnum;
    having?: Prisma.PlanDraftMilestoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanDraftMilestoneCountAggregateInputType | true;
    _avg?: PlanDraftMilestoneAvgAggregateInputType;
    _sum?: PlanDraftMilestoneSumAggregateInputType;
    _min?: PlanDraftMilestoneMinAggregateInputType;
    _max?: PlanDraftMilestoneMaxAggregateInputType;
};
export type PlanDraftMilestoneGroupByOutputType = {
    id: string;
    planDraftProjectId: string;
    name: string;
    tasks: string[];
    sortOrder: number;
    _count: PlanDraftMilestoneCountAggregateOutputType | null;
    _avg: PlanDraftMilestoneAvgAggregateOutputType | null;
    _sum: PlanDraftMilestoneSumAggregateOutputType | null;
    _min: PlanDraftMilestoneMinAggregateOutputType | null;
    _max: PlanDraftMilestoneMaxAggregateOutputType | null;
};
export type GetPlanDraftMilestoneGroupByPayload<T extends PlanDraftMilestoneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanDraftMilestoneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanDraftMilestoneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanDraftMilestoneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanDraftMilestoneGroupByOutputType[P]>;
}>>;
export type PlanDraftMilestoneWhereInput = {
    AND?: Prisma.PlanDraftMilestoneWhereInput | Prisma.PlanDraftMilestoneWhereInput[];
    OR?: Prisma.PlanDraftMilestoneWhereInput[];
    NOT?: Prisma.PlanDraftMilestoneWhereInput | Prisma.PlanDraftMilestoneWhereInput[];
    id?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    planDraftProjectId?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    name?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    tasks?: Prisma.StringNullableListFilter<"PlanDraftMilestone">;
    sortOrder?: Prisma.IntFilter<"PlanDraftMilestone"> | number;
    planDraftProject?: Prisma.XOR<Prisma.PlanDraftProjectScalarRelationFilter, Prisma.PlanDraftProjectWhereInput>;
};
export type PlanDraftMilestoneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    planDraftProjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tasks?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    planDraftProject?: Prisma.PlanDraftProjectOrderByWithRelationInput;
};
export type PlanDraftMilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlanDraftMilestoneWhereInput | Prisma.PlanDraftMilestoneWhereInput[];
    OR?: Prisma.PlanDraftMilestoneWhereInput[];
    NOT?: Prisma.PlanDraftMilestoneWhereInput | Prisma.PlanDraftMilestoneWhereInput[];
    planDraftProjectId?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    name?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    tasks?: Prisma.StringNullableListFilter<"PlanDraftMilestone">;
    sortOrder?: Prisma.IntFilter<"PlanDraftMilestone"> | number;
    planDraftProject?: Prisma.XOR<Prisma.PlanDraftProjectScalarRelationFilter, Prisma.PlanDraftProjectWhereInput>;
}, "id">;
export type PlanDraftMilestoneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    planDraftProjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tasks?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.PlanDraftMilestoneCountOrderByAggregateInput;
    _avg?: Prisma.PlanDraftMilestoneAvgOrderByAggregateInput;
    _max?: Prisma.PlanDraftMilestoneMaxOrderByAggregateInput;
    _min?: Prisma.PlanDraftMilestoneMinOrderByAggregateInput;
    _sum?: Prisma.PlanDraftMilestoneSumOrderByAggregateInput;
};
export type PlanDraftMilestoneScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanDraftMilestoneScalarWhereWithAggregatesInput | Prisma.PlanDraftMilestoneScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanDraftMilestoneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanDraftMilestoneScalarWhereWithAggregatesInput | Prisma.PlanDraftMilestoneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlanDraftMilestone"> | string;
    planDraftProjectId?: Prisma.StringWithAggregatesFilter<"PlanDraftMilestone"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PlanDraftMilestone"> | string;
    tasks?: Prisma.StringNullableListFilter<"PlanDraftMilestone">;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PlanDraftMilestone"> | number;
};
export type PlanDraftMilestoneCreateInput = {
    id?: string;
    name: string;
    tasks?: Prisma.PlanDraftMilestoneCreatetasksInput | string[];
    sortOrder?: number;
    planDraftProject: Prisma.PlanDraftProjectCreateNestedOneWithoutMilestonesInput;
};
export type PlanDraftMilestoneUncheckedCreateInput = {
    id?: string;
    planDraftProjectId: string;
    name: string;
    tasks?: Prisma.PlanDraftMilestoneCreatetasksInput | string[];
    sortOrder?: number;
};
export type PlanDraftMilestoneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    planDraftProject?: Prisma.PlanDraftProjectUpdateOneRequiredWithoutMilestonesNestedInput;
};
export type PlanDraftMilestoneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftProjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftMilestoneCreateManyInput = {
    id?: string;
    planDraftProjectId: string;
    name: string;
    tasks?: Prisma.PlanDraftMilestoneCreatetasksInput | string[];
    sortOrder?: number;
};
export type PlanDraftMilestoneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftMilestoneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftProjectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftMilestoneListRelationFilter = {
    every?: Prisma.PlanDraftMilestoneWhereInput;
    some?: Prisma.PlanDraftMilestoneWhereInput;
    none?: Prisma.PlanDraftMilestoneWhereInput;
};
export type PlanDraftMilestoneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type PlanDraftMilestoneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftProjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    tasks?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftMilestoneAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftMilestoneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftProjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftMilestoneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftProjectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftMilestoneSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftMilestoneCreateNestedManyWithoutPlanDraftProjectInput = {
    create?: Prisma.XOR<Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput> | Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput[] | Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput[];
    connectOrCreate?: Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput[];
    createMany?: Prisma.PlanDraftMilestoneCreateManyPlanDraftProjectInputEnvelope;
    connect?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
};
export type PlanDraftMilestoneUncheckedCreateNestedManyWithoutPlanDraftProjectInput = {
    create?: Prisma.XOR<Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput> | Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput[] | Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput[];
    connectOrCreate?: Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput[];
    createMany?: Prisma.PlanDraftMilestoneCreateManyPlanDraftProjectInputEnvelope;
    connect?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
};
export type PlanDraftMilestoneUpdateManyWithoutPlanDraftProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput> | Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput[] | Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput[];
    connectOrCreate?: Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput[];
    upsert?: Prisma.PlanDraftMilestoneUpsertWithWhereUniqueWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneUpsertWithWhereUniqueWithoutPlanDraftProjectInput[];
    createMany?: Prisma.PlanDraftMilestoneCreateManyPlanDraftProjectInputEnvelope;
    set?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    disconnect?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    delete?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    connect?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    update?: Prisma.PlanDraftMilestoneUpdateWithWhereUniqueWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneUpdateWithWhereUniqueWithoutPlanDraftProjectInput[];
    updateMany?: Prisma.PlanDraftMilestoneUpdateManyWithWhereWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneUpdateManyWithWhereWithoutPlanDraftProjectInput[];
    deleteMany?: Prisma.PlanDraftMilestoneScalarWhereInput | Prisma.PlanDraftMilestoneScalarWhereInput[];
};
export type PlanDraftMilestoneUncheckedUpdateManyWithoutPlanDraftProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput> | Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput[] | Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput[];
    connectOrCreate?: Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput[];
    upsert?: Prisma.PlanDraftMilestoneUpsertWithWhereUniqueWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneUpsertWithWhereUniqueWithoutPlanDraftProjectInput[];
    createMany?: Prisma.PlanDraftMilestoneCreateManyPlanDraftProjectInputEnvelope;
    set?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    disconnect?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    delete?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    connect?: Prisma.PlanDraftMilestoneWhereUniqueInput | Prisma.PlanDraftMilestoneWhereUniqueInput[];
    update?: Prisma.PlanDraftMilestoneUpdateWithWhereUniqueWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneUpdateWithWhereUniqueWithoutPlanDraftProjectInput[];
    updateMany?: Prisma.PlanDraftMilestoneUpdateManyWithWhereWithoutPlanDraftProjectInput | Prisma.PlanDraftMilestoneUpdateManyWithWhereWithoutPlanDraftProjectInput[];
    deleteMany?: Prisma.PlanDraftMilestoneScalarWhereInput | Prisma.PlanDraftMilestoneScalarWhereInput[];
};
export type PlanDraftMilestoneCreatetasksInput = {
    set: string[];
};
export type PlanDraftMilestoneUpdatetasksInput = {
    set?: string[];
    push?: string | string[];
};
export type PlanDraftMilestoneCreateWithoutPlanDraftProjectInput = {
    id?: string;
    name: string;
    tasks?: Prisma.PlanDraftMilestoneCreatetasksInput | string[];
    sortOrder?: number;
};
export type PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput = {
    id?: string;
    name: string;
    tasks?: Prisma.PlanDraftMilestoneCreatetasksInput | string[];
    sortOrder?: number;
};
export type PlanDraftMilestoneCreateOrConnectWithoutPlanDraftProjectInput = {
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput>;
};
export type PlanDraftMilestoneCreateManyPlanDraftProjectInputEnvelope = {
    data: Prisma.PlanDraftMilestoneCreateManyPlanDraftProjectInput | Prisma.PlanDraftMilestoneCreateManyPlanDraftProjectInput[];
    skipDuplicates?: boolean;
};
export type PlanDraftMilestoneUpsertWithWhereUniqueWithoutPlanDraftProjectInput = {
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedUpdateWithoutPlanDraftProjectInput>;
    create: Prisma.XOR<Prisma.PlanDraftMilestoneCreateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedCreateWithoutPlanDraftProjectInput>;
};
export type PlanDraftMilestoneUpdateWithWhereUniqueWithoutPlanDraftProjectInput = {
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateWithoutPlanDraftProjectInput, Prisma.PlanDraftMilestoneUncheckedUpdateWithoutPlanDraftProjectInput>;
};
export type PlanDraftMilestoneUpdateManyWithWhereWithoutPlanDraftProjectInput = {
    where: Prisma.PlanDraftMilestoneScalarWhereInput;
    data: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateManyMutationInput, Prisma.PlanDraftMilestoneUncheckedUpdateManyWithoutPlanDraftProjectInput>;
};
export type PlanDraftMilestoneScalarWhereInput = {
    AND?: Prisma.PlanDraftMilestoneScalarWhereInput | Prisma.PlanDraftMilestoneScalarWhereInput[];
    OR?: Prisma.PlanDraftMilestoneScalarWhereInput[];
    NOT?: Prisma.PlanDraftMilestoneScalarWhereInput | Prisma.PlanDraftMilestoneScalarWhereInput[];
    id?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    planDraftProjectId?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    name?: Prisma.StringFilter<"PlanDraftMilestone"> | string;
    tasks?: Prisma.StringNullableListFilter<"PlanDraftMilestone">;
    sortOrder?: Prisma.IntFilter<"PlanDraftMilestone"> | number;
};
export type PlanDraftMilestoneCreateManyPlanDraftProjectInput = {
    id?: string;
    name: string;
    tasks?: Prisma.PlanDraftMilestoneCreatetasksInput | string[];
    sortOrder?: number;
};
export type PlanDraftMilestoneUpdateWithoutPlanDraftProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftMilestoneUncheckedUpdateWithoutPlanDraftProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftMilestoneUncheckedUpdateManyWithoutPlanDraftProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.PlanDraftMilestoneUpdatetasksInput | string[];
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftMilestoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftProjectId?: boolean;
    name?: boolean;
    tasks?: boolean;
    sortOrder?: boolean;
    planDraftProject?: boolean | Prisma.PlanDraftProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftMilestone"]>;
export type PlanDraftMilestoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftProjectId?: boolean;
    name?: boolean;
    tasks?: boolean;
    sortOrder?: boolean;
    planDraftProject?: boolean | Prisma.PlanDraftProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftMilestone"]>;
export type PlanDraftMilestoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftProjectId?: boolean;
    name?: boolean;
    tasks?: boolean;
    sortOrder?: boolean;
    planDraftProject?: boolean | Prisma.PlanDraftProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftMilestone"]>;
export type PlanDraftMilestoneSelectScalar = {
    id?: boolean;
    planDraftProjectId?: boolean;
    name?: boolean;
    tasks?: boolean;
    sortOrder?: boolean;
};
export type PlanDraftMilestoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "planDraftProjectId" | "name" | "tasks" | "sortOrder", ExtArgs["result"]["planDraftMilestone"]>;
export type PlanDraftMilestoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraftProject?: boolean | Prisma.PlanDraftProjectDefaultArgs<ExtArgs>;
};
export type PlanDraftMilestoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraftProject?: boolean | Prisma.PlanDraftProjectDefaultArgs<ExtArgs>;
};
export type PlanDraftMilestoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraftProject?: boolean | Prisma.PlanDraftProjectDefaultArgs<ExtArgs>;
};
export type $PlanDraftMilestonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlanDraftMilestone";
    objects: {
        planDraftProject: Prisma.$PlanDraftProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        planDraftProjectId: string;
        name: string;
        tasks: string[];
        sortOrder: number;
    }, ExtArgs["result"]["planDraftMilestone"]>;
    composites: {};
};
export type PlanDraftMilestoneGetPayload<S extends boolean | null | undefined | PlanDraftMilestoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload, S>;
export type PlanDraftMilestoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanDraftMilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanDraftMilestoneCountAggregateInputType | true;
};
export interface PlanDraftMilestoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlanDraftMilestone'];
        meta: {
            name: 'PlanDraftMilestone';
        };
    };
    findUnique<T extends PlanDraftMilestoneFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlanDraftMilestoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlanDraftMilestoneFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanDraftMilestoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlanDraftMilestoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanDraftMilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlanDraftMilestoneFindManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftMilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlanDraftMilestoneCreateArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneCreateArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlanDraftMilestoneCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftMilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlanDraftMilestoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanDraftMilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlanDraftMilestoneDeleteArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlanDraftMilestoneUpdateArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlanDraftMilestoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftMilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlanDraftMilestoneUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlanDraftMilestoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlanDraftMilestoneUpsertArgs>(args: Prisma.SelectSubset<T, PlanDraftMilestoneUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanDraftMilestoneClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlanDraftMilestoneCountArgs>(args?: Prisma.Subset<T, PlanDraftMilestoneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanDraftMilestoneCountAggregateOutputType> : number>;
    aggregate<T extends PlanDraftMilestoneAggregateArgs>(args: Prisma.Subset<T, PlanDraftMilestoneAggregateArgs>): Prisma.PrismaPromise<GetPlanDraftMilestoneAggregateType<T>>;
    groupBy<T extends PlanDraftMilestoneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanDraftMilestoneGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanDraftMilestoneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanDraftMilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanDraftMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlanDraftMilestoneFieldRefs;
}
export interface Prisma__PlanDraftMilestoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    planDraftProject<T extends Prisma.PlanDraftProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlanDraftProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlanDraftMilestoneFieldRefs {
    readonly id: Prisma.FieldRef<"PlanDraftMilestone", 'String'>;
    readonly planDraftProjectId: Prisma.FieldRef<"PlanDraftMilestone", 'String'>;
    readonly name: Prisma.FieldRef<"PlanDraftMilestone", 'String'>;
    readonly tasks: Prisma.FieldRef<"PlanDraftMilestone", 'String[]'>;
    readonly sortOrder: Prisma.FieldRef<"PlanDraftMilestone", 'Int'>;
}
export type PlanDraftMilestoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
};
export type PlanDraftMilestoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
};
export type PlanDraftMilestoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftMilestoneWhereInput;
    orderBy?: Prisma.PlanDraftMilestoneOrderByWithRelationInput | Prisma.PlanDraftMilestoneOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftMilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftMilestoneScalarFieldEnum | Prisma.PlanDraftMilestoneScalarFieldEnum[];
};
export type PlanDraftMilestoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftMilestoneWhereInput;
    orderBy?: Prisma.PlanDraftMilestoneOrderByWithRelationInput | Prisma.PlanDraftMilestoneOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftMilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftMilestoneScalarFieldEnum | Prisma.PlanDraftMilestoneScalarFieldEnum[];
};
export type PlanDraftMilestoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftMilestoneWhereInput;
    orderBy?: Prisma.PlanDraftMilestoneOrderByWithRelationInput | Prisma.PlanDraftMilestoneOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftMilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftMilestoneScalarFieldEnum | Prisma.PlanDraftMilestoneScalarFieldEnum[];
};
export type PlanDraftMilestoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftMilestoneCreateInput, Prisma.PlanDraftMilestoneUncheckedCreateInput>;
};
export type PlanDraftMilestoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlanDraftMilestoneCreateManyInput | Prisma.PlanDraftMilestoneCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlanDraftMilestoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    data: Prisma.PlanDraftMilestoneCreateManyInput | Prisma.PlanDraftMilestoneCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PlanDraftMilestoneIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlanDraftMilestoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateInput, Prisma.PlanDraftMilestoneUncheckedUpdateInput>;
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
};
export type PlanDraftMilestoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateManyMutationInput, Prisma.PlanDraftMilestoneUncheckedUpdateManyInput>;
    where?: Prisma.PlanDraftMilestoneWhereInput;
    limit?: number;
};
export type PlanDraftMilestoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateManyMutationInput, Prisma.PlanDraftMilestoneUncheckedUpdateManyInput>;
    where?: Prisma.PlanDraftMilestoneWhereInput;
    limit?: number;
    include?: Prisma.PlanDraftMilestoneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlanDraftMilestoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftMilestoneCreateInput, Prisma.PlanDraftMilestoneUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlanDraftMilestoneUpdateInput, Prisma.PlanDraftMilestoneUncheckedUpdateInput>;
};
export type PlanDraftMilestoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
    where: Prisma.PlanDraftMilestoneWhereUniqueInput;
};
export type PlanDraftMilestoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftMilestoneWhereInput;
    limit?: number;
};
export type PlanDraftMilestoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftMilestoneSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftMilestoneOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftMilestoneInclude<ExtArgs> | null;
};
