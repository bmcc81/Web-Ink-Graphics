import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GoalModel = runtime.Types.Result.DefaultSelection<Prisma.$GoalPayload>;
export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
};
export type GoalAvgAggregateOutputType = {
    year: number | null;
};
export type GoalSumAggregateOutputType = {
    year: number | null;
};
export type GoalMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    period: $Enums.GoalPeriod | null;
    year: number | null;
    status: $Enums.GoalStatus | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GoalMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    period: $Enums.GoalPeriod | null;
    year: number | null;
    status: $Enums.GoalStatus | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GoalCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    period: number;
    year: number;
    status: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GoalAvgAggregateInputType = {
    year?: true;
};
export type GoalSumAggregateInputType = {
    year?: true;
};
export type GoalMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    period?: true;
    year?: true;
    status?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GoalMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    period?: true;
    year?: true;
    status?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GoalCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    period?: true;
    year?: true;
    status?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GoalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GoalCountAggregateInputType;
    _avg?: GoalAvgAggregateInputType;
    _sum?: GoalSumAggregateInputType;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
};
export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
    [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGoal[P]> : Prisma.GetScalarType<T[P], AggregateGoal[P]>;
};
export type GoalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithAggregationInput | Prisma.GoalOrderByWithAggregationInput[];
    by: Prisma.GoalScalarFieldEnum[] | Prisma.GoalScalarFieldEnum;
    having?: Prisma.GoalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalCountAggregateInputType | true;
    _avg?: GoalAvgAggregateInputType;
    _sum?: GoalSumAggregateInputType;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
};
export type GoalGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status: $Enums.GoalStatus;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
};
export type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GoalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GoalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GoalGroupByOutputType[P]>;
}>>;
export type GoalWhereInput = {
    AND?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    OR?: Prisma.GoalWhereInput[];
    NOT?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    id?: Prisma.StringFilter<"Goal"> | string;
    title?: Prisma.StringFilter<"Goal"> | string;
    description?: Prisma.StringNullableFilter<"Goal"> | string | null;
    period?: Prisma.EnumGoalPeriodFilter<"Goal"> | $Enums.GoalPeriod;
    year?: Prisma.IntFilter<"Goal"> | number;
    status?: Prisma.EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus;
    organizationId?: Prisma.StringFilter<"Goal"> | string;
    createdAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    projects?: Prisma.ProjectListRelationFilter;
};
export type GoalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    projects?: Prisma.ProjectOrderByRelationAggregateInput;
};
export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    OR?: Prisma.GoalWhereInput[];
    NOT?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    title?: Prisma.StringFilter<"Goal"> | string;
    description?: Prisma.StringNullableFilter<"Goal"> | string | null;
    period?: Prisma.EnumGoalPeriodFilter<"Goal"> | $Enums.GoalPeriod;
    year?: Prisma.IntFilter<"Goal"> | number;
    status?: Prisma.EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus;
    organizationId?: Prisma.StringFilter<"Goal"> | string;
    createdAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    projects?: Prisma.ProjectListRelationFilter;
}, "id">;
export type GoalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GoalCountOrderByAggregateInput;
    _avg?: Prisma.GoalAvgOrderByAggregateInput;
    _max?: Prisma.GoalMaxOrderByAggregateInput;
    _min?: Prisma.GoalMinOrderByAggregateInput;
    _sum?: Prisma.GoalSumOrderByAggregateInput;
};
export type GoalScalarWhereWithAggregatesInput = {
    AND?: Prisma.GoalScalarWhereWithAggregatesInput | Prisma.GoalScalarWhereWithAggregatesInput[];
    OR?: Prisma.GoalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GoalScalarWhereWithAggregatesInput | Prisma.GoalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Goal"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Goal"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Goal"> | string | null;
    period?: Prisma.EnumGoalPeriodWithAggregatesFilter<"Goal"> | $Enums.GoalPeriod;
    year?: Prisma.IntWithAggregatesFilter<"Goal"> | number;
    status?: Prisma.EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus;
    organizationId?: Prisma.StringWithAggregatesFilter<"Goal"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Goal"> | Date | string;
};
export type GoalCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGoalsInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutGoalInput;
};
export type GoalUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutGoalInput;
};
export type GoalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGoalsNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutGoalNestedInput;
};
export type GoalCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalListRelationFilter = {
    every?: Prisma.GoalWhereInput;
    some?: Prisma.GoalWhereInput;
    none?: Prisma.GoalWhereInput;
};
export type GoalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GoalNullableScalarRelationFilter = {
    is?: Prisma.GoalWhereInput | null;
    isNot?: Prisma.GoalWhereInput | null;
};
export type GoalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoalAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
};
export type GoalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoalSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
};
export type GoalCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput | Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput | Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalCreateNestedOneWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutProjectsInput, Prisma.GoalUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutProjectsInput;
    connect?: Prisma.GoalWhereUniqueInput;
};
export type GoalUpdateOneWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutProjectsInput, Prisma.GoalUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutProjectsInput;
    upsert?: Prisma.GoalUpsertWithoutProjectsInput;
    disconnect?: Prisma.GoalWhereInput | boolean;
    delete?: Prisma.GoalWhereInput | boolean;
    connect?: Prisma.GoalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GoalUpdateToOneWithWhereWithoutProjectsInput, Prisma.GoalUpdateWithoutProjectsInput>, Prisma.GoalUncheckedUpdateWithoutProjectsInput>;
};
export type EnumGoalPeriodFieldUpdateOperationsInput = {
    set?: $Enums.GoalPeriod;
};
export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus;
};
export type GoalCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    projects?: Prisma.ProjectCreateNestedManyWithoutGoalInput;
};
export type GoalUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutGoalInput;
};
export type GoalCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput>;
};
export type GoalCreateManyOrganizationInputEnvelope = {
    data: Prisma.GoalCreateManyOrganizationInput | Prisma.GoalCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type GoalUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GoalWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoalUpdateWithoutOrganizationInput, Prisma.GoalUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput>;
};
export type GoalUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GoalWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoalUpdateWithoutOrganizationInput, Prisma.GoalUncheckedUpdateWithoutOrganizationInput>;
};
export type GoalUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.GoalScalarWhereInput;
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyWithoutOrganizationInput>;
};
export type GoalScalarWhereInput = {
    AND?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
    OR?: Prisma.GoalScalarWhereInput[];
    NOT?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
    id?: Prisma.StringFilter<"Goal"> | string;
    title?: Prisma.StringFilter<"Goal"> | string;
    description?: Prisma.StringNullableFilter<"Goal"> | string | null;
    period?: Prisma.EnumGoalPeriodFilter<"Goal"> | $Enums.GoalPeriod;
    year?: Prisma.IntFilter<"Goal"> | number;
    status?: Prisma.EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus;
    organizationId?: Prisma.StringFilter<"Goal"> | string;
    createdAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
};
export type GoalCreateWithoutProjectsInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGoalsInput;
};
export type GoalUncheckedCreateWithoutProjectsInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalCreateOrConnectWithoutProjectsInput = {
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateWithoutProjectsInput, Prisma.GoalUncheckedCreateWithoutProjectsInput>;
};
export type GoalUpsertWithoutProjectsInput = {
    update: Prisma.XOR<Prisma.GoalUpdateWithoutProjectsInput, Prisma.GoalUncheckedUpdateWithoutProjectsInput>;
    create: Prisma.XOR<Prisma.GoalCreateWithoutProjectsInput, Prisma.GoalUncheckedCreateWithoutProjectsInput>;
    where?: Prisma.GoalWhereInput;
};
export type GoalUpdateToOneWithWhereWithoutProjectsInput = {
    where?: Prisma.GoalWhereInput;
    data: Prisma.XOR<Prisma.GoalUpdateWithoutProjectsInput, Prisma.GoalUncheckedUpdateWithoutProjectsInput>;
};
export type GoalUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGoalsNestedInput;
};
export type GoalUncheckedUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    period: $Enums.GoalPeriod;
    year: number;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projects?: Prisma.ProjectUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    period?: Prisma.EnumGoalPeriodFieldUpdateOperationsInput | $Enums.GoalPeriod;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCountOutputType = {
    projects: number;
};
export type GoalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    projects?: boolean | GoalCountOutputTypeCountProjectsArgs;
};
export type GoalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCountOutputTypeSelect<ExtArgs> | null;
};
export type GoalCountOutputTypeCountProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
};
export type GoalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    period?: boolean;
    year?: boolean;
    status?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    projects?: boolean | Prisma.Goal$projectsArgs<ExtArgs>;
    _count?: boolean | Prisma.GoalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goal"]>;
