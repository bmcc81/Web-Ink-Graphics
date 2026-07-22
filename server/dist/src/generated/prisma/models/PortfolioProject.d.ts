import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortfolioProjectModel = runtime.Types.Result.DefaultSelection<Prisma.$PortfolioProjectPayload>;
export type AggregatePortfolioProject = {
    _count: PortfolioProjectCountAggregateOutputType | null;
    _avg: PortfolioProjectAvgAggregateOutputType | null;
    _sum: PortfolioProjectSumAggregateOutputType | null;
    _min: PortfolioProjectMinAggregateOutputType | null;
    _max: PortfolioProjectMaxAggregateOutputType | null;
};
export type PortfolioProjectAvgAggregateOutputType = {
    displayOrder: number | null;
};
export type PortfolioProjectSumAggregateOutputType = {
    displayOrder: number | null;
};
export type PortfolioProjectMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    clientName: string | null;
    projectUrl: string | null;
    status: $Enums.ProjectStatus | null;
    featured: boolean | null;
    displayOrder: number | null;
    completedAt: Date | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PortfolioProjectMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    clientName: string | null;
    projectUrl: string | null;
    status: $Enums.ProjectStatus | null;
    featured: boolean | null;
    displayOrder: number | null;
    completedAt: Date | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PortfolioProjectCountAggregateOutputType = {
    id: number;
    slug: number;
    clientName: number;
    projectUrl: number;
    status: number;
    featured: number;
    displayOrder: number;
    completedAt: number;
    publishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PortfolioProjectAvgAggregateInputType = {
    displayOrder?: true;
};
export type PortfolioProjectSumAggregateInputType = {
    displayOrder?: true;
};
export type PortfolioProjectMinAggregateInputType = {
    id?: true;
    slug?: true;
    clientName?: true;
    projectUrl?: true;
    status?: true;
    featured?: true;
    displayOrder?: true;
    completedAt?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PortfolioProjectMaxAggregateInputType = {
    id?: true;
    slug?: true;
    clientName?: true;
    projectUrl?: true;
    status?: true;
    featured?: true;
    displayOrder?: true;
    completedAt?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PortfolioProjectCountAggregateInputType = {
    id?: true;
    slug?: true;
    clientName?: true;
    projectUrl?: true;
    status?: true;
    featured?: true;
    displayOrder?: true;
    completedAt?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PortfolioProjectAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioProjectWhereInput;
    orderBy?: Prisma.PortfolioProjectOrderByWithRelationInput | Prisma.PortfolioProjectOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortfolioProjectCountAggregateInputType;
    _avg?: PortfolioProjectAvgAggregateInputType;
    _sum?: PortfolioProjectSumAggregateInputType;
    _min?: PortfolioProjectMinAggregateInputType;
    _max?: PortfolioProjectMaxAggregateInputType;
};
export type GetPortfolioProjectAggregateType<T extends PortfolioProjectAggregateArgs> = {
    [P in keyof T & keyof AggregatePortfolioProject]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortfolioProject[P]> : Prisma.GetScalarType<T[P], AggregatePortfolioProject[P]>;
};
export type PortfolioProjectGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioProjectWhereInput;
    orderBy?: Prisma.PortfolioProjectOrderByWithAggregationInput | Prisma.PortfolioProjectOrderByWithAggregationInput[];
    by: Prisma.PortfolioProjectScalarFieldEnum[] | Prisma.PortfolioProjectScalarFieldEnum;
    having?: Prisma.PortfolioProjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortfolioProjectCountAggregateInputType | true;
    _avg?: PortfolioProjectAvgAggregateInputType;
    _sum?: PortfolioProjectSumAggregateInputType;
    _min?: PortfolioProjectMinAggregateInputType;
    _max?: PortfolioProjectMaxAggregateInputType;
};
export type PortfolioProjectGroupByOutputType = {
    id: string;
    slug: string;
    clientName: string | null;
    projectUrl: string | null;
    status: $Enums.ProjectStatus;
    featured: boolean;
    displayOrder: number;
    completedAt: Date | null;
    publishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PortfolioProjectCountAggregateOutputType | null;
    _avg: PortfolioProjectAvgAggregateOutputType | null;
    _sum: PortfolioProjectSumAggregateOutputType | null;
    _min: PortfolioProjectMinAggregateOutputType | null;
    _max: PortfolioProjectMaxAggregateOutputType | null;
};
export type GetPortfolioProjectGroupByPayload<T extends PortfolioProjectGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortfolioProjectGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortfolioProjectGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortfolioProjectGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortfolioProjectGroupByOutputType[P]>;
}>>;
export type PortfolioProjectWhereInput = {
    AND?: Prisma.PortfolioProjectWhereInput | Prisma.PortfolioProjectWhereInput[];
    OR?: Prisma.PortfolioProjectWhereInput[];
    NOT?: Prisma.PortfolioProjectWhereInput | Prisma.PortfolioProjectWhereInput[];
    id?: Prisma.StringFilter<"PortfolioProject"> | string;
    slug?: Prisma.StringFilter<"PortfolioProject"> | string;
    clientName?: Prisma.StringNullableFilter<"PortfolioProject"> | string | null;
    projectUrl?: Prisma.StringNullableFilter<"PortfolioProject"> | string | null;
    status?: Prisma.EnumProjectStatusFilter<"PortfolioProject"> | $Enums.ProjectStatus;
    featured?: Prisma.BoolFilter<"PortfolioProject"> | boolean;
    displayOrder?: Prisma.IntFilter<"PortfolioProject"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"PortfolioProject"> | Date | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"PortfolioProject"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortfolioProject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PortfolioProject"> | Date | string;
    translations?: Prisma.ProjectTranslationListRelationFilter;
    images?: Prisma.PortfolioImageListRelationFilter;
    categories?: Prisma.PortfolioCategoryListRelationFilter;
    sourceProject?: Prisma.XOR<Prisma.ProjectNullableScalarRelationFilter, Prisma.ProjectWhereInput> | null;
};
export type PortfolioProjectOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    clientName?: Prisma.SortOrderInput | Prisma.SortOrder;
    projectUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    translations?: Prisma.ProjectTranslationOrderByRelationAggregateInput;
    images?: Prisma.PortfolioImageOrderByRelationAggregateInput;
    categories?: Prisma.PortfolioCategoryOrderByRelationAggregateInput;
    sourceProject?: Prisma.ProjectOrderByWithRelationInput;
};
export type PortfolioProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.PortfolioProjectWhereInput | Prisma.PortfolioProjectWhereInput[];
    OR?: Prisma.PortfolioProjectWhereInput[];
    NOT?: Prisma.PortfolioProjectWhereInput | Prisma.PortfolioProjectWhereInput[];
    clientName?: Prisma.StringNullableFilter<"PortfolioProject"> | string | null;
    projectUrl?: Prisma.StringNullableFilter<"PortfolioProject"> | string | null;
    status?: Prisma.EnumProjectStatusFilter<"PortfolioProject"> | $Enums.ProjectStatus;
    featured?: Prisma.BoolFilter<"PortfolioProject"> | boolean;
    displayOrder?: Prisma.IntFilter<"PortfolioProject"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"PortfolioProject"> | Date | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"PortfolioProject"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortfolioProject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PortfolioProject"> | Date | string;
    translations?: Prisma.ProjectTranslationListRelationFilter;
    images?: Prisma.PortfolioImageListRelationFilter;
    categories?: Prisma.PortfolioCategoryListRelationFilter;
    sourceProject?: Prisma.XOR<Prisma.ProjectNullableScalarRelationFilter, Prisma.ProjectWhereInput> | null;
}, "id" | "slug">;
export type PortfolioProjectOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    clientName?: Prisma.SortOrderInput | Prisma.SortOrder;
    projectUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PortfolioProjectCountOrderByAggregateInput;
    _avg?: Prisma.PortfolioProjectAvgOrderByAggregateInput;
    _max?: Prisma.PortfolioProjectMaxOrderByAggregateInput;
    _min?: Prisma.PortfolioProjectMinOrderByAggregateInput;
    _sum?: Prisma.PortfolioProjectSumOrderByAggregateInput;
};
export type PortfolioProjectScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortfolioProjectScalarWhereWithAggregatesInput | Prisma.PortfolioProjectScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortfolioProjectScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortfolioProjectScalarWhereWithAggregatesInput | Prisma.PortfolioProjectScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PortfolioProject"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"PortfolioProject"> | string;
    clientName?: Prisma.StringNullableWithAggregatesFilter<"PortfolioProject"> | string | null;
    projectUrl?: Prisma.StringNullableWithAggregatesFilter<"PortfolioProject"> | string | null;
    status?: Prisma.EnumProjectStatusWithAggregatesFilter<"PortfolioProject"> | $Enums.ProjectStatus;
    featured?: Prisma.BoolWithAggregatesFilter<"PortfolioProject"> | boolean;
    displayOrder?: Prisma.IntWithAggregatesFilter<"PortfolioProject"> | number;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortfolioProject"> | Date | string | null;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PortfolioProject"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PortfolioProject"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PortfolioProject"> | Date | string;
};
export type PortfolioProjectCreateInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationCreateNestedManyWithoutProjectInput;
    images?: Prisma.PortfolioImageCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryCreateNestedManyWithoutProjectsInput;
    sourceProject?: Prisma.ProjectCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectUncheckedCreateInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationUncheckedCreateNestedManyWithoutProjectInput;
    images?: Prisma.PortfolioImageUncheckedCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryUncheckedCreateNestedManyWithoutProjectsInput;
    sourceProject?: Prisma.ProjectUncheckedCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUpdateManyWithoutProjectNestedInput;
    images?: Prisma.PortfolioImageUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUpdateManyWithoutProjectsNestedInput;
    sourceProject?: Prisma.ProjectUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUncheckedUpdateManyWithoutProjectNestedInput;
    images?: Prisma.PortfolioImageUncheckedUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUncheckedUpdateManyWithoutProjectsNestedInput;
    sourceProject?: Prisma.ProjectUncheckedUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectCreateManyInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PortfolioProjectUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioProjectUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioProjectCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    projectUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PortfolioProjectAvgOrderByAggregateInput = {
    displayOrder?: Prisma.SortOrder;
};
export type PortfolioProjectMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    projectUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PortfolioProjectMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    projectUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PortfolioProjectSumOrderByAggregateInput = {
    displayOrder?: Prisma.SortOrder;
};
export type PortfolioProjectScalarRelationFilter = {
    is?: Prisma.PortfolioProjectWhereInput;
    isNot?: Prisma.PortfolioProjectWhereInput;
};
export type PortfolioProjectListRelationFilter = {
    every?: Prisma.PortfolioProjectWhereInput;
    some?: Prisma.PortfolioProjectWhereInput;
    none?: Prisma.PortfolioProjectWhereInput;
};
export type PortfolioProjectOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortfolioProjectNullableScalarRelationFilter = {
    is?: Prisma.PortfolioProjectWhereInput | null;
    isNot?: Prisma.PortfolioProjectWhereInput | null;
};
export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type PortfolioProjectCreateNestedOneWithoutTranslationsInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutTranslationsInput, Prisma.PortfolioProjectUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutTranslationsInput;
    connect?: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutTranslationsInput, Prisma.PortfolioProjectUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutTranslationsInput;
    upsert?: Prisma.PortfolioProjectUpsertWithoutTranslationsInput;
    connect?: Prisma.PortfolioProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortfolioProjectUpdateToOneWithWhereWithoutTranslationsInput, Prisma.PortfolioProjectUpdateWithoutTranslationsInput>, Prisma.PortfolioProjectUncheckedUpdateWithoutTranslationsInput>;
};
export type PortfolioProjectCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutImagesInput, Prisma.PortfolioProjectUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutImagesInput;
    connect?: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutImagesInput, Prisma.PortfolioProjectUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.PortfolioProjectUpsertWithoutImagesInput;
    connect?: Prisma.PortfolioProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortfolioProjectUpdateToOneWithWhereWithoutImagesInput, Prisma.PortfolioProjectUpdateWithoutImagesInput>, Prisma.PortfolioProjectUncheckedUpdateWithoutImagesInput>;
};
export type PortfolioProjectCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput> | Prisma.PortfolioProjectCreateWithoutCategoriesInput[] | Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput | Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput[];
    connect?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
};
export type PortfolioProjectUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput> | Prisma.PortfolioProjectCreateWithoutCategoriesInput[] | Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput | Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput[];
    connect?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
};
export type PortfolioProjectUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput> | Prisma.PortfolioProjectCreateWithoutCategoriesInput[] | Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput | Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.PortfolioProjectUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.PortfolioProjectUpsertWithWhereUniqueWithoutCategoriesInput[];
    set?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    disconnect?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    delete?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    connect?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    update?: Prisma.PortfolioProjectUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.PortfolioProjectUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.PortfolioProjectUpdateManyWithWhereWithoutCategoriesInput | Prisma.PortfolioProjectUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.PortfolioProjectScalarWhereInput | Prisma.PortfolioProjectScalarWhereInput[];
};
export type PortfolioProjectUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput> | Prisma.PortfolioProjectCreateWithoutCategoriesInput[] | Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput | Prisma.PortfolioProjectCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.PortfolioProjectUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.PortfolioProjectUpsertWithWhereUniqueWithoutCategoriesInput[];
    set?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    disconnect?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    delete?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    connect?: Prisma.PortfolioProjectWhereUniqueInput | Prisma.PortfolioProjectWhereUniqueInput[];
    update?: Prisma.PortfolioProjectUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.PortfolioProjectUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.PortfolioProjectUpdateManyWithWhereWithoutCategoriesInput | Prisma.PortfolioProjectUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.PortfolioProjectScalarWhereInput | Prisma.PortfolioProjectScalarWhereInput[];
};
export type PortfolioProjectCreateNestedOneWithoutSourceProjectInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutSourceProjectInput, Prisma.PortfolioProjectUncheckedCreateWithoutSourceProjectInput>;
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutSourceProjectInput;
    connect?: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectUpdateOneWithoutSourceProjectNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutSourceProjectInput, Prisma.PortfolioProjectUncheckedCreateWithoutSourceProjectInput>;
    connectOrCreate?: Prisma.PortfolioProjectCreateOrConnectWithoutSourceProjectInput;
    upsert?: Prisma.PortfolioProjectUpsertWithoutSourceProjectInput;
    disconnect?: Prisma.PortfolioProjectWhereInput | boolean;
    delete?: Prisma.PortfolioProjectWhereInput | boolean;
    connect?: Prisma.PortfolioProjectWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PortfolioProjectUpdateToOneWithWhereWithoutSourceProjectInput, Prisma.PortfolioProjectUpdateWithoutSourceProjectInput>, Prisma.PortfolioProjectUncheckedUpdateWithoutSourceProjectInput>;
};
export type PortfolioProjectCreateWithoutTranslationsInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.PortfolioImageCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryCreateNestedManyWithoutProjectsInput;
    sourceProject?: Prisma.ProjectCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectUncheckedCreateWithoutTranslationsInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.PortfolioImageUncheckedCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryUncheckedCreateNestedManyWithoutProjectsInput;
    sourceProject?: Prisma.ProjectUncheckedCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectCreateOrConnectWithoutTranslationsInput = {
    where: Prisma.PortfolioProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutTranslationsInput, Prisma.PortfolioProjectUncheckedCreateWithoutTranslationsInput>;
};
export type PortfolioProjectUpsertWithoutTranslationsInput = {
    update: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutTranslationsInput, Prisma.PortfolioProjectUncheckedUpdateWithoutTranslationsInput>;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutTranslationsInput, Prisma.PortfolioProjectUncheckedCreateWithoutTranslationsInput>;
    where?: Prisma.PortfolioProjectWhereInput;
};
export type PortfolioProjectUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: Prisma.PortfolioProjectWhereInput;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutTranslationsInput, Prisma.PortfolioProjectUncheckedUpdateWithoutTranslationsInput>;
};
export type PortfolioProjectUpdateWithoutTranslationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.PortfolioImageUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUpdateManyWithoutProjectsNestedInput;
    sourceProject?: Prisma.ProjectUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectUncheckedUpdateWithoutTranslationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.PortfolioImageUncheckedUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUncheckedUpdateManyWithoutProjectsNestedInput;
    sourceProject?: Prisma.ProjectUncheckedUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectCreateWithoutImagesInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryCreateNestedManyWithoutProjectsInput;
    sourceProject?: Prisma.ProjectCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectUncheckedCreateWithoutImagesInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationUncheckedCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryUncheckedCreateNestedManyWithoutProjectsInput;
    sourceProject?: Prisma.ProjectUncheckedCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectCreateOrConnectWithoutImagesInput = {
    where: Prisma.PortfolioProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutImagesInput, Prisma.PortfolioProjectUncheckedCreateWithoutImagesInput>;
};
export type PortfolioProjectUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutImagesInput, Prisma.PortfolioProjectUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutImagesInput, Prisma.PortfolioProjectUncheckedCreateWithoutImagesInput>;
    where?: Prisma.PortfolioProjectWhereInput;
};
export type PortfolioProjectUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.PortfolioProjectWhereInput;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutImagesInput, Prisma.PortfolioProjectUncheckedUpdateWithoutImagesInput>;
};
export type PortfolioProjectUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUpdateManyWithoutProjectsNestedInput;
    sourceProject?: Prisma.ProjectUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUncheckedUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUncheckedUpdateManyWithoutProjectsNestedInput;
    sourceProject?: Prisma.ProjectUncheckedUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectCreateWithoutCategoriesInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationCreateNestedManyWithoutProjectInput;
    images?: Prisma.PortfolioImageCreateNestedManyWithoutProjectInput;
    sourceProject?: Prisma.ProjectCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationUncheckedCreateNestedManyWithoutProjectInput;
    images?: Prisma.PortfolioImageUncheckedCreateNestedManyWithoutProjectInput;
    sourceProject?: Prisma.ProjectUncheckedCreateNestedOneWithoutPortfolioProjectInput;
};
export type PortfolioProjectCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.PortfolioProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput>;
};
export type PortfolioProjectUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.PortfolioProjectWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedCreateWithoutCategoriesInput>;
};
export type PortfolioProjectUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.PortfolioProjectWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutCategoriesInput, Prisma.PortfolioProjectUncheckedUpdateWithoutCategoriesInput>;
};
export type PortfolioProjectUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.PortfolioProjectScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateManyMutationInput, Prisma.PortfolioProjectUncheckedUpdateManyWithoutCategoriesInput>;
};
export type PortfolioProjectScalarWhereInput = {
    AND?: Prisma.PortfolioProjectScalarWhereInput | Prisma.PortfolioProjectScalarWhereInput[];
    OR?: Prisma.PortfolioProjectScalarWhereInput[];
    NOT?: Prisma.PortfolioProjectScalarWhereInput | Prisma.PortfolioProjectScalarWhereInput[];
    id?: Prisma.StringFilter<"PortfolioProject"> | string;
    slug?: Prisma.StringFilter<"PortfolioProject"> | string;
    clientName?: Prisma.StringNullableFilter<"PortfolioProject"> | string | null;
    projectUrl?: Prisma.StringNullableFilter<"PortfolioProject"> | string | null;
    status?: Prisma.EnumProjectStatusFilter<"PortfolioProject"> | $Enums.ProjectStatus;
    featured?: Prisma.BoolFilter<"PortfolioProject"> | boolean;
    displayOrder?: Prisma.IntFilter<"PortfolioProject"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"PortfolioProject"> | Date | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"PortfolioProject"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PortfolioProject"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PortfolioProject"> | Date | string;
};
export type PortfolioProjectCreateWithoutSourceProjectInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationCreateNestedManyWithoutProjectInput;
    images?: Prisma.PortfolioImageCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryCreateNestedManyWithoutProjectsInput;
};
export type PortfolioProjectUncheckedCreateWithoutSourceProjectInput = {
    id?: string;
    slug: string;
    clientName?: string | null;
    projectUrl?: string | null;
    status?: $Enums.ProjectStatus;
    featured?: boolean;
    displayOrder?: number;
    completedAt?: Date | string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.ProjectTranslationUncheckedCreateNestedManyWithoutProjectInput;
    images?: Prisma.PortfolioImageUncheckedCreateNestedManyWithoutProjectInput;
    categories?: Prisma.PortfolioCategoryUncheckedCreateNestedManyWithoutProjectsInput;
};
export type PortfolioProjectCreateOrConnectWithoutSourceProjectInput = {
    where: Prisma.PortfolioProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutSourceProjectInput, Prisma.PortfolioProjectUncheckedCreateWithoutSourceProjectInput>;
};
export type PortfolioProjectUpsertWithoutSourceProjectInput = {
    update: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutSourceProjectInput, Prisma.PortfolioProjectUncheckedUpdateWithoutSourceProjectInput>;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateWithoutSourceProjectInput, Prisma.PortfolioProjectUncheckedCreateWithoutSourceProjectInput>;
    where?: Prisma.PortfolioProjectWhereInput;
};
export type PortfolioProjectUpdateToOneWithWhereWithoutSourceProjectInput = {
    where?: Prisma.PortfolioProjectWhereInput;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateWithoutSourceProjectInput, Prisma.PortfolioProjectUncheckedUpdateWithoutSourceProjectInput>;
};
export type PortfolioProjectUpdateWithoutSourceProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUpdateManyWithoutProjectNestedInput;
    images?: Prisma.PortfolioImageUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUpdateManyWithoutProjectsNestedInput;
};
export type PortfolioProjectUncheckedUpdateWithoutSourceProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUncheckedUpdateManyWithoutProjectNestedInput;
    images?: Prisma.PortfolioImageUncheckedUpdateManyWithoutProjectNestedInput;
    categories?: Prisma.PortfolioCategoryUncheckedUpdateManyWithoutProjectsNestedInput;
};
export type PortfolioProjectUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUpdateManyWithoutProjectNestedInput;
    images?: Prisma.PortfolioImageUpdateManyWithoutProjectNestedInput;
    sourceProject?: Prisma.ProjectUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.ProjectTranslationUncheckedUpdateManyWithoutProjectNestedInput;
    images?: Prisma.PortfolioImageUncheckedUpdateManyWithoutProjectNestedInput;
    sourceProject?: Prisma.ProjectUncheckedUpdateOneWithoutPortfolioProjectNestedInput;
};
export type PortfolioProjectUncheckedUpdateManyWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PortfolioProjectCountOutputType = {
    translations: number;
    images: number;
    categories: number;
};
export type PortfolioProjectCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | PortfolioProjectCountOutputTypeCountTranslationsArgs;
    images?: boolean | PortfolioProjectCountOutputTypeCountImagesArgs;
    categories?: boolean | PortfolioProjectCountOutputTypeCountCategoriesArgs;
};
export type PortfolioProjectCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectCountOutputTypeSelect<ExtArgs> | null;
};
export type PortfolioProjectCountOutputTypeCountTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectTranslationWhereInput;
};
export type PortfolioProjectCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioImageWhereInput;
};
export type PortfolioProjectCountOutputTypeCountCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioCategoryWhereInput;
};
export type PortfolioProjectSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    clientName?: boolean;
    projectUrl?: boolean;
    status?: boolean;
    featured?: boolean;
    displayOrder?: boolean;
    completedAt?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    translations?: boolean | Prisma.PortfolioProject$translationsArgs<ExtArgs>;
    images?: boolean | Prisma.PortfolioProject$imagesArgs<ExtArgs>;
    categories?: boolean | Prisma.PortfolioProject$categoriesArgs<ExtArgs>;
    sourceProject?: boolean | Prisma.PortfolioProject$sourceProjectArgs<ExtArgs>;
    _count?: boolean | Prisma.PortfolioProjectCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioProject"]>;
