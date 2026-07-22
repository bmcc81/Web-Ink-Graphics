import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DesignDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DesignDocumentPayload>;
export type AggregateDesignDocument = {
    _count: DesignDocumentCountAggregateOutputType | null;
    _min: DesignDocumentMinAggregateOutputType | null;
    _max: DesignDocumentMaxAggregateOutputType | null;
};
export type DesignDocumentMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    name: string | null;
    figmaFileKey: string | null;
    figmaNodeId: string | null;
    figmaUrl: string | null;
    linkedById: string | null;
    unlinkedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignDocumentMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    name: string | null;
    figmaFileKey: string | null;
    figmaNodeId: string | null;
    figmaUrl: string | null;
    linkedById: string | null;
    unlinkedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignDocumentCountAggregateOutputType = {
    id: number;
    projectId: number;
    name: number;
    figmaFileKey: number;
    figmaNodeId: number;
    figmaUrl: number;
    linkedById: number;
    unlinkedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DesignDocumentMinAggregateInputType = {
    id?: true;
    projectId?: true;
    name?: true;
    figmaFileKey?: true;
    figmaNodeId?: true;
    figmaUrl?: true;
    linkedById?: true;
    unlinkedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignDocumentMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    name?: true;
    figmaFileKey?: true;
    figmaNodeId?: true;
    figmaUrl?: true;
    linkedById?: true;
    unlinkedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignDocumentCountAggregateInputType = {
    id?: true;
    projectId?: true;
    name?: true;
    figmaFileKey?: true;
    figmaNodeId?: true;
    figmaUrl?: true;
    linkedById?: true;
    unlinkedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DesignDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignDocumentWhereInput;
    orderBy?: Prisma.DesignDocumentOrderByWithRelationInput | Prisma.DesignDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DesignDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DesignDocumentCountAggregateInputType;
    _min?: DesignDocumentMinAggregateInputType;
    _max?: DesignDocumentMaxAggregateInputType;
};
export type GetDesignDocumentAggregateType<T extends DesignDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDesignDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDesignDocument[P]> : Prisma.GetScalarType<T[P], AggregateDesignDocument[P]>;
};
export type DesignDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignDocumentWhereInput;
    orderBy?: Prisma.DesignDocumentOrderByWithAggregationInput | Prisma.DesignDocumentOrderByWithAggregationInput[];
    by: Prisma.DesignDocumentScalarFieldEnum[] | Prisma.DesignDocumentScalarFieldEnum;
    having?: Prisma.DesignDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DesignDocumentCountAggregateInputType | true;
    _min?: DesignDocumentMinAggregateInputType;
    _max?: DesignDocumentMaxAggregateInputType;
};
export type DesignDocumentGroupByOutputType = {
    id: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DesignDocumentCountAggregateOutputType | null;
    _min: DesignDocumentMinAggregateOutputType | null;
    _max: DesignDocumentMaxAggregateOutputType | null;
};
export type GetDesignDocumentGroupByPayload<T extends DesignDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DesignDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DesignDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DesignDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DesignDocumentGroupByOutputType[P]>;
}>>;
export type DesignDocumentWhereInput = {
    AND?: Prisma.DesignDocumentWhereInput | Prisma.DesignDocumentWhereInput[];
    OR?: Prisma.DesignDocumentWhereInput[];
    NOT?: Prisma.DesignDocumentWhereInput | Prisma.DesignDocumentWhereInput[];
    id?: Prisma.StringFilter<"DesignDocument"> | string;
    projectId?: Prisma.StringFilter<"DesignDocument"> | string;
    name?: Prisma.StringFilter<"DesignDocument"> | string;
    figmaFileKey?: Prisma.StringFilter<"DesignDocument"> | string;
    figmaNodeId?: Prisma.StringNullableFilter<"DesignDocument"> | string | null;
    figmaUrl?: Prisma.StringFilter<"DesignDocument"> | string;
    linkedById?: Prisma.StringFilter<"DesignDocument"> | string;
    unlinkedAt?: Prisma.DateTimeNullableFilter<"DesignDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DesignDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignDocument"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    linkedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    versions?: Prisma.DesignVersionListRelationFilter;
    reviews?: Prisma.DesignReviewListRelationFilter;
    comments?: Prisma.DesignCommentListRelationFilter;
};
export type DesignDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    figmaFileKey?: Prisma.SortOrder;
    figmaNodeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    figmaUrl?: Prisma.SortOrder;
    linkedById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    linkedBy?: Prisma.UserOrderByWithRelationInput;
    versions?: Prisma.DesignVersionOrderByRelationAggregateInput;
    reviews?: Prisma.DesignReviewOrderByRelationAggregateInput;
    comments?: Prisma.DesignCommentOrderByRelationAggregateInput;
};
export type DesignDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DesignDocumentWhereInput | Prisma.DesignDocumentWhereInput[];
    OR?: Prisma.DesignDocumentWhereInput[];
    NOT?: Prisma.DesignDocumentWhereInput | Prisma.DesignDocumentWhereInput[];
    projectId?: Prisma.StringFilter<"DesignDocument"> | string;
    name?: Prisma.StringFilter<"DesignDocument"> | string;
    figmaFileKey?: Prisma.StringFilter<"DesignDocument"> | string;
    figmaNodeId?: Prisma.StringNullableFilter<"DesignDocument"> | string | null;
    figmaUrl?: Prisma.StringFilter<"DesignDocument"> | string;
    linkedById?: Prisma.StringFilter<"DesignDocument"> | string;
    unlinkedAt?: Prisma.DateTimeNullableFilter<"DesignDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DesignDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignDocument"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    linkedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    versions?: Prisma.DesignVersionListRelationFilter;
    reviews?: Prisma.DesignReviewListRelationFilter;
    comments?: Prisma.DesignCommentListRelationFilter;
}, "id">;
export type DesignDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    figmaFileKey?: Prisma.SortOrder;
    figmaNodeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    figmaUrl?: Prisma.SortOrder;
    linkedById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DesignDocumentCountOrderByAggregateInput;
    _max?: Prisma.DesignDocumentMaxOrderByAggregateInput;
    _min?: Prisma.DesignDocumentMinOrderByAggregateInput;
};
export type DesignDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DesignDocumentScalarWhereWithAggregatesInput | Prisma.DesignDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DesignDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DesignDocumentScalarWhereWithAggregatesInput | Prisma.DesignDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DesignDocument"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"DesignDocument"> | string;
    name?: Prisma.StringWithAggregatesFilter<"DesignDocument"> | string;
    figmaFileKey?: Prisma.StringWithAggregatesFilter<"DesignDocument"> | string;
    figmaNodeId?: Prisma.StringNullableWithAggregatesFilter<"DesignDocument"> | string | null;
    figmaUrl?: Prisma.StringWithAggregatesFilter<"DesignDocument"> | string;
    linkedById?: Prisma.StringWithAggregatesFilter<"DesignDocument"> | string;
    unlinkedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DesignDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DesignDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DesignDocument"> | Date | string;
};
export type DesignDocumentCreateInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutDesignDocumentsInput;
    linkedBy: Prisma.UserCreateNestedOneWithoutLinkedDesignDocumentsInput;
    versions?: Prisma.DesignVersionCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUncheckedCreateInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DesignVersionUncheckedCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentUncheckedCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDesignDocumentsNestedInput;
    linkedBy?: Prisma.UserUpdateOneRequiredWithoutLinkedDesignDocumentsNestedInput;
    versions?: Prisma.DesignVersionUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DesignVersionUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUncheckedUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentCreateManyInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignDocumentListRelationFilter = {
    every?: Prisma.DesignDocumentWhereInput;
    some?: Prisma.DesignDocumentWhereInput;
    none?: Prisma.DesignDocumentWhereInput;
};
export type DesignDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DesignDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    figmaFileKey?: Prisma.SortOrder;
    figmaNodeId?: Prisma.SortOrder;
    figmaUrl?: Prisma.SortOrder;
    linkedById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    figmaFileKey?: Prisma.SortOrder;
    figmaNodeId?: Prisma.SortOrder;
    figmaUrl?: Prisma.SortOrder;
    linkedById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    figmaFileKey?: Prisma.SortOrder;
    figmaNodeId?: Prisma.SortOrder;
    figmaUrl?: Prisma.SortOrder;
    linkedById?: Prisma.SortOrder;
    unlinkedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignDocumentScalarRelationFilter = {
    is?: Prisma.DesignDocumentWhereInput;
    isNot?: Prisma.DesignDocumentWhereInput;
};
export type DesignDocumentCreateNestedManyWithoutLinkedByInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput> | Prisma.DesignDocumentCreateWithoutLinkedByInput[] | Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput | Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput[];
    createMany?: Prisma.DesignDocumentCreateManyLinkedByInputEnvelope;
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
};
export type DesignDocumentUncheckedCreateNestedManyWithoutLinkedByInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput> | Prisma.DesignDocumentCreateWithoutLinkedByInput[] | Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput | Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput[];
    createMany?: Prisma.DesignDocumentCreateManyLinkedByInputEnvelope;
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
};
export type DesignDocumentUpdateManyWithoutLinkedByNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput> | Prisma.DesignDocumentCreateWithoutLinkedByInput[] | Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput | Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput[];
    upsert?: Prisma.DesignDocumentUpsertWithWhereUniqueWithoutLinkedByInput | Prisma.DesignDocumentUpsertWithWhereUniqueWithoutLinkedByInput[];
    createMany?: Prisma.DesignDocumentCreateManyLinkedByInputEnvelope;
    set?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    disconnect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    delete?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    update?: Prisma.DesignDocumentUpdateWithWhereUniqueWithoutLinkedByInput | Prisma.DesignDocumentUpdateWithWhereUniqueWithoutLinkedByInput[];
    updateMany?: Prisma.DesignDocumentUpdateManyWithWhereWithoutLinkedByInput | Prisma.DesignDocumentUpdateManyWithWhereWithoutLinkedByInput[];
    deleteMany?: Prisma.DesignDocumentScalarWhereInput | Prisma.DesignDocumentScalarWhereInput[];
};
export type DesignDocumentUncheckedUpdateManyWithoutLinkedByNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput> | Prisma.DesignDocumentCreateWithoutLinkedByInput[] | Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput | Prisma.DesignDocumentCreateOrConnectWithoutLinkedByInput[];
    upsert?: Prisma.DesignDocumentUpsertWithWhereUniqueWithoutLinkedByInput | Prisma.DesignDocumentUpsertWithWhereUniqueWithoutLinkedByInput[];
    createMany?: Prisma.DesignDocumentCreateManyLinkedByInputEnvelope;
    set?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    disconnect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    delete?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    update?: Prisma.DesignDocumentUpdateWithWhereUniqueWithoutLinkedByInput | Prisma.DesignDocumentUpdateWithWhereUniqueWithoutLinkedByInput[];
    updateMany?: Prisma.DesignDocumentUpdateManyWithWhereWithoutLinkedByInput | Prisma.DesignDocumentUpdateManyWithWhereWithoutLinkedByInput[];
    deleteMany?: Prisma.DesignDocumentScalarWhereInput | Prisma.DesignDocumentScalarWhereInput[];
};
export type DesignDocumentCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutProjectInput, Prisma.DesignDocumentUncheckedCreateWithoutProjectInput> | Prisma.DesignDocumentCreateWithoutProjectInput[] | Prisma.DesignDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutProjectInput | Prisma.DesignDocumentCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.DesignDocumentCreateManyProjectInputEnvelope;
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
};
export type DesignDocumentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutProjectInput, Prisma.DesignDocumentUncheckedCreateWithoutProjectInput> | Prisma.DesignDocumentCreateWithoutProjectInput[] | Prisma.DesignDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutProjectInput | Prisma.DesignDocumentCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.DesignDocumentCreateManyProjectInputEnvelope;
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
};
export type DesignDocumentUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutProjectInput, Prisma.DesignDocumentUncheckedCreateWithoutProjectInput> | Prisma.DesignDocumentCreateWithoutProjectInput[] | Prisma.DesignDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutProjectInput | Prisma.DesignDocumentCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.DesignDocumentUpsertWithWhereUniqueWithoutProjectInput | Prisma.DesignDocumentUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.DesignDocumentCreateManyProjectInputEnvelope;
    set?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    disconnect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    delete?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    update?: Prisma.DesignDocumentUpdateWithWhereUniqueWithoutProjectInput | Prisma.DesignDocumentUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.DesignDocumentUpdateManyWithWhereWithoutProjectInput | Prisma.DesignDocumentUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.DesignDocumentScalarWhereInput | Prisma.DesignDocumentScalarWhereInput[];
};
export type DesignDocumentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutProjectInput, Prisma.DesignDocumentUncheckedCreateWithoutProjectInput> | Prisma.DesignDocumentCreateWithoutProjectInput[] | Prisma.DesignDocumentUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutProjectInput | Prisma.DesignDocumentCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.DesignDocumentUpsertWithWhereUniqueWithoutProjectInput | Prisma.DesignDocumentUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.DesignDocumentCreateManyProjectInputEnvelope;
    set?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    disconnect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    delete?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    connect?: Prisma.DesignDocumentWhereUniqueInput | Prisma.DesignDocumentWhereUniqueInput[];
    update?: Prisma.DesignDocumentUpdateWithWhereUniqueWithoutProjectInput | Prisma.DesignDocumentUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.DesignDocumentUpdateManyWithWhereWithoutProjectInput | Prisma.DesignDocumentUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.DesignDocumentScalarWhereInput | Prisma.DesignDocumentScalarWhereInput[];
};
export type DesignDocumentCreateNestedOneWithoutVersionsInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutVersionsInput, Prisma.DesignDocumentUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutVersionsInput;
    connect?: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutVersionsInput, Prisma.DesignDocumentUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutVersionsInput;
    upsert?: Prisma.DesignDocumentUpsertWithoutVersionsInput;
    connect?: Prisma.DesignDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignDocumentUpdateToOneWithWhereWithoutVersionsInput, Prisma.DesignDocumentUpdateWithoutVersionsInput>, Prisma.DesignDocumentUncheckedUpdateWithoutVersionsInput>;
};
export type DesignDocumentCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutReviewsInput, Prisma.DesignDocumentUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutReviewsInput, Prisma.DesignDocumentUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.DesignDocumentUpsertWithoutReviewsInput;
    connect?: Prisma.DesignDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignDocumentUpdateToOneWithWhereWithoutReviewsInput, Prisma.DesignDocumentUpdateWithoutReviewsInput>, Prisma.DesignDocumentUncheckedUpdateWithoutReviewsInput>;
};
export type DesignDocumentCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutCommentsInput, Prisma.DesignDocumentUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.DesignDocumentCreateWithoutCommentsInput, Prisma.DesignDocumentUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.DesignDocumentCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.DesignDocumentUpsertWithoutCommentsInput;
    connect?: Prisma.DesignDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignDocumentUpdateToOneWithWhereWithoutCommentsInput, Prisma.DesignDocumentUpdateWithoutCommentsInput>, Prisma.DesignDocumentUncheckedUpdateWithoutCommentsInput>;
};
export type DesignDocumentCreateWithoutLinkedByInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutDesignDocumentsInput;
    versions?: Prisma.DesignVersionCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUncheckedCreateWithoutLinkedByInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DesignVersionUncheckedCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentUncheckedCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentCreateOrConnectWithoutLinkedByInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput>;
};
export type DesignDocumentCreateManyLinkedByInputEnvelope = {
    data: Prisma.DesignDocumentCreateManyLinkedByInput | Prisma.DesignDocumentCreateManyLinkedByInput[];
    skipDuplicates?: boolean;
};
export type DesignDocumentUpsertWithWhereUniqueWithoutLinkedByInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedUpdateWithoutLinkedByInput>;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedCreateWithoutLinkedByInput>;
};
export type DesignDocumentUpdateWithWhereUniqueWithoutLinkedByInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutLinkedByInput, Prisma.DesignDocumentUncheckedUpdateWithoutLinkedByInput>;
};
export type DesignDocumentUpdateManyWithWhereWithoutLinkedByInput = {
    where: Prisma.DesignDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateManyMutationInput, Prisma.DesignDocumentUncheckedUpdateManyWithoutLinkedByInput>;
};
export type DesignDocumentScalarWhereInput = {
    AND?: Prisma.DesignDocumentScalarWhereInput | Prisma.DesignDocumentScalarWhereInput[];
    OR?: Prisma.DesignDocumentScalarWhereInput[];
    NOT?: Prisma.DesignDocumentScalarWhereInput | Prisma.DesignDocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"DesignDocument"> | string;
    projectId?: Prisma.StringFilter<"DesignDocument"> | string;
    name?: Prisma.StringFilter<"DesignDocument"> | string;
    figmaFileKey?: Prisma.StringFilter<"DesignDocument"> | string;
    figmaNodeId?: Prisma.StringNullableFilter<"DesignDocument"> | string | null;
    figmaUrl?: Prisma.StringFilter<"DesignDocument"> | string;
    linkedById?: Prisma.StringFilter<"DesignDocument"> | string;
    unlinkedAt?: Prisma.DateTimeNullableFilter<"DesignDocument"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"DesignDocument"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignDocument"> | Date | string;
};
export type DesignDocumentCreateWithoutProjectInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    linkedBy: Prisma.UserCreateNestedOneWithoutLinkedDesignDocumentsInput;
    versions?: Prisma.DesignVersionCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUncheckedCreateWithoutProjectInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DesignVersionUncheckedCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentUncheckedCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentCreateOrConnectWithoutProjectInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutProjectInput, Prisma.DesignDocumentUncheckedCreateWithoutProjectInput>;
};
export type DesignDocumentCreateManyProjectInputEnvelope = {
    data: Prisma.DesignDocumentCreateManyProjectInput | Prisma.DesignDocumentCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type DesignDocumentUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutProjectInput, Prisma.DesignDocumentUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutProjectInput, Prisma.DesignDocumentUncheckedCreateWithoutProjectInput>;
};
export type DesignDocumentUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutProjectInput, Prisma.DesignDocumentUncheckedUpdateWithoutProjectInput>;
};
export type DesignDocumentUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.DesignDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateManyMutationInput, Prisma.DesignDocumentUncheckedUpdateManyWithoutProjectInput>;
};
export type DesignDocumentCreateWithoutVersionsInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutDesignDocumentsInput;
    linkedBy: Prisma.UserCreateNestedOneWithoutLinkedDesignDocumentsInput;
    reviews?: Prisma.DesignReviewCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUncheckedCreateWithoutVersionsInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentUncheckedCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentCreateOrConnectWithoutVersionsInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutVersionsInput, Prisma.DesignDocumentUncheckedCreateWithoutVersionsInput>;
};
export type DesignDocumentUpsertWithoutVersionsInput = {
    update: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutVersionsInput, Prisma.DesignDocumentUncheckedUpdateWithoutVersionsInput>;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutVersionsInput, Prisma.DesignDocumentUncheckedCreateWithoutVersionsInput>;
    where?: Prisma.DesignDocumentWhereInput;
};
export type DesignDocumentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: Prisma.DesignDocumentWhereInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutVersionsInput, Prisma.DesignDocumentUncheckedUpdateWithoutVersionsInput>;
};
export type DesignDocumentUpdateWithoutVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDesignDocumentsNestedInput;
    linkedBy?: Prisma.UserUpdateOneRequiredWithoutLinkedDesignDocumentsNestedInput;
    reviews?: Prisma.DesignReviewUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateWithoutVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUncheckedUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutDesignDocumentsInput;
    linkedBy: Prisma.UserCreateNestedOneWithoutLinkedDesignDocumentsInput;
    versions?: Prisma.DesignVersionCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUncheckedCreateWithoutReviewsInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DesignVersionUncheckedCreateNestedManyWithoutDesignDocumentInput;
    comments?: Prisma.DesignCommentUncheckedCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentCreateOrConnectWithoutReviewsInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutReviewsInput, Prisma.DesignDocumentUncheckedCreateWithoutReviewsInput>;
};
export type DesignDocumentUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutReviewsInput, Prisma.DesignDocumentUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutReviewsInput, Prisma.DesignDocumentUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.DesignDocumentWhereInput;
};
export type DesignDocumentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.DesignDocumentWhereInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutReviewsInput, Prisma.DesignDocumentUncheckedUpdateWithoutReviewsInput>;
};
export type DesignDocumentUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDesignDocumentsNestedInput;
    linkedBy?: Prisma.UserUpdateOneRequiredWithoutLinkedDesignDocumentsNestedInput;
    versions?: Prisma.DesignVersionUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DesignVersionUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUncheckedUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentCreateWithoutCommentsInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutDesignDocumentsInput;
    linkedBy: Prisma.UserCreateNestedOneWithoutLinkedDesignDocumentsInput;
    versions?: Prisma.DesignVersionCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentUncheckedCreateWithoutCommentsInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DesignVersionUncheckedCreateNestedManyWithoutDesignDocumentInput;
    reviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDesignDocumentInput;
};
export type DesignDocumentCreateOrConnectWithoutCommentsInput = {
    where: Prisma.DesignDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutCommentsInput, Prisma.DesignDocumentUncheckedCreateWithoutCommentsInput>;
};
export type DesignDocumentUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutCommentsInput, Prisma.DesignDocumentUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.DesignDocumentCreateWithoutCommentsInput, Prisma.DesignDocumentUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.DesignDocumentWhereInput;
};
export type DesignDocumentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.DesignDocumentWhereInput;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateWithoutCommentsInput, Prisma.DesignDocumentUncheckedUpdateWithoutCommentsInput>;
};
export type DesignDocumentUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDesignDocumentsNestedInput;
    linkedBy?: Prisma.UserUpdateOneRequiredWithoutLinkedDesignDocumentsNestedInput;
    versions?: Prisma.DesignVersionUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DesignVersionUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentCreateManyLinkedByInput = {
    id?: string;
    projectId: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignDocumentUpdateWithoutLinkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutDesignDocumentsNestedInput;
    versions?: Prisma.DesignVersionUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateWithoutLinkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DesignVersionUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUncheckedUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateManyWithoutLinkedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignDocumentCreateManyProjectInput = {
    id?: string;
    name: string;
    figmaFileKey: string;
    figmaNodeId?: string | null;
    figmaUrl: string;
    linkedById: string;
    unlinkedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignDocumentUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedBy?: Prisma.UserUpdateOneRequiredWithoutLinkedDesignDocumentsNestedInput;
    versions?: Prisma.DesignVersionUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DesignVersionUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    reviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDesignDocumentNestedInput;
    comments?: Prisma.DesignCommentUncheckedUpdateManyWithoutDesignDocumentNestedInput;
};
export type DesignDocumentUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaFileKey?: Prisma.StringFieldUpdateOperationsInput | string;
    figmaNodeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    linkedById?: Prisma.StringFieldUpdateOperationsInput | string;
    unlinkedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignDocumentCountOutputType = {
    versions: number;
    reviews: number;
    comments: number;
};
export type DesignDocumentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    versions?: boolean | DesignDocumentCountOutputTypeCountVersionsArgs;
    reviews?: boolean | DesignDocumentCountOutputTypeCountReviewsArgs;
    comments?: boolean | DesignDocumentCountOutputTypeCountCommentsArgs;
};
export type DesignDocumentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentCountOutputTypeSelect<ExtArgs> | null;
};
export type DesignDocumentCountOutputTypeCountVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignVersionWhereInput;
};
export type DesignDocumentCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignReviewWhereInput;
};
export type DesignDocumentCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignCommentWhereInput;
};
export type DesignDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    name?: boolean;
    figmaFileKey?: boolean;
    figmaNodeId?: boolean;
    figmaUrl?: boolean;
    linkedById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    linkedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.DesignDocument$versionsArgs<ExtArgs>;
    reviews?: boolean | Prisma.DesignDocument$reviewsArgs<ExtArgs>;
    comments?: boolean | Prisma.DesignDocument$commentsArgs<ExtArgs>;
    _count?: boolean | Prisma.DesignDocumentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designDocument"]>;
