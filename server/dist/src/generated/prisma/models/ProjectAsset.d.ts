import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectAssetModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectAssetPayload>;
export type AggregateProjectAsset = {
    _count: ProjectAssetCountAggregateOutputType | null;
    _min: ProjectAssetMinAggregateOutputType | null;
    _max: ProjectAssetMaxAggregateOutputType | null;
};
export type ProjectAssetMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    templateId: string | null;
    name: string | null;
    createdById: string | null;
    unlinkedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProjectAssetMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    templateId: string | null;
    name: string | null;
    createdById: string | null;
    unlinkedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProjectAssetCountAggregateOutputType = {
    id: number;
    projectId: number;
    templateId: number;
    name: number;
    createdById: number;
    unlinkedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProjectAssetMinAggregateInputType = {
    id?: true;
    projectId?: true;
    templateId?: true;
    name?: true;
    createdById?: true;
    unlinkedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProjectAssetMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    templateId?: true;
    name?: true;
    createdById?: true;
    unlinkedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProjectAssetCountAggregateInputType = {
    id?: true;
    projectId?: true;
    templateId?: true;
    name?: true;
    createdById?: true;
    unlinkedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProjectAssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectAssetWhereInput;
    orderBy?: Prisma.ProjectAssetOrderByWithRelationInput | Prisma.ProjectAssetOrderByWithRelationInput[];
    cursor?: Prisma.ProjectAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectAssetCountAggregateInputType;
    _min?: ProjectAssetMinAggregateInputType;
    _max?: ProjectAssetMaxAggregateInputType;
};
export type GetProjectAssetAggregateType<T extends ProjectAssetAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProjectAsset[P]> : Prisma.GetScalarType<T[P], AggregateProjectAsset[P]>;
};
export type ProjectAssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectAssetWhereInput;
    orderBy?: Prisma.ProjectAssetOrderByWithAggregationInput | Prisma.ProjectAssetOrderByWithAggregationInput[];
    by: Prisma.ProjectAssetScalarFieldEnum[] | Prisma.ProjectAssetScalarFieldEnum;
    having?: Prisma.ProjectAssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectAssetCountAggregateInputType | true;
    _min?: ProjectAssetMinAggregateInputType;
    _max?: ProjectAssetMaxAggregateInputType;
};
export type ProjectAssetGroupByOutputType = {
    id: string;
    projectId: string;
    templateId: string;
    name: string;
    createdById: string;
    unlinkedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProjectAssetCountAggregateOutputType | null;
    _min: ProjectAssetMinAggregateOutputType | null;
    _max: ProjectAssetMaxAggregateOutputType | null;
};
export type GetProjectAssetGroupByPayload<T extends ProjectAssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectAssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectAssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectAssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectAssetGroupByOutputType[P]>;
}>>;
export type ProjectAssetWhereInput = {
    AND?: Prisma.ProjectAssetWhereInput | Prisma.ProjectAssetWhereInput[];
    OR?: Prisma.ProjectAssetWhereInput[];
    NOT?: Prisma.ProjectAssetWhereInput | Prisma.ProjectAssetWhereInput[];
    id?: Prisma.StringFilter<"ProjectAsset"> | string;
    projectId?: Prisma.StringFilter<"ProjectAsset"> | string;
    templateId?: Prisma.StringFilter<"ProjectAsset"> | string;
    name?: Prisma.StringFilter<"ProjectAsset"> | string;
    createdById?: Prisma.StringFilter<"ProjectAsset"> | string;
    unlinkedAt?: Prisma.DateTimeNullableFilter<"ProjectAsset"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProjectAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProjectAsset"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    template?: Prisma.XOR<Prisma.DesignTemplateScalarRelationFilter, Prisma.DesignTemplateWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    revisions?: Prisma.AssetRevisionListRelationFilter;
};
export type ProjectAssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    template?: Prisma.DesignTemplateOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    revisions?: Prisma.AssetRevisionOrderByRelationAggregateInput;
};
export type ProjectAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProjectAssetWhereInput | Prisma.ProjectAssetWhereInput[];
    OR?: Prisma.ProjectAssetWhereInput[];
    NOT?: Prisma.ProjectAssetWhereInput | Prisma.ProjectAssetWhereInput[];
    projectId?: Prisma.StringFilter<"ProjectAsset"> | string;
    templateId?: Prisma.StringFilter<"ProjectAsset"> | string;
    name?: Prisma.StringFilter<"ProjectAsset"> | string;
    createdById?: Prisma.StringFilter<"ProjectAsset"> | string;
    unlinkedAt?: Prisma.DateTimeNullableFilter<"ProjectAsset"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProjectAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProjectAsset"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    template?: Prisma.XOR<Prisma.DesignTemplateScalarRelationFilter, Prisma.DesignTemplateWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    revisions?: Prisma.AssetRevisionListRelationFilter;
}, "id">;
export type ProjectAssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProjectAssetCountOrderByAggregateInput;
    _max?: Prisma.ProjectAssetMaxOrderByAggregateInput;
    _min?: Prisma.ProjectAssetMinOrderByAggregateInput;
};
export type ProjectAssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectAssetScalarWhereWithAggregatesInput | Prisma.ProjectAssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectAssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectAssetScalarWhereWithAggregatesInput | Prisma.ProjectAssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProjectAsset"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"ProjectAsset"> | string;
    templateId?: Prisma.StringWithAggregatesFilter<"ProjectAsset"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ProjectAsset"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"ProjectAsset"> | string;
    unlinkedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ProjectAsset"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProjectAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProjectAsset"> | Date | string;
};
export type ProjectAssetCreateInput = {
    id?: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutAssetsInput;
    template: Prisma.DesignTemplateCreateNestedOneWithoutAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedProjectAssetsInput;
    revisions?: Prisma.AssetRevisionCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetUncheckedCreateInput = {
    id?: string;
    projectId: string;
    templateId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.AssetRevisionUncheckedCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutAssetsNestedInput;
    template?: Prisma.DesignTemplateUpdateOneRequiredWithoutAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectAssetsNestedInput;
    revisions?: Prisma.AssetRevisionUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.AssetRevisionUncheckedUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetCreateManyInput = {
    id?: string;
    projectId: string;
    templateId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectAssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectAssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectAssetListRelationFilter = {
    every?: Prisma.ProjectAssetWhereInput;
    some?: Prisma.ProjectAssetWhereInput;
    none?: Prisma.ProjectAssetWhereInput;
};
export type ProjectAssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectAssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProjectAssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProjectAssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProjectAssetScalarRelationFilter = {
    is?: Prisma.ProjectAssetWhereInput;
    isNot?: Prisma.ProjectAssetWhereInput;
};
export type ProjectAssetCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput> | Prisma.ProjectAssetCreateWithoutCreatedByInput[] | Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput | Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ProjectAssetCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
};
export type ProjectAssetUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput> | Prisma.ProjectAssetCreateWithoutCreatedByInput[] | Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput | Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ProjectAssetCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
};
export type ProjectAssetUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput> | Prisma.ProjectAssetCreateWithoutCreatedByInput[] | Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput | Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ProjectAssetUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ProjectAssetUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ProjectAssetCreateManyCreatedByInputEnvelope;
    set?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    disconnect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    delete?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    update?: Prisma.ProjectAssetUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ProjectAssetUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ProjectAssetUpdateManyWithWhereWithoutCreatedByInput | Prisma.ProjectAssetUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
};
export type ProjectAssetUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput> | Prisma.ProjectAssetCreateWithoutCreatedByInput[] | Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput | Prisma.ProjectAssetCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ProjectAssetUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ProjectAssetUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ProjectAssetCreateManyCreatedByInputEnvelope;
    set?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    disconnect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    delete?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    update?: Prisma.ProjectAssetUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ProjectAssetUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ProjectAssetUpdateManyWithWhereWithoutCreatedByInput | Prisma.ProjectAssetUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
};
export type ProjectAssetCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutProjectInput, Prisma.ProjectAssetUncheckedCreateWithoutProjectInput> | Prisma.ProjectAssetCreateWithoutProjectInput[] | Prisma.ProjectAssetUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutProjectInput | Prisma.ProjectAssetCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectAssetCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
};
export type ProjectAssetUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutProjectInput, Prisma.ProjectAssetUncheckedCreateWithoutProjectInput> | Prisma.ProjectAssetCreateWithoutProjectInput[] | Prisma.ProjectAssetUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutProjectInput | Prisma.ProjectAssetCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectAssetCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
};
export type ProjectAssetUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutProjectInput, Prisma.ProjectAssetUncheckedCreateWithoutProjectInput> | Prisma.ProjectAssetCreateWithoutProjectInput[] | Prisma.ProjectAssetUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutProjectInput | Prisma.ProjectAssetCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectAssetCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    disconnect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    delete?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    update?: Prisma.ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectAssetUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectAssetUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
};
export type ProjectAssetUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutProjectInput, Prisma.ProjectAssetUncheckedCreateWithoutProjectInput> | Prisma.ProjectAssetCreateWithoutProjectInput[] | Prisma.ProjectAssetUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutProjectInput | Prisma.ProjectAssetCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectAssetUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectAssetUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectAssetCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    disconnect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    delete?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    update?: Prisma.ProjectAssetUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectAssetUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectAssetUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectAssetUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
};
export type ProjectAssetCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutTemplateInput, Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput> | Prisma.ProjectAssetCreateWithoutTemplateInput[] | Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput | Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.ProjectAssetCreateManyTemplateInputEnvelope;
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
};
export type ProjectAssetUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutTemplateInput, Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput> | Prisma.ProjectAssetCreateWithoutTemplateInput[] | Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput | Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.ProjectAssetCreateManyTemplateInputEnvelope;
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
};
export type ProjectAssetUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutTemplateInput, Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput> | Prisma.ProjectAssetCreateWithoutTemplateInput[] | Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput | Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.ProjectAssetUpsertWithWhereUniqueWithoutTemplateInput | Prisma.ProjectAssetUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.ProjectAssetCreateManyTemplateInputEnvelope;
    set?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    disconnect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    delete?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    update?: Prisma.ProjectAssetUpdateWithWhereUniqueWithoutTemplateInput | Prisma.ProjectAssetUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.ProjectAssetUpdateManyWithWhereWithoutTemplateInput | Prisma.ProjectAssetUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
};
export type ProjectAssetUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutTemplateInput, Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput> | Prisma.ProjectAssetCreateWithoutTemplateInput[] | Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput | Prisma.ProjectAssetCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.ProjectAssetUpsertWithWhereUniqueWithoutTemplateInput | Prisma.ProjectAssetUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.ProjectAssetCreateManyTemplateInputEnvelope;
    set?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    disconnect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    delete?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    connect?: Prisma.ProjectAssetWhereUniqueInput | Prisma.ProjectAssetWhereUniqueInput[];
    update?: Prisma.ProjectAssetUpdateWithWhereUniqueWithoutTemplateInput | Prisma.ProjectAssetUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.ProjectAssetUpdateManyWithWhereWithoutTemplateInput | Prisma.ProjectAssetUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
};
export type ProjectAssetCreateNestedOneWithoutRevisionsInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutRevisionsInput, Prisma.ProjectAssetUncheckedCreateWithoutRevisionsInput>;
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutRevisionsInput;
    connect?: Prisma.ProjectAssetWhereUniqueInput;
};
export type ProjectAssetUpdateOneRequiredWithoutRevisionsNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectAssetCreateWithoutRevisionsInput, Prisma.ProjectAssetUncheckedCreateWithoutRevisionsInput>;
    connectOrCreate?: Prisma.ProjectAssetCreateOrConnectWithoutRevisionsInput;
    upsert?: Prisma.ProjectAssetUpsertWithoutRevisionsInput;
    connect?: Prisma.ProjectAssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProjectAssetUpdateToOneWithWhereWithoutRevisionsInput, Prisma.ProjectAssetUpdateWithoutRevisionsInput>, Prisma.ProjectAssetUncheckedUpdateWithoutRevisionsInput>;
};
export type ProjectAssetCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutAssetsInput;
    template: Prisma.DesignTemplateCreateNestedOneWithoutAssetsInput;
    revisions?: Prisma.AssetRevisionCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    projectId: string;
    templateId: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.AssetRevisionUncheckedCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput>;
};
export type ProjectAssetCreateManyCreatedByInputEnvelope = {
    data: Prisma.ProjectAssetCreateManyCreatedByInput | Prisma.ProjectAssetCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ProjectAssetUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedCreateWithoutCreatedByInput>;
};
export type ProjectAssetUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutCreatedByInput, Prisma.ProjectAssetUncheckedUpdateWithoutCreatedByInput>;
};
export type ProjectAssetUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ProjectAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateManyMutationInput, Prisma.ProjectAssetUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ProjectAssetScalarWhereInput = {
    AND?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
    OR?: Prisma.ProjectAssetScalarWhereInput[];
    NOT?: Prisma.ProjectAssetScalarWhereInput | Prisma.ProjectAssetScalarWhereInput[];
    id?: Prisma.StringFilter<"ProjectAsset"> | string;
    projectId?: Prisma.StringFilter<"ProjectAsset"> | string;
    templateId?: Prisma.StringFilter<"ProjectAsset"> | string;
    name?: Prisma.StringFilter<"ProjectAsset"> | string;
    createdById?: Prisma.StringFilter<"ProjectAsset"> | string;
    unlinkedAt?: Prisma.DateTimeNullableFilter<"ProjectAsset"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProjectAsset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProjectAsset"> | Date | string;
};
export type ProjectAssetCreateWithoutProjectInput = {
    id?: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    template: Prisma.DesignTemplateCreateNestedOneWithoutAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedProjectAssetsInput;
    revisions?: Prisma.AssetRevisionCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetUncheckedCreateWithoutProjectInput = {
    id?: string;
    templateId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.AssetRevisionUncheckedCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetCreateOrConnectWithoutProjectInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutProjectInput, Prisma.ProjectAssetUncheckedCreateWithoutProjectInput>;
};
export type ProjectAssetCreateManyProjectInputEnvelope = {
    data: Prisma.ProjectAssetCreateManyProjectInput | Prisma.ProjectAssetCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ProjectAssetUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutProjectInput, Prisma.ProjectAssetUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutProjectInput, Prisma.ProjectAssetUncheckedCreateWithoutProjectInput>;
};
export type ProjectAssetUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutProjectInput, Prisma.ProjectAssetUncheckedUpdateWithoutProjectInput>;
};
export type ProjectAssetUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ProjectAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateManyMutationInput, Prisma.ProjectAssetUncheckedUpdateManyWithoutProjectInput>;
};
export type ProjectAssetCreateWithoutTemplateInput = {
    id?: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedProjectAssetsInput;
    revisions?: Prisma.AssetRevisionCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetUncheckedCreateWithoutTemplateInput = {
    id?: string;
    projectId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    revisions?: Prisma.AssetRevisionUncheckedCreateNestedManyWithoutProjectAssetInput;
};
export type ProjectAssetCreateOrConnectWithoutTemplateInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutTemplateInput, Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput>;
};
export type ProjectAssetCreateManyTemplateInputEnvelope = {
    data: Prisma.ProjectAssetCreateManyTemplateInput | Prisma.ProjectAssetCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type ProjectAssetUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutTemplateInput, Prisma.ProjectAssetUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutTemplateInput, Prisma.ProjectAssetUncheckedCreateWithoutTemplateInput>;
};
export type ProjectAssetUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutTemplateInput, Prisma.ProjectAssetUncheckedUpdateWithoutTemplateInput>;
};
export type ProjectAssetUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.ProjectAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateManyMutationInput, Prisma.ProjectAssetUncheckedUpdateManyWithoutTemplateInput>;
};
export type ProjectAssetCreateWithoutRevisionsInput = {
    id?: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutAssetsInput;
    template: Prisma.DesignTemplateCreateNestedOneWithoutAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedProjectAssetsInput;
};
export type ProjectAssetUncheckedCreateWithoutRevisionsInput = {
    id?: string;
    projectId: string;
    templateId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectAssetCreateOrConnectWithoutRevisionsInput = {
    where: Prisma.ProjectAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutRevisionsInput, Prisma.ProjectAssetUncheckedCreateWithoutRevisionsInput>;
};
export type ProjectAssetUpsertWithoutRevisionsInput = {
    update: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutRevisionsInput, Prisma.ProjectAssetUncheckedUpdateWithoutRevisionsInput>;
    create: Prisma.XOR<Prisma.ProjectAssetCreateWithoutRevisionsInput, Prisma.ProjectAssetUncheckedCreateWithoutRevisionsInput>;
    where?: Prisma.ProjectAssetWhereInput;
};
export type ProjectAssetUpdateToOneWithWhereWithoutRevisionsInput = {
    where?: Prisma.ProjectAssetWhereInput;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateWithoutRevisionsInput, Prisma.ProjectAssetUncheckedUpdateWithoutRevisionsInput>;
};
export type ProjectAssetUpdateWithoutRevisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutAssetsNestedInput;
    template?: Prisma.DesignTemplateUpdateOneRequiredWithoutAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectAssetsNestedInput;
};
export type ProjectAssetUncheckedUpdateWithoutRevisionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectAssetCreateManyCreatedByInput = {
    id?: string;
    projectId: string;
    templateId: string;
    name: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectAssetUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutAssetsNestedInput;
    template?: Prisma.DesignTemplateUpdateOneRequiredWithoutAssetsNestedInput;
    revisions?: Prisma.AssetRevisionUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.AssetRevisionUncheckedUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectAssetCreateManyProjectInput = {
    id?: string;
    templateId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectAssetUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    template?: Prisma.DesignTemplateUpdateOneRequiredWithoutAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectAssetsNestedInput;
    revisions?: Prisma.AssetRevisionUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.AssetRevisionUncheckedUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectAssetCreateManyTemplateInput = {
    id?: string;
    projectId: string;
    name: string;
    createdById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProjectAssetUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedProjectAssetsNestedInput;
    revisions?: Prisma.AssetRevisionUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revisions?: Prisma.AssetRevisionUncheckedUpdateManyWithoutProjectAssetNestedInput;
};
export type ProjectAssetUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProjectAssetCountOutputType = {
    revisions: number;
};
export type ProjectAssetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revisions?: boolean | ProjectAssetCountOutputTypeCountRevisionsArgs;
};
export type ProjectAssetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetCountOutputTypeSelect<ExtArgs> | null;
};
export type ProjectAssetCountOutputTypeCountRevisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRevisionWhereInput;
};
export type ProjectAssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    templateId?: boolean;
    name?: boolean;
    createdById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    revisions?: boolean | Prisma.ProjectAsset$revisionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectAssetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectAsset"]>;