export type PortfolioProjectSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    clientName?: boolean;
    projectUrl?: boolean;
    status?: boolean;
    featured?: boolean;
    displayOrder?: boolean;
    completedAt?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["portfolioProject"]>;
export type PortfolioProjectSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    clientName?: boolean;
    projectUrl?: boolean;
    status?: boolean;
    featured?: boolean;
    displayOrder?: boolean;
    completedAt?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["portfolioProject"]>;
export type PortfolioProjectSelectScalar = {
    id?: boolean;
    slug?: boolean;
    clientName?: boolean;
    projectUrl?: boolean;
    status?: boolean;
    featured?: boolean;
    displayOrder?: boolean;
    completedAt?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PortfolioProjectOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "clientName" | "projectUrl" | "status" | "featured" | "displayOrder" | "completedAt" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioProject"]>;
export type PortfolioProjectInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | Prisma.PortfolioProject$translationsArgs<ExtArgs>;
    images?: boolean | Prisma.PortfolioProject$imagesArgs<ExtArgs>;
    categories?: boolean | Prisma.PortfolioProject$categoriesArgs<ExtArgs>;
    sourceProject?: boolean | Prisma.PortfolioProject$sourceProjectArgs<ExtArgs>;
    _count?: boolean | Prisma.PortfolioProjectCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PortfolioProjectIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PortfolioProjectIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PortfolioProjectPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortfolioProject";
    objects: {
        translations: Prisma.$ProjectTranslationPayload<ExtArgs>[];
        images: Prisma.$PortfolioImagePayload<ExtArgs>[];
        categories: Prisma.$PortfolioCategoryPayload<ExtArgs>[];
        sourceProject: Prisma.$ProjectPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        clientName: string | null;
        projectUrl: string | null;
        status: $Enums.ProjectStatus;
        featured: boolean;
        displayOrder: number;
        completedAt: Date | null;
        publishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["portfolioProject"]>;
    composites: {};
};
export type PortfolioProjectGetPayload<S extends boolean | null | undefined | PortfolioProjectDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload, S>;
export type PortfolioProjectCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortfolioProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortfolioProjectCountAggregateInputType | true;
};
export interface PortfolioProjectDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortfolioProject'];
        meta: {
            name: 'PortfolioProject';
        };
    };
    findUnique<T extends PortfolioProjectFindUniqueArgs>(args: Prisma.SelectSubset<T, PortfolioProjectFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortfolioProjectFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortfolioProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortfolioProjectFindFirstArgs>(args?: Prisma.SelectSubset<T, PortfolioProjectFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortfolioProjectFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortfolioProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortfolioProjectFindManyArgs>(args?: Prisma.SelectSubset<T, PortfolioProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortfolioProjectCreateArgs>(args: Prisma.SelectSubset<T, PortfolioProjectCreateArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortfolioProjectCreateManyArgs>(args?: Prisma.SelectSubset<T, PortfolioProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortfolioProjectCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortfolioProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortfolioProjectDeleteArgs>(args: Prisma.SelectSubset<T, PortfolioProjectDeleteArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortfolioProjectUpdateArgs>(args: Prisma.SelectSubset<T, PortfolioProjectUpdateArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortfolioProjectDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortfolioProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortfolioProjectUpdateManyArgs>(args: Prisma.SelectSubset<T, PortfolioProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortfolioProjectUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortfolioProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortfolioProjectUpsertArgs>(args: Prisma.SelectSubset<T, PortfolioProjectUpsertArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortfolioProjectCountArgs>(args?: Prisma.Subset<T, PortfolioProjectCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortfolioProjectCountAggregateOutputType> : number>;
    aggregate<T extends PortfolioProjectAggregateArgs>(args: Prisma.Subset<T, PortfolioProjectAggregateArgs>): Prisma.PrismaPromise<GetPortfolioProjectAggregateType<T>>;
    groupBy<T extends PortfolioProjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortfolioProjectGroupByArgs['orderBy'];
    } : {
        orderBy?: PortfolioProjectGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortfolioProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortfolioProjectFieldRefs;
}
export interface Prisma__PortfolioProjectClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    translations<T extends Prisma.PortfolioProject$translationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioProject$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    images<T extends Prisma.PortfolioProject$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioProject$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    categories<T extends Prisma.PortfolioProject$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioProject$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sourceProject<T extends Prisma.PortfolioProject$sourceProjectArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioProject$sourceProjectArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortfolioProjectFieldRefs {
    readonly id: Prisma.FieldRef<"PortfolioProject", 'String'>;
    readonly slug: Prisma.FieldRef<"PortfolioProject", 'String'>;
    readonly clientName: Prisma.FieldRef<"PortfolioProject", 'String'>;
    readonly projectUrl: Prisma.FieldRef<"PortfolioProject", 'String'>;
    readonly status: Prisma.FieldRef<"PortfolioProject", 'ProjectStatus'>;
    readonly featured: Prisma.FieldRef<"PortfolioProject", 'Boolean'>;
    readonly displayOrder: Prisma.FieldRef<"PortfolioProject", 'Int'>;
    readonly completedAt: Prisma.FieldRef<"PortfolioProject", 'DateTime'>;
    readonly publishedAt: Prisma.FieldRef<"PortfolioProject", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PortfolioProject", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PortfolioProject", 'DateTime'>;
}
export type PortfolioProjectFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where?: Prisma.PortfolioProjectWhereInput;
    orderBy?: Prisma.PortfolioProjectOrderByWithRelationInput | Prisma.PortfolioProjectOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioProjectScalarFieldEnum | Prisma.PortfolioProjectScalarFieldEnum[];
};
export type PortfolioProjectFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where?: Prisma.PortfolioProjectWhereInput;
    orderBy?: Prisma.PortfolioProjectOrderByWithRelationInput | Prisma.PortfolioProjectOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioProjectScalarFieldEnum | Prisma.PortfolioProjectScalarFieldEnum[];
};
export type PortfolioProjectFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where?: Prisma.PortfolioProjectWhereInput;
    orderBy?: Prisma.PortfolioProjectOrderByWithRelationInput | Prisma.PortfolioProjectOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioProjectScalarFieldEnum | Prisma.PortfolioProjectScalarFieldEnum[];
};
export type PortfolioProjectCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioProjectCreateInput, Prisma.PortfolioProjectUncheckedCreateInput>;
};
export type PortfolioProjectCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortfolioProjectCreateManyInput | Prisma.PortfolioProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioProjectCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    data: Prisma.PortfolioProjectCreateManyInput | Prisma.PortfolioProjectCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioProjectUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateInput, Prisma.PortfolioProjectUncheckedUpdateInput>;
    where: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateManyMutationInput, Prisma.PortfolioProjectUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioProjectWhereInput;
    limit?: number;
};
export type PortfolioProjectUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioProjectUpdateManyMutationInput, Prisma.PortfolioProjectUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioProjectWhereInput;
    limit?: number;
};
export type PortfolioProjectUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where: Prisma.PortfolioProjectWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioProjectCreateInput, Prisma.PortfolioProjectUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortfolioProjectUpdateInput, Prisma.PortfolioProjectUncheckedUpdateInput>;
};
export type PortfolioProjectDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where: Prisma.PortfolioProjectWhereUniqueInput;
};
export type PortfolioProjectDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioProjectWhereInput;
    limit?: number;
};
export type PortfolioProject$translationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    where?: Prisma.ProjectTranslationWhereInput;
    orderBy?: Prisma.ProjectTranslationOrderByWithRelationInput | Prisma.ProjectTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ProjectTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectTranslationScalarFieldEnum | Prisma.ProjectTranslationScalarFieldEnum[];
};
export type PortfolioProject$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortfolioProject$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    where?: Prisma.PortfolioCategoryWhereInput;
    orderBy?: Prisma.PortfolioCategoryOrderByWithRelationInput | Prisma.PortfolioCategoryOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioCategoryScalarFieldEnum | Prisma.PortfolioCategoryScalarFieldEnum[];
};
export type PortfolioProject$sourceProjectArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
};
export type PortfolioProjectDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
};
