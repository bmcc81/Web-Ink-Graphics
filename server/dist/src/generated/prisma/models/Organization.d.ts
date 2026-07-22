import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganizationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationPayload>;
export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationCountAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganization[P]> : Prisma.GetScalarType<T[P], AggregateOrganization[P]>;
};
export type OrganizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithAggregationInput | Prisma.OrganizationOrderByWithAggregationInput[];
    by: Prisma.OrganizationScalarFieldEnum[] | Prisma.OrganizationScalarFieldEnum;
    having?: Prisma.OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
}>>;
export type OrganizationWhereInput = {
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    id?: Prisma.StringFilter<"Organization"> | string;
    name?: Prisma.StringFilter<"Organization"> | string;
    slug?: Prisma.StringFilter<"Organization"> | string;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    memberships?: Prisma.OrganizationMembershipListRelationFilter;
    invitations?: Prisma.OrganizationInvitationListRelationFilter;
    clients?: Prisma.ClientListRelationFilter;
    projects?: Prisma.ProjectListRelationFilter;
    goals?: Prisma.GoalListRelationFilter;
    activityLog?: Prisma.ActivityLogEntryListRelationFilter;
    brandKit?: Prisma.XOR<Prisma.BrandKitNullableScalarRelationFilter, Prisma.BrandKitWhereInput> | null;
    aiUsageRecords?: Prisma.AiUsageRecordListRelationFilter;
};
export type OrganizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    memberships?: Prisma.OrganizationMembershipOrderByRelationAggregateInput;
    invitations?: Prisma.OrganizationInvitationOrderByRelationAggregateInput;
    clients?: Prisma.ClientOrderByRelationAggregateInput;
    projects?: Prisma.ProjectOrderByRelationAggregateInput;
    goals?: Prisma.GoalOrderByRelationAggregateInput;
    activityLog?: Prisma.ActivityLogEntryOrderByRelationAggregateInput;
    brandKit?: Prisma.BrandKitOrderByWithRelationInput;
    aiUsageRecords?: Prisma.AiUsageRecordOrderByRelationAggregateInput;
};
export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    name?: Prisma.StringFilter<"Organization"> | string;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    memberships?: Prisma.OrganizationMembershipListRelationFilter;
    invitations?: Prisma.OrganizationInvitationListRelationFilter;
    clients?: Prisma.ClientListRelationFilter;
    projects?: Prisma.ProjectListRelationFilter;
    goals?: Prisma.GoalListRelationFilter;
    activityLog?: Prisma.ActivityLogEntryListRelationFilter;
    brandKit?: Prisma.XOR<Prisma.BrandKitNullableScalarRelationFilter, Prisma.BrandKitWhereInput> | null;
    aiUsageRecords?: Prisma.AiUsageRecordListRelationFilter;
}, "id" | "slug">;
export type OrganizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationCountOrderByAggregateInput;
    _max?: Prisma.OrganizationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMinOrderByAggregateInput;
};
export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
};
export type OrganizationCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput;
    isNot?: Prisma.OrganizationWhereInput;
};
export type OrganizationCreateNestedOneWithoutActivityLogInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutActivityLogInput, Prisma.OrganizationUncheckedCreateWithoutActivityLogInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutActivityLogInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutActivityLogNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutActivityLogInput, Prisma.OrganizationUncheckedCreateWithoutActivityLogInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutActivityLogInput;
    upsert?: Prisma.OrganizationUpsertWithoutActivityLogInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutActivityLogInput, Prisma.OrganizationUpdateWithoutActivityLogInput>, Prisma.OrganizationUncheckedUpdateWithoutActivityLogInput>;
};
export type OrganizationCreateNestedOneWithoutInvitationsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutInvitationsInput, Prisma.OrganizationUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutInvitationsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutInvitationsInput, Prisma.OrganizationUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutInvitationsInput;
    upsert?: Prisma.OrganizationUpsertWithoutInvitationsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutInvitationsInput, Prisma.OrganizationUpdateWithoutInvitationsInput>, Prisma.OrganizationUncheckedUpdateWithoutInvitationsInput>;
};
export type OrganizationCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.OrganizationUpsertWithoutMembershipsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutMembershipsInput, Prisma.OrganizationUpdateWithoutMembershipsInput>, Prisma.OrganizationUncheckedUpdateWithoutMembershipsInput>;
};
export type OrganizationCreateNestedOneWithoutClientsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutClientsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutClientsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutClientsInput;
    upsert?: Prisma.OrganizationUpsertWithoutClientsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutClientsInput, Prisma.OrganizationUpdateWithoutClientsInput>, Prisma.OrganizationUncheckedUpdateWithoutClientsInput>;
};
export type OrganizationCreateNestedOneWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutProjectsInput, Prisma.OrganizationUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutProjectsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutProjectsInput, Prisma.OrganizationUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutProjectsInput;
    upsert?: Prisma.OrganizationUpsertWithoutProjectsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutProjectsInput, Prisma.OrganizationUpdateWithoutProjectsInput>, Prisma.OrganizationUncheckedUpdateWithoutProjectsInput>;
};
export type OrganizationCreateNestedOneWithoutGoalsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutGoalsInput, Prisma.OrganizationUncheckedCreateWithoutGoalsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutGoalsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutGoalsInput, Prisma.OrganizationUncheckedCreateWithoutGoalsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutGoalsInput;
    upsert?: Prisma.OrganizationUpsertWithoutGoalsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutGoalsInput, Prisma.OrganizationUpdateWithoutGoalsInput>, Prisma.OrganizationUncheckedUpdateWithoutGoalsInput>;
};
export type OrganizationCreateNestedOneWithoutBrandKitInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutBrandKitInput, Prisma.OrganizationUncheckedCreateWithoutBrandKitInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutBrandKitInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutBrandKitNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutBrandKitInput, Prisma.OrganizationUncheckedCreateWithoutBrandKitInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutBrandKitInput;
    upsert?: Prisma.OrganizationUpsertWithoutBrandKitInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutBrandKitInput, Prisma.OrganizationUpdateWithoutBrandKitInput>, Prisma.OrganizationUncheckedUpdateWithoutBrandKitInput>;
};
export type OrganizationCreateNestedOneWithoutAiUsageRecordsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAiUsageRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAiUsageRecordsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAiUsageRecordsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutAiUsageRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAiUsageRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAiUsageRecordsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAiUsageRecordsInput;
    upsert?: Prisma.OrganizationUpsertWithoutAiUsageRecordsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutAiUsageRecordsInput, Prisma.OrganizationUpdateWithoutAiUsageRecordsInput>, Prisma.OrganizationUncheckedUpdateWithoutAiUsageRecordsInput>;
};
export type OrganizationCreateWithoutActivityLogInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutActivityLogInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutActivityLogInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutActivityLogInput, Prisma.OrganizationUncheckedCreateWithoutActivityLogInput>;
};
export type OrganizationUpsertWithoutActivityLogInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutActivityLogInput, Prisma.OrganizationUncheckedUpdateWithoutActivityLogInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutActivityLogInput, Prisma.OrganizationUncheckedCreateWithoutActivityLogInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutActivityLogInput, Prisma.OrganizationUncheckedUpdateWithoutActivityLogInput>;
};
export type OrganizationUpdateWithoutActivityLogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutActivityLogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutInvitationsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutInvitationsInput, Prisma.OrganizationUncheckedCreateWithoutInvitationsInput>;
};
export type OrganizationUpsertWithoutInvitationsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutInvitationsInput, Prisma.OrganizationUncheckedUpdateWithoutInvitationsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutInvitationsInput, Prisma.OrganizationUncheckedCreateWithoutInvitationsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutInvitationsInput, Prisma.OrganizationUncheckedUpdateWithoutInvitationsInput>;
};
export type OrganizationUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutMembershipsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
};
export type OrganizationUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutMembershipsInput, Prisma.OrganizationUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMembershipsInput, Prisma.OrganizationUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutMembershipsInput, Prisma.OrganizationUncheckedUpdateWithoutMembershipsInput>;
};
export type OrganizationUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutClientsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutClientsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutClientsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
};
export type OrganizationUpsertWithoutClientsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutClientsInput, Prisma.OrganizationUncheckedUpdateWithoutClientsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutClientsInput, Prisma.OrganizationUncheckedCreateWithoutClientsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutClientsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutClientsInput, Prisma.OrganizationUncheckedUpdateWithoutClientsInput>;
};
export type OrganizationUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutProjectsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutProjectsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutProjectsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutProjectsInput, Prisma.OrganizationUncheckedCreateWithoutProjectsInput>;
};
export type OrganizationUpsertWithoutProjectsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutProjectsInput, Prisma.OrganizationUncheckedUpdateWithoutProjectsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutProjectsInput, Prisma.OrganizationUncheckedCreateWithoutProjectsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutProjectsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutProjectsInput, Prisma.OrganizationUncheckedUpdateWithoutProjectsInput>;
};
export type OrganizationUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutGoalsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutGoalsInput, Prisma.OrganizationUncheckedCreateWithoutGoalsInput>;
};
export type OrganizationUpsertWithoutGoalsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutGoalsInput, Prisma.OrganizationUncheckedUpdateWithoutGoalsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutGoalsInput, Prisma.OrganizationUncheckedCreateWithoutGoalsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutGoalsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutGoalsInput, Prisma.OrganizationUncheckedUpdateWithoutGoalsInput>;
};
export type OrganizationUpdateWithoutGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutBrandKitInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutBrandKitInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutBrandKitInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutBrandKitInput, Prisma.OrganizationUncheckedCreateWithoutBrandKitInput>;
};
export type OrganizationUpsertWithoutBrandKitInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutBrandKitInput, Prisma.OrganizationUncheckedUpdateWithoutBrandKitInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutBrandKitInput, Prisma.OrganizationUncheckedCreateWithoutBrandKitInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutBrandKitInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutBrandKitInput, Prisma.OrganizationUncheckedUpdateWithoutBrandKitInput>;
};
export type OrganizationUpdateWithoutBrandKitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutBrandKitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    aiUsageRecords?: Prisma.AiUsageRecordUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutAiUsageRecordsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitCreateNestedOneWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutAiUsageRecordsInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: Prisma.OrganizationInvitationUncheckedCreateNestedManyWithoutOrganizationInput;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutOrganizationInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOrganizationInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutOrganizationInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedCreateNestedManyWithoutOrganizationInput;
    brandKit?: Prisma.BrandKitUncheckedCreateNestedOneWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutAiUsageRecordsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAiUsageRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAiUsageRecordsInput>;
};
export type OrganizationUpsertWithoutAiUsageRecordsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutAiUsageRecordsInput, Prisma.OrganizationUncheckedUpdateWithoutAiUsageRecordsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAiUsageRecordsInput, Prisma.OrganizationUncheckedCreateWithoutAiUsageRecordsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutAiUsageRecordsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutAiUsageRecordsInput, Prisma.OrganizationUncheckedUpdateWithoutAiUsageRecordsInput>;
};
export type OrganizationUpdateWithoutAiUsageRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUpdateOneWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutAiUsageRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: Prisma.OrganizationInvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutOrganizationNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutOrganizationNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutOrganizationNestedInput;
    activityLog?: Prisma.ActivityLogEntryUncheckedUpdateManyWithoutOrganizationNestedInput;
    brandKit?: Prisma.BrandKitUncheckedUpdateOneWithoutOrganizationNestedInput;
};
export type OrganizationCountOutputType = {
    memberships: number;
    invitations: number;
    clients: number;
    projects: number;
    goals: number;
    activityLog: number;
    aiUsageRecords: number;
};
export type OrganizationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs;
    invitations?: boolean | OrganizationCountOutputTypeCountInvitationsArgs;
    clients?: boolean | OrganizationCountOutputTypeCountClientsArgs;
    projects?: boolean | OrganizationCountOutputTypeCountProjectsArgs;
    goals?: boolean | OrganizationCountOutputTypeCountGoalsArgs;
    activityLog?: boolean | OrganizationCountOutputTypeCountActivityLogArgs;
    aiUsageRecords?: boolean | OrganizationCountOutputTypeCountAiUsageRecordsArgs;
};
export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganizationCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationMembershipWhereInput;
};
export type OrganizationCountOutputTypeCountInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationInvitationWhereInput;
};
export type OrganizationCountOutputTypeCountClientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
};
export type OrganizationCountOutputTypeCountProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
};
export type OrganizationCountOutputTypeCountGoalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
};
export type OrganizationCountOutputTypeCountActivityLogArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogEntryWhereInput;
};
export type OrganizationCountOutputTypeCountAiUsageRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiUsageRecordWhereInput;
};
export type OrganizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    memberships?: boolean | Prisma.Organization$membershipsArgs<ExtArgs>;
    invitations?: boolean | Prisma.Organization$invitationsArgs<ExtArgs>;
    clients?: boolean | Prisma.Organization$clientsArgs<ExtArgs>;
    projects?: boolean | Prisma.Organization$projectsArgs<ExtArgs>;
    goals?: boolean | Prisma.Organization$goalsArgs<ExtArgs>;
    activityLog?: boolean | Prisma.Organization$activityLogArgs<ExtArgs>;
    brandKit?: boolean | Prisma.Organization$brandKitArgs<ExtArgs>;
    aiUsageRecords?: boolean | Prisma.Organization$aiUsageRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>;
