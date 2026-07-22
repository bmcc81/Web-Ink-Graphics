import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerformanceRecommendationItemModel = runtime.Types.Result.DefaultSelection<Prisma.$PerformanceRecommendationItemPayload>;
export type AggregatePerformanceRecommendationItem = {
    _count: PerformanceRecommendationItemCountAggregateOutputType | null;
    _avg: PerformanceRecommendationItemAvgAggregateOutputType | null;
    _sum: PerformanceRecommendationItemSumAggregateOutputType | null;
    _min: PerformanceRecommendationItemMinAggregateOutputType | null;
    _max: PerformanceRecommendationItemMaxAggregateOutputType | null;
};
export type PerformanceRecommendationItemAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PerformanceRecommendationItemSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PerformanceRecommendationItemMinAggregateOutputType = {
    id: string | null;
    performanceRecommendationId: string | null;
    title: string | null;
    rationale: string | null;
    priority: $Enums.RecommendationPriority | null;
    sortOrder: number | null;
};
export type PerformanceRecommendationItemMaxAggregateOutputType = {
    id: string | null;
    performanceRecommendationId: string | null;
    title: string | null;
    rationale: string | null;
    priority: $Enums.RecommendationPriority | null;
    sortOrder: number | null;
};
export type PerformanceRecommendationItemCountAggregateOutputType = {
    id: number;
    performanceRecommendationId: number;
    title: number;
    rationale: number;
    priority: number;
    sortOrder: number;
    _all: number;
};
export type PerformanceRecommendationItemAvgAggregateInputType = {
    sortOrder?: true;
};
export type PerformanceRecommendationItemSumAggregateInputType = {
    sortOrder?: true;
};
export type PerformanceRecommendationItemMinAggregateInputType = {
    id?: true;
    performanceRecommendationId?: true;
    title?: true;
    rationale?: true;
    priority?: true;
    sortOrder?: true;
};
export type PerformanceRecommendationItemMaxAggregateInputType = {
    id?: true;
    performanceRecommendationId?: true;
    title?: true;
    rationale?: true;
    priority?: true;
    sortOrder?: true;
};
export type PerformanceRecommendationItemCountAggregateInputType = {
    id?: true;
    performanceRecommendationId?: true;
    title?: true;
    rationale?: true;
    priority?: true;
    sortOrder?: true;
    _all?: true;
};
export type PerformanceRecommendationItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    orderBy?: Prisma.PerformanceRecommendationItemOrderByWithRelationInput | Prisma.PerformanceRecommendationItemOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerformanceRecommendationItemCountAggregateInputType;
    _avg?: PerformanceRecommendationItemAvgAggregateInputType;
    _sum?: PerformanceRecommendationItemSumAggregateInputType;
    _min?: PerformanceRecommendationItemMinAggregateInputType;
    _max?: PerformanceRecommendationItemMaxAggregateInputType;
};
export type GetPerformanceRecommendationItemAggregateType<T extends PerformanceRecommendationItemAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformanceRecommendationItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerformanceRecommendationItem[P]> : Prisma.GetScalarType<T[P], AggregatePerformanceRecommendationItem[P]>;
};
export type PerformanceRecommendationItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    orderBy?: Prisma.PerformanceRecommendationItemOrderByWithAggregationInput | Prisma.PerformanceRecommendationItemOrderByWithAggregationInput[];
    by: Prisma.PerformanceRecommendationItemScalarFieldEnum[] | Prisma.PerformanceRecommendationItemScalarFieldEnum;
    having?: Prisma.PerformanceRecommendationItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerformanceRecommendationItemCountAggregateInputType | true;
    _avg?: PerformanceRecommendationItemAvgAggregateInputType;
    _sum?: PerformanceRecommendationItemSumAggregateInputType;
    _min?: PerformanceRecommendationItemMinAggregateInputType;
    _max?: PerformanceRecommendationItemMaxAggregateInputType;
};
export type PerformanceRecommendationItemGroupByOutputType = {
    id: string;
    performanceRecommendationId: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder: number;
    _count: PerformanceRecommendationItemCountAggregateOutputType | null;
    _avg: PerformanceRecommendationItemAvgAggregateOutputType | null;
    _sum: PerformanceRecommendationItemSumAggregateOutputType | null;
    _min: PerformanceRecommendationItemMinAggregateOutputType | null;
    _max: PerformanceRecommendationItemMaxAggregateOutputType | null;
};
export type GetPerformanceRecommendationItemGroupByPayload<T extends PerformanceRecommendationItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerformanceRecommendationItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerformanceRecommendationItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerformanceRecommendationItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerformanceRecommendationItemGroupByOutputType[P]>;
}>>;
export type PerformanceRecommendationItemWhereInput = {
    AND?: Prisma.PerformanceRecommendationItemWhereInput | Prisma.PerformanceRecommendationItemWhereInput[];
    OR?: Prisma.PerformanceRecommendationItemWhereInput[];
    NOT?: Prisma.PerformanceRecommendationItemWhereInput | Prisma.PerformanceRecommendationItemWhereInput[];
    id?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    performanceRecommendationId?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    title?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    rationale?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    priority?: Prisma.EnumRecommendationPriorityFilter<"PerformanceRecommendationItem"> | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFilter<"PerformanceRecommendationItem"> | number;
    performanceRecommendation?: Prisma.XOR<Prisma.PerformanceRecommendationScalarRelationFilter, Prisma.PerformanceRecommendationWhereInput>;
};
export type PerformanceRecommendationItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    performanceRecommendationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    performanceRecommendation?: Prisma.PerformanceRecommendationOrderByWithRelationInput;
};
export type PerformanceRecommendationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PerformanceRecommendationItemWhereInput | Prisma.PerformanceRecommendationItemWhereInput[];
    OR?: Prisma.PerformanceRecommendationItemWhereInput[];
    NOT?: Prisma.PerformanceRecommendationItemWhereInput | Prisma.PerformanceRecommendationItemWhereInput[];
    performanceRecommendationId?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    title?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    rationale?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    priority?: Prisma.EnumRecommendationPriorityFilter<"PerformanceRecommendationItem"> | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFilter<"PerformanceRecommendationItem"> | number;
    performanceRecommendation?: Prisma.XOR<Prisma.PerformanceRecommendationScalarRelationFilter, Prisma.PerformanceRecommendationWhereInput>;
}, "id">;
export type PerformanceRecommendationItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    performanceRecommendationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.PerformanceRecommendationItemCountOrderByAggregateInput;
    _avg?: Prisma.PerformanceRecommendationItemAvgOrderByAggregateInput;
    _max?: Prisma.PerformanceRecommendationItemMaxOrderByAggregateInput;
    _min?: Prisma.PerformanceRecommendationItemMinOrderByAggregateInput;
    _sum?: Prisma.PerformanceRecommendationItemSumOrderByAggregateInput;
};
export type PerformanceRecommendationItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerformanceRecommendationItemScalarWhereWithAggregatesInput | Prisma.PerformanceRecommendationItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerformanceRecommendationItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerformanceRecommendationItemScalarWhereWithAggregatesInput | Prisma.PerformanceRecommendationItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendationItem"> | string;
    performanceRecommendationId?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendationItem"> | string;
    title?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendationItem"> | string;
    rationale?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendationItem"> | string;
    priority?: Prisma.EnumRecommendationPriorityWithAggregatesFilter<"PerformanceRecommendationItem"> | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PerformanceRecommendationItem"> | number;
};
export type PerformanceRecommendationItemCreateInput = {
    id?: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder?: number;
    performanceRecommendation: Prisma.PerformanceRecommendationCreateNestedOneWithoutItemsInput;
};
export type PerformanceRecommendationItemUncheckedCreateInput = {
    id?: string;
    performanceRecommendationId: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder?: number;
};
export type PerformanceRecommendationItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    performanceRecommendation?: Prisma.PerformanceRecommendationUpdateOneRequiredWithoutItemsNestedInput;
};
export type PerformanceRecommendationItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    performanceRecommendationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PerformanceRecommendationItemCreateManyInput = {
    id?: string;
    performanceRecommendationId: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder?: number;
};
export type PerformanceRecommendationItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PerformanceRecommendationItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    performanceRecommendationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PerformanceRecommendationItemListRelationFilter = {
    every?: Prisma.PerformanceRecommendationItemWhereInput;
    some?: Prisma.PerformanceRecommendationItemWhereInput;
    none?: Prisma.PerformanceRecommendationItemWhereInput;
};
export type PerformanceRecommendationItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PerformanceRecommendationItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    performanceRecommendationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PerformanceRecommendationItemAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PerformanceRecommendationItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    performanceRecommendationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PerformanceRecommendationItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    performanceRecommendationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PerformanceRecommendationItemSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PerformanceRecommendationItemCreateNestedManyWithoutPerformanceRecommendationInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput> | Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput[] | Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput[];
    createMany?: Prisma.PerformanceRecommendationItemCreateManyPerformanceRecommendationInputEnvelope;
    connect?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
};
export type PerformanceRecommendationItemUncheckedCreateNestedManyWithoutPerformanceRecommendationInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput> | Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput[] | Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput[];
    createMany?: Prisma.PerformanceRecommendationItemCreateManyPerformanceRecommendationInputEnvelope;
    connect?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
};
export type PerformanceRecommendationItemUpdateManyWithoutPerformanceRecommendationNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput> | Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput[] | Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput[];
    upsert?: Prisma.PerformanceRecommendationItemUpsertWithWhereUniqueWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemUpsertWithWhereUniqueWithoutPerformanceRecommendationInput[];
    createMany?: Prisma.PerformanceRecommendationItemCreateManyPerformanceRecommendationInputEnvelope;
    set?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    disconnect?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    delete?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    connect?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    update?: Prisma.PerformanceRecommendationItemUpdateWithWhereUniqueWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemUpdateWithWhereUniqueWithoutPerformanceRecommendationInput[];
    updateMany?: Prisma.PerformanceRecommendationItemUpdateManyWithWhereWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemUpdateManyWithWhereWithoutPerformanceRecommendationInput[];
    deleteMany?: Prisma.PerformanceRecommendationItemScalarWhereInput | Prisma.PerformanceRecommendationItemScalarWhereInput[];
};
export type PerformanceRecommendationItemUncheckedUpdateManyWithoutPerformanceRecommendationNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput> | Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput[] | Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput[];
    upsert?: Prisma.PerformanceRecommendationItemUpsertWithWhereUniqueWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemUpsertWithWhereUniqueWithoutPerformanceRecommendationInput[];
    createMany?: Prisma.PerformanceRecommendationItemCreateManyPerformanceRecommendationInputEnvelope;
    set?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    disconnect?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    delete?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    connect?: Prisma.PerformanceRecommendationItemWhereUniqueInput | Prisma.PerformanceRecommendationItemWhereUniqueInput[];
    update?: Prisma.PerformanceRecommendationItemUpdateWithWhereUniqueWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemUpdateWithWhereUniqueWithoutPerformanceRecommendationInput[];
    updateMany?: Prisma.PerformanceRecommendationItemUpdateManyWithWhereWithoutPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemUpdateManyWithWhereWithoutPerformanceRecommendationInput[];
    deleteMany?: Prisma.PerformanceRecommendationItemScalarWhereInput | Prisma.PerformanceRecommendationItemScalarWhereInput[];
};
export type EnumRecommendationPriorityFieldUpdateOperationsInput = {
    set?: $Enums.RecommendationPriority;
};
export type PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput = {
    id?: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder?: number;
};
export type PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput = {
    id?: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder?: number;
};
export type PerformanceRecommendationItemCreateOrConnectWithoutPerformanceRecommendationInput = {
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput>;
};
export type PerformanceRecommendationItemCreateManyPerformanceRecommendationInputEnvelope = {
    data: Prisma.PerformanceRecommendationItemCreateManyPerformanceRecommendationInput | Prisma.PerformanceRecommendationItemCreateManyPerformanceRecommendationInput[];
    skipDuplicates?: boolean;
};
export type PerformanceRecommendationItemUpsertWithWhereUniqueWithoutPerformanceRecommendationInput = {
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedUpdateWithoutPerformanceRecommendationInput>;
    create: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedCreateWithoutPerformanceRecommendationInput>;
};
export type PerformanceRecommendationItemUpdateWithWhereUniqueWithoutPerformanceRecommendationInput = {
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateWithoutPerformanceRecommendationInput, Prisma.PerformanceRecommendationItemUncheckedUpdateWithoutPerformanceRecommendationInput>;
};
export type PerformanceRecommendationItemUpdateManyWithWhereWithoutPerformanceRecommendationInput = {
    where: Prisma.PerformanceRecommendationItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateManyMutationInput, Prisma.PerformanceRecommendationItemUncheckedUpdateManyWithoutPerformanceRecommendationInput>;
};
export type PerformanceRecommendationItemScalarWhereInput = {
    AND?: Prisma.PerformanceRecommendationItemScalarWhereInput | Prisma.PerformanceRecommendationItemScalarWhereInput[];
    OR?: Prisma.PerformanceRecommendationItemScalarWhereInput[];
    NOT?: Prisma.PerformanceRecommendationItemScalarWhereInput | Prisma.PerformanceRecommendationItemScalarWhereInput[];
    id?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    performanceRecommendationId?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    title?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    rationale?: Prisma.StringFilter<"PerformanceRecommendationItem"> | string;
    priority?: Prisma.EnumRecommendationPriorityFilter<"PerformanceRecommendationItem"> | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFilter<"PerformanceRecommendationItem"> | number;
};
export type PerformanceRecommendationItemCreateManyPerformanceRecommendationInput = {
    id?: string;
    title: string;
    rationale: string;
    priority: $Enums.RecommendationPriority;
    sortOrder?: number;
};
export type PerformanceRecommendationItemUpdateWithoutPerformanceRecommendationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PerformanceRecommendationItemUncheckedUpdateWithoutPerformanceRecommendationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PerformanceRecommendationItemUncheckedUpdateManyWithoutPerformanceRecommendationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.EnumRecommendationPriorityFieldUpdateOperationsInput | $Enums.RecommendationPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PerformanceRecommendationItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    performanceRecommendationId?: boolean;
    title?: boolean;
    rationale?: boolean;
    priority?: boolean;
    sortOrder?: boolean;
    performanceRecommendation?: boolean | Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceRecommendationItem"]>;
