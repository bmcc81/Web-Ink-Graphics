import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProjectTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$ProjectTranslationPayload>;
export type AggregateProjectTranslation = {
    _count: ProjectTranslationCountAggregateOutputType | null;
    _min: ProjectTranslationMinAggregateOutputType | null;
    _max: ProjectTranslationMaxAggregateOutputType | null;
};
export type ProjectTranslationMinAggregateOutputType = {
    id: string | null;
    locale: $Enums.Locale | null;
    title: string | null;
    summary: string | null;
    challenge: string | null;
    solution: string | null;
    results: string | null;
    seoTitle: string | null;
    metaDescription: string | null;
    projectId: string | null;
};
export type ProjectTranslationMaxAggregateOutputType = {
    id: string | null;
    locale: $Enums.Locale | null;
    title: string | null;
    summary: string | null;
    challenge: string | null;
    solution: string | null;
    results: string | null;
    seoTitle: string | null;
    metaDescription: string | null;
    projectId: string | null;
};
export type ProjectTranslationCountAggregateOutputType = {
    id: number;
    locale: number;
    title: number;
    summary: number;
    challenge: number;
    solution: number;
    results: number;
    seoTitle: number;
    metaDescription: number;
    projectId: number;
    _all: number;
};
export type ProjectTranslationMinAggregateInputType = {
    id?: true;
    locale?: true;
    title?: true;
    summary?: true;
    challenge?: true;
    solution?: true;
    results?: true;
    seoTitle?: true;
    metaDescription?: true;
    projectId?: true;
};
export type ProjectTranslationMaxAggregateInputType = {
    id?: true;
    locale?: true;
    title?: true;
    summary?: true;
    challenge?: true;
    solution?: true;
    results?: true;
    seoTitle?: true;
    metaDescription?: true;
    projectId?: true;
};
export type ProjectTranslationCountAggregateInputType = {
    id?: true;
    locale?: true;
    title?: true;
    summary?: true;
    challenge?: true;
    solution?: true;
    results?: true;
    seoTitle?: true;
    metaDescription?: true;
    projectId?: true;
    _all?: true;
};
export type ProjectTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectTranslationWhereInput;
    orderBy?: Prisma.ProjectTranslationOrderByWithRelationInput | Prisma.ProjectTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ProjectTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProjectTranslationCountAggregateInputType;
    _min?: ProjectTranslationMinAggregateInputType;
    _max?: ProjectTranslationMaxAggregateInputType;
};
export type GetProjectTranslationAggregateType<T extends ProjectTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProjectTranslation[P]> : Prisma.GetScalarType<T[P], AggregateProjectTranslation[P]>;
};
export type ProjectTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectTranslationWhereInput;
    orderBy?: Prisma.ProjectTranslationOrderByWithAggregationInput | Prisma.ProjectTranslationOrderByWithAggregationInput[];
    by: Prisma.ProjectTranslationScalarFieldEnum[] | Prisma.ProjectTranslationScalarFieldEnum;
    having?: Prisma.ProjectTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectTranslationCountAggregateInputType | true;
    _min?: ProjectTranslationMinAggregateInputType;
    _max?: ProjectTranslationMaxAggregateInputType;
};
export type ProjectTranslationGroupByOutputType = {
    id: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge: string | null;
    solution: string | null;
    results: string | null;
    seoTitle: string | null;
    metaDescription: string | null;
    projectId: string;
    _count: ProjectTranslationCountAggregateOutputType | null;
    _min: ProjectTranslationMinAggregateOutputType | null;
    _max: ProjectTranslationMaxAggregateOutputType | null;
};
export type GetProjectTranslationGroupByPayload<T extends ProjectTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProjectTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProjectTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProjectTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProjectTranslationGroupByOutputType[P]>;
}>>;
export type ProjectTranslationWhereInput = {
    AND?: Prisma.ProjectTranslationWhereInput | Prisma.ProjectTranslationWhereInput[];
    OR?: Prisma.ProjectTranslationWhereInput[];
    NOT?: Prisma.ProjectTranslationWhereInput | Prisma.ProjectTranslationWhereInput[];
    id?: Prisma.StringFilter<"ProjectTranslation"> | string;
    locale?: Prisma.EnumLocaleFilter<"ProjectTranslation"> | $Enums.Locale;
    title?: Prisma.StringFilter<"ProjectTranslation"> | string;
    summary?: Prisma.StringFilter<"ProjectTranslation"> | string;
    challenge?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    solution?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    results?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    seoTitle?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    projectId?: Prisma.StringFilter<"ProjectTranslation"> | string;
    project?: Prisma.XOR<Prisma.PortfolioProjectScalarRelationFilter, Prisma.PortfolioProjectWhereInput>;
};
export type ProjectTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    challenge?: Prisma.SortOrderInput | Prisma.SortOrder;
    solution?: Prisma.SortOrderInput | Prisma.SortOrder;
    results?: Prisma.SortOrderInput | Prisma.SortOrder;
    seoTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    project?: Prisma.PortfolioProjectOrderByWithRelationInput;
};
export type ProjectTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    projectId_locale?: Prisma.ProjectTranslationProjectIdLocaleCompoundUniqueInput;
    AND?: Prisma.ProjectTranslationWhereInput | Prisma.ProjectTranslationWhereInput[];
    OR?: Prisma.ProjectTranslationWhereInput[];
    NOT?: Prisma.ProjectTranslationWhereInput | Prisma.ProjectTranslationWhereInput[];
    locale?: Prisma.EnumLocaleFilter<"ProjectTranslation"> | $Enums.Locale;
    title?: Prisma.StringFilter<"ProjectTranslation"> | string;
    summary?: Prisma.StringFilter<"ProjectTranslation"> | string;
    challenge?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    solution?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    results?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    seoTitle?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    projectId?: Prisma.StringFilter<"ProjectTranslation"> | string;
    project?: Prisma.XOR<Prisma.PortfolioProjectScalarRelationFilter, Prisma.PortfolioProjectWhereInput>;
}, "id" | "projectId_locale">;
export type ProjectTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    challenge?: Prisma.SortOrderInput | Prisma.SortOrder;
    solution?: Prisma.SortOrderInput | Prisma.SortOrder;
    results?: Prisma.SortOrderInput | Prisma.SortOrder;
    seoTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    _count?: Prisma.ProjectTranslationCountOrderByAggregateInput;
    _max?: Prisma.ProjectTranslationMaxOrderByAggregateInput;
    _min?: Prisma.ProjectTranslationMinOrderByAggregateInput;
};
export type ProjectTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProjectTranslationScalarWhereWithAggregatesInput | Prisma.ProjectTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProjectTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProjectTranslationScalarWhereWithAggregatesInput | Prisma.ProjectTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProjectTranslation"> | string;
    locale?: Prisma.EnumLocaleWithAggregatesFilter<"ProjectTranslation"> | $Enums.Locale;
    title?: Prisma.StringWithAggregatesFilter<"ProjectTranslation"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"ProjectTranslation"> | string;
    challenge?: Prisma.StringNullableWithAggregatesFilter<"ProjectTranslation"> | string | null;
    solution?: Prisma.StringNullableWithAggregatesFilter<"ProjectTranslation"> | string | null;
    results?: Prisma.StringNullableWithAggregatesFilter<"ProjectTranslation"> | string | null;
    seoTitle?: Prisma.StringNullableWithAggregatesFilter<"ProjectTranslation"> | string | null;
    metaDescription?: Prisma.StringNullableWithAggregatesFilter<"ProjectTranslation"> | string | null;
    projectId?: Prisma.StringWithAggregatesFilter<"ProjectTranslation"> | string;
};
export type ProjectTranslationCreateInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge?: string | null;
    solution?: string | null;
    results?: string | null;
    seoTitle?: string | null;
    metaDescription?: string | null;
    project: Prisma.PortfolioProjectCreateNestedOneWithoutTranslationsInput;
};
export type ProjectTranslationUncheckedCreateInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge?: string | null;
    solution?: string | null;
    results?: string | null;
    seoTitle?: string | null;
    metaDescription?: string | null;
    projectId: string;
};
export type ProjectTranslationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    project?: Prisma.PortfolioProjectUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type ProjectTranslationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectTranslationCreateManyInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge?: string | null;
    solution?: string | null;
    results?: string | null;
    seoTitle?: string | null;
    metaDescription?: string | null;
    projectId: string;
};
export type ProjectTranslationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProjectTranslationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProjectTranslationListRelationFilter = {
    every?: Prisma.ProjectTranslationWhereInput;
    some?: Prisma.ProjectTranslationWhereInput;
    none?: Prisma.ProjectTranslationWhereInput;
};
export type ProjectTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProjectTranslationProjectIdLocaleCompoundUniqueInput = {
    projectId: string;
    locale: $Enums.Locale;
};
export type ProjectTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    solution?: Prisma.SortOrder;
    results?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type ProjectTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    solution?: Prisma.SortOrder;
    results?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type ProjectTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    locale?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    solution?: Prisma.SortOrder;
    results?: Prisma.SortOrder;
    seoTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
};
export type ProjectTranslationCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectTranslationCreateWithoutProjectInput, Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput> | Prisma.ProjectTranslationCreateWithoutProjectInput[] | Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput | Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectTranslationCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
};
export type ProjectTranslationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ProjectTranslationCreateWithoutProjectInput, Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput> | Prisma.ProjectTranslationCreateWithoutProjectInput[] | Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput | Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ProjectTranslationCreateManyProjectInputEnvelope;
    connect?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
};
export type ProjectTranslationUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectTranslationCreateWithoutProjectInput, Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput> | Prisma.ProjectTranslationCreateWithoutProjectInput[] | Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput | Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectTranslationUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectTranslationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectTranslationCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    disconnect?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    delete?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    connect?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    update?: Prisma.ProjectTranslationUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectTranslationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectTranslationUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectTranslationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectTranslationScalarWhereInput | Prisma.ProjectTranslationScalarWhereInput[];
};
export type ProjectTranslationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ProjectTranslationCreateWithoutProjectInput, Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput> | Prisma.ProjectTranslationCreateWithoutProjectInput[] | Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput | Prisma.ProjectTranslationCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ProjectTranslationUpsertWithWhereUniqueWithoutProjectInput | Prisma.ProjectTranslationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ProjectTranslationCreateManyProjectInputEnvelope;
    set?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    disconnect?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    delete?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    connect?: Prisma.ProjectTranslationWhereUniqueInput | Prisma.ProjectTranslationWhereUniqueInput[];
    update?: Prisma.ProjectTranslationUpdateWithWhereUniqueWithoutProjectInput | Prisma.ProjectTranslationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ProjectTranslationUpdateManyWithWhereWithoutProjectInput | Prisma.ProjectTranslationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ProjectTranslationScalarWhereInput | Prisma.ProjectTranslationScalarWhereInput[];
};
export type EnumLocaleFieldUpdateOperationsInput = {
    set?: $Enums.Locale;
};
export type ProjectTranslationCreateWithoutProjectInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge?: string | null;
    solution?: string | null;
    results?: string | null;
    seoTitle?: string | null;
    metaDescription?: string | null;
};
export type ProjectTranslationUncheckedCreateWithoutProjectInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge?: string | null;
    solution?: string | null;
    results?: string | null;
    seoTitle?: string | null;
    metaDescription?: string | null;
};
export type ProjectTranslationCreateOrConnectWithoutProjectInput = {
    where: Prisma.ProjectTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectTranslationCreateWithoutProjectInput, Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput>;
};
export type ProjectTranslationCreateManyProjectInputEnvelope = {
    data: Prisma.ProjectTranslationCreateManyProjectInput | Prisma.ProjectTranslationCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ProjectTranslationUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProjectTranslationUpdateWithoutProjectInput, Prisma.ProjectTranslationUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ProjectTranslationCreateWithoutProjectInput, Prisma.ProjectTranslationUncheckedCreateWithoutProjectInput>;
};
export type ProjectTranslationUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ProjectTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProjectTranslationUpdateWithoutProjectInput, Prisma.ProjectTranslationUncheckedUpdateWithoutProjectInput>;
};
export type ProjectTranslationUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ProjectTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ProjectTranslationUpdateManyMutationInput, Prisma.ProjectTranslationUncheckedUpdateManyWithoutProjectInput>;
};
export type ProjectTranslationScalarWhereInput = {
    AND?: Prisma.ProjectTranslationScalarWhereInput | Prisma.ProjectTranslationScalarWhereInput[];
    OR?: Prisma.ProjectTranslationScalarWhereInput[];
    NOT?: Prisma.ProjectTranslationScalarWhereInput | Prisma.ProjectTranslationScalarWhereInput[];
    id?: Prisma.StringFilter<"ProjectTranslation"> | string;
    locale?: Prisma.EnumLocaleFilter<"ProjectTranslation"> | $Enums.Locale;
    title?: Prisma.StringFilter<"ProjectTranslation"> | string;
    summary?: Prisma.StringFilter<"ProjectTranslation"> | string;
    challenge?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    solution?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    results?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    seoTitle?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"ProjectTranslation"> | string | null;
    projectId?: Prisma.StringFilter<"ProjectTranslation"> | string;
};
export type ProjectTranslationCreateManyProjectInput = {
    id?: string;
    locale: $Enums.Locale;
    title: string;
    summary: string;
    challenge?: string | null;
    solution?: string | null;
    results?: string | null;
    seoTitle?: string | null;
    metaDescription?: string | null;
};
export type ProjectTranslationUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProjectTranslationUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProjectTranslationUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locale?: Prisma.EnumLocaleFieldUpdateOperationsInput | $Enums.Locale;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    solution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    results?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seoTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProjectTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    locale?: boolean;
    title?: boolean;
    summary?: boolean;
    challenge?: boolean;
    solution?: boolean;
    results?: boolean;
    seoTitle?: boolean;
    metaDescription?: boolean;
    projectId?: boolean;
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectTranslation"]>;
export type ProjectTranslationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    locale?: boolean;
    title?: boolean;
    summary?: boolean;
    challenge?: boolean;
    solution?: boolean;
    results?: boolean;
    seoTitle?: boolean;
    metaDescription?: boolean;
    projectId?: boolean;
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectTranslation"]>;
export type ProjectTranslationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    locale?: boolean;
    title?: boolean;
    summary?: boolean;
    challenge?: boolean;
    solution?: boolean;
    results?: boolean;
    seoTitle?: boolean;
    metaDescription?: boolean;
    projectId?: boolean;
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["projectTranslation"]>;
export type ProjectTranslationSelectScalar = {
    id?: boolean;
    locale?: boolean;
    title?: boolean;
    summary?: boolean;
    challenge?: boolean;
    solution?: boolean;
    results?: boolean;
    seoTitle?: boolean;
    metaDescription?: boolean;
    projectId?: boolean;
};
export type ProjectTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "locale" | "title" | "summary" | "challenge" | "solution" | "results" | "seoTitle" | "metaDescription" | "projectId", ExtArgs["result"]["projectTranslation"]>;
export type ProjectTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
};
export type ProjectTranslationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
};
export type ProjectTranslationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.PortfolioProjectDefaultArgs<ExtArgs>;
};
export type $ProjectTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProjectTranslation";
    objects: {
        project: Prisma.$PortfolioProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        locale: $Enums.Locale;
        title: string;
        summary: string;
        challenge: string | null;
        solution: string | null;
        results: string | null;
        seoTitle: string | null;
        metaDescription: string | null;
        projectId: string;
    }, ExtArgs["result"]["projectTranslation"]>;
    composites: {};
};
export type ProjectTranslationGetPayload<S extends boolean | null | undefined | ProjectTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload, S>;
export type ProjectTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProjectTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectTranslationCountAggregateInputType | true;
};
export interface ProjectTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProjectTranslation'];
        meta: {
            name: 'ProjectTranslation';
        };
    };
    findUnique<T extends ProjectTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, ProjectTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProjectTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProjectTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProjectTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, ProjectTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProjectTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProjectTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProjectTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, ProjectTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProjectTranslationCreateArgs>(args: Prisma.SelectSubset<T, ProjectTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProjectTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, ProjectTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProjectTranslationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProjectTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProjectTranslationDeleteArgs>(args: Prisma.SelectSubset<T, ProjectTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProjectTranslationUpdateArgs>(args: Prisma.SelectSubset<T, ProjectTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProjectTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProjectTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProjectTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, ProjectTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProjectTranslationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProjectTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProjectTranslationUpsertArgs>(args: Prisma.SelectSubset<T, ProjectTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__ProjectTranslationClient<runtime.Types.Result.GetResult<Prisma.$ProjectTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProjectTranslationCountArgs>(args?: Prisma.Subset<T, ProjectTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProjectTranslationCountAggregateOutputType> : number>;
    aggregate<T extends ProjectTranslationAggregateArgs>(args: Prisma.Subset<T, ProjectTranslationAggregateArgs>): Prisma.PrismaPromise<GetProjectTranslationAggregateType<T>>;
    groupBy<T extends ProjectTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProjectTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: ProjectTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProjectTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProjectTranslationFieldRefs;
}
export interface Prisma__ProjectTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.PortfolioProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__PortfolioProjectClient<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProjectTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly locale: Prisma.FieldRef<"ProjectTranslation", 'Locale'>;
    readonly title: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly summary: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly challenge: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly solution: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly results: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly seoTitle: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly metaDescription: Prisma.FieldRef<"ProjectTranslation", 'String'>;
    readonly projectId: Prisma.FieldRef<"ProjectTranslation", 'String'>;
}
export type ProjectTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    where: Prisma.ProjectTranslationWhereUniqueInput;
};
export type ProjectTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    where: Prisma.ProjectTranslationWhereUniqueInput;
};
export type ProjectTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProjectTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectTranslationCreateInput, Prisma.ProjectTranslationUncheckedCreateInput>;
};
export type ProjectTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProjectTranslationCreateManyInput | Prisma.ProjectTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProjectTranslationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    data: Prisma.ProjectTranslationCreateManyInput | Prisma.ProjectTranslationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProjectTranslationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProjectTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectTranslationUpdateInput, Prisma.ProjectTranslationUncheckedUpdateInput>;
    where: Prisma.ProjectTranslationWhereUniqueInput;
};
export type ProjectTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProjectTranslationUpdateManyMutationInput, Prisma.ProjectTranslationUncheckedUpdateManyInput>;
    where?: Prisma.ProjectTranslationWhereInput;
    limit?: number;
};
export type ProjectTranslationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProjectTranslationUpdateManyMutationInput, Prisma.ProjectTranslationUncheckedUpdateManyInput>;
    where?: Prisma.ProjectTranslationWhereInput;
    limit?: number;
    include?: Prisma.ProjectTranslationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProjectTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    where: Prisma.ProjectTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProjectTranslationCreateInput, Prisma.ProjectTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProjectTranslationUpdateInput, Prisma.ProjectTranslationUncheckedUpdateInput>;
};
export type ProjectTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
    where: Prisma.ProjectTranslationWhereUniqueInput;
};
export type ProjectTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectTranslationWhereInput;
    limit?: number;
};
export type ProjectTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ProjectTranslationOmit<ExtArgs> | null;
    include?: Prisma.ProjectTranslationInclude<ExtArgs> | null;
};
