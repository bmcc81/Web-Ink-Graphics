import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DesignVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$DesignVersionPayload>;
export type AggregateDesignVersion = {
    _count: DesignVersionCountAggregateOutputType | null;
    _min: DesignVersionMinAggregateOutputType | null;
    _max: DesignVersionMaxAggregateOutputType | null;
};
export type DesignVersionMinAggregateOutputType = {
    id: string | null;
    designDocumentId: string | null;
    thumbnailUrl: string | null;
    figmaLastModified: Date | null;
    syncedAt: Date | null;
};
export type DesignVersionMaxAggregateOutputType = {
    id: string | null;
    designDocumentId: string | null;
    thumbnailUrl: string | null;
    figmaLastModified: Date | null;
    syncedAt: Date | null;
};
export type DesignVersionCountAggregateOutputType = {
    id: number;
    designDocumentId: number;
    thumbnailUrl: number;
    figmaLastModified: number;
    syncedAt: number;
    _all: number;
};
export type DesignVersionMinAggregateInputType = {
    id?: true;
    designDocumentId?: true;
    thumbnailUrl?: true;
    figmaLastModified?: true;
    syncedAt?: true;
};
export type DesignVersionMaxAggregateInputType = {
    id?: true;
    designDocumentId?: true;
    thumbnailUrl?: true;
    figmaLastModified?: true;
    syncedAt?: true;
};
export type DesignVersionCountAggregateInputType = {
    id?: true;
    designDocumentId?: true;
    thumbnailUrl?: true;
    figmaLastModified?: true;
    syncedAt?: true;
    _all?: true;
};
export type DesignVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignVersionWhereInput;
    orderBy?: Prisma.DesignVersionOrderByWithRelationInput | Prisma.DesignVersionOrderByWithRelationInput[];
    cursor?: Prisma.DesignVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DesignVersionCountAggregateInputType;
    _min?: DesignVersionMinAggregateInputType;
    _max?: DesignVersionMaxAggregateInputType;
};
export type GetDesignVersionAggregateType<T extends DesignVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateDesignVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDesignVersion[P]> : Prisma.GetScalarType<T[P], AggregateDesignVersion[P]>;
};
export type DesignVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignVersionWhereInput;
    orderBy?: Prisma.DesignVersionOrderByWithAggregationInput | Prisma.DesignVersionOrderByWithAggregationInput[];
    by: Prisma.DesignVersionScalarFieldEnum[] | Prisma.DesignVersionScalarFieldEnum;
    having?: Prisma.DesignVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DesignVersionCountAggregateInputType | true;
    _min?: DesignVersionMinAggregateInputType;
    _max?: DesignVersionMaxAggregateInputType;
};
export type DesignVersionGroupByOutputType = {
    id: string;
    designDocumentId: string;
    thumbnailUrl: string | null;
    figmaLastModified: Date | null;
    syncedAt: Date;
    _count: DesignVersionCountAggregateOutputType | null;
    _min: DesignVersionMinAggregateOutputType | null;
    _max: DesignVersionMaxAggregateOutputType | null;
};
export type GetDesignVersionGroupByPayload<T extends DesignVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DesignVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DesignVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DesignVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DesignVersionGroupByOutputType[P]>;
}>>;
export type DesignVersionWhereInput = {
    AND?: Prisma.DesignVersionWhereInput | Prisma.DesignVersionWhereInput[];
    OR?: Prisma.DesignVersionWhereInput[];
    NOT?: Prisma.DesignVersionWhereInput | Prisma.DesignVersionWhereInput[];
    id?: Prisma.StringFilter<"DesignVersion"> | string;
    designDocumentId?: Prisma.StringFilter<"DesignVersion"> | string;
    thumbnailUrl?: Prisma.StringNullableFilter<"DesignVersion"> | string | null;
    figmaLastModified?: Prisma.DateTimeNullableFilter<"DesignVersion"> | Date | string | null;
    syncedAt?: Prisma.DateTimeFilter<"DesignVersion"> | Date | string;
    designDocument?: Prisma.XOR<Prisma.DesignDocumentScalarRelationFilter, Prisma.DesignDocumentWhereInput>;
    decidingReviews?: Prisma.DesignReviewListRelationFilter;
};
export type DesignVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    figmaLastModified?: Prisma.SortOrderInput | Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    designDocument?: Prisma.DesignDocumentOrderByWithRelationInput;
    decidingReviews?: Prisma.DesignReviewOrderByRelationAggregateInput;
};
export type DesignVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DesignVersionWhereInput | Prisma.DesignVersionWhereInput[];
    OR?: Prisma.DesignVersionWhereInput[];
    NOT?: Prisma.DesignVersionWhereInput | Prisma.DesignVersionWhereInput[];
    designDocumentId?: Prisma.StringFilter<"DesignVersion"> | string;
    thumbnailUrl?: Prisma.StringNullableFilter<"DesignVersion"> | string | null;
    figmaLastModified?: Prisma.DateTimeNullableFilter<"DesignVersion"> | Date | string | null;
    syncedAt?: Prisma.DateTimeFilter<"DesignVersion"> | Date | string;
    designDocument?: Prisma.XOR<Prisma.DesignDocumentScalarRelationFilter, Prisma.DesignDocumentWhereInput>;
    decidingReviews?: Prisma.DesignReviewListRelationFilter;
}, "id">;
export type DesignVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    figmaLastModified?: Prisma.SortOrderInput | Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
    _count?: Prisma.DesignVersionCountOrderByAggregateInput;
    _max?: Prisma.DesignVersionMaxOrderByAggregateInput;
    _min?: Prisma.DesignVersionMinOrderByAggregateInput;
};
export type DesignVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.DesignVersionScalarWhereWithAggregatesInput | Prisma.DesignVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.DesignVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DesignVersionScalarWhereWithAggregatesInput | Prisma.DesignVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DesignVersion"> | string;
    designDocumentId?: Prisma.StringWithAggregatesFilter<"DesignVersion"> | string;
    thumbnailUrl?: Prisma.StringNullableWithAggregatesFilter<"DesignVersion"> | string | null;
    figmaLastModified?: Prisma.DateTimeNullableWithAggregatesFilter<"DesignVersion"> | Date | string | null;
    syncedAt?: Prisma.DateTimeWithAggregatesFilter<"DesignVersion"> | Date | string;
};
export type DesignVersionCreateInput = {
    id?: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
    designDocument: Prisma.DesignDocumentCreateNestedOneWithoutVersionsInput;
    decidingReviews?: Prisma.DesignReviewCreateNestedManyWithoutDecidedVersionInput;
};
export type DesignVersionUncheckedCreateInput = {
    id?: string;
    designDocumentId: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
    decidingReviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDecidedVersionInput;
};
export type DesignVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    designDocument?: Prisma.DesignDocumentUpdateOneRequiredWithoutVersionsNestedInput;
    decidingReviews?: Prisma.DesignReviewUpdateManyWithoutDecidedVersionNestedInput;
};
export type DesignVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidingReviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDecidedVersionNestedInput;
};
export type DesignVersionCreateManyInput = {
    id?: string;
    designDocumentId: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
};
export type DesignVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignVersionListRelationFilter = {
    every?: Prisma.DesignVersionWhereInput;
    some?: Prisma.DesignVersionWhereInput;
    none?: Prisma.DesignVersionWhereInput;
};
export type DesignVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DesignVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrder;
    figmaLastModified?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
};
export type DesignVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrder;
    figmaLastModified?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
};
export type DesignVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    designDocumentId?: Prisma.SortOrder;
    thumbnailUrl?: Prisma.SortOrder;
    figmaLastModified?: Prisma.SortOrder;
    syncedAt?: Prisma.SortOrder;
};
export type DesignVersionNullableScalarRelationFilter = {
    is?: Prisma.DesignVersionWhereInput | null;
    isNot?: Prisma.DesignVersionWhereInput | null;
};
export type DesignVersionCreateNestedManyWithoutDesignDocumentInput = {
    create?: Prisma.XOR<Prisma.DesignVersionCreateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignVersionCreateWithoutDesignDocumentInput[] | Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignVersionCreateManyDesignDocumentInputEnvelope;
    connect?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
};
export type DesignVersionUncheckedCreateNestedManyWithoutDesignDocumentInput = {
    create?: Prisma.XOR<Prisma.DesignVersionCreateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignVersionCreateWithoutDesignDocumentInput[] | Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignVersionCreateManyDesignDocumentInputEnvelope;
    connect?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
};
export type DesignVersionUpdateManyWithoutDesignDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DesignVersionCreateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignVersionCreateWithoutDesignDocumentInput[] | Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput[];
    upsert?: Prisma.DesignVersionUpsertWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignVersionUpsertWithWhereUniqueWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignVersionCreateManyDesignDocumentInputEnvelope;
    set?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    disconnect?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    delete?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    connect?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    update?: Prisma.DesignVersionUpdateWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignVersionUpdateWithWhereUniqueWithoutDesignDocumentInput[];
    updateMany?: Prisma.DesignVersionUpdateManyWithWhereWithoutDesignDocumentInput | Prisma.DesignVersionUpdateManyWithWhereWithoutDesignDocumentInput[];
    deleteMany?: Prisma.DesignVersionScalarWhereInput | Prisma.DesignVersionScalarWhereInput[];
};
export type DesignVersionUncheckedUpdateManyWithoutDesignDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DesignVersionCreateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput> | Prisma.DesignVersionCreateWithoutDesignDocumentInput[] | Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput[];
    connectOrCreate?: Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput | Prisma.DesignVersionCreateOrConnectWithoutDesignDocumentInput[];
    upsert?: Prisma.DesignVersionUpsertWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignVersionUpsertWithWhereUniqueWithoutDesignDocumentInput[];
    createMany?: Prisma.DesignVersionCreateManyDesignDocumentInputEnvelope;
    set?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    disconnect?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    delete?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    connect?: Prisma.DesignVersionWhereUniqueInput | Prisma.DesignVersionWhereUniqueInput[];
    update?: Prisma.DesignVersionUpdateWithWhereUniqueWithoutDesignDocumentInput | Prisma.DesignVersionUpdateWithWhereUniqueWithoutDesignDocumentInput[];
    updateMany?: Prisma.DesignVersionUpdateManyWithWhereWithoutDesignDocumentInput | Prisma.DesignVersionUpdateManyWithWhereWithoutDesignDocumentInput[];
    deleteMany?: Prisma.DesignVersionScalarWhereInput | Prisma.DesignVersionScalarWhereInput[];
};
export type DesignVersionCreateNestedOneWithoutDecidingReviewsInput = {
    create?: Prisma.XOR<Prisma.DesignVersionCreateWithoutDecidingReviewsInput, Prisma.DesignVersionUncheckedCreateWithoutDecidingReviewsInput>;
    connectOrCreate?: Prisma.DesignVersionCreateOrConnectWithoutDecidingReviewsInput;
    connect?: Prisma.DesignVersionWhereUniqueInput;
};
export type DesignVersionUpdateOneWithoutDecidingReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.DesignVersionCreateWithoutDecidingReviewsInput, Prisma.DesignVersionUncheckedCreateWithoutDecidingReviewsInput>;
    connectOrCreate?: Prisma.DesignVersionCreateOrConnectWithoutDecidingReviewsInput;
    upsert?: Prisma.DesignVersionUpsertWithoutDecidingReviewsInput;
    disconnect?: Prisma.DesignVersionWhereInput | boolean;
    delete?: Prisma.DesignVersionWhereInput | boolean;
    connect?: Prisma.DesignVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignVersionUpdateToOneWithWhereWithoutDecidingReviewsInput, Prisma.DesignVersionUpdateWithoutDecidingReviewsInput>, Prisma.DesignVersionUncheckedUpdateWithoutDecidingReviewsInput>;
};
export type DesignVersionCreateWithoutDesignDocumentInput = {
    id?: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
    decidingReviews?: Prisma.DesignReviewCreateNestedManyWithoutDecidedVersionInput;
};
export type DesignVersionUncheckedCreateWithoutDesignDocumentInput = {
    id?: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
    decidingReviews?: Prisma.DesignReviewUncheckedCreateNestedManyWithoutDecidedVersionInput;
};
export type DesignVersionCreateOrConnectWithoutDesignDocumentInput = {
    where: Prisma.DesignVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignVersionCreateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput>;
};
export type DesignVersionCreateManyDesignDocumentInputEnvelope = {
    data: Prisma.DesignVersionCreateManyDesignDocumentInput | Prisma.DesignVersionCreateManyDesignDocumentInput[];
    skipDuplicates?: boolean;
};
export type DesignVersionUpsertWithWhereUniqueWithoutDesignDocumentInput = {
    where: Prisma.DesignVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignVersionUpdateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedUpdateWithoutDesignDocumentInput>;
    create: Prisma.XOR<Prisma.DesignVersionCreateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedCreateWithoutDesignDocumentInput>;
};
export type DesignVersionUpdateWithWhereUniqueWithoutDesignDocumentInput = {
    where: Prisma.DesignVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignVersionUpdateWithoutDesignDocumentInput, Prisma.DesignVersionUncheckedUpdateWithoutDesignDocumentInput>;
};
export type DesignVersionUpdateManyWithWhereWithoutDesignDocumentInput = {
    where: Prisma.DesignVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignVersionUpdateManyMutationInput, Prisma.DesignVersionUncheckedUpdateManyWithoutDesignDocumentInput>;
};
export type DesignVersionScalarWhereInput = {
    AND?: Prisma.DesignVersionScalarWhereInput | Prisma.DesignVersionScalarWhereInput[];
    OR?: Prisma.DesignVersionScalarWhereInput[];
    NOT?: Prisma.DesignVersionScalarWhereInput | Prisma.DesignVersionScalarWhereInput[];
    id?: Prisma.StringFilter<"DesignVersion"> | string;
    designDocumentId?: Prisma.StringFilter<"DesignVersion"> | string;
    thumbnailUrl?: Prisma.StringNullableFilter<"DesignVersion"> | string | null;
    figmaLastModified?: Prisma.DateTimeNullableFilter<"DesignVersion"> | Date | string | null;
    syncedAt?: Prisma.DateTimeFilter<"DesignVersion"> | Date | string;
};
export type DesignVersionCreateWithoutDecidingReviewsInput = {
    id?: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
    designDocument: Prisma.DesignDocumentCreateNestedOneWithoutVersionsInput;
};
export type DesignVersionUncheckedCreateWithoutDecidingReviewsInput = {
    id?: string;
    designDocumentId: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
};
export type DesignVersionCreateOrConnectWithoutDecidingReviewsInput = {
    where: Prisma.DesignVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignVersionCreateWithoutDecidingReviewsInput, Prisma.DesignVersionUncheckedCreateWithoutDecidingReviewsInput>;
};
export type DesignVersionUpsertWithoutDecidingReviewsInput = {
    update: Prisma.XOR<Prisma.DesignVersionUpdateWithoutDecidingReviewsInput, Prisma.DesignVersionUncheckedUpdateWithoutDecidingReviewsInput>;
    create: Prisma.XOR<Prisma.DesignVersionCreateWithoutDecidingReviewsInput, Prisma.DesignVersionUncheckedCreateWithoutDecidingReviewsInput>;
    where?: Prisma.DesignVersionWhereInput;
};
export type DesignVersionUpdateToOneWithWhereWithoutDecidingReviewsInput = {
    where?: Prisma.DesignVersionWhereInput;
    data: Prisma.XOR<Prisma.DesignVersionUpdateWithoutDecidingReviewsInput, Prisma.DesignVersionUncheckedUpdateWithoutDecidingReviewsInput>;
};
export type DesignVersionUpdateWithoutDecidingReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    designDocument?: Prisma.DesignDocumentUpdateOneRequiredWithoutVersionsNestedInput;
};
export type DesignVersionUncheckedUpdateWithoutDecidingReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    designDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignVersionCreateManyDesignDocumentInput = {
    id?: string;
    thumbnailUrl?: string | null;
    figmaLastModified?: Date | string | null;
    syncedAt?: Date | string;
};
export type DesignVersionUpdateWithoutDesignDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidingReviews?: Prisma.DesignReviewUpdateManyWithoutDecidedVersionNestedInput;
};
export type DesignVersionUncheckedUpdateWithoutDesignDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    decidingReviews?: Prisma.DesignReviewUncheckedUpdateManyWithoutDecidedVersionNestedInput;
};
export type DesignVersionUncheckedUpdateManyWithoutDesignDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    figmaLastModified?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    syncedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignVersionCountOutputType = {
    decidingReviews: number;
};
export type DesignVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    decidingReviews?: boolean | DesignVersionCountOutputTypeCountDecidingReviewsArgs;
};
export type DesignVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type DesignVersionCountOutputTypeCountDecidingReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignReviewWhereInput;
};
export type DesignVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    designDocumentId?: boolean;
    thumbnailUrl?: boolean;
    figmaLastModified?: boolean;
    syncedAt?: boolean;
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    decidingReviews?: boolean | Prisma.DesignVersion$decidingReviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.DesignVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designVersion"]>;
export type DesignVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    designDocumentId?: boolean;
    thumbnailUrl?: boolean;
    figmaLastModified?: boolean;
    syncedAt?: boolean;
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designVersion"]>;
export type DesignVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    designDocumentId?: boolean;
    thumbnailUrl?: boolean;
    figmaLastModified?: boolean;
    syncedAt?: boolean;
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designVersion"]>;
export type DesignVersionSelectScalar = {
    id?: boolean;
    designDocumentId?: boolean;
    thumbnailUrl?: boolean;
    figmaLastModified?: boolean;
    syncedAt?: boolean;
};
export type DesignVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "designDocumentId" | "thumbnailUrl" | "figmaLastModified" | "syncedAt", ExtArgs["result"]["designVersion"]>;
export type DesignVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
    decidingReviews?: boolean | Prisma.DesignVersion$decidingReviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.DesignVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DesignVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
};
export type DesignVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    designDocument?: boolean | Prisma.DesignDocumentDefaultArgs<ExtArgs>;
};
export type $DesignVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DesignVersion";
    objects: {
        designDocument: Prisma.$DesignDocumentPayload<ExtArgs>;
        decidingReviews: Prisma.$DesignReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        designDocumentId: string;
        thumbnailUrl: string | null;
        figmaLastModified: Date | null;
        syncedAt: Date;
    }, ExtArgs["result"]["designVersion"]>;
    composites: {};
};
export type DesignVersionGetPayload<S extends boolean | null | undefined | DesignVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload, S>;
export type DesignVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DesignVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DesignVersionCountAggregateInputType | true;
};
export interface DesignVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DesignVersion'];
        meta: {
            name: 'DesignVersion';
        };
    };
    findUnique<T extends DesignVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, DesignVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DesignVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DesignVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DesignVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, DesignVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DesignVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DesignVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DesignVersionFindManyArgs>(args?: Prisma.SelectSubset<T, DesignVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DesignVersionCreateArgs>(args: Prisma.SelectSubset<T, DesignVersionCreateArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DesignVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, DesignVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DesignVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DesignVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DesignVersionDeleteArgs>(args: Prisma.SelectSubset<T, DesignVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DesignVersionUpdateArgs>(args: Prisma.SelectSubset<T, DesignVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DesignVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, DesignVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DesignVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, DesignVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DesignVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DesignVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DesignVersionUpsertArgs>(args: Prisma.SelectSubset<T, DesignVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__DesignVersionClient<runtime.Types.Result.GetResult<Prisma.$DesignVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DesignVersionCountArgs>(args?: Prisma.Subset<T, DesignVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DesignVersionCountAggregateOutputType> : number>;
    aggregate<T extends DesignVersionAggregateArgs>(args: Prisma.Subset<T, DesignVersionAggregateArgs>): Prisma.PrismaPromise<GetDesignVersionAggregateType<T>>;
    groupBy<T extends DesignVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DesignVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: DesignVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DesignVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DesignVersionFieldRefs;
}
export interface Prisma__DesignVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    designDocument<T extends Prisma.DesignDocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignDocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DesignDocumentClient<runtime.Types.Result.GetResult<Prisma.$DesignDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    decidingReviews<T extends Prisma.DesignVersion$decidingReviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignVersion$decidingReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DesignVersionFieldRefs {
    readonly id: Prisma.FieldRef<"DesignVersion", 'String'>;
    readonly designDocumentId: Prisma.FieldRef<"DesignVersion", 'String'>;
    readonly thumbnailUrl: Prisma.FieldRef<"DesignVersion", 'String'>;
    readonly figmaLastModified: Prisma.FieldRef<"DesignVersion", 'DateTime'>;
    readonly syncedAt: Prisma.FieldRef<"DesignVersion", 'DateTime'>;
}
export type DesignVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    where: Prisma.DesignVersionWhereUniqueInput;
};
export type DesignVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    where: Prisma.DesignVersionWhereUniqueInput;
};
export type DesignVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignVersionCreateInput, Prisma.DesignVersionUncheckedCreateInput>;
};
export type DesignVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DesignVersionCreateManyInput | Prisma.DesignVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    data: Prisma.DesignVersionCreateManyInput | Prisma.DesignVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DesignVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DesignVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignVersionUpdateInput, Prisma.DesignVersionUncheckedUpdateInput>;
    where: Prisma.DesignVersionWhereUniqueInput;
};
export type DesignVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DesignVersionUpdateManyMutationInput, Prisma.DesignVersionUncheckedUpdateManyInput>;
    where?: Prisma.DesignVersionWhereInput;
    limit?: number;
};
export type DesignVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignVersionUpdateManyMutationInput, Prisma.DesignVersionUncheckedUpdateManyInput>;
    where?: Prisma.DesignVersionWhereInput;
    limit?: number;
    include?: Prisma.DesignVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DesignVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    where: Prisma.DesignVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignVersionCreateInput, Prisma.DesignVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DesignVersionUpdateInput, Prisma.DesignVersionUncheckedUpdateInput>;
};
export type DesignVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
    where: Prisma.DesignVersionWhereUniqueInput;
};
export type DesignVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignVersionWhereInput;
    limit?: number;
};
export type DesignVersion$decidingReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignVersionSelect<ExtArgs> | null;
    omit?: Prisma.DesignVersionOmit<ExtArgs> | null;
    include?: Prisma.DesignVersionInclude<ExtArgs> | null;
};
