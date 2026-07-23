import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetFieldValueModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetFieldValuePayload>;
export type AggregateAssetFieldValue = {
    _count: AssetFieldValueCountAggregateOutputType | null;
    _min: AssetFieldValueMinAggregateOutputType | null;
    _max: AssetFieldValueMaxAggregateOutputType | null;
};
export type AssetFieldValueMinAggregateOutputType = {
    id: string | null;
    revisionId: string | null;
    templateFieldId: string | null;
    value: string | null;
};
export type AssetFieldValueMaxAggregateOutputType = {
    id: string | null;
    revisionId: string | null;
    templateFieldId: string | null;
    value: string | null;
};
export type AssetFieldValueCountAggregateOutputType = {
    id: number;
    revisionId: number;
    templateFieldId: number;
    value: number;
    _all: number;
};
export type AssetFieldValueMinAggregateInputType = {
    id?: true;
    revisionId?: true;
    templateFieldId?: true;
    value?: true;
};
export type AssetFieldValueMaxAggregateInputType = {
    id?: true;
    revisionId?: true;
    templateFieldId?: true;
    value?: true;
};
export type AssetFieldValueCountAggregateInputType = {
    id?: true;
    revisionId?: true;
    templateFieldId?: true;
    value?: true;
    _all?: true;
};
export type AssetFieldValueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetFieldValueWhereInput;
    orderBy?: Prisma.AssetFieldValueOrderByWithRelationInput | Prisma.AssetFieldValueOrderByWithRelationInput[];
    cursor?: Prisma.AssetFieldValueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetFieldValueCountAggregateInputType;
    _min?: AssetFieldValueMinAggregateInputType;
    _max?: AssetFieldValueMaxAggregateInputType;
};
export type GetAssetFieldValueAggregateType<T extends AssetFieldValueAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetFieldValue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetFieldValue[P]> : Prisma.GetScalarType<T[P], AggregateAssetFieldValue[P]>;
};
export type AssetFieldValueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetFieldValueWhereInput;
    orderBy?: Prisma.AssetFieldValueOrderByWithAggregationInput | Prisma.AssetFieldValueOrderByWithAggregationInput[];
    by: Prisma.AssetFieldValueScalarFieldEnum[] | Prisma.AssetFieldValueScalarFieldEnum;
    having?: Prisma.AssetFieldValueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetFieldValueCountAggregateInputType | true;
    _min?: AssetFieldValueMinAggregateInputType;
    _max?: AssetFieldValueMaxAggregateInputType;
};
export type AssetFieldValueGroupByOutputType = {
    id: string;
    revisionId: string;
    templateFieldId: string;
    value: string;
    _count: AssetFieldValueCountAggregateOutputType | null;
    _min: AssetFieldValueMinAggregateOutputType | null;
    _max: AssetFieldValueMaxAggregateOutputType | null;
};
export type GetAssetFieldValueGroupByPayload<T extends AssetFieldValueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetFieldValueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetFieldValueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetFieldValueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetFieldValueGroupByOutputType[P]>;
}>>;
export type AssetFieldValueWhereInput = {
    AND?: Prisma.AssetFieldValueWhereInput | Prisma.AssetFieldValueWhereInput[];
    OR?: Prisma.AssetFieldValueWhereInput[];
    NOT?: Prisma.AssetFieldValueWhereInput | Prisma.AssetFieldValueWhereInput[];
    id?: Prisma.StringFilter<"AssetFieldValue"> | string;
    revisionId?: Prisma.StringFilter<"AssetFieldValue"> | string;
    templateFieldId?: Prisma.StringFilter<"AssetFieldValue"> | string;
    value?: Prisma.StringFilter<"AssetFieldValue"> | string;
    revision?: Prisma.XOR<Prisma.AssetRevisionScalarRelationFilter, Prisma.AssetRevisionWhereInput>;
    templateField?: Prisma.XOR<Prisma.TemplateFieldScalarRelationFilter, Prisma.TemplateFieldWhereInput>;
};
export type AssetFieldValueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    revisionId?: Prisma.SortOrder;
    templateFieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    revision?: Prisma.AssetRevisionOrderByWithRelationInput;
    templateField?: Prisma.TemplateFieldOrderByWithRelationInput;
};
export type AssetFieldValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    revisionId_templateFieldId?: Prisma.AssetFieldValueRevisionIdTemplateFieldIdCompoundUniqueInput;
    AND?: Prisma.AssetFieldValueWhereInput | Prisma.AssetFieldValueWhereInput[];
    OR?: Prisma.AssetFieldValueWhereInput[];
    NOT?: Prisma.AssetFieldValueWhereInput | Prisma.AssetFieldValueWhereInput[];
    revisionId?: Prisma.StringFilter<"AssetFieldValue"> | string;
    templateFieldId?: Prisma.StringFilter<"AssetFieldValue"> | string;
    value?: Prisma.StringFilter<"AssetFieldValue"> | string;
    revision?: Prisma.XOR<Prisma.AssetRevisionScalarRelationFilter, Prisma.AssetRevisionWhereInput>;
    templateField?: Prisma.XOR<Prisma.TemplateFieldScalarRelationFilter, Prisma.TemplateFieldWhereInput>;
}, "id" | "revisionId_templateFieldId">;
export type AssetFieldValueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    revisionId?: Prisma.SortOrder;
    templateFieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    _count?: Prisma.AssetFieldValueCountOrderByAggregateInput;
    _max?: Prisma.AssetFieldValueMaxOrderByAggregateInput;
    _min?: Prisma.AssetFieldValueMinOrderByAggregateInput;
};
export type AssetFieldValueScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetFieldValueScalarWhereWithAggregatesInput | Prisma.AssetFieldValueScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetFieldValueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetFieldValueScalarWhereWithAggregatesInput | Prisma.AssetFieldValueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AssetFieldValue"> | string;
    revisionId?: Prisma.StringWithAggregatesFilter<"AssetFieldValue"> | string;
    templateFieldId?: Prisma.StringWithAggregatesFilter<"AssetFieldValue"> | string;
    value?: Prisma.StringWithAggregatesFilter<"AssetFieldValue"> | string;
};
export type AssetFieldValueCreateInput = {
    id?: string;
    value: string;
    revision: Prisma.AssetRevisionCreateNestedOneWithoutValuesInput;
    templateField: Prisma.TemplateFieldCreateNestedOneWithoutValuesInput;
};
export type AssetFieldValueUncheckedCreateInput = {
    id?: string;
    revisionId: string;
    templateFieldId: string;
    value: string;
};
export type AssetFieldValueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    revision?: Prisma.AssetRevisionUpdateOneRequiredWithoutValuesNestedInput;
    templateField?: Prisma.TemplateFieldUpdateOneRequiredWithoutValuesNestedInput;
};
export type AssetFieldValueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateFieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueCreateManyInput = {
    id?: string;
    revisionId: string;
    templateFieldId: string;
    value: string;
};
export type AssetFieldValueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateFieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueListRelationFilter = {
    every?: Prisma.AssetFieldValueWhereInput;
    some?: Prisma.AssetFieldValueWhereInput;
    none?: Prisma.AssetFieldValueWhereInput;
};
export type AssetFieldValueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetFieldValueRevisionIdTemplateFieldIdCompoundUniqueInput = {
    revisionId: string;
    templateFieldId: string;
};
export type AssetFieldValueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    revisionId?: Prisma.SortOrder;
    templateFieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type AssetFieldValueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    revisionId?: Prisma.SortOrder;
    templateFieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type AssetFieldValueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    revisionId?: Prisma.SortOrder;
    templateFieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type AssetFieldValueCreateNestedManyWithoutTemplateFieldInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput> | Prisma.AssetFieldValueCreateWithoutTemplateFieldInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput | Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput[];
    createMany?: Prisma.AssetFieldValueCreateManyTemplateFieldInputEnvelope;
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
};
export type AssetFieldValueUncheckedCreateNestedManyWithoutTemplateFieldInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput> | Prisma.AssetFieldValueCreateWithoutTemplateFieldInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput | Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput[];
    createMany?: Prisma.AssetFieldValueCreateManyTemplateFieldInputEnvelope;
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
};
export type AssetFieldValueUpdateManyWithoutTemplateFieldNestedInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput> | Prisma.AssetFieldValueCreateWithoutTemplateFieldInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput | Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput[];
    upsert?: Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutTemplateFieldInput | Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutTemplateFieldInput[];
    createMany?: Prisma.AssetFieldValueCreateManyTemplateFieldInputEnvelope;
    set?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    disconnect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    delete?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    update?: Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutTemplateFieldInput | Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutTemplateFieldInput[];
    updateMany?: Prisma.AssetFieldValueUpdateManyWithWhereWithoutTemplateFieldInput | Prisma.AssetFieldValueUpdateManyWithWhereWithoutTemplateFieldInput[];
    deleteMany?: Prisma.AssetFieldValueScalarWhereInput | Prisma.AssetFieldValueScalarWhereInput[];
};
export type AssetFieldValueUncheckedUpdateManyWithoutTemplateFieldNestedInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput> | Prisma.AssetFieldValueCreateWithoutTemplateFieldInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput | Prisma.AssetFieldValueCreateOrConnectWithoutTemplateFieldInput[];
    upsert?: Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutTemplateFieldInput | Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutTemplateFieldInput[];
    createMany?: Prisma.AssetFieldValueCreateManyTemplateFieldInputEnvelope;
    set?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    disconnect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    delete?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    update?: Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutTemplateFieldInput | Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutTemplateFieldInput[];
    updateMany?: Prisma.AssetFieldValueUpdateManyWithWhereWithoutTemplateFieldInput | Prisma.AssetFieldValueUpdateManyWithWhereWithoutTemplateFieldInput[];
    deleteMany?: Prisma.AssetFieldValueScalarWhereInput | Prisma.AssetFieldValueScalarWhereInput[];
};
export type AssetFieldValueCreateNestedManyWithoutRevisionInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput> | Prisma.AssetFieldValueCreateWithoutRevisionInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput | Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput[];
    createMany?: Prisma.AssetFieldValueCreateManyRevisionInputEnvelope;
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
};
export type AssetFieldValueUncheckedCreateNestedManyWithoutRevisionInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput> | Prisma.AssetFieldValueCreateWithoutRevisionInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput | Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput[];
    createMany?: Prisma.AssetFieldValueCreateManyRevisionInputEnvelope;
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
};
export type AssetFieldValueUpdateManyWithoutRevisionNestedInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput> | Prisma.AssetFieldValueCreateWithoutRevisionInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput | Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput[];
    upsert?: Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutRevisionInput | Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutRevisionInput[];
    createMany?: Prisma.AssetFieldValueCreateManyRevisionInputEnvelope;
    set?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    disconnect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    delete?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    update?: Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutRevisionInput | Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutRevisionInput[];
    updateMany?: Prisma.AssetFieldValueUpdateManyWithWhereWithoutRevisionInput | Prisma.AssetFieldValueUpdateManyWithWhereWithoutRevisionInput[];
    deleteMany?: Prisma.AssetFieldValueScalarWhereInput | Prisma.AssetFieldValueScalarWhereInput[];
};
export type AssetFieldValueUncheckedUpdateManyWithoutRevisionNestedInput = {
    create?: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput> | Prisma.AssetFieldValueCreateWithoutRevisionInput[] | Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput[];
    connectOrCreate?: Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput | Prisma.AssetFieldValueCreateOrConnectWithoutRevisionInput[];
    upsert?: Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutRevisionInput | Prisma.AssetFieldValueUpsertWithWhereUniqueWithoutRevisionInput[];
    createMany?: Prisma.AssetFieldValueCreateManyRevisionInputEnvelope;
    set?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    disconnect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    delete?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    connect?: Prisma.AssetFieldValueWhereUniqueInput | Prisma.AssetFieldValueWhereUniqueInput[];
    update?: Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutRevisionInput | Prisma.AssetFieldValueUpdateWithWhereUniqueWithoutRevisionInput[];
    updateMany?: Prisma.AssetFieldValueUpdateManyWithWhereWithoutRevisionInput | Prisma.AssetFieldValueUpdateManyWithWhereWithoutRevisionInput[];
    deleteMany?: Prisma.AssetFieldValueScalarWhereInput | Prisma.AssetFieldValueScalarWhereInput[];
};
export type AssetFieldValueCreateWithoutTemplateFieldInput = {
    id?: string;
    value: string;
    revision: Prisma.AssetRevisionCreateNestedOneWithoutValuesInput;
};
export type AssetFieldValueUncheckedCreateWithoutTemplateFieldInput = {
    id?: string;
    revisionId: string;
    value: string;
};
export type AssetFieldValueCreateOrConnectWithoutTemplateFieldInput = {
    where: Prisma.AssetFieldValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput>;
};
export type AssetFieldValueCreateManyTemplateFieldInputEnvelope = {
    data: Prisma.AssetFieldValueCreateManyTemplateFieldInput | Prisma.AssetFieldValueCreateManyTemplateFieldInput[];
    skipDuplicates?: boolean;
};
export type AssetFieldValueUpsertWithWhereUniqueWithoutTemplateFieldInput = {
    where: Prisma.AssetFieldValueWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetFieldValueUpdateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedUpdateWithoutTemplateFieldInput>;
    create: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedCreateWithoutTemplateFieldInput>;
};
export type AssetFieldValueUpdateWithWhereUniqueWithoutTemplateFieldInput = {
    where: Prisma.AssetFieldValueWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateWithoutTemplateFieldInput, Prisma.AssetFieldValueUncheckedUpdateWithoutTemplateFieldInput>;
};
export type AssetFieldValueUpdateManyWithWhereWithoutTemplateFieldInput = {
    where: Prisma.AssetFieldValueScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateManyMutationInput, Prisma.AssetFieldValueUncheckedUpdateManyWithoutTemplateFieldInput>;
};
export type AssetFieldValueScalarWhereInput = {
    AND?: Prisma.AssetFieldValueScalarWhereInput | Prisma.AssetFieldValueScalarWhereInput[];
    OR?: Prisma.AssetFieldValueScalarWhereInput[];
    NOT?: Prisma.AssetFieldValueScalarWhereInput | Prisma.AssetFieldValueScalarWhereInput[];
    id?: Prisma.StringFilter<"AssetFieldValue"> | string;
    revisionId?: Prisma.StringFilter<"AssetFieldValue"> | string;
    templateFieldId?: Prisma.StringFilter<"AssetFieldValue"> | string;
    value?: Prisma.StringFilter<"AssetFieldValue"> | string;
};
export type AssetFieldValueCreateWithoutRevisionInput = {
    id?: string;
    value: string;
    templateField: Prisma.TemplateFieldCreateNestedOneWithoutValuesInput;
};
export type AssetFieldValueUncheckedCreateWithoutRevisionInput = {
    id?: string;
    templateFieldId: string;
    value: string;
};
export type AssetFieldValueCreateOrConnectWithoutRevisionInput = {
    where: Prisma.AssetFieldValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput>;
};
export type AssetFieldValueCreateManyRevisionInputEnvelope = {
    data: Prisma.AssetFieldValueCreateManyRevisionInput | Prisma.AssetFieldValueCreateManyRevisionInput[];
    skipDuplicates?: boolean;
};
export type AssetFieldValueUpsertWithWhereUniqueWithoutRevisionInput = {
    where: Prisma.AssetFieldValueWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetFieldValueUpdateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedUpdateWithoutRevisionInput>;
    create: Prisma.XOR<Prisma.AssetFieldValueCreateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedCreateWithoutRevisionInput>;
};
export type AssetFieldValueUpdateWithWhereUniqueWithoutRevisionInput = {
    where: Prisma.AssetFieldValueWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateWithoutRevisionInput, Prisma.AssetFieldValueUncheckedUpdateWithoutRevisionInput>;
};
export type AssetFieldValueUpdateManyWithWhereWithoutRevisionInput = {
    where: Prisma.AssetFieldValueScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateManyMutationInput, Prisma.AssetFieldValueUncheckedUpdateManyWithoutRevisionInput>;
};
export type AssetFieldValueCreateManyTemplateFieldInput = {
    id?: string;
    revisionId: string;
    value: string;
};
export type AssetFieldValueUpdateWithoutTemplateFieldInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    revision?: Prisma.AssetRevisionUpdateOneRequiredWithoutValuesNestedInput;
};
export type AssetFieldValueUncheckedUpdateWithoutTemplateFieldInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueUncheckedUpdateManyWithoutTemplateFieldInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueCreateManyRevisionInput = {
    id?: string;
    templateFieldId: string;
    value: string;
};
export type AssetFieldValueUpdateWithoutRevisionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    templateField?: Prisma.TemplateFieldUpdateOneRequiredWithoutValuesNestedInput;
};
export type AssetFieldValueUncheckedUpdateWithoutRevisionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateFieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueUncheckedUpdateManyWithoutRevisionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateFieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AssetFieldValueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    revisionId?: boolean;
    templateFieldId?: boolean;
    value?: boolean;
    revision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    templateField?: boolean | Prisma.TemplateFieldDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetFieldValue"]>;