export type GoalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    period?: boolean;
    year?: boolean;
    status?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goal"]>;
export type GoalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    period?: boolean;
    year?: boolean;
    status?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goal"]>;
export type GoalSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    period?: boolean;
    year?: boolean;
    status?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GoalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "period" | "year" | "status" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>;
export type GoalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    projects?: boolean | Prisma.Goal$projectsArgs<ExtArgs>;
    _count?: boolean | Prisma.GoalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GoalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type GoalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $GoalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Goal";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        projects: Prisma.$ProjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        period: $Enums.GoalPeriod;
        year: number;
        status: $Enums.GoalStatus;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["goal"]>;
    composites: {};
};
export type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GoalPayload, S>;
export type GoalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoalCountAggregateInputType | true;
};
export interface GoalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Goal'];
        meta: {
            name: 'Goal';
        };
    };
    findUnique<T extends GoalFindUniqueArgs>(args: Prisma.SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GoalFindFirstArgs>(args?: Prisma.SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GoalFindManyArgs>(args?: Prisma.SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GoalCreateArgs>(args: Prisma.SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GoalCreateManyArgs>(args?: Prisma.SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GoalDeleteArgs>(args: Prisma.SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GoalUpdateArgs>(args: Prisma.SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GoalDeleteManyArgs>(args?: Prisma.SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GoalUpdateManyArgs>(args: Prisma.SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GoalUpsertArgs>(args: Prisma.SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GoalCountArgs>(args?: Prisma.Subset<T, GoalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GoalCountAggregateOutputType> : number>;
    aggregate<T extends GoalAggregateArgs>(args: Prisma.Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>;
    groupBy<T extends GoalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GoalGroupByArgs['orderBy'];
    } : {
        orderBy?: GoalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GoalFieldRefs;
}
export interface Prisma__GoalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    projects<T extends Prisma.Goal$projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Goal$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GoalFieldRefs {
    readonly id: Prisma.FieldRef<"Goal", 'String'>;
    readonly title: Prisma.FieldRef<"Goal", 'String'>;
    readonly description: Prisma.FieldRef<"Goal", 'String'>;
    readonly period: Prisma.FieldRef<"Goal", 'GoalPeriod'>;
    readonly year: Prisma.FieldRef<"Goal", 'Int'>;
    readonly status: Prisma.FieldRef<"Goal", 'GoalStatus'>;
    readonly organizationId: Prisma.FieldRef<"Goal", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Goal", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Goal", 'DateTime'>;
}
export type GoalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GoalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GoalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GoalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalCreateInput, Prisma.GoalUncheckedCreateInput>;
};
export type GoalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GoalCreateManyInput | Prisma.GoalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GoalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    data: Prisma.GoalCreateManyInput | Prisma.GoalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GoalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GoalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalUpdateInput, Prisma.GoalUncheckedUpdateInput>;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyInput>;
    where?: Prisma.GoalWhereInput;
    limit?: number;
};
export type GoalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyInput>;
    where?: Prisma.GoalWhereInput;
    limit?: number;
    include?: Prisma.GoalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GoalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateInput, Prisma.GoalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GoalUpdateInput, Prisma.GoalUncheckedUpdateInput>;
};
export type GoalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
    limit?: number;
};
export type Goal$projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GoalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
};
