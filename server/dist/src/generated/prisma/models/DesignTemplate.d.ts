import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DesignTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$DesignTemplatePayload>;
export type AggregateDesignTemplate = {
    _count: DesignTemplateCountAggregateOutputType | null;
    _avg: DesignTemplateAvgAggregateOutputType | null;
    _sum: DesignTemplateSumAggregateOutputType | null;
    _min: DesignTemplateMinAggregateOutputType | null;
    _max: DesignTemplateMaxAggregateOutputType | null;
};
export type DesignTemplateAvgAggregateOutputType = {
    canvasWidth: number | null;
    canvasHeight: number | null;
};
export type DesignTemplateSumAggregateOutputType = {
    canvasWidth: number | null;
    canvasHeight: number | null;
};
export type DesignTemplateMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    category: $Enums.TemplateCategory | null;
    previewImageUrl: string | null;
    isPublished: boolean | null;
    canvasWidth: number | null;
    canvasHeight: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignTemplateMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    category: $Enums.TemplateCategory | null;
    previewImageUrl: string | null;
    isPublished: boolean | null;
    canvasWidth: number | null;
    canvasHeight: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignTemplateCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    category: number;
    previewImageUrl: number;
    isPublished: number;
    canvasWidth: number;
    canvasHeight: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DesignTemplateAvgAggregateInputType = {
    canvasWidth?: true;
    canvasHeight?: true;
};
export type DesignTemplateSumAggregateInputType = {
    canvasWidth?: true;
    canvasHeight?: true;
};
export type DesignTemplateMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    previewImageUrl?: true;
    isPublished?: true;
    canvasWidth?: true;
    canvasHeight?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignTemplateMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    previewImageUrl?: true;
    isPublished?: true;
    canvasWidth?: true;
    canvasHeight?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignTemplateCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category?: true;
    previewImageUrl?: true;
    isPublished?: true;
    canvasWidth?: true;
    canvasHeight?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DesignTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignTemplateWhereInput;
    orderBy?: Prisma.DesignTemplateOrderByWithRelationInput | Prisma.DesignTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DesignTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DesignTemplateCountAggregateInputType;
    _avg?: DesignTemplateAvgAggregateInputType;
    _sum?: DesignTemplateSumAggregateInputType;
    _min?: DesignTemplateMinAggregateInputType;
    _max?: DesignTemplateMaxAggregateInputType;
};
export type GetDesignTemplateAggregateType<T extends DesignTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateDesignTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDesignTemplate[P]> : Prisma.GetScalarType<T[P], AggregateDesignTemplate[P]>;
};
export type DesignTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignTemplateWhereInput;
    orderBy?: Prisma.DesignTemplateOrderByWithAggregationInput | Prisma.DesignTemplateOrderByWithAggregationInput[];
    by: Prisma.DesignTemplateScalarFieldEnum[] | Prisma.DesignTemplateScalarFieldEnum;
    having?: Prisma.DesignTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DesignTemplateCountAggregateInputType | true;
    _avg?: DesignTemplateAvgAggregateInputType;
    _sum?: DesignTemplateSumAggregateInputType;
    _min?: DesignTemplateMinAggregateInputType;
    _max?: DesignTemplateMaxAggregateInputType;
};
export type DesignTemplateGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl: string | null;
    isPublished: boolean;
    canvasWidth: number;
    canvasHeight: number;
    createdAt: Date;
    updatedAt: Date;
    _count: DesignTemplateCountAggregateOutputType | null;
    _avg: DesignTemplateAvgAggregateOutputType | null;
    _sum: DesignTemplateSumAggregateOutputType | null;
    _min: DesignTemplateMinAggregateOutputType | null;
    _max: DesignTemplateMaxAggregateOutputType | null;
};
export type GetDesignTemplateGroupByPayload<T extends DesignTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DesignTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DesignTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DesignTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DesignTemplateGroupByOutputType[P]>;
}>>;
export type DesignTemplateWhereInput = {
    AND?: Prisma.DesignTemplateWhereInput | Prisma.DesignTemplateWhereInput[];
    OR?: Prisma.DesignTemplateWhereInput[];
    NOT?: Prisma.DesignTemplateWhereInput | Prisma.DesignTemplateWhereInput[];
    id?: Prisma.StringFilter<"DesignTemplate"> | string;
    name?: Prisma.StringFilter<"DesignTemplate"> | string;
    description?: Prisma.StringNullableFilter<"DesignTemplate"> | string | null;
    category?: Prisma.EnumTemplateCategoryFilter<"DesignTemplate"> | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.StringNullableFilter<"DesignTemplate"> | string | null;
    isPublished?: Prisma.BoolFilter<"DesignTemplate"> | boolean;
    canvasWidth?: Prisma.IntFilter<"DesignTemplate"> | number;
    canvasHeight?: Prisma.IntFilter<"DesignTemplate"> | number;
    createdAt?: Prisma.DateTimeFilter<"DesignTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignTemplate"> | Date | string;
    fields?: Prisma.TemplateFieldListRelationFilter;
    assets?: Prisma.ProjectAssetListRelationFilter;
};
export type DesignTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    previewImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fields?: Prisma.TemplateFieldOrderByRelationAggregateInput;
    assets?: Prisma.ProjectAssetOrderByRelationAggregateInput;
};
export type DesignTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DesignTemplateWhereInput | Prisma.DesignTemplateWhereInput[];
    OR?: Prisma.DesignTemplateWhereInput[];
    NOT?: Prisma.DesignTemplateWhereInput | Prisma.DesignTemplateWhereInput[];
    name?: Prisma.StringFilter<"DesignTemplate"> | string;
    description?: Prisma.StringNullableFilter<"DesignTemplate"> | string | null;
    category?: Prisma.EnumTemplateCategoryFilter<"DesignTemplate"> | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.StringNullableFilter<"DesignTemplate"> | string | null;
    isPublished?: Prisma.BoolFilter<"DesignTemplate"> | boolean;
    canvasWidth?: Prisma.IntFilter<"DesignTemplate"> | number;
    canvasHeight?: Prisma.IntFilter<"DesignTemplate"> | number;
    createdAt?: Prisma.DateTimeFilter<"DesignTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"DesignTemplate"> | Date | string;
    fields?: Prisma.TemplateFieldListRelationFilter;
    assets?: Prisma.ProjectAssetListRelationFilter;
}, "id">;
export type DesignTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    previewImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DesignTemplateCountOrderByAggregateInput;
    _avg?: Prisma.DesignTemplateAvgOrderByAggregateInput;
    _max?: Prisma.DesignTemplateMaxOrderByAggregateInput;
    _min?: Prisma.DesignTemplateMinOrderByAggregateInput;
    _sum?: Prisma.DesignTemplateSumOrderByAggregateInput;
};
export type DesignTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.DesignTemplateScalarWhereWithAggregatesInput | Prisma.DesignTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.DesignTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DesignTemplateScalarWhereWithAggregatesInput | Prisma.DesignTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DesignTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"DesignTemplate"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"DesignTemplate"> | string | null;
    category?: Prisma.EnumTemplateCategoryWithAggregatesFilter<"DesignTemplate"> | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.StringNullableWithAggregatesFilter<"DesignTemplate"> | string | null;
    isPublished?: Prisma.BoolWithAggregatesFilter<"DesignTemplate"> | boolean;
    canvasWidth?: Prisma.IntWithAggregatesFilter<"DesignTemplate"> | number;
    canvasHeight?: Prisma.IntWithAggregatesFilter<"DesignTemplate"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DesignTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"DesignTemplate"> | Date | string;
};
export type DesignTemplateCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.TemplateFieldCreateNestedManyWithoutTemplateInput;
    assets?: Prisma.ProjectAssetCreateNestedManyWithoutTemplateInput;
};
export type DesignTemplateUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput;
    assets?: Prisma.ProjectAssetUncheckedCreateNestedManyWithoutTemplateInput;
};
export type DesignTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.TemplateFieldUpdateManyWithoutTemplateNestedInput;
    assets?: Prisma.ProjectAssetUpdateManyWithoutTemplateNestedInput;
};
export type DesignTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput;
    assets?: Prisma.ProjectAssetUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type DesignTemplateCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    previewImageUrl?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignTemplateAvgOrderByAggregateInput = {
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
};
export type DesignTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    previewImageUrl?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    previewImageUrl?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignTemplateSumOrderByAggregateInput = {
    canvasWidth?: Prisma.SortOrder;
    canvasHeight?: Prisma.SortOrder;
};
export type DesignTemplateScalarRelationFilter = {
    is?: Prisma.DesignTemplateWhereInput;
    isNot?: Prisma.DesignTemplateWhereInput;
};
export type EnumTemplateCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TemplateCategory;
};
export type DesignTemplateCreateNestedOneWithoutFieldsInput = {
    create?: Prisma.XOR<Prisma.DesignTemplateCreateWithoutFieldsInput, Prisma.DesignTemplateUncheckedCreateWithoutFieldsInput>;
    connectOrCreate?: Prisma.DesignTemplateCreateOrConnectWithoutFieldsInput;
    connect?: Prisma.DesignTemplateWhereUniqueInput;
};
export type DesignTemplateUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: Prisma.XOR<Prisma.DesignTemplateCreateWithoutFieldsInput, Prisma.DesignTemplateUncheckedCreateWithoutFieldsInput>;
    connectOrCreate?: Prisma.DesignTemplateCreateOrConnectWithoutFieldsInput;
    upsert?: Prisma.DesignTemplateUpsertWithoutFieldsInput;
    connect?: Prisma.DesignTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignTemplateUpdateToOneWithWhereWithoutFieldsInput, Prisma.DesignTemplateUpdateWithoutFieldsInput>, Prisma.DesignTemplateUncheckedUpdateWithoutFieldsInput>;
};
export type DesignTemplateCreateNestedOneWithoutAssetsInput = {
    create?: Prisma.XOR<Prisma.DesignTemplateCreateWithoutAssetsInput, Prisma.DesignTemplateUncheckedCreateWithoutAssetsInput>;
    connectOrCreate?: Prisma.DesignTemplateCreateOrConnectWithoutAssetsInput;
    connect?: Prisma.DesignTemplateWhereUniqueInput;
};
export type DesignTemplateUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: Prisma.XOR<Prisma.DesignTemplateCreateWithoutAssetsInput, Prisma.DesignTemplateUncheckedCreateWithoutAssetsInput>;
    connectOrCreate?: Prisma.DesignTemplateCreateOrConnectWithoutAssetsInput;
    upsert?: Prisma.DesignTemplateUpsertWithoutAssetsInput;
    connect?: Prisma.DesignTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DesignTemplateUpdateToOneWithWhereWithoutAssetsInput, Prisma.DesignTemplateUpdateWithoutAssetsInput>, Prisma.DesignTemplateUncheckedUpdateWithoutAssetsInput>;
};
export type DesignTemplateCreateWithoutFieldsInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assets?: Prisma.ProjectAssetCreateNestedManyWithoutTemplateInput;
};
export type DesignTemplateUncheckedCreateWithoutFieldsInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assets?: Prisma.ProjectAssetUncheckedCreateNestedManyWithoutTemplateInput;
};
export type DesignTemplateCreateOrConnectWithoutFieldsInput = {
    where: Prisma.DesignTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignTemplateCreateWithoutFieldsInput, Prisma.DesignTemplateUncheckedCreateWithoutFieldsInput>;
};
export type DesignTemplateUpsertWithoutFieldsInput = {
    update: Prisma.XOR<Prisma.DesignTemplateUpdateWithoutFieldsInput, Prisma.DesignTemplateUncheckedUpdateWithoutFieldsInput>;
    create: Prisma.XOR<Prisma.DesignTemplateCreateWithoutFieldsInput, Prisma.DesignTemplateUncheckedCreateWithoutFieldsInput>;
    where?: Prisma.DesignTemplateWhereInput;
};
export type DesignTemplateUpdateToOneWithWhereWithoutFieldsInput = {
    where?: Prisma.DesignTemplateWhereInput;
    data: Prisma.XOR<Prisma.DesignTemplateUpdateWithoutFieldsInput, Prisma.DesignTemplateUncheckedUpdateWithoutFieldsInput>;
};
export type DesignTemplateUpdateWithoutFieldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assets?: Prisma.ProjectAssetUpdateManyWithoutTemplateNestedInput;
};
export type DesignTemplateUncheckedUpdateWithoutFieldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assets?: Prisma.ProjectAssetUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type DesignTemplateCreateWithoutAssetsInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.TemplateFieldCreateNestedManyWithoutTemplateInput;
};
export type DesignTemplateUncheckedCreateWithoutAssetsInput = {
    id?: string;
    name: string;
    description?: string | null;
    category: $Enums.TemplateCategory;
    previewImageUrl?: string | null;
    isPublished?: boolean;
    canvasWidth?: number;
    canvasHeight?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput;
};
export type DesignTemplateCreateOrConnectWithoutAssetsInput = {
    where: Prisma.DesignTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignTemplateCreateWithoutAssetsInput, Prisma.DesignTemplateUncheckedCreateWithoutAssetsInput>;
};
export type DesignTemplateUpsertWithoutAssetsInput = {
    update: Prisma.XOR<Prisma.DesignTemplateUpdateWithoutAssetsInput, Prisma.DesignTemplateUncheckedUpdateWithoutAssetsInput>;
    create: Prisma.XOR<Prisma.DesignTemplateCreateWithoutAssetsInput, Prisma.DesignTemplateUncheckedCreateWithoutAssetsInput>;
    where?: Prisma.DesignTemplateWhereInput;
};
export type DesignTemplateUpdateToOneWithWhereWithoutAssetsInput = {
    where?: Prisma.DesignTemplateWhereInput;
    data: Prisma.XOR<Prisma.DesignTemplateUpdateWithoutAssetsInput, Prisma.DesignTemplateUncheckedUpdateWithoutAssetsInput>;
};
export type DesignTemplateUpdateWithoutAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.TemplateFieldUpdateManyWithoutTemplateNestedInput;
};
export type DesignTemplateUncheckedUpdateWithoutAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory;
    previewImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canvasWidth?: Prisma.IntFieldUpdateOperationsInput | number;
    canvasHeight?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type DesignTemplateCountOutputType = {
    fields: number;
    assets: number;
};
export type DesignTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fields?: boolean | DesignTemplateCountOutputTypeCountFieldsArgs;
    assets?: boolean | DesignTemplateCountOutputTypeCountAssetsArgs;
};
export type DesignTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type DesignTemplateCountOutputTypeCountFieldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateFieldWhereInput;
};
export type DesignTemplateCountOutputTypeCountAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectAssetWhereInput;
};
export type DesignTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    previewImageUrl?: boolean;
    isPublished?: boolean;
    canvasWidth?: boolean;
    canvasHeight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fields?: boolean | Prisma.DesignTemplate$fieldsArgs<ExtArgs>;
    assets?: boolean | Prisma.DesignTemplate$assetsArgs<ExtArgs>;
    _count?: boolean | Prisma.DesignTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designTemplate"]>;
