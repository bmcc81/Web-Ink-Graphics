import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BriefAttachmentModel = runtime.Types.Result.DefaultSelection<Prisma.$BriefAttachmentPayload>;
export type AggregateBriefAttachment = {
    _count: BriefAttachmentCountAggregateOutputType | null;
    _avg: BriefAttachmentAvgAggregateOutputType | null;
    _sum: BriefAttachmentSumAggregateOutputType | null;
    _min: BriefAttachmentMinAggregateOutputType | null;
    _max: BriefAttachmentMaxAggregateOutputType | null;
};
export type BriefAttachmentAvgAggregateOutputType = {
    fileSize: number | null;
};
export type BriefAttachmentSumAggregateOutputType = {
    fileSize: number | null;
};
export type BriefAttachmentMinAggregateOutputType = {
    id: string | null;
    fileName: string | null;
    objectKey: string | null;
    contentType: string | null;
    fileSize: number | null;
    category: $Enums.AttachmentCategory | null;
    createdAt: Date | null;
    briefId: string | null;
};
export type BriefAttachmentMaxAggregateOutputType = {
    id: string | null;
    fileName: string | null;
    objectKey: string | null;
    contentType: string | null;
    fileSize: number | null;
    category: $Enums.AttachmentCategory | null;
    createdAt: Date | null;
    briefId: string | null;
};
export type BriefAttachmentCountAggregateOutputType = {
    id: number;
    fileName: number;
    objectKey: number;
    contentType: number;
    fileSize: number;
    category: number;
    createdAt: number;
    briefId: number;
    _all: number;
};
export type BriefAttachmentAvgAggregateInputType = {
    fileSize?: true;
};
export type BriefAttachmentSumAggregateInputType = {
    fileSize?: true;
};
export type BriefAttachmentMinAggregateInputType = {
    id?: true;
    fileName?: true;
    objectKey?: true;
    contentType?: true;
    fileSize?: true;
    category?: true;
    createdAt?: true;
    briefId?: true;
};
export type BriefAttachmentMaxAggregateInputType = {
    id?: true;
    fileName?: true;
    objectKey?: true;
    contentType?: true;
    fileSize?: true;
    category?: true;
    createdAt?: true;
    briefId?: true;
};
export type BriefAttachmentCountAggregateInputType = {
    id?: true;
    fileName?: true;
    objectKey?: true;
    contentType?: true;
    fileSize?: true;
    category?: true;
    createdAt?: true;
    briefId?: true;
    _all?: true;
};
export type BriefAttachmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefAttachmentWhereInput;
    orderBy?: Prisma.BriefAttachmentOrderByWithRelationInput | Prisma.BriefAttachmentOrderByWithRelationInput[];
    cursor?: Prisma.BriefAttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BriefAttachmentCountAggregateInputType;
    _avg?: BriefAttachmentAvgAggregateInputType;
    _sum?: BriefAttachmentSumAggregateInputType;
    _min?: BriefAttachmentMinAggregateInputType;
    _max?: BriefAttachmentMaxAggregateInputType;
};
export type GetBriefAttachmentAggregateType<T extends BriefAttachmentAggregateArgs> = {
    [P in keyof T & keyof AggregateBriefAttachment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBriefAttachment[P]> : Prisma.GetScalarType<T[P], AggregateBriefAttachment[P]>;
};
export type BriefAttachmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefAttachmentWhereInput;
    orderBy?: Prisma.BriefAttachmentOrderByWithAggregationInput | Prisma.BriefAttachmentOrderByWithAggregationInput[];
    by: Prisma.BriefAttachmentScalarFieldEnum[] | Prisma.BriefAttachmentScalarFieldEnum;
    having?: Prisma.BriefAttachmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BriefAttachmentCountAggregateInputType | true;
    _avg?: BriefAttachmentAvgAggregateInputType;
    _sum?: BriefAttachmentSumAggregateInputType;
    _min?: BriefAttachmentMinAggregateInputType;
    _max?: BriefAttachmentMaxAggregateInputType;
};
export type BriefAttachmentGroupByOutputType = {
    id: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category: $Enums.AttachmentCategory;
    createdAt: Date;
    briefId: string;
    _count: BriefAttachmentCountAggregateOutputType | null;
    _avg: BriefAttachmentAvgAggregateOutputType | null;
    _sum: BriefAttachmentSumAggregateOutputType | null;
    _min: BriefAttachmentMinAggregateOutputType | null;
    _max: BriefAttachmentMaxAggregateOutputType | null;
};
export type GetBriefAttachmentGroupByPayload<T extends BriefAttachmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BriefAttachmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BriefAttachmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BriefAttachmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BriefAttachmentGroupByOutputType[P]>;
}>>;
export type BriefAttachmentWhereInput = {
    AND?: Prisma.BriefAttachmentWhereInput | Prisma.BriefAttachmentWhereInput[];
    OR?: Prisma.BriefAttachmentWhereInput[];
    NOT?: Prisma.BriefAttachmentWhereInput | Prisma.BriefAttachmentWhereInput[];
    id?: Prisma.StringFilter<"BriefAttachment"> | string;
    fileName?: Prisma.StringFilter<"BriefAttachment"> | string;
    objectKey?: Prisma.StringFilter<"BriefAttachment"> | string;
    contentType?: Prisma.StringFilter<"BriefAttachment"> | string;
    fileSize?: Prisma.IntFilter<"BriefAttachment"> | number;
    category?: Prisma.EnumAttachmentCategoryFilter<"BriefAttachment"> | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFilter<"BriefAttachment"> | Date | string;
    briefId?: Prisma.StringFilter<"BriefAttachment"> | string;
    brief?: Prisma.XOR<Prisma.DiscoveryBriefScalarRelationFilter, Prisma.DiscoveryBriefWhereInput>;
};
export type BriefAttachmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    brief?: Prisma.DiscoveryBriefOrderByWithRelationInput;
};
export type BriefAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    objectKey?: string;
    AND?: Prisma.BriefAttachmentWhereInput | Prisma.BriefAttachmentWhereInput[];
    OR?: Prisma.BriefAttachmentWhereInput[];
    NOT?: Prisma.BriefAttachmentWhereInput | Prisma.BriefAttachmentWhereInput[];
    fileName?: Prisma.StringFilter<"BriefAttachment"> | string;
    contentType?: Prisma.StringFilter<"BriefAttachment"> | string;
    fileSize?: Prisma.IntFilter<"BriefAttachment"> | number;
    category?: Prisma.EnumAttachmentCategoryFilter<"BriefAttachment"> | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFilter<"BriefAttachment"> | Date | string;
    briefId?: Prisma.StringFilter<"BriefAttachment"> | string;
    brief?: Prisma.XOR<Prisma.DiscoveryBriefScalarRelationFilter, Prisma.DiscoveryBriefWhereInput>;
}, "id" | "objectKey">;
export type BriefAttachmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    _count?: Prisma.BriefAttachmentCountOrderByAggregateInput;
    _avg?: Prisma.BriefAttachmentAvgOrderByAggregateInput;
    _max?: Prisma.BriefAttachmentMaxOrderByAggregateInput;
    _min?: Prisma.BriefAttachmentMinOrderByAggregateInput;
    _sum?: Prisma.BriefAttachmentSumOrderByAggregateInput;
};
export type BriefAttachmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.BriefAttachmentScalarWhereWithAggregatesInput | Prisma.BriefAttachmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.BriefAttachmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BriefAttachmentScalarWhereWithAggregatesInput | Prisma.BriefAttachmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BriefAttachment"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"BriefAttachment"> | string;
    objectKey?: Prisma.StringWithAggregatesFilter<"BriefAttachment"> | string;
    contentType?: Prisma.StringWithAggregatesFilter<"BriefAttachment"> | string;
    fileSize?: Prisma.IntWithAggregatesFilter<"BriefAttachment"> | number;
    category?: Prisma.EnumAttachmentCategoryWithAggregatesFilter<"BriefAttachment"> | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BriefAttachment"> | Date | string;
    briefId?: Prisma.StringWithAggregatesFilter<"BriefAttachment"> | string;
};
export type BriefAttachmentCreateInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category?: $Enums.AttachmentCategory;
    createdAt?: Date | string;
    brief: Prisma.DiscoveryBriefCreateNestedOneWithoutAttachmentsInput;
};
export type BriefAttachmentUncheckedCreateInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category?: $Enums.AttachmentCategory;
    createdAt?: Date | string;
    briefId: string;
};
export type BriefAttachmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brief?: Prisma.DiscoveryBriefUpdateOneRequiredWithoutAttachmentsNestedInput;
};
export type BriefAttachmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    briefId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BriefAttachmentCreateManyInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category?: $Enums.AttachmentCategory;
    createdAt?: Date | string;
    briefId: string;
};
export type BriefAttachmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefAttachmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    briefId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BriefAttachmentListRelationFilter = {
    every?: Prisma.BriefAttachmentWhereInput;
    some?: Prisma.BriefAttachmentWhereInput;
    none?: Prisma.BriefAttachmentWhereInput;
};
export type BriefAttachmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BriefAttachmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
};
export type BriefAttachmentAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type BriefAttachmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
};
export type BriefAttachmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    objectKey?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
};
export type BriefAttachmentSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type BriefAttachmentCreateNestedManyWithoutBriefInput = {
    create?: Prisma.XOR<Prisma.BriefAttachmentCreateWithoutBriefInput, Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput> | Prisma.BriefAttachmentCreateWithoutBriefInput[] | Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput | Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput[];
    createMany?: Prisma.BriefAttachmentCreateManyBriefInputEnvelope;
    connect?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
};
export type BriefAttachmentUncheckedCreateNestedManyWithoutBriefInput = {
    create?: Prisma.XOR<Prisma.BriefAttachmentCreateWithoutBriefInput, Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput> | Prisma.BriefAttachmentCreateWithoutBriefInput[] | Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput | Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput[];
    createMany?: Prisma.BriefAttachmentCreateManyBriefInputEnvelope;
    connect?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
};
export type BriefAttachmentUpdateManyWithoutBriefNestedInput = {
    create?: Prisma.XOR<Prisma.BriefAttachmentCreateWithoutBriefInput, Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput> | Prisma.BriefAttachmentCreateWithoutBriefInput[] | Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput | Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput[];
    upsert?: Prisma.BriefAttachmentUpsertWithWhereUniqueWithoutBriefInput | Prisma.BriefAttachmentUpsertWithWhereUniqueWithoutBriefInput[];
    createMany?: Prisma.BriefAttachmentCreateManyBriefInputEnvelope;
    set?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    disconnect?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    delete?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    connect?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    update?: Prisma.BriefAttachmentUpdateWithWhereUniqueWithoutBriefInput | Prisma.BriefAttachmentUpdateWithWhereUniqueWithoutBriefInput[];
    updateMany?: Prisma.BriefAttachmentUpdateManyWithWhereWithoutBriefInput | Prisma.BriefAttachmentUpdateManyWithWhereWithoutBriefInput[];
    deleteMany?: Prisma.BriefAttachmentScalarWhereInput | Prisma.BriefAttachmentScalarWhereInput[];
};
export type BriefAttachmentUncheckedUpdateManyWithoutBriefNestedInput = {
    create?: Prisma.XOR<Prisma.BriefAttachmentCreateWithoutBriefInput, Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput> | Prisma.BriefAttachmentCreateWithoutBriefInput[] | Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput | Prisma.BriefAttachmentCreateOrConnectWithoutBriefInput[];
    upsert?: Prisma.BriefAttachmentUpsertWithWhereUniqueWithoutBriefInput | Prisma.BriefAttachmentUpsertWithWhereUniqueWithoutBriefInput[];
    createMany?: Prisma.BriefAttachmentCreateManyBriefInputEnvelope;
    set?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    disconnect?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    delete?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    connect?: Prisma.BriefAttachmentWhereUniqueInput | Prisma.BriefAttachmentWhereUniqueInput[];
    update?: Prisma.BriefAttachmentUpdateWithWhereUniqueWithoutBriefInput | Prisma.BriefAttachmentUpdateWithWhereUniqueWithoutBriefInput[];
    updateMany?: Prisma.BriefAttachmentUpdateManyWithWhereWithoutBriefInput | Prisma.BriefAttachmentUpdateManyWithWhereWithoutBriefInput[];
    deleteMany?: Prisma.BriefAttachmentScalarWhereInput | Prisma.BriefAttachmentScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumAttachmentCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AttachmentCategory;
};
export type BriefAttachmentCreateWithoutBriefInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category?: $Enums.AttachmentCategory;
    createdAt?: Date | string;
};
export type BriefAttachmentUncheckedCreateWithoutBriefInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category?: $Enums.AttachmentCategory;
    createdAt?: Date | string;
};
export type BriefAttachmentCreateOrConnectWithoutBriefInput = {
    where: Prisma.BriefAttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.BriefAttachmentCreateWithoutBriefInput, Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput>;
};
export type BriefAttachmentCreateManyBriefInputEnvelope = {
    data: Prisma.BriefAttachmentCreateManyBriefInput | Prisma.BriefAttachmentCreateManyBriefInput[];
    skipDuplicates?: boolean;
};
export type BriefAttachmentUpsertWithWhereUniqueWithoutBriefInput = {
    where: Prisma.BriefAttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.BriefAttachmentUpdateWithoutBriefInput, Prisma.BriefAttachmentUncheckedUpdateWithoutBriefInput>;
    create: Prisma.XOR<Prisma.BriefAttachmentCreateWithoutBriefInput, Prisma.BriefAttachmentUncheckedCreateWithoutBriefInput>;
};
export type BriefAttachmentUpdateWithWhereUniqueWithoutBriefInput = {
    where: Prisma.BriefAttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.BriefAttachmentUpdateWithoutBriefInput, Prisma.BriefAttachmentUncheckedUpdateWithoutBriefInput>;
};
export type BriefAttachmentUpdateManyWithWhereWithoutBriefInput = {
    where: Prisma.BriefAttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.BriefAttachmentUpdateManyMutationInput, Prisma.BriefAttachmentUncheckedUpdateManyWithoutBriefInput>;
};
export type BriefAttachmentScalarWhereInput = {
    AND?: Prisma.BriefAttachmentScalarWhereInput | Prisma.BriefAttachmentScalarWhereInput[];
    OR?: Prisma.BriefAttachmentScalarWhereInput[];
    NOT?: Prisma.BriefAttachmentScalarWhereInput | Prisma.BriefAttachmentScalarWhereInput[];
    id?: Prisma.StringFilter<"BriefAttachment"> | string;
    fileName?: Prisma.StringFilter<"BriefAttachment"> | string;
    objectKey?: Prisma.StringFilter<"BriefAttachment"> | string;
    contentType?: Prisma.StringFilter<"BriefAttachment"> | string;
    fileSize?: Prisma.IntFilter<"BriefAttachment"> | number;
    category?: Prisma.EnumAttachmentCategoryFilter<"BriefAttachment"> | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFilter<"BriefAttachment"> | Date | string;
    briefId?: Prisma.StringFilter<"BriefAttachment"> | string;
};
export type BriefAttachmentCreateManyBriefInput = {
    id?: string;
    fileName: string;
    objectKey: string;
    contentType: string;
    fileSize: number;
    category?: $Enums.AttachmentCategory;
    createdAt?: Date | string;
};
export type BriefAttachmentUpdateWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefAttachmentUncheckedUpdateWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefAttachmentUncheckedUpdateManyWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    objectKey?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileSize?: Prisma.IntFieldUpdateOperationsInput | number;
    category?: Prisma.EnumAttachmentCategoryFieldUpdateOperationsInput | $Enums.AttachmentCategory;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BriefAttachmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    category?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["briefAttachment"]>;