export type OrganizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | Prisma.Organization$membershipsArgs<ExtArgs>;
    invitations?: boolean | Prisma.Organization$invitationsArgs<ExtArgs>;
    clients?: boolean | Prisma.Organization$clientsArgs<ExtArgs>;
    projects?: boolean | Prisma.Organization$projectsArgs<ExtArgs>;
    goals?: boolean | Prisma.Organization$goalsArgs<ExtArgs>;
    activityLog?: boolean | Prisma.Organization$activityLogArgs<ExtArgs>;
    brandKit?: boolean | Prisma.Organization$brandKitArgs<ExtArgs>;
    aiUsageRecords?: boolean | Prisma.Organization$aiUsageRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrganizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organization";
    objects: {
        memberships: Prisma.$OrganizationMembershipPayload<ExtArgs>[];
        invitations: Prisma.$OrganizationInvitationPayload<ExtArgs>[];
        clients: Prisma.$ClientPayload<ExtArgs>[];
        projects: Prisma.$ProjectPayload<ExtArgs>[];
        goals: Prisma.$GoalPayload<ExtArgs>[];
        activityLog: Prisma.$ActivityLogEntryPayload<ExtArgs>[];
        brandKit: Prisma.$BrandKitPayload<ExtArgs> | null;
        aiUsageRecords: Prisma.$AiUsageRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organization"]>;
    composites: {};
};
export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationPayload, S>;
export type OrganizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationCountAggregateInputType | true;
};
export interface OrganizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
        meta: {
            name: 'Organization';
        };
    };
    findUnique<T extends OrganizationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationCountArgs>(args?: Prisma.Subset<T, OrganizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationAggregateArgs>(args: Prisma.Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;
    groupBy<T extends OrganizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationFieldRefs;
}
export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memberships<T extends Prisma.Organization$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invitations<T extends Prisma.Organization$invitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    clients<T extends Prisma.Organization$clientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    projects<T extends Prisma.Organization$projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    goals<T extends Prisma.Organization$goalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activityLog<T extends Prisma.Organization$activityLogArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$activityLogArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    brandKit<T extends Prisma.Organization$brandKitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$brandKitArgs<ExtArgs>>): Prisma.Prisma__BrandKitClient<runtime.Types.Result.GetResult<Prisma.$BrandKitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    aiUsageRecords<T extends Prisma.Organization$aiUsageRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$aiUsageRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiUsageRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationFieldRefs {
    readonly id: Prisma.FieldRef<"Organization", 'String'>;
    readonly name: Prisma.FieldRef<"Organization", 'String'>;
    readonly slug: Prisma.FieldRef<"Organization", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
}
export type OrganizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
};
export type OrganizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
};
export type OrganizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type Organization$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$invitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$clientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClientSelect<ExtArgs> | null;
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
export type Organization$projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type Organization$goalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalScalarFieldEnum | Prisma.GoalScalarFieldEnum[];
};
export type Organization$activityLogArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$brandKitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandKitSelect<ExtArgs> | null;
    omit?: Prisma.BrandKitOmit<ExtArgs> | null;
    include?: Prisma.BrandKitInclude<ExtArgs> | null;
    where?: Prisma.BrandKitWhereInput;
};
export type Organization$aiUsageRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AiUsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.AiUsageRecordOmit<ExtArgs> | null;
    include?: Prisma.AiUsageRecordInclude<ExtArgs> | null;
    where?: Prisma.AiUsageRecordWhereInput;
    orderBy?: Prisma.AiUsageRecordOrderByWithRelationInput | Prisma.AiUsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.AiUsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AiUsageRecordScalarFieldEnum | Prisma.AiUsageRecordScalarFieldEnum[];
};
export type OrganizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
};
