import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationInvitationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationInvitationPayload>;
export type AggregateOrganizationInvitation = {
    _count: OrganizationInvitationCountAggregateOutputType | null;
    _min: OrganizationInvitationMinAggregateOutputType | null;
    _max: OrganizationInvitationMaxAggregateOutputType | null;
};
export type OrganizationInvitationMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    role: $Enums.OrganizationRole | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    revokedAt: Date | null;
    organizationId: string | null;
    invitedById: string | null;
    createdAt: Date | null;
};
export type OrganizationInvitationMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    role: $Enums.OrganizationRole | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    revokedAt: Date | null;
    organizationId: string | null;
    invitedById: string | null;
    createdAt: Date | null;
};
export type OrganizationInvitationCountAggregateOutputType = {
    id: number;
    email: number;
    role: number;
    tokenHash: number;
    expiresAt: number;
    acceptedAt: number;
    revokedAt: number;
    organizationId: number;
    invitedById: number;
    createdAt: number;
    _all: number;
};
export type OrganizationInvitationMinAggregateInputType = {
    id?: true;
    email?: true;
    role?: true;
    tokenHash?: true;
    expiresAt?: true;
    acceptedAt?: true;
    revokedAt?: true;
    organizationId?: true;
    invitedById?: true;
    createdAt?: true;
};
export type OrganizationInvitationMaxAggregateInputType = {
    id?: true;
    email?: true;
    role?: true;
    tokenHash?: true;
    expiresAt?: true;
    acceptedAt?: true;
    revokedAt?: true;
    organizationId?: true;
    invitedById?: true;
    createdAt?: true;
};
export type OrganizationInvitationCountAggregateInputType = {
    id?: true;
    email?: true;
    role?: true;
    tokenHash?: true;
    expiresAt?: true;
    acceptedAt?: true;
    revokedAt?: true;
    organizationId?: true;
    invitedById?: true;
    createdAt?: true;
    _all?: true;
};
export type OrganizationInvitationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationInvitationWhereInput;
    orderBy?: Prisma.OrganizationInvitationOrderByWithRelationInput | Prisma.OrganizationInvitationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationInvitationCountAggregateInputType;
    _min?: OrganizationInvitationMinAggregateInputType;
    _max?: OrganizationInvitationMaxAggregateInputType;
};
export type GetOrganizationInvitationAggregateType<T extends OrganizationInvitationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganizationInvitation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganizationInvitation[P]> : Prisma.GetScalarType<T[P], AggregateOrganizationInvitation[P]>;
};
export type OrganizationInvitationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationInvitationWhereInput;
    orderBy?: Prisma.OrganizationInvitationOrderByWithAggregationInput | Prisma.OrganizationInvitationOrderByWithAggregationInput[];
    by: Prisma.OrganizationInvitationScalarFieldEnum[] | Prisma.OrganizationInvitationScalarFieldEnum;
    having?: Prisma.OrganizationInvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationInvitationCountAggregateInputType | true;
    _min?: OrganizationInvitationMinAggregateInputType;
    _max?: OrganizationInvitationMaxAggregateInputType;
};
export type OrganizationInvitationGroupByOutputType = {
    id: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date;
    acceptedAt: Date | null;
    revokedAt: Date | null;
    organizationId: string;
    invitedById: string;
    createdAt: Date;
    _count: OrganizationInvitationCountAggregateOutputType | null;
    _min: OrganizationInvitationMinAggregateOutputType | null;
    _max: OrganizationInvitationMaxAggregateOutputType | null;
};
export type GetOrganizationInvitationGroupByPayload<T extends OrganizationInvitationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationInvitationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationInvitationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationInvitationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationInvitationGroupByOutputType[P]>;
}>>;
export type OrganizationInvitationWhereInput = {
    AND?: Prisma.OrganizationInvitationWhereInput | Prisma.OrganizationInvitationWhereInput[];
    OR?: Prisma.OrganizationInvitationWhereInput[];
    NOT?: Prisma.OrganizationInvitationWhereInput | Prisma.OrganizationInvitationWhereInput[];
    id?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    email?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    role?: Prisma.EnumOrganizationRoleFilter<"OrganizationInvitation"> | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    expiresAt?: Prisma.DateTimeFilter<"OrganizationInvitation"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"OrganizationInvitation"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"OrganizationInvitation"> | Date | string | null;
    organizationId?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    invitedById?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrganizationInvitation"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    invitedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type OrganizationInvitationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    invitedBy?: Prisma.UserOrderByWithRelationInput;
};
export type OrganizationInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.OrganizationInvitationWhereInput | Prisma.OrganizationInvitationWhereInput[];
    OR?: Prisma.OrganizationInvitationWhereInput[];
    NOT?: Prisma.OrganizationInvitationWhereInput | Prisma.OrganizationInvitationWhereInput[];
    email?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    role?: Prisma.EnumOrganizationRoleFilter<"OrganizationInvitation"> | $Enums.OrganizationRole;
    expiresAt?: Prisma.DateTimeFilter<"OrganizationInvitation"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"OrganizationInvitation"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"OrganizationInvitation"> | Date | string | null;
    organizationId?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    invitedById?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrganizationInvitation"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    invitedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "tokenHash">;
