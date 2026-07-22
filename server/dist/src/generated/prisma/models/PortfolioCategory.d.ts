import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PortfolioCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$PortfolioCategoryPayload>;
export type AggregatePortfolioCategory = {
    _count: PortfolioCategoryCountAggregateOutputType | null;
    _min: PortfolioCategoryMinAggregateOutputType | null;
    _max: PortfolioCategoryMaxAggregateOutputType | null;
};
export type PortfolioCategoryMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    nameEn: string | null;
    nameFr: string | null;
};
export type PortfolioCategoryMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    nameEn: string | null;
    nameFr: string | null;
};
export type PortfolioCategoryCountAggregateOutputType = {
    id: number;
    slug: number;
    nameEn: number;
    nameFr: number;
    _all: number;
};
export type PortfolioCategoryMinAggregateInputType = {
    id?: true;
    slug?: true;
    nameEn?: true;
    nameFr?: true;
};
export type PortfolioCategoryMaxAggregateInputType = {
    id?: true;
    slug?: true;
    nameEn?: true;
    nameFr?: true;
};
export type PortfolioCategoryCountAggregateInputType = {
    id?: true;
    slug?: true;
    nameEn?: true;
    nameFr?: true;
    _all?: true;
};
export type PortfolioCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioCategoryWhereInput;
    orderBy?: Prisma.PortfolioCategoryOrderByWithRelationInput | Prisma.PortfolioCategoryOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PortfolioCategoryCountAggregateInputType;
    _min?: PortfolioCategoryMinAggregateInputType;
    _max?: PortfolioCategoryMaxAggregateInputType;
};
export type GetPortfolioCategoryAggregateType<T extends PortfolioCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregatePortfolioCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePortfolioCategory[P]> : Prisma.GetScalarType<T[P], AggregatePortfolioCategory[P]>;
};
export type PortfolioCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioCategoryWhereInput;
    orderBy?: Prisma.PortfolioCategoryOrderByWithAggregationInput | Prisma.PortfolioCategoryOrderByWithAggregationInput[];
    by: Prisma.PortfolioCategoryScalarFieldEnum[] | Prisma.PortfolioCategoryScalarFieldEnum;
    having?: Prisma.PortfolioCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PortfolioCategoryCountAggregateInputType | true;
    _min?: PortfolioCategoryMinAggregateInputType;
    _max?: PortfolioCategoryMaxAggregateInputType;
};
export type PortfolioCategoryGroupByOutputType = {
    id: string;
    slug: string;
    nameEn: string;
    nameFr: string;
    _count: PortfolioCategoryCountAggregateOutputType | null;
    _min: PortfolioCategoryMinAggregateOutputType | null;
    _max: PortfolioCategoryMaxAggregateOutputType | null;
};
export type GetPortfolioCategoryGroupByPayload<T extends PortfolioCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PortfolioCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PortfolioCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PortfolioCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PortfolioCategoryGroupByOutputType[P]>;
}>>;
export type PortfolioCategoryWhereInput = {
    AND?: Prisma.PortfolioCategoryWhereInput | Prisma.PortfolioCategoryWhereInput[];
    OR?: Prisma.PortfolioCategoryWhereInput[];
    NOT?: Prisma.PortfolioCategoryWhereInput | Prisma.PortfolioCategoryWhereInput[];
    id?: Prisma.StringFilter<"PortfolioCategory"> | string;
    slug?: Prisma.StringFilter<"PortfolioCategory"> | string;
    nameEn?: Prisma.StringFilter<"PortfolioCategory"> | string;
    nameFr?: Prisma.StringFilter<"PortfolioCategory"> | string;
    projects?: Prisma.PortfolioProjectListRelationFilter;
};
export type PortfolioCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nameEn?: Prisma.SortOrder;
    nameFr?: Prisma.SortOrder;
    projects?: Prisma.PortfolioProjectOrderByRelationAggregateInput;
};
export type PortfolioCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.PortfolioCategoryWhereInput | Prisma.PortfolioCategoryWhereInput[];
    OR?: Prisma.PortfolioCategoryWhereInput[];
    NOT?: Prisma.PortfolioCategoryWhereInput | Prisma.PortfolioCategoryWhereInput[];
    nameEn?: Prisma.StringFilter<"PortfolioCategory"> | string;
    nameFr?: Prisma.StringFilter<"PortfolioCategory"> | string;
    projects?: Prisma.PortfolioProjectListRelationFilter;
}, "id" | "slug">;
export type PortfolioCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nameEn?: Prisma.SortOrder;
    nameFr?: Prisma.SortOrder;
    _count?: Prisma.PortfolioCategoryCountOrderByAggregateInput;
    _max?: Prisma.PortfolioCategoryMaxOrderByAggregateInput;
    _min?: Prisma.PortfolioCategoryMinOrderByAggregateInput;
};
export type PortfolioCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.PortfolioCategoryScalarWhereWithAggregatesInput | Prisma.PortfolioCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.PortfolioCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PortfolioCategoryScalarWhereWithAggregatesInput | Prisma.PortfolioCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PortfolioCategory"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"PortfolioCategory"> | string;
    nameEn?: Prisma.StringWithAggregatesFilter<"PortfolioCategory"> | string;
    nameFr?: Prisma.StringWithAggregatesFilter<"PortfolioCategory"> | string;
};
export type PortfolioCategoryCreateInput = {
    id?: string;
    slug: string;
    nameEn: string;
    nameFr: string;
    projects?: Prisma.PortfolioProjectCreateNestedManyWithoutCategoriesInput;
};
export type PortfolioCategoryUncheckedCreateInput = {
    id?: string;
    slug: string;
    nameEn: string;
    nameFr: string;
    projects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type PortfolioCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
    projects?: Prisma.PortfolioProjectUpdateManyWithoutCategoriesNestedInput;
};
export type PortfolioCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
    projects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type PortfolioCategoryCreateManyInput = {
    id?: string;
    slug: string;
    nameEn: string;
    nameFr: string;
};
export type PortfolioCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioCategoryListRelationFilter = {
    every?: Prisma.PortfolioCategoryWhereInput;
    some?: Prisma.PortfolioCategoryWhereInput;
    none?: Prisma.PortfolioCategoryWhereInput;
};
export type PortfolioCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PortfolioCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nameEn?: Prisma.SortOrder;
    nameFr?: Prisma.SortOrder;
};
export type PortfolioCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nameEn?: Prisma.SortOrder;
    nameFr?: Prisma.SortOrder;
};
export type PortfolioCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    nameEn?: Prisma.SortOrder;
    nameFr?: Prisma.SortOrder;
};
export type PortfolioCategoryCreateNestedManyWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.PortfolioCategoryCreateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput> | Prisma.PortfolioCategoryCreateWithoutProjectsInput[] | Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput[];
    connectOrCreate?: Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput | Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput[];
    connect?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
};
export type PortfolioCategoryUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.PortfolioCategoryCreateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput> | Prisma.PortfolioCategoryCreateWithoutProjectsInput[] | Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput[];
    connectOrCreate?: Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput | Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput[];
    connect?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
};
export type PortfolioCategoryUpdateManyWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioCategoryCreateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput> | Prisma.PortfolioCategoryCreateWithoutProjectsInput[] | Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput[];
    connectOrCreate?: Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput | Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput[];
    upsert?: Prisma.PortfolioCategoryUpsertWithWhereUniqueWithoutProjectsInput | Prisma.PortfolioCategoryUpsertWithWhereUniqueWithoutProjectsInput[];
    set?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    delete?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    connect?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    update?: Prisma.PortfolioCategoryUpdateWithWhereUniqueWithoutProjectsInput | Prisma.PortfolioCategoryUpdateWithWhereUniqueWithoutProjectsInput[];
    updateMany?: Prisma.PortfolioCategoryUpdateManyWithWhereWithoutProjectsInput | Prisma.PortfolioCategoryUpdateManyWithWhereWithoutProjectsInput[];
    deleteMany?: Prisma.PortfolioCategoryScalarWhereInput | Prisma.PortfolioCategoryScalarWhereInput[];
};
export type PortfolioCategoryUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.PortfolioCategoryCreateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput> | Prisma.PortfolioCategoryCreateWithoutProjectsInput[] | Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput[];
    connectOrCreate?: Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput | Prisma.PortfolioCategoryCreateOrConnectWithoutProjectsInput[];
    upsert?: Prisma.PortfolioCategoryUpsertWithWhereUniqueWithoutProjectsInput | Prisma.PortfolioCategoryUpsertWithWhereUniqueWithoutProjectsInput[];
    set?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    disconnect?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    delete?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    connect?: Prisma.PortfolioCategoryWhereUniqueInput | Prisma.PortfolioCategoryWhereUniqueInput[];
    update?: Prisma.PortfolioCategoryUpdateWithWhereUniqueWithoutProjectsInput | Prisma.PortfolioCategoryUpdateWithWhereUniqueWithoutProjectsInput[];
    updateMany?: Prisma.PortfolioCategoryUpdateManyWithWhereWithoutProjectsInput | Prisma.PortfolioCategoryUpdateManyWithWhereWithoutProjectsInput[];
    deleteMany?: Prisma.PortfolioCategoryScalarWhereInput | Prisma.PortfolioCategoryScalarWhereInput[];
};
export type PortfolioCategoryCreateWithoutProjectsInput = {
    id?: string;
    slug: string;
    nameEn: string;
    nameFr: string;
};
export type PortfolioCategoryUncheckedCreateWithoutProjectsInput = {
    id?: string;
    slug: string;
    nameEn: string;
    nameFr: string;
};
export type PortfolioCategoryCreateOrConnectWithoutProjectsInput = {
    where: Prisma.PortfolioCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioCategoryCreateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput>;
};
export type PortfolioCategoryUpsertWithWhereUniqueWithoutProjectsInput = {
    where: Prisma.PortfolioCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PortfolioCategoryUpdateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedUpdateWithoutProjectsInput>;
    create: Prisma.XOR<Prisma.PortfolioCategoryCreateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedCreateWithoutProjectsInput>;
};
export type PortfolioCategoryUpdateWithWhereUniqueWithoutProjectsInput = {
    where: Prisma.PortfolioCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PortfolioCategoryUpdateWithoutProjectsInput, Prisma.PortfolioCategoryUncheckedUpdateWithoutProjectsInput>;
};
export type PortfolioCategoryUpdateManyWithWhereWithoutProjectsInput = {
    where: Prisma.PortfolioCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.PortfolioCategoryUpdateManyMutationInput, Prisma.PortfolioCategoryUncheckedUpdateManyWithoutProjectsInput>;
};
export type PortfolioCategoryScalarWhereInput = {
    AND?: Prisma.PortfolioCategoryScalarWhereInput | Prisma.PortfolioCategoryScalarWhereInput[];
    OR?: Prisma.PortfolioCategoryScalarWhereInput[];
    NOT?: Prisma.PortfolioCategoryScalarWhereInput | Prisma.PortfolioCategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"PortfolioCategory"> | string;
    slug?: Prisma.StringFilter<"PortfolioCategory"> | string;
    nameEn?: Prisma.StringFilter<"PortfolioCategory"> | string;
    nameFr?: Prisma.StringFilter<"PortfolioCategory"> | string;
};
export type PortfolioCategoryUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioCategoryUncheckedUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioCategoryUncheckedUpdateManyWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    nameEn?: Prisma.StringFieldUpdateOperationsInput | string;
    nameFr?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PortfolioCategoryCountOutputType = {
    projects: number;
};
export type PortfolioCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    projects?: boolean | PortfolioCategoryCountOutputTypeCountProjectsArgs;
};
export type PortfolioCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type PortfolioCategoryCountOutputTypeCountProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioProjectWhereInput;
};
export type PortfolioCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    nameEn?: boolean;
    nameFr?: boolean;
    projects?: boolean | Prisma.PortfolioCategory$projectsArgs<ExtArgs>;
    _count?: boolean | Prisma.PortfolioCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["portfolioCategory"]>;
