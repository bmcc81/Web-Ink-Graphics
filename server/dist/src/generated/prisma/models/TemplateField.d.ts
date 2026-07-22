import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TemplateFieldModel = runtime.Types.Result.DefaultSelection<Prisma.$TemplateFieldPayload>;
export type AggregateTemplateField = {
    _count: TemplateFieldCountAggregateOutputType | null;
    _avg: TemplateFieldAvgAggregateOutputType | null;
    _sum: TemplateFieldSumAggregateOutputType | null;
    _min: TemplateFieldMinAggregateOutputType | null;
    _max: TemplateFieldMaxAggregateOutputType | null;
};
export type TemplateFieldAvgAggregateOutputType = {
    maxLength: number | null;
    sortOrder: number | null;
    x: number | null;
    y: number | null;
    width: number | null;
    height: number | null;
    fontSize: number | null;
};
export type TemplateFieldSumAggregateOutputType = {
    maxLength: number | null;
    sortOrder: number | null;
    x: number | null;
    y: number | null;
    width: number | null;
    height: number | null;
    fontSize: number | null;
};
export type TemplateFieldMinAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    key: string | null;
    label: string | null;
    fieldType: $Enums.TemplateFieldType | null;
    required: boolean | null;
    maxLength: number | null;
    sortOrder: number | null;
    x: number | null;
    y: number | null;
    width: number | null;
    height: number | null;
    fontSize: number | null;
    color: string | null;
};
export type TemplateFieldMaxAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    key: string | null;
    label: string | null;
    fieldType: $Enums.TemplateFieldType | null;
    required: boolean | null;
    maxLength: number | null;
    sortOrder: number | null;
    x: number | null;
    y: number | null;
    width: number | null;
    height: number | null;
    fontSize: number | null;
    color: string | null;
};
export type TemplateFieldCountAggregateOutputType = {
    id: number;
    templateId: number;
    key: number;
    label: number;
    fieldType: number;
    required: number;
    maxLength: number;
    sortOrder: number;
    x: number;
    y: number;
    width: number;
    height: number;
    fontSize: number;
    color: number;
    _all: number;
};
export type TemplateFieldAvgAggregateInputType = {
    maxLength?: true;
    sortOrder?: true;
    x?: true;
    y?: true;
    width?: true;
    height?: true;
    fontSize?: true;
};
export type TemplateFieldSumAggregateInputType = {
    maxLength?: true;
    sortOrder?: true;
    x?: true;
    y?: true;
    width?: true;
    height?: true;
    fontSize?: true;
};
export type TemplateFieldMinAggregateInputType = {
    id?: true;
    templateId?: true;
    key?: true;
    label?: true;
    fieldType?: true;
    required?: true;
    maxLength?: true;
    sortOrder?: true;
    x?: true;
    y?: true;
    width?: true;
    height?: true;
    fontSize?: true;
    color?: true;
};
export type TemplateFieldMaxAggregateInputType = {
    id?: true;
    templateId?: true;
    key?: true;
    label?: true;
    fieldType?: true;
    required?: true;
    maxLength?: true;
    sortOrder?: true;
    x?: true;
    y?: true;
    width?: true;
    height?: true;
    fontSize?: true;
    color?: true;
};
export type TemplateFieldCountAggregateInputType = {
    id?: true;
    templateId?: true;
    key?: true;
    label?: true;
    fieldType?: true;
    required?: true;
    maxLength?: true;
    sortOrder?: true;
    x?: true;
    y?: true;
    width?: true;
    height?: true;
    fontSize?: true;
    color?: true;
    _all?: true;
};
export type TemplateFieldAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldWhereInput;
    orderBy?: Prisma.TemplateFieldOrderByWithRelationInput | Prisma.TemplateFieldOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TemplateFieldCountAggregateInputType;
    _avg?: TemplateFieldAvgAggregateInputType;
    _sum?: TemplateFieldSumAggregateInputType;
    _min?: TemplateFieldMinAggregateInputType;
    _max?: TemplateFieldMaxAggregateInputType;
};
export type GetTemplateFieldAggregateType<T extends TemplateFieldAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplateField]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTemplateField[P]> : Prisma.GetScalarType<T[P], AggregateTemplateField[P]>;
};
export type TemplateFieldGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldWhereInput;
    orderBy?: Prisma.TemplateFieldOrderByWithAggregationInput | Prisma.TemplateFieldOrderByWithAggregationInput[];
    by: Prisma.TemplateFieldScalarFieldEnum[] | Prisma.TemplateFieldScalarFieldEnum;
    having?: Prisma.TemplateFieldScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemplateFieldCountAggregateInputType | true;
    _avg?: TemplateFieldAvgAggregateInputType;
    _sum?: TemplateFieldSumAggregateInputType;
    _min?: TemplateFieldMinAggregateInputType;
    _max?: TemplateFieldMaxAggregateInputType;
};
export type TemplateFieldGroupByOutputType = {
    id: string;
    templateId: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required: boolean;
    maxLength: number | null;
    sortOrder: number;
    x: number;
    y: number;
    width: number;
    height: number;
    fontSize: number;
    color: string | null;
    _count: TemplateFieldCountAggregateOutputType | null;
    _avg: TemplateFieldAvgAggregateOutputType | null;
    _sum: TemplateFieldSumAggregateOutputType | null;
    _min: TemplateFieldMinAggregateOutputType | null;
    _max: TemplateFieldMaxAggregateOutputType | null;
};
export type GetTemplateFieldGroupByPayload<T extends TemplateFieldGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TemplateFieldGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TemplateFieldGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TemplateFieldGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>;
}>>;
export type TemplateFieldWhereInput = {
    AND?: Prisma.TemplateFieldWhereInput | Prisma.TemplateFieldWhereInput[];
    OR?: Prisma.TemplateFieldWhereInput[];
    NOT?: Prisma.TemplateFieldWhereInput | Prisma.TemplateFieldWhereInput[];
    id?: Prisma.StringFilter<"TemplateField"> | string;
    templateId?: Prisma.StringFilter<"TemplateField"> | string;
    key?: Prisma.StringFilter<"TemplateField"> | string;
    label?: Prisma.StringFilter<"TemplateField"> | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFilter<"TemplateField"> | $Enums.TemplateFieldType;
    required?: Prisma.BoolFilter<"TemplateField"> | boolean;
    maxLength?: Prisma.IntNullableFilter<"TemplateField"> | number | null;
    sortOrder?: Prisma.IntFilter<"TemplateField"> | number;
    x?: Prisma.IntFilter<"TemplateField"> | number;
    y?: Prisma.IntFilter<"TemplateField"> | number;
    width?: Prisma.IntFilter<"TemplateField"> | number;
    height?: Prisma.IntFilter<"TemplateField"> | number;
    fontSize?: Prisma.IntFilter<"TemplateField"> | number;
    color?: Prisma.StringNullableFilter<"TemplateField"> | string | null;
    template?: Prisma.XOR<Prisma.DesignTemplateScalarRelationFilter, Prisma.DesignTemplateWhereInput>;
    values?: Prisma.AssetFieldValueListRelationFilter;
};
export type TemplateFieldOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fieldType?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    maxLength?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    template?: Prisma.DesignTemplateOrderByWithRelationInput;
    values?: Prisma.AssetFieldValueOrderByRelationAggregateInput;
};
export type TemplateFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    templateId_key?: Prisma.TemplateFieldTemplateIdKeyCompoundUniqueInput;
    AND?: Prisma.TemplateFieldWhereInput | Prisma.TemplateFieldWhereInput[];
    OR?: Prisma.TemplateFieldWhereInput[];
    NOT?: Prisma.TemplateFieldWhereInput | Prisma.TemplateFieldWhereInput[];
    templateId?: Prisma.StringFilter<"TemplateField"> | string;
    key?: Prisma.StringFilter<"TemplateField"> | string;
    label?: Prisma.StringFilter<"TemplateField"> | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFilter<"TemplateField"> | $Enums.TemplateFieldType;
    required?: Prisma.BoolFilter<"TemplateField"> | boolean;
    maxLength?: Prisma.IntNullableFilter<"TemplateField"> | number | null;
    sortOrder?: Prisma.IntFilter<"TemplateField"> | number;
    x?: Prisma.IntFilter<"TemplateField"> | number;
    y?: Prisma.IntFilter<"TemplateField"> | number;
    width?: Prisma.IntFilter<"TemplateField"> | number;
    height?: Prisma.IntFilter<"TemplateField"> | number;
    fontSize?: Prisma.IntFilter<"TemplateField"> | number;
    color?: Prisma.StringNullableFilter<"TemplateField"> | string | null;
    template?: Prisma.XOR<Prisma.DesignTemplateScalarRelationFilter, Prisma.DesignTemplateWhereInput>;
    values?: Prisma.AssetFieldValueListRelationFilter;
}, "id" | "templateId_key">;
export type TemplateFieldOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fieldType?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    maxLength?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TemplateFieldCountOrderByAggregateInput;
    _avg?: Prisma.TemplateFieldAvgOrderByAggregateInput;
    _max?: Prisma.TemplateFieldMaxOrderByAggregateInput;
    _min?: Prisma.TemplateFieldMinOrderByAggregateInput;
    _sum?: Prisma.TemplateFieldSumOrderByAggregateInput;
};
export type TemplateFieldScalarWhereWithAggregatesInput = {
    AND?: Prisma.TemplateFieldScalarWhereWithAggregatesInput | Prisma.TemplateFieldScalarWhereWithAggregatesInput[];
    OR?: Prisma.TemplateFieldScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TemplateFieldScalarWhereWithAggregatesInput | Prisma.TemplateFieldScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TemplateField"> | string;
    templateId?: Prisma.StringWithAggregatesFilter<"TemplateField"> | string;
    key?: Prisma.StringWithAggregatesFilter<"TemplateField"> | string;
    label?: Prisma.StringWithAggregatesFilter<"TemplateField"> | string;
    fieldType?: Prisma.EnumTemplateFieldTypeWithAggregatesFilter<"TemplateField"> | $Enums.TemplateFieldType;
    required?: Prisma.BoolWithAggregatesFilter<"TemplateField"> | boolean;
    maxLength?: Prisma.IntNullableWithAggregatesFilter<"TemplateField"> | number | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"TemplateField"> | number;
    x?: Prisma.IntWithAggregatesFilter<"TemplateField"> | number;
    y?: Prisma.IntWithAggregatesFilter<"TemplateField"> | number;
    width?: Prisma.IntWithAggregatesFilter<"TemplateField"> | number;
    height?: Prisma.IntWithAggregatesFilter<"TemplateField"> | number;
    fontSize?: Prisma.IntWithAggregatesFilter<"TemplateField"> | number;
    color?: Prisma.StringNullableWithAggregatesFilter<"TemplateField"> | string | null;
};
export type TemplateFieldCreateInput = {
    id?: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
    template: Prisma.DesignTemplateCreateNestedOneWithoutFieldsInput;
    values?: Prisma.AssetFieldValueCreateNestedManyWithoutTemplateFieldInput;
};
export type TemplateFieldUncheckedCreateInput = {
    id?: string;
    templateId: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
    values?: Prisma.AssetFieldValueUncheckedCreateNestedManyWithoutTemplateFieldInput;
};
export type TemplateFieldUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    template?: Prisma.DesignTemplateUpdateOneRequiredWithoutFieldsNestedInput;
    values?: Prisma.AssetFieldValueUpdateManyWithoutTemplateFieldNestedInput;
};
export type TemplateFieldUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    values?: Prisma.AssetFieldValueUncheckedUpdateManyWithoutTemplateFieldNestedInput;
};
export type TemplateFieldCreateManyInput = {
    id?: string;
    templateId: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
};
export type TemplateFieldUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TemplateFieldUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TemplateFieldListRelationFilter = {
    every?: Prisma.TemplateFieldWhereInput;
    some?: Prisma.TemplateFieldWhereInput;
    none?: Prisma.TemplateFieldWhereInput;
};
export type TemplateFieldOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TemplateFieldTemplateIdKeyCompoundUniqueInput = {
    templateId: string;
    key: string;
};
export type TemplateFieldCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fieldType?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    maxLength?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type TemplateFieldAvgOrderByAggregateInput = {
    maxLength?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
};
export type TemplateFieldMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fieldType?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    maxLength?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type TemplateFieldMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    fieldType?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    maxLength?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type TemplateFieldSumOrderByAggregateInput = {
    maxLength?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    x?: Prisma.SortOrder;
    y?: Prisma.SortOrder;
    width?: Prisma.SortOrder;
    height?: Prisma.SortOrder;
    fontSize?: Prisma.SortOrder;
};
export type TemplateFieldScalarRelationFilter = {
    is?: Prisma.TemplateFieldWhereInput;
    isNot?: Prisma.TemplateFieldWhereInput;
};
export type TemplateFieldCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldCreateWithoutTemplateInput, Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput> | Prisma.TemplateFieldCreateWithoutTemplateInput[] | Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput | Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.TemplateFieldCreateManyTemplateInputEnvelope;
    connect?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
};
export type TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldCreateWithoutTemplateInput, Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput> | Prisma.TemplateFieldCreateWithoutTemplateInput[] | Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput | Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.TemplateFieldCreateManyTemplateInputEnvelope;
    connect?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
};
export type TemplateFieldUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldCreateWithoutTemplateInput, Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput> | Prisma.TemplateFieldCreateWithoutTemplateInput[] | Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput | Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | Prisma.TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.TemplateFieldCreateManyTemplateInputEnvelope;
    set?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    disconnect?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    delete?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    connect?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    update?: Prisma.TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | Prisma.TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.TemplateFieldUpdateManyWithWhereWithoutTemplateInput | Prisma.TemplateFieldUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.TemplateFieldScalarWhereInput | Prisma.TemplateFieldScalarWhereInput[];
};
export type TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldCreateWithoutTemplateInput, Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput> | Prisma.TemplateFieldCreateWithoutTemplateInput[] | Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput | Prisma.TemplateFieldCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | Prisma.TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.TemplateFieldCreateManyTemplateInputEnvelope;
    set?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    disconnect?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    delete?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    connect?: Prisma.TemplateFieldWhereUniqueInput | Prisma.TemplateFieldWhereUniqueInput[];
    update?: Prisma.TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | Prisma.TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.TemplateFieldUpdateManyWithWhereWithoutTemplateInput | Prisma.TemplateFieldUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.TemplateFieldScalarWhereInput | Prisma.TemplateFieldScalarWhereInput[];
};
export type EnumTemplateFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.TemplateFieldType;
};
export type TemplateFieldCreateNestedOneWithoutValuesInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldCreateWithoutValuesInput, Prisma.TemplateFieldUncheckedCreateWithoutValuesInput>;
    connectOrCreate?: Prisma.TemplateFieldCreateOrConnectWithoutValuesInput;
    connect?: Prisma.TemplateFieldWhereUniqueInput;
};
export type TemplateFieldUpdateOneRequiredWithoutValuesNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateFieldCreateWithoutValuesInput, Prisma.TemplateFieldUncheckedCreateWithoutValuesInput>;
    connectOrCreate?: Prisma.TemplateFieldCreateOrConnectWithoutValuesInput;
    upsert?: Prisma.TemplateFieldUpsertWithoutValuesInput;
    connect?: Prisma.TemplateFieldWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TemplateFieldUpdateToOneWithWhereWithoutValuesInput, Prisma.TemplateFieldUpdateWithoutValuesInput>, Prisma.TemplateFieldUncheckedUpdateWithoutValuesInput>;
};
export type TemplateFieldCreateWithoutTemplateInput = {
    id?: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
    values?: Prisma.AssetFieldValueCreateNestedManyWithoutTemplateFieldInput;
};
export type TemplateFieldUncheckedCreateWithoutTemplateInput = {
    id?: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
    values?: Prisma.AssetFieldValueUncheckedCreateNestedManyWithoutTemplateFieldInput;
};
export type TemplateFieldCreateOrConnectWithoutTemplateInput = {
    where: Prisma.TemplateFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateFieldCreateWithoutTemplateInput, Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput>;
};
export type TemplateFieldCreateManyTemplateInputEnvelope = {
    data: Prisma.TemplateFieldCreateManyTemplateInput | Prisma.TemplateFieldCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.TemplateFieldWhereUniqueInput;
    update: Prisma.XOR<Prisma.TemplateFieldUpdateWithoutTemplateInput, Prisma.TemplateFieldUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.TemplateFieldCreateWithoutTemplateInput, Prisma.TemplateFieldUncheckedCreateWithoutTemplateInput>;
};
export type TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.TemplateFieldWhereUniqueInput;
    data: Prisma.XOR<Prisma.TemplateFieldUpdateWithoutTemplateInput, Prisma.TemplateFieldUncheckedUpdateWithoutTemplateInput>;
};
export type TemplateFieldUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.TemplateFieldScalarWhereInput;
    data: Prisma.XOR<Prisma.TemplateFieldUpdateManyMutationInput, Prisma.TemplateFieldUncheckedUpdateManyWithoutTemplateInput>;
};
export type TemplateFieldScalarWhereInput = {
    AND?: Prisma.TemplateFieldScalarWhereInput | Prisma.TemplateFieldScalarWhereInput[];
    OR?: Prisma.TemplateFieldScalarWhereInput[];
    NOT?: Prisma.TemplateFieldScalarWhereInput | Prisma.TemplateFieldScalarWhereInput[];
    id?: Prisma.StringFilter<"TemplateField"> | string;
    templateId?: Prisma.StringFilter<"TemplateField"> | string;
    key?: Prisma.StringFilter<"TemplateField"> | string;
    label?: Prisma.StringFilter<"TemplateField"> | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFilter<"TemplateField"> | $Enums.TemplateFieldType;
    required?: Prisma.BoolFilter<"TemplateField"> | boolean;
    maxLength?: Prisma.IntNullableFilter<"TemplateField"> | number | null;
    sortOrder?: Prisma.IntFilter<"TemplateField"> | number;
    x?: Prisma.IntFilter<"TemplateField"> | number;
    y?: Prisma.IntFilter<"TemplateField"> | number;
    width?: Prisma.IntFilter<"TemplateField"> | number;
    height?: Prisma.IntFilter<"TemplateField"> | number;
    fontSize?: Prisma.IntFilter<"TemplateField"> | number;
    color?: Prisma.StringNullableFilter<"TemplateField"> | string | null;
};
export type TemplateFieldCreateWithoutValuesInput = {
    id?: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
    template: Prisma.DesignTemplateCreateNestedOneWithoutFieldsInput;
};
export type TemplateFieldUncheckedCreateWithoutValuesInput = {
    id?: string;
    templateId: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
};
export type TemplateFieldCreateOrConnectWithoutValuesInput = {
    where: Prisma.TemplateFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateFieldCreateWithoutValuesInput, Prisma.TemplateFieldUncheckedCreateWithoutValuesInput>;
};
export type TemplateFieldUpsertWithoutValuesInput = {
    update: Prisma.XOR<Prisma.TemplateFieldUpdateWithoutValuesInput, Prisma.TemplateFieldUncheckedUpdateWithoutValuesInput>;
    create: Prisma.XOR<Prisma.TemplateFieldCreateWithoutValuesInput, Prisma.TemplateFieldUncheckedCreateWithoutValuesInput>;
    where?: Prisma.TemplateFieldWhereInput;
};
export type TemplateFieldUpdateToOneWithWhereWithoutValuesInput = {
    where?: Prisma.TemplateFieldWhereInput;
    data: Prisma.XOR<Prisma.TemplateFieldUpdateWithoutValuesInput, Prisma.TemplateFieldUncheckedUpdateWithoutValuesInput>;
};
export type TemplateFieldUpdateWithoutValuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    template?: Prisma.DesignTemplateUpdateOneRequiredWithoutFieldsNestedInput;
};
export type TemplateFieldUncheckedUpdateWithoutValuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TemplateFieldCreateManyTemplateInput = {
    id?: string;
    key: string;
    label: string;
    fieldType: $Enums.TemplateFieldType;
    required?: boolean;
    maxLength?: number | null;
    sortOrder?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string | null;
};
export type TemplateFieldUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    values?: Prisma.AssetFieldValueUpdateManyWithoutTemplateFieldNestedInput;
};
export type TemplateFieldUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    values?: Prisma.AssetFieldValueUncheckedUpdateManyWithoutTemplateFieldNestedInput;
};
export type TemplateFieldUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldType?: Prisma.EnumTemplateFieldTypeFieldUpdateOperationsInput | $Enums.TemplateFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maxLength?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    x?: Prisma.IntFieldUpdateOperationsInput | number;
    y?: Prisma.IntFieldUpdateOperationsInput | number;
    width?: Prisma.IntFieldUpdateOperationsInput | number;
    height?: Prisma.IntFieldUpdateOperationsInput | number;
    fontSize?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TemplateFieldCountOutputType = {
    values: number;
};
export type TemplateFieldCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    values?: boolean | TemplateFieldCountOutputTypeCountValuesArgs;
};
export type TemplateFieldCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldCountOutputTypeSelect<ExtArgs> | null;
};
export type TemplateFieldCountOutputTypeCountValuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetFieldValueWhereInput;
};
export type TemplateFieldSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    key?: boolean;
    label?: boolean;
    fieldType?: boolean;
    required?: boolean;
    maxLength?: boolean;
    sortOrder?: boolean;
    x?: boolean;
    y?: boolean;
    width?: boolean;
    height?: boolean;
    fontSize?: boolean;
    color?: boolean;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    values?: boolean | Prisma.TemplateField$valuesArgs<ExtArgs>;
    _count?: boolean | Prisma.TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateField"]>;
