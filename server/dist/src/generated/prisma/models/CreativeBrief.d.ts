import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CreativeBriefModel = runtime.Types.Result.DefaultSelection<Prisma.$CreativeBriefPayload>;
export type AggregateCreativeBrief = {
    _count: CreativeBriefCountAggregateOutputType | null;
    _avg: CreativeBriefAvgAggregateOutputType | null;
    _sum: CreativeBriefSumAggregateOutputType | null;
    _min: CreativeBriefMinAggregateOutputType | null;
    _max: CreativeBriefMaxAggregateOutputType | null;
};
export type CreativeBriefAvgAggregateOutputType = {
    readinessScore: number | null;
};
export type CreativeBriefSumAggregateOutputType = {
    readinessScore: number | null;
};
export type CreativeBriefMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    summary: string | null;
    audienceNotes: string | null;
    copyAngles: string | null;
    layoutDirection: string | null;
    readinessScore: number | null;
    readinessNotes: string | null;
    status: $Enums.CreativeBriefStatus | null;
    createdById: string | null;
    approvedById: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CreativeBriefMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    summary: string | null;
    audienceNotes: string | null;
    copyAngles: string | null;
    layoutDirection: string | null;
    readinessScore: number | null;
    readinessNotes: string | null;
    status: $Enums.CreativeBriefStatus | null;
    createdById: string | null;
    approvedById: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CreativeBriefCountAggregateOutputType = {
    id: number;
    projectId: number;
    summary: number;
    audienceNotes: number;
    copyAngles: number;
    layoutDirection: number;
    readinessScore: number;
    readinessNotes: number;
    status: number;
    createdById: number;
    approvedById: number;
    approvedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CreativeBriefAvgAggregateInputType = {
    readinessScore?: true;
};
export type CreativeBriefSumAggregateInputType = {
    readinessScore?: true;
};
export type CreativeBriefMinAggregateInputType = {
    id?: true;
    projectId?: true;
    summary?: true;
    audienceNotes?: true;
    copyAngles?: true;
    layoutDirection?: true;
    readinessScore?: true;
    readinessNotes?: true;
    status?: true;
    createdById?: true;
    approvedById?: true;
    approvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CreativeBriefMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    summary?: true;
    audienceNotes?: true;
    copyAngles?: true;
    layoutDirection?: true;
    readinessScore?: true;
    readinessNotes?: true;
    status?: true;
    createdById?: true;
    approvedById?: true;
    approvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CreativeBriefCountAggregateInputType = {
    id?: true;
    projectId?: true;
    summary?: true;
    audienceNotes?: true;
    copyAngles?: true;
    layoutDirection?: true;
    readinessScore?: true;
    readinessNotes?: true;
    status?: true;
    createdById?: true;
    approvedById?: true;
    approvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CreativeBriefAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefWhereInput;
    orderBy?: Prisma.CreativeBriefOrderByWithRelationInput | Prisma.CreativeBriefOrderByWithRelationInput[];
    cursor?: Prisma.CreativeBriefWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CreativeBriefCountAggregateInputType;
    _avg?: CreativeBriefAvgAggregateInputType;
    _sum?: CreativeBriefSumAggregateInputType;
    _min?: CreativeBriefMinAggregateInputType;
    _max?: CreativeBriefMaxAggregateInputType;
};
export type GetCreativeBriefAggregateType<T extends CreativeBriefAggregateArgs> = {
    [P in keyof T & keyof AggregateCreativeBrief]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCreativeBrief[P]> : Prisma.GetScalarType<T[P], AggregateCreativeBrief[P]>;
};
export type CreativeBriefGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefWhereInput;
    orderBy?: Prisma.CreativeBriefOrderByWithAggregationInput | Prisma.CreativeBriefOrderByWithAggregationInput[];
    by: Prisma.CreativeBriefScalarFieldEnum[] | Prisma.CreativeBriefScalarFieldEnum;
    having?: Prisma.CreativeBriefScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreativeBriefCountAggregateInputType | true;
    _avg?: CreativeBriefAvgAggregateInputType;
    _sum?: CreativeBriefSumAggregateInputType;
    _min?: CreativeBriefMinAggregateInputType;
    _max?: CreativeBriefMaxAggregateInputType;
};
export type CreativeBriefGroupByOutputType = {
    id: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedById: string | null;
    approvedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CreativeBriefCountAggregateOutputType | null;
    _avg: CreativeBriefAvgAggregateOutputType | null;
    _sum: CreativeBriefSumAggregateOutputType | null;
    _min: CreativeBriefMinAggregateOutputType | null;
    _max: CreativeBriefMaxAggregateOutputType | null;
};
export type GetCreativeBriefGroupByPayload<T extends CreativeBriefGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreativeBriefGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreativeBriefGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreativeBriefGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreativeBriefGroupByOutputType[P]>;
}>>;
export type CreativeBriefWhereInput = {
    AND?: Prisma.CreativeBriefWhereInput | Prisma.CreativeBriefWhereInput[];
    OR?: Prisma.CreativeBriefWhereInput[];
    NOT?: Prisma.CreativeBriefWhereInput | Prisma.CreativeBriefWhereInput[];
    id?: Prisma.StringFilter<"CreativeBrief"> | string;
    projectId?: Prisma.StringFilter<"CreativeBrief"> | string;
    summary?: Prisma.StringFilter<"CreativeBrief"> | string;
    audienceNotes?: Prisma.StringFilter<"CreativeBrief"> | string;
    copyAngles?: Prisma.StringFilter<"CreativeBrief"> | string;
    layoutDirection?: Prisma.StringFilter<"CreativeBrief"> | string;
    readinessScore?: Prisma.IntFilter<"CreativeBrief"> | number;
    readinessNotes?: Prisma.StringFilter<"CreativeBrief"> | string;
    status?: Prisma.EnumCreativeBriefStatusFilter<"CreativeBrief"> | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFilter<"CreativeBrief"> | string;
    approvedById?: Prisma.StringNullableFilter<"CreativeBrief"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"CreativeBrief"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreativeBrief"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CreativeBrief"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    variants?: Prisma.CreativeBriefVariantListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type CreativeBriefOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    audienceNotes?: Prisma.SortOrder;
    copyAngles?: Prisma.SortOrder;
    layoutDirection?: Prisma.SortOrder;
    readinessScore?: Prisma.SortOrder;
    readinessNotes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    variants?: Prisma.CreativeBriefVariantOrderByRelationAggregateInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    approvedBy?: Prisma.UserOrderByWithRelationInput;
};
export type CreativeBriefWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CreativeBriefWhereInput | Prisma.CreativeBriefWhereInput[];
    OR?: Prisma.CreativeBriefWhereInput[];
    NOT?: Prisma.CreativeBriefWhereInput | Prisma.CreativeBriefWhereInput[];
    projectId?: Prisma.StringFilter<"CreativeBrief"> | string;
    summary?: Prisma.StringFilter<"CreativeBrief"> | string;
    audienceNotes?: Prisma.StringFilter<"CreativeBrief"> | string;
    copyAngles?: Prisma.StringFilter<"CreativeBrief"> | string;
    layoutDirection?: Prisma.StringFilter<"CreativeBrief"> | string;
    readinessScore?: Prisma.IntFilter<"CreativeBrief"> | number;
    readinessNotes?: Prisma.StringFilter<"CreativeBrief"> | string;
    status?: Prisma.EnumCreativeBriefStatusFilter<"CreativeBrief"> | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFilter<"CreativeBrief"> | string;
    approvedById?: Prisma.StringNullableFilter<"CreativeBrief"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"CreativeBrief"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreativeBrief"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CreativeBrief"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    variants?: Prisma.CreativeBriefVariantListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type CreativeBriefOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    audienceNotes?: Prisma.SortOrder;
    copyAngles?: Prisma.SortOrder;
    layoutDirection?: Prisma.SortOrder;
    readinessScore?: Prisma.SortOrder;
    readinessNotes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CreativeBriefCountOrderByAggregateInput;
    _avg?: Prisma.CreativeBriefAvgOrderByAggregateInput;
    _max?: Prisma.CreativeBriefMaxOrderByAggregateInput;
    _min?: Prisma.CreativeBriefMinOrderByAggregateInput;
    _sum?: Prisma.CreativeBriefSumOrderByAggregateInput;
};
export type CreativeBriefScalarWhereWithAggregatesInput = {
    AND?: Prisma.CreativeBriefScalarWhereWithAggregatesInput | Prisma.CreativeBriefScalarWhereWithAggregatesInput[];
    OR?: Prisma.CreativeBriefScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CreativeBriefScalarWhereWithAggregatesInput | Prisma.CreativeBriefScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    audienceNotes?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    copyAngles?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    layoutDirection?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    readinessScore?: Prisma.IntWithAggregatesFilter<"CreativeBrief"> | number;
    readinessNotes?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    status?: Prisma.EnumCreativeBriefStatusWithAggregatesFilter<"CreativeBrief"> | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringWithAggregatesFilter<"CreativeBrief"> | string;
    approvedById?: Prisma.StringNullableWithAggregatesFilter<"CreativeBrief"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CreativeBrief"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CreativeBrief"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CreativeBrief"> | Date | string;
};
export type CreativeBriefCreateInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutCreativeBriefsInput;
    variants?: Prisma.CreativeBriefVariantCreateNestedManyWithoutCreativeBriefInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCreativeBriefsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedCreativeBriefsInput;
};
export type CreativeBriefUncheckedCreateInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedCreateNestedManyWithoutCreativeBriefInput;
};
export type CreativeBriefUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutCreativeBriefsNestedInput;
    variants?: Prisma.CreativeBriefVariantUpdateManyWithoutCreativeBriefNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCreativeBriefsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedCreativeBriefsNestedInput;
};
export type CreativeBriefUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefNestedInput;
};
export type CreativeBriefCreateManyInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreativeBriefUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreativeBriefUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreativeBriefListRelationFilter = {
    every?: Prisma.CreativeBriefWhereInput;
    some?: Prisma.CreativeBriefWhereInput;
    none?: Prisma.CreativeBriefWhereInput;
};
export type CreativeBriefOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CreativeBriefCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    audienceNotes?: Prisma.SortOrder;
    copyAngles?: Prisma.SortOrder;
    layoutDirection?: Prisma.SortOrder;
    readinessScore?: Prisma.SortOrder;
    readinessNotes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CreativeBriefAvgOrderByAggregateInput = {
    readinessScore?: Prisma.SortOrder;
};
export type CreativeBriefMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    audienceNotes?: Prisma.SortOrder;
    copyAngles?: Prisma.SortOrder;
    layoutDirection?: Prisma.SortOrder;
    readinessScore?: Prisma.SortOrder;
    readinessNotes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CreativeBriefMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    audienceNotes?: Prisma.SortOrder;
    copyAngles?: Prisma.SortOrder;
    layoutDirection?: Prisma.SortOrder;
    readinessScore?: Prisma.SortOrder;
    readinessNotes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    approvedById?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CreativeBriefSumOrderByAggregateInput = {
    readinessScore?: Prisma.SortOrder;
};
export type CreativeBriefScalarRelationFilter = {
    is?: Prisma.CreativeBriefWhereInput;
    isNot?: Prisma.CreativeBriefWhereInput;
};
export type CreativeBriefCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput> | Prisma.CreativeBriefCreateWithoutCreatedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput | Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyCreatedByInputEnvelope;
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
};
export type CreativeBriefCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput> | Prisma.CreativeBriefCreateWithoutApprovedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput | Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyApprovedByInputEnvelope;
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
};
export type CreativeBriefUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput> | Prisma.CreativeBriefCreateWithoutCreatedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput | Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyCreatedByInputEnvelope;
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
};
export type CreativeBriefUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput> | Prisma.CreativeBriefCreateWithoutApprovedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput | Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyApprovedByInputEnvelope;
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
};
export type CreativeBriefUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput> | Prisma.CreativeBriefCreateWithoutCreatedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput | Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.CreativeBriefUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.CreativeBriefUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyCreatedByInputEnvelope;
    set?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    delete?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    update?: Prisma.CreativeBriefUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.CreativeBriefUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.CreativeBriefUpdateManyWithWhereWithoutCreatedByInput | Prisma.CreativeBriefUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
};
export type CreativeBriefUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput> | Prisma.CreativeBriefCreateWithoutApprovedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput | Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.CreativeBriefUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.CreativeBriefUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyApprovedByInputEnvelope;
    set?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    delete?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    update?: Prisma.CreativeBriefUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.CreativeBriefUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.CreativeBriefUpdateManyWithWhereWithoutApprovedByInput | Prisma.CreativeBriefUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
};
export type CreativeBriefUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput> | Prisma.CreativeBriefCreateWithoutCreatedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput | Prisma.CreativeBriefCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.CreativeBriefUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.CreativeBriefUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyCreatedByInputEnvelope;
    set?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    delete?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    update?: Prisma.CreativeBriefUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.CreativeBriefUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.CreativeBriefUpdateManyWithWhereWithoutCreatedByInput | Prisma.CreativeBriefUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
};
export type CreativeBriefUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput> | Prisma.CreativeBriefCreateWithoutApprovedByInput[] | Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput | Prisma.CreativeBriefCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.CreativeBriefUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.CreativeBriefUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.CreativeBriefCreateManyApprovedByInputEnvelope;
    set?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    delete?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    update?: Prisma.CreativeBriefUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.CreativeBriefUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.CreativeBriefUpdateManyWithWhereWithoutApprovedByInput | Prisma.CreativeBriefUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
};
export type CreativeBriefCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutProjectInput, Prisma.CreativeBriefUncheckedCreateWithoutProjectInput> | Prisma.CreativeBriefCreateWithoutProjectInput[] | Prisma.CreativeBriefUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutProjectInput | Prisma.CreativeBriefCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.CreativeBriefCreateManyProjectInputEnvelope;
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
};
export type CreativeBriefUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutProjectInput, Prisma.CreativeBriefUncheckedCreateWithoutProjectInput> | Prisma.CreativeBriefCreateWithoutProjectInput[] | Prisma.CreativeBriefUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutProjectInput | Prisma.CreativeBriefCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.CreativeBriefCreateManyProjectInputEnvelope;
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
};
export type CreativeBriefUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutProjectInput, Prisma.CreativeBriefUncheckedCreateWithoutProjectInput> | Prisma.CreativeBriefCreateWithoutProjectInput[] | Prisma.CreativeBriefUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutProjectInput | Prisma.CreativeBriefCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.CreativeBriefUpsertWithWhereUniqueWithoutProjectInput | Prisma.CreativeBriefUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.CreativeBriefCreateManyProjectInputEnvelope;
    set?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    delete?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    update?: Prisma.CreativeBriefUpdateWithWhereUniqueWithoutProjectInput | Prisma.CreativeBriefUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.CreativeBriefUpdateManyWithWhereWithoutProjectInput | Prisma.CreativeBriefUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
};
export type CreativeBriefUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutProjectInput, Prisma.CreativeBriefUncheckedCreateWithoutProjectInput> | Prisma.CreativeBriefCreateWithoutProjectInput[] | Prisma.CreativeBriefUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutProjectInput | Prisma.CreativeBriefCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.CreativeBriefUpsertWithWhereUniqueWithoutProjectInput | Prisma.CreativeBriefUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.CreativeBriefCreateManyProjectInputEnvelope;
    set?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    delete?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    connect?: Prisma.CreativeBriefWhereUniqueInput | Prisma.CreativeBriefWhereUniqueInput[];
    update?: Prisma.CreativeBriefUpdateWithWhereUniqueWithoutProjectInput | Prisma.CreativeBriefUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.CreativeBriefUpdateManyWithWhereWithoutProjectInput | Prisma.CreativeBriefUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
};
export type EnumCreativeBriefStatusFieldUpdateOperationsInput = {
    set?: $Enums.CreativeBriefStatus;
};
export type CreativeBriefCreateNestedOneWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutVariantsInput, Prisma.CreativeBriefUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutVariantsInput;
    connect?: Prisma.CreativeBriefWhereUniqueInput;
};
export type CreativeBriefUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefCreateWithoutVariantsInput, Prisma.CreativeBriefUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.CreativeBriefCreateOrConnectWithoutVariantsInput;
    upsert?: Prisma.CreativeBriefUpsertWithoutVariantsInput;
    connect?: Prisma.CreativeBriefWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CreativeBriefUpdateToOneWithWhereWithoutVariantsInput, Prisma.CreativeBriefUpdateWithoutVariantsInput>, Prisma.CreativeBriefUncheckedUpdateWithoutVariantsInput>;
};
export type CreativeBriefCreateWithoutCreatedByInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutCreativeBriefsInput;
    variants?: Prisma.CreativeBriefVariantCreateNestedManyWithoutCreativeBriefInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedCreativeBriefsInput;
};
export type CreativeBriefUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedCreateNestedManyWithoutCreativeBriefInput;
};
export type CreativeBriefCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput>;
};
export type CreativeBriefCreateManyCreatedByInputEnvelope = {
    data: Prisma.CreativeBriefCreateManyCreatedByInput | Prisma.CreativeBriefCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type CreativeBriefCreateWithoutApprovedByInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutCreativeBriefsInput;
    variants?: Prisma.CreativeBriefVariantCreateNestedManyWithoutCreativeBriefInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCreativeBriefsInput;
};
export type CreativeBriefUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedCreateNestedManyWithoutCreativeBriefInput;
};
export type CreativeBriefCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput>;
};
export type CreativeBriefCreateManyApprovedByInputEnvelope = {
    data: Prisma.CreativeBriefCreateManyApprovedByInput | Prisma.CreativeBriefCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type CreativeBriefUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedCreateWithoutCreatedByInput>;
};
export type CreativeBriefUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutCreatedByInput, Prisma.CreativeBriefUncheckedUpdateWithoutCreatedByInput>;
};
export type CreativeBriefUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.CreativeBriefScalarWhereInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateManyMutationInput, Prisma.CreativeBriefUncheckedUpdateManyWithoutCreatedByInput>;
};
export type CreativeBriefScalarWhereInput = {
    AND?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
    OR?: Prisma.CreativeBriefScalarWhereInput[];
    NOT?: Prisma.CreativeBriefScalarWhereInput | Prisma.CreativeBriefScalarWhereInput[];
    id?: Prisma.StringFilter<"CreativeBrief"> | string;
    projectId?: Prisma.StringFilter<"CreativeBrief"> | string;
    summary?: Prisma.StringFilter<"CreativeBrief"> | string;
    audienceNotes?: Prisma.StringFilter<"CreativeBrief"> | string;
    copyAngles?: Prisma.StringFilter<"CreativeBrief"> | string;
    layoutDirection?: Prisma.StringFilter<"CreativeBrief"> | string;
    readinessScore?: Prisma.IntFilter<"CreativeBrief"> | number;
    readinessNotes?: Prisma.StringFilter<"CreativeBrief"> | string;
    status?: Prisma.EnumCreativeBriefStatusFilter<"CreativeBrief"> | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFilter<"CreativeBrief"> | string;
    approvedById?: Prisma.StringNullableFilter<"CreativeBrief"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"CreativeBrief"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CreativeBrief"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CreativeBrief"> | Date | string;
};
export type CreativeBriefUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedCreateWithoutApprovedByInput>;
};
export type CreativeBriefUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutApprovedByInput, Prisma.CreativeBriefUncheckedUpdateWithoutApprovedByInput>;
};
export type CreativeBriefUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.CreativeBriefScalarWhereInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateManyMutationInput, Prisma.CreativeBriefUncheckedUpdateManyWithoutApprovedByInput>;
};
export type CreativeBriefCreateWithoutProjectInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.CreativeBriefVariantCreateNestedManyWithoutCreativeBriefInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCreativeBriefsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedCreativeBriefsInput;
};
export type CreativeBriefUncheckedCreateWithoutProjectInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedCreateNestedManyWithoutCreativeBriefInput;
};
export type CreativeBriefCreateOrConnectWithoutProjectInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutProjectInput, Prisma.CreativeBriefUncheckedCreateWithoutProjectInput>;
};
export type CreativeBriefCreateManyProjectInputEnvelope = {
    data: Prisma.CreativeBriefCreateManyProjectInput | Prisma.CreativeBriefCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type CreativeBriefUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutProjectInput, Prisma.CreativeBriefUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutProjectInput, Prisma.CreativeBriefUncheckedCreateWithoutProjectInput>;
};
export type CreativeBriefUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutProjectInput, Prisma.CreativeBriefUncheckedUpdateWithoutProjectInput>;
};
export type CreativeBriefUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.CreativeBriefScalarWhereInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateManyMutationInput, Prisma.CreativeBriefUncheckedUpdateManyWithoutProjectInput>;
};
export type CreativeBriefCreateWithoutVariantsInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutCreativeBriefsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedCreativeBriefsInput;
    approvedBy?: Prisma.UserCreateNestedOneWithoutApprovedCreativeBriefsInput;
};
export type CreativeBriefUncheckedCreateWithoutVariantsInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreativeBriefCreateOrConnectWithoutVariantsInput = {
    where: Prisma.CreativeBriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutVariantsInput, Prisma.CreativeBriefUncheckedCreateWithoutVariantsInput>;
};
export type CreativeBriefUpsertWithoutVariantsInput = {
    update: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutVariantsInput, Prisma.CreativeBriefUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.CreativeBriefCreateWithoutVariantsInput, Prisma.CreativeBriefUncheckedCreateWithoutVariantsInput>;
    where?: Prisma.CreativeBriefWhereInput;
};
export type CreativeBriefUpdateToOneWithWhereWithoutVariantsInput = {
    where?: Prisma.CreativeBriefWhereInput;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateWithoutVariantsInput, Prisma.CreativeBriefUncheckedUpdateWithoutVariantsInput>;
};
export type CreativeBriefUpdateWithoutVariantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutCreativeBriefsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCreativeBriefsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedCreativeBriefsNestedInput;
};
export type CreativeBriefUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreativeBriefCreateManyCreatedByInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreativeBriefCreateManyApprovedByInput = {
    id?: string;
    projectId: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreativeBriefUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutCreativeBriefsNestedInput;
    variants?: Prisma.CreativeBriefVariantUpdateManyWithoutCreativeBriefNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedCreativeBriefsNestedInput;
};
export type CreativeBriefUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefNestedInput;
};
export type CreativeBriefUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreativeBriefUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutCreativeBriefsNestedInput;
    variants?: Prisma.CreativeBriefVariantUpdateManyWithoutCreativeBriefNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCreativeBriefsNestedInput;
};
export type CreativeBriefUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefNestedInput;
};
export type CreativeBriefUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreativeBriefCreateManyProjectInput = {
    id?: string;
    summary: string;
    audienceNotes: string;
    copyAngles: string;
    layoutDirection: string;
    readinessScore: number;
    readinessNotes: string;
    status?: $Enums.CreativeBriefStatus;
    createdById: string;
    approvedById?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CreativeBriefUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.CreativeBriefVariantUpdateManyWithoutCreativeBriefNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedCreativeBriefsNestedInput;
    approvedBy?: Prisma.UserUpdateOneWithoutApprovedCreativeBriefsNestedInput;
};
export type CreativeBriefUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefNestedInput;
};
export type CreativeBriefUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    audienceNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngles?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutDirection?: Prisma.StringFieldUpdateOperationsInput | string;
    readinessScore?: Prisma.IntFieldUpdateOperationsInput | number;
    readinessNotes?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCreativeBriefStatusFieldUpdateOperationsInput | $Enums.CreativeBriefStatus;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CreativeBriefCountOutputType = {
    variants: number;
};
export type CreativeBriefCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variants?: boolean | CreativeBriefCountOutputTypeCountVariantsArgs;
};
export type CreativeBriefCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefCountOutputTypeSelect<ExtArgs> | null;
};
export type CreativeBriefCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefVariantWhereInput;
};
export type CreativeBriefSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    audienceNotes?: boolean;
    copyAngles?: boolean;
    layoutDirection?: boolean;
    readinessScore?: boolean;
    readinessNotes?: boolean;
    status?: boolean;
    createdById?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.CreativeBrief$variantsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.CreativeBrief$approvedByArgs<ExtArgs>;
    _count?: boolean | Prisma.CreativeBriefCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creativeBrief"]>;