export type OrganizationInvitationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationInvitationCountOrderByAggregateInput;
    _max?: Prisma.OrganizationInvitationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationInvitationMinOrderByAggregateInput;
};
export type OrganizationInvitationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationInvitationScalarWhereWithAggregatesInput | Prisma.OrganizationInvitationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationInvitationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationInvitationScalarWhereWithAggregatesInput | Prisma.OrganizationInvitationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrganizationInvitation"> | string;
    email?: Prisma.StringWithAggregatesFilter<"OrganizationInvitation"> | string;
    role?: Prisma.EnumOrganizationRoleWithAggregatesFilter<"OrganizationInvitation"> | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringWithAggregatesFilter<"OrganizationInvitation"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"OrganizationInvitation"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OrganizationInvitation"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OrganizationInvitation"> | Date | string | null;
    organizationId?: Prisma.StringWithAggregatesFilter<"OrganizationInvitation"> | string;
    invitedById?: Prisma.StringWithAggregatesFilter<"OrganizationInvitation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrganizationInvitation"> | Date | string;
};
export type OrganizationInvitationCreateInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    invitedBy: Prisma.UserCreateNestedOneWithoutInvitationsSentInput;
};
export type OrganizationInvitationUncheckedCreateInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    organizationId: string;
    invitedById: string;
    createdAt?: Date | string;
};
export type OrganizationInvitationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    invitedBy?: Prisma.UserUpdateOneRequiredWithoutInvitationsSentNestedInput;
};
export type OrganizationInvitationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationCreateManyInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    organizationId: string;
    invitedById: string;
    createdAt?: Date | string;
};
export type OrganizationInvitationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationListRelationFilter = {
    every?: Prisma.OrganizationInvitationWhereInput;
    some?: Prisma.OrganizationInvitationWhereInput;
    none?: Prisma.OrganizationInvitationWhereInput;
};
export type OrganizationInvitationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrganizationInvitationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrganizationInvitationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrganizationInvitationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrganizationInvitationCreateNestedManyWithoutInvitedByInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput> | Prisma.OrganizationInvitationCreateWithoutInvitedByInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput | Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyInvitedByInputEnvelope;
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
};
export type OrganizationInvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput> | Prisma.OrganizationInvitationCreateWithoutInvitedByInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput | Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyInvitedByInputEnvelope;
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
};
export type OrganizationInvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput> | Prisma.OrganizationInvitationCreateWithoutInvitedByInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput | Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput[];
    upsert?: Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutInvitedByInput | Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutInvitedByInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyInvitedByInputEnvelope;
    set?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    disconnect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    delete?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    update?: Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutInvitedByInput | Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutInvitedByInput[];
    updateMany?: Prisma.OrganizationInvitationUpdateManyWithWhereWithoutInvitedByInput | Prisma.OrganizationInvitationUpdateManyWithWhereWithoutInvitedByInput[];
    deleteMany?: Prisma.OrganizationInvitationScalarWhereInput | Prisma.OrganizationInvitationScalarWhereInput[];
};
export type OrganizationInvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput> | Prisma.OrganizationInvitationCreateWithoutInvitedByInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput | Prisma.OrganizationInvitationCreateOrConnectWithoutInvitedByInput[];
    upsert?: Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutInvitedByInput | Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutInvitedByInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyInvitedByInputEnvelope;
    set?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    disconnect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    delete?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    update?: Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutInvitedByInput | Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutInvitedByInput[];
    updateMany?: Prisma.OrganizationInvitationUpdateManyWithWhereWithoutInvitedByInput | Prisma.OrganizationInvitationUpdateManyWithWhereWithoutInvitedByInput[];
    deleteMany?: Prisma.OrganizationInvitationScalarWhereInput | Prisma.OrganizationInvitationScalarWhereInput[];
};
export type OrganizationInvitationCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationInvitationCreateWithoutOrganizationInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
};
export type OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationInvitationCreateWithoutOrganizationInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
};
export type OrganizationInvitationUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationInvitationCreateWithoutOrganizationInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyOrganizationInputEnvelope;
    set?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    disconnect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    delete?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    update?: Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput | Prisma.OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OrganizationInvitationScalarWhereInput | Prisma.OrganizationInvitationScalarWhereInput[];
};
export type OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput> | Prisma.OrganizationInvitationCreateWithoutOrganizationInput[] | Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput | Prisma.OrganizationInvitationCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OrganizationInvitationCreateManyOrganizationInputEnvelope;
    set?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    disconnect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    delete?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    connect?: Prisma.OrganizationInvitationWhereUniqueInput | Prisma.OrganizationInvitationWhereUniqueInput[];
    update?: Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput | Prisma.OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OrganizationInvitationScalarWhereInput | Prisma.OrganizationInvitationScalarWhereInput[];
};
export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type OrganizationInvitationCreateWithoutInvitedByInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
};
export type OrganizationInvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    organizationId: string;
    createdAt?: Date | string;
};
export type OrganizationInvitationCreateOrConnectWithoutInvitedByInput = {
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput>;
};
export type OrganizationInvitationCreateManyInvitedByInputEnvelope = {
    data: Prisma.OrganizationInvitationCreateManyInvitedByInput | Prisma.OrganizationInvitationCreateManyInvitedByInput[];
    skipDuplicates?: boolean;
};
export type OrganizationInvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrganizationInvitationUpdateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedUpdateWithoutInvitedByInput>;
    create: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedCreateWithoutInvitedByInput>;
};
export type OrganizationInvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateWithoutInvitedByInput, Prisma.OrganizationInvitationUncheckedUpdateWithoutInvitedByInput>;
};
export type OrganizationInvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: Prisma.OrganizationInvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateManyMutationInput, Prisma.OrganizationInvitationUncheckedUpdateManyWithoutInvitedByInput>;
};
export type OrganizationInvitationScalarWhereInput = {
    AND?: Prisma.OrganizationInvitationScalarWhereInput | Prisma.OrganizationInvitationScalarWhereInput[];
    OR?: Prisma.OrganizationInvitationScalarWhereInput[];
    NOT?: Prisma.OrganizationInvitationScalarWhereInput | Prisma.OrganizationInvitationScalarWhereInput[];
    id?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    email?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    role?: Prisma.EnumOrganizationRoleFilter<"OrganizationInvitation"> | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    expiresAt?: Prisma.DateTimeFilter<"OrganizationInvitation"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"OrganizationInvitation"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"OrganizationInvitation"> | Date | string | null;
    organizationId?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    invitedById?: Prisma.StringFilter<"OrganizationInvitation"> | string;
    createdAt?: Prisma.DateTimeFilter<"OrganizationInvitation"> | Date | string;
};
export type OrganizationInvitationCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    invitedBy: Prisma.UserCreateNestedOneWithoutInvitationsSentInput;
};
export type OrganizationInvitationUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    invitedById: string;
    createdAt?: Date | string;
};
export type OrganizationInvitationCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput>;
};
export type OrganizationInvitationCreateManyOrganizationInputEnvelope = {
    data: Prisma.OrganizationInvitationCreateManyOrganizationInput | Prisma.OrganizationInvitationCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type OrganizationInvitationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrganizationInvitationUpdateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.OrganizationInvitationCreateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedCreateWithoutOrganizationInput>;
};
export type OrganizationInvitationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateWithoutOrganizationInput, Prisma.OrganizationInvitationUncheckedUpdateWithoutOrganizationInput>;
};
export type OrganizationInvitationUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.OrganizationInvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateManyMutationInput, Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationInput>;
};
export type OrganizationInvitationCreateManyInvitedByInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    organizationId: string;
    createdAt?: Date | string;
};
export type OrganizationInvitationUpdateWithoutInvitedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
};
export type OrganizationInvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationCreateManyOrganizationInput = {
    id?: string;
    email: string;
    role: $Enums.OrganizationRole;
    tokenHash: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    invitedById: string;
    createdAt?: Date | string;
};
export type OrganizationInvitationUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitedBy?: Prisma.UserUpdateOneRequiredWithoutInvitationsSentNestedInput;
};
export type OrganizationInvitationUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumOrganizationRoleFieldUpdateOperationsInput | $Enums.OrganizationRole;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationInvitationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    role?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    organizationId?: boolean;
    invitedById?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationInvitation"]>;
