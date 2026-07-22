import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskCommentPayload>;
export type AggregateTaskComment = {
    _count: TaskCommentCountAggregateOutputType | null;
    _min: TaskCommentMinAggregateOutputType | null;
    _max: TaskCommentMaxAggregateOutputType | null;
};
export type TaskCommentMinAggregateOutputType = {
    id: string | null;
    body: string | null;
    taskId: string | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCommentMaxAggregateOutputType = {
    id: string | null;
    body: string | null;
    taskId: string | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCommentCountAggregateOutputType = {
    id: number;
    body: number;
    taskId: number;
    authorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskCommentMinAggregateInputType = {
    id?: true;
    body?: true;
    taskId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCommentMaxAggregateInputType = {
    id?: true;
    body?: true;
    taskId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCommentCountAggregateInputType = {
    id?: true;
    body?: true;
    taskId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskCommentWhereInput;
    orderBy?: Prisma.TaskCommentOrderByWithRelationInput | Prisma.TaskCommentOrderByWithRelationInput[];
    cursor?: Prisma.TaskCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCommentCountAggregateInputType;
    _min?: TaskCommentMinAggregateInputType;
    _max?: TaskCommentMaxAggregateInputType;
};
export type GetTaskCommentAggregateType<T extends TaskCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskComment[P]> : Prisma.GetScalarType<T[P], AggregateTaskComment[P]>;
};
export type TaskCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskCommentWhereInput;
    orderBy?: Prisma.TaskCommentOrderByWithAggregationInput | Prisma.TaskCommentOrderByWithAggregationInput[];
    by: Prisma.TaskCommentScalarFieldEnum[] | Prisma.TaskCommentScalarFieldEnum;
    having?: Prisma.TaskCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCommentCountAggregateInputType | true;
    _min?: TaskCommentMinAggregateInputType;
    _max?: TaskCommentMaxAggregateInputType;
};
export type TaskCommentGroupByOutputType = {
    id: string;
    body: string;
    taskId: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCommentCountAggregateOutputType | null;
    _min: TaskCommentMinAggregateOutputType | null;
    _max: TaskCommentMaxAggregateOutputType | null;
};
export type GetTaskCommentGroupByPayload<T extends TaskCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskCommentGroupByOutputType[P]>;
}>>;
export type TaskCommentWhereInput = {
    AND?: Prisma.TaskCommentWhereInput | Prisma.TaskCommentWhereInput[];
    OR?: Prisma.TaskCommentWhereInput[];
    NOT?: Prisma.TaskCommentWhereInput | Prisma.TaskCommentWhereInput[];
    id?: Prisma.StringFilter<"TaskComment"> | string;
    body?: Prisma.StringFilter<"TaskComment"> | string;
    taskId?: Prisma.StringFilter<"TaskComment"> | string;
    authorId?: Prisma.StringFilter<"TaskComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"TaskComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskComment"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TaskCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
    author?: Prisma.UserOrderByWithRelationInput;
};
export type TaskCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskCommentWhereInput | Prisma.TaskCommentWhereInput[];
    OR?: Prisma.TaskCommentWhereInput[];
    NOT?: Prisma.TaskCommentWhereInput | Prisma.TaskCommentWhereInput[];
    body?: Prisma.StringFilter<"TaskComment"> | string;
    taskId?: Prisma.StringFilter<"TaskComment"> | string;
    authorId?: Prisma.StringFilter<"TaskComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"TaskComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskComment"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type TaskCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskCommentCountOrderByAggregateInput;
    _max?: Prisma.TaskCommentMaxOrderByAggregateInput;
    _min?: Prisma.TaskCommentMinOrderByAggregateInput;
};
export type TaskCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskCommentScalarWhereWithAggregatesInput | Prisma.TaskCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskCommentScalarWhereWithAggregatesInput | Prisma.TaskCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TaskComment"> | string;
    body?: Prisma.StringWithAggregatesFilter<"TaskComment"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"TaskComment"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"TaskComment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaskComment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TaskComment"> | Date | string;
};
export type TaskCommentCreateInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutCommentsInput;
    author: Prisma.UserCreateNestedOneWithoutTaskCommentsInput;
};
export type TaskCommentUncheckedCreateInput = {
    id?: string;
    body: string;
    taskId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutCommentsNestedInput;
    author?: Prisma.UserUpdateOneRequiredWithoutTaskCommentsNestedInput;
};
export type TaskCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentCreateManyInput = {
    id?: string;
    body: string;
    taskId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentListRelationFilter = {
    every?: Prisma.TaskCommentWhereInput;
    some?: Prisma.TaskCommentWhereInput;
    none?: Prisma.TaskCommentWhereInput;
};
export type TaskCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskCommentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutAuthorInput, Prisma.TaskCommentUncheckedCreateWithoutAuthorInput> | Prisma.TaskCommentCreateWithoutAuthorInput[] | Prisma.TaskCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutAuthorInput | Prisma.TaskCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.TaskCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
};
export type TaskCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutAuthorInput, Prisma.TaskCommentUncheckedCreateWithoutAuthorInput> | Prisma.TaskCommentCreateWithoutAuthorInput[] | Prisma.TaskCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutAuthorInput | Prisma.TaskCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.TaskCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
};
export type TaskCommentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutAuthorInput, Prisma.TaskCommentUncheckedCreateWithoutAuthorInput> | Prisma.TaskCommentCreateWithoutAuthorInput[] | Prisma.TaskCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutAuthorInput | Prisma.TaskCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.TaskCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.TaskCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.TaskCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    disconnect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    delete?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    update?: Prisma.TaskCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.TaskCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.TaskCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.TaskCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.TaskCommentScalarWhereInput | Prisma.TaskCommentScalarWhereInput[];
};
export type TaskCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutAuthorInput, Prisma.TaskCommentUncheckedCreateWithoutAuthorInput> | Prisma.TaskCommentCreateWithoutAuthorInput[] | Prisma.TaskCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutAuthorInput | Prisma.TaskCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.TaskCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.TaskCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.TaskCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    disconnect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    delete?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    update?: Prisma.TaskCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.TaskCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.TaskCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.TaskCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.TaskCommentScalarWhereInput | Prisma.TaskCommentScalarWhereInput[];
};
export type TaskCommentCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutTaskInput, Prisma.TaskCommentUncheckedCreateWithoutTaskInput> | Prisma.TaskCommentCreateWithoutTaskInput[] | Prisma.TaskCommentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutTaskInput | Prisma.TaskCommentCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskCommentCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
};
export type TaskCommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutTaskInput, Prisma.TaskCommentUncheckedCreateWithoutTaskInput> | Prisma.TaskCommentCreateWithoutTaskInput[] | Prisma.TaskCommentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutTaskInput | Prisma.TaskCommentCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskCommentCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
};
export type TaskCommentUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutTaskInput, Prisma.TaskCommentUncheckedCreateWithoutTaskInput> | Prisma.TaskCommentCreateWithoutTaskInput[] | Prisma.TaskCommentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutTaskInput | Prisma.TaskCommentCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskCommentUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskCommentUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskCommentCreateManyTaskInputEnvelope;
    set?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    disconnect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    delete?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    update?: Prisma.TaskCommentUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskCommentUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskCommentUpdateManyWithWhereWithoutTaskInput | Prisma.TaskCommentUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskCommentScalarWhereInput | Prisma.TaskCommentScalarWhereInput[];
};
export type TaskCommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCommentCreateWithoutTaskInput, Prisma.TaskCommentUncheckedCreateWithoutTaskInput> | Prisma.TaskCommentCreateWithoutTaskInput[] | Prisma.TaskCommentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskCommentCreateOrConnectWithoutTaskInput | Prisma.TaskCommentCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskCommentUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskCommentUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskCommentCreateManyTaskInputEnvelope;
    set?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    disconnect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    delete?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    connect?: Prisma.TaskCommentWhereUniqueInput | Prisma.TaskCommentWhereUniqueInput[];
    update?: Prisma.TaskCommentUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskCommentUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskCommentUpdateManyWithWhereWithoutTaskInput | Prisma.TaskCommentUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskCommentScalarWhereInput | Prisma.TaskCommentScalarWhereInput[];
};
export type TaskCommentCreateWithoutAuthorInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutCommentsInput;
};
export type TaskCommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    body: string;
    taskId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCommentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.TaskCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCommentCreateWithoutAuthorInput, Prisma.TaskCommentUncheckedCreateWithoutAuthorInput>;
};
export type TaskCommentCreateManyAuthorInputEnvelope = {
    data: Prisma.TaskCommentCreateManyAuthorInput | Prisma.TaskCommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type TaskCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.TaskCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskCommentUpdateWithoutAuthorInput, Prisma.TaskCommentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.TaskCommentCreateWithoutAuthorInput, Prisma.TaskCommentUncheckedCreateWithoutAuthorInput>;
};
export type TaskCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.TaskCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskCommentUpdateWithoutAuthorInput, Prisma.TaskCommentUncheckedUpdateWithoutAuthorInput>;
};
export type TaskCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.TaskCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskCommentUpdateManyMutationInput, Prisma.TaskCommentUncheckedUpdateManyWithoutAuthorInput>;
};
export type TaskCommentScalarWhereInput = {
    AND?: Prisma.TaskCommentScalarWhereInput | Prisma.TaskCommentScalarWhereInput[];
    OR?: Prisma.TaskCommentScalarWhereInput[];
    NOT?: Prisma.TaskCommentScalarWhereInput | Prisma.TaskCommentScalarWhereInput[];
    id?: Prisma.StringFilter<"TaskComment"> | string;
    body?: Prisma.StringFilter<"TaskComment"> | string;
    taskId?: Prisma.StringFilter<"TaskComment"> | string;
    authorId?: Prisma.StringFilter<"TaskComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"TaskComment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskComment"> | Date | string;
};
export type TaskCommentCreateWithoutTaskInput = {
    id?: string;
    body: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.UserCreateNestedOneWithoutTaskCommentsInput;
};
export type TaskCommentUncheckedCreateWithoutTaskInput = {
    id?: string;
    body: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCommentCreateOrConnectWithoutTaskInput = {
    where: Prisma.TaskCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCommentCreateWithoutTaskInput, Prisma.TaskCommentUncheckedCreateWithoutTaskInput>;
};
export type TaskCommentCreateManyTaskInputEnvelope = {
    data: Prisma.TaskCommentCreateManyTaskInput | Prisma.TaskCommentCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type TaskCommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskCommentUpdateWithoutTaskInput, Prisma.TaskCommentUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.TaskCommentCreateWithoutTaskInput, Prisma.TaskCommentUncheckedCreateWithoutTaskInput>;
};
export type TaskCommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskCommentUpdateWithoutTaskInput, Prisma.TaskCommentUncheckedUpdateWithoutTaskInput>;
};
export type TaskCommentUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.TaskCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskCommentUpdateManyMutationInput, Prisma.TaskCommentUncheckedUpdateManyWithoutTaskInput>;
};
export type TaskCommentCreateManyAuthorInput = {
    id?: string;
    body: string;
    taskId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCommentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutCommentsNestedInput;
};
export type TaskCommentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentCreateManyTaskInput = {
    id?: string;
    body: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCommentUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.UserUpdateOneRequiredWithoutTaskCommentsNestedInput;
};
export type TaskCommentUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    body?: boolean;
    taskId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskComment"]>;