export type BriefAttachmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    category?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["briefAttachment"]>;
export type BriefAttachmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    category?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["briefAttachment"]>;
export type BriefAttachmentSelectScalar = {
    id?: boolean;
    fileName?: boolean;
    objectKey?: boolean;
    contentType?: boolean;
    fileSize?: boolean;
    category?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
};
export type BriefAttachmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fileName" | "objectKey" | "contentType" | "fileSize" | "category" | "createdAt" | "briefId", ExtArgs["result"]["briefAttachment"]>;
export type BriefAttachmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type BriefAttachmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type BriefAttachmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type $BriefAttachmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BriefAttachment";
    objects: {
        brief: Prisma.$DiscoveryBriefPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fileName: string;
        objectKey: string;
        contentType: string;
        fileSize: number;
        category: $Enums.AttachmentCategory;
        createdAt: Date;
        briefId: string;
    }, ExtArgs["result"]["briefAttachment"]>;
    composites: {};
};
export type BriefAttachmentGetPayload<S extends boolean | null | undefined | BriefAttachmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload, S>;
export type BriefAttachmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BriefAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BriefAttachmentCountAggregateInputType | true;
};
export interface BriefAttachmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BriefAttachment'];
        meta: {
            name: 'BriefAttachment';
        };
    };
    findUnique<T extends BriefAttachmentFindUniqueArgs>(args: Prisma.SelectSubset<T, BriefAttachmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BriefAttachmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BriefAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BriefAttachmentFindFirstArgs>(args?: Prisma.SelectSubset<T, BriefAttachmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BriefAttachmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BriefAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BriefAttachmentFindManyArgs>(args?: Prisma.SelectSubset<T, BriefAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BriefAttachmentCreateArgs>(args: Prisma.SelectSubset<T, BriefAttachmentCreateArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BriefAttachmentCreateManyArgs>(args?: Prisma.SelectSubset<T, BriefAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BriefAttachmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BriefAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BriefAttachmentDeleteArgs>(args: Prisma.SelectSubset<T, BriefAttachmentDeleteArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BriefAttachmentUpdateArgs>(args: Prisma.SelectSubset<T, BriefAttachmentUpdateArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BriefAttachmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, BriefAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BriefAttachmentUpdateManyArgs>(args: Prisma.SelectSubset<T, BriefAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BriefAttachmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BriefAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BriefAttachmentUpsertArgs>(args: Prisma.SelectSubset<T, BriefAttachmentUpsertArgs<ExtArgs>>): Prisma.Prisma__BriefAttachmentClient<runtime.Types.Result.GetResult<Prisma.$BriefAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BriefAttachmentCountArgs>(args?: Prisma.Subset<T, BriefAttachmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BriefAttachmentCountAggregateOutputType> : number>;
    aggregate<T extends BriefAttachmentAggregateArgs>(args: Prisma.Subset<T, BriefAttachmentAggregateArgs>): Prisma.PrismaPromise<GetBriefAttachmentAggregateType<T>>;
    groupBy<T extends BriefAttachmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BriefAttachmentGroupByArgs['orderBy'];
    } : {
        orderBy?: BriefAttachmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BriefAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBriefAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BriefAttachmentFieldRefs;
}
export interface Prisma__BriefAttachmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brief<T extends Prisma.DiscoveryBriefDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DiscoveryBriefDefaultArgs<ExtArgs>>): Prisma.Prisma__DiscoveryBriefClient<runtime.Types.Result.GetResult<Prisma.$DiscoveryBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BriefAttachmentFieldRefs {
    readonly id: Prisma.FieldRef<"BriefAttachment", 'String'>;
    readonly fileName: Prisma.FieldRef<"BriefAttachment", 'String'>;
    readonly objectKey: Prisma.FieldRef<"BriefAttachment", 'String'>;
    readonly contentType: Prisma.FieldRef<"BriefAttachment", 'String'>;
    readonly fileSize: Prisma.FieldRef<"BriefAttachment", 'Int'>;
    readonly category: Prisma.FieldRef<"BriefAttachment", 'AttachmentCategory'>;
    readonly createdAt: Prisma.FieldRef<"BriefAttachment", 'DateTime'>;
    readonly briefId: Prisma.FieldRef<"BriefAttachment", 'String'>;
}
export type BriefAttachmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where: Prisma.BriefAttachmentWhereUniqueInput;
};
export type BriefAttachmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where: Prisma.BriefAttachmentWhereUniqueInput;
};
export type BriefAttachmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where?: Prisma.BriefAttachmentWhereInput;
    orderBy?: Prisma.BriefAttachmentOrderByWithRelationInput | Prisma.BriefAttachmentOrderByWithRelationInput[];
    cursor?: Prisma.BriefAttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefAttachmentScalarFieldEnum | Prisma.BriefAttachmentScalarFieldEnum[];
};
export type BriefAttachmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where?: Prisma.BriefAttachmentWhereInput;
    orderBy?: Prisma.BriefAttachmentOrderByWithRelationInput | Prisma.BriefAttachmentOrderByWithRelationInput[];
    cursor?: Prisma.BriefAttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefAttachmentScalarFieldEnum | Prisma.BriefAttachmentScalarFieldEnum[];
};
export type BriefAttachmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where?: Prisma.BriefAttachmentWhereInput;
    orderBy?: Prisma.BriefAttachmentOrderByWithRelationInput | Prisma.BriefAttachmentOrderByWithRelationInput[];
    cursor?: Prisma.BriefAttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefAttachmentScalarFieldEnum | Prisma.BriefAttachmentScalarFieldEnum[];
};
export type BriefAttachmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefAttachmentCreateInput, Prisma.BriefAttachmentUncheckedCreateInput>;
};
export type BriefAttachmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BriefAttachmentCreateManyInput | Prisma.BriefAttachmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BriefAttachmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    data: Prisma.BriefAttachmentCreateManyInput | Prisma.BriefAttachmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BriefAttachmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BriefAttachmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefAttachmentUpdateInput, Prisma.BriefAttachmentUncheckedUpdateInput>;
    where: Prisma.BriefAttachmentWhereUniqueInput;
};
export type BriefAttachmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BriefAttachmentUpdateManyMutationInput, Prisma.BriefAttachmentUncheckedUpdateManyInput>;
    where?: Prisma.BriefAttachmentWhereInput;
    limit?: number;
};
export type BriefAttachmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefAttachmentUpdateManyMutationInput, Prisma.BriefAttachmentUncheckedUpdateManyInput>;
    where?: Prisma.BriefAttachmentWhereInput;
    limit?: number;
    include?: Prisma.BriefAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BriefAttachmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where: Prisma.BriefAttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.BriefAttachmentCreateInput, Prisma.BriefAttachmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BriefAttachmentUpdateInput, Prisma.BriefAttachmentUncheckedUpdateInput>;
};
export type BriefAttachmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
    where: Prisma.BriefAttachmentWhereUniqueInput;
};
export type BriefAttachmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefAttachmentWhereInput;
    limit?: number;
};
export type BriefAttachmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefAttachmentSelect<ExtArgs> | null;
    omit?: Prisma.BriefAttachmentOmit<ExtArgs> | null;
    include?: Prisma.BriefAttachmentInclude<ExtArgs> | null;
};