export type DesignDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    name?: boolean;
    figmaFileKey?: boolean;
    figmaNodeId?: boolean;
    figmaUrl?: boolean;
    linkedById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    linkedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designDocument"]>;
export type DesignDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    name?: boolean;
    figmaFileKey?: boolean;
    figmaNodeId?: boolean;
    figmaUrl?: boolean;
    linkedById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    linkedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designDocument"]>;
export type DesignDocumentSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    name?: boolean;
    figmaFileKey?: boolean;
    figmaNodeId?: boolean;
    figmaUrl?: boolean;
    linkedById?: boolean;
    unlinkedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DesignDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "name" | "figmaFileKey" | "figmaNodeId" | "figmaUrl" | "linkedById" | "unlinkedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["designDocument"]>;
export type DesignDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    linkedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.DesignDocument$versionsArgs<ExtArgs>;
    reviews?: boolean | Prisma.DesignDocument$reviewsArgs<ExtArgs>;
    comments?: boolean | Prisma.DesignDocument$commentsArgs<ExtArgs>;
    _count?: boolean | Prisma.DesignDocumentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DesignDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    linkedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DesignDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    linkedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DesignDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DesignDocument";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        linkedBy: Prisma.$UserPayload<ExtArgs>;
        versions: Prisma.$DesignVersionPayload<ExtArgs>[];
        reviews: Prisma.$DesignReviewPayload<ExtArgs>[];
        comments: Prisma.$DesignCommentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        name: string;
        figmaFileKey: string;
        figmaNodeId: string | null;
        figmaUrl: string;
        linkedById: string;
        unlinkedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["designDocument"]>;
    composites: {};
};
export type DesignDocumentGetPayload<S extends boolean | null | undefined | DesignDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload, S>;
export type DesignDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DesignDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DesignDocumentCountAggregateInputType | true;
};
export interface DesignDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DesignDocument'];
        meta: {
            name: 'DesignDocument';
        };
    };
    findUnique<T extends DesignDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DesignDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DesignDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DesignDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DesignDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DesignDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DesignDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DesignDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DesignDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DesignDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DesignDocumentCreateArgs>(args: Prisma.SelectSubset<T, DesignDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DesignDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DesignDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DesignDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DesignDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DesignDocumentDeleteArgs>(args: Prisma.SelectSubset<T, DesignDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DesignDocumentUpdateArgs>(args: Prisma.SelectSubset<T, DesignDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DesignDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DesignDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DesignDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DesignDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DesignDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DesignDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DesignDocumentUpsertArgs>(args: Prisma.SelectSubset<T, DesignDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DesignDocumentCountArgs>(args?: Prisma.Subset<T, DesignDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DesignDocumentCountAggregateOutputType> : number>;
    aggregate<T extends DesignDocumentAggregateArgs>(args: Prisma.Subset<T, DesignDocumentAggregateArgs>): Prisma.PrismaPromise<GetDesignDocumentAggregateType<T>>;
    groupBy<T extends DesignDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DesignDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DesignDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DesignDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DesignDocumentFieldRefs;
}
export interface Prisma__DesignDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    linkedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    versions<T extends Prisma.DesignDocument$versionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignDocument$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.DesignDocument$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignDocument$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.DesignDocument$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignDocument$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DesignDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly projectId: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly name: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly figmaFileKey: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly figmaNodeId: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly figmaUrl: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly linkedById: Prisma.FieldRef<"DesignDocument", 'String'>;
    readonly unlinkedAt: Prisma.FieldRef<"DesignDocument", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"DesignDocument", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DesignDocument", 'DateTime'>;
}
export type DesignDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where?: Prisma.DesignDocumentWhereInput;
    orderBy?: Prisma.DesignDocumentOrderByWithRelationInput | Prisma.DesignDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DesignDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignDocumentScalarFieldEnum | Prisma.DesignDocumentScalarFieldEnum[];
};
export type DesignDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where?: Prisma.DesignDocumentWhereInput;
    orderBy?: Prisma.DesignDocumentOrderByWithRelationInput | Prisma.DesignDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DesignDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignDocumentScalarFieldEnum | Prisma.DesignDocumentScalarFieldEnum[];
};
export type DesignDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where?: Prisma.DesignDocumentWhereInput;
    orderBy?: Prisma.DesignDocumentOrderByWithRelationInput | Prisma.DesignDocumentOrderByWithRelationInput[];
    cursor?: Prisma.DesignDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignDocumentScalarFieldEnum | Prisma.DesignDocumentScalarFieldEnum[];
};
export type DesignDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignDocumentCreateInput, Prisma.DesignDocumentUncheckedCreateInput>;
};
export type DesignDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DesignDocumentCreateManyInput | Prisma.DesignDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    data: Prisma.DesignDocumentCreateManyInput | Prisma.DesignDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DesignDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DesignDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateInput, Prisma.DesignDocumentUncheckedUpdateInput>;
    where: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DesignDocumentUpdateManyMutationInput, Prisma.DesignDocumentUncheckedUpdateManyInput>;
    where?: Prisma.DesignDocumentWhereInput;
    limit?: number;
};
export type DesignDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignDocumentUpdateManyMutationInput, Prisma.DesignDocumentUncheckedUpdateManyInput>;
    where?: Prisma.DesignDocumentWhereInput;
    limit?: number;
    include?: Prisma.DesignDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DesignDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where: Prisma.DesignDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignDocumentCreateInput, Prisma.DesignDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DesignDocumentUpdateInput, Prisma.DesignDocumentUncheckedUpdateInput>;
};
export type DesignDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
    where: Prisma.DesignDocumentWhereUniqueInput;
};
export type DesignDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignDocumentWhereInput;
    limit?: number;
};
export type DesignDocument$versionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    where?: Prisma.DesignVersionWhereInput;
    orderBy?: Prisma.DesignVersionOrderByWithRelationInput | Prisma.DesignVersionOrderByWithRelationInput[];
    cursor?: Prisma.DesignVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignVersionScalarFieldEnum | Prisma.DesignVersionScalarFieldEnum[];
};
export type DesignDocument$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignReviewSelect<ExtArgs> | null;
    omit?: Prisma.DesignReviewOmit<ExtArgs> | null;
    include?: Prisma.DesignReviewInclude<ExtArgs> | null;
    where?: Prisma.DesignReviewWhereInput;
    orderBy?: Prisma.DesignReviewOrderByWithRelationInput | Prisma.DesignReviewOrderByWithRelationInput[];
    cursor?: Prisma.DesignReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignReviewScalarFieldEnum | Prisma.DesignReviewScalarFieldEnum[];
};
export type DesignDocument$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    where?: Prisma.DesignCommentWhereInput;
    orderBy?: Prisma.DesignCommentOrderByWithRelationInput | Prisma.DesignCommentOrderByWithRelationInput[];
    cursor?: Prisma.DesignCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignCommentScalarFieldEnum | Prisma.DesignCommentScalarFieldEnum[];
};
export type DesignDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignDocumentSelect<ExtArgs> | null;
    omit?: Prisma.DesignDocumentOmit<ExtArgs> | null;
    include?: Prisma.DesignDocumentInclude<ExtArgs> | null;
};