export type PerformanceRecommendationItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    performanceRecommendationId?: boolean;
    title?: boolean;
    rationale?: boolean;
    priority?: boolean;
    sortOrder?: boolean;
    performanceRecommendation?: boolean | Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceRecommendationItem"]>;
export type PerformanceRecommendationItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    performanceRecommendationId?: boolean;
    title?: boolean;
    rationale?: boolean;
    priority?: boolean;
    sortOrder?: boolean;
    performanceRecommendation?: boolean | Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceRecommendationItem"]>;
export type PerformanceRecommendationItemSelectScalar = {
    id?: boolean;
    performanceRecommendationId?: boolean;
    title?: boolean;
    rationale?: boolean;
    priority?: boolean;
    sortOrder?: boolean;
};
export type PerformanceRecommendationItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "performanceRecommendationId" | "title" | "rationale" | "priority" | "sortOrder", ExtArgs["result"]["performanceRecommendationItem"]>;
export type PerformanceRecommendationItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    performanceRecommendation?: boolean | Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>;
};
export type PerformanceRecommendationItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    performanceRecommendation?: boolean | Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>;
};
export type PerformanceRecommendationItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    performanceRecommendation?: boolean | Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>;
};
export type $PerformanceRecommendationItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PerformanceRecommendationItem";
    objects: {
        performanceRecommendation: Prisma.$PerformanceRecommendationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        performanceRecommendationId: string;
        title: string;
        rationale: string;
        priority: $Enums.RecommendationPriority;
        sortOrder: number;
    }, ExtArgs["result"]["performanceRecommendationItem"]>;
    composites: {};
};
export type PerformanceRecommendationItemGetPayload<S extends boolean | null | undefined | PerformanceRecommendationItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload, S>;
export type PerformanceRecommendationItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerformanceRecommendationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerformanceRecommendationItemCountAggregateInputType | true;
};
export interface PerformanceRecommendationItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PerformanceRecommendationItem'];
        meta: {
            name: 'PerformanceRecommendationItem';
        };
    };
    findUnique<T extends PerformanceRecommendationItemFindUniqueArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerformanceRecommendationItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerformanceRecommendationItemFindFirstArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerformanceRecommendationItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerformanceRecommendationItemFindManyArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerformanceRecommendationItemCreateArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemCreateArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerformanceRecommendationItemCreateManyArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerformanceRecommendationItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerformanceRecommendationItemDeleteArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemDeleteArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerformanceRecommendationItemUpdateArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemUpdateArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerformanceRecommendationItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerformanceRecommendationItemUpdateManyArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerformanceRecommendationItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerformanceRecommendationItemUpsertArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationItemUpsertArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationItemClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerformanceRecommendationItemCountArgs>(args?: Prisma.Subset<T, PerformanceRecommendationItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerformanceRecommendationItemCountAggregateOutputType> : number>;
    aggregate<T extends PerformanceRecommendationItemAggregateArgs>(args: Prisma.Subset<T, PerformanceRecommendationItemAggregateArgs>): Prisma.PrismaPromise<GetPerformanceRecommendationItemAggregateType<T>>;
    groupBy<T extends PerformanceRecommendationItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerformanceRecommendationItemGroupByArgs['orderBy'];
    } : {
        orderBy?: PerformanceRecommendationItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerformanceRecommendationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceRecommendationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerformanceRecommendationItemFieldRefs;
}
export interface Prisma__PerformanceRecommendationItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    performanceRecommendation<T extends Prisma.PerformanceRecommendationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerformanceRecommendationDefaultArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerformanceRecommendationItemFieldRefs {
    readonly id: Prisma.FieldRef<"PerformanceRecommendationItem", 'String'>;
    readonly performanceRecommendationId: Prisma.FieldRef<"PerformanceRecommendationItem", 'String'>;
    readonly title: Prisma.FieldRef<"PerformanceRecommendationItem", 'String'>;
    readonly rationale: Prisma.FieldRef<"PerformanceRecommendationItem", 'String'>;
    readonly priority: Prisma.FieldRef<"PerformanceRecommendationItem", 'RecommendationPriority'>;
    readonly sortOrder: Prisma.FieldRef<"PerformanceRecommendationItem", 'Int'>;
}
export type PerformanceRecommendationItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
};
export type PerformanceRecommendationItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
};
export type PerformanceRecommendationItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    orderBy?: Prisma.PerformanceRecommendationItemOrderByWithRelationInput | Prisma.PerformanceRecommendationItemOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceRecommendationItemScalarFieldEnum | Prisma.PerformanceRecommendationItemScalarFieldEnum[];
};
export type PerformanceRecommendationItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    orderBy?: Prisma.PerformanceRecommendationItemOrderByWithRelationInput | Prisma.PerformanceRecommendationItemOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceRecommendationItemScalarFieldEnum | Prisma.PerformanceRecommendationItemScalarFieldEnum[];
};
export type PerformanceRecommendationItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    orderBy?: Prisma.PerformanceRecommendationItemOrderByWithRelationInput | Prisma.PerformanceRecommendationItemOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceRecommendationItemScalarFieldEnum | Prisma.PerformanceRecommendationItemScalarFieldEnum[];
};
export type PerformanceRecommendationItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateInput, Prisma.PerformanceRecommendationItemUncheckedCreateInput>;
};
export type PerformanceRecommendationItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerformanceRecommendationItemCreateManyInput | Prisma.PerformanceRecommendationItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerformanceRecommendationItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    data: Prisma.PerformanceRecommendationItemCreateManyInput | Prisma.PerformanceRecommendationItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerformanceRecommendationItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerformanceRecommendationItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateInput, Prisma.PerformanceRecommendationItemUncheckedUpdateInput>;
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
};
export type PerformanceRecommendationItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateManyMutationInput, Prisma.PerformanceRecommendationItemUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    limit?: number;
};
export type PerformanceRecommendationItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateManyMutationInput, Prisma.PerformanceRecommendationItemUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    limit?: number;
    include?: Prisma.PerformanceRecommendationItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerformanceRecommendationItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceRecommendationItemCreateInput, Prisma.PerformanceRecommendationItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerformanceRecommendationItemUpdateInput, Prisma.PerformanceRecommendationItemUncheckedUpdateInput>;
};
export type PerformanceRecommendationItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationItemWhereUniqueInput;
};
export type PerformanceRecommendationItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationItemWhereInput;
    limit?: number;
};
export type PerformanceRecommendationItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationItemSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationItemOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationItemInclude<ExtArgs> | null;
};
