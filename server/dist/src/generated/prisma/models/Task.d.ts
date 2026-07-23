import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type TaskSumAggregateOutputType = {
    sortOrder: number | null;
};
export type TaskMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    dueDate: Date | null;
    sortOrder: number | null;
    projectId: string | null;
    milestoneId: string | null;
    assigneeId: string | null;
    recurrenceRule: $Enums.RecurrenceRule | null;
    recurrenceParentId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    dueDate: Date | null;
    sortOrder: number | null;
    projectId: string | null;
    milestoneId: string | null;
    assigneeId: string | null;
    recurrenceRule: $Enums.RecurrenceRule | null;
    recurrenceParentId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    dueDate: number;
    sortOrder: number;
    projectId: number;
    milestoneId: number;
    assigneeId: number;
    recurrenceRule: number;
    recurrenceParentId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskAvgAggregateInputType = {
    sortOrder?: true;
};
export type TaskSumAggregateInputType = {
    sortOrder?: true;
};
export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    dueDate?: true;
    sortOrder?: true;
    projectId?: true;
    milestoneId?: true;
    assigneeId?: true;
    recurrenceRule?: true;
    recurrenceParentId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    dueDate?: true;
    sortOrder?: true;
    projectId?: true;
    milestoneId?: true;
    assigneeId?: true;
    recurrenceRule?: true;
    recurrenceParentId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    dueDate?: true;
    sortOrder?: true;
    projectId?: true;
    milestoneId?: true;
    assigneeId?: true;
    recurrenceRule?: true;
    recurrenceParentId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    status: $Enums.TaskStatus;
    dueDate: Date | null;
    sortOrder: number;
    projectId: string;
    milestoneId: string | null;
    assigneeId: string | null;
    recurrenceRule: $Enums.RecurrenceRule | null;
    recurrenceParentId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    sortOrder?: Prisma.IntFilter<"Task"> | number;
    projectId?: Prisma.StringFilter<"Task"> | string;
    milestoneId?: Prisma.StringNullableFilter<"Task"> | string | null;
    assigneeId?: Prisma.StringNullableFilter<"Task"> | string | null;
    recurrenceRule?: Prisma.EnumRecurrenceRuleNullableFilter<"Task"> | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.StringNullableFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    milestone?: Prisma.XOR<Prisma.MilestoneNullableScalarRelationFilter, Prisma.MilestoneWhereInput> | null;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    comments?: Prisma.TaskCommentListRelationFilter;
    recurrenceParent?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
    recurrenceChildren?: Prisma.TaskListRelationFilter;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    milestoneId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrenceRule?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrenceParentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    milestone?: Prisma.MilestoneOrderByWithRelationInput;
    assignee?: Prisma.UserOrderByWithRelationInput;
    comments?: Prisma.TaskCommentOrderByRelationAggregateInput;
    recurrenceParent?: Prisma.TaskOrderByWithRelationInput;
    recurrenceChildren?: Prisma.TaskOrderByRelationAggregateInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    sortOrder?: Prisma.IntFilter<"Task"> | number;
    projectId?: Prisma.StringFilter<"Task"> | string;
    milestoneId?: Prisma.StringNullableFilter<"Task"> | string | null;
    assigneeId?: Prisma.StringNullableFilter<"Task"> | string | null;
    recurrenceRule?: Prisma.EnumRecurrenceRuleNullableFilter<"Task"> | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.StringNullableFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    milestone?: Prisma.XOR<Prisma.MilestoneNullableScalarRelationFilter, Prisma.MilestoneWhereInput> | null;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    comments?: Prisma.TaskCommentListRelationFilter;
    recurrenceParent?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
    recurrenceChildren?: Prisma.TaskListRelationFilter;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    milestoneId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrenceRule?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrenceParentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    projectId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    milestoneId?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    assigneeId?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    recurrenceRule?: Prisma.EnumRecurrenceRuleNullableWithAggregatesFilter<"Task"> | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
};
export type TaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    milestone?: Prisma.MilestoneCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
    comments?: Prisma.TaskCommentCreateNestedManyWithoutTaskInput;
    recurrenceParent?: Prisma.TaskCreateNestedOneWithoutRecurrenceChildrenInput;
    recurrenceChildren?: Prisma.TaskCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.TaskCommentUncheckedCreateNestedManyWithoutTaskInput;
    recurrenceChildren?: Prisma.TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    milestone?: Prisma.MilestoneUpdateOneWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
    comments?: Prisma.TaskCommentUpdateManyWithoutTaskNestedInput;
    recurrenceParent?: Prisma.TaskUpdateOneWithoutRecurrenceChildrenNestedInput;
    recurrenceChildren?: Prisma.TaskUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.TaskCommentUncheckedUpdateManyWithoutTaskNestedInput;
    recurrenceChildren?: Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskNullableScalarRelationFilter = {
    is?: Prisma.TaskWhereInput | null;
    isNot?: Prisma.TaskWhereInput | null;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    milestoneId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    recurrenceRule?: Prisma.SortOrder;
    recurrenceParentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    milestoneId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    recurrenceRule?: Prisma.SortOrder;
    recurrenceParentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    milestoneId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    recurrenceRule?: Prisma.SortOrder;
    recurrenceParentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type TaskScalarRelationFilter = {
    is?: Prisma.TaskWhereInput;
    isNot?: Prisma.TaskWhereInput;
};
export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutMilestoneInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMilestoneInput, Prisma.TaskUncheckedCreateWithoutMilestoneInput> | Prisma.TaskCreateWithoutMilestoneInput[] | Prisma.TaskUncheckedCreateWithoutMilestoneInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMilestoneInput | Prisma.TaskCreateOrConnectWithoutMilestoneInput[];
    createMany?: Prisma.TaskCreateManyMilestoneInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMilestoneInput, Prisma.TaskUncheckedCreateWithoutMilestoneInput> | Prisma.TaskCreateWithoutMilestoneInput[] | Prisma.TaskUncheckedCreateWithoutMilestoneInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMilestoneInput | Prisma.TaskCreateOrConnectWithoutMilestoneInput[];
    createMany?: Prisma.TaskCreateManyMilestoneInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutMilestoneNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMilestoneInput, Prisma.TaskUncheckedCreateWithoutMilestoneInput> | Prisma.TaskCreateWithoutMilestoneInput[] | Prisma.TaskUncheckedCreateWithoutMilestoneInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMilestoneInput | Prisma.TaskCreateOrConnectWithoutMilestoneInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutMilestoneInput | Prisma.TaskUpsertWithWhereUniqueWithoutMilestoneInput[];
    createMany?: Prisma.TaskCreateManyMilestoneInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutMilestoneInput | Prisma.TaskUpdateWithWhereUniqueWithoutMilestoneInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutMilestoneInput | Prisma.TaskUpdateManyWithWhereWithoutMilestoneInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMilestoneInput, Prisma.TaskUncheckedCreateWithoutMilestoneInput> | Prisma.TaskCreateWithoutMilestoneInput[] | Prisma.TaskUncheckedCreateWithoutMilestoneInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMilestoneInput | Prisma.TaskCreateOrConnectWithoutMilestoneInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutMilestoneInput | Prisma.TaskUpsertWithWhereUniqueWithoutMilestoneInput[];
    createMany?: Prisma.TaskCreateManyMilestoneInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutMilestoneInput | Prisma.TaskUpdateWithWhereUniqueWithoutMilestoneInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutMilestoneInput | Prisma.TaskUpdateManyWithWhereWithoutMilestoneInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedOneWithoutRecurrenceChildrenInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceChildrenInput, Prisma.TaskUncheckedCreateWithoutRecurrenceChildrenInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutRecurrenceChildrenInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskCreateNestedManyWithoutRecurrenceParentInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceParentInput, Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput> | Prisma.TaskCreateWithoutRecurrenceParentInput[] | Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput | Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput[];
    createMany?: Prisma.TaskCreateManyRecurrenceParentInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceParentInput, Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput> | Prisma.TaskCreateWithoutRecurrenceParentInput[] | Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput | Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput[];
    createMany?: Prisma.TaskCreateManyRecurrenceParentInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type NullableEnumRecurrenceRuleFieldUpdateOperationsInput = {
    set?: $Enums.RecurrenceRule | null;
};
export type TaskUpdateOneWithoutRecurrenceChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceChildrenInput, Prisma.TaskUncheckedCreateWithoutRecurrenceChildrenInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutRecurrenceChildrenInput;
    upsert?: Prisma.TaskUpsertWithoutRecurrenceChildrenInput;
    disconnect?: Prisma.TaskWhereInput | boolean;
    delete?: Prisma.TaskWhereInput | boolean;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutRecurrenceChildrenInput, Prisma.TaskUpdateWithoutRecurrenceChildrenInput>, Prisma.TaskUncheckedUpdateWithoutRecurrenceChildrenInput>;
};
export type TaskUpdateManyWithoutRecurrenceParentNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceParentInput, Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput> | Prisma.TaskCreateWithoutRecurrenceParentInput[] | Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput | Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutRecurrenceParentInput | Prisma.TaskUpsertWithWhereUniqueWithoutRecurrenceParentInput[];
    createMany?: Prisma.TaskCreateManyRecurrenceParentInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutRecurrenceParentInput | Prisma.TaskUpdateWithWhereUniqueWithoutRecurrenceParentInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutRecurrenceParentInput | Prisma.TaskUpdateManyWithWhereWithoutRecurrenceParentInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceParentInput, Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput> | Prisma.TaskCreateWithoutRecurrenceParentInput[] | Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput | Prisma.TaskCreateOrConnectWithoutRecurrenceParentInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutRecurrenceParentInput | Prisma.TaskUpsertWithWhereUniqueWithoutRecurrenceParentInput[];
    createMany?: Prisma.TaskCreateManyRecurrenceParentInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutRecurrenceParentInput | Prisma.TaskUpdateWithWhereUniqueWithoutRecurrenceParentInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutRecurrenceParentInput | Prisma.TaskUpdateManyWithWhereWithoutRecurrenceParentInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.TaskUpsertWithoutCommentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutCommentsInput, Prisma.TaskUpdateWithoutCommentsInput>, Prisma.TaskUncheckedUpdateWithoutCommentsInput>;
};
export type TaskCreateWithoutAssigneeInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    milestone?: Prisma.MilestoneCreateNestedOneWithoutTasksInput;
    comments?: Prisma.TaskCommentCreateNestedManyWithoutTaskInput;
    recurrenceParent?: Prisma.TaskCreateNestedOneWithoutRecurrenceChildrenInput;
    recurrenceChildren?: Prisma.TaskCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.TaskCommentUncheckedCreateNestedManyWithoutTaskInput;
    recurrenceChildren?: Prisma.TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskCreateManyAssigneeInputEnvelope = {
    data: Prisma.TaskCreateManyAssigneeInput | Prisma.TaskCreateManyAssigneeInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
};
export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutAssigneeInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    sortOrder?: Prisma.IntFilter<"Task"> | number;
    projectId?: Prisma.StringFilter<"Task"> | string;
    milestoneId?: Prisma.StringNullableFilter<"Task"> | string | null;
    assigneeId?: Prisma.StringNullableFilter<"Task"> | string | null;
    recurrenceRule?: Prisma.EnumRecurrenceRuleNullableFilter<"Task"> | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.StringNullableFilter<"Task"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
};
export type TaskCreateWithoutProjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    milestone?: Prisma.MilestoneCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
    comments?: Prisma.TaskCommentCreateNestedManyWithoutTaskInput;
    recurrenceParent?: Prisma.TaskCreateNestedOneWithoutRecurrenceChildrenInput;
    recurrenceChildren?: Prisma.TaskCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.TaskCommentUncheckedCreateNestedManyWithoutTaskInput;
    recurrenceChildren?: Prisma.TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskCreateOrConnectWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskCreateManyProjectInputEnvelope = {
    data: Prisma.TaskCreateManyProjectInput | Prisma.TaskCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
};
export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutProjectInput>;
};
export type TaskCreateWithoutMilestoneInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
    comments?: Prisma.TaskCommentCreateNestedManyWithoutTaskInput;
    recurrenceParent?: Prisma.TaskCreateNestedOneWithoutRecurrenceChildrenInput;
    recurrenceChildren?: Prisma.TaskCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUncheckedCreateWithoutMilestoneInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.TaskCommentUncheckedCreateNestedManyWithoutTaskInput;
    recurrenceChildren?: Prisma.TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskCreateOrConnectWithoutMilestoneInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutMilestoneInput, Prisma.TaskUncheckedCreateWithoutMilestoneInput>;
};
export type TaskCreateManyMilestoneInputEnvelope = {
    data: Prisma.TaskCreateManyMilestoneInput | Prisma.TaskCreateManyMilestoneInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutMilestoneInput, Prisma.TaskUncheckedUpdateWithoutMilestoneInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutMilestoneInput, Prisma.TaskUncheckedCreateWithoutMilestoneInput>;
};
export type TaskUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutMilestoneInput, Prisma.TaskUncheckedUpdateWithoutMilestoneInput>;
};
export type TaskUpdateManyWithWhereWithoutMilestoneInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutMilestoneInput>;
};
export type TaskCreateWithoutRecurrenceChildrenInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    milestone?: Prisma.MilestoneCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
    comments?: Prisma.TaskCommentCreateNestedManyWithoutTaskInput;
    recurrenceParent?: Prisma.TaskCreateNestedOneWithoutRecurrenceChildrenInput;
};
export type TaskUncheckedCreateWithoutRecurrenceChildrenInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.TaskCommentUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutRecurrenceChildrenInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceChildrenInput, Prisma.TaskUncheckedCreateWithoutRecurrenceChildrenInput>;
};
export type TaskCreateWithoutRecurrenceParentInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    milestone?: Prisma.MilestoneCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
    comments?: Prisma.TaskCommentCreateNestedManyWithoutTaskInput;
    recurrenceChildren?: Prisma.TaskCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUncheckedCreateWithoutRecurrenceParentInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.TaskCommentUncheckedCreateNestedManyWithoutTaskInput;
    recurrenceChildren?: Prisma.TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskCreateOrConnectWithoutRecurrenceParentInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceParentInput, Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput>;
};
export type TaskCreateManyRecurrenceParentInputEnvelope = {
    data: Prisma.TaskCreateManyRecurrenceParentInput | Prisma.TaskCreateManyRecurrenceParentInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithoutRecurrenceChildrenInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutRecurrenceChildrenInput, Prisma.TaskUncheckedUpdateWithoutRecurrenceChildrenInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceChildrenInput, Prisma.TaskUncheckedCreateWithoutRecurrenceChildrenInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutRecurrenceChildrenInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutRecurrenceChildrenInput, Prisma.TaskUncheckedUpdateWithoutRecurrenceChildrenInput>;
};
export type TaskUpdateWithoutRecurrenceChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    milestone?: Prisma.MilestoneUpdateOneWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
    comments?: Prisma.TaskCommentUpdateManyWithoutTaskNestedInput;
    recurrenceParent?: Prisma.TaskUpdateOneWithoutRecurrenceChildrenNestedInput;
};
export type TaskUncheckedUpdateWithoutRecurrenceChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.TaskCommentUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUpsertWithWhereUniqueWithoutRecurrenceParentInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutRecurrenceParentInput, Prisma.TaskUncheckedUpdateWithoutRecurrenceParentInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutRecurrenceParentInput, Prisma.TaskUncheckedCreateWithoutRecurrenceParentInput>;
};
export type TaskUpdateWithWhereUniqueWithoutRecurrenceParentInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutRecurrenceParentInput, Prisma.TaskUncheckedUpdateWithoutRecurrenceParentInput>;
};
export type TaskUpdateManyWithWhereWithoutRecurrenceParentInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentInput>;
};
export type TaskCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    milestone?: Prisma.MilestoneCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
    recurrenceParent?: Prisma.TaskCreateNestedOneWithoutRecurrenceChildrenInput;
    recurrenceChildren?: Prisma.TaskCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    recurrenceChildren?: Prisma.TaskUncheckedCreateNestedManyWithoutRecurrenceParentInput;
};
export type TaskCreateOrConnectWithoutCommentsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
};
export type TaskUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutCommentsInput, Prisma.TaskUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutCommentsInput, Prisma.TaskUncheckedUpdateWithoutCommentsInput>;
};
export type TaskUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    milestone?: Prisma.MilestoneUpdateOneWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
    recurrenceParent?: Prisma.TaskUpdateOneWithoutRecurrenceChildrenNestedInput;
    recurrenceChildren?: Prisma.TaskUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recurrenceChildren?: Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskCreateManyAssigneeInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutAssigneeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    milestone?: Prisma.MilestoneUpdateOneWithoutTasksNestedInput;
    comments?: Prisma.TaskCommentUpdateManyWithoutTaskNestedInput;
    recurrenceParent?: Prisma.TaskUpdateOneWithoutRecurrenceChildrenNestedInput;
    recurrenceChildren?: Prisma.TaskUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.TaskCommentUncheckedUpdateManyWithoutTaskNestedInput;
    recurrenceChildren?: Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyProjectInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milestone?: Prisma.MilestoneUpdateOneWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
    comments?: Prisma.TaskCommentUpdateManyWithoutTaskNestedInput;
    recurrenceParent?: Prisma.TaskUpdateOneWithoutRecurrenceChildrenNestedInput;
    recurrenceChildren?: Prisma.TaskUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.TaskCommentUncheckedUpdateManyWithoutTaskNestedInput;
    recurrenceChildren?: Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyMilestoneInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    recurrenceParentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutMilestoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
    comments?: Prisma.TaskCommentUpdateManyWithoutTaskNestedInput;
    recurrenceParent?: Prisma.TaskUpdateOneWithoutRecurrenceChildrenNestedInput;
    recurrenceChildren?: Prisma.TaskUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateWithoutMilestoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.TaskCommentUncheckedUpdateManyWithoutTaskNestedInput;
    recurrenceChildren?: Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateManyWithoutMilestoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    recurrenceParentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyRecurrenceParentInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    dueDate?: Date | string | null;
    sortOrder?: number;
    projectId: string;
    milestoneId?: string | null;
    assigneeId?: string | null;
    recurrenceRule?: $Enums.RecurrenceRule | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutRecurrenceParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    milestone?: Prisma.MilestoneUpdateOneWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
    comments?: Prisma.TaskCommentUpdateManyWithoutTaskNestedInput;
    recurrenceChildren?: Prisma.TaskUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateWithoutRecurrenceParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.TaskCommentUncheckedUpdateManyWithoutTaskNestedInput;
    recurrenceChildren?: Prisma.TaskUncheckedUpdateManyWithoutRecurrenceParentNestedInput;
};
export type TaskUncheckedUpdateManyWithoutRecurrenceParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    milestoneId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigneeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recurrenceRule?: Prisma.NullableEnumRecurrenceRuleFieldUpdateOperationsInput | $Enums.RecurrenceRule | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCountOutputType = {
    comments: number;
    recurrenceChildren: number;
};
export type TaskCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs;
    recurrenceChildren?: boolean | TaskCountOutputTypeCountRecurrenceChildrenArgs;
};
export type TaskCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCountOutputTypeSelect<ExtArgs> | null;
};
export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskCommentWhereInput;
};
export type TaskCountOutputTypeCountRecurrenceChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    milestoneId?: boolean;
    assigneeId?: boolean;
    recurrenceRule?: boolean;
    recurrenceParentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    milestone?: boolean | Prisma.Task$milestoneArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    comments?: boolean | Prisma.Task$commentsArgs<ExtArgs>;
    recurrenceParent?: boolean | Prisma.Task$recurrenceParentArgs<ExtArgs>;
    recurrenceChildren?: boolean | Prisma.Task$recurrenceChildrenArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    milestoneId?: boolean;
    assigneeId?: boolean;
    recurrenceRule?: boolean;
    recurrenceParentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    milestone?: boolean | Prisma.Task$milestoneArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    recurrenceParent?: boolean | Prisma.Task$recurrenceParentArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    milestoneId?: boolean;
    assigneeId?: boolean;
    recurrenceRule?: boolean;
    recurrenceParentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    milestone?: boolean | Prisma.Task$milestoneArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    recurrenceParent?: boolean | Prisma.Task$recurrenceParentArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    dueDate?: boolean;
    sortOrder?: boolean;
    projectId?: boolean;
    milestoneId?: boolean;
    assigneeId?: boolean;
    recurrenceRule?: boolean;
    recurrenceParentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "status" | "dueDate" | "sortOrder" | "projectId" | "milestoneId" | "assigneeId" | "recurrenceRule" | "recurrenceParentId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    milestone?: boolean | Prisma.Task$milestoneArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    comments?: boolean | Prisma.Task$commentsArgs<ExtArgs>;
    recurrenceParent?: boolean | Prisma.Task$recurrenceParentArgs<ExtArgs>;
    recurrenceChildren?: boolean | Prisma.Task$recurrenceChildrenArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    milestone?: boolean | Prisma.Task$milestoneArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    recurrenceParent?: boolean | Prisma.Task$recurrenceParentArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    milestone?: boolean | Prisma.Task$milestoneArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    recurrenceParent?: boolean | Prisma.Task$recurrenceParentArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        milestone: Prisma.$MilestonePayload<ExtArgs> | null;
        assignee: Prisma.$UserPayload<ExtArgs> | null;
        comments: Prisma.$TaskCommentPayload<ExtArgs>[];
        recurrenceParent: Prisma.$TaskPayload<ExtArgs> | null;
        recurrenceChildren: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        status: $Enums.TaskStatus;
        dueDate: Date | null;
        sortOrder: number;
        projectId: string;
        milestoneId: string | null;
        assigneeId: string | null;
        recurrenceRule: $Enums.RecurrenceRule | null;
        recurrenceParentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    milestone<T extends Prisma.Task$milestoneArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$milestoneArgs<ExtArgs>>): Prisma.Prisma__MilestoneClient<runtime.Types.Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    assignee<T extends Prisma.Task$assigneeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$assigneeArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.Task$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    recurrenceParent<T extends Prisma.Task$recurrenceParentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$recurrenceParentArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    recurrenceChildren<T extends Prisma.Task$recurrenceChildrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$recurrenceChildrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'String'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly status: Prisma.FieldRef<"Task", 'TaskStatus'>;
    readonly dueDate: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly sortOrder: Prisma.FieldRef<"Task", 'Int'>;
    readonly projectId: Prisma.FieldRef<"Task", 'String'>;
    readonly milestoneId: Prisma.FieldRef<"Task", 'String'>;
    readonly assigneeId: Prisma.FieldRef<"Task", 'String'>;
    readonly recurrenceRule: Prisma.FieldRef<"Task", 'RecurrenceRule'>;
    readonly recurrenceParentId: Prisma.FieldRef<"Task", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$milestoneArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MilestoneSelect<ExtArgs> | null;
    omit?: Prisma.MilestoneOmit<ExtArgs> | null;
    include?: Prisma.MilestoneInclude<ExtArgs> | null;
    where?: Prisma.MilestoneWhereInput;
};
export type Task$assigneeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Task$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    where?: Prisma.TaskCommentWhereInput;
    orderBy?: Prisma.TaskCommentOrderByWithRelationInput | Prisma.TaskCommentOrderByWithRelationInput[];
    cursor?: Prisma.TaskCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskCommentScalarFieldEnum | Prisma.TaskCommentScalarFieldEnum[];
};
export type Task$recurrenceParentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
};
export type Task$recurrenceChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
