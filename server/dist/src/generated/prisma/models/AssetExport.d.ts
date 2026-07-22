import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetExportModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetExportPayload>;
export type AggregateAssetExport = {
    _count: AssetExportCountAggregateOutputType | null;
    _min: AssetExportMinAggregateOutputType | null;
    _max: AssetExportMaxAggregateOutputType | null;
};
export type AssetExportMinAggregateOutputType = {
    id: string | null;
    assetRevisionId: string | null;
    format: $Enums.ExportFormat | null;
    status: $Enums.ExportStatus | null;
    objectKey: string | null;
    errorMessage: string | null;
    requestedById: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
};
export type AssetExportMaxAggregateOutputType = {
    id: string | null;
    assetRevisionId: string | null;
    format: $Enums.ExportFormat | null;
    status: $Enums.ExportStatus | null;
    objectKey: string | null;
    errorMessage: string | null;
    requestedById: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
};
export type AssetExportCountAggregateOutputType = {
    id: number;
    assetRevisionId: number;
    format: number;
    status: number;
    objectKey: number;
    errorMessage: number;
    requestedById: number;
    createdAt: number;
    completedAt: number;
    _all: number;
};
export type AssetExportMinAggregateInputType = {
    id?: true;
    assetRevisionId?: true;
    format?: true;
    status?: true;
    objectKey?: true;
    errorMessage?: true;
    requestedById?: true;
    createdAt?: true;
    completedAt?: true;
};
export type AssetExportMaxAggregateInputType = {
    id?: true;
    assetRevisionId?: true;
    format?: true;
    status?: true;
    objectKey?: true;
    errorMessage?: true;
    requestedById?: true;
    createdAt?: true;
    completedAt?: true;
};
export type AssetExportCountAggregateInputType = {
    id?: true;
    assetRevisionId?: true;
    format?: true;
    status?: true;
    objectKey?: true;
    errorMessage?: true;
    requestedById?: true;
    createdAt?: true;
    completedAt?: true;
    _all?: true;
};
export type AssetExportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetExportWhereInput;
    orderBy?: Prisma.AssetExportOrderByWithRelationInput | Prisma.AssetExportOrderByWithRelationInput[];
    cursor?: Prisma.AssetExportWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetExportCountAggregateInputType;
    _min?: AssetExportMinAggregateInputType;
    _max?: AssetExportMaxAggregateInputType;
};
export type GetAssetExportAggregateType<T extends AssetExportAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetExport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetExport[P]> : Prisma.GetScalarType<T[P], AggregateAssetExport[P]>;
};
export type AssetExportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetExportWhereInput;
    orderBy?: Prisma.AssetExportOrderByWithAggregationInput | Prisma.AssetExportOrderByWithAggregationInput[];
    by: Prisma.AssetExportScalarFieldEnum[] | Prisma.AssetExportScalarFieldEnum;
    having?: Prisma.AssetExportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetExportCountAggregateInputType | true;
    _min?: AssetExportMinAggregateInputType;
    _max?: AssetExportMaxAggregateInputType;
};
export type AssetExportGroupByOutputType = {
    id: string;
    assetRevisionId: string;
    format: $Enums.ExportFormat;
    status: $Enums.ExportStatus;
    objectKey: string | null;
    errorMessage: string | null;
    requestedById: string;
    createdAt: Date;
    completedAt: Date | null;
    _count: AssetExportCountAggregateOutputType | null;
    _min: AssetExportMinAggregateOutputType | null;
    _max: AssetExportMaxAggregateOutputType | null;
};
export type GetAssetExportGroupByPayload<T extends AssetExportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetExportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetExportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetExportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetExportGroupByOutputType[P]>;
}>>;
export type AssetExportWhereInput = {
    AND?: Prisma.AssetExportWhereInput | Prisma.AssetExportWhereInput[];
    OR?: Prisma.AssetExportWhereInput[];
    NOT?: Prisma.AssetExportWhereInput | Prisma.AssetExportWhereInput[];
    id?: Prisma.StringFilter<"AssetExport"> | string;
    assetRevisionId?: Prisma.StringFilter<"AssetExport"> | string;
    format?: Prisma.EnumExportFormatFilter<"AssetExport"> | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFilter<"AssetExport"> | $Enums.ExportStatus;
    objectKey?: Prisma.StringNullableFilter<"AssetExport"> | string | null;
    errorMessage?: Prisma.StringNullableFilter<"AssetExport"> | string | null;
    requestedById?: Prisma.StringFilter<"AssetExport"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetExport"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"AssetExport"> | Date | string | null;
    assetRevision?: Prisma.XOR<Prisma.AssetRevisionScalarRelationFilter, Prisma.AssetRevisionWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AssetExportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetRevisionId?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assetRevision?: Prisma.AssetRevisionOrderByWithRelationInput;
    requestedBy?: Prisma.UserOrderByWithRelationInput;
};
export type AssetExportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetExportWhereInput | Prisma.AssetExportWhereInput[];
    OR?: Prisma.AssetExportWhereInput[];
    NOT?: Prisma.AssetExportWhereInput | Prisma.AssetExportWhereInput[];
    assetRevisionId?: Prisma.StringFilter<"AssetExport"> | string;
    format?: Prisma.EnumExportFormatFilter<"AssetExport"> | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFilter<"AssetExport"> | $Enums.ExportStatus;
    objectKey?: Prisma.StringNullableFilter<"AssetExport"> | string | null;
    errorMessage?: Prisma.StringNullableFilter<"AssetExport"> | string | null;
    requestedById?: Prisma.StringFilter<"AssetExport"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetExport"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"AssetExport"> | Date | string | null;
    assetRevision?: Prisma.XOR<Prisma.AssetRevisionScalarRelationFilter, Prisma.AssetRevisionWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AssetExportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetRevisionId?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    errorMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AssetExportCountOrderByAggregateInput;
    _max?: Prisma.AssetExportMaxOrderByAggregateInput;
    _min?: Prisma.AssetExportMinOrderByAggregateInput;
};
export type AssetExportScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetExportScalarWhereWithAggregatesInput | Prisma.AssetExportScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetExportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetExportScalarWhereWithAggregatesInput | Prisma.AssetExportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AssetExport"> | string;
    assetRevisionId?: Prisma.StringWithAggregatesFilter<"AssetExport"> | string;
    format?: Prisma.EnumExportFormatWithAggregatesFilter<"AssetExport"> | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusWithAggregatesFilter<"AssetExport"> | $Enums.ExportStatus;
    objectKey?: Prisma.StringNullableWithAggregatesFilter<"AssetExport"> | string | null;
    errorMessage?: Prisma.StringNullableWithAggregatesFilter<"AssetExport"> | string | null;
    requestedById?: Prisma.StringWithAggregatesFilter<"AssetExport"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetExport"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetExport"> | Date | string | null;
};
export type AssetExportCreateInput = {
    id?: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    assetRevision: Prisma.AssetRevisionCreateNestedOneWithoutExportsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutRequestedAssetExportsInput;
};
export type AssetExportUncheckedCreateInput = {
    id?: string;
    assetRevisionId: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    requestedById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type AssetExportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assetRevision?: Prisma.AssetRevisionUpdateOneRequiredWithoutExportsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutRequestedAssetExportsNestedInput;
};
export type AssetExportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetRevisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportCreateManyInput = {
    id?: string;
    assetRevisionId: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    requestedById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type AssetExportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetRevisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportListRelationFilter = {
    every?: Prisma.AssetExportWhereInput;
    some?: Prisma.AssetExportWhereInput;
    none?: Prisma.AssetExportWhereInput;
};
export type AssetExportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetExportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetRevisionId?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type AssetExportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetRevisionId?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type AssetExportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetRevisionId?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    errorMessage?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type AssetExportCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutRequestedByInput, Prisma.AssetExportUncheckedCreateWithoutRequestedByInput> | Prisma.AssetExportCreateWithoutRequestedByInput[] | Prisma.AssetExportUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutRequestedByInput | Prisma.AssetExportCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.AssetExportCreateManyRequestedByInputEnvelope;
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
};
export type AssetExportUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutRequestedByInput, Prisma.AssetExportUncheckedCreateWithoutRequestedByInput> | Prisma.AssetExportCreateWithoutRequestedByInput[] | Prisma.AssetExportUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutRequestedByInput | Prisma.AssetExportCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.AssetExportCreateManyRequestedByInputEnvelope;
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
};
export type AssetExportUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutRequestedByInput, Prisma.AssetExportUncheckedCreateWithoutRequestedByInput> | Prisma.AssetExportCreateWithoutRequestedByInput[] | Prisma.AssetExportUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutRequestedByInput | Prisma.AssetExportCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.AssetExportUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.AssetExportUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.AssetExportCreateManyRequestedByInputEnvelope;
    set?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    disconnect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    delete?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    update?: Prisma.AssetExportUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.AssetExportUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.AssetExportUpdateManyWithWhereWithoutRequestedByInput | Prisma.AssetExportUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.AssetExportScalarWhereInput | Prisma.AssetExportScalarWhereInput[];
};
export type AssetExportUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutRequestedByInput, Prisma.AssetExportUncheckedCreateWithoutRequestedByInput> | Prisma.AssetExportCreateWithoutRequestedByInput[] | Prisma.AssetExportUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutRequestedByInput | Prisma.AssetExportCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.AssetExportUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.AssetExportUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.AssetExportCreateManyRequestedByInputEnvelope;
    set?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    disconnect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    delete?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    update?: Prisma.AssetExportUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.AssetExportUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.AssetExportUpdateManyWithWhereWithoutRequestedByInput | Prisma.AssetExportUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.AssetExportScalarWhereInput | Prisma.AssetExportScalarWhereInput[];
};
export type AssetExportCreateNestedManyWithoutAssetRevisionInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput> | Prisma.AssetExportCreateWithoutAssetRevisionInput[] | Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput | Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput[];
    createMany?: Prisma.AssetExportCreateManyAssetRevisionInputEnvelope;
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
};
export type AssetExportUncheckedCreateNestedManyWithoutAssetRevisionInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput> | Prisma.AssetExportCreateWithoutAssetRevisionInput[] | Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput | Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput[];
    createMany?: Prisma.AssetExportCreateManyAssetRevisionInputEnvelope;
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
};
export type AssetExportUpdateManyWithoutAssetRevisionNestedInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput> | Prisma.AssetExportCreateWithoutAssetRevisionInput[] | Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput | Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput[];
    upsert?: Prisma.AssetExportUpsertWithWhereUniqueWithoutAssetRevisionInput | Prisma.AssetExportUpsertWithWhereUniqueWithoutAssetRevisionInput[];
    createMany?: Prisma.AssetExportCreateManyAssetRevisionInputEnvelope;
    set?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    disconnect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    delete?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    update?: Prisma.AssetExportUpdateWithWhereUniqueWithoutAssetRevisionInput | Prisma.AssetExportUpdateWithWhereUniqueWithoutAssetRevisionInput[];
    updateMany?: Prisma.AssetExportUpdateManyWithWhereWithoutAssetRevisionInput | Prisma.AssetExportUpdateManyWithWhereWithoutAssetRevisionInput[];
    deleteMany?: Prisma.AssetExportScalarWhereInput | Prisma.AssetExportScalarWhereInput[];
};
export type AssetExportUncheckedUpdateManyWithoutAssetRevisionNestedInput = {
    create?: Prisma.XOR<Prisma.AssetExportCreateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput> | Prisma.AssetExportCreateWithoutAssetRevisionInput[] | Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput[];
    connectOrCreate?: Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput | Prisma.AssetExportCreateOrConnectWithoutAssetRevisionInput[];
    upsert?: Prisma.AssetExportUpsertWithWhereUniqueWithoutAssetRevisionInput | Prisma.AssetExportUpsertWithWhereUniqueWithoutAssetRevisionInput[];
    createMany?: Prisma.AssetExportCreateManyAssetRevisionInputEnvelope;
    set?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    disconnect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    delete?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    connect?: Prisma.AssetExportWhereUniqueInput | Prisma.AssetExportWhereUniqueInput[];
    update?: Prisma.AssetExportUpdateWithWhereUniqueWithoutAssetRevisionInput | Prisma.AssetExportUpdateWithWhereUniqueWithoutAssetRevisionInput[];
    updateMany?: Prisma.AssetExportUpdateManyWithWhereWithoutAssetRevisionInput | Prisma.AssetExportUpdateManyWithWhereWithoutAssetRevisionInput[];
    deleteMany?: Prisma.AssetExportScalarWhereInput | Prisma.AssetExportScalarWhereInput[];
};
export type EnumExportFormatFieldUpdateOperationsInput = {
    set?: $Enums.ExportFormat;
};
export type EnumExportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExportStatus;
};
export type AssetExportCreateWithoutRequestedByInput = {
    id?: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    assetRevision: Prisma.AssetRevisionCreateNestedOneWithoutExportsInput;
};
export type AssetExportUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    assetRevisionId: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type AssetExportCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.AssetExportWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetExportCreateWithoutRequestedByInput, Prisma.AssetExportUncheckedCreateWithoutRequestedByInput>;
};
export type AssetExportCreateManyRequestedByInputEnvelope = {
    data: Prisma.AssetExportCreateManyRequestedByInput | Prisma.AssetExportCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type AssetExportUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.AssetExportWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetExportUpdateWithoutRequestedByInput, Prisma.AssetExportUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.AssetExportCreateWithoutRequestedByInput, Prisma.AssetExportUncheckedCreateWithoutRequestedByInput>;
};
export type AssetExportUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.AssetExportWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetExportUpdateWithoutRequestedByInput, Prisma.AssetExportUncheckedUpdateWithoutRequestedByInput>;
};
export type AssetExportUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.AssetExportScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetExportUpdateManyMutationInput, Prisma.AssetExportUncheckedUpdateManyWithoutRequestedByInput>;
};
export type AssetExportScalarWhereInput = {
    AND?: Prisma.AssetExportScalarWhereInput | Prisma.AssetExportScalarWhereInput[];
    OR?: Prisma.AssetExportScalarWhereInput[];
    NOT?: Prisma.AssetExportScalarWhereInput | Prisma.AssetExportScalarWhereInput[];
    id?: Prisma.StringFilter<"AssetExport"> | string;
    assetRevisionId?: Prisma.StringFilter<"AssetExport"> | string;
    format?: Prisma.EnumExportFormatFilter<"AssetExport"> | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFilter<"AssetExport"> | $Enums.ExportStatus;
    objectKey?: Prisma.StringNullableFilter<"AssetExport"> | string | null;
    errorMessage?: Prisma.StringNullableFilter<"AssetExport"> | string | null;
    requestedById?: Prisma.StringFilter<"AssetExport"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetExport"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"AssetExport"> | Date | string | null;
};
export type AssetExportCreateWithoutAssetRevisionInput = {
    id?: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
    requestedBy: Prisma.UserCreateNestedOneWithoutRequestedAssetExportsInput;
};
export type AssetExportUncheckedCreateWithoutAssetRevisionInput = {
    id?: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    requestedById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type AssetExportCreateOrConnectWithoutAssetRevisionInput = {
    where: Prisma.AssetExportWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetExportCreateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput>;
};
export type AssetExportCreateManyAssetRevisionInputEnvelope = {
    data: Prisma.AssetExportCreateManyAssetRevisionInput | Prisma.AssetExportCreateManyAssetRevisionInput[];
    skipDuplicates?: boolean;
};
export type AssetExportUpsertWithWhereUniqueWithoutAssetRevisionInput = {
    where: Prisma.AssetExportWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetExportUpdateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedUpdateWithoutAssetRevisionInput>;
    create: Prisma.XOR<Prisma.AssetExportCreateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedCreateWithoutAssetRevisionInput>;
};
export type AssetExportUpdateWithWhereUniqueWithoutAssetRevisionInput = {
    where: Prisma.AssetExportWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetExportUpdateWithoutAssetRevisionInput, Prisma.AssetExportUncheckedUpdateWithoutAssetRevisionInput>;
};
export type AssetExportUpdateManyWithWhereWithoutAssetRevisionInput = {
    where: Prisma.AssetExportScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetExportUpdateManyMutationInput, Prisma.AssetExportUncheckedUpdateManyWithoutAssetRevisionInput>;
};
export type AssetExportCreateManyRequestedByInput = {
    id?: string;
    assetRevisionId: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type AssetExportUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assetRevision?: Prisma.AssetRevisionUpdateOneRequiredWithoutExportsNestedInput;
};
export type AssetExportUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetRevisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetRevisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportCreateManyAssetRevisionInput = {
    id?: string;
    format: $Enums.ExportFormat;
    status?: $Enums.ExportStatus;
    objectKey?: string | null;
    errorMessage?: string | null;
    requestedById: string;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type AssetExportUpdateWithoutAssetRevisionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutRequestedAssetExportsNestedInput;
};
export type AssetExportUncheckedUpdateWithoutAssetRevisionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportUncheckedUpdateManyWithoutAssetRevisionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.EnumExportFormatFieldUpdateOperationsInput | $Enums.ExportFormat;
    status?: Prisma.EnumExportStatusFieldUpdateOperationsInput | $Enums.ExportStatus;
    objectKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    errorMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AssetExportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetRevisionId?: boolean;
    format?: boolean;
    status?: boolean;
    objectKey?: boolean;
    errorMessage?: boolean;
    requestedById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    assetRevision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetExport"]>;
export type AssetExportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetRevisionId?: boolean;
    format?: boolean;
    status?: boolean;
    objectKey?: boolean;
    errorMessage?: boolean;
    requestedById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    assetRevision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetExport"]>;
export type AssetExportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetRevisionId?: boolean;
    format?: boolean;
    status?: boolean;
    objectKey?: boolean;
    errorMessage?: boolean;
    requestedById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
    assetRevision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetExport"]>;
export type AssetExportSelectScalar = {
    id?: boolean;
    assetRevisionId?: boolean;
    format?: boolean;
    status?: boolean;
    objectKey?: boolean;
    errorMessage?: boolean;
    requestedById?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
};
export type AssetExportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetRevisionId" | "format" | "status" | "objectKey" | "errorMessage" | "requestedById" | "createdAt" | "completedAt", ExtArgs["result"]["assetExport"]>;
export type AssetExportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assetRevision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AssetExportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assetRevision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AssetExportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assetRevision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AssetExportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetExport";
    objects: {
        assetRevision: Prisma.$AssetRevisionPayload<ExtArgs>;
        requestedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetRevisionId: string;
        format: $Enums.ExportFormat;
        status: $Enums.ExportStatus;
        objectKey: string | null;
        errorMessage: string | null;
        requestedById: string;
        createdAt: Date;
        completedAt: Date | null;
    }, ExtArgs["result"]["assetExport"]>;
    composites: {};
};
export type AssetExportGetPayload<S extends boolean | null | undefined | AssetExportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetExportPayload, S>;
export type AssetExportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetExportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetExportCountAggregateInputType | true;
};
export interface AssetExportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetExport'];
        meta: {
            name: 'AssetExport';
        };
    };
    findUnique<T extends AssetExportFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetExportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetExportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetExportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetExportFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetExportFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetExportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetExportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetExportFindManyArgs>(args?: Prisma.SelectSubset<T, AssetExportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetExportCreateArgs>(args: Prisma.SelectSubset<T, AssetExportCreateArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetExportCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetExportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetExportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetExportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetExportDeleteArgs>(args: Prisma.SelectSubset<T, AssetExportDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetExportUpdateArgs>(args: Prisma.SelectSubset<T, AssetExportUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetExportDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetExportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetExportUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetExportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetExportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetExportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetExportUpsertArgs>(args: Prisma.SelectSubset<T, AssetExportUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetExportClient<runtime.Types.Result.GetResult<Prisma.$AssetExportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetExportCountArgs>(args?: Prisma.Subset<T, AssetExportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetExportCountAggregateOutputType> : number>;
    aggregate<T extends AssetExportAggregateArgs>(args: Prisma.Subset<T, AssetExportAggregateArgs>): Prisma.PrismaPromise<GetAssetExportAggregateType<T>>;
    groupBy<T extends AssetExportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetExportGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetExportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetExportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetExportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetExportFieldRefs;
}
export interface Prisma__AssetExportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assetRevision<T extends Prisma.AssetRevisionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRevisionDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetRevisionClient<runtime.Types.Result.GetResult<Prisma.$AssetRevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetExportFieldRefs {
    readonly id: Prisma.FieldRef<"AssetExport", 'String'>;
    readonly assetRevisionId: Prisma.FieldRef<"AssetExport", 'String'>;
    readonly format: Prisma.FieldRef<"AssetExport", 'ExportFormat'>;
    readonly status: Prisma.FieldRef<"AssetExport", 'ExportStatus'>;
    readonly objectKey: Prisma.FieldRef<"AssetExport", 'String'>;
    readonly errorMessage: Prisma.FieldRef<"AssetExport", 'String'>;
    readonly requestedById: Prisma.FieldRef<"AssetExport", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetExport", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"AssetExport", 'DateTime'>;
}
export type AssetExportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where: Prisma.AssetExportWhereUniqueInput;
};
export type AssetExportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where: Prisma.AssetExportWhereUniqueInput;
};
export type AssetExportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where?: Prisma.AssetExportWhereInput;
    orderBy?: Prisma.AssetExportOrderByWithRelationInput | Prisma.AssetExportOrderByWithRelationInput[];
    cursor?: Prisma.AssetExportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetExportScalarFieldEnum | Prisma.AssetExportScalarFieldEnum[];
};
export type AssetExportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where?: Prisma.AssetExportWhereInput;
    orderBy?: Prisma.AssetExportOrderByWithRelationInput | Prisma.AssetExportOrderByWithRelationInput[];
    cursor?: Prisma.AssetExportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetExportScalarFieldEnum | Prisma.AssetExportScalarFieldEnum[];
};
export type AssetExportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where?: Prisma.AssetExportWhereInput;
    orderBy?: Prisma.AssetExportOrderByWithRelationInput | Prisma.AssetExportOrderByWithRelationInput[];
    cursor?: Prisma.AssetExportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetExportScalarFieldEnum | Prisma.AssetExportScalarFieldEnum[];
};
export type AssetExportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetExportCreateInput, Prisma.AssetExportUncheckedCreateInput>;
};
export type AssetExportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetExportCreateManyInput | Prisma.AssetExportCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetExportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    data: Prisma.AssetExportCreateManyInput | Prisma.AssetExportCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetExportIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetExportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetExportUpdateInput, Prisma.AssetExportUncheckedUpdateInput>;
    where: Prisma.AssetExportWhereUniqueInput;
};
export type AssetExportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetExportUpdateManyMutationInput, Prisma.AssetExportUncheckedUpdateManyInput>;
    where?: Prisma.AssetExportWhereInput;
    limit?: number;
};
export type AssetExportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetExportUpdateManyMutationInput, Prisma.AssetExportUncheckedUpdateManyInput>;
    where?: Prisma.AssetExportWhereInput;
    limit?: number;
    include?: Prisma.AssetExportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetExportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where: Prisma.AssetExportWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetExportCreateInput, Prisma.AssetExportUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetExportUpdateInput, Prisma.AssetExportUncheckedUpdateInput>;
};
export type AssetExportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
    where: Prisma.AssetExportWhereUniqueInput;
};
export type AssetExportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetExportWhereInput;
    limit?: number;
};
export type AssetExportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetExportSelect<ExtArgs> | null;
    omit?: Prisma.AssetExportOmit<ExtArgs> | null;
    include?: Prisma.AssetExportInclude<ExtArgs> | null;
};
