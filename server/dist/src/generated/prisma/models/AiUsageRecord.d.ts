import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AiUsageRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$AiUsageRecordPayload>;
export type AggregateAiUsageRecord = {
    _count: AiUsageRecordCountAggregateOutputType | null;
    _avg: AiUsageRecordAvgAggregateOutputType | null;
    _sum: AiUsageRecordSumAggregateOutputType | null;
    _min: AiUsageRecordMinAggregateOutputType | null;
    _max: AiUsageRecordMaxAggregateOutputType | null;
};
export type AiUsageRecordAvgAggregateOutputType = {
    promptTokens: number | null;
    completionTokens: number | null;
    estimatedCostMicros: number | null;
};
export type AiUsageRecordSumAggregateOutputType = {
    promptTokens: number | null;
    completionTokens: number | null;
    estimatedCostMicros: number | null;
};
export type AiUsageRecordMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    requestedById: string | null;
    purpose: $Enums.AiUsagePurpose | null;
    model: string | null;
    promptTokens: number | null;
    completionTokens: number | null;
    estimatedCostMicros: number | null;
    createdAt: Date | null;
};
export type AiUsageRecordMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    requestedById: string | null;
    purpose: $Enums.AiUsagePurpose | null;
    model: string | null;
    promptTokens: number | null;
    completionTokens: number | null;
    estimatedCostMicros: number | null;
    createdAt: Date | null;
};
export type AiUsageRecordCountAggregateOutputType = {
    id: number;
    organizationId: number;
    requestedById: number;
    purpose: number;
    model: number;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt: number;
    _all: number;
};
export type AiUsageRecordAvgAggregateInputType = {
    promptTokens?: true;
    completionTokens?: true;
    estimatedCostMicros?: true;
};
export type AiUsageRecordSumAggregateInputType = {
    promptTokens?: true;
    completionTokens?: true;
    estimatedCostMicros?: true;
};
export type AiUsageRecordMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    requestedById?: true;
    purpose?: true;
    model?: true;
    promptTokens?: true;
    completionTokens?: true;
    estimatedCostMicros?: true;
    createdAt?: true;
};
export type AiUsageRecordMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    requestedById?: true;
    purpose?: true;
    model?: true;
    promptTokens?: true;
    completionTokens?: true;
    estimatedCostMicros?: true;
    createdAt?: true;
};
export type AiUsageRecordCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    requestedById?: true;
    purpose?: true;
    model?: true;
    promptTokens?: true;
    completionTokens?: true;
    estimatedCostMicros?: true;
    createdAt?: true;
    _all?: true;
};
export type AiUsageRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiUsageRecordWhereInput;
    orderBy?: Prisma.AiUsageRecordOrderByWithRelationInput | Prisma.AiUsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.AiUsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AiUsageRecordCountAggregateInputType;
    _avg?: AiUsageRecordAvgAggregateInputType;
    _sum?: AiUsageRecordSumAggregateInputType;
    _min?: AiUsageRecordMinAggregateInputType;
    _max?: AiUsageRecordMaxAggregateInputType;
};
export type GetAiUsageRecordAggregateType<T extends AiUsageRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateAiUsageRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiUsageRecord[P]> : Prisma.GetScalarType<T[P], AggregateAiUsageRecord[P]>;
};
export type AiUsageRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiUsageRecordWhereInput;
    orderBy?: Prisma.AiUsageRecordOrderByWithAggregationInput | Prisma.AiUsageRecordOrderByWithAggregationInput[];
    by: Prisma.AiUsageRecordScalarFieldEnum[] | Prisma.AiUsageRecordScalarFieldEnum;
    having?: Prisma.AiUsageRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiUsageRecordCountAggregateInputType | true;
    _avg?: AiUsageRecordAvgAggregateInputType;
    _sum?: AiUsageRecordSumAggregateInputType;
    _min?: AiUsageRecordMinAggregateInputType;
    _max?: AiUsageRecordMaxAggregateInputType;
};
export type AiUsageRecordGroupByOutputType = {
    id: string;
    organizationId: string;
    requestedById: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt: Date;
    _count: AiUsageRecordCountAggregateOutputType | null;
    _avg: AiUsageRecordAvgAggregateOutputType | null;
    _sum: AiUsageRecordSumAggregateOutputType | null;
    _min: AiUsageRecordMinAggregateOutputType | null;
    _max: AiUsageRecordMaxAggregateOutputType | null;
};
export type GetAiUsageRecordGroupByPayload<T extends AiUsageRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiUsageRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiUsageRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiUsageRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiUsageRecordGroupByOutputType[P]>;
}>>;
export type AiUsageRecordWhereInput = {
    AND?: Prisma.AiUsageRecordWhereInput | Prisma.AiUsageRecordWhereInput[];
    OR?: Prisma.AiUsageRecordWhereInput[];
    NOT?: Prisma.AiUsageRecordWhereInput | Prisma.AiUsageRecordWhereInput[];
    id?: Prisma.StringFilter<"AiUsageRecord"> | string;
    organizationId?: Prisma.StringFilter<"AiUsageRecord"> | string;
    requestedById?: Prisma.StringFilter<"AiUsageRecord"> | string;
    purpose?: Prisma.EnumAiUsagePurposeFilter<"AiUsageRecord"> | $Enums.AiUsagePurpose;
    model?: Prisma.StringFilter<"AiUsageRecord"> | string;
    promptTokens?: Prisma.IntFilter<"AiUsageRecord"> | number;
    completionTokens?: Prisma.IntFilter<"AiUsageRecord"> | number;
    estimatedCostMicros?: Prisma.IntFilter<"AiUsageRecord"> | number;
    createdAt?: Prisma.DateTimeFilter<"AiUsageRecord"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AiUsageRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    requestedBy?: Prisma.UserOrderByWithRelationInput;
};
export type AiUsageRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AiUsageRecordWhereInput | Prisma.AiUsageRecordWhereInput[];
    OR?: Prisma.AiUsageRecordWhereInput[];
    NOT?: Prisma.AiUsageRecordWhereInput | Prisma.AiUsageRecordWhereInput[];
    organizationId?: Prisma.StringFilter<"AiUsageRecord"> | string;
    requestedById?: Prisma.StringFilter<"AiUsageRecord"> | string;
    purpose?: Prisma.EnumAiUsagePurposeFilter<"AiUsageRecord"> | $Enums.AiUsagePurpose;
    model?: Prisma.StringFilter<"AiUsageRecord"> | string;
    promptTokens?: Prisma.IntFilter<"AiUsageRecord"> | number;
    completionTokens?: Prisma.IntFilter<"AiUsageRecord"> | number;
    estimatedCostMicros?: Prisma.IntFilter<"AiUsageRecord"> | number;
    createdAt?: Prisma.DateTimeFilter<"AiUsageRecord"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AiUsageRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AiUsageRecordCountOrderByAggregateInput;
    _avg?: Prisma.AiUsageRecordAvgOrderByAggregateInput;
    _max?: Prisma.AiUsageRecordMaxOrderByAggregateInput;
    _min?: Prisma.AiUsageRecordMinOrderByAggregateInput;
    _sum?: Prisma.AiUsageRecordSumOrderByAggregateInput;
};
export type AiUsageRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiUsageRecordScalarWhereWithAggregatesInput | Prisma.AiUsageRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiUsageRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiUsageRecordScalarWhereWithAggregatesInput | Prisma.AiUsageRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AiUsageRecord"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"AiUsageRecord"> | string;
    requestedById?: Prisma.StringWithAggregatesFilter<"AiUsageRecord"> | string;
    purpose?: Prisma.EnumAiUsagePurposeWithAggregatesFilter<"AiUsageRecord"> | $Enums.AiUsagePurpose;
    model?: Prisma.StringWithAggregatesFilter<"AiUsageRecord"> | string;
    promptTokens?: Prisma.IntWithAggregatesFilter<"AiUsageRecord"> | number;
    completionTokens?: Prisma.IntWithAggregatesFilter<"AiUsageRecord"> | number;
    estimatedCostMicros?: Prisma.IntWithAggregatesFilter<"AiUsageRecord"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AiUsageRecord"> | Date | string;
};
export type AiUsageRecordCreateInput = {
    id?: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAiUsageRecordsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutAiUsageRequestsInput;
};
export type AiUsageRecordUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    requestedById: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
};
export type AiUsageRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAiUsageRecordsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutAiUsageRequestsNestedInput;
};
export type AiUsageRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordCreateManyInput = {
    id?: string;
    organizationId: string;
    requestedById: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
};
export type AiUsageRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordListRelationFilter = {
    every?: Prisma.AiUsageRecordWhereInput;
    some?: Prisma.AiUsageRecordWhereInput;
    none?: Prisma.AiUsageRecordWhereInput;
};
export type AiUsageRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiUsageRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiUsageRecordAvgOrderByAggregateInput = {
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
};
export type AiUsageRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiUsageRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiUsageRecordSumOrderByAggregateInput = {
    promptTokens?: Prisma.SortOrder;
    completionTokens?: Prisma.SortOrder;
    estimatedCostMicros?: Prisma.SortOrder;
};
export type AiUsageRecordCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput> | Prisma.AiUsageRecordCreateWithoutRequestedByInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput | Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.AiUsageRecordCreateManyRequestedByInputEnvelope;
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
};
export type AiUsageRecordUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput> | Prisma.AiUsageRecordCreateWithoutRequestedByInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput | Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.AiUsageRecordCreateManyRequestedByInputEnvelope;
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
};
export type AiUsageRecordUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput> | Prisma.AiUsageRecordCreateWithoutRequestedByInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput | Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.AiUsageRecordCreateManyRequestedByInputEnvelope;
    set?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    disconnect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    delete?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    update?: Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.AiUsageRecordUpdateManyWithWhereWithoutRequestedByInput | Prisma.AiUsageRecordUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.AiUsageRecordScalarWhereInput | Prisma.AiUsageRecordScalarWhereInput[];
};
export type AiUsageRecordUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput> | Prisma.AiUsageRecordCreateWithoutRequestedByInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput | Prisma.AiUsageRecordCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.AiUsageRecordCreateManyRequestedByInputEnvelope;
    set?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    disconnect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    delete?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    update?: Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.AiUsageRecordUpdateManyWithWhereWithoutRequestedByInput | Prisma.AiUsageRecordUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.AiUsageRecordScalarWhereInput | Prisma.AiUsageRecordScalarWhereInput[];
};
export type AiUsageRecordCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AiUsageRecordCreateWithoutOrganizationInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput | Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AiUsageRecordCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
};
export type AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AiUsageRecordCreateWithoutOrganizationInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput | Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AiUsageRecordCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
};
export type AiUsageRecordUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AiUsageRecordCreateWithoutOrganizationInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput | Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AiUsageRecordCreateManyOrganizationInputEnvelope;
    set?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    disconnect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    delete?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    update?: Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AiUsageRecordUpdateManyWithWhereWithoutOrganizationInput | Prisma.AiUsageRecordUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AiUsageRecordScalarWhereInput | Prisma.AiUsageRecordScalarWhereInput[];
};
export type AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AiUsageRecordCreateWithoutOrganizationInput[] | Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput | Prisma.AiUsageRecordCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AiUsageRecordUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AiUsageRecordCreateManyOrganizationInputEnvelope;
    set?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    disconnect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    delete?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    connect?: Prisma.AiUsageRecordWhereUniqueInput | Prisma.AiUsageRecordWhereUniqueInput[];
    update?: Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AiUsageRecordUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AiUsageRecordUpdateManyWithWhereWithoutOrganizationInput | Prisma.AiUsageRecordUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AiUsageRecordScalarWhereInput | Prisma.AiUsageRecordScalarWhereInput[];
};
export type EnumAiUsagePurposeFieldUpdateOperationsInput = {
    set?: $Enums.AiUsagePurpose;
};
export type AiUsageRecordCreateWithoutRequestedByInput = {
    id?: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAiUsageRecordsInput;
};
export type AiUsageRecordUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    organizationId: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
};
export type AiUsageRecordCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.AiUsageRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput>;
};
export type AiUsageRecordCreateManyRequestedByInputEnvelope = {
    data: Prisma.AiUsageRecordCreateManyRequestedByInput | Prisma.AiUsageRecordCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type AiUsageRecordUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.AiUsageRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiUsageRecordUpdateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedCreateWithoutRequestedByInput>;
};
export type AiUsageRecordUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.AiUsageRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateWithoutRequestedByInput, Prisma.AiUsageRecordUncheckedUpdateWithoutRequestedByInput>;
};
export type AiUsageRecordUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.AiUsageRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateManyMutationInput, Prisma.AiUsageRecordUncheckedUpdateManyWithoutRequestedByInput>;
};
export type AiUsageRecordScalarWhereInput = {
    AND?: Prisma.AiUsageRecordScalarWhereInput | Prisma.AiUsageRecordScalarWhereInput[];
    OR?: Prisma.AiUsageRecordScalarWhereInput[];
    NOT?: Prisma.AiUsageRecordScalarWhereInput | Prisma.AiUsageRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"AiUsageRecord"> | string;
    organizationId?: Prisma.StringFilter<"AiUsageRecord"> | string;
    requestedById?: Prisma.StringFilter<"AiUsageRecord"> | string;
    purpose?: Prisma.EnumAiUsagePurposeFilter<"AiUsageRecord"> | $Enums.AiUsagePurpose;
    model?: Prisma.StringFilter<"AiUsageRecord"> | string;
    promptTokens?: Prisma.IntFilter<"AiUsageRecord"> | number;
    completionTokens?: Prisma.IntFilter<"AiUsageRecord"> | number;
    estimatedCostMicros?: Prisma.IntFilter<"AiUsageRecord"> | number;
    createdAt?: Prisma.DateTimeFilter<"AiUsageRecord"> | Date | string;
};
export type AiUsageRecordCreateWithoutOrganizationInput = {
    id?: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
    requestedBy: Prisma.UserCreateNestedOneWithoutAiUsageRequestsInput;
};
export type AiUsageRecordUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    requestedById: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
};
export type AiUsageRecordCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AiUsageRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput>;
};
export type AiUsageRecordCreateManyOrganizationInputEnvelope = {
    data: Prisma.AiUsageRecordCreateManyOrganizationInput | Prisma.AiUsageRecordCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AiUsageRecordUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AiUsageRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiUsageRecordUpdateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AiUsageRecordCreateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedCreateWithoutOrganizationInput>;
};
export type AiUsageRecordUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AiUsageRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateWithoutOrganizationInput, Prisma.AiUsageRecordUncheckedUpdateWithoutOrganizationInput>;
};
export type AiUsageRecordUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AiUsageRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateManyMutationInput, Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AiUsageRecordCreateManyRequestedByInput = {
    id?: string;
    organizationId: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
};
export type AiUsageRecordUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAiUsageRecordsNestedInput;
};
export type AiUsageRecordUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordCreateManyOrganizationInput = {
    id?: string;
    requestedById: string;
    purpose: $Enums.AiUsagePurpose;
    model: string;
    promptTokens: number;
    completionTokens: number;
    estimatedCostMicros: number;
    createdAt?: Date | string;
};
export type AiUsageRecordUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutAiUsageRequestsNestedInput;
};
export type AiUsageRecordUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    purpose?: Prisma.EnumAiUsagePurposeFieldUpdateOperationsInput | $Enums.AiUsagePurpose;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    promptTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    completionTokens?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCostMicros?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiUsageRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    requestedById?: boolean;
    purpose?: boolean;
    model?: boolean;
    promptTokens?: boolean;
    completionTokens?: boolean;
    estimatedCostMicros?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiUsageRecord"]>;