export type TemplateFieldSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    key?: boolean;
    label?: boolean;
    fieldType?: boolean;
    required?: boolean;
    maxLength?: boolean;
    sortOrder?: boolean;
    x?: boolean;
    y?: boolean;
    width?: boolean;
    height?: boolean;
    fontSize?: boolean;
    color?: boolean;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateField"]>;
export type TemplateFieldSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    key?: boolean;
    label?: boolean;
    fieldType?: boolean;
    required?: boolean;
    maxLength?: boolean;
    sortOrder?: boolean;
    x?: boolean;
    y?: boolean;
    width?: boolean;
    height?: boolean;
    fontSize?: boolean;
    color?: boolean;
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateField"]>;
export type TemplateFieldSelectScalar = {
    id?: boolean;
    templateId?: boolean;
    key?: boolean;
    label?: boolean;
    fieldType?: boolean;
    required?: boolean;
    maxLength?: boolean;
    sortOrder?: boolean;
    x?: boolean;
    y?: boolean;
    width?: boolean;
    height?: boolean;
    fontSize?: boolean;
    color?: boolean;
};
export type TemplateFieldOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "templateId" | "key" | "label" | "fieldType" | "required" | "maxLength" | "sortOrder" | "x" | "y" | "width" | "height" | "fontSize" | "color", ExtArgs["result"]["templateField"]>;
export type TemplateFieldInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
    values?: boolean | Prisma.TemplateField$valuesArgs<ExtArgs>;
    _count?: boolean | Prisma.TemplateFieldCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TemplateFieldIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
};
export type TemplateFieldIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.DesignTemplateDefaultArgs<ExtArgs>;
};
export type $TemplateFieldPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TemplateField";
    objects: {
        template: Prisma.$DesignTemplatePayload<ExtArgs>;
        values: Prisma.$AssetFieldValuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        templateId: string;
        key: string;
        label: string;
        fieldType: $Enums.TemplateFieldType;
        required: boolean;
        maxLength: number | null;
        sortOrder: number;
        x: number;
        y: number;
        width: number;
        height: number;
        fontSize: number;
        color: string | null;
    }, ExtArgs["result"]["templateField"]>;
    composites: {};
};
export type TemplateFieldGetPayload<S extends boolean | null | undefined | TemplateFieldDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload, S>;
export type TemplateFieldCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TemplateFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TemplateFieldCountAggregateInputType | true;
};
export interface TemplateFieldDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TemplateField'];
        meta: {
            name: 'TemplateField';
        };
    };
    findUnique<T extends TemplateFieldFindUniqueArgs>(args: Prisma.SelectSubset<T, TemplateFieldFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TemplateFieldFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TemplateFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TemplateFieldFindFirstArgs>(args?: Prisma.SelectSubset<T, TemplateFieldFindFirstArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TemplateFieldFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TemplateFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TemplateFieldFindManyArgs>(args?: Prisma.SelectSubset<T, TemplateFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TemplateFieldCreateArgs>(args: Prisma.SelectSubset<T, TemplateFieldCreateArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TemplateFieldCreateManyArgs>(args?: Prisma.SelectSubset<T, TemplateFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TemplateFieldCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TemplateFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TemplateFieldDeleteArgs>(args: Prisma.SelectSubset<T, TemplateFieldDeleteArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TemplateFieldUpdateArgs>(args: Prisma.SelectSubset<T, TemplateFieldUpdateArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TemplateFieldDeleteManyArgs>(args?: Prisma.SelectSubset<T, TemplateFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TemplateFieldUpdateManyArgs>(args: Prisma.SelectSubset<T, TemplateFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TemplateFieldUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TemplateFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TemplateFieldUpsertArgs>(args: Prisma.SelectSubset<T, TemplateFieldUpsertArgs<ExtArgs>>): Prisma.Prisma__TemplateFieldClient<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TemplateFieldCountArgs>(args?: Prisma.Subset<T, TemplateFieldCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TemplateFieldCountAggregateOutputType> : number>;
    aggregate<T extends TemplateFieldAggregateArgs>(args: Prisma.Subset<T, TemplateFieldAggregateArgs>): Prisma.PrismaPromise<GetTemplateFieldAggregateType<T>>;
    groupBy<T extends TemplateFieldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TemplateFieldGroupByArgs['orderBy'];
    } : {
        orderBy?: TemplateFieldGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TemplateFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TemplateFieldFieldRefs;
}
export interface Prisma__TemplateFieldClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    template<T extends Prisma.DesignTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    values<T extends Prisma.TemplateField$valuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TemplateField$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TemplateFieldFieldRefs {
    readonly id: Prisma.FieldRef<"TemplateField", 'String'>;
    readonly templateId: Prisma.FieldRef<"TemplateField", 'String'>;
    readonly key: Prisma.FieldRef<"TemplateField", 'String'>;
    readonly label: Prisma.FieldRef<"TemplateField", 'String'>;
    readonly fieldType: Prisma.FieldRef<"TemplateField", 'TemplateFieldType'>;
    readonly required: Prisma.FieldRef<"TemplateField", 'Boolean'>;
    readonly maxLength: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly x: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly y: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly width: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly height: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly fontSize: Prisma.FieldRef<"TemplateField", 'Int'>;
    readonly color: Prisma.FieldRef<"TemplateField", 'String'>;
}
export type TemplateFieldFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldWhereUniqueInput;
};
export type TemplateFieldFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldWhereUniqueInput;
};
export type TemplateFieldFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where?: Prisma.TemplateFieldWhereInput;
    orderBy?: Prisma.TemplateFieldOrderByWithRelationInput | Prisma.TemplateFieldOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateFieldScalarFieldEnum | Prisma.TemplateFieldScalarFieldEnum[];
};
export type TemplateFieldFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where?: Prisma.TemplateFieldWhereInput;
    orderBy?: Prisma.TemplateFieldOrderByWithRelationInput | Prisma.TemplateFieldOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateFieldScalarFieldEnum | Prisma.TemplateFieldScalarFieldEnum[];
};
export type TemplateFieldFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where?: Prisma.TemplateFieldWhereInput;
    orderBy?: Prisma.TemplateFieldOrderByWithRelationInput | Prisma.TemplateFieldOrderByWithRelationInput[];
    cursor?: Prisma.TemplateFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateFieldScalarFieldEnum | Prisma.TemplateFieldScalarFieldEnum[];
};
export type TemplateFieldCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateFieldCreateInput, Prisma.TemplateFieldUncheckedCreateInput>;
};
export type TemplateFieldCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TemplateFieldCreateManyInput | Prisma.TemplateFieldCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TemplateFieldCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    data: Prisma.TemplateFieldCreateManyInput | Prisma.TemplateFieldCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TemplateFieldIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TemplateFieldUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateFieldUpdateInput, Prisma.TemplateFieldUncheckedUpdateInput>;
    where: Prisma.TemplateFieldWhereUniqueInput;
};
export type TemplateFieldUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TemplateFieldUpdateManyMutationInput, Prisma.TemplateFieldUncheckedUpdateManyInput>;
    where?: Prisma.TemplateFieldWhereInput;
    limit?: number;
};
export type TemplateFieldUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateFieldUpdateManyMutationInput, Prisma.TemplateFieldUncheckedUpdateManyInput>;
    where?: Prisma.TemplateFieldWhereInput;
    limit?: number;
    include?: Prisma.TemplateFieldIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TemplateFieldUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateFieldCreateInput, Prisma.TemplateFieldUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TemplateFieldUpdateInput, Prisma.TemplateFieldUncheckedUpdateInput>;
};
export type TemplateFieldDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
    where: Prisma.TemplateFieldWhereUniqueInput;
};
export type TemplateFieldDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldWhereInput;
    limit?: number;
};
export type TemplateField$valuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TemplateFieldDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateFieldSelect<ExtArgs> | null;
    omit?: Prisma.TemplateFieldOmit<ExtArgs> | null;
    include?: Prisma.TemplateFieldInclude<ExtArgs> | null;
};
