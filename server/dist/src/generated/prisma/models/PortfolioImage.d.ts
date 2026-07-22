import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortfolioImageModel = runtime.Types.Result.DefaultSelection<Prisma.$PortfolioImagePayload>;
export type AggregatePortfolioImage = {
    _count: PortfolioImageCountAggregateOutputType | null;
    _avg: PortfolioImageAvgAggregateOutputType | null;
    _sum: PortfolioImageSumAggregateOutputType | null;
    _min: PortfolioImageMinAggregateOutputType | null;
    _max: PortfolioImageMaxAggregateOutputType | null;
};
export type PortfolioImageAvgAggregateOutputType = {
    width: number | null;
    height: number | null;
    sortOrder: number | null;
};
export type PortfolioImageSumAggregateOutputType = {
    width: number | null;
    height: number | null;
    sortOrder: number | null;
};
export type PortfolioImageMinAggregateOutputType = {
    id: string | null;
    url: string | null;
    altTextEn: string | null;
    altTextFr: string | null;
    width: number | null;
    height: number | null;
    sortOrder: number | null;
    isCover: boolean | null;
    projectId: string | null;
};
export type PortfolioImageMaxAggregateOutputType = {
    id: string | null;
    url: string | null;
    altTextEn: string | null;
    altTextFr: string | null;
    width: number | null;
    height: number | null;
    sortOrder: number | null;
    isCover: boolean | null;
    projectId: string | null;
};
export type PortfolioImageCountAggregateOutputType = {
    id: number;
    url: number;
    altTextEn: number;
    altTextFr: number;
    width: number;
    height: number;
    sortOrder: number;
    isCover: number;
    projectId: number;
    _all: number;
};
export type PortfolioImageAvgAggregateInputType = {
    width?: true;
    height?: true;
    sortOrder?: true;
};
export type PortfolioImageSumAggregateInputType = {
    width?: true;
    height?: true;
    sortOrder?: true;
};
export type PortfolioImageMinAggregateInputType = {
    id?: true;
    url?: true;
    altTextEn?: true;
    altTextFr?: true;
    width?: true;
    height?: true;
    sortOrder?: true;
    isCover?: true;
    projectId?: true;
};
export type PortfolioImageMaxAggregateInputType = {
    id?: true;
    url?: true;
    altTextEn?: true;
    altTextFr?: true;
    width?: true;
    height?: true;
    sortOrder?: true;
    isCover?: true;
    projectId?: true;
};
export type PortfolioImageCountAggregateInputType = {
    id?: true;
    url?: true;
    altTextEn?: true;
    altTextFr?: true;
    width?: true;
    height?: true;
    sortOrder?: true;
    isCover?: true;
    projectId?: true;
    _all?: true;
};
export type PortfolioImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioImageWhereInput;
    orderBy?: Prisma.PortfolioImageOrderByWithRelationInput | Prisma.PortfolioImageOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioImageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortfolioImageCountAggregateInputType;
    _avg?: PortfolioImageAvgAggregateInputType;
    _sum?: PortfolioImageSumAggregateInputType;
    _min?: PortfolioImageMinAggregateInputType;
    _max?: PortfolioImageMaxAggregateInputType;
};
export type GetPortfolioImageAggregateType<T extends PortfolioImageAggregateArgs> = {
    [P in keyof T & keyof AggregatePortfolioImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortfolioImage[P]> : Prisma.GetScalarType<T[P], AggregatePortfolioImage[P]>;
};
export type PortfolioImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioImageWhereInput;
    orderBy?: Prisma.PortfolioImageOrderByWithAggregationInput | Prisma.PortfolioImageOrderByWithAggregationInput[];
    by: Prisma.PortfolioImageScalarFieldEnum[] | Prisma.PortfolioImageScalarFieldEnum;
    having?: Prisma.PortfolioImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortfolioImageCountAggregateInputType | true;
    _avg?: PortfolioImageAvgAggregateInputType;
    _sum?: PortfolioImageSumAggregateInputType;
    _min?: PortfolioImageMinAggregateInputType;
    _max?: PortfolioImageMaxAggregateInputType;
};
export type PortfolioImageGroupByOutputType = {
    id: string;
    url: string;
    altTextEn: string;
    altTextFr: string | null;
    width: number | null;
    height: number | null;
    sortOrder: number;
    isCover: boolean;
    projectId: string;
    _count: PortfolioImageCountAggregateOutputType | null;
    _avg: PortfolioImageAvgAggregateOutputType | null;
    _sum: PortfolioImageSumAggregateOutputType | null;
    _min: PortfolioImageMinAggregateOutputType | null;
    _max: PortfolioImageMaxAggregateOutputType | null;
};
export type GetPortfolioImageGroupByPayload<T extends PortfolioImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortfolioImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortfolioImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortfolioImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortfolioImageGroupByOutputType[P]>;
}>>;
export type PortfolioImageWhereInput = {
    AND?: Prisma.PortfolioImageWhereInput | Prisma.PortfolioImageWhereInput[];
    OR?: Prisma.PortfolioImageWhereInput[];
    NOT?: Prisma.PortfolioImageWhereInput | Prisma.PortfolioImageWhereInput[];
    id?: Prisma.StringFilter<"PortfolioImage"> | string;
    url?: Prisma.StringFilter<"PortfolioImage"> | string;
    altTextEn?: Prisma.StringFilter<"PortfolioImage"> | string;
    altTextFr?: Prisma.StringNullableFilter<"PortfolioImage"> | string | null;
    width?: Prisma.IntNullableFilter<"PortfolioImage"> | number | null;
    height?: Prisma.IntNullableFilter<"PortfolioImage"> | number | null;
    sortOrder?: Prisma.IntFilter<"PortfolioImage"> | number;
    isCover?: Prisma.BoolFilter<"PortfolioImage"> | boolean;
    projectId?: Prisma.StringFilter<"PortfolioImage"> | string;
    project?: Prisma.XOR<Prisma.PortfolioProjectScalarRelationFilter, Prisma.PortfolioProjectWhereInput>;
};
export type PortfolioImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    altTextEn?: Prisma.SortOrder;
    altTextFr?: Prisma.SortOrderInput | Prisma.SortOrder;
    width?: Prisma.SortOrderInput | Prisma.SortOrder;
    height?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    project?: Prisma.PortfolioProjectOrderByWithRelationInput;
};
export type PortfolioImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PortfolioImageWhereInput | Prisma.PortfolioImageWhereInput[];
    OR?: Prisma.PortfolioImageWhereInput[];
    NOT?: Prisma.PortfolioImageWhereInput | Prisma.PortfolioImageWhereInput[];
    url?: Prisma.StringFilter<"PortfolioImage"> | string;
    altTextEn?: Prisma.StringFilter<"PortfolioImage"> | string;
    altTextFr?: Prisma.StringNullableFilter<"PortfolioImage"> | string | null;
    width?: Prisma.IntNullableFilter<"PortfolioImage"> | number | null;
    height?: Prisma.IntNullableFilter<"PortfolioImage"> | number | null;
    sortOrder?: Prisma.IntFilter<"PortfolioImage"> | number;
    isCover?: Prisma.BoolFilter<"PortfolioImage"> | boolean;
    projectId?: Prisma.StringFilter<"PortfolioImage"> | string;
    project?: Prisma.XOR<Prisma.PortfolioProjectScalarRelationFilter, Prisma.PortfolioProjectWhereInput>;
}, "id">;
export type PortfolioImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    altTextEn?: Prisma.SortOrder;
    altTextFr?: Prisma.SortOrderInput | Prisma.SortOrder;
    width?: Prisma.SortOrderInput | Prisma.SortOrder;
    height?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    _count?: Prisma.PortfolioImageCountOrderByAggregateInput;
    _avg?: Prisma.PortfolioImageAvgOrderByAggregateInput;
    _max?: Prisma.PortfolioImageMaxOrderByAggregateInput;
    _min?: Prisma.PortfolioImageMinOrderByAggregateInput;
    _sum?: Prisma.PortfolioImageSumOrderByAggregateInput;
};
export type PortfolioImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortfolioImageScalarWhereWithAggregatesInput | Prisma.PortfolioImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortfolioImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortfolioImageScalarWhereWithAggregatesInput | Prisma.PortfolioImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PortfolioImage"> | string;
    url?: Prisma.StringWithAggregatesFilter<"PortfolioImage"> | string;
    altTextEn?: Prisma.StringWithAggregatesFilter<"PortfolioImage"> | string;
    altTextFr?: Prisma.StringNullableWithAggregatesFilter<"PortfolioImage"> | string | null;
    width?: Prisma.IntNullableWithAggregatesFilter<"PortfolioImage"> | number | null;
    height?: Prisma.IntNullableWithAggregatesFilter<"PortfolioImage"> | number | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PortfolioImage"> | number;
    isCover?: Prisma.BoolWithAggregatesFilter<"PortfolioImage"> | boolean;
    projectId?: Prisma.StringWithAggregatesFilter<"PortfolioImage"> | string;
};
export type PortfolioImageCreateInput = {
    id?: string;
    url: string;
    altTextEn: string;
    altTextFr?: string | null;
    width?: number | null;
    height?: number | null;
    sortOrder?: number;
    isCover?: boolean;
    project: Prisma.PortfolioProjectCreateNestedOneWithoutImagesInput;
};
export type PortfolioImageUncheckedCreateInput = {
    id?: string;
    url: string;
    altTextEn: string;
    altTextFr?: string | null;
    width?: number | null;
    height?: number | null;
    sortOrder?: number;
    isCover?: boolean;
    projectId: string;
};
export type PortfolioImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    project?: Prisma.PortfolioProjectUpdateOneRequiredWithoutImagesNestedInput;
};
export type PortfolioImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioImageCreateManyInput = {
    id?: string;
    url: string;
    altTextEn: string;
    altTextFr?: string | null;
    width?: number | null;
    height?: number | null;
    sortOrder?: number;
    isCover?: boolean;
    projectId: string;
};
export type PortfolioImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PortfolioImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioImageListRelationFilter = {
    every?: Prisma.PortfolioImageWhereInput;
    some?: Prisma.PortfolioImageWhereInput;
    none?: Prisma.PortfolioImageWhereInput;
};
export type PortfolioImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortfolioImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    altTextEn?: Prisma.SortOrder;
    altTextFr?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type PortfolioImageAvgOrderByAggregateInput = {
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PortfolioImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    altTextEn?: Prisma.SortOrder;
    altTextFr?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type PortfolioImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    altTextEn?: Prisma.SortOrder;
    altTextFr?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isCover?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type PortfolioImageSumOrderByAggregateInput = {
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type PortfolioImageCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.PortfolioImageCreateWithoutProjectInput, Prisma.PortfolioImageUncheckedCreateWithoutProjectInput> | Prisma.PortfolioImageCreateWithoutProjectInput[] | Prisma.PortfolioImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PortfolioImageCreateOrConnectWithoutProjectInput | Prisma.PortfolioImageCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.PortfolioImageCreateManyProjectInputEnvelope;
    connect?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
};
export type PortfolioImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.PortfolioImageCreateWithoutProjectInput, Prisma.PortfolioImageUncheckedCreateWithoutProjectInput> | Prisma.PortfolioImageCreateWithoutProjectInput[] | Prisma.PortfolioImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PortfolioImageCreateOrConnectWithoutProjectInput | Prisma.PortfolioImageCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.PortfolioImageCreateManyProjectInputEnvelope;
    connect?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
};
export type PortfolioImageUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioImageCreateWithoutProjectInput, Prisma.PortfolioImageUncheckedCreateWithoutProjectInput> | Prisma.PortfolioImageCreateWithoutProjectInput[] | Prisma.PortfolioImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PortfolioImageCreateOrConnectWithoutProjectInput | Prisma.PortfolioImageCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.PortfolioImageUpsertWithWhereUniqueWithoutProjectInput | Prisma.PortfolioImageUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.PortfolioImageCreateManyProjectInputEnvelope;
    set?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    disconnect?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    delete?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    connect?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    update?: Prisma.PortfolioImageUpdateWithWhereUniqueWithoutProjectInput | Prisma.PortfolioImageUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.PortfolioImageUpdateManyWithWhereWithoutProjectInput | Prisma.PortfolioImageUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.PortfolioImageScalarWhereInput | Prisma.PortfolioImageScalarWhereInput[];
};
export type PortfolioImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioImageCreateWithoutProjectInput, Prisma.PortfolioImageUncheckedCreateWithoutProjectInput> | Prisma.PortfolioImageCreateWithoutProjectInput[] | Prisma.PortfolioImageUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.PortfolioImageCreateOrConnectWithoutProjectInput | Prisma.PortfolioImageCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.PortfolioImageUpsertWithWhereUniqueWithoutProjectInput | Prisma.PortfolioImageUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.PortfolioImageCreateManyProjectInputEnvelope;
    set?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    disconnect?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    delete?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    connect?: Prisma.PortfolioImageWhereUniqueInput | Prisma.PortfolioImageWhereUniqueInput[];
    update?: Prisma.PortfolioImageUpdateWithWhereUniqueWithoutProjectInput | Prisma.PortfolioImageUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.PortfolioImageUpdateManyWithWhereWithoutProjectInput | Prisma.PortfolioImageUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.PortfolioImageScalarWhereInput | Prisma.PortfolioImageScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PortfolioImageCreateWithoutProjectInput = {
    id?: string;
    url: string;
    altTextEn: string;
    altTextFr?: string | null;
    width?: number | null;
    height?: number | null;
    sortOrder?: number;
    isCover?: boolean;
};
export type PortfolioImageUncheckedCreateWithoutProjectInput = {
    id?: string;
    url: string;
    altTextEn: string;
    altTextFr?: string | null;
    width?: number | null;
    height?: number | null;
    sortOrder?: number;
    isCover?: boolean;
};
export type PortfolioImageCreateOrConnectWithoutProjectInput = {
    where: Prisma.PortfolioImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioImageCreateWithoutProjectInput, Prisma.PortfolioImageUncheckedCreateWithoutProjectInput>;
};
export type PortfolioImageCreateManyProjectInputEnvelope = {
    data: Prisma.PortfolioImageCreateManyProjectInput | Prisma.PortfolioImageCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type PortfolioImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.PortfolioImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioImageUpdateWithoutProjectInput, Prisma.PortfolioImageUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.PortfolioImageCreateWithoutProjectInput, Prisma.PortfolioImageUncheckedCreateWithoutProjectInput>;
};
export type PortfolioImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.PortfolioImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioImageUpdateWithoutProjectInput, Prisma.PortfolioImageUncheckedUpdateWithoutProjectInput>;
};
export type PortfolioImageUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.PortfolioImageScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioImageUpdateManyMutationInput, Prisma.PortfolioImageUncheckedUpdateManyWithoutProjectInput>;
};
export type PortfolioImageScalarWhereInput = {
    AND?: Prisma.PortfolioImageScalarWhereInput | Prisma.PortfolioImageScalarWhereInput[];
    OR?: Prisma.PortfolioImageScalarWhereInput[];
    NOT?: Prisma.PortfolioImageScalarWhereInput | Prisma.PortfolioImageScalarWhereInput[];
    id?: Prisma.StringFilter<"PortfolioImage"> | string;
    url?: Prisma.StringFilter<"PortfolioImage"> | string;
    altTextEn?: Prisma.StringFilter<"PortfolioImage"> | string;
    altTextFr?: Prisma.StringNullableFilter<"PortfolioImage"> | string | null;
    width?: Prisma.IntNullableFilter<"PortfolioImage"> | number | null;
    height?: Prisma.IntNullableFilter<"PortfolioImage"> | number | null;
    sortOrder?: Prisma.IntFilter<"PortfolioImage"> | number;
    isCover?: Prisma.BoolFilter<"PortfolioImage"> | boolean;
    projectId?: Prisma.StringFilter<"PortfolioImage"> | string;
};
export type PortfolioImageCreateManyProjectInput = {
    id?: string;
    url: string;
    altTextEn: string;
    altTextFr?: string | null;
    width?: number | null;
    height?: number | null;
    sortOrder?: number;
    isCover?: boolean;
};
export type PortfolioImageUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PortfolioImageUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PortfolioImageUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextEn?: Prisma.StringFieldUpdateOperationsInput | string;
    altTextFr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isCover?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PortfolioImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    altTextEn?: boolean;
    altTextFr?: boolean;
    width?: boolean;
    height?: boolean;
    sortOrder?: boolean;
    isCover?: boolean;
    projectId?: boolean;
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioImage"]>;
export type PortfolioImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    altTextEn?: boolean;
    altTextFr?: boolean;
    width?: boolean;
    height?: boolean;
    sortOrder?: boolean;
    isCover?: boolean;
    projectId?: boolean;
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioImage"]>;
export type PortfolioImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    url?: boolean;
    altTextEn?: boolean;
    altTextFr?: boolean;
    width?: boolean;
    height?: boolean;
    sortOrder?: boolean;
    isCover?: boolean;
    projectId?: boolean;
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioImage"]>;
export type PortfolioImageSelectScalar = {
    id?: boolean;
    url?: boolean;
    altTextEn?: boolean;
    altTextFr?: boolean;
    width?: boolean;
    height?: boolean;
    sortOrder?: boolean;
    isCover?: boolean;
    projectId?: boolean;
};
export type PortfolioImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "url" | "altTextEn" | "altTextFr" | "width" | "height" | "sortOrder" | "isCover" | "projectId", ExtArgs["result"]["portfolioImage"]>;
export type PortfolioImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
};
export type PortfolioImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
};
export type PortfolioImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
};
export type $PortfolioImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortfolioImage";
    objects: {
        project: Prisma.$PortfolioProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        url: string;
        altTextEn: string;
        altTextFr: string | null;
        width: number | null;
        height: number | null;
        sortOrder: number;
        isCover: boolean;
        projectId: string;
    }, ExtArgs["result"]["portfolioImage"]>;
    composites: {};
};
export type PortfolioImageGetPayload<S extends boolean | null | undefined | PortfolioImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload, S>;
export type PortfolioImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortfolioImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortfolioImageCountAggregateInputType | true;
};
export interface PortfolioImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortfolioImage'];
        meta: {
            name: 'PortfolioImage';
        };
    };
    findUnique<T extends PortfolioImageFindUniqueArgs>(args: Prisma.SelectSubset<T, PortfolioImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortfolioImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortfolioImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortfolioImageFindFirstArgs>(args?: Prisma.SelectSubset<T, PortfolioImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortfolioImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortfolioImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortfolioImageFindManyArgs>(args?: Prisma.SelectSubset<T, PortfolioImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortfolioImageCreateArgs>(args: Prisma.SelectSubset<T, PortfolioImageCreateArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortfolioImageCreateManyArgs>(args?: Prisma.SelectSubset<T, PortfolioImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortfolioImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortfolioImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortfolioImageDeleteArgs>(args: Prisma.SelectSubset<T, PortfolioImageDeleteArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortfolioImageUpdateArgs>(args: Prisma.SelectSubset<T, PortfolioImageUpdateArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortfolioImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortfolioImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortfolioImageUpdateManyArgs>(args: Prisma.SelectSubset<T, PortfolioImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortfolioImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortfolioImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortfolioImageUpsertArgs>(args: Prisma.SelectSubset<T, PortfolioImageUpsertArgs<ExtArgs>>): Prisma.Prisma__PortfolioImageClient<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortfolioImageCountArgs>(args?: Prisma.Subset<T, PortfolioImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortfolioImageCountAggregateOutputType> : number>;
    aggregate<T extends PortfolioImageAggregateArgs>(args: Prisma.Subset<T, PortfolioImageAggregateArgs>): Prisma.PrismaPromise<GetPortfolioImageAggregateType<T>>;
    groupBy<T extends PortfolioImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortfolioImageGroupByArgs['orderBy'];
    } : {
        orderBy?: PortfolioImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortfolioImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortfolioImageFieldRefs;
}
export interface Prisma__PortfolioImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.PortfolioProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortfolioImageFieldRefs {
    readonly id: Prisma.FieldRef<"PortfolioImage", 'String'>;
    readonly url: Prisma.FieldRef<"PortfolioImage", 'String'>;
    readonly altTextEn: Prisma.FieldRef<"PortfolioImage", 'String'>;
    readonly altTextFr: Prisma.FieldRef<"PortfolioImage", 'String'>;
    readonly width: Prisma.FieldRef<"PortfolioImage", 'Int'>;
    readonly height: Prisma.FieldRef<"PortfolioImage", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"PortfolioImage", 'Int'>;
    readonly isCover: Prisma.FieldRef<"PortfolioImage", 'Boolean'>;
    readonly projectId: Prisma.FieldRef<"PortfolioImage", 'String'>;
}
export type PortfolioImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where: Prisma.PortfolioImageWhereUniqueInput;
};
export type PortfolioImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where: Prisma.PortfolioImageWhereUniqueInput;
};
export type PortfolioImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where?: Prisma.PortfolioImageWhereInput;
    orderBy?: Prisma.PortfolioImageOrderByWithRelationInput | Prisma.PortfolioImageOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioImageScalarFieldEnum | Prisma.PortfolioImageScalarFieldEnum[];
};
export type PortfolioImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where?: Prisma.PortfolioImageWhereInput;
    orderBy?: Prisma.PortfolioImageOrderByWithRelationInput | Prisma.PortfolioImageOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioImageScalarFieldEnum | Prisma.PortfolioImageScalarFieldEnum[];
};
export type PortfolioImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where?: Prisma.PortfolioImageWhereInput;
    orderBy?: Prisma.PortfolioImageOrderByWithRelationInput | Prisma.PortfolioImageOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioImageScalarFieldEnum | Prisma.PortfolioImageScalarFieldEnum[];
};
export type PortfolioImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioImageCreateInput, Prisma.PortfolioImageUncheckedCreateInput>;
};
export type PortfolioImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortfolioImageCreateManyInput | Prisma.PortfolioImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    data: Prisma.PortfolioImageCreateManyInput | Prisma.PortfolioImageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PortfolioImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PortfolioImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioImageUpdateInput, Prisma.PortfolioImageUncheckedUpdateInput>;
    where: Prisma.PortfolioImageWhereUniqueInput;
};
export type PortfolioImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortfolioImageUpdateManyMutationInput, Prisma.PortfolioImageUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioImageWhereInput;
    limit?: number;
};
export type PortfolioImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioImageUpdateManyMutationInput, Prisma.PortfolioImageUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioImageWhereInput;
    limit?: number;
    include?: Prisma.PortfolioImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PortfolioImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where: Prisma.PortfolioImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioImageCreateInput, Prisma.PortfolioImageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortfolioImageUpdateInput, Prisma.PortfolioImageUncheckedUpdateInput>;
};
export type PortfolioImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
    where: Prisma.PortfolioImageWhereUniqueInput;
};
export type PortfolioImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioImageWhereInput;
    limit?: number;
};
export type PortfolioImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioImageSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioImageOmit<ExtArgs> | null;
    include?: Prisma.PortfolioImageInclude<ExtArgs> | null;
};