export type AiUsageRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    requestedById?: boolean;
    purpose?: boolean;
    model?: boolean;
    promptTokens?: boolean;
    completionTokens?: boolean;
    estimatedCostMicros?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiUsageRecord"]>;
export type AiUsageRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    requestedById?: boolean;
    purpose?: boolean;
    model?: boolean;
    promptTokens?: boolean;
    completionTokens?: boolean;
    estimatedCostMicros?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiUsageRecord"]>;
export type AiUsageRecordSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    requestedById?: boolean;
    purpose?: boolean;
    model?: boolean;
    promptTokens?: boolean;
    completionTokens?: boolean;
    estimatedCostMicros?: boolean;
    createdAt?: boolean;
};
export type AiUsageRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "requestedById" | "purpose" | "model" | "promptTokens" | "completionTokens" | "estimatedCostMicros" | "createdAt", ExtArgs["result"]["aiUsageRecord"]>;
export type AiUsageRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AiUsageRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AiUsageRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AiUsageRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiUsageRecord";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        requestedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        requestedById: string;
        purpose: $Enums.AiUsagePurpose;
        model: string;
        promptTokens: number;
        completionTokens: number;
        estimatedCostMicros: number;
        createdAt: Date;
    }, ExtArgs["result"]["aiUsageRecord"]>;
    composites: {};
};
export type AiUsageRecordGetPayload<S extends boolean | null | undefined | AiUsageRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload, S>;
export type AiUsageRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiUsageRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiUsageRecordCountAggregateInputType | true;
};
export interface AiUsageRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiUsageRecord'];
        meta: {
            name: 'AiUsageRecord';
        };
    };
    findUnique<T extends AiUsageRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, AiUsageRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AiUsageRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiUsageRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AiUsageRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, AiUsageRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AiUsageRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiUsageRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AiUsageRecordFindManyArgs>(args?: Prisma.SelectSubset<T, AiUsageRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AiUsageRecordCreateArgs>(args: Prisma.SelectSubset<T, AiUsageRecordCreateArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AiUsageRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, AiUsageRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AiUsageRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiUsageRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AiUsageRecordDeleteArgs>(args: Prisma.SelectSubset<T, AiUsageRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AiUsageRecordUpdateArgs>(args: Prisma.SelectSubset<T, AiUsageRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AiUsageRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiUsageRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AiUsageRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, AiUsageRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AiUsageRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiUsageRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AiUsageRecordUpsertArgs>(args: Prisma.SelectSubset<T, AiUsageRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__AiUsageRecordClient<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AiUsageRecordCountArgs>(args?: Prisma.Subset<T, AiUsageRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiUsageRecordCountAggregateOutputType> : number>;
    aggregate<T extends AiUsageRecordAggregateArgs>(args: Prisma.Subset<T, AiUsageRecordAggregateArgs>): Prisma.PrismaPromise<GetAiUsageRecordAggregateType<T>>;
    groupBy<T extends AiUsageRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiUsageRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: AiUsageRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiUsageRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiUsageRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AiUsageRecordFieldRefs;
}
export interface Prisma__AiUsageRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AiUsageRecordFieldRefs {
    readonly id: Prisma.FieldRef<"AiUsageRecord", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AiUsageRecord", 'String'>;
    readonly requestedById: Prisma.FieldRef<"AiUsageRecord", 'String'>;
    readonly purpose: Prisma.FieldRef<"AiUsageRecord", 'AiUsagePurpose'>;
    readonly model: Prisma.FieldRef<"AiUsageRecord", 'String'>;
    readonly promptTokens: Prisma.FieldRef<"AiUsageRecord", 'Int'>;
    readonly completionTokens: Prisma.FieldRef<"AiUsageRecord", 'Int'>;
    readonly estimatedCostMicros: Prisma.FieldRef<"AiUsageRecord", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"AiUsageRecord", 'DateTime'>;
}
export type AiUsageRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where: Prisma.AiUsageRecordWhereUniqueInput;
};
export type AiUsageRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where: Prisma.AiUsageRecordWhereUniqueInput;
};
export type AiUsageRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where?: Prisma.AiUsageRecordWhereInput;
    orderBy?: Prisma.AiUsageRecordOrderByWithRelationInput | Prisma.AiUsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.AiUsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiUsageRecordScalarFieldEnum | Prisma.AiUsageRecordScalarFieldEnum[];
};
export type AiUsageRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where?: Prisma.AiUsageRecordWhereInput;
    orderBy?: Prisma.AiUsageRecordOrderByWithRelationInput | Prisma.AiUsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.AiUsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiUsageRecordScalarFieldEnum | Prisma.AiUsageRecordScalarFieldEnum[];
};
export type AiUsageRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where?: Prisma.AiUsageRecordWhereInput;
    orderBy?: Prisma.AiUsageRecordOrderByWithRelationInput | Prisma.AiUsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.AiUsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiUsageRecordScalarFieldEnum | Prisma.AiUsageRecordScalarFieldEnum[];
};
export type AiUsageRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiUsageRecordCreateInput, Prisma.AiUsageRecordUncheckedCreateInput>;
};
export type AiUsageRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AiUsageRecordCreateManyInput | Prisma.AiUsageRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AiUsageRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    data: Prisma.AiUsageRecordCreateManyInput | Prisma.AiUsageRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AiUsageRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AiUsageRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateInput, Prisma.AiUsageRecordUncheckedUpdateInput>;
    where: Prisma.AiUsageRecordWhereUniqueInput;
};
export type AiUsageRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateManyMutationInput, Prisma.AiUsageRecordUncheckedUpdateManyInput>;
    where?: Prisma.AiUsageRecordWhereInput;
    limit?: number;
};
export type AiUsageRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AiUsageRecordUpdateManyMutationInput, Prisma.AiUsageRecordUncheckedUpdateManyInput>;
    where?: Prisma.AiUsageRecordWhereInput;
    limit?: number;
    include?: Prisma.AiUsageRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AiUsageRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where: Prisma.AiUsageRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiUsageRecordCreateInput, Prisma.AiUsageRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AiUsageRecordUpdateInput, Prisma.AiUsageRecordUncheckedUpdateInput>;
};
export type AiUsageRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where: Prisma.AiUsageRecordWhereUniqueInput;
};
export type AiUsageRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiUsageRecordWhereInput;
    limit?: number;
};
export type AiUsageRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
};
