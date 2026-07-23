import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactSubmissionPayload>;
export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null;
    _min: ContactSubmissionMinAggregateOutputType | null;
    _max: ContactSubmissionMaxAggregateOutputType | null;
};
export type ContactSubmissionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    company: string | null;
    email: string | null;
    phone: string | null;
    service: string | null;
    budget: string | null;
    launchDate: string | null;
    website: string | null;
    message: string | null;
    source: string | null;
    createdAt: Date | null;
    contactedAt: Date | null;
};
export type ContactSubmissionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    company: string | null;
    email: string | null;
    phone: string | null;
    service: string | null;
    budget: string | null;
    launchDate: string | null;
    website: string | null;
    message: string | null;
    source: string | null;
    createdAt: Date | null;
    contactedAt: Date | null;
};
export type ContactSubmissionCountAggregateOutputType = {
    id: number;
    name: number;
    company: number;
    email: number;
    phone: number;
    service: number;
    budget: number;
    launchDate: number;
    website: number;
    message: number;
    source: number;
    createdAt: number;
    contactedAt: number;
    _all: number;
};
export type ContactSubmissionMinAggregateInputType = {
    id?: true;
    name?: true;
    company?: true;
    email?: true;
    phone?: true;
    service?: true;
    budget?: true;
    launchDate?: true;
    website?: true;
    message?: true;
    source?: true;
    createdAt?: true;
    contactedAt?: true;
};
export type ContactSubmissionMaxAggregateInputType = {
    id?: true;
    name?: true;
    company?: true;
    email?: true;
    phone?: true;
    service?: true;
    budget?: true;
    launchDate?: true;
    website?: true;
    message?: true;
    source?: true;
    createdAt?: true;
    contactedAt?: true;
};
export type ContactSubmissionCountAggregateInputType = {
    id?: true;
    name?: true;
    company?: true;
    email?: true;
    phone?: true;
    service?: true;
    budget?: true;
    launchDate?: true;
    website?: true;
    message?: true;
    source?: true;
    createdAt?: true;
    contactedAt?: true;
    _all?: true;
};
export type ContactSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactSubmissionWhereInput;
    orderBy?: Prisma.ContactSubmissionOrderByWithRelationInput | Prisma.ContactSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.ContactSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactSubmissionCountAggregateInputType;
    _min?: ContactSubmissionMinAggregateInputType;
    _max?: ContactSubmissionMaxAggregateInputType;
};
export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContactSubmission[P]> : Prisma.GetScalarType<T[P], AggregateContactSubmission[P]>;
};
export type ContactSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactSubmissionWhereInput;
    orderBy?: Prisma.ContactSubmissionOrderByWithAggregationInput | Prisma.ContactSubmissionOrderByWithAggregationInput[];
    by: Prisma.ContactSubmissionScalarFieldEnum[] | Prisma.ContactSubmissionScalarFieldEnum;
    having?: Prisma.ContactSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactSubmissionCountAggregateInputType | true;
    _min?: ContactSubmissionMinAggregateInputType;
    _max?: ContactSubmissionMaxAggregateInputType;
};
export type ContactSubmissionGroupByOutputType = {
    id: string;
    name: string;
    company: string | null;
    email: string;
    phone: string | null;
    service: string;
    budget: string | null;
    launchDate: string | null;
    website: string | null;
    message: string;
    source: string | null;
    createdAt: Date;
    contactedAt: Date | null;
    _count: ContactSubmissionCountAggregateOutputType | null;
    _min: ContactSubmissionMinAggregateOutputType | null;
    _max: ContactSubmissionMaxAggregateOutputType | null;
};
export type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>;
}>>;
export type ContactSubmissionWhereInput = {
    AND?: Prisma.ContactSubmissionWhereInput | Prisma.ContactSubmissionWhereInput[];
    OR?: Prisma.ContactSubmissionWhereInput[];
    NOT?: Prisma.ContactSubmissionWhereInput | Prisma.ContactSubmissionWhereInput[];
    id?: Prisma.StringFilter<"ContactSubmission"> | string;
    name?: Prisma.StringFilter<"ContactSubmission"> | string;
    company?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    email?: Prisma.StringFilter<"ContactSubmission"> | string;
    phone?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    service?: Prisma.StringFilter<"ContactSubmission"> | string;
    budget?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    launchDate?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    website?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    message?: Prisma.StringFilter<"ContactSubmission"> | string;
    source?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ContactSubmission"> | Date | string;
    contactedAt?: Prisma.DateTimeNullableFilter<"ContactSubmission"> | Date | string | null;
};
export type ContactSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    company?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    service?: Prisma.SortOrder;
    budget?: Prisma.SortOrderInput | Prisma.SortOrder;
    launchDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ContactSubmissionWhereInput | Prisma.ContactSubmissionWhereInput[];
    OR?: Prisma.ContactSubmissionWhereInput[];
    NOT?: Prisma.ContactSubmissionWhereInput | Prisma.ContactSubmissionWhereInput[];
    name?: Prisma.StringFilter<"ContactSubmission"> | string;
    company?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    email?: Prisma.StringFilter<"ContactSubmission"> | string;
    phone?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    service?: Prisma.StringFilter<"ContactSubmission"> | string;
    budget?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    launchDate?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    website?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    message?: Prisma.StringFilter<"ContactSubmission"> | string;
    source?: Prisma.StringNullableFilter<"ContactSubmission"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ContactSubmission"> | Date | string;
    contactedAt?: Prisma.DateTimeNullableFilter<"ContactSubmission"> | Date | string | null;
}, "id">;
export type ContactSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    company?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    service?: Prisma.SortOrder;
    budget?: Prisma.SortOrderInput | Prisma.SortOrder;
    launchDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ContactSubmissionCountOrderByAggregateInput;
    _max?: Prisma.ContactSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.ContactSubmissionMinOrderByAggregateInput;
};
export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactSubmissionScalarWhereWithAggregatesInput | Prisma.ContactSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactSubmissionScalarWhereWithAggregatesInput | Prisma.ContactSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ContactSubmission"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ContactSubmission"> | string;
    company?: Prisma.StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"ContactSubmission"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null;
    service?: Prisma.StringWithAggregatesFilter<"ContactSubmission"> | string;
    budget?: Prisma.StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null;
    launchDate?: Prisma.StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null;
    website?: Prisma.StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null;
    message?: Prisma.StringWithAggregatesFilter<"ContactSubmission"> | string;
    source?: Prisma.StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string;
    contactedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ContactSubmission"> | Date | string | null;
};
export type ContactSubmissionCreateInput = {
    id?: string;
    name: string;
    company?: string | null;
    email: string;
    phone?: string | null;
    service: string;
    budget?: string | null;
    launchDate?: string | null;
    website?: string | null;
    message: string;
    source?: string | null;
    createdAt?: Date | string;
    contactedAt?: Date | string | null;
};
export type ContactSubmissionUncheckedCreateInput = {
    id?: string;
    name: string;
    company?: string | null;
    email: string;
    phone?: string | null;
    service: string;
    budget?: string | null;
    launchDate?: string | null;
    website?: string | null;
    message: string;
    source?: string | null;
    createdAt?: Date | string;
    contactedAt?: Date | string | null;
};
export type ContactSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContactSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContactSubmissionCreateManyInput = {
    id?: string;
    name: string;
    company?: string | null;
    email: string;
    phone?: string | null;
    service: string;
    budget?: string | null;
    launchDate?: string | null;
    website?: string | null;
    message: string;
    source?: string | null;
    createdAt?: Date | string;
    contactedAt?: Date | string | null;
};
export type ContactSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    service?: Prisma.StringFieldUpdateOperationsInput | string;
    budget?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContactSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactedAt?: Prisma.SortOrder;
};
export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactedAt?: Prisma.SortOrder;
};
export type ContactSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    company?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    service?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
    launchDate?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactedAt?: Prisma.SortOrder;
};
export type ContactSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    company?: boolean;
    email?: boolean;
    phone?: boolean;
    service?: boolean;
    budget?: boolean;
    launchDate?: boolean;
    website?: boolean;
    message?: boolean;
    source?: boolean;
    createdAt?: boolean;
    contactedAt?: boolean;
}, ExtArgs["result"]["contactSubmission"]>;
export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    company?: boolean;
    email?: boolean;
    phone?: boolean;
    service?: boolean;
    budget?: boolean;
    launchDate?: boolean;
    website?: boolean;
    message?: boolean;
    source?: boolean;
    createdAt?: boolean;
    contactedAt?: boolean;
}, ExtArgs["result"]["contactSubmission"]>;
export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    company?: boolean;
    email?: boolean;
    phone?: boolean;
    service?: boolean;
    budget?: boolean;
    launchDate?: boolean;
    website?: boolean;
    message?: boolean;
    source?: boolean;
    createdAt?: boolean;
    contactedAt?: boolean;
}, ExtArgs["result"]["contactSubmission"]>;
export type ContactSubmissionSelectScalar = {
    id?: boolean;
    name?: boolean;
    company?: boolean;
    email?: boolean;
    phone?: boolean;
    service?: boolean;
    budget?: boolean;
    launchDate?: boolean;
    website?: boolean;
    message?: boolean;
    source?: boolean;
    createdAt?: boolean;
    contactedAt?: boolean;
};
export type ContactSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "company" | "email" | "phone" | "service" | "budget" | "launchDate" | "website" | "message" | "source" | "createdAt" | "contactedAt", ExtArgs["result"]["contactSubmission"]>;
export type $ContactSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContactSubmission";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        company: string | null;
        email: string;
        phone: string | null;
        service: string;
        budget: string | null;
        launchDate: string | null;
        website: string | null;
        message: string;
        source: string | null;
        createdAt: Date;
        contactedAt: Date | null;
    }, ExtArgs["result"]["contactSubmission"]>;
    composites: {};
};
export type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload, S>;
export type ContactSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactSubmissionCountAggregateInputType | true;
};
export interface ContactSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'];
        meta: {
            name: 'ContactSubmission';
        };
    };
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactSubmissionCreateArgs>(args: Prisma.SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactSubmissionClient<runtime.Types.Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactSubmissionCountArgs>(args?: Prisma.Subset<T, ContactSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType> : number>;
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Prisma.Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>;
    groupBy<T extends ContactSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactSubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactSubmissionFieldRefs;
}
export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly name: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly company: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly email: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly phone: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly service: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly budget: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly launchDate: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly website: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly message: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly source: Prisma.FieldRef<"ContactSubmission", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ContactSubmission", 'DateTime'>;
    readonly contactedAt: Prisma.FieldRef<"ContactSubmission", 'DateTime'>;
}
export type ContactSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where: Prisma.ContactSubmissionWhereUniqueInput;
};
export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where: Prisma.ContactSubmissionWhereUniqueInput;
};
export type ContactSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where?: Prisma.ContactSubmissionWhereInput;
    orderBy?: Prisma.ContactSubmissionOrderByWithRelationInput | Prisma.ContactSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.ContactSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactSubmissionScalarFieldEnum | Prisma.ContactSubmissionScalarFieldEnum[];
};
export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where?: Prisma.ContactSubmissionWhereInput;
    orderBy?: Prisma.ContactSubmissionOrderByWithRelationInput | Prisma.ContactSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.ContactSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactSubmissionScalarFieldEnum | Prisma.ContactSubmissionScalarFieldEnum[];
};
export type ContactSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where?: Prisma.ContactSubmissionWhereInput;
    orderBy?: Prisma.ContactSubmissionOrderByWithRelationInput | Prisma.ContactSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.ContactSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactSubmissionScalarFieldEnum | Prisma.ContactSubmissionScalarFieldEnum[];
};
export type ContactSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactSubmissionCreateInput, Prisma.ContactSubmissionUncheckedCreateInput>;
};
export type ContactSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactSubmissionCreateManyInput | Prisma.ContactSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    data: Prisma.ContactSubmissionCreateManyInput | Prisma.ContactSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactSubmissionUpdateInput, Prisma.ContactSubmissionUncheckedUpdateInput>;
    where: Prisma.ContactSubmissionWhereUniqueInput;
};
export type ContactSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactSubmissionUpdateManyMutationInput, Prisma.ContactSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.ContactSubmissionWhereInput;
    limit?: number;
};
export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactSubmissionUpdateManyMutationInput, Prisma.ContactSubmissionUncheckedUpdateManyInput>;
    where?: Prisma.ContactSubmissionWhereInput;
    limit?: number;
};
export type ContactSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where: Prisma.ContactSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactSubmissionCreateInput, Prisma.ContactSubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactSubmissionUpdateInput, Prisma.ContactSubmissionUncheckedUpdateInput>;
};
export type ContactSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
    where: Prisma.ContactSubmissionWhereUniqueInput;
};
export type ContactSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactSubmissionWhereInput;
    limit?: number;
};
export type ContactSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.ContactSubmissionOmit<ExtArgs> | null;
};
