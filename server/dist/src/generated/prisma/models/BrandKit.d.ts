import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BrandKitModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandKitPayload>;
export type AggregateBrandKit = {
    _count: BrandKitCountAggregateOutputType | null;
    _min: BrandKitMinAggregateOutputType | null;
    _max: BrandKitMaxAggregateOutputType | null;
};
export type BrandKitMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    logoUrl: string | null;
    primaryColor: string | null;
    secondaryColor: string | null;
    accentColor: string | null;
    fontFamily: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandKitMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    logoUrl: string | null;
    primaryColor: string | null;
    secondaryColor: string | null;
    accentColor: string | null;
    fontFamily: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandKitCountAggregateOutputType = {
    id: number;
    organizationId: number;
    logoUrl: number;
    primaryColor: number;
    secondaryColor: number;
    accentColor: number;
    fontFamily: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BrandKitMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    logoUrl?: true;
    primaryColor?: true;
    secondaryColor?: true;
    accentColor?: true;
    fontFamily?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandKitMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    logoUrl?: true;
    primaryColor?: true;
    secondaryColor?: true;
    accentColor?: true;
    fontFamily?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandKitCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    logoUrl?: true;
    primaryColor?: true;
    secondaryColor?: true;
    accentColor?: true;
    fontFamily?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BrandKitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandKitWhereInput;
    orderBy?: Prisma.BrandKitOrderByWithRelationInput | Prisma.BrandKitOrderByWithRelationInput[];
    cursor?: Prisma.BrandKitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BrandKitCountAggregateInputType;
    _min?: BrandKitMinAggregateInputType;
    _max?: BrandKitMaxAggregateInputType;
};
export type GetBrandKitAggregateType<T extends BrandKitAggregateArgs> = {
    [P in keyof T & keyof AggregateBrandKit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrandKit[P]> : Prisma.GetScalarType<T[P], AggregateBrandKit[P]>;
};
export type BrandKitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandKitWhereInput;
    orderBy?: Prisma.BrandKitOrderByWithAggregationInput | Prisma.BrandKitOrderByWithAggregationInput[];
    by: Prisma.BrandKitScalarFieldEnum[] | Prisma.BrandKitScalarFieldEnum;
    having?: Prisma.BrandKitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandKitCountAggregateInputType | true;
    _min?: BrandKitMinAggregateInputType;
    _max?: BrandKitMaxAggregateInputType;
};
export type BrandKitGroupByOutputType = {
    id: string;
    organizationId: string;
    logoUrl: string | null;
    primaryColor: string | null;
    secondaryColor: string | null;
    accentColor: string | null;
    fontFamily: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BrandKitCountAggregateOutputType | null;
    _min: BrandKitMinAggregateOutputType | null;
    _max: BrandKitMaxAggregateOutputType | null;
};
export type GetBrandKitGroupByPayload<T extends BrandKitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandKitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandKitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandKitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandKitGroupByOutputType[P]>;
}>>;
export type BrandKitWhereInput = {
    AND?: Prisma.BrandKitWhereInput | Prisma.BrandKitWhereInput[];
    OR?: Prisma.BrandKitWhereInput[];
    NOT?: Prisma.BrandKitWhereInput | Prisma.BrandKitWhereInput[];
    id?: Prisma.StringFilter<"BrandKit"> | string;
    organizationId?: Prisma.StringFilter<"BrandKit"> | string;
    logoUrl?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    primaryColor?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    secondaryColor?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    accentColor?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    fontFamily?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BrandKit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BrandKit"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type BrandKitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    primaryColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    accentColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    fontFamily?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type BrandKitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId?: string;
    AND?: Prisma.BrandKitWhereInput | Prisma.BrandKitWhereInput[];
    OR?: Prisma.BrandKitWhereInput[];
    NOT?: Prisma.BrandKitWhereInput | Prisma.BrandKitWhereInput[];
    logoUrl?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    primaryColor?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    secondaryColor?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    accentColor?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    fontFamily?: Prisma.StringNullableFilter<"BrandKit"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BrandKit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BrandKit"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "organizationId">;
export type BrandKitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    primaryColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    accentColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    fontFamily?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BrandKitCountOrderByAggregateInput;
    _max?: Prisma.BrandKitMaxOrderByAggregateInput;
    _min?: Prisma.BrandKitMinOrderByAggregateInput;
};
export type BrandKitScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandKitScalarWhereWithAggregatesInput | Prisma.BrandKitScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandKitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandKitScalarWhereWithAggregatesInput | Prisma.BrandKitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BrandKit"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"BrandKit"> | string;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"BrandKit"> | string | null;
    primaryColor?: Prisma.StringNullableWithAggregatesFilter<"BrandKit"> | string | null;
    secondaryColor?: Prisma.StringNullableWithAggregatesFilter<"BrandKit"> | string | null;
    accentColor?: Prisma.StringNullableWithAggregatesFilter<"BrandKit"> | string | null;
    fontFamily?: Prisma.StringNullableWithAggregatesFilter<"BrandKit"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BrandKit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BrandKit"> | Date | string;
};
export type BrandKitCreateInput = {
    id?: string;
    logoUrl?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    accentColor?: string | null;
    fontFamily?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutBrandKitInput;
};
export type BrandKitUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    logoUrl?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    accentColor?: string | null;
    fontFamily?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandKitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accentColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fontFamily?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutBrandKitNestedInput;
};
export type BrandKitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accentColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fontFamily?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandKitCreateManyInput = {
    id?: string;
    organizationId: string;
    logoUrl?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    accentColor?: string | null;
    fontFamily?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandKitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accentColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fontFamily?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandKitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accentColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fontFamily?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandKitNullableScalarRelationFilter = {
    is?: Prisma.BrandKitWhereInput | null;
    isNot?: Prisma.BrandKitWhereInput | null;
};
export type BrandKitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    primaryColor?: Prisma.SortOrder;
    secondaryColor?: Prisma.SortOrder;
    accentColor?: Prisma.SortOrder;
    fontFamily?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandKitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    primaryColor?: Prisma.SortOrder;
    secondaryColor?: Prisma.SortOrder;
    accentColor?: Prisma.SortOrder;
    fontFamily?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandKitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    primaryColor?: Prisma.SortOrder;
    secondaryColor?: Prisma.SortOrder;
    accentColor?: Prisma.SortOrder;
    fontFamily?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandKitCreateNestedOneWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.BrandKitCreateWithoutOrganizationInput, Prisma.BrandKitUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.BrandKitCreateOrConnectWithoutOrganizationInput;
    connect?: Prisma.BrandKitWhereUniqueInput;
};
export type BrandKitUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.BrandKitCreateWithoutOrganizationInput, Prisma.BrandKitUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.BrandKitCreateOrConnectWithoutOrganizationInput;
    connect?: Prisma.BrandKitWhereUniqueInput;
};
export type BrandKitUpdateOneWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.BrandKitCreateWithoutOrganizationInput, Prisma.BrandKitUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.BrandKitCreateOrConnectWithoutOrganizationInput;
    upsert?: Prisma.BrandKitUpsertWithoutOrganizationInput;
    disconnect?: Prisma.BrandKitWhereInput | boolean;
    delete?: Prisma.BrandKitWhereInput | boolean;
    connect?: Prisma.BrandKitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandKitUpdateToOneWithWhereWithoutOrganizationInput, Prisma.BrandKitUpdateWithoutOrganizationInput>, Prisma.BrandKitUncheckedUpdateWithoutOrganizationInput>;
};
export type BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.BrandKitCreateWithoutOrganizationInput, Prisma.BrandKitUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.BrandKitCreateOrConnectWithoutOrganizationInput;
    upsert?: Prisma.BrandKitUpsertWithoutOrganizationInput;
    disconnect?: Prisma.BrandKitWhereInput | boolean;
    delete?: Prisma.BrandKitWhereInput | boolean;
    connect?: Prisma.BrandKitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandKitUpdateToOneWithWhereWithoutOrganizationInput, Prisma.BrandKitUpdateWithoutOrganizationInput>, Prisma.BrandKitUncheckedUpdateWithoutOrganizationInput>;
};
export type BrandKitCreateWithoutOrganizationInput = {
    id?: string;
    logoUrl?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    accentColor?: string | null;
    fontFamily?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandKitUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    logoUrl?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    accentColor?: string | null;
    fontFamily?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandKitCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.BrandKitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandKitCreateWithoutOrganizationInput, Prisma.BrandKitUncheckedCreateWithoutOrganizationInput>;
};
export type BrandKitUpsertWithoutOrganizationInput = {
    update: Prisma.XOR<Prisma.BrandKitUpdateWithoutOrganizationInput, Prisma.BrandKitUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.BrandKitCreateWithoutOrganizationInput, Prisma.BrandKitUncheckedCreateWithoutOrganizationInput>;
    where?: Prisma.BrandKitWhereInput;
};
export type BrandKitUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: Prisma.BrandKitWhereInput;
    data: Prisma.XOR<Prisma.BrandKitUpdateWithoutOrganizationInput, Prisma.BrandKitUncheckedUpdateWithoutOrganizationInput>;
};
export type BrandKitUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accentColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fontFamily?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandKitUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    primaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accentColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fontFamily?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandKitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    logoUrl?: boolean;
    primaryColor?: boolean;
    secondaryColor?: boolean;
    accentColor?: boolean;
    fontFamily?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandKit"]>;