export type DesignTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    previewImageUrl?: boolean;
    isPublished?: boolean;
    canvasWidth?: boolean;
    canvasHeight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["designTemplate"]>;
export type DesignTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    previewImageUrl?: boolean;
    isPublished?: boolean;
    canvasWidth?: boolean;
    canvasHeight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["designTemplate"]>;
export type DesignTemplateSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    previewImageUrl?: boolean;
    isPublished?: boolean;
    canvasWidth?: boolean;
    canvasHeight?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DesignTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "category" | "previewImageUrl" | "isPublished" | "canvasWidth" | "canvasHeight" | "createdAt" | "updatedAt", ExtArgs["result"]["designTemplate"]>;
export type DesignTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fields?: boolean | Prisma.DesignTemplate$fieldsArgs<ExtArgs>;
    assets?: boolean | Prisma.DesignTemplate$assetsArgs<ExtArgs>;
    _count?: boolean | Prisma.DesignTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DesignTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DesignTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DesignTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DesignTemplate";
    objects: {
        fields: Prisma.$TemplateFieldPayload<ExtArgs>[];
        assets: Prisma.$ProjectAssetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        category: $Enums.TemplateCategory;
        previewImageUrl: string | null;
        isPublished: boolean;
        canvasWidth: number;
        canvasHeight: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["designTemplate"]>;
    composites: {};
};
export type DesignTemplateGetPayload<S extends boolean | null | undefined | DesignTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload, S>;
export type DesignTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DesignTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DesignTemplateCountAggregateInputType | true;
};
export interface DesignTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DesignTemplate'];
        meta: {
            name: 'DesignTemplate';
        };
    };
    findUnique<T extends DesignTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, DesignTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DesignTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DesignTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DesignTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, DesignTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DesignTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DesignTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DesignTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, DesignTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DesignTemplateCreateArgs>(args: Prisma.SelectSubset<T, DesignTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DesignTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, DesignTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DesignTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DesignTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DesignTemplateDeleteArgs>(args: Prisma.SelectSubset<T, DesignTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DesignTemplateUpdateArgs>(args: Prisma.SelectSubset<T, DesignTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DesignTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, DesignTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DesignTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, DesignTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DesignTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DesignTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DesignTemplateUpsertArgs>(args: Prisma.SelectSubset<T, DesignTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__DesignTemplateClient<runtime.Types.Result.GetResult<Prisma.$DesignTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DesignTemplateCountArgs>(args?: Prisma.Subset<T, DesignTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DesignTemplateCountAggregateOutputType> : number>;
    aggregate<T extends DesignTemplateAggregateArgs>(args: Prisma.Subset<T, DesignTemplateAggregateArgs>): Prisma.PrismaPromise<GetDesignTemplateAggregateType<T>>;
    groupBy<T extends DesignTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DesignTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: DesignTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DesignTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DesignTemplateFieldRefs;
}
export interface Prisma__DesignTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fields<T extends Prisma.DesignTemplate$fieldsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignTemplate$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assets<T extends Prisma.DesignTemplate$assetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DesignTemplate$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DesignTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"DesignTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"DesignTemplate", 'String'>;
    readonly description: Prisma.FieldRef<"DesignTemplate", 'String'>;
    readonly category: Prisma.FieldRef<"DesignTemplate", 'TemplateCategory'>;
    readonly previewImageUrl: Prisma.FieldRef<"DesignTemplate", 'String'>;
    readonly isPublished: Prisma.FieldRef<"DesignTemplate", 'Boolean'>;
    readonly canvasWidth: Prisma.FieldRef<"DesignTemplate", 'Int'>;
    readonly canvasHeight: Prisma.FieldRef<"DesignTemplate", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"DesignTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"DesignTemplate", 'DateTime'>;
}
export type DesignTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where: Prisma.DesignTemplateWhereUniqueInput;
};
export type DesignTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where: Prisma.DesignTemplateWhereUniqueInput;
};
export type DesignTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where?: Prisma.DesignTemplateWhereInput;
    orderBy?: Prisma.DesignTemplateOrderByWithRelationInput | Prisma.DesignTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DesignTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignTemplateScalarFieldEnum | Prisma.DesignTemplateScalarFieldEnum[];
};
export type DesignTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where?: Prisma.DesignTemplateWhereInput;
    orderBy?: Prisma.DesignTemplateOrderByWithRelationInput | Prisma.DesignTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DesignTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignTemplateScalarFieldEnum | Prisma.DesignTemplateScalarFieldEnum[];
};
export type DesignTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where?: Prisma.DesignTemplateWhereInput;
    orderBy?: Prisma.DesignTemplateOrderByWithRelationInput | Prisma.DesignTemplateOrderByWithRelationInput[];
    cursor?: Prisma.DesignTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignTemplateScalarFieldEnum | Prisma.DesignTemplateScalarFieldEnum[];
};
export type DesignTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignTemplateCreateInput, Prisma.DesignTemplateUncheckedCreateInput>;
};
export type DesignTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DesignTemplateCreateManyInput | Prisma.DesignTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    data: Prisma.DesignTemplateCreateManyInput | Prisma.DesignTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignTemplateUpdateInput, Prisma.DesignTemplateUncheckedUpdateInput>;
    where: Prisma.DesignTemplateWhereUniqueInput;
};
export type DesignTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DesignTemplateUpdateManyMutationInput, Prisma.DesignTemplateUncheckedUpdateManyInput>;
    where?: Prisma.DesignTemplateWhereInput;
    limit?: number;
};
export type DesignTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignTemplateUpdateManyMutationInput, Prisma.DesignTemplateUncheckedUpdateManyInput>;
    where?: Prisma.DesignTemplateWhereInput;
    limit?: number;
};
export type DesignTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where: Prisma.DesignTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignTemplateCreateInput, Prisma.DesignTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DesignTemplateUpdateInput, Prisma.DesignTemplateUncheckedUpdateInput>;
};
export type DesignTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
    where: Prisma.DesignTemplateWhereUniqueInput;
};
export type DesignTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignTemplateWhereInput;
    limit?: number;
};
export type DesignTemplate$fieldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignTemplate$assetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignTemplateSelect<ExtArgs> | null;
    omit?: Prisma.DesignTemplateOmit<ExtArgs> | null;
    include?: Prisma.DesignTemplateInclude<ExtArgs> | null;
};