export type TaskCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    body?: boolean;
    taskId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskComment"]>;
export type TaskCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    body?: boolean;
    taskId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskComment"]>;
export type TaskCommentSelectScalar = {
    id?: boolean;
    body?: boolean;
    taskId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "body" | "taskId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["taskComment"]>;
export type TaskCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TaskCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskComment";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        body: string;
        taskId: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["taskComment"]>;
    composites: {};
};
export type TaskCommentGetPayload<S extends boolean | null | undefined | TaskCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload, S>;
export type TaskCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCommentCountAggregateInputType | true;
};
export interface TaskCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskComment'];
        meta: {
            name: 'TaskComment';
        };
    };
    findUnique<T extends TaskCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskCommentFindManyArgs>(args?: Prisma.SelectSubset<T, TaskCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCommentCreateArgs>(args: Prisma.SelectSubset<T, TaskCommentCreateArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskCommentDeleteArgs>(args: Prisma.SelectSubset<T, TaskCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskCommentUpdateArgs>(args: Prisma.SelectSubset<T, TaskCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskCommentUpsertArgs>(args: Prisma.SelectSubset<T, TaskCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskCommentClient<runtime.Types.Result.GetResult<Prisma.$TaskCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCommentCountArgs>(args?: Prisma.Subset<T, TaskCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCommentCountAggregateOutputType> : number>;
    aggregate<T extends TaskCommentAggregateArgs>(args: Prisma.Subset<T, TaskCommentAggregateArgs>): Prisma.PrismaPromise<GetTaskCommentAggregateType<T>>;
    groupBy<T extends TaskCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskCommentFieldRefs;
}
export interface Prisma__TaskCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskCommentFieldRefs {
    readonly id: Prisma.FieldRef<"TaskComment", 'String'>;
    readonly body: Prisma.FieldRef<"TaskComment", 'String'>;
    readonly taskId: Prisma.FieldRef<"TaskComment", 'String'>;
    readonly authorId: Prisma.FieldRef<"TaskComment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TaskComment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TaskComment", 'DateTime'>;
}
export type TaskCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    where: Prisma.TaskCommentWhereUniqueInput;
};
export type TaskCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    where: Prisma.TaskCommentWhereUniqueInput;
};
export type TaskCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCommentCreateInput, Prisma.TaskCommentUncheckedCreateInput>;
};
export type TaskCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCommentCreateManyInput | Prisma.TaskCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    data: Prisma.TaskCommentCreateManyInput | Prisma.TaskCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCommentUpdateInput, Prisma.TaskCommentUncheckedUpdateInput>;
    where: Prisma.TaskCommentWhereUniqueInput;
};
export type TaskCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskCommentUpdateManyMutationInput, Prisma.TaskCommentUncheckedUpdateManyInput>;
    where?: Prisma.TaskCommentWhereInput;
    limit?: number;
};
export type TaskCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCommentUpdateManyMutationInput, Prisma.TaskCommentUncheckedUpdateManyInput>;
    where?: Prisma.TaskCommentWhereInput;
    limit?: number;
    include?: Prisma.TaskCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    where: Prisma.TaskCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCommentCreateInput, Prisma.TaskCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskCommentUpdateInput, Prisma.TaskCommentUncheckedUpdateInput>;
};
export type TaskCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
    where: Prisma.TaskCommentWhereUniqueInput;
};
export type TaskCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskCommentWhereInput;
    limit?: number;
};
export type TaskCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCommentSelect<ExtArgs> | null;
    omit?: Prisma.TaskCommentOmit<ExtArgs> | null;
    include?: Prisma.TaskCommentInclude<ExtArgs> | null;
};
