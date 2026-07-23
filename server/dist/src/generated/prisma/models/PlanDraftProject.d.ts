import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlanDraftProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanDraftProjectPayload>;
export type AggregatePlanDraftProject = {
    _count: PlanDraftProjectCountAggregateOutputType | null;
    _avg: PlanDraftProjectAvgAggregateOutputType | null;
    _sum: PlanDraftProjectSumAggregateOutputType | null;
    _min: PlanDraftProjectMinAggregateOutputType | null;
    _max: PlanDraftProjectMaxAggregateOutputType | null;
};
export type PlanDraftProjectAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PlanDraftProjectSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PlanDraftProjectMinAggregateOutputType = {
    id: string | null;
    planDraftId: string | null;
    name: string | null;
    description: string | null;
    sortOrder: number | null;
};
export type PlanDraftProjectMaxAggregateOutputType = {
    id: string | null;
    planDraftId: string | null;
    name: string | null;
    description: string | null;
    sortOrder: number | null;
};
export type PlanDraftProjectCountAggregateOutputType = {
    id: number;
    planDraftId: number;
    name: number;
    description: number;
    sortOrder: number;
    _all: number;
};
export type PlanDraftProjectAvgAggregateInputType = {
    sortOrder?: true;
};
export type PlanDraftProjectSumAggregateInputType = {
    sortOrder?: true;
};
export type PlanDraftProjectMinAggregateInputType = {
    id?: true;
    planDraftId?: true;
    name?: true;
    description?: true;
    sortOrder?: true;
};
export type PlanDraftProjectMaxAggregateInputType = {
    id?: true;
    planDraftId?: true;
    name?: true;
    description?: true;
    sortOrder?: true;
};
export type PlanDraftProjectCountAggregateInputType = {
    id?: true;
    planDraftId?: true;
    name?: true;
    description?: true;
    sortOrder?: true;
    _all?: true;
};
export type PlanDraftProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftProjectWhereInput;
    orderBy?: Prisma.PlanDraftProjectOrderByWithRelationInput | Prisma.PlanDraftProjectOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanDraftProjectCountAggregateInputType;
    _avg?: PlanDraftProjectAvgAggregateInputType;
    _sum?: PlanDraftProjectSumAggregateInputType;
    _min?: PlanDraftProjectMinAggregateInputType;
    _max?: PlanDraftProjectMaxAggregateInputType;
};
export type GetPlanDraftProjectAggregateType<T extends PlanDraftProjectAggregateArgs> = {
    [P in keyof T & keyof AggregatePlanDraftProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlanDraftProject[P]> : Prisma.GetScalarType<T[P], AggregatePlanDraftProject[P]>;
};
export type PlanDraftProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftProjectWhereInput;
    orderBy?: Prisma.PlanDraftProjectOrderByWithAggregationInput | Prisma.PlanDraftProjectOrderByWithAggregationInput[];
    by: Prisma.PlanDraftProjectScalarFieldEnum[] | Prisma.PlanDraftProjectScalarFieldEnum;
    having?: Prisma.PlanDraftProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanDraftProjectCountAggregateInputType | true;
    _avg?: PlanDraftProjectAvgAggregateInputType;
    _sum?: PlanDraftProjectSumAggregateInputType;
    _min?: PlanDraftProjectMinAggregateInputType;
    _max?: PlanDraftProjectMaxAggregateInputType;
};
export type PlanDraftProjectGroupByOutputType = {
    id: string;
    planDraftId: string;
    name: string;
    description: string | null;
    sortOrder: number;
    _count: PlanDraftProjectCountAggregateOutputType | null;
    _avg: PlanDraftProjectAvgAggregateOutputType | null;
    _sum: PlanDraftProjectSumAggregateOutputType | null;
    _min: PlanDraftProjectMinAggregateOutputType | null;
    _max: PlanDraftProjectMaxAggregateOutputType | null;
};
export type GetPlanDraftProjectGroupByPayload<T extends PlanDraftProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanDraftProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanDraftProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanDraftProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanDraftProjectGroupByOutputType[P]>;
}>>;
export type PlanDraftProjectWhereInput = {
    AND?: Prisma.PlanDraftProjectWhereInput | Prisma.PlanDraftProjectWhereInput[];
    OR?: Prisma.PlanDraftProjectWhereInput[];
    NOT?: Prisma.PlanDraftProjectWhereInput | Prisma.PlanDraftProjectWhereInput[];
    id?: Prisma.StringFilter<"PlanDraftProject"> | string;
    planDraftId?: Prisma.StringFilter<"PlanDraftProject"> | string;
    name?: Prisma.StringFilter<"PlanDraftProject"> | string;
    description?: Prisma.StringNullableFilter<"PlanDraftProject"> | string | null;
    sortOrder?: Prisma.IntFilter<"PlanDraftProject"> | number;
    planDraft?: Prisma.XOR<Prisma.PlanDraftScalarRelationFilter, Prisma.PlanDraftWhereInput>;
    milestones?: Prisma.PlanDraftMilestoneListRelationFilter;
};
export type PlanDraftProjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    planDraft?: Prisma.PlanDraftOrderByWithRelationInput;
    milestones?: Prisma.PlanDraftMilestoneOrderByRelationAggregateInput;
};
export type PlanDraftProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlanDraftProjectWhereInput | Prisma.PlanDraftProjectWhereInput[];
    OR?: Prisma.PlanDraftProjectWhereInput[];
    NOT?: Prisma.PlanDraftProjectWhereInput | Prisma.PlanDraftProjectWhereInput[];
    planDraftId?: Prisma.StringFilter<"PlanDraftProject"> | string;
    name?: Prisma.StringFilter<"PlanDraftProject"> | string;
    description?: Prisma.StringNullableFilter<"PlanDraftProject"> | string | null;
    sortOrder?: Prisma.IntFilter<"PlanDraftProject"> | number;
    planDraft?: Prisma.XOR<Prisma.PlanDraftScalarRelationFilter, Prisma.PlanDraftWhereInput>;
    milestones?: Prisma.PlanDraftMilestoneListRelationFilter;
}, "id">;
export type PlanDraftProjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.PlanDraftProjectCountOrderByAggregateInput;
    _avg?: Prisma.PlanDraftProjectAvgOrderByAggregateInput;
    _max?: Prisma.PlanDraftProjectMaxOrderByAggregateInput;
    _min?: Prisma.PlanDraftProjectMinOrderByAggregateInput;
    _sum?: Prisma.PlanDraftProjectSumOrderByAggregateInput;
};
export type PlanDraftProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanDraftProjectScalarWhereWithAggregatesInput | Prisma.PlanDraftProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanDraftProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanDraftProjectScalarWhereWithAggregatesInput | Prisma.PlanDraftProjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlanDraftProject"> | string;
    planDraftId?: Prisma.StringWithAggregatesFilter<"PlanDraftProject"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PlanDraftProject"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PlanDraftProject"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PlanDraftProject"> | number;
};
export type PlanDraftProjectCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
    planDraft: Prisma.PlanDraftCreateNestedOneWithoutProjectsInput;
    milestones?: Prisma.PlanDraftMilestoneCreateNestedManyWithoutPlanDraftProjectInput;
};
export type PlanDraftProjectUncheckedCreateInput = {
    id?: string;
    planDraftId: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
    milestones?: Prisma.PlanDraftMilestoneUncheckedCreateNestedManyWithoutPlanDraftProjectInput;
};
export type PlanDraftProjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    planDraft?: Prisma.PlanDraftUpdateOneRequiredWithoutProjectsNestedInput;
    milestones?: Prisma.PlanDraftMilestoneUpdateManyWithoutPlanDraftProjectNestedInput;
};
export type PlanDraftProjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    milestones?: Prisma.PlanDraftMilestoneUncheckedUpdateManyWithoutPlanDraftProjectNestedInput;
};
export type PlanDraftProjectCreateManyInput = {
    id?: string;
    planDraftId: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
};
export type PlanDraftProjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftProjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftProjectListRelationFilter = {
    every?: Prisma.PlanDraftProjectWhereInput;
    some?: Prisma.PlanDraftProjectWhereInput;
    none?: Prisma.PlanDraftProjectWhereInput;
};
export type PlanDraftProjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlanDraftProjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftProjectAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftProjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftProjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    planDraftId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftProjectSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PlanDraftProjectScalarRelationFilter = {
    is?: Prisma.PlanDraftProjectWhereInput;
    isNot?: Prisma.PlanDraftProjectWhereInput;
};
export type PlanDraftProjectCreateNestedManyWithoutPlanDraftInput = {
    create?: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftProjectCreateWithoutPlanDraftInput[] | Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftProjectCreateManyPlanDraftInputEnvelope;
    connect?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
};
export type PlanDraftProjectUncheckedCreateNestedManyWithoutPlanDraftInput = {
    create?: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftProjectCreateWithoutPlanDraftInput[] | Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftProjectCreateManyPlanDraftInputEnvelope;
    connect?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
};
export type PlanDraftProjectUpdateManyWithoutPlanDraftNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftProjectCreateWithoutPlanDraftInput[] | Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput[];
    upsert?: Prisma.PlanDraftProjectUpsertWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftProjectUpsertWithWhereUniqueWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftProjectCreateManyPlanDraftInputEnvelope;
    set?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    disconnect?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    delete?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    connect?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    update?: Prisma.PlanDraftProjectUpdateWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftProjectUpdateWithWhereUniqueWithoutPlanDraftInput[];
    updateMany?: Prisma.PlanDraftProjectUpdateManyWithWhereWithoutPlanDraftInput | Prisma.PlanDraftProjectUpdateManyWithWhereWithoutPlanDraftInput[];
    deleteMany?: Prisma.PlanDraftProjectScalarWhereInput | Prisma.PlanDraftProjectScalarWhereInput[];
};
export type PlanDraftProjectUncheckedUpdateManyWithoutPlanDraftNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput> | Prisma.PlanDraftProjectCreateWithoutPlanDraftInput[] | Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput[];
    connectOrCreate?: Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput | Prisma.PlanDraftProjectCreateOrConnectWithoutPlanDraftInput[];
    upsert?: Prisma.PlanDraftProjectUpsertWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftProjectUpsertWithWhereUniqueWithoutPlanDraftInput[];
    createMany?: Prisma.PlanDraftProjectCreateManyPlanDraftInputEnvelope;
    set?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    disconnect?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    delete?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    connect?: Prisma.PlanDraftProjectWhereUniqueInput | Prisma.PlanDraftProjectWhereUniqueInput[];
    update?: Prisma.PlanDraftProjectUpdateWithWhereUniqueWithoutPlanDraftInput | Prisma.PlanDraftProjectUpdateWithWhereUniqueWithoutPlanDraftInput[];
    updateMany?: Prisma.PlanDraftProjectUpdateManyWithWhereWithoutPlanDraftInput | Prisma.PlanDraftProjectUpdateManyWithWhereWithoutPlanDraftInput[];
    deleteMany?: Prisma.PlanDraftProjectScalarWhereInput | Prisma.PlanDraftProjectScalarWhereInput[];
};
export type PlanDraftProjectCreateNestedOneWithoutMilestonesInput = {
    create?: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutMilestonesInput, Prisma.PlanDraftProjectUncheckedCreateWithoutMilestonesInput>;
    connectOrCreate?: Prisma.PlanDraftProjectCreateOrConnectWithoutMilestonesInput;
    connect?: Prisma.PlanDraftProjectWhereUniqueInput;
};
export type PlanDraftProjectUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutMilestonesInput, Prisma.PlanDraftProjectUncheckedCreateWithoutMilestonesInput>;
    connectOrCreate?: Prisma.PlanDraftProjectCreateOrConnectWithoutMilestonesInput;
    upsert?: Prisma.PlanDraftProjectUpsertWithoutMilestonesInput;
    connect?: Prisma.PlanDraftProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlanDraftProjectUpdateToOneWithWhereWithoutMilestonesInput, Prisma.PlanDraftProjectUpdateWithoutMilestonesInput>, Prisma.PlanDraftProjectUncheckedUpdateWithoutMilestonesInput>;
};
export type PlanDraftProjectCreateWithoutPlanDraftInput = {
    id?: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
    milestones?: Prisma.PlanDraftMilestoneCreateNestedManyWithoutPlanDraftProjectInput;
};
export type PlanDraftProjectUncheckedCreateWithoutPlanDraftInput = {
    id?: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
    milestones?: Prisma.PlanDraftMilestoneUncheckedCreateNestedManyWithoutPlanDraftProjectInput;
};
export type PlanDraftProjectCreateOrConnectWithoutPlanDraftInput = {
    where: Prisma.PlanDraftProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput>;
};
export type PlanDraftProjectCreateManyPlanDraftInputEnvelope = {
    data: Prisma.PlanDraftProjectCreateManyPlanDraftInput | Prisma.PlanDraftProjectCreateManyPlanDraftInput[];
    skipDuplicates?: boolean;
};
export type PlanDraftProjectUpsertWithWhereUniqueWithoutPlanDraftInput = {
    where: Prisma.PlanDraftProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlanDraftProjectUpdateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedUpdateWithoutPlanDraftInput>;
    create: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedCreateWithoutPlanDraftInput>;
};
export type PlanDraftProjectUpdateWithWhereUniqueWithoutPlanDraftInput = {
    where: Prisma.PlanDraftProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlanDraftProjectUpdateWithoutPlanDraftInput, Prisma.PlanDraftProjectUncheckedUpdateWithoutPlanDraftInput>;
};
export type PlanDraftProjectUpdateManyWithWhereWithoutPlanDraftInput = {
    where: Prisma.PlanDraftProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.PlanDraftProjectUpdateManyMutationInput, Prisma.PlanDraftProjectUncheckedUpdateManyWithoutPlanDraftInput>;
};
export type PlanDraftProjectScalarWhereInput = {
    AND?: Prisma.PlanDraftProjectScalarWhereInput | Prisma.PlanDraftProjectScalarWhereInput[];
    OR?: Prisma.PlanDraftProjectScalarWhereInput[];
    NOT?: Prisma.PlanDraftProjectScalarWhereInput | Prisma.PlanDraftProjectScalarWhereInput[];
    id?: Prisma.StringFilter<"PlanDraftProject"> | string;
    planDraftId?: Prisma.StringFilter<"PlanDraftProject"> | string;
    name?: Prisma.StringFilter<"PlanDraftProject"> | string;
    description?: Prisma.StringNullableFilter<"PlanDraftProject"> | string | null;
    sortOrder?: Prisma.IntFilter<"PlanDraftProject"> | number;
};
export type PlanDraftProjectCreateWithoutMilestonesInput = {
    id?: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
    planDraft: Prisma.PlanDraftCreateNestedOneWithoutProjectsInput;
};
export type PlanDraftProjectUncheckedCreateWithoutMilestonesInput = {
    id?: string;
    planDraftId: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
};
export type PlanDraftProjectCreateOrConnectWithoutMilestonesInput = {
    where: Prisma.PlanDraftProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutMilestonesInput, Prisma.PlanDraftProjectUncheckedCreateWithoutMilestonesInput>;
};
export type PlanDraftProjectUpsertWithoutMilestonesInput = {
    update: Prisma.XOR<Prisma.PlanDraftProjectUpdateWithoutMilestonesInput, Prisma.PlanDraftProjectUncheckedUpdateWithoutMilestonesInput>;
    create: Prisma.XOR<Prisma.PlanDraftProjectCreateWithoutMilestonesInput, Prisma.PlanDraftProjectUncheckedCreateWithoutMilestonesInput>;
    where?: Prisma.PlanDraftProjectWhereInput;
};
export type PlanDraftProjectUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: Prisma.PlanDraftProjectWhereInput;
    data: Prisma.XOR<Prisma.PlanDraftProjectUpdateWithoutMilestonesInput, Prisma.PlanDraftProjectUncheckedUpdateWithoutMilestonesInput>;
};
export type PlanDraftProjectUpdateWithoutMilestonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    planDraft?: Prisma.PlanDraftUpdateOneRequiredWithoutProjectsNestedInput;
};
export type PlanDraftProjectUncheckedUpdateWithoutMilestonesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    planDraftId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftProjectCreateManyPlanDraftInput = {
    id?: string;
    name: string;
    description?: string | null;
    sortOrder?: number;
};
export type PlanDraftProjectUpdateWithoutPlanDraftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    milestones?: Prisma.PlanDraftMilestoneUpdateManyWithoutPlanDraftProjectNestedInput;
};
export type PlanDraftProjectUncheckedUpdateWithoutPlanDraftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    milestones?: Prisma.PlanDraftMilestoneUncheckedUpdateManyWithoutPlanDraftProjectNestedInput;
};
export type PlanDraftProjectUncheckedUpdateManyWithoutPlanDraftInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PlanDraftProjectCountOutputType = {
    milestones: number;
};
export type PlanDraftProjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    milestones?: boolean | PlanDraftProjectCountOutputTypeCountMilestonesArgs;
};
export type PlanDraftProjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectCountOutputTypeSelect<ExtArgs> | null;
};
export type PlanDraftProjectCountOutputTypeCountMilestonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftMilestoneWhereInput;
};
export type PlanDraftProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftId?: boolean;
    name?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
    milestones?: boolean | Prisma.PlanDraftProject$milestonesArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanDraftProjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftProject"]>;
