import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationMembershipModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationMembershipPayload>;
export type AggregateOrganizationMembership = {
    _count: OrganizationMembershipCountAggregateOutputType | null;
    _min: OrganizationMembershipMinAggregateOutputType | null;
    _max: OrganizationMembershipMaxAggregateOutputType | null;
};
export type OrganizationMembershipMinAggregateOutputType = {
    id: string | null;
    role: $Enums.OrganizationRole | null;
    userId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMembershipMaxAggregateOutputType = {
    id: string | null;
    role: $Enums.OrganizationRole | null;
    userId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMembershipCountAggregateOutputType = {
    id: number;
    role: number;
    userId: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationMembershipMinAggregateInputType = {
    id?: true;
    role?: true;
    userId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMembershipMaxAggregateInputType = {
    id?: true;
    role?: true;
    userId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMembershipCountAggregateInputType = {
    id?: true;
    role?: true;
    userId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationMembershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationMembershipWhereInput;
    orderBy?: Prisma.OrganizationMembershipOrderByWithRelationInput | Prisma.OrganizationMembershipOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationMembershipCountAggregateInputType;
    _min?: OrganizationMembershipMinAggregateInputType;
    _max?: OrganizationMembershipMaxAggregateInputType;
};
export type GetOrganizationMembershipAggregateType<T extends OrganizationMembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganizationMembership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganizationMembership[P]> : Prisma.GetScalarType<T[P], AggregateOrganizationMembership[P]>;
};
export type OrganizationMembershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationMembershipWhereInput;
    orderBy?: Prisma.OrganizationMembershipOrderByWithAggregationInput | Prisma.OrganizationMembershipOrderByWithAggregationInput[];
    by: Prisma.OrganizationMembershipScalarFieldEnum[] | Prisma.OrganizationMembershipScalarFieldEnum;
    having?: Prisma.OrganizationMembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationMembershipCountAggregateInputType | true;
    _min?: OrganizationMembershipMinAggregateInputType;
    _max?: OrganizationMembershipMaxAggregateInputType;
};
export type OrganizationMembershipGroupByOutputType = {
    id: string;
    role: $Enums.OrganizationRole;
    userId: string;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationMembershipCountAggregateOutputType | null;
    _min: OrganizationMembershipMinAggregateOutputType | null;
    _max: OrganizationMembershipMaxAggregateOutputType | null;
};
export type GetOrganizationMembershipGroupByPayload<T extends OrganizationMembershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationMembershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationMembershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationMembershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationMembershipGroupByOutputType[P]>;
}>>;
export type OrganizationMembershipWhereInput = {
    AND?: Prisma.OrganizationMembershipWhereInput | Prisma.OrganizationMembershipWhereInput[];
    OR?: Prisma.OrganizationMembershipWhereInput[];
    NOT?: Prisma.OrganizationMembershipWhereInput | Prisma.OrganizationMembershipWhereInput[];
    id?: Prisma.StringFilter<"OrganizationMembership"> | string;
    role?: Prisma.EnumOrganizationRoleFilter<"OrganizationMembership"> | $Enums.OrganizationRole;
    userId?: Prisma.StringFilter<"OrganizationMembership"> | string;
    organizationId?: Prisma.StringFilter<"OrganizationMembership"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrganizationMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrganizationMembership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type OrganizationMembershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type OrganizationMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_organizationId?: Prisma.OrganizationMembershipUserIdOrganizationIdCompoundUniqueInput;
    AND?: Prisma.OrganizationMembershipWhereInput | Prisma.OrganizationMembershipWhereInput[];
    OR?: Prisma.OrganizationMembershipWhereInput[];
    NOT?: Prisma.OrganizationMembershipWhereInput | Prisma.OrganizationMembershipWhereInput[];
    role?: Prisma.EnumOrganizationRoleFilter<"OrganizationMembership"> | $Enums.OrganizationRole;
    userId?: Prisma.StringFilter<"OrganizationMembership"> | string;
    organizationId?: Prisma.StringFilter<"OrganizationMembership"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrganizationMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrganizationMembership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "userId_organizationId">;
export type OrganizationMembershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationMembershipCountOrderByAggregateInput;
    _max?: Prisma.OrganizationMembershipMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMembershipMinOrderByAggregateInput;
};
export type OrganizationMembershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationMembershipScalarWhereWithAggregatesInput | Prisma.OrganizationMembershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationMembershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationMembershipScalarWhereWithAggregatesInput | Prisma.OrganizationMembershipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrganizationMembership"> | string;
    role?: Prisma.EnumOrganizationRoleWithAggregatesFilter<"OrganizationMembership"> | $Enums.OrganizationRole;
    userId?: Prisma.StringWithAggregatesFilter<"OrganizationMembership"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"OrganizationMembership"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrganizationMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OrganizationMembership"> | Date | string;
};
export type OrganizationMembershipCreateInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrganizationMembershipsInput;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembershipsInput;
};
export type OrganizationMembershipUncheckedCreateInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    userId: string;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationMembershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrganizationMembershipsNestedInput;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type OrganizationMembershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipCreateManyInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    userId: string;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationMembershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipListRelationFilter = {
    every?: Prisma.OrganizationMembershipWhereInput;
    some?: Prisma.OrganizationMembershipWhereInput;
    none?: Prisma.OrganizationMembershipWhereInput;
};
export type OrganizationMembershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrganizationMembershipUserIdOrganizationIdCompoundUniqueInput = {
    userId: string;
    organizationId: string;
};
export type OrganizationMembershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMembershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMembershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMembershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutUserInput, Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput> | Prisma.OrganizationMembershipCreateWithoutUserInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput | Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyUserInputEnvelope;
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
};
export type OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutUserInput, Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput> | Prisma.OrganizationMembershipCreateWithoutUserInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput | Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyUserInputEnvelope;
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
};
export type OrganizationMembershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutUserInput, Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput> | Prisma.OrganizationMembershipCreateWithoutUserInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput | Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyUserInputEnvelope;
    set?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    disconnect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    delete?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    update?: Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrganizationMembershipUpdateManyWithWhereWithoutUserInput | Prisma.OrganizationMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrganizationMembershipScalarWhereInput | Prisma.OrganizationMembershipScalarWhereInput[];
};
export type OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutUserInput, Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput> | Prisma.OrganizationMembershipCreateWithoutUserInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput | Prisma.OrganizationMembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyUserInputEnvelope;
    set?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    disconnect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    delete?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    update?: Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OrganizationMembershipUpdateManyWithWhereWithoutUserInput | Prisma.OrganizationMembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OrganizationMembershipScalarWhereInput | Prisma.OrganizationMembershipScalarWhereInput[];
};
export type OrganizationMembershipCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationMembershipCreateWithoutOrganizationInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
};
export type OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationMembershipCreateWithoutOrganizationInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
};
export type OrganizationMembershipUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationMembershipCreateWithoutOrganizationInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyOrganizationInputEnvelope;
    set?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    disconnect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    delete?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    update?: Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput | Prisma.OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OrganizationMembershipScalarWhereInput | Prisma.OrganizationMembershipScalarWhereInput[];
};
export type OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationMembershipCreateWithoutOrganizationInput[] | Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationMembershipCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationMembershipCreateManyOrganizationInputEnvelope;
    set?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    disconnect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    delete?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    connect?: Prisma.OrganizationMembershipWhereUniqueInput | Prisma.OrganizationMembershipWhereUniqueInput[];
    update?: Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput | Prisma.OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OrganizationMembershipScalarWhereInput | Prisma.OrganizationMembershipScalarWhereInput[];
};
export type OrganizationMembershipCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembershipsInput;
};
export type OrganizationMembershipUncheckedCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationMembershipCreateOrConnectWithoutUserInput = {
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutUserInput, Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput>;
};
export type OrganizationMembershipCreateManyUserInputEnvelope = {
    data: Prisma.OrganizationMembershipCreateManyUserInput | Prisma.OrganizationMembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrganizationMembershipUpdateWithoutUserInput, Prisma.OrganizationMembershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutUserInput, Prisma.OrganizationMembershipUncheckedCreateWithoutUserInput>;
};
export type OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateWithoutUserInput, Prisma.OrganizationMembershipUncheckedUpdateWithoutUserInput>;
};
export type OrganizationMembershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OrganizationMembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateManyMutationInput, Prisma.OrganizationMembershipUncheckedUpdateManyWithoutUserInput>;
};
export type OrganizationMembershipScalarWhereInput = {
    AND?: Prisma.OrganizationMembershipScalarWhereInput | Prisma.OrganizationMembershipScalarWhereInput[];
    OR?: Prisma.OrganizationMembershipScalarWhereInput[];
    NOT?: Prisma.OrganizationMembershipScalarWhereInput | Prisma.OrganizationMembershipScalarWhereInput[];
    id?: Prisma.StringFilter<"OrganizationMembership"> | string;
    role?: Prisma.EnumOrganizationRoleFilter<"OrganizationMembership"> | $Enums.OrganizationRole;
    userId?: Prisma.StringFilter<"OrganizationMembership"> | string;
    organizationId?: Prisma.StringFilter<"OrganizationMembership"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrganizationMembership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrganizationMembership"> | Date | string;
};
export type OrganizationMembershipCreateWithoutOrganizationInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutOrganizationMembershipsInput;
};
export type OrganizationMembershipUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationMembershipCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput>;
};
export type OrganizationMembershipCreateManyOrganizationInputEnvelope = {
    data: Prisma.OrganizationMembershipCreateManyOrganizationInput | Prisma.OrganizationMembershipCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrganizationMembershipUpdateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.OrganizationMembershipCreateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedCreateWithoutOrganizationInput>;
};
export type OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateWithoutOrganizationInput, Prisma.OrganizationMembershipUncheckedUpdateWithoutOrganizationInput>;
};
export type OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.OrganizationMembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateManyMutationInput, Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationInput>;
};
export type OrganizationMembershipCreateManyUserInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationMembershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type OrganizationMembershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipCreateManyOrganizationInput = {
    id?: string;
    role?: $Enums.OrganizationRole;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationMembershipUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutOrganizationMembershipsNestedInput;
};
export type OrganizationMembershipUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationMembershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    role?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationMembership"]>;
export type OrganizationMembershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    role?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationMembership"]>;
export type OrganizationMembershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    role?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationMembership"]>;
export type OrganizationMembershipSelectScalar = {
    id?: boolean;
    role?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationMembershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "role" | "userId" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationMembership"]>;
export type OrganizationMembershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type OrganizationMembershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type OrganizationMembershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $OrganizationMembershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrganizationMembership";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        role: $Enums.OrganizationRole;
        userId: string;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organizationMembership"]>;
    composites: {};
};
export type OrganizationMembershipGetPayload<S extends boolean | null | undefined | OrganizationMembershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload, S>;
export type OrganizationMembershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationMembershipCountAggregateInputType | true;
};
export interface OrganizationMembershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMembership'];
        meta: {
            name: 'OrganizationMembership';
        };
    };
    findUnique<T extends OrganizationMembershipFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationMembershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationMembershipFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationMembershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationMembershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationMembershipFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationMembershipCreateArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationMembershipCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationMembershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationMembershipDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationMembershipUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationMembershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationMembershipUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationMembershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationMembershipUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationMembershipUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationMembershipClient<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationMembershipCountArgs>(args?: Prisma.Subset<T, OrganizationMembershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationMembershipCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationMembershipAggregateArgs>(args: Prisma.Subset<T, OrganizationMembershipAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMembershipAggregateType<T>>;
    groupBy<T extends OrganizationMembershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationMembershipGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationMembershipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationMembershipFieldRefs;
}
export interface Prisma__OrganizationMembershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationMembershipFieldRefs {
    readonly id: Prisma.FieldRef<"OrganizationMembership", 'String'>;
    readonly role: Prisma.FieldRef<"OrganizationMembership", 'OrganizationRole'>;
    readonly userId: Prisma.FieldRef<"OrganizationMembership", 'String'>;
    readonly organizationId: Prisma.FieldRef<"OrganizationMembership", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OrganizationMembership", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OrganizationMembership", 'DateTime'>;
}
export type OrganizationMembershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where: Prisma.OrganizationMembershipWhereUniqueInput;
};
export type OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where: Prisma.OrganizationMembershipWhereUniqueInput;
};
export type OrganizationMembershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where?: Prisma.OrganizationMembershipWhereInput;
    orderBy?: Prisma.OrganizationMembershipOrderByWithRelationInput | Prisma.OrganizationMembershipOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationMembershipScalarFieldEnum | Prisma.OrganizationMembershipScalarFieldEnum[];
};
export type OrganizationMembershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where?: Prisma.OrganizationMembershipWhereInput;
    orderBy?: Prisma.OrganizationMembershipOrderByWithRelationInput | Prisma.OrganizationMembershipOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationMembershipScalarFieldEnum | Prisma.OrganizationMembershipScalarFieldEnum[];
};
export type OrganizationMembershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where?: Prisma.OrganizationMembershipWhereInput;
    orderBy?: Prisma.OrganizationMembershipOrderByWithRelationInput | Prisma.OrganizationMembershipOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationMembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationMembershipScalarFieldEnum | Prisma.OrganizationMembershipScalarFieldEnum[];
};
export type OrganizationMembershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationMembershipCreateInput, Prisma.OrganizationMembershipUncheckedCreateInput>;
};
export type OrganizationMembershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationMembershipCreateManyInput | Prisma.OrganizationMembershipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationMembershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    data: Prisma.OrganizationMembershipCreateManyInput | Prisma.OrganizationMembershipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrganizationMembershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrganizationMembershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateInput, Prisma.OrganizationMembershipUncheckedUpdateInput>;
    where: Prisma.OrganizationMembershipWhereUniqueInput;
};
export type OrganizationMembershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateManyMutationInput, Prisma.OrganizationMembershipUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationMembershipWhereInput;
    limit?: number;
};
export type OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationMembershipUpdateManyMutationInput, Prisma.OrganizationMembershipUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationMembershipWhereInput;
    limit?: number;
    include?: Prisma.OrganizationMembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrganizationMembershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where: Prisma.OrganizationMembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationMembershipCreateInput, Prisma.OrganizationMembershipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationMembershipUpdateInput, Prisma.OrganizationMembershipUncheckedUpdateInput>;
};
export type OrganizationMembershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
    where: Prisma.OrganizationMembershipWhereUniqueInput;
};
export type OrganizationMembershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationMembershipWhereInput;
    limit?: number;
};
export type OrganizationMembershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationMembershipSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationMembershipOmit<ExtArgs> | null;
    include?: Prisma.OrganizationMembershipInclude<ExtArgs> | null;
};
