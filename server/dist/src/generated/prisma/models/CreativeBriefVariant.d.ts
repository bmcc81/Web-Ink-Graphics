import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CreativeBriefVariantModel = runtime.Types.Result.DefaultSelection<Prisma.$CreativeBriefVariantPayload>;
export type AggregateCreativeBriefVariant = {
    _count: CreativeBriefVariantCountAggregateOutputType | null;
    _avg: CreativeBriefVariantAvgAggregateOutputType | null;
    _sum: CreativeBriefVariantSumAggregateOutputType | null;
    _min: CreativeBriefVariantMinAggregateOutputType | null;
    _max: CreativeBriefVariantMaxAggregateOutputType | null;
};
export type CreativeBriefVariantAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type CreativeBriefVariantSumAggregateOutputType = {
    sortOrder: number | null;
};
export type CreativeBriefVariantMinAggregateOutputType = {
    id: string | null;
    creativeBriefId: string | null;
    label: string | null;
    copyAngle: string | null;
    imageConcept: string | null;
    sortOrder: number | null;
};
export type CreativeBriefVariantMaxAggregateOutputType = {
    id: string | null;
    creativeBriefId: string | null;
    label: string | null;
    copyAngle: string | null;
    imageConcept: string | null;
    sortOrder: number | null;
};
export type CreativeBriefVariantCountAggregateOutputType = {
    id: number;
    creativeBriefId: number;
    label: number;
    copyAngle: number;
    imageConcept: number;
    sortOrder: number;
    _all: number;
};
export type CreativeBriefVariantAvgAggregateInputType = {
    sortOrder?: true;
};
export type CreativeBriefVariantSumAggregateInputType = {
    sortOrder?: true;
};
export type CreativeBriefVariantMinAggregateInputType = {
    id?: true;
    creativeBriefId?: true;
    label?: true;
    copyAngle?: true;
    imageConcept?: true;
    sortOrder?: true;
};
export type CreativeBriefVariantMaxAggregateInputType = {
    id?: true;
    creativeBriefId?: true;
    label?: true;
    copyAngle?: true;
    imageConcept?: true;
    sortOrder?: true;
};
export type CreativeBriefVariantCountAggregateInputType = {
    id?: true;
    creativeBriefId?: true;
    label?: true;
    copyAngle?: true;
    imageConcept?: true;
    sortOrder?: true;
    _all?: true;
};
export type CreativeBriefVariantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefVariantWhereInput;
    orderBy?: Prisma.CreativeBriefVariantOrderByWithRelationInput | Prisma.CreativeBriefVariantOrderByWithRelationInput[];
    cursor?: Prisma.CreativeBriefVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CreativeBriefVariantCountAggregateInputType;
    _avg?: CreativeBriefVariantAvgAggregateInputType;
    _sum?: CreativeBriefVariantSumAggregateInputType;
    _min?: CreativeBriefVariantMinAggregateInputType;
    _max?: CreativeBriefVariantMaxAggregateInputType;
};
export type GetCreativeBriefVariantAggregateType<T extends CreativeBriefVariantAggregateArgs> = {
    [P in keyof T & keyof AggregateCreativeBriefVariant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCreativeBriefVariant[P]> : Prisma.GetScalarType<T[P], AggregateCreativeBriefVariant[P]>;
};
export type CreativeBriefVariantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefVariantWhereInput;
    orderBy?: Prisma.CreativeBriefVariantOrderByWithAggregationInput | Prisma.CreativeBriefVariantOrderByWithAggregationInput[];
    by: Prisma.CreativeBriefVariantScalarFieldEnum[] | Prisma.CreativeBriefVariantScalarFieldEnum;
    having?: Prisma.CreativeBriefVariantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreativeBriefVariantCountAggregateInputType | true;
    _avg?: CreativeBriefVariantAvgAggregateInputType;
    _sum?: CreativeBriefVariantSumAggregateInputType;
    _min?: CreativeBriefVariantMinAggregateInputType;
    _max?: CreativeBriefVariantMaxAggregateInputType;
};
export type CreativeBriefVariantGroupByOutputType = {
    id: string;
    creativeBriefId: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder: number;
    _count: CreativeBriefVariantCountAggregateOutputType | null;
    _avg: CreativeBriefVariantAvgAggregateOutputType | null;
    _sum: CreativeBriefVariantSumAggregateOutputType | null;
    _min: CreativeBriefVariantMinAggregateOutputType | null;
    _max: CreativeBriefVariantMaxAggregateOutputType | null;
};
export type GetCreativeBriefVariantGroupByPayload<T extends CreativeBriefVariantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreativeBriefVariantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreativeBriefVariantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreativeBriefVariantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreativeBriefVariantGroupByOutputType[P]>;
}>>;
export type CreativeBriefVariantWhereInput = {
    AND?: Prisma.CreativeBriefVariantWhereInput | Prisma.CreativeBriefVariantWhereInput[];
    OR?: Prisma.CreativeBriefVariantWhereInput[];
    NOT?: Prisma.CreativeBriefVariantWhereInput | Prisma.CreativeBriefVariantWhereInput[];
    id?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    creativeBriefId?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    label?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    copyAngle?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    imageConcept?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    sortOrder?: Prisma.IntFilter<"CreativeBriefVariant"> | number;
    creativeBrief?: Prisma.XOR<Prisma.CreativeBriefScalarRelationFilter, Prisma.CreativeBriefWhereInput>;
};
export type CreativeBriefVariantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    creativeBriefId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    copyAngle?: Prisma.SortOrder;
    imageConcept?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    creativeBrief?: Prisma.CreativeBriefOrderByWithRelationInput;
};
export type CreativeBriefVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CreativeBriefVariantWhereInput | Prisma.CreativeBriefVariantWhereInput[];
    OR?: Prisma.CreativeBriefVariantWhereInput[];
    NOT?: Prisma.CreativeBriefVariantWhereInput | Prisma.CreativeBriefVariantWhereInput[];
    creativeBriefId?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    label?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    copyAngle?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    imageConcept?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    sortOrder?: Prisma.IntFilter<"CreativeBriefVariant"> | number;
    creativeBrief?: Prisma.XOR<Prisma.CreativeBriefScalarRelationFilter, Prisma.CreativeBriefWhereInput>;
}, "id">;
export type CreativeBriefVariantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    creativeBriefId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    copyAngle?: Prisma.SortOrder;
    imageConcept?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.CreativeBriefVariantCountOrderByAggregateInput;
    _avg?: Prisma.CreativeBriefVariantAvgOrderByAggregateInput;
    _max?: Prisma.CreativeBriefVariantMaxOrderByAggregateInput;
    _min?: Prisma.CreativeBriefVariantMinOrderByAggregateInput;
    _sum?: Prisma.CreativeBriefVariantSumOrderByAggregateInput;
};
export type CreativeBriefVariantScalarWhereWithAggregatesInput = {
    AND?: Prisma.CreativeBriefVariantScalarWhereWithAggregatesInput | Prisma.CreativeBriefVariantScalarWhereWithAggregatesInput[];
    OR?: Prisma.CreativeBriefVariantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CreativeBriefVariantScalarWhereWithAggregatesInput | Prisma.CreativeBriefVariantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CreativeBriefVariant"> | string;
    creativeBriefId?: Prisma.StringWithAggregatesFilter<"CreativeBriefVariant"> | string;
    label?: Prisma.StringWithAggregatesFilter<"CreativeBriefVariant"> | string;
    copyAngle?: Prisma.StringWithAggregatesFilter<"CreativeBriefVariant"> | string;
    imageConcept?: Prisma.StringWithAggregatesFilter<"CreativeBriefVariant"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"CreativeBriefVariant"> | number;
};
export type CreativeBriefVariantCreateInput = {
    id?: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder?: number;
    creativeBrief: Prisma.CreativeBriefCreateNestedOneWithoutVariantsInput;
};
export type CreativeBriefVariantUncheckedCreateInput = {
    id?: string;
    creativeBriefId: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder?: number;
};
export type CreativeBriefVariantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    creativeBrief?: Prisma.CreativeBriefUpdateOneRequiredWithoutVariantsNestedInput;
};
export type CreativeBriefVariantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creativeBriefId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CreativeBriefVariantCreateManyInput = {
    id?: string;
    creativeBriefId: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder?: number;
};
export type CreativeBriefVariantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CreativeBriefVariantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creativeBriefId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CreativeBriefVariantListRelationFilter = {
    every?: Prisma.CreativeBriefVariantWhereInput;
    some?: Prisma.CreativeBriefVariantWhereInput;
    none?: Prisma.CreativeBriefVariantWhereInput;
};
export type CreativeBriefVariantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CreativeBriefVariantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creativeBriefId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    copyAngle?: Prisma.SortOrder;
    imageConcept?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type CreativeBriefVariantAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type CreativeBriefVariantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creativeBriefId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    copyAngle?: Prisma.SortOrder;
    imageConcept?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type CreativeBriefVariantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creativeBriefId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    copyAngle?: Prisma.SortOrder;
    imageConcept?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type CreativeBriefVariantSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type CreativeBriefVariantCreateNestedManyWithoutCreativeBriefInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput> | Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput[] | Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput[];
    connectOrCreate?: Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput | Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput[];
    createMany?: Prisma.CreativeBriefVariantCreateManyCreativeBriefInputEnvelope;
    connect?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
};
export type CreativeBriefVariantUncheckedCreateNestedManyWithoutCreativeBriefInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput> | Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput[] | Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput[];
    connectOrCreate?: Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput | Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput[];
    createMany?: Prisma.CreativeBriefVariantCreateManyCreativeBriefInputEnvelope;
    connect?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
};
export type CreativeBriefVariantUpdateManyWithoutCreativeBriefNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput> | Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput[] | Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput[];
    connectOrCreate?: Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput | Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput[];
    upsert?: Prisma.CreativeBriefVariantUpsertWithWhereUniqueWithoutCreativeBriefInput | Prisma.CreativeBriefVariantUpsertWithWhereUniqueWithoutCreativeBriefInput[];
    createMany?: Prisma.CreativeBriefVariantCreateManyCreativeBriefInputEnvelope;
    set?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    delete?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    connect?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    update?: Prisma.CreativeBriefVariantUpdateWithWhereUniqueWithoutCreativeBriefInput | Prisma.CreativeBriefVariantUpdateWithWhereUniqueWithoutCreativeBriefInput[];
    updateMany?: Prisma.CreativeBriefVariantUpdateManyWithWhereWithoutCreativeBriefInput | Prisma.CreativeBriefVariantUpdateManyWithWhereWithoutCreativeBriefInput[];
    deleteMany?: Prisma.CreativeBriefVariantScalarWhereInput | Prisma.CreativeBriefVariantScalarWhereInput[];
};
export type CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefNestedInput = {
    create?: Prisma.XOR<Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput> | Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput[] | Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput[];
    connectOrCreate?: Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput | Prisma.CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput[];
    upsert?: Prisma.CreativeBriefVariantUpsertWithWhereUniqueWithoutCreativeBriefInput | Prisma.CreativeBriefVariantUpsertWithWhereUniqueWithoutCreativeBriefInput[];
    createMany?: Prisma.CreativeBriefVariantCreateManyCreativeBriefInputEnvelope;
    set?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    disconnect?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    delete?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    connect?: Prisma.CreativeBriefVariantWhereUniqueInput | Prisma.CreativeBriefVariantWhereUniqueInput[];
    update?: Prisma.CreativeBriefVariantUpdateWithWhereUniqueWithoutCreativeBriefInput | Prisma.CreativeBriefVariantUpdateWithWhereUniqueWithoutCreativeBriefInput[];
    updateMany?: Prisma.CreativeBriefVariantUpdateManyWithWhereWithoutCreativeBriefInput | Prisma.CreativeBriefVariantUpdateManyWithWhereWithoutCreativeBriefInput[];
    deleteMany?: Prisma.CreativeBriefVariantScalarWhereInput | Prisma.CreativeBriefVariantScalarWhereInput[];
};
export type CreativeBriefVariantCreateWithoutCreativeBriefInput = {
    id?: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder?: number;
};
export type CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput = {
    id?: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder?: number;
};
export type CreativeBriefVariantCreateOrConnectWithoutCreativeBriefInput = {
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput>;
};
export type CreativeBriefVariantCreateManyCreativeBriefInputEnvelope = {
    data: Prisma.CreativeBriefVariantCreateManyCreativeBriefInput | Prisma.CreativeBriefVariantCreateManyCreativeBriefInput[];
    skipDuplicates?: boolean;
};
export type CreativeBriefVariantUpsertWithWhereUniqueWithoutCreativeBriefInput = {
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreativeBriefVariantUpdateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedUpdateWithoutCreativeBriefInput>;
    create: Prisma.XOR<Prisma.CreativeBriefVariantCreateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedCreateWithoutCreativeBriefInput>;
};
export type CreativeBriefVariantUpdateWithWhereUniqueWithoutCreativeBriefInput = {
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreativeBriefVariantUpdateWithoutCreativeBriefInput, Prisma.CreativeBriefVariantUncheckedUpdateWithoutCreativeBriefInput>;
};
export type CreativeBriefVariantUpdateManyWithWhereWithoutCreativeBriefInput = {
    where: Prisma.CreativeBriefVariantScalarWhereInput;
    data: Prisma.XOR<Prisma.CreativeBriefVariantUpdateManyMutationInput, Prisma.CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefInput>;
};
export type CreativeBriefVariantScalarWhereInput = {
    AND?: Prisma.CreativeBriefVariantScalarWhereInput | Prisma.CreativeBriefVariantScalarWhereInput[];
    OR?: Prisma.CreativeBriefVariantScalarWhereInput[];
    NOT?: Prisma.CreativeBriefVariantScalarWhereInput | Prisma.CreativeBriefVariantScalarWhereInput[];
    id?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    creativeBriefId?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    label?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    copyAngle?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    imageConcept?: Prisma.StringFilter<"CreativeBriefVariant"> | string;
    sortOrder?: Prisma.IntFilter<"CreativeBriefVariant"> | number;
};
export type CreativeBriefVariantCreateManyCreativeBriefInput = {
    id?: string;
    label: string;
    copyAngle: string;
    imageConcept: string;
    sortOrder?: number;
};
export type CreativeBriefVariantUpdateWithoutCreativeBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CreativeBriefVariantUncheckedUpdateWithoutCreativeBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CreativeBriefVariantUncheckedUpdateManyWithoutCreativeBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    copyAngle?: Prisma.StringFieldUpdateOperationsInput | string;
    imageConcept?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CreativeBriefVariantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creativeBriefId?: boolean;
    label?: boolean;
    copyAngle?: boolean;
    imageConcept?: boolean;
    sortOrder?: boolean;
    creativeBrief?: boolean | Prisma.CreativeBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creativeBriefVariant"]>;
