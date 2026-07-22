import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CampaignMetricEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignMetricEntryPayload>;
export type AggregateCampaignMetricEntry = {
    _count: CampaignMetricEntryCountAggregateOutputType | null;
    _avg: CampaignMetricEntryAvgAggregateOutputType | null;
    _sum: CampaignMetricEntrySumAggregateOutputType | null;
    _min: CampaignMetricEntryMinAggregateOutputType | null;
    _max: CampaignMetricEntryMaxAggregateOutputType | null;
};
export type CampaignMetricEntryAvgAggregateOutputType = {
    actualValue: runtime.Decimal | null;
    plannedValue: runtime.Decimal | null;
};
export type CampaignMetricEntrySumAggregateOutputType = {
    actualValue: runtime.Decimal | null;
    plannedValue: runtime.Decimal | null;
};
export type CampaignMetricEntryMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    metricType: $Enums.MetricType | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    actualValue: runtime.Decimal | null;
    plannedValue: runtime.Decimal | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
};
export type CampaignMetricEntryMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    metricType: $Enums.MetricType | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    actualValue: runtime.Decimal | null;
    plannedValue: runtime.Decimal | null;
    notes: string | null;
    recordedById: string | null;
    createdAt: Date | null;
};
export type CampaignMetricEntryCountAggregateOutputType = {
    id: number;
    projectId: number;
    metricType: number;
    periodStart: number;
    periodEnd: number;
    actualValue: number;
    plannedValue: number;
    notes: number;
    recordedById: number;
    createdAt: number;
    _all: number;
};
export type CampaignMetricEntryAvgAggregateInputType = {
    actualValue?: true;
    plannedValue?: true;
};
export type CampaignMetricEntrySumAggregateInputType = {
    actualValue?: true;
    plannedValue?: true;
};
export type CampaignMetricEntryMinAggregateInputType = {
    id?: true;
    projectId?: true;
    metricType?: true;
    periodStart?: true;
    periodEnd?: true;
    actualValue?: true;
    plannedValue?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
};
export type CampaignMetricEntryMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    metricType?: true;
    periodStart?: true;
    periodEnd?: true;
    actualValue?: true;
    plannedValue?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
};
export type CampaignMetricEntryCountAggregateInputType = {
    id?: true;
    projectId?: true;
    metricType?: true;
    periodStart?: true;
    periodEnd?: true;
    actualValue?: true;
    plannedValue?: true;
    notes?: true;
    recordedById?: true;
    createdAt?: true;
    _all?: true;
};
export type CampaignMetricEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignMetricEntryWhereInput;
    orderBy?: Prisma.CampaignMetricEntryOrderByWithRelationInput | Prisma.CampaignMetricEntryOrderByWithRelationInput[];
    cursor?: Prisma.CampaignMetricEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignMetricEntryCountAggregateInputType;
    _avg?: CampaignMetricEntryAvgAggregateInputType;
    _sum?: CampaignMetricEntrySumAggregateInputType;
    _min?: CampaignMetricEntryMinAggregateInputType;
    _max?: CampaignMetricEntryMaxAggregateInputType;
};
export type GetCampaignMetricEntryAggregateType<T extends CampaignMetricEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaignMetricEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaignMetricEntry[P]> : Prisma.GetScalarType<T[P], AggregateCampaignMetricEntry[P]>;
};
export type CampaignMetricEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignMetricEntryWhereInput;
    orderBy?: Prisma.CampaignMetricEntryOrderByWithAggregationInput | Prisma.CampaignMetricEntryOrderByWithAggregationInput[];
    by: Prisma.CampaignMetricEntryScalarFieldEnum[] | Prisma.CampaignMetricEntryScalarFieldEnum;
    having?: Prisma.CampaignMetricEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignMetricEntryCountAggregateInputType | true;
    _avg?: CampaignMetricEntryAvgAggregateInputType;
    _sum?: CampaignMetricEntrySumAggregateInputType;
    _min?: CampaignMetricEntryMinAggregateInputType;
    _max?: CampaignMetricEntryMaxAggregateInputType;
};
export type CampaignMetricEntryGroupByOutputType = {
    id: string;
    projectId: string;
    metricType: $Enums.MetricType;
    periodStart: Date;
    periodEnd: Date;
    actualValue: runtime.Decimal;
    plannedValue: runtime.Decimal | null;
    notes: string | null;
    recordedById: string;
    createdAt: Date;
    _count: CampaignMetricEntryCountAggregateOutputType | null;
    _avg: CampaignMetricEntryAvgAggregateOutputType | null;
    _sum: CampaignMetricEntrySumAggregateOutputType | null;
    _min: CampaignMetricEntryMinAggregateOutputType | null;
    _max: CampaignMetricEntryMaxAggregateOutputType | null;
};
export type GetCampaignMetricEntryGroupByPayload<T extends CampaignMetricEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignMetricEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignMetricEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignMetricEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignMetricEntryGroupByOutputType[P]>;
}>>;
export type CampaignMetricEntryWhereInput = {
    AND?: Prisma.CampaignMetricEntryWhereInput | Prisma.CampaignMetricEntryWhereInput[];
    OR?: Prisma.CampaignMetricEntryWhereInput[];
    NOT?: Prisma.CampaignMetricEntryWhereInput | Prisma.CampaignMetricEntryWhereInput[];
    id?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    projectId?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    metricType?: Prisma.EnumMetricTypeFilter<"CampaignMetricEntry"> | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    actualValue?: Prisma.DecimalFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.DecimalNullableFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"CampaignMetricEntry"> | string | null;
    recordedById?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CampaignMetricEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    metricType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
};
export type CampaignMetricEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CampaignMetricEntryWhereInput | Prisma.CampaignMetricEntryWhereInput[];
    OR?: Prisma.CampaignMetricEntryWhereInput[];
    NOT?: Prisma.CampaignMetricEntryWhereInput | Prisma.CampaignMetricEntryWhereInput[];
    projectId?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    metricType?: Prisma.EnumMetricTypeFilter<"CampaignMetricEntry"> | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    actualValue?: Prisma.DecimalFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.DecimalNullableFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"CampaignMetricEntry"> | string | null;
    recordedById?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CampaignMetricEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    metricType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CampaignMetricEntryCountOrderByAggregateInput;
    _avg?: Prisma.CampaignMetricEntryAvgOrderByAggregateInput;
    _max?: Prisma.CampaignMetricEntryMaxOrderByAggregateInput;
    _min?: Prisma.CampaignMetricEntryMinOrderByAggregateInput;
    _sum?: Prisma.CampaignMetricEntrySumOrderByAggregateInput;
};
export type CampaignMetricEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignMetricEntryScalarWhereWithAggregatesInput | Prisma.CampaignMetricEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignMetricEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignMetricEntryScalarWhereWithAggregatesInput | Prisma.CampaignMetricEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CampaignMetricEntry"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"CampaignMetricEntry"> | string;
    metricType?: Prisma.EnumMetricTypeWithAggregatesFilter<"CampaignMetricEntry"> | $Enums.MetricType;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"CampaignMetricEntry"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"CampaignMetricEntry"> | Date | string;
    actualValue?: Prisma.DecimalWithAggregatesFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.DecimalNullableWithAggregatesFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"CampaignMetricEntry"> | string | null;
    recordedById?: Prisma.StringWithAggregatesFilter<"CampaignMetricEntry"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CampaignMetricEntry"> | Date | string;
};
export type CampaignMetricEntryCreateInput = {
    id?: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutCampaignMetricsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedCampaignMetricsInput;
};
export type CampaignMetricEntryUncheckedCreateInput = {
    id?: string;
    projectId: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
};
export type CampaignMetricEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutCampaignMetricsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedCampaignMetricsNestedInput;
};
export type CampaignMetricEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntryCreateManyInput = {
    id?: string;
    projectId: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
};
export type CampaignMetricEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntryListRelationFilter = {
    every?: Prisma.CampaignMetricEntryWhereInput;
    some?: Prisma.CampaignMetricEntryWhereInput;
    none?: Prisma.CampaignMetricEntryWhereInput;
};
export type CampaignMetricEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampaignMetricEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    metricType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CampaignMetricEntryAvgOrderByAggregateInput = {
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrder;
};
export type CampaignMetricEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    metricType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CampaignMetricEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    metricType?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CampaignMetricEntrySumOrderByAggregateInput = {
    actualValue?: Prisma.SortOrder;
    plannedValue?: Prisma.SortOrder;
};
export type CampaignMetricEntryCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput> | Prisma.CampaignMetricEntryCreateWithoutRecordedByInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyRecordedByInputEnvelope;
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
};
export type CampaignMetricEntryUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput> | Prisma.CampaignMetricEntryCreateWithoutRecordedByInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyRecordedByInputEnvelope;
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
};
export type CampaignMetricEntryUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput> | Prisma.CampaignMetricEntryCreateWithoutRecordedByInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyRecordedByInputEnvelope;
    set?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    disconnect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    delete?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    update?: Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutRecordedByInput | Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.CampaignMetricEntryScalarWhereInput | Prisma.CampaignMetricEntryScalarWhereInput[];
};
export type CampaignMetricEntryUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput> | Prisma.CampaignMetricEntryCreateWithoutRecordedByInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyRecordedByInputEnvelope;
    set?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    disconnect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    delete?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    update?: Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutRecordedByInput | Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.CampaignMetricEntryScalarWhereInput | Prisma.CampaignMetricEntryScalarWhereInput[];
};
export type CampaignMetricEntryCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput> | Prisma.CampaignMetricEntryCreateWithoutProjectInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyProjectInputEnvelope;
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
};
export type CampaignMetricEntryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput> | Prisma.CampaignMetricEntryCreateWithoutProjectInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyProjectInputEnvelope;
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
};
export type CampaignMetricEntryUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput> | Prisma.CampaignMetricEntryCreateWithoutProjectInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutProjectInput | Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyProjectInputEnvelope;
    set?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    disconnect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    delete?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    update?: Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutProjectInput | Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutProjectInput | Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.CampaignMetricEntryScalarWhereInput | Prisma.CampaignMetricEntryScalarWhereInput[];
};
export type CampaignMetricEntryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput> | Prisma.CampaignMetricEntryCreateWithoutProjectInput[] | Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput | Prisma.CampaignMetricEntryCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutProjectInput | Prisma.CampaignMetricEntryUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.CampaignMetricEntryCreateManyProjectInputEnvelope;
    set?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    disconnect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    delete?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    connect?: Prisma.CampaignMetricEntryWhereUniqueInput | Prisma.CampaignMetricEntryWhereUniqueInput[];
    update?: Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutProjectInput | Prisma.CampaignMetricEntryUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutProjectInput | Prisma.CampaignMetricEntryUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.CampaignMetricEntryScalarWhereInput | Prisma.CampaignMetricEntryScalarWhereInput[];
};
export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CampaignMetricEntryCreateWithoutRecordedByInput = {
    id?: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutCampaignMetricsInput;
};
export type CampaignMetricEntryUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    projectId: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type CampaignMetricEntryCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput>;
};
export type CampaignMetricEntryCreateManyRecordedByInputEnvelope = {
    data: Prisma.CampaignMetricEntryCreateManyRecordedByInput | Prisma.CampaignMetricEntryCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type CampaignMetricEntryUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignMetricEntryUpdateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutRecordedByInput>;
};
export type CampaignMetricEntryUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateWithoutRecordedByInput, Prisma.CampaignMetricEntryUncheckedUpdateWithoutRecordedByInput>;
};
export type CampaignMetricEntryUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.CampaignMetricEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateManyMutationInput, Prisma.CampaignMetricEntryUncheckedUpdateManyWithoutRecordedByInput>;
};
export type CampaignMetricEntryScalarWhereInput = {
    AND?: Prisma.CampaignMetricEntryScalarWhereInput | Prisma.CampaignMetricEntryScalarWhereInput[];
    OR?: Prisma.CampaignMetricEntryScalarWhereInput[];
    NOT?: Prisma.CampaignMetricEntryScalarWhereInput | Prisma.CampaignMetricEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    projectId?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    metricType?: Prisma.EnumMetricTypeFilter<"CampaignMetricEntry"> | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
    actualValue?: Prisma.DecimalFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.DecimalNullableFilter<"CampaignMetricEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"CampaignMetricEntry"> | string | null;
    recordedById?: Prisma.StringFilter<"CampaignMetricEntry"> | string;
    createdAt?: Prisma.DateTimeFilter<"CampaignMetricEntry"> | Date | string;
};
export type CampaignMetricEntryCreateWithoutProjectInput = {
    id?: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedCampaignMetricsInput;
};
export type CampaignMetricEntryUncheckedCreateWithoutProjectInput = {
    id?: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
};
export type CampaignMetricEntryCreateOrConnectWithoutProjectInput = {
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput>;
};
export type CampaignMetricEntryCreateManyProjectInputEnvelope = {
    data: Prisma.CampaignMetricEntryCreateManyProjectInput | Prisma.CampaignMetricEntryCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type CampaignMetricEntryUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignMetricEntryUpdateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.CampaignMetricEntryCreateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedCreateWithoutProjectInput>;
};
export type CampaignMetricEntryUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateWithoutProjectInput, Prisma.CampaignMetricEntryUncheckedUpdateWithoutProjectInput>;
};
export type CampaignMetricEntryUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.CampaignMetricEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateManyMutationInput, Prisma.CampaignMetricEntryUncheckedUpdateManyWithoutProjectInput>;
};
export type CampaignMetricEntryCreateManyRecordedByInput = {
    id?: string;
    projectId: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type CampaignMetricEntryUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutCampaignMetricsNestedInput;
};
export type CampaignMetricEntryUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntryUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntryCreateManyProjectInput = {
    id?: string;
    metricType: $Enums.MetricType;
    periodStart: Date | string;
    periodEnd: Date | string;
    actualValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    recordedById: string;
    createdAt?: Date | string;
};
export type CampaignMetricEntryUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedCampaignMetricsNestedInput;
};
export type CampaignMetricEntryUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntryUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metricType?: Prisma.EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actualValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    plannedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignMetricEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    metricType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    actualValue?: boolean;
    plannedValue?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaignMetricEntry"]>;
