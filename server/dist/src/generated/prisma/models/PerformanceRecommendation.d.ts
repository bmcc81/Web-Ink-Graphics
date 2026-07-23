import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerformanceRecommendationModel = runtime.Types.Result.DefaultSelection<Prisma.$PerformanceRecommendationPayload>;
export type AggregatePerformanceRecommendation = {
    _count: PerformanceRecommendationCountAggregateOutputType | null;
    _avg: PerformanceRecommendationAvgAggregateOutputType | null;
    _sum: PerformanceRecommendationSumAggregateOutputType | null;
    _min: PerformanceRecommendationMinAggregateOutputType | null;
    _max: PerformanceRecommendationMaxAggregateOutputType | null;
};
export type PerformanceRecommendationAvgAggregateOutputType = {
    confidenceScore: number | null;
};
export type PerformanceRecommendationSumAggregateOutputType = {
    confidenceScore: number | null;
};
export type PerformanceRecommendationMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    summary: string | null;
    confidenceScore: number | null;
    confidenceNotes: string | null;
    dataSummary: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type PerformanceRecommendationMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    summary: string | null;
    confidenceScore: number | null;
    confidenceNotes: string | null;
    dataSummary: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type PerformanceRecommendationCountAggregateOutputType = {
    id: number;
    projectId: number;
    summary: number;
    confidenceScore: number;
    confidenceNotes: number;
    dataSummary: number;
    createdById: number;
    createdAt: number;
    _all: number;
};
export type PerformanceRecommendationAvgAggregateInputType = {
    confidenceScore?: true;
};
export type PerformanceRecommendationSumAggregateInputType = {
    confidenceScore?: true;
};
export type PerformanceRecommendationMinAggregateInputType = {
    id?: true;
    projectId?: true;
    summary?: true;
    confidenceScore?: true;
    confidenceNotes?: true;
    dataSummary?: true;
    createdById?: true;
    createdAt?: true;
};
export type PerformanceRecommendationMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    summary?: true;
    confidenceScore?: true;
    confidenceNotes?: true;
    dataSummary?: true;
    createdById?: true;
    createdAt?: true;
};
export type PerformanceRecommendationCountAggregateInputType = {
    id?: true;
    projectId?: true;
    summary?: true;
    confidenceScore?: true;
    confidenceNotes?: true;
    dataSummary?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
};
export type PerformanceRecommendationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationWhereInput;
    orderBy?: Prisma.PerformanceRecommendationOrderByWithRelationInput | Prisma.PerformanceRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerformanceRecommendationCountAggregateInputType;
    _avg?: PerformanceRecommendationAvgAggregateInputType;
    _sum?: PerformanceRecommendationSumAggregateInputType;
    _min?: PerformanceRecommendationMinAggregateInputType;
    _max?: PerformanceRecommendationMaxAggregateInputType;
};
export type GetPerformanceRecommendationAggregateType<T extends PerformanceRecommendationAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformanceRecommendation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerformanceRecommendation[P]> : Prisma.GetScalarType<T[P], AggregatePerformanceRecommendation[P]>;
};
export type PerformanceRecommendationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationWhereInput;
    orderBy?: Prisma.PerformanceRecommendationOrderByWithAggregationInput | Prisma.PerformanceRecommendationOrderByWithAggregationInput[];
    by: Prisma.PerformanceRecommendationScalarFieldEnum[] | Prisma.PerformanceRecommendationScalarFieldEnum;
    having?: Prisma.PerformanceRecommendationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerformanceRecommendationCountAggregateInputType | true;
    _avg?: PerformanceRecommendationAvgAggregateInputType;
    _sum?: PerformanceRecommendationSumAggregateInputType;
    _min?: PerformanceRecommendationMinAggregateInputType;
    _max?: PerformanceRecommendationMaxAggregateInputType;
};
export type PerformanceRecommendationGroupByOutputType = {
    id: string;
    projectId: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdById: string;
    createdAt: Date;
    _count: PerformanceRecommendationCountAggregateOutputType | null;
    _avg: PerformanceRecommendationAvgAggregateOutputType | null;
    _sum: PerformanceRecommendationSumAggregateOutputType | null;
    _min: PerformanceRecommendationMinAggregateOutputType | null;
    _max: PerformanceRecommendationMaxAggregateOutputType | null;
};
export type GetPerformanceRecommendationGroupByPayload<T extends PerformanceRecommendationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerformanceRecommendationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerformanceRecommendationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerformanceRecommendationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerformanceRecommendationGroupByOutputType[P]>;
}>>;
export type PerformanceRecommendationWhereInput = {
    AND?: Prisma.PerformanceRecommendationWhereInput | Prisma.PerformanceRecommendationWhereInput[];
    OR?: Prisma.PerformanceRecommendationWhereInput[];
    NOT?: Prisma.PerformanceRecommendationWhereInput | Prisma.PerformanceRecommendationWhereInput[];
    id?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    projectId?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    summary?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    confidenceScore?: Prisma.IntFilter<"PerformanceRecommendation"> | number;
    confidenceNotes?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    dataSummary?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    createdById?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    createdAt?: Prisma.DateTimeFilter<"PerformanceRecommendation"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    items?: Prisma.PerformanceRecommendationItemListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PerformanceRecommendationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    confidenceNotes?: Prisma.SortOrder;
    dataSummary?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    items?: Prisma.PerformanceRecommendationItemOrderByRelationAggregateInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
};
export type PerformanceRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PerformanceRecommendationWhereInput | Prisma.PerformanceRecommendationWhereInput[];
    OR?: Prisma.PerformanceRecommendationWhereInput[];
    NOT?: Prisma.PerformanceRecommendationWhereInput | Prisma.PerformanceRecommendationWhereInput[];
    projectId?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    summary?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    confidenceScore?: Prisma.IntFilter<"PerformanceRecommendation"> | number;
    confidenceNotes?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    dataSummary?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    createdById?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    createdAt?: Prisma.DateTimeFilter<"PerformanceRecommendation"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    items?: Prisma.PerformanceRecommendationItemListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PerformanceRecommendationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    confidenceNotes?: Prisma.SortOrder;
    dataSummary?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PerformanceRecommendationCountOrderByAggregateInput;
    _avg?: Prisma.PerformanceRecommendationAvgOrderByAggregateInput;
    _max?: Prisma.PerformanceRecommendationMaxOrderByAggregateInput;
    _min?: Prisma.PerformanceRecommendationMinOrderByAggregateInput;
    _sum?: Prisma.PerformanceRecommendationSumOrderByAggregateInput;
};
export type PerformanceRecommendationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerformanceRecommendationScalarWhereWithAggregatesInput | Prisma.PerformanceRecommendationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerformanceRecommendationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerformanceRecommendationScalarWhereWithAggregatesInput | Prisma.PerformanceRecommendationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendation"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendation"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendation"> | string;
    confidenceScore?: Prisma.IntWithAggregatesFilter<"PerformanceRecommendation"> | number;
    confidenceNotes?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendation"> | string;
    dataSummary?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendation"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"PerformanceRecommendation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PerformanceRecommendation"> | Date | string;
};
export type PerformanceRecommendationCreateInput = {
    id?: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutPerformanceRecommendationsInput;
    items?: Prisma.PerformanceRecommendationItemCreateNestedManyWithoutPerformanceRecommendationInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedPerformanceRecommendationsInput;
};
export type PerformanceRecommendationUncheckedCreateInput = {
    id?: string;
    projectId: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdById: string;
    createdAt?: Date | string;
    items?: Prisma.PerformanceRecommendationItemUncheckedCreateNestedManyWithoutPerformanceRecommendationInput;
};
export type PerformanceRecommendationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutPerformanceRecommendationsNestedInput;
    items?: Prisma.PerformanceRecommendationItemUpdateManyWithoutPerformanceRecommendationNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedPerformanceRecommendationsNestedInput;
};
export type PerformanceRecommendationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PerformanceRecommendationItemUncheckedUpdateManyWithoutPerformanceRecommendationNestedInput;
};
export type PerformanceRecommendationCreateManyInput = {
    id?: string;
    projectId: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdById: string;
    createdAt?: Date | string;
};
export type PerformanceRecommendationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceRecommendationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceRecommendationListRelationFilter = {
    every?: Prisma.PerformanceRecommendationWhereInput;
    some?: Prisma.PerformanceRecommendationWhereInput;
    none?: Prisma.PerformanceRecommendationWhereInput;
};
export type PerformanceRecommendationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PerformanceRecommendationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    confidenceNotes?: Prisma.SortOrder;
    dataSummary?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceRecommendationAvgOrderByAggregateInput = {
    confidenceScore?: Prisma.SortOrder;
};
export type PerformanceRecommendationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    confidenceNotes?: Prisma.SortOrder;
    dataSummary?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceRecommendationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    confidenceNotes?: Prisma.SortOrder;
    dataSummary?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceRecommendationSumOrderByAggregateInput = {
    confidenceScore?: Prisma.SortOrder;
};
export type PerformanceRecommendationScalarRelationFilter = {
    is?: Prisma.PerformanceRecommendationWhereInput;
    isNot?: Prisma.PerformanceRecommendationWhereInput;
};
export type PerformanceRecommendationCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput> | Prisma.PerformanceRecommendationCreateWithoutCreatedByInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
};
export type PerformanceRecommendationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput> | Prisma.PerformanceRecommendationCreateWithoutCreatedByInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
};
export type PerformanceRecommendationUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput> | Prisma.PerformanceRecommendationCreateWithoutCreatedByInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyCreatedByInputEnvelope;
    set?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    disconnect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    delete?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    update?: Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutCreatedByInput | Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PerformanceRecommendationScalarWhereInput | Prisma.PerformanceRecommendationScalarWhereInput[];
};
export type PerformanceRecommendationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput> | Prisma.PerformanceRecommendationCreateWithoutCreatedByInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyCreatedByInputEnvelope;
    set?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    disconnect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    delete?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    update?: Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutCreatedByInput | Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PerformanceRecommendationScalarWhereInput | Prisma.PerformanceRecommendationScalarWhereInput[];
};
export type PerformanceRecommendationCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput> | Prisma.PerformanceRecommendationCreateWithoutProjectInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyProjectInputEnvelope;
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
};
export type PerformanceRecommendationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput> | Prisma.PerformanceRecommendationCreateWithoutProjectInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyProjectInputEnvelope;
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
};
export type PerformanceRecommendationUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput> | Prisma.PerformanceRecommendationCreateWithoutProjectInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutProjectInput | Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyProjectInputEnvelope;
    set?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    disconnect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    delete?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    update?: Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutProjectInput | Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutProjectInput | Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.PerformanceRecommendationScalarWhereInput | Prisma.PerformanceRecommendationScalarWhereInput[];
};
export type PerformanceRecommendationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput> | Prisma.PerformanceRecommendationCreateWithoutProjectInput[] | Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput | Prisma.PerformanceRecommendationCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutProjectInput | Prisma.PerformanceRecommendationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.PerformanceRecommendationCreateManyProjectInputEnvelope;
    set?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    disconnect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    delete?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput | Prisma.PerformanceRecommendationWhereUniqueInput[];
    update?: Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutProjectInput | Prisma.PerformanceRecommendationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutProjectInput | Prisma.PerformanceRecommendationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.PerformanceRecommendationScalarWhereInput | Prisma.PerformanceRecommendationScalarWhereInput[];
};
export type PerformanceRecommendationCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutItemsInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutItemsInput;
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput;
};
export type PerformanceRecommendationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutItemsInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PerformanceRecommendationCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.PerformanceRecommendationUpsertWithoutItemsInput;
    connect?: Prisma.PerformanceRecommendationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerformanceRecommendationUpdateToOneWithWhereWithoutItemsInput, Prisma.PerformanceRecommendationUpdateWithoutItemsInput>, Prisma.PerformanceRecommendationUncheckedUpdateWithoutItemsInput>;
};
export type PerformanceRecommendationCreateWithoutCreatedByInput = {
    id?: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutPerformanceRecommendationsInput;
    items?: Prisma.PerformanceRecommendationItemCreateNestedManyWithoutPerformanceRecommendationInput;
};
export type PerformanceRecommendationUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    projectId: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdAt?: Date | string;
    items?: Prisma.PerformanceRecommendationItemUncheckedCreateNestedManyWithoutPerformanceRecommendationInput;
};
export type PerformanceRecommendationCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput>;
};
export type PerformanceRecommendationCreateManyCreatedByInputEnvelope = {
    data: Prisma.PerformanceRecommendationCreateManyCreatedByInput | Prisma.PerformanceRecommendationCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type PerformanceRecommendationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerformanceRecommendationUpdateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutCreatedByInput>;
};
export type PerformanceRecommendationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateWithoutCreatedByInput, Prisma.PerformanceRecommendationUncheckedUpdateWithoutCreatedByInput>;
};
export type PerformanceRecommendationUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.PerformanceRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateManyMutationInput, Prisma.PerformanceRecommendationUncheckedUpdateManyWithoutCreatedByInput>;
};
export type PerformanceRecommendationScalarWhereInput = {
    AND?: Prisma.PerformanceRecommendationScalarWhereInput | Prisma.PerformanceRecommendationScalarWhereInput[];
    OR?: Prisma.PerformanceRecommendationScalarWhereInput[];
    NOT?: Prisma.PerformanceRecommendationScalarWhereInput | Prisma.PerformanceRecommendationScalarWhereInput[];
    id?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    projectId?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    summary?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    confidenceScore?: Prisma.IntFilter<"PerformanceRecommendation"> | number;
    confidenceNotes?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    dataSummary?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    createdById?: Prisma.StringFilter<"PerformanceRecommendation"> | string;
    createdAt?: Prisma.DateTimeFilter<"PerformanceRecommendation"> | Date | string;
};
export type PerformanceRecommendationCreateWithoutProjectInput = {
    id?: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdAt?: Date | string;
    items?: Prisma.PerformanceRecommendationItemCreateNestedManyWithoutPerformanceRecommendationInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedPerformanceRecommendationsInput;
};
export type PerformanceRecommendationUncheckedCreateWithoutProjectInput = {
    id?: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdById: string;
    createdAt?: Date | string;
    items?: Prisma.PerformanceRecommendationItemUncheckedCreateNestedManyWithoutPerformanceRecommendationInput;
};
export type PerformanceRecommendationCreateOrConnectWithoutProjectInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput>;
};
export type PerformanceRecommendationCreateManyProjectInputEnvelope = {
    data: Prisma.PerformanceRecommendationCreateManyProjectInput | Prisma.PerformanceRecommendationCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type PerformanceRecommendationUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerformanceRecommendationUpdateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutProjectInput>;
};
export type PerformanceRecommendationUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateWithoutProjectInput, Prisma.PerformanceRecommendationUncheckedUpdateWithoutProjectInput>;
};
export type PerformanceRecommendationUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.PerformanceRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateManyMutationInput, Prisma.PerformanceRecommendationUncheckedUpdateManyWithoutProjectInput>;
};
export type PerformanceRecommendationCreateWithoutItemsInput = {
    id?: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutPerformanceRecommendationsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedPerformanceRecommendationsInput;
};
export type PerformanceRecommendationUncheckedCreateWithoutItemsInput = {
    id?: string;
    projectId: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdById: string;
    createdAt?: Date | string;
};
export type PerformanceRecommendationCreateOrConnectWithoutItemsInput = {
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutItemsInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutItemsInput>;
};
export type PerformanceRecommendationUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.PerformanceRecommendationUpdateWithoutItemsInput, Prisma.PerformanceRecommendationUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateWithoutItemsInput, Prisma.PerformanceRecommendationUncheckedCreateWithoutItemsInput>;
    where?: Prisma.PerformanceRecommendationWhereInput;
};
export type PerformanceRecommendationUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.PerformanceRecommendationWhereInput;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateWithoutItemsInput, Prisma.PerformanceRecommendationUncheckedUpdateWithoutItemsInput>;
};
export type PerformanceRecommendationUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutPerformanceRecommendationsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedPerformanceRecommendationsNestedInput;
};
export type PerformanceRecommendationUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceRecommendationCreateManyCreatedByInput = {
    id?: string;
    projectId: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdAt?: Date | string;
};
export type PerformanceRecommendationUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutPerformanceRecommendationsNestedInput;
    items?: Prisma.PerformanceRecommendationItemUpdateManyWithoutPerformanceRecommendationNestedInput;
};
export type PerformanceRecommendationUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PerformanceRecommendationItemUncheckedUpdateManyWithoutPerformanceRecommendationNestedInput;
};
export type PerformanceRecommendationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceRecommendationCreateManyProjectInput = {
    id?: string;
    summary: string;
    confidenceScore: number;
    confidenceNotes: string;
    dataSummary: string;
    createdById: string;
    createdAt?: Date | string;
};
export type PerformanceRecommendationUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PerformanceRecommendationItemUpdateManyWithoutPerformanceRecommendationNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedPerformanceRecommendationsNestedInput;
};
export type PerformanceRecommendationUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PerformanceRecommendationItemUncheckedUpdateManyWithoutPerformanceRecommendationNestedInput;
};
export type PerformanceRecommendationUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.IntFieldUpdateOperationsInput | number;
    confidenceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    dataSummary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceRecommendationCountOutputType = {
    items: number;
};
export type PerformanceRecommendationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | PerformanceRecommendationCountOutputTypeCountItemsArgs;
};
export type PerformanceRecommendationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationCountOutputTypeSelect<ExtArgs> | null;
};
export type PerformanceRecommendationCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationItemWhereInput;
};
export type PerformanceRecommendationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    confidenceScore?: boolean;
    confidenceNotes?: boolean;
    dataSummary?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.PerformanceRecommendation$itemsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PerformanceRecommendationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceRecommendation"]>;