export type PlanDraftProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftId?: boolean;
    name?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftProject"]>;
export type PlanDraftProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    planDraftId?: boolean;
    name?: boolean;
    description?: boolean;
    sortOrder?: boolean;
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planDraftProject"]>;
export type PlanDraftProjectSelectScalar = {
    id?: boolean;
    planDraftId?: boolean;
    name?: boolean;
    description?: boolean;
    sortOrder?: boolean;
};
export type PlanDraftProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "planDraftId" | "name" | "description" | "sortOrder", ExtArgs["result"]["planDraftProject"]>;
export type PlanDraftProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
    milestones?: boolean | Prisma.PlanDraftProject$milestonesArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanDraftProjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlanDraftProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
};
export type PlanDraftProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planDraft?: boolean | Prisma.PlanDraftDefaultArgs<ExtArgs>;
};
export type $PlanDraftProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlanDraftProject";
    objects: {
        planDraft: Prisma.$PlanDraftPayload<ExtArgs>;
        milestones: Prisma.$PlanDraftMilestonePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        planDraftId: string;
        name: string;
        description: string | null;
        sortOrder: number;
    }, ExtArgs["result"]["planDraftProject"]>;
    composites: {};
};
export type PlanDraftProjectGetPayload<S extends boolean | null | undefined | PlanDraftProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload, S>;
export type PlanDraftProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanDraftProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanDraftProjectCountAggregateInputType | true;
};
export interface PlanDraftProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlanDraftProject'];
        meta: {
            name: 'PlanDraftProject';
        };
    };
    findUnique<T extends PlanDraftProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlanDraftProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlanDraftProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanDraftProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlanDraftProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanDraftProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlanDraftProjectFindManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlanDraftProjectCreateArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectCreateArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlanDraftProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlanDraftProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanDraftProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlanDraftProjectDeleteArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlanDraftProjectUpdateArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlanDraftProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanDraftProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlanDraftProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlanDraftProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlanDraftProjectUpsertArgs>(args: Prisma.SelectSubset<T, PlanDraftProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanDraftProjectClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlanDraftProjectCountArgs>(args?: Prisma.Subset<T, PlanDraftProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanDraftProjectCountAggregateOutputType> : number>;
    aggregate<T extends PlanDraftProjectAggregateArgs>(args: Prisma.Subset<T, PlanDraftProjectAggregateArgs>): Prisma.PrismaPromise<GetPlanDraftProjectAggregateType<T>>;
    groupBy<T extends PlanDraftProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanDraftProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanDraftProjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanDraftProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanDraftProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlanDraftProjectFieldRefs;
}
export interface Prisma__PlanDraftProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    planDraft<T extends Prisma.PlanDraftDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlanDraftDefaultArgs<ExtArgs>>): Prisma.Prisma__PlanDraftClient<runtime.Types.Result.GetResult<Prisma.$PlanDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    milestones<T extends Prisma.PlanDraftProject$milestonesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlanDraftProject$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanDraftMilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlanDraftProjectFieldRefs {
    readonly id: Prisma.FieldRef<"PlanDraftProject", 'String'>;
    readonly planDraftId: Prisma.FieldRef<"PlanDraftProject", 'String'>;
    readonly name: Prisma.FieldRef<"PlanDraftProject", 'String'>;
    readonly description: Prisma.FieldRef<"PlanDraftProject", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"PlanDraftProject", 'Int'>;
}
export type PlanDraftProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where: Prisma.PlanDraftProjectWhereUniqueInput;
};
export type PlanDraftProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where: Prisma.PlanDraftProjectWhereUniqueInput;
};
export type PlanDraftProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftProjectWhereInput;
    orderBy?: Prisma.PlanDraftProjectOrderByWithRelationInput | Prisma.PlanDraftProjectOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftProjectScalarFieldEnum | Prisma.PlanDraftProjectScalarFieldEnum[];
};
export type PlanDraftProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftProjectWhereInput;
    orderBy?: Prisma.PlanDraftProjectOrderByWithRelationInput | Prisma.PlanDraftProjectOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftProjectScalarFieldEnum | Prisma.PlanDraftProjectScalarFieldEnum[];
};
export type PlanDraftProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where?: Prisma.PlanDraftProjectWhereInput;
    orderBy?: Prisma.PlanDraftProjectOrderByWithRelationInput | Prisma.PlanDraftProjectOrderByWithRelationInput[];
    cursor?: Prisma.PlanDraftProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanDraftProjectScalarFieldEnum | Prisma.PlanDraftProjectScalarFieldEnum[];
};
export type PlanDraftProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftProjectCreateInput, Prisma.PlanDraftProjectUncheckedCreateInput>;
};
export type PlanDraftProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlanDraftProjectCreateManyInput | Prisma.PlanDraftProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlanDraftProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    data: Prisma.PlanDraftProjectCreateManyInput | Prisma.PlanDraftProjectCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PlanDraftProjectIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlanDraftProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftProjectUpdateInput, Prisma.PlanDraftProjectUncheckedUpdateInput>;
    where: Prisma.PlanDraftProjectWhereUniqueInput;
};
export type PlanDraftProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlanDraftProjectUpdateManyMutationInput, Prisma.PlanDraftProjectUncheckedUpdateManyInput>;
    where?: Prisma.PlanDraftProjectWhereInput;
    limit?: number;
};
export type PlanDraftProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanDraftProjectUpdateManyMutationInput, Prisma.PlanDraftProjectUncheckedUpdateManyInput>;
    where?: Prisma.PlanDraftProjectWhereInput;
    limit?: number;
    include?: Prisma.PlanDraftProjectIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlanDraftProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where: Prisma.PlanDraftProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanDraftProjectCreateInput, Prisma.PlanDraftProjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlanDraftProjectUpdateInput, Prisma.PlanDraftProjectUncheckedUpdateInput>;
};
export type PlanDraftProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
    where: Prisma.PlanDraftProjectWhereUniqueInput;
};
export type PlanDraftProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanDraftProjectWhereInput;
    limit?: number;
};
export type PlanDraftProject$milestonesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlanDraftProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanDraftProjectSelect<ExtArgs> | null;
    omit?: Prisma.PlanDraftProjectOmit<ExtArgs> | null;
    include?: Prisma.PlanDraftProjectInclude<ExtArgs> | null;
};
