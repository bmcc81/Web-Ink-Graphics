import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MilestoneModel = runtime.Types.Result.DefaultSelection<Prisma.$MilestonePayload>;
export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null;
    _avg: MilestoneAvgAggregateOutputType | null;
    _sum: MilestoneSumAggregateOutputType | null;
    _min: MilestoneMinAggregateOutputType | null;
    _max: MilestoneMaxAggregateOutputType | null;
};
export type MilestoneAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type MilestoneSumAggregateOutputType = {
    sortOrder: number | null;
};
export type MilestoneMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: $Enums.MilestoneStatus | null;
    dueDate: Date | null;
    sortOrder: number | null;
    projectId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MilestoneMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: $Enums.MilestoneStatus | null;
    dueDate: Date | null;
    sortOrder: number | null;
    projectId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MilestoneCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    dueDate: number;
    sortOrder: number;
    projectId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MilestoneAvgAggregateInputType = {
    sortOrder?: true;
};
export type MilestoneSumAggregateInputType = {
    sortOrder?: true;
};
export type MilestoneMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    dueDate?: true;
    sortOrder?: true;
    projectId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MilestoneMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    dueDate?: true;
    sortOrder?: true;
    projectId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MilestoneCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    dueDate?: true;
    sortOrder?: true;
    projectId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MilestoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MilestoneWhereInput;
    orderBy?: Prisma.MilestoneOrderByWithRelationInput | Prisma.MilestoneOrderByWithRelationInput[];
    cursor?: Prisma.MilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MilestoneCountAggregateInputType;
    _avg?: MilestoneAvgAggregateInputType;
    _sum?: MilestoneSumAggregateInputType;
    _min?: MilestoneMinAggregateInputType;
    _max?: MilestoneMaxAggregateInputType;
};
export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
    [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMilestone[P]> : Prisma.GetScalarType<T[P], AggregateMilestone[P]>;
};
export type MilestoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MilestoneWhereInput;
    orderBy?: Prisma.MilestoneOrderByWithAggregationInput | Prisma.MilestoneOrderByWithAggregationInput[];
    by: Prisma.MilestoneScalarFieldEnum[] | Prisma.MilestoneScalarFieldEnum;
    having?: Prisma.MilestoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MilestoneCountAggregateInputType | true;
    _avg?: MilestoneAvgAggregateInputType;
    _sum?: MilestoneSumAggregateInputType;
    _min?: MilestoneMinAggregateInputType;
    _max?: MilestoneMaxAggregateInputType;
};
export type MilestoneGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: $Enums.MilestoneStatus;
    dueDate: Date | null;
    sortOrder: number;
    projectId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MilestoneCountAggregateOutputType | null;
    _avg: MilestoneAvgAggregateOutputType | null;
    _sum: MilestoneSumAggregateOutputType | null;
    _min: MilestoneMinAggregateOutputType | null;
    _max: MilestoneMaxAggregateOutputType | null;
};
export type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MilestoneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MilestoneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MilestoneGroupByOutputType[P]>;
}>>;
export type MilestoneWhereInput = {
    AND?: Prisma.MilestoneWhereInput | Prisma.MilestoneWhereInput[];
    OR?: Prisma.MilestoneWhereInput[];
    NOT?: Prisma.MilestoneWhereInput | Prisma.MilestoneWhereInput[];
    id?: Prisma.StringFilter<"Milestone"> | string;
    name?: Prisma.StringFilter<"Milestone"> | string;
    description?: Prisma.StringNullableFilter<"Milestone"> | string | null;
    status?: Prisma.EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"Milestone"> | Date | string | null;
    sortOrder?: Prisma.IntFilter<"Milestone"> | number;
    projectId?: Prisma.StringFilter<"Milestone"> | string;
    createdAt?: Prisma.DateTimeFilter<"Milestone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Milestone"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
};
export type MilestoneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
};
export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MilestoneWhereInput | Prisma.MilestoneWhereInput[];
    OR?: Prisma.MilestoneWhereInput[];
    NOT?: Prisma.MilestoneWhereInput | Prisma.MilestoneWhereInput[];
    name?: Prisma.StringFilter<"Milestone"> | string;
    description?: Prisma.StringNullableFilter<"Milestone"> | string | null;
    status?: Prisma.EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"Milestone"> | Date | string | null;
    sortOrder?: Prisma.IntFilter<"Milestone"> | number;
    projectId?: Prisma.StringFilter<"Milestone"> | string;
    createdAt?: Prisma.DateTimeFilter<"Milestone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Milestone"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
}, "id">;
export type MilestoneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MilestoneCountOrderByAggregateInput;
    _avg?: Prisma.MilestoneAvgOrderByAggregateInput;
    _max?: Prisma.MilestoneMaxOrderByAggregateInput;
    _min?: Prisma.MilestoneMinOrderByAggregateInput;
    _sum?: Prisma.MilestoneSumOrderByAggregateInput;
};
export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: Prisma.MilestoneScalarWhereWithAggregatesInput | Prisma.MilestoneScalarWhereWithAggregatesInput[];
    OR?: Prisma.MilestoneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MilestoneScalarWhereWithAggregatesInput | Prisma.MilestoneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Milestone"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Milestone"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Milestone"> | string | null;
    status?: Prisma.EnumMilestoneStatusWithAggregatesFilter<"Milestone"> | $Enums.MilestoneStatus;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Milestone"> | number;
    projectId?: Prisma.StringWithAggregatesFilter<"Milestone"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Milestone"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Milestone"> | Date | string;
};
export type MilestoneCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMilestonesInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMilestoneInput;
};
export type MilestoneUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMilestoneInput;
};
export type MilestoneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMilestonesNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMilestoneNestedInput;
};
export type MilestoneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMilestoneNestedInput;
};
export type MilestoneCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilestoneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilestoneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilestoneListRelationFilter = {
    every?: Prisma.MilestoneWhereInput;
    some?: Prisma.MilestoneWhereInput;
    none?: Prisma.MilestoneWhereInput;
};
export type MilestoneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MilestoneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MilestoneAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type MilestoneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MilestoneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MilestoneSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type MilestoneNullableScalarRelationFilter = {
    is?: Prisma.MilestoneWhereInput | null;
    isNot?: Prisma.MilestoneWhereInput | null;
};
export type MilestoneCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.MilestoneCreateWithoutProjectInput, Prisma.MilestoneUncheckedCreateWithoutProjectInput> | Prisma.MilestoneCreateWithoutProjectInput[] | Prisma.MilestoneUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MilestoneCreateOrConnectWithoutProjectInput | Prisma.MilestoneCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.MilestoneCreateManyProjectInputEnvelope;
    connect?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
};
export type MilestoneUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.MilestoneCreateWithoutProjectInput, Prisma.MilestoneUncheckedCreateWithoutProjectInput> | Prisma.MilestoneCreateWithoutProjectInput[] | Prisma.MilestoneUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MilestoneCreateOrConnectWithoutProjectInput | Prisma.MilestoneCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.MilestoneCreateManyProjectInputEnvelope;
    connect?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
};
export type MilestoneUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.MilestoneCreateWithoutProjectInput, Prisma.MilestoneUncheckedCreateWithoutProjectInput> | Prisma.MilestoneCreateWithoutProjectInput[] | Prisma.MilestoneUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MilestoneCreateOrConnectWithoutProjectInput | Prisma.MilestoneCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.MilestoneUpsertWithWhereUniqueWithoutProjectInput | Prisma.MilestoneUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.MilestoneCreateManyProjectInputEnvelope;
    set?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    disconnect?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    delete?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    connect?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    update?: Prisma.MilestoneUpdateWithWhereUniqueWithoutProjectInput | Prisma.MilestoneUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.MilestoneUpdateManyWithWhereWithoutProjectInput | Prisma.MilestoneUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.MilestoneScalarWhereInput | Prisma.MilestoneScalarWhereInput[];
};
export type MilestoneUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.MilestoneCreateWithoutProjectInput, Prisma.MilestoneUncheckedCreateWithoutProjectInput> | Prisma.MilestoneCreateWithoutProjectInput[] | Prisma.MilestoneUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.MilestoneCreateOrConnectWithoutProjectInput | Prisma.MilestoneCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.MilestoneUpsertWithWhereUniqueWithoutProjectInput | Prisma.MilestoneUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.MilestoneCreateManyProjectInputEnvelope;
    set?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    disconnect?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    delete?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    connect?: Prisma.MilestoneWhereUniqueInput | Prisma.MilestoneWhereUniqueInput[];
    update?: Prisma.MilestoneUpdateWithWhereUniqueWithoutProjectInput | Prisma.MilestoneUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.MilestoneUpdateManyWithWhereWithoutProjectInput | Prisma.MilestoneUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.MilestoneScalarWhereInput | Prisma.MilestoneScalarWhereInput[];
};
export type EnumMilestoneStatusFieldUpdateOperationsInput = {
    set?: $Enums.MilestoneStatus;
};
export type MilestoneCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.MilestoneCreateWithoutTasksInput, Prisma.MilestoneUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.MilestoneCreateOrConnectWithoutTasksInput;
    connect?: Prisma.MilestoneWhereUniqueInput;
};
export type MilestoneUpdateOneWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.MilestoneCreateWithoutTasksInput, Prisma.MilestoneUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.MilestoneCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.MilestoneUpsertWithoutTasksInput;
    disconnect?: Prisma.MilestoneWhereInput | boolean;
    delete?: Prisma.MilestoneWhereInput | boolean;
    connect?: Prisma.MilestoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MilestoneUpdateToOneWithWhereWithoutTasksInput, Prisma.MilestoneUpdateWithoutTasksInput>, Prisma.MilestoneUncheckedUpdateWithoutTasksInput>;
};
export type MilestoneCreateWithoutProjectInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskCreateNestedManyWithoutMilestoneInput;
};
export type MilestoneUncheckedCreateWithoutProjectInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMilestoneInput;
};
export type MilestoneCreateOrConnectWithoutProjectInput = {
    where: Prisma.MilestoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.MilestoneCreateWithoutProjectInput, Prisma.MilestoneUncheckedCreateWithoutProjectInput>;
};
export type MilestoneCreateManyProjectInputEnvelope = {
    data: Prisma.MilestoneCreateManyProjectInput | Prisma.MilestoneCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type MilestoneUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.MilestoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.MilestoneUpdateWithoutProjectInput, Prisma.MilestoneUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.MilestoneCreateWithoutProjectInput, Prisma.MilestoneUncheckedCreateWithoutProjectInput>;
};
export type MilestoneUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.MilestoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.MilestoneUpdateWithoutProjectInput, Prisma.MilestoneUncheckedUpdateWithoutProjectInput>;
};
export type MilestoneUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.MilestoneScalarWhereInput;
    data: Prisma.XOR<Prisma.MilestoneUpdateManyMutationInput, Prisma.MilestoneUncheckedUpdateManyWithoutProjectInput>;
};
export type MilestoneScalarWhereInput = {
    AND?: Prisma.MilestoneScalarWhereInput | Prisma.MilestoneScalarWhereInput[];
    OR?: Prisma.MilestoneScalarWhereInput[];
    NOT?: Prisma.MilestoneScalarWhereInput | Prisma.MilestoneScalarWhereInput[];
    id?: Prisma.StringFilter<"Milestone"> | string;
    name?: Prisma.StringFilter<"Milestone"> | string;
    description?: Prisma.StringNullableFilter<"Milestone"> | string | null;
    status?: Prisma.EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"Milestone"> | Date | string | null;
    sortOrder?: Prisma.IntFilter<"Milestone"> | number;
    projectId?: Prisma.StringFilter<"Milestone"> | string;
    createdAt?: Prisma.DateTimeFilter<"Milestone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Milestone"> | Date | string;
};
export type MilestoneCreateWithoutTasksInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutMilestonesInput;
};
export type MilestoneUncheckedCreateWithoutTasksInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilestoneCreateOrConnectWithoutTasksInput = {
    where: Prisma.MilestoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.MilestoneCreateWithoutTasksInput, Prisma.MilestoneUncheckedCreateWithoutTasksInput>;
};
export type MilestoneUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.MilestoneUpdateWithoutTasksInput, Prisma.MilestoneUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.MilestoneCreateWithoutTasksInput, Prisma.MilestoneUncheckedCreateWithoutTasksInput>;
    where?: Prisma.MilestoneWhereInput;
};
export type MilestoneUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.MilestoneWhereInput;
    data: Prisma.XOR<Prisma.MilestoneUpdateWithoutTasksInput, Prisma.MilestoneUncheckedUpdateWithoutTasksInput>;
};
export type MilestoneUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutMilestonesNestedInput;
};
export type MilestoneUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilestoneCreateManyProjectInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.MilestoneStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MilestoneUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUpdateManyWithoutMilestoneNestedInput;
};
export type MilestoneUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMilestoneNestedInput;
};
export type MilestoneUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MilestoneCountOutputType = {
    tasks: number;
};
export type MilestoneCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | MilestoneCountOutputTypeCountTasksArgs;
};
export type MilestoneCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneCountOutputTypeSelect<ExtArgs> | null;
};
export type MilestoneCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type MilestoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Milestone$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.MilestoneCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone"]>;
export type MilestoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone"]>;
export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone"]>;
export type MilestoneSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MilestoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "status" | "dueDate" | "sortOrder" | "projectId" | "createdAt" | "updatedAt", ExtArgs["result"]["milestone"]>;
export type MilestoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Milestone$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.MilestoneCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $MilestonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Milestone";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        tasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        status: $Enums.MilestoneStatus;
        dueDate: Date | null;
        sortOrder: number;
        projectId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["milestone"]>;
    composites: {};
};
export type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MilestonePayload, S>;
export type MilestoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MilestoneCountAggregateInputType | true;
};
export interface MilestoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Milestone'];
        meta: {
            name: 'Milestone';
        };
    };
    findUnique<T extends MilestoneFindUniqueArgs>(args: Prisma.SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MilestoneFindFirstArgs>(args?: Prisma.SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MilestoneFindManyArgs>(args?: Prisma.SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MilestoneCreateArgs>(args: Prisma.SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MilestoneCreateManyArgs>(args?: Prisma.SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MilestoneDeleteArgs>(args: Prisma.SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MilestoneUpdateArgs>(args: Prisma.SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MilestoneUpdateManyArgs>(args: Prisma.SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MilestoneUpsertArgs>(args: Prisma.SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MilestoneCountArgs>(args?: Prisma.Subset<T, MilestoneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MilestoneCountAggregateOutputType> : number>;
    aggregate<T extends MilestoneAggregateArgs>(args: Prisma.Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>;
    groupBy<T extends MilestoneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MilestoneGroupByArgs['orderBy'];
    } : {
        orderBy?: MilestoneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MilestoneFieldRefs;
}
export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.Milestone$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Milestone$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MilestoneFieldRefs {
    readonly id: Prisma.FieldRef<"Milestone", 'String'>;
    readonly name: Prisma.FieldRef<"Milestone", 'String'>;
    readonly description: Prisma.FieldRef<"Milestone", 'String'>;
    readonly status: Prisma.FieldRef<"Milestone", 'MilestoneStatus'>;
    readonly dueDate: Prisma.FieldRef<"Milestone", 'DateTime'>;
    readonly sortOrder: Prisma.FieldRef<"Milestone", 'Int'>;
    readonly projectId: Prisma.FieldRef<"Milestone", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Milestone", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Milestone", 'DateTime'>;
}
export type MilestoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where: Prisma.MilestoneWhereUniqueInput;
};
export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where: Prisma.MilestoneWhereUniqueInput;
};
export type MilestoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where?: Prisma.MilestoneWhereInput;
    orderBy?: Prisma.MilestoneOrderByWithRelationInput | Prisma.MilestoneOrderByWithRelationInput[];
    cursor?: Prisma.MilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MilestoneScalarFieldEnum | Prisma.MilestoneScalarFieldEnum[];
};
export type MilestoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where?: Prisma.MilestoneWhereInput;
    orderBy?: Prisma.MilestoneOrderByWithRelationInput | Prisma.MilestoneOrderByWithRelationInput[];
    cursor?: Prisma.MilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MilestoneScalarFieldEnum | Prisma.MilestoneScalarFieldEnum[];
};
export type MilestoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where?: Prisma.MilestoneWhereInput;
    orderBy?: Prisma.MilestoneOrderByWithRelationInput | Prisma.MilestoneOrderByWithRelationInput[];
    cursor?: Prisma.MilestoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MilestoneScalarFieldEnum | Prisma.MilestoneScalarFieldEnum[];
};
export type MilestoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MilestoneCreateInput, Prisma.MilestoneUncheckedCreateInput>;
};
export type MilestoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MilestoneCreateManyInput | Prisma.MilestoneCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MilestoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    data: Prisma.MilestoneCreateManyInput | Prisma.MilestoneCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MilestoneIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MilestoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MilestoneUpdateInput, Prisma.MilestoneUncheckedUpdateInput>;
    where: Prisma.MilestoneWhereUniqueInput;
};
export type MilestoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MilestoneUpdateManyMutationInput, Prisma.MilestoneUncheckedUpdateManyInput>;
    where?: Prisma.MilestoneWhereInput;
    limit?: number;
};
export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MilestoneUpdateManyMutationInput, Prisma.MilestoneUncheckedUpdateManyInput>;
    where?: Prisma.MilestoneWhereInput;
    limit?: number;
    include?: Prisma.MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MilestoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where: Prisma.MilestoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.MilestoneCreateInput, Prisma.MilestoneUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MilestoneUpdateInput, Prisma.MilestoneUncheckedUpdateInput>;
};
export type MilestoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where: Prisma.MilestoneWhereUniqueInput;
};
export type MilestoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MilestoneWhereInput;
    limit?: number;
};
export type Milestone$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type MilestoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
};