export type CreativeBriefSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    audienceNotes?: boolean;
    copyAngles?: boolean;
    layoutDirection?: boolean;
    readinessScore?: boolean;
    readinessNotes?: boolean;
    status?: boolean;
    createdById?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.CreativeBrief$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["creativeBrief"]>;
export type CreativeBriefSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    audienceNotes?: boolean;
    copyAngles?: boolean;
    layoutDirection?: boolean;
    readinessScore?: boolean;
    readinessNotes?: boolean;
    status?: boolean;
    createdById?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.CreativeBrief$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["creativeBrief"]>;
export type CreativeBriefSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    summary?: boolean;
    audienceNotes?: boolean;
    copyAngles?: boolean;
    layoutDirection?: boolean;
    readinessScore?: boolean;
    readinessNotes?: boolean;
    status?: boolean;
    createdById?: boolean;
    approvedById?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CreativeBriefOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "summary" | "audienceNotes" | "copyAngles" | "layoutDirection" | "readinessScore" | "readinessNotes" | "status" | "createdById" | "approvedById" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["creativeBrief"]>;
export type CreativeBriefInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.CreativeBrief$variantsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.CreativeBrief$approvedByArgs<ExtArgs>;
    _count?: boolean | Prisma.CreativeBriefCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CreativeBriefIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.CreativeBrief$approvedByArgs<ExtArgs>;
};
export type CreativeBriefIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.CreativeBrief$approvedByArgs<ExtArgs>;
};
export type $CreativeBriefPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CreativeBrief";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        variants: Prisma.$CreativeBriefVariantPayload<ExtArgs>[];
        createdBy: Prisma.$UserPayload<ExtArgs>;
        approvedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        summary: string;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
        status: $Enums.CreativeBriefStatus;
        createdById: string;
        approvedById: string | null;
        approvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["creativeBrief"]>;
    composites: {};
};
export type CreativeBriefGetPayload<S extends boolean | null | undefined | CreativeBriefDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload, S>;
export type CreativeBriefCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CreativeBriefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreativeBriefCountAggregateInputType | true;
};
export interface CreativeBriefDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CreativeBrief'];
        meta: {
            name: 'CreativeBrief';
        };
    };
    findUnique<T extends CreativeBriefFindUniqueArgs>(args: Prisma.SelectSubset<T, CreativeBriefFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CreativeBriefFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CreativeBriefFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CreativeBriefFindFirstArgs>(args?: Prisma.SelectSubset<T, CreativeBriefFindFirstArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CreativeBriefFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CreativeBriefFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CreativeBriefFindManyArgs>(args?: Prisma.SelectSubset<T, CreativeBriefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CreativeBriefCreateArgs>(args: Prisma.SelectSubset<T, CreativeBriefCreateArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CreativeBriefCreateManyArgs>(args?: Prisma.SelectSubset<T, CreativeBriefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CreativeBriefCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CreativeBriefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CreativeBriefDeleteArgs>(args: Prisma.SelectSubset<T, CreativeBriefDeleteArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CreativeBriefUpdateArgs>(args: Prisma.SelectSubset<T, CreativeBriefUpdateArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CreativeBriefDeleteManyArgs>(args?: Prisma.SelectSubset<T, CreativeBriefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CreativeBriefUpdateManyArgs>(args: Prisma.SelectSubset<T, CreativeBriefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CreativeBriefUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CreativeBriefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CreativeBriefUpsertArgs>(args: Prisma.SelectSubset<T, CreativeBriefUpsertArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CreativeBriefCountArgs>(args?: Prisma.Subset<T, CreativeBriefCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreativeBriefCountAggregateOutputType> : number>;
    aggregate<T extends CreativeBriefAggregateArgs>(args: Prisma.Subset<T, CreativeBriefAggregateArgs>): Prisma.PrismaPromise<GetCreativeBriefAggregateType<T>>;
    groupBy<T extends CreativeBriefGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CreativeBriefGroupByArgs['orderBy'];
    } : {
        orderBy?: CreativeBriefGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CreativeBriefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreativeBriefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CreativeBriefFieldRefs;
}
export interface Prisma__CreativeBriefClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    variants<T extends Prisma.CreativeBrief$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CreativeBrief$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.CreativeBrief$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CreativeBrief$approvedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CreativeBriefFieldRefs {
    readonly id: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly projectId: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly summary: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly audienceNotes: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly copyAngles: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly layoutDirection: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly readinessScore: Prisma.FieldRef<"CreativeBrief", 'Int'>;
    readonly readinessNotes: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly status: Prisma.FieldRef<"CreativeBrief", 'CreativeBriefStatus'>;
    readonly createdById: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly approvedById: Prisma.FieldRef<"CreativeBrief", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"CreativeBrief", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CreativeBrief", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CreativeBrief", 'DateTime'>;
}
export type CreativeBriefFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefWhereUniqueInput;
};
export type CreativeBriefFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefWhereUniqueInput;
};
export type CreativeBriefFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where?: Prisma.CreativeBriefWhereInput;
    orderBy?: Prisma.CreativeBriefOrderByWithRelationInput | Prisma.CreativeBriefOrderByWithRelationInput[];
    cursor?: Prisma.CreativeBriefWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreativeBriefScalarFieldEnum | Prisma.CreativeBriefScalarFieldEnum[];
};
export type CreativeBriefFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where?: Prisma.CreativeBriefWhereInput;
    orderBy?: Prisma.CreativeBriefOrderByWithRelationInput | Prisma.CreativeBriefOrderByWithRelationInput[];
    cursor?: Prisma.CreativeBriefWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreativeBriefScalarFieldEnum | Prisma.CreativeBriefScalarFieldEnum[];
};
export type CreativeBriefFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where?: Prisma.CreativeBriefWhereInput;
    orderBy?: Prisma.CreativeBriefOrderByWithRelationInput | Prisma.CreativeBriefOrderByWithRelationInput[];
    cursor?: Prisma.CreativeBriefWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreativeBriefScalarFieldEnum | Prisma.CreativeBriefScalarFieldEnum[];
};
export type CreativeBriefCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreativeBriefCreateInput, Prisma.CreativeBriefUncheckedCreateInput>;
};
export type CreativeBriefCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CreativeBriefCreateManyInput | Prisma.CreativeBriefCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CreativeBriefCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    data: Prisma.CreativeBriefCreateManyInput | Prisma.CreativeBriefCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CreativeBriefIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CreativeBriefUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateInput, Prisma.CreativeBriefUncheckedUpdateInput>;
    where: Prisma.CreativeBriefWhereUniqueInput;
};
export type CreativeBriefUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CreativeBriefUpdateManyMutationInput, Prisma.CreativeBriefUncheckedUpdateManyInput>;
    where?: Prisma.CreativeBriefWhereInput;
    limit?: number;
};
export type CreativeBriefUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreativeBriefUpdateManyMutationInput, Prisma.CreativeBriefUncheckedUpdateManyInput>;
    where?: Prisma.CreativeBriefWhereInput;
    limit?: number;
    include?: Prisma.CreativeBriefIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CreativeBriefUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefCreateInput, Prisma.CreativeBriefUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CreativeBriefUpdateInput, Prisma.CreativeBriefUncheckedUpdateInput>;
};
export type CreativeBriefDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefWhereUniqueInput;
};
export type CreativeBriefDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefWhereInput;
    limit?: number;
};
export type CreativeBrief$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    where?: Prisma.CreativeBriefVariantWhereInput;
    orderBy?: Prisma.CreativeBriefVariantOrderByWithRelationInput | Prisma.CreativeBriefVariantOrderByWithRelationInput[];
    cursor?: Prisma.CreativeBriefVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CreativeBriefVariantScalarFieldEnum | Prisma.CreativeBriefVariantScalarFieldEnum[];
};
export type CreativeBrief$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type CreativeBriefDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefInclude<ExtArgs> | null;
};