export type PerformanceRecommendationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    confidenceScore?: boolean;
    confidenceNotes?: boolean;
    dataSummary?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceRecommendation"]>;
export type PerformanceRecommendationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    confidenceScore?: boolean;
    confidenceNotes?: boolean;
    dataSummary?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceRecommendation"]>;
export type PerformanceRecommendationSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    confidenceScore?: boolean;
    confidenceNotes?: boolean;
    dataSummary?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
};
export type PerformanceRecommendationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "summary" | "confidenceScore" | "confidenceNotes" | "dataSummary" | "createdById" | "createdAt", ExtArgs["result"]["performanceRecommendation"]>;
export type PerformanceRecommendationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.PerformanceRecommendation$itemsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PerformanceRecommendationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PerformanceRecommendationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PerformanceRecommendationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PerformanceRecommendationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PerformanceRecommendation";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        items: Prisma.$PerformanceRecommendationItemPayload<ExtArgs>[];
        createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        summary: string;
        confidenceScore: number;
        confidenceNotes: string;
        dataSummary: string;
        createdById: string;
        createdAt: Date;
    }, ExtArgs["result"]["performanceRecommendation"]>;
    composites: {};
};
export type PerformanceRecommendationGetPayload<S extends boolean | null | undefined | PerformanceRecommendationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload, S>;
export type PerformanceRecommendationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerformanceRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerformanceRecommendationCountAggregateInputType | true;
};
export interface PerformanceRecommendationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PerformanceRecommendation'];
        meta: {
            name: 'PerformanceRecommendation';
        };
    };
    findUnique<T extends PerformanceRecommendationFindUniqueArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerformanceRecommendationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerformanceRecommendationFindFirstArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerformanceRecommendationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerformanceRecommendationFindManyArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerformanceRecommendationCreateArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationCreateArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerformanceRecommendationCreateManyArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerformanceRecommendationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerformanceRecommendationDeleteArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationDeleteArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerformanceRecommendationUpdateArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationUpdateArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerformanceRecommendationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerformanceRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerformanceRecommendationUpdateManyArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerformanceRecommendationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerformanceRecommendationUpsertArgs>(args: Prisma.SelectSubset<T, PerformanceRecommendationUpsertArgs<ExtArgs>>): Prisma.Prisma__PerformanceRecommendationClient<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerformanceRecommendationCountArgs>(args?: Prisma.Subset<T, PerformanceRecommendationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerformanceRecommendationCountAggregateOutputType> : number>;
    aggregate<T extends PerformanceRecommendationAggregateArgs>(args: Prisma.Subset<T, PerformanceRecommendationAggregateArgs>): Prisma.PrismaPromise<GetPerformanceRecommendationAggregateType<T>>;
    groupBy<T extends PerformanceRecommendationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerformanceRecommendationGroupByArgs['orderBy'];
    } : {
        orderBy?: PerformanceRecommendationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerformanceRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerformanceRecommendationFieldRefs;
}
export interface Prisma__PerformanceRecommendationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.PerformanceRecommendation$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerformanceRecommendation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceRecommendationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerformanceRecommendationFieldRefs {
    readonly id: Prisma.FieldRef<"PerformanceRecommendation", 'String'>;
    readonly projectId: Prisma.FieldRef<"PerformanceRecommendation", 'String'>;
    readonly summary: Prisma.FieldRef<"PerformanceRecommendation", 'String'>;
    readonly confidenceScore: Prisma.FieldRef<"PerformanceRecommendation", 'Int'>;
    readonly confidenceNotes: Prisma.FieldRef<"PerformanceRecommendation", 'String'>;
    readonly dataSummary: Prisma.FieldRef<"PerformanceRecommendation", 'String'>;
    readonly createdById: Prisma.FieldRef<"PerformanceRecommendation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PerformanceRecommendation", 'DateTime'>;
}
export type PerformanceRecommendationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
};
export type PerformanceRecommendationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
};
export type PerformanceRecommendationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where?: Prisma.PerformanceRecommendationWhereInput;
    orderBy?: Prisma.PerformanceRecommendationOrderByWithRelationInput | Prisma.PerformanceRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceRecommendationScalarFieldEnum | Prisma.PerformanceRecommendationScalarFieldEnum[];
};
export type PerformanceRecommendationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where?: Prisma.PerformanceRecommendationWhereInput;
    orderBy?: Prisma.PerformanceRecommendationOrderByWithRelationInput | Prisma.PerformanceRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceRecommendationScalarFieldEnum | Prisma.PerformanceRecommendationScalarFieldEnum[];
};
export type PerformanceRecommendationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where?: Prisma.PerformanceRecommendationWhereInput;
    orderBy?: Prisma.PerformanceRecommendationOrderByWithRelationInput | Prisma.PerformanceRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceRecommendationScalarFieldEnum | Prisma.PerformanceRecommendationScalarFieldEnum[];
};
export type PerformanceRecommendationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceRecommendationCreateInput, Prisma.PerformanceRecommendationUncheckedCreateInput>;
};
export type PerformanceRecommendationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerformanceRecommendationCreateManyInput | Prisma.PerformanceRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerformanceRecommendationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    data: Prisma.PerformanceRecommendationCreateManyInput | Prisma.PerformanceRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerformanceRecommendationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerformanceRecommendationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateInput, Prisma.PerformanceRecommendationUncheckedUpdateInput>;
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
};
export type PerformanceRecommendationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateManyMutationInput, Prisma.PerformanceRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceRecommendationWhereInput;
    limit?: number;
};
export type PerformanceRecommendationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceRecommendationUpdateManyMutationInput, Prisma.PerformanceRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceRecommendationWhereInput;
    limit?: number;
    include?: Prisma.PerformanceRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerformanceRecommendationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceRecommendationCreateInput, Prisma.PerformanceRecommendationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerformanceRecommendationUpdateInput, Prisma.PerformanceRecommendationUncheckedUpdateInput>;
};
export type PerformanceRecommendationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
    where: Prisma.PerformanceRecommendationWhereUniqueInput;
};
export type PerformanceRecommendationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceRecommendationWhereInput;
    limit?: number;
};
export type PerformanceRecommendation$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerformanceRecommendationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceRecommendationOmit<ExtArgs> | null;
    include?: Prisma.PerformanceRecommendationInclude<ExtArgs> | null;
};