export type ProjectAssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    templateId?: boolean;
    name?: boolean;
    createdById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectAsset"]>;
export type ProjectAssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    templateId?: boolean;
    name?: boolean;
    createdById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectAsset"]>;
export type ProjectAssetSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    templateId?: boolean;
    name?: boolean;
    createdById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProjectAssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "templateId" | "name" | "createdById" | "unlinkedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["projectAsset"]>;
export type ProjectAssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    revisions?: boolean | Prisma.ProjectAsset$revisionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProjectAssetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProjectAssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProjectAssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProjectAssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProjectAsset";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        template: Prisma.$DesignTemplatePayload<ExtArgs>;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        revisions: Prisma.$AssetRevisionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        templateId: string;
        name: string;
        createdById: string;
        unlinkedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["projectAsset"]>;
    composites: {};
};
export type ProjectAssetGetPayload<S extends boolean | null | undefined | ProjectAssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload, S>;
export type ProjectAssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectAssetCountAggregateInputType | true;
};
export interface ProjectAssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProjectAsset'];
        meta: {
            name: 'ProjectAsset';
        };
    };
    findUnique<T extends ProjectAssetFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectAssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectAssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectAssetFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectAssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectAssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectAssetFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectAssetCreateArgs>(args: Prisma.SelectSubset<T, ProjectAssetCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectAssetCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectAssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectAssetDeleteArgs>(args: Prisma.SelectSubset<T, ProjectAssetDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectAssetUpdateArgs>(args: Prisma.SelectSubset<T, ProjectAssetUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectAssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectAssetUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectAssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectAssetUpsertArgs>(args: Prisma.SelectSubset<T, ProjectAssetUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectAssetClient<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectAssetCountArgs>(args?: Prisma.Subset<T, ProjectAssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectAssetCountAggregateOutputType> : number>;
    aggregate<T extends ProjectAssetAggregateArgs>(args: Prisma.Subset<T, ProjectAssetAggregateArgs>): Prisma.PrismaPromise<GetProjectAssetAggregateType<T>>;
    groupBy<T extends ProjectAssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectAssetGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectAssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectAssetFieldRefs;
}
export interface Prisma__ProjectAssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    template<T extends Prisma.DesignTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    revisions<T extends Prisma.ProjectAsset$revisionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectAsset$revisionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectAssetFieldRefs {
    readonly id: Prisma.FieldRef<"ProjectAsset", 'String'>;
    readonly projectId: Prisma.FieldRef<"ProjectAsset", 'String'>;
    readonly templateId: Prisma.FieldRef<"ProjectAsset", 'String'>;
    readonly name: Prisma.FieldRef<"ProjectAsset", 'String'>;
    readonly createdById: Prisma.FieldRef<"ProjectAsset", 'String'>;
    readonly unlinkedAt: Prisma.FieldRef<"ProjectAsset", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ProjectAsset", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProjectAsset", 'DateTime'>;
}
export type ProjectAssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where: Prisma.ProjectAssetWhereUniqueInput;
};
export type ProjectAssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where: Prisma.ProjectAssetWhereUniqueInput;
};
export type ProjectAssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where?: Prisma.ProjectAssetWhereInput;
    orderBy?: Prisma.ProjectAssetOrderByWithRelationInput | Prisma.ProjectAssetOrderByWithRelationInput[];
    cursor?: Prisma.ProjectAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectAssetScalarFieldEnum | Prisma.ProjectAssetScalarFieldEnum[];
};
export type ProjectAssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where?: Prisma.ProjectAssetWhereInput;
    orderBy?: Prisma.ProjectAssetOrderByWithRelationInput | Prisma.ProjectAssetOrderByWithRelationInput[];
    cursor?: Prisma.ProjectAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectAssetScalarFieldEnum | Prisma.ProjectAssetScalarFieldEnum[];
};
export type ProjectAssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where?: Prisma.ProjectAssetWhereInput;
    orderBy?: Prisma.ProjectAssetOrderByWithRelationInput | Prisma.ProjectAssetOrderByWithRelationInput[];
    cursor?: Prisma.ProjectAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectAssetScalarFieldEnum | Prisma.ProjectAssetScalarFieldEnum[];
};
export type ProjectAssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectAssetCreateInput, Prisma.ProjectAssetUncheckedCreateInput>;
};
export type ProjectAssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectAssetCreateManyInput | Prisma.ProjectAssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectAssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    data: Prisma.ProjectAssetCreateManyInput | Prisma.ProjectAssetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectAssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectAssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateInput, Prisma.ProjectAssetUncheckedUpdateInput>;
    where: Prisma.ProjectAssetWhereUniqueInput;
};
export type ProjectAssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectAssetUpdateManyMutationInput, Prisma.ProjectAssetUncheckedUpdateManyInput>;
    where?: Prisma.ProjectAssetWhereInput;
    limit?: number;
};
export type ProjectAssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectAssetUpdateManyMutationInput, Prisma.ProjectAssetUncheckedUpdateManyInput>;
    where?: Prisma.ProjectAssetWhereInput;
    limit?: number;
    include?: Prisma.ProjectAssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectAssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where: Prisma.ProjectAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectAssetCreateInput, Prisma.ProjectAssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectAssetUpdateInput, Prisma.ProjectAssetUncheckedUpdateInput>;
};
export type ProjectAssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
    where: Prisma.ProjectAssetWhereUniqueInput;
};
export type ProjectAssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectAssetWhereInput;
    limit?: number;
};
export type ProjectAsset$revisionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRevisionSelect<ExtArgs> | null;
    omit?: Prisma.AssetRevisionOmit<ExtArgs> | null;
    include?: Prisma.AssetRevisionInclude<ExtArgs> | null;
    where?: Prisma.AssetRevisionWhereInput;
    orderBy?: Prisma.AssetRevisionOrderByWithRelationInput | Prisma.AssetRevisionOrderByWithRelationInput[];
    cursor?: Prisma.AssetRevisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRevisionScalarFieldEnum | Prisma.AssetRevisionScalarFieldEnum[];
};
export type ProjectAssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectAssetSelect<ExtArgs> | null;
    omit?: Prisma.ProjectAssetOmit<ExtArgs> | null;
    include?: Prisma.ProjectAssetInclude<ExtArgs> | null;
};