export type AssetFieldValueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    revisionId?: boolean;
    templateFieldId?: boolean;
    value?: boolean;
    revision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    templateField?: boolean | Prisma.TemplateFieldDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetFieldValue"]>;
export type AssetFieldValueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    revisionId?: boolean;
    templateFieldId?: boolean;
    value?: boolean;
    revision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    templateField?: boolean | Prisma.TemplateFieldDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetFieldValue"]>;
export type AssetFieldValueSelectScalar = {
    id?: boolean;
    revisionId?: boolean;
    templateFieldId?: boolean;
    value?: boolean;
};
export type AssetFieldValueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "revisionId" | "templateFieldId" | "value", ExtArgs["result"]["assetFieldValue"]>;
export type AssetFieldValueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    templateField?: boolean | Prisma.TemplateFieldDefaultArgs<ExtArgs>;
};
export type AssetFieldValueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    templateField?: boolean | Prisma.TemplateFieldDefaultArgs<ExtArgs>;
};
export type AssetFieldValueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    revision?: boolean | Prisma.AssetRevisionDefaultArgs<ExtArgs>;
    templateField?: boolean | Prisma.TemplateFieldDefaultArgs<ExtArgs>;
};
export type $AssetFieldValuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetFieldValue";
    objects: {
        revision: Prisma.$AssetRevisionPayload<ExtArgs>;
        templateField: Prisma.$TemplateFieldPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        revisionId: string;
        templateFieldId: string;
        value: string;
    }, ExtArgs["result"]["assetFieldValue"]>;
    composites: {};
};
export type AssetFieldValueGetPayload<S extends boolean | null | undefined | AssetFieldValueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload, S>;
export type AssetFieldValueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetFieldValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetFieldValueCountAggregateInputType | true;
};
export interface AssetFieldValueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetFieldValue'];
        meta: {
            name: 'AssetFieldValue';
        };
    };
    findUnique<T extends AssetFieldValueFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFieldValueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetFieldValueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFieldValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetFieldValueFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFieldValueFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetFieldValueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFieldValueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetFieldValueFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFieldValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetFieldValueCreateArgs>(args: Prisma.SelectSubset<T, AssetFieldValueCreateArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetFieldValueCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetFieldValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetFieldValueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetFieldValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetFieldValueDeleteArgs>(args: Prisma.SelectSubset<T, AssetFieldValueDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetFieldValueUpdateArgs>(args: Prisma.SelectSubset<T, AssetFieldValueUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetFieldValueDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetFieldValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetFieldValueUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetFieldValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetFieldValueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetFieldValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetFieldValueUpsertArgs>(args: Prisma.SelectSubset<T, AssetFieldValueUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetFieldValueClient<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetFieldValueCountArgs>(args?: Prisma.Subset<T, AssetFieldValueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetFieldValueCountAggregateOutputType> : number>;
    aggregate<T extends AssetFieldValueAggregateArgs>(args: Prisma.Subset<T, AssetFieldValueAggregateArgs>): Prisma.PrismaPromise<GetAssetFieldValueAggregateType<T>>;
    groupBy<T extends AssetFieldValueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetFieldValueGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetFieldValueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetFieldValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetFieldValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetFieldValueFieldRefs;
}
export interface Prisma__AssetFieldValueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    revision<T extends Prisma.AssetRevisionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRevisionDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetRevisionClient<runtime.Types.Result.GetResult<Prisma.$AssetRevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    templateField<T extends Prisma.TemplateFieldDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TemplateFieldDefaultArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetFieldValueFieldRefs {
    readonly id: Prisma.FieldRef<"AssetFieldValue", 'String'>;
    readonly revisionId: Prisma.FieldRef<"AssetFieldValue", 'String'>;
    readonly templateFieldId: Prisma.FieldRef<"AssetFieldValue", 'String'>;
    readonly value: Prisma.FieldRef<"AssetFieldValue", 'String'>;
}
export type AssetFieldValueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where: Prisma.AssetFieldValueWhereUniqueInput;
};
export type AssetFieldValueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where: Prisma.AssetFieldValueWhereUniqueInput;
};
export type AssetFieldValueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where?: Prisma.AssetFieldValueWhereInput;
    orderBy?: Prisma.AssetFieldValueOrderByWithRelationInput | Prisma.AssetFieldValueOrderByWithRelationInput[];
    cursor?: Prisma.AssetFieldValueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetFieldValueScalarFieldEnum | Prisma.AssetFieldValueScalarFieldEnum[];
};
export type AssetFieldValueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where?: Prisma.AssetFieldValueWhereInput;
    orderBy?: Prisma.AssetFieldValueOrderByWithRelationInput | Prisma.AssetFieldValueOrderByWithRelationInput[];
    cursor?: Prisma.AssetFieldValueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetFieldValueScalarFieldEnum | Prisma.AssetFieldValueScalarFieldEnum[];
};
export type AssetFieldValueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where?: Prisma.AssetFieldValueWhereInput;
    orderBy?: Prisma.AssetFieldValueOrderByWithRelationInput | Prisma.AssetFieldValueOrderByWithRelationInput[];
    cursor?: Prisma.AssetFieldValueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetFieldValueScalarFieldEnum | Prisma.AssetFieldValueScalarFieldEnum[];
};
export type AssetFieldValueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetFieldValueCreateInput, Prisma.AssetFieldValueUncheckedCreateInput>;
};
export type AssetFieldValueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetFieldValueCreateManyInput | Prisma.AssetFieldValueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetFieldValueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    data: Prisma.AssetFieldValueCreateManyInput | Prisma.AssetFieldValueCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetFieldValueIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetFieldValueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateInput, Prisma.AssetFieldValueUncheckedUpdateInput>;
    where: Prisma.AssetFieldValueWhereUniqueInput;
};
export type AssetFieldValueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateManyMutationInput, Prisma.AssetFieldValueUncheckedUpdateManyInput>;
    where?: Prisma.AssetFieldValueWhereInput;
    limit?: number;
};
export type AssetFieldValueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetFieldValueUpdateManyMutationInput, Prisma.AssetFieldValueUncheckedUpdateManyInput>;
    where?: Prisma.AssetFieldValueWhereInput;
    limit?: number;
    include?: Prisma.AssetFieldValueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetFieldValueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where: Prisma.AssetFieldValueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetFieldValueCreateInput, Prisma.AssetFieldValueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetFieldValueUpdateInput, Prisma.AssetFieldValueUncheckedUpdateInput>;
};
export type AssetFieldValueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
    where: Prisma.AssetFieldValueWhereUniqueInput;
};
export type AssetFieldValueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetFieldValueWhereInput;
    limit?: number;
};
export type AssetFieldValueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetFieldValueSelect<ExtArgs> | null;
    omit?: Prisma.AssetFieldValueOmit<ExtArgs> | null;
    include?: Prisma.AssetFieldValueInclude<ExtArgs> | null;
};
