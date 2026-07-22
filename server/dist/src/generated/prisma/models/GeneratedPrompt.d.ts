import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GeneratedPromptModel = runtime.Types.Result.DefaultSelection<Prisma.$GeneratedPromptPayload>;
export type AggregateGeneratedPrompt = {
    _count: GeneratedPromptCountAggregateOutputType | null;
    _min: GeneratedPromptMinAggregateOutputType | null;
    _max: GeneratedPromptMaxAggregateOutputType | null;
};
export type GeneratedPromptMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    briefId: string | null;
};
export type GeneratedPromptMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    briefId: string | null;
};
export type GeneratedPromptCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    briefId: number;
    _all: number;
};
export type GeneratedPromptMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    briefId?: true;
};
export type GeneratedPromptMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    briefId?: true;
};
export type GeneratedPromptCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    briefId?: true;
    _all?: true;
};
export type GeneratedPromptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedPromptWhereInput;
    orderBy?: Prisma.GeneratedPromptOrderByWithRelationInput | Prisma.GeneratedPromptOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GeneratedPromptCountAggregateInputType;
    _min?: GeneratedPromptMinAggregateInputType;
    _max?: GeneratedPromptMaxAggregateInputType;
};
export type GetGeneratedPromptAggregateType<T extends GeneratedPromptAggregateArgs> = {
    [P in keyof T & keyof AggregateGeneratedPrompt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGeneratedPrompt[P]> : Prisma.GetScalarType<T[P], AggregateGeneratedPrompt[P]>;
};
export type GeneratedPromptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedPromptWhereInput;
    orderBy?: Prisma.GeneratedPromptOrderByWithAggregationInput | Prisma.GeneratedPromptOrderByWithAggregationInput[];
    by: Prisma.GeneratedPromptScalarFieldEnum[] | Prisma.GeneratedPromptScalarFieldEnum;
    having?: Prisma.GeneratedPromptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GeneratedPromptCountAggregateInputType | true;
    _min?: GeneratedPromptMinAggregateInputType;
    _max?: GeneratedPromptMaxAggregateInputType;
};
export type GeneratedPromptGroupByOutputType = {
    id: string;
    content: string;
    createdAt: Date;
    briefId: string;
    _count: GeneratedPromptCountAggregateOutputType | null;
    _min: GeneratedPromptMinAggregateOutputType | null;
    _max: GeneratedPromptMaxAggregateOutputType | null;
};
export type GetGeneratedPromptGroupByPayload<T extends GeneratedPromptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GeneratedPromptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GeneratedPromptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GeneratedPromptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GeneratedPromptGroupByOutputType[P]>;
}>>;
export type GeneratedPromptWhereInput = {
    AND?: Prisma.GeneratedPromptWhereInput | Prisma.GeneratedPromptWhereInput[];
    OR?: Prisma.GeneratedPromptWhereInput[];
    NOT?: Prisma.GeneratedPromptWhereInput | Prisma.GeneratedPromptWhereInput[];
    id?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    content?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    createdAt?: Prisma.DateTimeFilter<"GeneratedPrompt"> | Date | string;
    briefId?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    brief?: Prisma.XOR<Prisma.DiscoveryBriefScalarRelationFilter, Prisma.DiscoveryBriefWhereInput>;
};
export type GeneratedPromptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    brief?: Prisma.DiscoveryBriefOrderByWithRelationInput;
};
export type GeneratedPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GeneratedPromptWhereInput | Prisma.GeneratedPromptWhereInput[];
    OR?: Prisma.GeneratedPromptWhereInput[];
    NOT?: Prisma.GeneratedPromptWhereInput | Prisma.GeneratedPromptWhereInput[];
    content?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    createdAt?: Prisma.DateTimeFilter<"GeneratedPrompt"> | Date | string;
    briefId?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    brief?: Prisma.XOR<Prisma.DiscoveryBriefScalarRelationFilter, Prisma.DiscoveryBriefWhereInput>;
}, "id">;
export type GeneratedPromptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    _count?: Prisma.GeneratedPromptCountOrderByAggregateInput;
    _max?: Prisma.GeneratedPromptMaxOrderByAggregateInput;
    _min?: Prisma.GeneratedPromptMinOrderByAggregateInput;
};
export type GeneratedPromptScalarWhereWithAggregatesInput = {
    AND?: Prisma.GeneratedPromptScalarWhereWithAggregatesInput | Prisma.GeneratedPromptScalarWhereWithAggregatesInput[];
    OR?: Prisma.GeneratedPromptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GeneratedPromptScalarWhereWithAggregatesInput | Prisma.GeneratedPromptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GeneratedPrompt"> | string;
    content?: Prisma.StringWithAggregatesFilter<"GeneratedPrompt"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GeneratedPrompt"> | Date | string;
    briefId?: Prisma.StringWithAggregatesFilter<"GeneratedPrompt"> | string;
};
export type GeneratedPromptCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    brief: Prisma.DiscoveryBriefCreateNestedOneWithoutGeneratedPromptsInput;
};
export type GeneratedPromptUncheckedCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    briefId: string;
};
export type GeneratedPromptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brief?: Prisma.DiscoveryBriefUpdateOneRequiredWithoutGeneratedPromptsNestedInput;
};
export type GeneratedPromptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    briefId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type GeneratedPromptCreateManyInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    briefId: string;
};
export type GeneratedPromptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedPromptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    briefId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type GeneratedPromptListRelationFilter = {
    every?: Prisma.GeneratedPromptWhereInput;
    some?: Prisma.GeneratedPromptWhereInput;
    none?: Prisma.GeneratedPromptWhereInput;
};
export type GeneratedPromptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GeneratedPromptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
};
export type GeneratedPromptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
};
export type GeneratedPromptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
};
export type GeneratedPromptCreateNestedManyWithoutBriefInput = {
    create?: Prisma.XOR<Prisma.GeneratedPromptCreateWithoutBriefInput, Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput> | Prisma.GeneratedPromptCreateWithoutBriefInput[] | Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput | Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput[];
    createMany?: Prisma.GeneratedPromptCreateManyBriefInputEnvelope;
    connect?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
};
export type GeneratedPromptUncheckedCreateNestedManyWithoutBriefInput = {
    create?: Prisma.XOR<Prisma.GeneratedPromptCreateWithoutBriefInput, Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput> | Prisma.GeneratedPromptCreateWithoutBriefInput[] | Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput | Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput[];
    createMany?: Prisma.GeneratedPromptCreateManyBriefInputEnvelope;
    connect?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
};
export type GeneratedPromptUpdateManyWithoutBriefNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedPromptCreateWithoutBriefInput, Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput> | Prisma.GeneratedPromptCreateWithoutBriefInput[] | Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput | Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput[];
    upsert?: Prisma.GeneratedPromptUpsertWithWhereUniqueWithoutBriefInput | Prisma.GeneratedPromptUpsertWithWhereUniqueWithoutBriefInput[];
    createMany?: Prisma.GeneratedPromptCreateManyBriefInputEnvelope;
    set?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    disconnect?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    delete?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    connect?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    update?: Prisma.GeneratedPromptUpdateWithWhereUniqueWithoutBriefInput | Prisma.GeneratedPromptUpdateWithWhereUniqueWithoutBriefInput[];
    updateMany?: Prisma.GeneratedPromptUpdateManyWithWhereWithoutBriefInput | Prisma.GeneratedPromptUpdateManyWithWhereWithoutBriefInput[];
    deleteMany?: Prisma.GeneratedPromptScalarWhereInput | Prisma.GeneratedPromptScalarWhereInput[];
};
export type GeneratedPromptUncheckedUpdateManyWithoutBriefNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedPromptCreateWithoutBriefInput, Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput> | Prisma.GeneratedPromptCreateWithoutBriefInput[] | Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput | Prisma.GeneratedPromptCreateOrConnectWithoutBriefInput[];
    upsert?: Prisma.GeneratedPromptUpsertWithWhereUniqueWithoutBriefInput | Prisma.GeneratedPromptUpsertWithWhereUniqueWithoutBriefInput[];
    createMany?: Prisma.GeneratedPromptCreateManyBriefInputEnvelope;
    set?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    disconnect?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    delete?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    connect?: Prisma.GeneratedPromptWhereUniqueInput | Prisma.GeneratedPromptWhereUniqueInput[];
    update?: Prisma.GeneratedPromptUpdateWithWhereUniqueWithoutBriefInput | Prisma.GeneratedPromptUpdateWithWhereUniqueWithoutBriefInput[];
    updateMany?: Prisma.GeneratedPromptUpdateManyWithWhereWithoutBriefInput | Prisma.GeneratedPromptUpdateManyWithWhereWithoutBriefInput[];
    deleteMany?: Prisma.GeneratedPromptScalarWhereInput | Prisma.GeneratedPromptScalarWhereInput[];
};
export type GeneratedPromptCreateWithoutBriefInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
};
export type GeneratedPromptUncheckedCreateWithoutBriefInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
};
export type GeneratedPromptCreateOrConnectWithoutBriefInput = {
    where: Prisma.GeneratedPromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedPromptCreateWithoutBriefInput, Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput>;
};
export type GeneratedPromptCreateManyBriefInputEnvelope = {
    data: Prisma.GeneratedPromptCreateManyBriefInput | Prisma.GeneratedPromptCreateManyBriefInput[];
    skipDuplicates?: boolean;
};
export type GeneratedPromptUpsertWithWhereUniqueWithoutBriefInput = {
    where: Prisma.GeneratedPromptWhereUniqueInput;
    update: Prisma.XOR<Prisma.GeneratedPromptUpdateWithoutBriefInput, Prisma.GeneratedPromptUncheckedUpdateWithoutBriefInput>;
    create: Prisma.XOR<Prisma.GeneratedPromptCreateWithoutBriefInput, Prisma.GeneratedPromptUncheckedCreateWithoutBriefInput>;
};
export type GeneratedPromptUpdateWithWhereUniqueWithoutBriefInput = {
    where: Prisma.GeneratedPromptWhereUniqueInput;
    data: Prisma.XOR<Prisma.GeneratedPromptUpdateWithoutBriefInput, Prisma.GeneratedPromptUncheckedUpdateWithoutBriefInput>;
};
export type GeneratedPromptUpdateManyWithWhereWithoutBriefInput = {
    where: Prisma.GeneratedPromptScalarWhereInput;
    data: Prisma.XOR<Prisma.GeneratedPromptUpdateManyMutationInput, Prisma.GeneratedPromptUncheckedUpdateManyWithoutBriefInput>;
};
export type GeneratedPromptScalarWhereInput = {
    AND?: Prisma.GeneratedPromptScalarWhereInput | Prisma.GeneratedPromptScalarWhereInput[];
    OR?: Prisma.GeneratedPromptScalarWhereInput[];
    NOT?: Prisma.GeneratedPromptScalarWhereInput | Prisma.GeneratedPromptScalarWhereInput[];
    id?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    content?: Prisma.StringFilter<"GeneratedPrompt"> | string;
    createdAt?: Prisma.DateTimeFilter<"GeneratedPrompt"> | Date | string;
    briefId?: Prisma.StringFilter<"GeneratedPrompt"> | string;
};
export type GeneratedPromptCreateManyBriefInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
};
export type GeneratedPromptUpdateWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedPromptUncheckedUpdateWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedPromptUncheckedUpdateManyWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedPromptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["generatedPrompt"]>;
export type GeneratedPromptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["generatedPrompt"]>;
export type GeneratedPromptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["generatedPrompt"]>;
export type GeneratedPromptSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    briefId?: boolean;
};
export type GeneratedPromptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "createdAt" | "briefId", ExtArgs["result"]["generatedPrompt"]>;
export type GeneratedPromptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type GeneratedPromptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type GeneratedPromptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type $GeneratedPromptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GeneratedPrompt";
    objects: {
        brief: Prisma.$DiscoveryBriefPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        content: string;
        createdAt: Date;
        briefId: string;
    }, ExtArgs["result"]["generatedPrompt"]>;
    composites: {};
};
export type GeneratedPromptGetPayload<S extends boolean | null | undefined | GeneratedPromptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload, S>;
export type GeneratedPromptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GeneratedPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GeneratedPromptCountAggregateInputType | true;
};
export interface GeneratedPromptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GeneratedPrompt'];
        meta: {
            name: 'GeneratedPrompt';
        };
    };
    findUnique<T extends GeneratedPromptFindUniqueArgs>(args: Prisma.SelectSubset<T, GeneratedPromptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GeneratedPromptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GeneratedPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GeneratedPromptFindFirstArgs>(args?: Prisma.SelectSubset<T, GeneratedPromptFindFirstArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GeneratedPromptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GeneratedPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GeneratedPromptFindManyArgs>(args?: Prisma.SelectSubset<T, GeneratedPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GeneratedPromptCreateArgs>(args: Prisma.SelectSubset<T, GeneratedPromptCreateArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GeneratedPromptCreateManyArgs>(args?: Prisma.SelectSubset<T, GeneratedPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GeneratedPromptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GeneratedPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GeneratedPromptDeleteArgs>(args: Prisma.SelectSubset<T, GeneratedPromptDeleteArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GeneratedPromptUpdateArgs>(args: Prisma.SelectSubset<T, GeneratedPromptUpdateArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GeneratedPromptDeleteManyArgs>(args?: Prisma.SelectSubset<T, GeneratedPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GeneratedPromptUpdateManyArgs>(args: Prisma.SelectSubset<T, GeneratedPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GeneratedPromptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GeneratedPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GeneratedPromptUpsertArgs>(args: Prisma.SelectSubset<T, GeneratedPromptUpsertArgs<ExtArgs>>): Prisma.Prisma__GeneratedPromptClient<runtime.Types.Result.GetResult<Prisma.$GeneratedPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GeneratedPromptCountArgs>(args?: Prisma.Subset<T, GeneratedPromptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GeneratedPromptCountAggregateOutputType> : number>;
    aggregate<T extends GeneratedPromptAggregateArgs>(args: Prisma.Subset<T, GeneratedPromptAggregateArgs>): Prisma.PrismaPromise<GetGeneratedPromptAggregateType<T>>;
    groupBy<T extends GeneratedPromptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GeneratedPromptGroupByArgs['orderBy'];
    } : {
        orderBy?: GeneratedPromptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GeneratedPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GeneratedPromptFieldRefs;
}
export interface Prisma__GeneratedPromptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brief<T extends Prisma.DiscoveryBriefDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DiscoveryBriefDefaultArgs<ExtArgs>>): Prisma.Prisma__DiscoveryBriefClient<runtime.Types.Result.GetResult<Prisma.$DiscoveryBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GeneratedPromptFieldRefs {
    readonly id: Prisma.FieldRef<"GeneratedPrompt", 'String'>;
    readonly content: Prisma.FieldRef<"GeneratedPrompt", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GeneratedPrompt", 'DateTime'>;
    readonly briefId: Prisma.FieldRef<"GeneratedPrompt", 'String'>;
}
export type GeneratedPromptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where: Prisma.GeneratedPromptWhereUniqueInput;
};
export type GeneratedPromptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where: Prisma.GeneratedPromptWhereUniqueInput;
};
export type GeneratedPromptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where?: Prisma.GeneratedPromptWhereInput;
    orderBy?: Prisma.GeneratedPromptOrderByWithRelationInput | Prisma.GeneratedPromptOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedPromptScalarFieldEnum | Prisma.GeneratedPromptScalarFieldEnum[];
};
export type GeneratedPromptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where?: Prisma.GeneratedPromptWhereInput;
    orderBy?: Prisma.GeneratedPromptOrderByWithRelationInput | Prisma.GeneratedPromptOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedPromptScalarFieldEnum | Prisma.GeneratedPromptScalarFieldEnum[];
};
export type GeneratedPromptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where?: Prisma.GeneratedPromptWhereInput;
    orderBy?: Prisma.GeneratedPromptOrderByWithRelationInput | Prisma.GeneratedPromptOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedPromptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedPromptScalarFieldEnum | Prisma.GeneratedPromptScalarFieldEnum[];
};
export type GeneratedPromptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedPromptCreateInput, Prisma.GeneratedPromptUncheckedCreateInput>;
};
export type GeneratedPromptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GeneratedPromptCreateManyInput | Prisma.GeneratedPromptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GeneratedPromptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    data: Prisma.GeneratedPromptCreateManyInput | Prisma.GeneratedPromptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GeneratedPromptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GeneratedPromptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedPromptUpdateInput, Prisma.GeneratedPromptUncheckedUpdateInput>;
    where: Prisma.GeneratedPromptWhereUniqueInput;
};
export type GeneratedPromptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GeneratedPromptUpdateManyMutationInput, Prisma.GeneratedPromptUncheckedUpdateManyInput>;
    where?: Prisma.GeneratedPromptWhereInput;
    limit?: number;
};
export type GeneratedPromptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedPromptUpdateManyMutationInput, Prisma.GeneratedPromptUncheckedUpdateManyInput>;
    where?: Prisma.GeneratedPromptWhereInput;
    limit?: number;
    include?: Prisma.GeneratedPromptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GeneratedPromptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where: Prisma.GeneratedPromptWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedPromptCreateInput, Prisma.GeneratedPromptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GeneratedPromptUpdateInput, Prisma.GeneratedPromptUncheckedUpdateInput>;
};
export type GeneratedPromptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
    where: Prisma.GeneratedPromptWhereUniqueInput;
};
export type GeneratedPromptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedPromptWhereInput;
    limit?: number;
};
export type GeneratedPromptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedPromptSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedPromptOmit<ExtArgs> | null;
    include?: Prisma.GeneratedPromptInclude<ExtArgs> | null;
};
