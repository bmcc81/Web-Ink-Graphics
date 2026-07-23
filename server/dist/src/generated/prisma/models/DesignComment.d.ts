import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DesignCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$DesignCommentPayload>;
export type AggregateDesignComment = {
    _count: DesignCommentCountAggregateOutputType | null;
    _min: DesignCommentMinAggregateOutputType | null;
    _max: DesignCommentMaxAggregateOutputType | null;
};
export type DesignCommentMinAggregateOutputType = {
    id: string | null;
    designDocumentId: string | null;
    authorId: string | null;
    body: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignCommentMaxAggregateOutputType = {
    id: string | null;
    designDocumentId: string | null;
    authorId: string | null;
    body: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignCommentCountAggregateOutputType = {
    id: number;
    designDocumentId: number;
    authorId: number;
    body: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DesignCommentMinAggregateInputType = {
    id?: true;
    designDocumentId?: true;
    authorId?: true;
    body?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignCommentMaxAggregateInputType = {
    id?: true;
    designDocumentId?: true;
    authorId?: true;
    body?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignCommentCountAggregateInputType = {
    id?: true;
    designDocumentId?: true;
    authorId?: true;
    body?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DesignCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignCommentWhereInput;
    orderBy?: Prisma.DesignCommentOrderByWithRelationInput | Prisma.DesignCommentOrderByWithRelationInput[];
    cursor?: Prisma.DesignCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DesignCommentCountAggregateInputType;
    _min?: DesignCommentMinAggregateInputType;
    _max?: DesignCommentMaxAggregateInputType;
};
export type GetDesignCommentAggregateType<T extends DesignCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateDesignComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDesignComment[P]> : Prisma.GetScalarType<T[P], AggregateDesignComment[P]>;
};
export type DesignCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignCommentWhereInput;
    orderBy?: Prisma.DesignCommentOrderByWithAggregationInput | Prisma.DesignCommentOrderByWithAggregationInput[];
    by: Prisma.DesignCommentScalarFieldEnum[] | Prisma.DesignCommentScalarFieldEnum;
    having?: Prisma.DesignCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DesignCommentCountAggregateInputType | true;
    _min?: DesignCommentMinAggregateInputType;
    _max?: DesignCommentMaxAggregateInputType;
};
export type DesignCommentGroupByOutputType = {
    id: string;
    designDocumentId: string;
    authorId: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    _count: DesignCommentCountAggregateOutputType | null;
    _min: DesignCommentMinAggregateOutputType | null;
    _max: DesignCommentMaxAggregateOutputType | null;
};
export type GetDesignCommentGroupByPayload<T extends DesignCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DesignCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DesignCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DesignCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DesignCommentGroupByOutputType[P]>;
}>>;
export type DesignCommentWhereInput = {
    AND?: Prisma.DesignCommentWhereInput | Prisma.DesignCommentWhereInput[];
    OR?: Prisma.DesignCommentWhereInput[];
    NOT?: Prisma.DesignCommentWhereInput | Prisma.DesignCommentWhereInput[];
    id?: Prisma.StringFilter<"DesignComment"> | string;
    designDocumentId?: Prisma.StringFilter<"DesignComment"> | string;
    authorId?: Prisma.StringFilter<"DesignComment"> | string;
    body?: Prisma.StringFilter<"DesignComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"DesignComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignComment"> | Date | string;
    designDocument?: Prisma.XOR<Prisma.DesignDocumentScalarRelationFilter, Prisma.DesignDocumentWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type DesignCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    designDocument?: Prisma.DesignDocumentOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type DesignCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DesignCommentWhereInput | Prisma.DesignCommentWhereInput[];
    OR?: Prisma.DesignCommentWhereInput[];
    NOT?: Prisma.DesignCommentWhereInput | Prisma.DesignCommentWhereInput[];
    designDocumentId?: Prisma.StringFilter<"DesignComment"> | string;
    authorId?: Prisma.StringFilter<"DesignComment"> | string;
    body?: Prisma.StringFilter<"DesignComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"DesignComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignComment"> | Date | string;
    designDocument?: Prisma.XOR<Prisma.DesignDocumentScalarRelationFilter, Prisma.DesignDocumentWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type DesignCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DesignCommentCountOrderByAggregateInput;
    _max?: Prisma.DesignCommentMaxOrderByAggregateInput;
    _min?: Prisma.DesignCommentMinOrderByAggregateInput;
};
export type DesignCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DesignCommentScalarWhereWithAggregatesInput | Prisma.DesignCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DesignCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DesignCommentScalarWhereWithAggregatesInput | Prisma.DesignCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DesignComment"> | string;
    designDocumentId?: Prisma.StringWithAggregatesFilter<"DesignComment"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"DesignComment"> | string;
    body?: Prisma.StringWithAggregatesFilter<"DesignComment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DesignComment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DesignComment"> | Date | string;
};
export type DesignCommentCreateInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    designDocument: Prisma.DesignDocumentCreateNestedOneWithoutCommentsInput;
    author: Prisma.UserCreateNestedOneWithoutDesignCommentsInput;
};
export type DesignCommentUncheckedCreateInput = {
    id?: string;
    designDocumentId: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    designDocument?: Prisma.DesignDocumentUpdateOneRequiredWithoutCommentsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutDesignCommentsNestedInput;
};
export type DesignCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentCreateManyInput = {
    id?: string;
    designDocumentId: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentListRelationFilter = {
    every?: Prisma.DesignCommentWhereInput;
    some?: Prisma.DesignCommentWhereInput;
    none?: Prisma.DesignCommentWhereInput;
};
export type DesignCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DesignCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignCommentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutAuthorInput, Prisma.DesignCommentUncheckedCreateWithoutAuthorInput> | Prisma.DesignCommentCreateWithoutAuthorInput[] | Prisma.DesignCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutAuthorInput | Prisma.DesignCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.DesignCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
};
export type DesignCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutAuthorInput, Prisma.DesignCommentUncheckedCreateWithoutAuthorInput> | Prisma.DesignCommentCreateWithoutAuthorInput[] | Prisma.DesignCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutAuthorInput | Prisma.DesignCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.DesignCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
};
export type DesignCommentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutAuthorInput, Prisma.DesignCommentUncheckedCreateWithoutAuthorInput> | Prisma.DesignCommentCreateWithoutAuthorInput[] | Prisma.DesignCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutAuthorInput | Prisma.DesignCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.DesignCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.DesignCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.DesignCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    disconnect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    delete?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    update?: Prisma.DesignCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.DesignCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.DesignCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.DesignCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.DesignCommentScalarWhereInput | Prisma.DesignCommentScalarWhereInput[];
};
export type DesignCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutAuthorInput, Prisma.DesignCommentUncheckedCreateWithoutAuthorInput> | Prisma.DesignCommentCreateWithoutAuthorInput[] | Prisma.DesignCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutAuthorInput | Prisma.DesignCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.DesignCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.DesignCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.DesignCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    disconnect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    delete?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    update?: Prisma.DesignCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.DesignCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.DesignCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.DesignCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.DesignCommentScalarWhereInput | Prisma.DesignCommentScalarWhereInput[];
};
export type DesignCommentCreateNestedManyWithoutDesignDocumentInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignCommentCreateWithoutDesignDocumentInput[] | Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignCommentCreateManyDesignDocumentInputEnvelope;
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
};
export type DesignCommentUncheckedCreateNestedManyWithoutDesignDocumentInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignCommentCreateWithoutDesignDocumentInput[] | Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignCommentCreateManyDesignDocumentInputEnvelope;
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
};
export type DesignCommentUpdateManyWithoutDesignDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignCommentCreateWithoutDesignDocumentInput[] | Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput[];
    upsert?: Prisma.DesignCommentUpsertWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignCommentUpsertWithWhereUniqueWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignCommentCreateManyDesignDocumentInputEnvelope;
    set?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    disconnect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    delete?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    update?: Prisma.DesignCommentUpdateWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignCommentUpdateWithWhereUniqueWithoutDesignDocumentInput[];
    updateMany?: Prisma.DesignCommentUpdateManyWithWhereWithoutDesignDocumentInput | Prisma.DesignCommentUpdateManyWithWhereWithoutDesignDocumentInput[];
    deleteMany?: Prisma.DesignCommentScalarWhereInput | Prisma.DesignCommentScalarWhereInput[];
};
export type DesignCommentUncheckedUpdateManyWithoutDesignDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DesignCommentCreateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignCommentCreateWithoutDesignDocumentInput[] | Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignCommentCreateOrConnectWithoutDesignDocumentInput[];
    upsert?: Prisma.DesignCommentUpsertWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignCommentUpsertWithWhereUniqueWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignCommentCreateManyDesignDocumentInputEnvelope;
    set?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    disconnect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    delete?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    connect?: Prisma.DesignCommentWhereUniqueInput | Prisma.DesignCommentWhereUniqueInput[];
    update?: Prisma.DesignCommentUpdateWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignCommentUpdateWithWhereUniqueWithoutDesignDocumentInput[];
    updateMany?: Prisma.DesignCommentUpdateManyWithWhereWithoutDesignDocumentInput | Prisma.DesignCommentUpdateManyWithWhereWithoutDesignDocumentInput[];
    deleteMany?: Prisma.DesignCommentScalarWhereInput | Prisma.DesignCommentScalarWhereInput[];
};
export type DesignCommentCreateWithoutAuthorInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    designDocument: Prisma.DesignDocumentCreateNestedOneWithoutCommentsInput;
};
export type DesignCommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    designDocumentId: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignCommentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.DesignCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignCommentCreateWithoutAuthorInput, Prisma.DesignCommentUncheckedCreateWithoutAuthorInput>;
};
export type DesignCommentCreateManyAuthorInputEnvelope = {
    data: Prisma.DesignCommentCreateManyAuthorInput | Prisma.DesignCommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type DesignCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.DesignCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignCommentUpdateWithoutAuthorInput, Prisma.DesignCommentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.DesignCommentCreateWithoutAuthorInput, Prisma.DesignCommentUncheckedCreateWithoutAuthorInput>;
};
export type DesignCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.DesignCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignCommentUpdateWithoutAuthorInput, Prisma.DesignCommentUncheckedUpdateWithoutAuthorInput>;
};
export type DesignCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.DesignCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignCommentUpdateManyMutationInput, Prisma.DesignCommentUncheckedUpdateManyWithoutAuthorInput>;
};
export type DesignCommentScalarWhereInput = {
    AND?: Prisma.DesignCommentScalarWhereInput | Prisma.DesignCommentScalarWhereInput[];
    OR?: Prisma.DesignCommentScalarWhereInput[];
    NOT?: Prisma.DesignCommentScalarWhereInput | Prisma.DesignCommentScalarWhereInput[];
    id?: Prisma.StringFilter<"DesignComment"> | string;
    designDocumentId?: Prisma.StringFilter<"DesignComment"> | string;
    authorId?: Prisma.StringFilter<"DesignComment"> | string;
    body?: Prisma.StringFilter<"DesignComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"DesignComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignComment"> | Date | string;
};
export type DesignCommentCreateWithoutDesignDocumentInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutDesignCommentsInput;
};
export type DesignCommentUncheckedCreateWithoutDesignDocumentInput = {
    id?: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignCommentCreateOrConnectWithoutDesignDocumentInput = {
    where: Prisma.DesignCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignCommentCreateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput>;
};
export type DesignCommentCreateManyDesignDocumentInputEnvelope = {
    data: Prisma.DesignCommentCreateManyDesignDocumentInput | Prisma.DesignCommentCreateManyDesignDocumentInput[];
    skipDuplicates?: boolean;
};
export type DesignCommentUpsertWithWhereUniqueWithoutDesignDocumentInput = {
    where: Prisma.DesignCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignCommentUpdateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedUpdateWithoutDesignDocumentInput>;
    create: Prisma.XOR<Prisma.DesignCommentCreateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedCreateWithoutDesignDocumentInput>;
};
export type DesignCommentUpdateWithWhereUniqueWithoutDesignDocumentInput = {
    where: Prisma.DesignCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignCommentUpdateWithoutDesignDocumentInput, Prisma.DesignCommentUncheckedUpdateWithoutDesignDocumentInput>;
};
export type DesignCommentUpdateManyWithWhereWithoutDesignDocumentInput = {
    where: Prisma.DesignCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignCommentUpdateManyMutationInput, Prisma.DesignCommentUncheckedUpdateManyWithoutDesignDocumentInput>;
};
export type DesignCommentCreateManyAuthorInput = {
    id?: string;
    designDocumentId: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignCommentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    designDocument?: Prisma.DesignDocumentUpdateOneRequiredWithoutCommentsNestedInput;
};
export type DesignCommentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentCreateManyDesignDocumentInput = {
    id?: string;
    authorId: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignCommentUpdateWithoutDesignDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutDesignCommentsNestedInput;
};
export type DesignCommentUncheckedUpdateWithoutDesignDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentUncheckedUpdateManyWithoutDesignDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    designDocumentId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designComment"]>;
export type DesignCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    designDocumentId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designComment"]>;
export type DesignCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    designDocumentId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designComment"]>;
export type DesignCommentSelectScalar = {
    id?: boolean;
    designDocumentId?: boolean;
    authorId?: boolean;
    body?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DesignCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "designDocumentId" | "authorId" | "body" | "createdAt" | "updatedAt", ExtArgs["result"]["designComment"]>;
export type DesignCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DesignCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DesignCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DesignCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DesignComment";
    objects: {
        designDocument: Prisma.$DesignDocumentPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        designDocumentId: string;
        authorId: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["designComment"]>;
    composites: {};
};
export type DesignCommentGetPayload<S extends boolean | null | undefined | DesignCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload, S>;
export type DesignCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DesignCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DesignCommentCountAggregateInputType | true;
};
export interface DesignCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DesignComment'];
        meta: {
            name: 'DesignComment';
        };
    };
    findUnique<T extends DesignCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, DesignCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DesignCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DesignCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DesignCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, DesignCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DesignCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DesignCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DesignCommentFindManyArgs>(args?: Prisma.SelectSubset<T, DesignCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DesignCommentCreateArgs>(args: Prisma.SelectSubset<T, DesignCommentCreateArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DesignCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, DesignCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DesignCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DesignCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DesignCommentDeleteArgs>(args: Prisma.SelectSubset<T, DesignCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DesignCommentUpdateArgs>(args: Prisma.SelectSubset<T, DesignCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DesignCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DesignCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DesignCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, DesignCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DesignCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DesignCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DesignCommentUpsertArgs>(args: Prisma.SelectSubset<T, DesignCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__DesignCommentClient<runtime.Types.Result.GetResult<Prisma.$DesignCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DesignCommentCountArgs>(args?: Prisma.Subset<T, DesignCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DesignCommentCountAggregateOutputType> : number>;
    aggregate<T extends DesignCommentAggregateArgs>(args: Prisma.Subset<T, DesignCommentAggregateArgs>): Prisma.PrismaPromise<GetDesignCommentAggregateType<T>>;
    groupBy<T extends DesignCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DesignCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: DesignCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DesignCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DesignCommentFieldRefs;
}
export interface Prisma__DesignCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    designDocument<T extends Prisma.DesignDocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignDocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DesignCommentFieldRefs {
    readonly id: Prisma.FieldRef<"DesignComment", 'String'>;
    readonly designDocumentId: Prisma.FieldRef<"DesignComment", 'String'>;
    readonly authorId: Prisma.FieldRef<"DesignComment", 'String'>;
    readonly body: Prisma.FieldRef<"DesignComment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DesignComment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DesignComment", 'DateTime'>;
}
export type DesignCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    where: Prisma.DesignCommentWhereUniqueInput;
};
export type DesignCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    where: Prisma.DesignCommentWhereUniqueInput;
};
export type DesignCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignCommentCreateInput, Prisma.DesignCommentUncheckedCreateInput>;
};
export type DesignCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DesignCommentCreateManyInput | Prisma.DesignCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    data: Prisma.DesignCommentCreateManyInput | Prisma.DesignCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DesignCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DesignCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignCommentUpdateInput, Prisma.DesignCommentUncheckedUpdateInput>;
    where: Prisma.DesignCommentWhereUniqueInput;
};
export type DesignCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DesignCommentUpdateManyMutationInput, Prisma.DesignCommentUncheckedUpdateManyInput>;
    where?: Prisma.DesignCommentWhereInput;
    limit?: number;
};
export type DesignCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignCommentUpdateManyMutationInput, Prisma.DesignCommentUncheckedUpdateManyInput>;
    where?: Prisma.DesignCommentWhereInput;
    limit?: number;
    include?: Prisma.DesignCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DesignCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    where: Prisma.DesignCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignCommentCreateInput, Prisma.DesignCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DesignCommentUpdateInput, Prisma.DesignCommentUncheckedUpdateInput>;
};
export type DesignCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
    where: Prisma.DesignCommentWhereUniqueInput;
};
export type DesignCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignCommentWhereInput;
    limit?: number;
};
export type DesignCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignCommentSelect<ExtArgs> | null;
    omit?: Prisma.DesignCommentOmit<ExtArgs> | null;
    include?: Prisma.DesignCommentInclude<ExtArgs> | null;
};