export type CreativeBriefVariantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creativeBriefId?: boolean;
    label?: boolean;
    copyAngle?: boolean;
    imageConcept?: boolean;
    sortOrder?: boolean;
    creativeBrief?: boolean | Prisma.CreativeBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creativeBriefVariant"]>;
export type CreativeBriefVariantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creativeBriefId?: boolean;
    label?: boolean;
    copyAngle?: boolean;
    imageConcept?: boolean;
    sortOrder?: boolean;
    creativeBrief?: boolean | Prisma.CreativeBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creativeBriefVariant"]>;
export type CreativeBriefVariantSelectScalar = {
    id?: boolean;
    creativeBriefId?: boolean;
    label?: boolean;
    copyAngle?: boolean;
    imageConcept?: boolean;
    sortOrder?: boolean;
};
export type CreativeBriefVariantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "creativeBriefId" | "label" | "copyAngle" | "imageConcept" | "sortOrder", ExtArgs["result"]["creativeBriefVariant"]>;
export type CreativeBriefVariantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creativeBrief?: boolean | Prisma.CreativeBriefDefaultArgs<ExtArgs>;
};
export type CreativeBriefVariantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creativeBrief?: boolean | Prisma.CreativeBriefDefaultArgs<ExtArgs>;
};
export type CreativeBriefVariantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creativeBrief?: boolean | Prisma.CreativeBriefDefaultArgs<ExtArgs>;
};
export type $CreativeBriefVariantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CreativeBriefVariant";
    objects: {
        creativeBrief: Prisma.$CreativeBriefPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        creativeBriefId: string;
        label: string;
        copyAngle: string;
        imageConcept: string;
        sortOrder: number;
    }, ExtArgs["result"]["creativeBriefVariant"]>;
    composites: {};
};
export type CreativeBriefVariantGetPayload<S extends boolean | null | undefined | CreativeBriefVariantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload, S>;
export type CreativeBriefVariantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CreativeBriefVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreativeBriefVariantCountAggregateInputType | true;
};
export interface CreativeBriefVariantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CreativeBriefVariant'];
        meta: {
            name: 'CreativeBriefVariant';
        };
    };
    findUnique<T extends CreativeBriefVariantFindUniqueArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CreativeBriefVariantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CreativeBriefVariantFindFirstArgs>(args?: Prisma.SelectSubset<T, CreativeBriefVariantFindFirstArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CreativeBriefVariantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CreativeBriefVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CreativeBriefVariantFindManyArgs>(args?: Prisma.SelectSubset<T, CreativeBriefVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CreativeBriefVariantCreateArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantCreateArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CreativeBriefVariantCreateManyArgs>(args?: Prisma.SelectSubset<T, CreativeBriefVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CreativeBriefVariantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CreativeBriefVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CreativeBriefVariantDeleteArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantDeleteArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CreativeBriefVariantUpdateArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantUpdateArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CreativeBriefVariantDeleteManyArgs>(args?: Prisma.SelectSubset<T, CreativeBriefVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CreativeBriefVariantUpdateManyArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CreativeBriefVariantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CreativeBriefVariantUpsertArgs>(args: Prisma.SelectSubset<T, CreativeBriefVariantUpsertArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefVariantClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CreativeBriefVariantCountArgs>(args?: Prisma.Subset<T, CreativeBriefVariantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreativeBriefVariantCountAggregateOutputType> : number>;
    aggregate<T extends CreativeBriefVariantAggregateArgs>(args: Prisma.Subset<T, CreativeBriefVariantAggregateArgs>): Prisma.PrismaPromise<GetCreativeBriefVariantAggregateType<T>>;
    groupBy<T extends CreativeBriefVariantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CreativeBriefVariantGroupByArgs['orderBy'];
    } : {
        orderBy?: CreativeBriefVariantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CreativeBriefVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreativeBriefVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CreativeBriefVariantFieldRefs;
}
export interface Prisma__CreativeBriefVariantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creativeBrief<T extends Prisma.CreativeBriefDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CreativeBriefDefaultArgs<ExtArgs>>): Prisma.Prisma__CreativeBriefClient<runtime.Types.Result.GetResult<Prisma.$CreativeBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CreativeBriefVariantFieldRefs {
    readonly id: Prisma.FieldRef<"CreativeBriefVariant", 'String'>;
    readonly creativeBriefId: Prisma.FieldRef<"CreativeBriefVariant", 'String'>;
    readonly label: Prisma.FieldRef<"CreativeBriefVariant", 'String'>;
    readonly copyAngle: Prisma.FieldRef<"CreativeBriefVariant", 'String'>;
    readonly imageConcept: Prisma.FieldRef<"CreativeBriefVariant", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"CreativeBriefVariant", 'Int'>;
}
export type CreativeBriefVariantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
};
export type CreativeBriefVariantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
};
export type CreativeBriefVariantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreativeBriefVariantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreativeBriefVariantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CreativeBriefVariantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreativeBriefVariantCreateInput, Prisma.CreativeBriefVariantUncheckedCreateInput>;
};
export type CreativeBriefVariantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CreativeBriefVariantCreateManyInput | Prisma.CreativeBriefVariantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CreativeBriefVariantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    data: Prisma.CreativeBriefVariantCreateManyInput | Prisma.CreativeBriefVariantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CreativeBriefVariantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CreativeBriefVariantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreativeBriefVariantUpdateInput, Prisma.CreativeBriefVariantUncheckedUpdateInput>;
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
};
export type CreativeBriefVariantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CreativeBriefVariantUpdateManyMutationInput, Prisma.CreativeBriefVariantUncheckedUpdateManyInput>;
    where?: Prisma.CreativeBriefVariantWhereInput;
    limit?: number;
};
export type CreativeBriefVariantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CreativeBriefVariantUpdateManyMutationInput, Prisma.CreativeBriefVariantUncheckedUpdateManyInput>;
    where?: Prisma.CreativeBriefVariantWhereInput;
    limit?: number;
    include?: Prisma.CreativeBriefVariantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CreativeBriefVariantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreativeBriefVariantCreateInput, Prisma.CreativeBriefVariantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CreativeBriefVariantUpdateInput, Prisma.CreativeBriefVariantUncheckedUpdateInput>;
};
export type CreativeBriefVariantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
    where: Prisma.CreativeBriefVariantWhereUniqueInput;
};
export type CreativeBriefVariantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreativeBriefVariantWhereInput;
    limit?: number;
};
export type CreativeBriefVariantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CreativeBriefVariantSelect<ExtArgs> | null;
    omit?: Prisma.CreativeBriefVariantOmit<ExtArgs> | null;
    include?: Prisma.CreativeBriefVariantInclude<ExtArgs> | null;
};