export type OrganizationInvitationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    role?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    organizationId?: boolean;
    invitedById?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationInvitation"]>;
export type OrganizationInvitationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    role?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    organizationId?: boolean;
    invitedById?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organizationInvitation"]>;
export type OrganizationInvitationSelectScalar = {
    id?: boolean;
    email?: boolean;
    role?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    organizationId?: boolean;
    invitedById?: boolean;
    createdAt?: boolean;
};
export type OrganizationInvitationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "role" | "tokenHash" | "expiresAt" | "acceptedAt" | "revokedAt" | "organizationId" | "invitedById" | "createdAt", ExtArgs["result"]["organizationInvitation"]>;
export type OrganizationInvitationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrganizationInvitationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OrganizationInvitationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OrganizationInvitationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrganizationInvitation";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        invitedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        role: $Enums.OrganizationRole;
        tokenHash: string;
        expiresAt: Date;
        acceptedAt: Date | null;
        revokedAt: Date | null;
        organizationId: string;
        invitedById: string;
        createdAt: Date;
    }, ExtArgs["result"]["organizationInvitation"]>;
    composites: {};
};
export type OrganizationInvitationGetPayload<S extends boolean | null | undefined | OrganizationInvitationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload, S>;
export type OrganizationInvitationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationInvitationCountAggregateInputType | true;
};
export interface OrganizationInvitationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrganizationInvitation'];
        meta: {
            name: 'OrganizationInvitation';
        };
    };
    findUnique<T extends OrganizationInvitationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationInvitationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationInvitationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationInvitationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationInvitationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationInvitationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationInvitationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationInvitationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationInvitationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationInvitationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationInvitationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationInvitationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationInvitationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationInvitationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationInvitationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationInvitationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationInvitationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationInvitationCountArgs>(args?: Prisma.Subset<T, OrganizationInvitationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationInvitationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationInvitationAggregateArgs>(args: Prisma.Subset<T, OrganizationInvitationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationInvitationAggregateType<T>>;
    groupBy<T extends OrganizationInvitationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationInvitationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationInvitationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationInvitationFieldRefs;
}
export interface Prisma__OrganizationInvitationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationInvitationFieldRefs {
    readonly id: Prisma.FieldRef<"OrganizationInvitation", 'String'>;
    readonly email: Prisma.FieldRef<"OrganizationInvitation", 'String'>;
    readonly role: Prisma.FieldRef<"OrganizationInvitation", 'OrganizationRole'>;
    readonly tokenHash: Prisma.FieldRef<"OrganizationInvitation", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"OrganizationInvitation", 'DateTime'>;
    readonly acceptedAt: Prisma.FieldRef<"OrganizationInvitation", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"OrganizationInvitation", 'DateTime'>;
    readonly organizationId: Prisma.FieldRef<"OrganizationInvitation", 'String'>;
    readonly invitedById: Prisma.FieldRef<"OrganizationInvitation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OrganizationInvitation", 'DateTime'>;
}
export type OrganizationInvitationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where: Prisma.OrganizationInvitationWhereUniqueInput;
};
export type OrganizationInvitationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where: Prisma.OrganizationInvitationWhereUniqueInput;
};
export type OrganizationInvitationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationInvitationWhereInput;
    orderBy?: Prisma.OrganizationInvitationOrderByWithRelationInput | Prisma.OrganizationInvitationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationInvitationScalarFieldEnum | Prisma.OrganizationInvitationScalarFieldEnum[];
};
export type OrganizationInvitationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationInvitationWhereInput;
    orderBy?: Prisma.OrganizationInvitationOrderByWithRelationInput | Prisma.OrganizationInvitationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationInvitationScalarFieldEnum | Prisma.OrganizationInvitationScalarFieldEnum[];
};
export type OrganizationInvitationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationInvitationWhereInput;
    orderBy?: Prisma.OrganizationInvitationOrderByWithRelationInput | Prisma.OrganizationInvitationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationInvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationInvitationScalarFieldEnum | Prisma.OrganizationInvitationScalarFieldEnum[];
};
export type OrganizationInvitationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationInvitationCreateInput, Prisma.OrganizationInvitationUncheckedCreateInput>;
};
export type OrganizationInvitationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationInvitationCreateManyInput | Prisma.OrganizationInvitationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationInvitationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    data: Prisma.OrganizationInvitationCreateManyInput | Prisma.OrganizationInvitationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrganizationInvitationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrganizationInvitationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateInput, Prisma.OrganizationInvitationUncheckedUpdateInput>;
    where: Prisma.OrganizationInvitationWhereUniqueInput;
};
export type OrganizationInvitationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateManyMutationInput, Prisma.OrganizationInvitationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationInvitationWhereInput;
    limit?: number;
};
export type OrganizationInvitationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationInvitationUpdateManyMutationInput, Prisma.OrganizationInvitationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationInvitationWhereInput;
    limit?: number;
    include?: Prisma.OrganizationInvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrganizationInvitationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where: Prisma.OrganizationInvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationInvitationCreateInput, Prisma.OrganizationInvitationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationInvitationUpdateInput, Prisma.OrganizationInvitationUncheckedUpdateInput>;
};
export type OrganizationInvitationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
    where: Prisma.OrganizationInvitationWhereUniqueInput;
};
export type OrganizationInvitationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationInvitationWhereInput;
    limit?: number;
};
export type OrganizationInvitationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationInvitationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationInvitationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInvitationInclude<ExtArgs> | null;
};