export type CampaignMetricEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    metricType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    actualValue?: boolean;
    plannedValue?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaignMetricEntry"]>;
export type CampaignMetricEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    metricType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    actualValue?: boolean;
    plannedValue?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaignMetricEntry"]>;
export type CampaignMetricEntrySelectScalar = {
    id?: boolean;
    projectId?: boolean;
    metricType?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    actualValue?: boolean;
    plannedValue?: boolean;
    notes?: boolean;
    recordedById?: boolean;
    createdAt?: boolean;
};
export type CampaignMetricEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "metricType" | "periodStart" | "periodEnd" | "actualValue" | "plannedValue" | "notes" | "recordedById" | "createdAt", ExtArgs["result"]["campaignMetricEntry"]>;
export type CampaignMetricEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CampaignMetricEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CampaignMetricEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CampaignMetricEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CampaignMetricEntry";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        metricType: $Enums.MetricType;
        periodStart: Date;
        periodEnd: Date;
        actualValue: runtime.Decimal;
        plannedValue: runtime.Decimal | null;
        notes: string | null;
        recordedById: string;
        createdAt: Date;
    }, ExtArgs["result"]["campaignMetricEntry"]>;
    composites: {};
};
export type CampaignMetricEntryGetPayload<S extends boolean | null | undefined | CampaignMetricEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload, S>;
export type CampaignMetricEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignMetricEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignMetricEntryCountAggregateInputType | true;
};
export interface CampaignMetricEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CampaignMetricEntry'];
        meta: {
            name: 'CampaignMetricEntry';
        };
    };
    findUnique<T extends CampaignMetricEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CampaignMetricEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CampaignMetricEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignMetricEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CampaignMetricEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignMetricEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CampaignMetricEntryFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignMetricEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CampaignMetricEntryCreateArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CampaignMetricEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignMetricEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CampaignMetricEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignMetricEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CampaignMetricEntryDeleteArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CampaignMetricEntryUpdateArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CampaignMetricEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignMetricEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CampaignMetricEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CampaignMetricEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CampaignMetricEntryUpsertArgs>(args: Prisma.SelectSubset<T, CampaignMetricEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignMetricEntryClient<runtime.Types.Result.GetResult<Prisma.$CampaignMetricEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CampaignMetricEntryCountArgs>(args?: Prisma.Subset<T, CampaignMetricEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignMetricEntryCountAggregateOutputType> : number>;
    aggregate<T extends CampaignMetricEntryAggregateArgs>(args: Prisma.Subset<T, CampaignMetricEntryAggregateArgs>): Prisma.PrismaPromise<GetCampaignMetricEntryAggregateType<T>>;
    groupBy<T extends CampaignMetricEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignMetricEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignMetricEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignMetricEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignMetricEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CampaignMetricEntryFieldRefs;
}
export interface Prisma__CampaignMetricEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recordedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CampaignMetricEntryFieldRefs {
    readonly id: Prisma.FieldRef<"CampaignMetricEntry", 'String'>;
    readonly projectId: Prisma.FieldRef<"CampaignMetricEntry", 'String'>;
    readonly metricType: Prisma.FieldRef<"CampaignMetricEntry", 'MetricType'>;
    readonly periodStart: Prisma.FieldRef<"CampaignMetricEntry", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"CampaignMetricEntry", 'DateTime'>;
    readonly actualValue: Prisma.FieldRef<"CampaignMetricEntry", 'Decimal'>;
    readonly plannedValue: Prisma.FieldRef<"CampaignMetricEntry", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"CampaignMetricEntry", 'String'>;
    readonly recordedById: Prisma.FieldRef<"CampaignMetricEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CampaignMetricEntry", 'DateTime'>;
}
export type CampaignMetricEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
};
export type CampaignMetricEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
};
export type CampaignMetricEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where?: Prisma.CampaignMetricEntryWhereInput;
    orderBy?: Prisma.CampaignMetricEntryOrderByWithRelationInput | Prisma.CampaignMetricEntryOrderByWithRelationInput[];
    cursor?: Prisma.CampaignMetricEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignMetricEntryScalarFieldEnum | Prisma.CampaignMetricEntryScalarFieldEnum[];
};
export type CampaignMetricEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where?: Prisma.CampaignMetricEntryWhereInput;
    orderBy?: Prisma.CampaignMetricEntryOrderByWithRelationInput | Prisma.CampaignMetricEntryOrderByWithRelationInput[];
    cursor?: Prisma.CampaignMetricEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignMetricEntryScalarFieldEnum | Prisma.CampaignMetricEntryScalarFieldEnum[];
};
export type CampaignMetricEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where?: Prisma.CampaignMetricEntryWhereInput;
    orderBy?: Prisma.CampaignMetricEntryOrderByWithRelationInput | Prisma.CampaignMetricEntryOrderByWithRelationInput[];
    cursor?: Prisma.CampaignMetricEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignMetricEntryScalarFieldEnum | Prisma.CampaignMetricEntryScalarFieldEnum[];
};
export type CampaignMetricEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignMetricEntryCreateInput, Prisma.CampaignMetricEntryUncheckedCreateInput>;
};
export type CampaignMetricEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CampaignMetricEntryCreateManyInput | Prisma.CampaignMetricEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CampaignMetricEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    data: Prisma.CampaignMetricEntryCreateManyInput | Prisma.CampaignMetricEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CampaignMetricEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CampaignMetricEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateInput, Prisma.CampaignMetricEntryUncheckedUpdateInput>;
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
};
export type CampaignMetricEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateManyMutationInput, Prisma.CampaignMetricEntryUncheckedUpdateManyInput>;
    where?: Prisma.CampaignMetricEntryWhereInput;
    limit?: number;
};
export type CampaignMetricEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignMetricEntryUpdateManyMutationInput, Prisma.CampaignMetricEntryUncheckedUpdateManyInput>;
    where?: Prisma.CampaignMetricEntryWhereInput;
    limit?: number;
    include?: Prisma.CampaignMetricEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CampaignMetricEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignMetricEntryCreateInput, Prisma.CampaignMetricEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CampaignMetricEntryUpdateInput, Prisma.CampaignMetricEntryUncheckedUpdateInput>;
};
export type CampaignMetricEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
    where: Prisma.CampaignMetricEntryWhereUniqueInput;
};
export type CampaignMetricEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignMetricEntryWhereInput;
    limit?: number;
};
export type CampaignMetricEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignMetricEntrySelect<ExtArgs> | null;
    omit?: Prisma.CampaignMetricEntryOmit<ExtArgs> | null;
    include?: Prisma.CampaignMetricEntryInclude<ExtArgs> | null;
};