export type BrandKitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    logoUrl?: boolean;
    primaryColor?: boolean;
    secondaryColor?: boolean;
    accentColor?: boolean;
    fontFamily?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandKit"]>;
export type BrandKitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    logoUrl?: boolean;
    primaryColor?: boolean;
    secondaryColor?: boolean;
    accentColor?: boolean;
    fontFamily?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandKit"]>;
export type BrandKitSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    logoUrl?: boolean;
    primaryColor?: boolean;
    secondaryColor?: boolean;
    accentColor?: boolean;
    fontFamily?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BrandKitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "logoUrl" | "primaryColor" | "secondaryColor" | "accentColor" | "fontFamily" | "createdAt" | "updatedAt", ExtArgs["result"]["brandKit"]>;
export type BrandKitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type BrandKitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type BrandKitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $BrandKitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BrandKit";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        logoUrl: string | null;
        primaryColor: string | null;
        secondaryColor: string | null;
        accentColor: string | null;
        fontFamily: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["brandKit"]>;
    composites: {};
};
export type BrandKitGetPayload<S extends boolean | null | undefined | BrandKitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandKitPayload, S>;
export type BrandKitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandKitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandKitCountAggregateInputType | true;
};
export interface BrandKitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BrandKit'];
        meta: {
            name: 'BrandKit';
        };
    };
    findUnique<T extends BrandKitFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandKitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BrandKitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandKitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BrandKitFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandKitFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BrandKitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandKitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BrandKitFindManyArgs>(args?: Prisma.SelectSubset<T, BrandKitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BrandKitCreateArgs>(args: Prisma.SelectSubset<T, BrandKitCreateArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BrandKitCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandKitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BrandKitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandKitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BrandKitDeleteArgs>(args: Prisma.SelectSubset<T, BrandKitDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BrandKitUpdateArgs>(args: Prisma.SelectSubset<T, BrandKitUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BrandKitDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandKitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BrandKitUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandKitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BrandKitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandKitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BrandKitUpsertArgs>(args: Prisma.SelectSubset<T, BrandKitUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BrandKitCountArgs>(args?: Prisma.Subset<T, BrandKitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandKitCountAggregateOutputType> : number>;
    aggregate<T extends BrandKitAggregateArgs>(args: Prisma.Subset<T, BrandKitAggregateArgs>): Prisma.PrismaPromise<GetBrandKitAggregateType<T>>;
    groupBy<T extends BrandKitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandKitGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandKitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandKitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandKitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BrandKitFieldRefs;
}
export interface Prisma__BrandKitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BrandKitFieldRefs {
    readonly id: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly organizationId: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly logoUrl: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly primaryColor: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly secondaryColor: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly accentColor: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly fontFamily: Prisma.FieldRef<"BrandKit", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BrandKit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BrandKit", 'DateTime'>;
}
export type BrandKitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where: Prisma.BrandKitWhereUniqueInput;
};
export type BrandKitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where: Prisma.BrandKitWhereUniqueInput;
};
export type BrandKitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where?: Prisma.BrandKitWhereInput;
    orderBy?: Prisma.BrandKitOrderByWithRelationInput | Prisma.BrandKitOrderByWithRelationInput[];
    cursor?: Prisma.BrandKitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandKitScalarFieldEnum | Prisma.BrandKitScalarFieldEnum[];
};
export type BrandKitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where?: Prisma.BrandKitWhereInput;
    orderBy?: Prisma.BrandKitOrderByWithRelationInput | Prisma.BrandKitOrderByWithRelationInput[];
    cursor?: Prisma.BrandKitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandKitScalarFieldEnum | Prisma.BrandKitScalarFieldEnum[];
};
export type BrandKitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where?: Prisma.BrandKitWhereInput;
    orderBy?: Prisma.BrandKitOrderByWithRelationInput | Prisma.BrandKitOrderByWithRelationInput[];
    cursor?: Prisma.BrandKitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandKitScalarFieldEnum | Prisma.BrandKitScalarFieldEnum[];
};
export type BrandKitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandKitCreateInput, Prisma.BrandKitUncheckedCreateInput>;
};
export type BrandKitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BrandKitCreateManyInput | Prisma.BrandKitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BrandKitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    data: Prisma.BrandKitCreateManyInput | Prisma.BrandKitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BrandKitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BrandKitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandKitUpdateInput, Prisma.BrandKitUncheckedUpdateInput>;
    where: Prisma.BrandKitWhereUniqueInput;
};
export type BrandKitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BrandKitUpdateManyMutationInput, Prisma.BrandKitUncheckedUpdateManyInput>;
    where?: Prisma.BrandKitWhereInput;
    limit?: number;
};
export type BrandKitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandKitUpdateManyMutationInput, Prisma.BrandKitUncheckedUpdateManyInput>;
    where?: Prisma.BrandKitWhereInput;
    limit?: number;
    include?: Prisma.BrandKitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BrandKitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where: Prisma.BrandKitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandKitCreateInput, Prisma.BrandKitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BrandKitUpdateInput, Prisma.BrandKitUncheckedUpdateInput>;
};
export type BrandKitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where: Prisma.BrandKitWhereUniqueInput;
};
export type BrandKitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandKitWhereInput;
    limit?: number;
};
export type BrandKitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
};
