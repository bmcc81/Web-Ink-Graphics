import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActivityLogEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivityLogEntryPayload>;
export type AggregateActivityLogEntry = {
    _count: ActivityLogEntryCountAggregateOutputType | null;
    _min: ActivityLogEntryMinAggregateOutputType | null;
    _max: ActivityLogEntryMaxAggregateOutputType | null;
};
export type ActivityLogEntryMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    entityType: $Enums.ActivityEntityType | null;
    entityId: string | null;
    action: $Enums.ActivityAction | null;
    summary: string | null;
    actorId: string | null;
    createdAt: Date | null;
};
export type ActivityLogEntryMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    entityType: $Enums.ActivityEntityType | null;
    entityId: string | null;
    action: $Enums.ActivityAction | null;
    summary: string | null;
    actorId: string | null;
    createdAt: Date | null;
};
export type ActivityLogEntryCountAggregateOutputType = {
    id: number;
    organizationId: number;
    entityType: number;
    entityId: number;
    action: number;
    summary: number;
    actorId: number;
    createdAt: number;
    _all: number;
};
export type ActivityLogEntryMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    entityType?: true;
    entityId?: true;
    action?: true;
    summary?: true;
    actorId?: true;
    createdAt?: true;
};
export type ActivityLogEntryMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    entityType?: true;
    entityId?: true;
    action?: true;
    summary?: true;
    actorId?: true;
    createdAt?: true;
};
export type ActivityLogEntryCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    entityType?: true;
    entityId?: true;
    action?: true;
    summary?: true;
    actorId?: true;
    createdAt?: true;
    _all?: true;
};
export type ActivityLogEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogEntryWhereInput;
    orderBy?: Prisma.ActivityLogEntryOrderByWithRelationInput | Prisma.ActivityLogEntryOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActivityLogEntryCountAggregateInputType;
    _min?: ActivityLogEntryMinAggregateInputType;
    _max?: ActivityLogEntryMaxAggregateInputType;
};
export type GetActivityLogEntryAggregateType<T extends ActivityLogEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateActivityLogEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivityLogEntry[P]> : Prisma.GetScalarType<T[P], AggregateActivityLogEntry[P]>;
};
export type ActivityLogEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogEntryWhereInput;
    orderBy?: Prisma.ActivityLogEntryOrderByWithAggregationInput | Prisma.ActivityLogEntryOrderByWithAggregationInput[];
    by: Prisma.ActivityLogEntryScalarFieldEnum[] | Prisma.ActivityLogEntryScalarFieldEnum;
    having?: Prisma.ActivityLogEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityLogEntryCountAggregateInputType | true;
    _min?: ActivityLogEntryMinAggregateInputType;
    _max?: ActivityLogEntryMaxAggregateInputType;
};
export type ActivityLogEntryGroupByOutputType = {
    id: string;
    organizationId: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    actorId: string | null;
    createdAt: Date;
    _count: ActivityLogEntryCountAggregateOutputType | null;
    _min: ActivityLogEntryMinAggregateOutputType | null;
    _max: ActivityLogEntryMaxAggregateOutputType | null;
};
export type GetActivityLogEntryGroupByPayload<T extends ActivityLogEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivityLogEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivityLogEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivityLogEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivityLogEntryGroupByOutputType[P]>;
}>>;
export type ActivityLogEntryWhereInput = {
    AND?: Prisma.ActivityLogEntryWhereInput | Prisma.ActivityLogEntryWhereInput[];
    OR?: Prisma.ActivityLogEntryWhereInput[];
    NOT?: Prisma.ActivityLogEntryWhereInput | Prisma.ActivityLogEntryWhereInput[];
    id?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    organizationId?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    entityType?: Prisma.EnumActivityEntityTypeFilter<"ActivityLogEntry"> | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    action?: Prisma.EnumActivityActionFilter<"ActivityLogEntry"> | $Enums.ActivityAction;
    summary?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    actorId?: Prisma.StringNullableFilter<"ActivityLogEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ActivityLogEntry"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    actor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type ActivityLogEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    actor?: Prisma.UserOrderByWithRelationInput;
};
export type ActivityLogEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ActivityLogEntryWhereInput | Prisma.ActivityLogEntryWhereInput[];
    OR?: Prisma.ActivityLogEntryWhereInput[];
    NOT?: Prisma.ActivityLogEntryWhereInput | Prisma.ActivityLogEntryWhereInput[];
    organizationId?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    entityType?: Prisma.EnumActivityEntityTypeFilter<"ActivityLogEntry"> | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    action?: Prisma.EnumActivityActionFilter<"ActivityLogEntry"> | $Enums.ActivityAction;
    summary?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    actorId?: Prisma.StringNullableFilter<"ActivityLogEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ActivityLogEntry"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    actor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type ActivityLogEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ActivityLogEntryCountOrderByAggregateInput;
    _max?: Prisma.ActivityLogEntryMaxOrderByAggregateInput;
    _min?: Prisma.ActivityLogEntryMinOrderByAggregateInput;
};
export type ActivityLogEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivityLogEntryScalarWhereWithAggregatesInput | Prisma.ActivityLogEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivityLogEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivityLogEntryScalarWhereWithAggregatesInput | Prisma.ActivityLogEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ActivityLogEntry"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"ActivityLogEntry"> | string;
    entityType?: Prisma.EnumActivityEntityTypeWithAggregatesFilter<"ActivityLogEntry"> | $Enums.ActivityEntityType;
    entityId?: Prisma.StringWithAggregatesFilter<"ActivityLogEntry"> | string;
    action?: Prisma.EnumActivityActionWithAggregatesFilter<"ActivityLogEntry"> | $Enums.ActivityAction;
    summary?: Prisma.StringWithAggregatesFilter<"ActivityLogEntry"> | string;
    actorId?: Prisma.StringNullableWithAggregatesFilter<"ActivityLogEntry"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ActivityLogEntry"> | Date | string;
};
export type ActivityLogEntryCreateInput = {
    id?: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutActivityLogInput;
    actor?: Prisma.UserCreateNestedOneWithoutActivityLogEntriesInput;
};
export type ActivityLogEntryUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    actorId?: string | null;
    createdAt?: Date | string;
};
export type ActivityLogEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutActivityLogNestedInput;
    actor?: Prisma.UserUpdateOneWithoutActivityLogEntriesNestedInput;
};
export type ActivityLogEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntryCreateManyInput = {
    id?: string;
    organizationId: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    actorId?: string | null;
    createdAt?: Date | string;
};
export type ActivityLogEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntryListRelationFilter = {
    every?: Prisma.ActivityLogEntryWhereInput;
    some?: Prisma.ActivityLogEntryWhereInput;
    none?: Prisma.ActivityLogEntryWhereInput;
};
export type ActivityLogEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivityLogEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ActivityLogEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ActivityLogEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ActivityLogEntryCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutActorInput, Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput> | Prisma.ActivityLogEntryCreateWithoutActorInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput | Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyActorInputEnvelope;
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
};
export type ActivityLogEntryUncheckedCreateNestedManyWithoutActorInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutActorInput, Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput> | Prisma.ActivityLogEntryCreateWithoutActorInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput | Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyActorInputEnvelope;
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
};
export type ActivityLogEntryUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutActorInput, Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput> | Prisma.ActivityLogEntryCreateWithoutActorInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput | Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutActorInput | Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyActorInputEnvelope;
    set?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    disconnect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    delete?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    update?: Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutActorInput | Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ActivityLogEntryUpdateManyWithWhereWithoutActorInput | Prisma.ActivityLogEntryUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ActivityLogEntryScalarWhereInput | Prisma.ActivityLogEntryScalarWhereInput[];
};
export type ActivityLogEntryUncheckedUpdateManyWithoutActorNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutActorInput, Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput> | Prisma.ActivityLogEntryCreateWithoutActorInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput | Prisma.ActivityLogEntryCreateOrConnectWithoutActorInput[];
    upsert?: Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutActorInput | Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutActorInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyActorInputEnvelope;
    set?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    disconnect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    delete?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    update?: Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutActorInput | Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutActorInput[];
    updateMany?: Prisma.ActivityLogEntryUpdateManyWithWhereWithoutActorInput | Prisma.ActivityLogEntryUpdateManyWithWhereWithoutActorInput[];
    deleteMany?: Prisma.ActivityLogEntryScalarWhereInput | Prisma.ActivityLogEntryScalarWhereInput[];
};
export type ActivityLogEntryCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput> | Prisma.ActivityLogEntryCreateWithoutOrganizationInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput | Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
};
export type ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput> | Prisma.ActivityLogEntryCreateWithoutOrganizationInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput | Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
};
export type ActivityLogEntryUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput> | Prisma.ActivityLogEntryCreateWithoutOrganizationInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput | Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyOrganizationInputEnvelope;
    set?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    disconnect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    delete?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    update?: Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ActivityLogEntryUpdateManyWithWhereWithoutOrganizationInput | Prisma.ActivityLogEntryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ActivityLogEntryScalarWhereInput | Prisma.ActivityLogEntryScalarWhereInput[];
};
export type ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput> | Prisma.ActivityLogEntryCreateWithoutOrganizationInput[] | Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput | Prisma.ActivityLogEntryCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ActivityLogEntryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ActivityLogEntryCreateManyOrganizationInputEnvelope;
    set?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    disconnect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    delete?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    connect?: Prisma.ActivityLogEntryWhereUniqueInput | Prisma.ActivityLogEntryWhereUniqueInput[];
    update?: Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ActivityLogEntryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ActivityLogEntryUpdateManyWithWhereWithoutOrganizationInput | Prisma.ActivityLogEntryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ActivityLogEntryScalarWhereInput | Prisma.ActivityLogEntryScalarWhereInput[];
};
export type EnumActivityEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityEntityType;
};
export type EnumActivityActionFieldUpdateOperationsInput = {
    set?: $Enums.ActivityAction;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ActivityLogEntryCreateWithoutActorInput = {
    id?: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutActivityLogInput;
};
export type ActivityLogEntryUncheckedCreateWithoutActorInput = {
    id?: string;
    organizationId: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    createdAt?: Date | string;
};
export type ActivityLogEntryCreateOrConnectWithoutActorInput = {
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutActorInput, Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput>;
};
export type ActivityLogEntryCreateManyActorInputEnvelope = {
    data: Prisma.ActivityLogEntryCreateManyActorInput | Prisma.ActivityLogEntryCreateManyActorInput[];
    skipDuplicates?: boolean;
};
export type ActivityLogEntryUpsertWithWhereUniqueWithoutActorInput = {
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityLogEntryUpdateWithoutActorInput, Prisma.ActivityLogEntryUncheckedUpdateWithoutActorInput>;
    create: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutActorInput, Prisma.ActivityLogEntryUncheckedCreateWithoutActorInput>;
};
export type ActivityLogEntryUpdateWithWhereUniqueWithoutActorInput = {
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateWithoutActorInput, Prisma.ActivityLogEntryUncheckedUpdateWithoutActorInput>;
};
export type ActivityLogEntryUpdateManyWithWhereWithoutActorInput = {
    where: Prisma.ActivityLogEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateManyMutationInput, Prisma.ActivityLogEntryUncheckedUpdateManyWithoutActorInput>;
};
export type ActivityLogEntryScalarWhereInput = {
    AND?: Prisma.ActivityLogEntryScalarWhereInput | Prisma.ActivityLogEntryScalarWhereInput[];
    OR?: Prisma.ActivityLogEntryScalarWhereInput[];
    NOT?: Prisma.ActivityLogEntryScalarWhereInput | Prisma.ActivityLogEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    organizationId?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    entityType?: Prisma.EnumActivityEntityTypeFilter<"ActivityLogEntry"> | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    action?: Prisma.EnumActivityActionFilter<"ActivityLogEntry"> | $Enums.ActivityAction;
    summary?: Prisma.StringFilter<"ActivityLogEntry"> | string;
    actorId?: Prisma.StringNullableFilter<"ActivityLogEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ActivityLogEntry"> | Date | string;
};
export type ActivityLogEntryCreateWithoutOrganizationInput = {
    id?: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    createdAt?: Date | string;
    actor?: Prisma.UserCreateNestedOneWithoutActivityLogEntriesInput;
};
export type ActivityLogEntryUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    actorId?: string | null;
    createdAt?: Date | string;
};
export type ActivityLogEntryCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput>;
};
export type ActivityLogEntryCreateManyOrganizationInputEnvelope = {
    data: Prisma.ActivityLogEntryCreateManyOrganizationInput | Prisma.ActivityLogEntryCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ActivityLogEntryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityLogEntryUpdateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ActivityLogEntryCreateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedCreateWithoutOrganizationInput>;
};
export type ActivityLogEntryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateWithoutOrganizationInput, Prisma.ActivityLogEntryUncheckedUpdateWithoutOrganizationInput>;
};
export type ActivityLogEntryUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ActivityLogEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateManyMutationInput, Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ActivityLogEntryCreateManyActorInput = {
    id?: string;
    organizationId: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    createdAt?: Date | string;
};
export type ActivityLogEntryUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutActivityLogNestedInput;
};
export type ActivityLogEntryUncheckedUpdateWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntryUncheckedUpdateManyWithoutActorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntryCreateManyOrganizationInput = {
    id?: string;
    entityType: $Enums.ActivityEntityType;
    entityId: string;
    action: $Enums.ActivityAction;
    summary: string;
    actorId?: string | null;
    createdAt?: Date | string;
};
export type ActivityLogEntryUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actor?: Prisma.UserUpdateOneWithoutActivityLogEntriesNestedInput;
};
export type ActivityLogEntryUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumActivityEntityTypeFieldUpdateOperationsInput | $Enums.ActivityEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityLogEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    summary?: boolean;
    actorId?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.ActivityLogEntry$actorArgs<ExtArgs>;
}, ExtArgs["result"]["activityLogEntry"]>;
export type ActivityLogEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    summary?: boolean;
    actorId?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.ActivityLogEntry$actorArgs<ExtArgs>;
}, ExtArgs["result"]["activityLogEntry"]>;
export type ActivityLogEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    summary?: boolean;
    actorId?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.ActivityLogEntry$actorArgs<ExtArgs>;
}, ExtArgs["result"]["activityLogEntry"]>;
export type ActivityLogEntrySelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    summary?: boolean;
    actorId?: boolean;
    createdAt?: boolean;
};
export type ActivityLogEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "entityType" | "entityId" | "action" | "summary" | "actorId" | "createdAt", ExtArgs["result"]["activityLogEntry"]>;
export type ActivityLogEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.ActivityLogEntry$actorArgs<ExtArgs>;
};
export type ActivityLogEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.ActivityLogEntry$actorArgs<ExtArgs>;
};
export type ActivityLogEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    actor?: boolean | Prisma.ActivityLogEntry$actorArgs<ExtArgs>;
};
export type $ActivityLogEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActivityLogEntry";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        actor: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        entityType: $Enums.ActivityEntityType;
        entityId: string;
        action: $Enums.ActivityAction;
        summary: string;
        actorId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["activityLogEntry"]>;
    composites: {};
};
export type ActivityLogEntryGetPayload<S extends boolean | null | undefined | ActivityLogEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload, S>;
export type ActivityLogEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivityLogEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivityLogEntryCountAggregateInputType | true;
};
export interface ActivityLogEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActivityLogEntry'];
        meta: {
            name: 'ActivityLogEntry';
        };
    };
    findUnique<T extends ActivityLogEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActivityLogEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActivityLogEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivityLogEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActivityLogEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivityLogEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActivityLogEntryFindManyArgs>(args?: Prisma.SelectSubset<T, ActivityLogEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActivityLogEntryCreateArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryCreateArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActivityLogEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivityLogEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ActivityLogEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivityLogEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ActivityLogEntryDeleteArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActivityLogEntryUpdateArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActivityLogEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivityLogEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActivityLogEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ActivityLogEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ActivityLogEntryUpsertArgs>(args: Prisma.SelectSubset<T, ActivityLogEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivityLogEntryClient<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActivityLogEntryCountArgs>(args?: Prisma.Subset<T, ActivityLogEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivityLogEntryCountAggregateOutputType> : number>;
    aggregate<T extends ActivityLogEntryAggregateArgs>(args: Prisma.Subset<T, ActivityLogEntryAggregateArgs>): Prisma.PrismaPromise<GetActivityLogEntryAggregateType<T>>;
    groupBy<T extends ActivityLogEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivityLogEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivityLogEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivityLogEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActivityLogEntryFieldRefs;
}
export interface Prisma__ActivityLogEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    actor<T extends Prisma.ActivityLogEntry$actorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityLogEntry$actorArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActivityLogEntryFieldRefs {
    readonly id: Prisma.FieldRef<"ActivityLogEntry", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ActivityLogEntry", 'String'>;
    readonly entityType: Prisma.FieldRef<"ActivityLogEntry", 'ActivityEntityType'>;
    readonly entityId: Prisma.FieldRef<"ActivityLogEntry", 'String'>;
    readonly action: Prisma.FieldRef<"ActivityLogEntry", 'ActivityAction'>;
    readonly summary: Prisma.FieldRef<"ActivityLogEntry", 'String'>;
    readonly actorId: Prisma.FieldRef<"ActivityLogEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ActivityLogEntry", 'DateTime'>;
}
export type ActivityLogEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where: Prisma.ActivityLogEntryWhereUniqueInput;
};
export type ActivityLogEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where: Prisma.ActivityLogEntryWhereUniqueInput;
};
export type ActivityLogEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogEntryWhereInput;
    orderBy?: Prisma.ActivityLogEntryOrderByWithRelationInput | Prisma.ActivityLogEntryOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogEntryScalarFieldEnum | Prisma.ActivityLogEntryScalarFieldEnum[];
};
export type ActivityLogEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogEntryWhereInput;
    orderBy?: Prisma.ActivityLogEntryOrderByWithRelationInput | Prisma.ActivityLogEntryOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogEntryScalarFieldEnum | Prisma.ActivityLogEntryScalarFieldEnum[];
};
export type ActivityLogEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogEntryWhereInput;
    orderBy?: Prisma.ActivityLogEntryOrderByWithRelationInput | Prisma.ActivityLogEntryOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogEntryScalarFieldEnum | Prisma.ActivityLogEntryScalarFieldEnum[];
};
export type ActivityLogEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityLogEntryCreateInput, Prisma.ActivityLogEntryUncheckedCreateInput>;
};
export type ActivityLogEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActivityLogEntryCreateManyInput | Prisma.ActivityLogEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActivityLogEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    data: Prisma.ActivityLogEntryCreateManyInput | Prisma.ActivityLogEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ActivityLogEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ActivityLogEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateInput, Prisma.ActivityLogEntryUncheckedUpdateInput>;
    where: Prisma.ActivityLogEntryWhereUniqueInput;
};
export type ActivityLogEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateManyMutationInput, Prisma.ActivityLogEntryUncheckedUpdateManyInput>;
    where?: Prisma.ActivityLogEntryWhereInput;
    limit?: number;
};
export type ActivityLogEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActivityLogEntryUpdateManyMutationInput, Prisma.ActivityLogEntryUncheckedUpdateManyInput>;
    where?: Prisma.ActivityLogEntryWhereInput;
    limit?: number;
    include?: Prisma.ActivityLogEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ActivityLogEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where: Prisma.ActivityLogEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityLogEntryCreateInput, Prisma.ActivityLogEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActivityLogEntryUpdateInput, Prisma.ActivityLogEntryUncheckedUpdateInput>;
};
export type ActivityLogEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
    where: Prisma.ActivityLogEntryWhereUniqueInput;
};
export type ActivityLogEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogEntryWhereInput;
    limit?: number;
};
export type ActivityLogEntry$actorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ActivityLogEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActivityLogEntrySelect<ExtArgs> | null;
    omit?: Prisma.ActivityLogEntryOmit<ExtArgs> | null;
    include?: Prisma.ActivityLogEntryInclude<ExtArgs> | null;
};