export type PortfolioCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    nameEn?: boolean;
    nameFr?: boolean;
}, ExtArgs["result"]["portfolioCategory"]>;
export type PortfolioCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    nameEn?: boolean;
    nameFr?: boolean;
}, ExtArgs["result"]["portfolioCategory"]>;
export type PortfolioCategorySelectScalar = {
    id?: boolean;
    slug?: boolean;
    nameEn?: boolean;
    nameFr?: boolean;
};
export type PortfolioCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "nameEn" | "nameFr", ExtArgs["result"]["portfolioCategory"]>;
export type PortfolioCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    projects?: boolean | Prisma.PortfolioCategory$projectsArgs<ExtArgs>;
    _count?: boolean | Prisma.PortfolioCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PortfolioCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PortfolioCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PortfolioCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PortfolioCategory";
    objects: {
        projects: Prisma.$PortfolioProjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        nameEn: string;
        nameFr: string;
    }, ExtArgs["result"]["portfolioCategory"]>;
    composites: {};
};
export type PortfolioCategoryGetPayload<S extends boolean | null | undefined | PortfolioCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload, S>;
export type PortfolioCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PortfolioCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PortfolioCategoryCountAggregateInputType | true;
};
export interface PortfolioCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PortfolioCategory'];
        meta: {
            name: 'PortfolioCategory';
        };
    };
    findUnique<T extends PortfolioCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PortfolioCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PortfolioCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, PortfolioCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PortfolioCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PortfolioCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PortfolioCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, PortfolioCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PortfolioCategoryCreateArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PortfolioCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, PortfolioCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PortfolioCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PortfolioCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PortfolioCategoryDeleteArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PortfolioCategoryUpdateArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PortfolioCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, PortfolioCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PortfolioCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PortfolioCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PortfolioCategoryUpsertArgs>(args: Prisma.SelectSubset<T, PortfolioCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__PortfolioCategoryClient<runtime.Types.Result.GetResult<Prisma.$PortfolioCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PortfolioCategoryCountArgs>(args?: Prisma.Subset<T, PortfolioCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PortfolioCategoryCountAggregateOutputType> : number>;
    aggregate<T extends PortfolioCategoryAggregateArgs>(args: Prisma.Subset<T, PortfolioCategoryAggregateArgs>): Prisma.PrismaPromise<GetPortfolioCategoryAggregateType<T>>;
    groupBy<T extends PortfolioCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PortfolioCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: PortfolioCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PortfolioCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PortfolioCategoryFieldRefs;
}
export interface Prisma__PortfolioCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    projects<T extends Prisma.PortfolioCategory$projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PortfolioCategory$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PortfolioCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"PortfolioCategory", 'String'>;
    readonly slug: Prisma.FieldRef<"PortfolioCategory", 'String'>;
    readonly nameEn: Prisma.FieldRef<"PortfolioCategory", 'String'>;
    readonly nameFr: Prisma.FieldRef<"PortfolioCategory", 'String'>;
}
export type PortfolioCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    where: Prisma.PortfolioCategoryWhereUniqueInput;
};
export type PortfolioCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    where: Prisma.PortfolioCategoryWhereUniqueInput;
};
export type PortfolioCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortfolioCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortfolioCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortfolioCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioCategoryCreateInput, Prisma.PortfolioCategoryUncheckedCreateInput>;
};
export type PortfolioCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PortfolioCategoryCreateManyInput | Prisma.PortfolioCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    data: Prisma.PortfolioCategoryCreateManyInput | Prisma.PortfolioCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PortfolioCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioCategoryUpdateInput, Prisma.PortfolioCategoryUncheckedUpdateInput>;
    where: Prisma.PortfolioCategoryWhereUniqueInput;
};
export type PortfolioCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PortfolioCategoryUpdateManyMutationInput, Prisma.PortfolioCategoryUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioCategoryWhereInput;
    limit?: number;
};
export type PortfolioCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PortfolioCategoryUpdateManyMutationInput, Prisma.PortfolioCategoryUncheckedUpdateManyInput>;
    where?: Prisma.PortfolioCategoryWhereInput;
    limit?: number;
};
export type PortfolioCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    where: Prisma.PortfolioCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PortfolioCategoryCreateInput, Prisma.PortfolioCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PortfolioCategoryUpdateInput, Prisma.PortfolioCategoryUncheckedUpdateInput>;
};
export type PortfolioCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
    where: Prisma.PortfolioCategoryWhereUniqueInput;
};
export type PortfolioCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioCategoryWhereInput;
    limit?: number;
};
export type PortfolioCategory$projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PortfolioCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PortfolioCategorySelect<ExtArgs> | null;
    omit?: Prisma.PortfolioCategoryOmit<ExtArgs> | null;
    include?: Prisma.PortfolioCategoryInclude<ExtArgs> | null;
};
