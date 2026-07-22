import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BriefQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$BriefQuestionPayload>;
export type AggregateBriefQuestion = {
    _count: BriefQuestionCountAggregateOutputType | null;
    _avg: BriefQuestionAvgAggregateOutputType | null;
    _sum: BriefQuestionSumAggregateOutputType | null;
    _min: BriefQuestionMinAggregateOutputType | null;
    _max: BriefQuestionMaxAggregateOutputType | null;
};
export type BriefQuestionAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type BriefQuestionSumAggregateOutputType = {
    sortOrder: number | null;
};
export type BriefQuestionMinAggregateOutputType = {
    id: string | null;
    question: string | null;
    answer: string | null;
    status: $Enums.QuestionStatus | null;
    owner: string | null;
    dueDate: Date | null;
    priority: $Enums.FollowUpPriority | null;
    briefId: string | null;
    sortOrder: number | null;
};
export type BriefQuestionMaxAggregateOutputType = {
    id: string | null;
    question: string | null;
    answer: string | null;
    status: $Enums.QuestionStatus | null;
    owner: string | null;
    dueDate: Date | null;
    priority: $Enums.FollowUpPriority | null;
    briefId: string | null;
    sortOrder: number | null;
};
export type BriefQuestionCountAggregateOutputType = {
    id: number;
    question: number;
    answer: number;
    status: number;
    owner: number;
    dueDate: number;
    priority: number;
    briefId: number;
    sortOrder: number;
    _all: number;
};
export type BriefQuestionAvgAggregateInputType = {
    sortOrder?: true;
};
export type BriefQuestionSumAggregateInputType = {
    sortOrder?: true;
};
export type BriefQuestionMinAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    status?: true;
    owner?: true;
    dueDate?: true;
    priority?: true;
    briefId?: true;
    sortOrder?: true;
};
export type BriefQuestionMaxAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    status?: true;
    owner?: true;
    dueDate?: true;
    priority?: true;
    briefId?: true;
    sortOrder?: true;
};
export type BriefQuestionCountAggregateInputType = {
    id?: true;
    question?: true;
    answer?: true;
    status?: true;
    owner?: true;
    dueDate?: true;
    priority?: true;
    briefId?: true;
    sortOrder?: true;
    _all?: true;
};
export type BriefQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefQuestionWhereInput;
    orderBy?: Prisma.BriefQuestionOrderByWithRelationInput | Prisma.BriefQuestionOrderByWithRelationInput[];
    cursor?: Prisma.BriefQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BriefQuestionCountAggregateInputType;
    _avg?: BriefQuestionAvgAggregateInputType;
    _sum?: BriefQuestionSumAggregateInputType;
    _min?: BriefQuestionMinAggregateInputType;
    _max?: BriefQuestionMaxAggregateInputType;
};
export type GetBriefQuestionAggregateType<T extends BriefQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateBriefQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBriefQuestion[P]> : Prisma.GetScalarType<T[P], AggregateBriefQuestion[P]>;
};
export type BriefQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefQuestionWhereInput;
    orderBy?: Prisma.BriefQuestionOrderByWithAggregationInput | Prisma.BriefQuestionOrderByWithAggregationInput[];
    by: Prisma.BriefQuestionScalarFieldEnum[] | Prisma.BriefQuestionScalarFieldEnum;
    having?: Prisma.BriefQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BriefQuestionCountAggregateInputType | true;
    _avg?: BriefQuestionAvgAggregateInputType;
    _sum?: BriefQuestionSumAggregateInputType;
    _min?: BriefQuestionMinAggregateInputType;
    _max?: BriefQuestionMaxAggregateInputType;
};
export type BriefQuestionGroupByOutputType = {
    id: string;
    question: string;
    answer: string | null;
    status: $Enums.QuestionStatus;
    owner: string | null;
    dueDate: Date | null;
    priority: $Enums.FollowUpPriority;
    briefId: string;
    sortOrder: number;
    _count: BriefQuestionCountAggregateOutputType | null;
    _avg: BriefQuestionAvgAggregateOutputType | null;
    _sum: BriefQuestionSumAggregateOutputType | null;
    _min: BriefQuestionMinAggregateOutputType | null;
    _max: BriefQuestionMaxAggregateOutputType | null;
};
export type GetBriefQuestionGroupByPayload<T extends BriefQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BriefQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BriefQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BriefQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BriefQuestionGroupByOutputType[P]>;
}>>;
export type BriefQuestionWhereInput = {
    AND?: Prisma.BriefQuestionWhereInput | Prisma.BriefQuestionWhereInput[];
    OR?: Prisma.BriefQuestionWhereInput[];
    NOT?: Prisma.BriefQuestionWhereInput | Prisma.BriefQuestionWhereInput[];
    id?: Prisma.StringFilter<"BriefQuestion"> | string;
    question?: Prisma.StringFilter<"BriefQuestion"> | string;
    answer?: Prisma.StringNullableFilter<"BriefQuestion"> | string | null;
    status?: Prisma.EnumQuestionStatusFilter<"BriefQuestion"> | $Enums.QuestionStatus;
    owner?: Prisma.StringNullableFilter<"BriefQuestion"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"BriefQuestion"> | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFilter<"BriefQuestion"> | $Enums.FollowUpPriority;
    briefId?: Prisma.StringFilter<"BriefQuestion"> | string;
    sortOrder?: Prisma.IntFilter<"BriefQuestion"> | number;
    brief?: Prisma.XOR<Prisma.DiscoveryBriefScalarRelationFilter, Prisma.DiscoveryBriefWhereInput>;
};
export type BriefQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    owner?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    brief?: Prisma.DiscoveryBriefOrderByWithRelationInput;
};
export type BriefQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BriefQuestionWhereInput | Prisma.BriefQuestionWhereInput[];
    OR?: Prisma.BriefQuestionWhereInput[];
    NOT?: Prisma.BriefQuestionWhereInput | Prisma.BriefQuestionWhereInput[];
    question?: Prisma.StringFilter<"BriefQuestion"> | string;
    answer?: Prisma.StringNullableFilter<"BriefQuestion"> | string | null;
    status?: Prisma.EnumQuestionStatusFilter<"BriefQuestion"> | $Enums.QuestionStatus;
    owner?: Prisma.StringNullableFilter<"BriefQuestion"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"BriefQuestion"> | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFilter<"BriefQuestion"> | $Enums.FollowUpPriority;
    briefId?: Prisma.StringFilter<"BriefQuestion"> | string;
    sortOrder?: Prisma.IntFilter<"BriefQuestion"> | number;
    brief?: Prisma.XOR<Prisma.DiscoveryBriefScalarRelationFilter, Prisma.DiscoveryBriefWhereInput>;
}, "id">;
export type BriefQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    owner?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.BriefQuestionCountOrderByAggregateInput;
    _avg?: Prisma.BriefQuestionAvgOrderByAggregateInput;
    _max?: Prisma.BriefQuestionMaxOrderByAggregateInput;
    _min?: Prisma.BriefQuestionMinOrderByAggregateInput;
    _sum?: Prisma.BriefQuestionSumOrderByAggregateInput;
};
export type BriefQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BriefQuestionScalarWhereWithAggregatesInput | Prisma.BriefQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BriefQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BriefQuestionScalarWhereWithAggregatesInput | Prisma.BriefQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BriefQuestion"> | string;
    question?: Prisma.StringWithAggregatesFilter<"BriefQuestion"> | string;
    answer?: Prisma.StringNullableWithAggregatesFilter<"BriefQuestion"> | string | null;
    status?: Prisma.EnumQuestionStatusWithAggregatesFilter<"BriefQuestion"> | $Enums.QuestionStatus;
    owner?: Prisma.StringNullableWithAggregatesFilter<"BriefQuestion"> | string | null;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"BriefQuestion"> | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityWithAggregatesFilter<"BriefQuestion"> | $Enums.FollowUpPriority;
    briefId?: Prisma.StringWithAggregatesFilter<"BriefQuestion"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"BriefQuestion"> | number;
};
export type BriefQuestionCreateInput = {
    id?: string;
    question: string;
    answer?: string | null;
    status?: $Enums.QuestionStatus;
    owner?: string | null;
    dueDate?: Date | string | null;
    priority?: $Enums.FollowUpPriority;
    sortOrder?: number;
    brief: Prisma.DiscoveryBriefCreateNestedOneWithoutOpenQuestionsInput;
};
export type BriefQuestionUncheckedCreateInput = {
    id?: string;
    question: string;
    answer?: string | null;
    status?: $Enums.QuestionStatus;
    owner?: string | null;
    dueDate?: Date | string | null;
    priority?: $Enums.FollowUpPriority;
    briefId: string;
    sortOrder?: number;
};
export type BriefQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    brief?: Prisma.DiscoveryBriefUpdateOneRequiredWithoutOpenQuestionsNestedInput;
};
export type BriefQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    briefId?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BriefQuestionCreateManyInput = {
    id?: string;
    question: string;
    answer?: string | null;
    status?: $Enums.QuestionStatus;
    owner?: string | null;
    dueDate?: Date | string | null;
    priority?: $Enums.FollowUpPriority;
    briefId: string;
    sortOrder?: number;
};
export type BriefQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BriefQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    briefId?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BriefQuestionListRelationFilter = {
    every?: Prisma.BriefQuestionWhereInput;
    some?: Prisma.BriefQuestionWhereInput;
    none?: Prisma.BriefQuestionWhereInput;
};
export type BriefQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BriefQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type BriefQuestionAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type BriefQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type BriefQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    briefId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type BriefQuestionSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type BriefQuestionCreateNestedManyWithoutBriefInput = {
    create?: Prisma.XOR<Prisma.BriefQuestionCreateWithoutBriefInput, Prisma.BriefQuestionUncheckedCreateWithoutBriefInput> | Prisma.BriefQuestionCreateWithoutBriefInput[] | Prisma.BriefQuestionUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefQuestionCreateOrConnectWithoutBriefInput | Prisma.BriefQuestionCreateOrConnectWithoutBriefInput[];
    createMany?: Prisma.BriefQuestionCreateManyBriefInputEnvelope;
    connect?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
};
export type BriefQuestionUncheckedCreateNestedManyWithoutBriefInput = {
    create?: Prisma.XOR<Prisma.BriefQuestionCreateWithoutBriefInput, Prisma.BriefQuestionUncheckedCreateWithoutBriefInput> | Prisma.BriefQuestionCreateWithoutBriefInput[] | Prisma.BriefQuestionUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefQuestionCreateOrConnectWithoutBriefInput | Prisma.BriefQuestionCreateOrConnectWithoutBriefInput[];
    createMany?: Prisma.BriefQuestionCreateManyBriefInputEnvelope;
    connect?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
};
export type BriefQuestionUpdateManyWithoutBriefNestedInput = {
    create?: Prisma.XOR<Prisma.BriefQuestionCreateWithoutBriefInput, Prisma.BriefQuestionUncheckedCreateWithoutBriefInput> | Prisma.BriefQuestionCreateWithoutBriefInput[] | Prisma.BriefQuestionUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefQuestionCreateOrConnectWithoutBriefInput | Prisma.BriefQuestionCreateOrConnectWithoutBriefInput[];
    upsert?: Prisma.BriefQuestionUpsertWithWhereUniqueWithoutBriefInput | Prisma.BriefQuestionUpsertWithWhereUniqueWithoutBriefInput[];
    createMany?: Prisma.BriefQuestionCreateManyBriefInputEnvelope;
    set?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    disconnect?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    delete?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    connect?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    update?: Prisma.BriefQuestionUpdateWithWhereUniqueWithoutBriefInput | Prisma.BriefQuestionUpdateWithWhereUniqueWithoutBriefInput[];
    updateMany?: Prisma.BriefQuestionUpdateManyWithWhereWithoutBriefInput | Prisma.BriefQuestionUpdateManyWithWhereWithoutBriefInput[];
    deleteMany?: Prisma.BriefQuestionScalarWhereInput | Prisma.BriefQuestionScalarWhereInput[];
};
export type BriefQuestionUncheckedUpdateManyWithoutBriefNestedInput = {
    create?: Prisma.XOR<Prisma.BriefQuestionCreateWithoutBriefInput, Prisma.BriefQuestionUncheckedCreateWithoutBriefInput> | Prisma.BriefQuestionCreateWithoutBriefInput[] | Prisma.BriefQuestionUncheckedCreateWithoutBriefInput[];
    connectOrCreate?: Prisma.BriefQuestionCreateOrConnectWithoutBriefInput | Prisma.BriefQuestionCreateOrConnectWithoutBriefInput[];
    upsert?: Prisma.BriefQuestionUpsertWithWhereUniqueWithoutBriefInput | Prisma.BriefQuestionUpsertWithWhereUniqueWithoutBriefInput[];
    createMany?: Prisma.BriefQuestionCreateManyBriefInputEnvelope;
    set?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    disconnect?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    delete?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    connect?: Prisma.BriefQuestionWhereUniqueInput | Prisma.BriefQuestionWhereUniqueInput[];
    update?: Prisma.BriefQuestionUpdateWithWhereUniqueWithoutBriefInput | Prisma.BriefQuestionUpdateWithWhereUniqueWithoutBriefInput[];
    updateMany?: Prisma.BriefQuestionUpdateManyWithWhereWithoutBriefInput | Prisma.BriefQuestionUpdateManyWithWhereWithoutBriefInput[];
    deleteMany?: Prisma.BriefQuestionScalarWhereInput | Prisma.BriefQuestionScalarWhereInput[];
};
export type EnumQuestionStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestionStatus;
};
export type EnumFollowUpPriorityFieldUpdateOperationsInput = {
    set?: $Enums.FollowUpPriority;
};
export type BriefQuestionCreateWithoutBriefInput = {
    id?: string;
    question: string;
    answer?: string | null;
    status?: $Enums.QuestionStatus;
    owner?: string | null;
    dueDate?: Date | string | null;
    priority?: $Enums.FollowUpPriority;
    sortOrder?: number;
};
export type BriefQuestionUncheckedCreateWithoutBriefInput = {
    id?: string;
    question: string;
    answer?: string | null;
    status?: $Enums.QuestionStatus;
    owner?: string | null;
    dueDate?: Date | string | null;
    priority?: $Enums.FollowUpPriority;
    sortOrder?: number;
};
export type BriefQuestionCreateOrConnectWithoutBriefInput = {
    where: Prisma.BriefQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BriefQuestionCreateWithoutBriefInput, Prisma.BriefQuestionUncheckedCreateWithoutBriefInput>;
};
export type BriefQuestionCreateManyBriefInputEnvelope = {
    data: Prisma.BriefQuestionCreateManyBriefInput | Prisma.BriefQuestionCreateManyBriefInput[];
    skipDuplicates?: boolean;
};
export type BriefQuestionUpsertWithWhereUniqueWithoutBriefInput = {
    where: Prisma.BriefQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BriefQuestionUpdateWithoutBriefInput, Prisma.BriefQuestionUncheckedUpdateWithoutBriefInput>;
    create: Prisma.XOR<Prisma.BriefQuestionCreateWithoutBriefInput, Prisma.BriefQuestionUncheckedCreateWithoutBriefInput>;
};
export type BriefQuestionUpdateWithWhereUniqueWithoutBriefInput = {
    where: Prisma.BriefQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BriefQuestionUpdateWithoutBriefInput, Prisma.BriefQuestionUncheckedUpdateWithoutBriefInput>;
};
export type BriefQuestionUpdateManyWithWhereWithoutBriefInput = {
    where: Prisma.BriefQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.BriefQuestionUpdateManyMutationInput, Prisma.BriefQuestionUncheckedUpdateManyWithoutBriefInput>;
};
export type BriefQuestionScalarWhereInput = {
    AND?: Prisma.BriefQuestionScalarWhereInput | Prisma.BriefQuestionScalarWhereInput[];
    OR?: Prisma.BriefQuestionScalarWhereInput[];
    NOT?: Prisma.BriefQuestionScalarWhereInput | Prisma.BriefQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"BriefQuestion"> | string;
    question?: Prisma.StringFilter<"BriefQuestion"> | string;
    answer?: Prisma.StringNullableFilter<"BriefQuestion"> | string | null;
    status?: Prisma.EnumQuestionStatusFilter<"BriefQuestion"> | $Enums.QuestionStatus;
    owner?: Prisma.StringNullableFilter<"BriefQuestion"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"BriefQuestion"> | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFilter<"BriefQuestion"> | $Enums.FollowUpPriority;
    briefId?: Prisma.StringFilter<"BriefQuestion"> | string;
    sortOrder?: Prisma.IntFilter<"BriefQuestion"> | number;
};
export type BriefQuestionCreateManyBriefInput = {
    id?: string;
    question: string;
    answer?: string | null;
    status?: $Enums.QuestionStatus;
    owner?: string | null;
    dueDate?: Date | string | null;
    priority?: $Enums.FollowUpPriority;
    sortOrder?: number;
};
export type BriefQuestionUpdateWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BriefQuestionUncheckedUpdateWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BriefQuestionUncheckedUpdateManyWithoutBriefInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus;
    owner?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: Prisma.EnumFollowUpPriorityFieldUpdateOperationsInput | $Enums.FollowUpPriority;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BriefQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    status?: boolean;
    owner?: boolean;
    dueDate?: boolean;
    priority?: boolean;
    briefId?: boolean;
    sortOrder?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["briefQuestion"]>;
export type BriefQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    status?: boolean;
    owner?: boolean;
    dueDate?: boolean;
    priority?: boolean;
    briefId?: boolean;
    sortOrder?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["briefQuestion"]>;
export type BriefQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    status?: boolean;
    owner?: boolean;
    dueDate?: boolean;
    priority?: boolean;
    briefId?: boolean;
    sortOrder?: boolean;
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["briefQuestion"]>;
export type BriefQuestionSelectScalar = {
    id?: boolean;
    question?: boolean;
    answer?: boolean;
    status?: boolean;
    owner?: boolean;
    dueDate?: boolean;
    priority?: boolean;
    briefId?: boolean;
    sortOrder?: boolean;
};
export type BriefQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "question" | "answer" | "status" | "owner" | "dueDate" | "priority" | "briefId" | "sortOrder", ExtArgs["result"]["briefQuestion"]>;
export type BriefQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type BriefQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type BriefQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brief?: boolean | Prisma.DiscoveryBriefDefaultArgs<ExtArgs>;
};
export type $BriefQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BriefQuestion";
    objects: {
        brief: Prisma.$DiscoveryBriefPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        question: string;
        answer: string | null;
        status: $Enums.QuestionStatus;
        owner: string | null;
        dueDate: Date | null;
        priority: $Enums.FollowUpPriority;
        briefId: string;
        sortOrder: number;
    }, ExtArgs["result"]["briefQuestion"]>;
    composites: {};
};
export type BriefQuestionGetPayload<S extends boolean | null | undefined | BriefQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload, S>;
export type BriefQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BriefQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BriefQuestionCountAggregateInputType | true;
};
export interface BriefQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BriefQuestion'];
        meta: {
            name: 'BriefQuestion';
        };
    };
    findUnique<T extends BriefQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, BriefQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BriefQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BriefQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BriefQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, BriefQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BriefQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BriefQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BriefQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, BriefQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BriefQuestionCreateArgs>(args: Prisma.SelectSubset<T, BriefQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BriefQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, BriefQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BriefQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BriefQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BriefQuestionDeleteArgs>(args: Prisma.SelectSubset<T, BriefQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BriefQuestionUpdateArgs>(args: Prisma.SelectSubset<T, BriefQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BriefQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BriefQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BriefQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, BriefQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BriefQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BriefQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BriefQuestionUpsertArgs>(args: Prisma.SelectSubset<T, BriefQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__BriefQuestionClient<runtime.Types.Result.GetResult<Prisma.$BriefQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BriefQuestionCountArgs>(args?: Prisma.Subset<T, BriefQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BriefQuestionCountAggregateOutputType> : number>;
    aggregate<T extends BriefQuestionAggregateArgs>(args: Prisma.Subset<T, BriefQuestionAggregateArgs>): Prisma.PrismaPromise<GetBriefQuestionAggregateType<T>>;
    groupBy<T extends BriefQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BriefQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: BriefQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BriefQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBriefQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BriefQuestionFieldRefs;
}
export interface Prisma__BriefQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brief<T extends Prisma.DiscoveryBriefDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DiscoveryBriefDefaultArgs<ExtArgs>>): Prisma.Prisma__DiscoveryBriefClient<runtime.Types.Result.GetResult<Prisma.$DiscoveryBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BriefQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"BriefQuestion", 'String'>;
    readonly question: Prisma.FieldRef<"BriefQuestion", 'String'>;
    readonly answer: Prisma.FieldRef<"BriefQuestion", 'String'>;
    readonly status: Prisma.FieldRef<"BriefQuestion", 'QuestionStatus'>;
    readonly owner: Prisma.FieldRef<"BriefQuestion", 'String'>;
    readonly dueDate: Prisma.FieldRef<"BriefQuestion", 'DateTime'>;
    readonly priority: Prisma.FieldRef<"BriefQuestion", 'FollowUpPriority'>;
    readonly briefId: Prisma.FieldRef<"BriefQuestion", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"BriefQuestion", 'Int'>;
}
export type BriefQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where: Prisma.BriefQuestionWhereUniqueInput;
};
export type BriefQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where: Prisma.BriefQuestionWhereUniqueInput;
};
export type BriefQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where?: Prisma.BriefQuestionWhereInput;
    orderBy?: Prisma.BriefQuestionOrderByWithRelationInput | Prisma.BriefQuestionOrderByWithRelationInput[];
    cursor?: Prisma.BriefQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefQuestionScalarFieldEnum | Prisma.BriefQuestionScalarFieldEnum[];
};
export type BriefQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where?: Prisma.BriefQuestionWhereInput;
    orderBy?: Prisma.BriefQuestionOrderByWithRelationInput | Prisma.BriefQuestionOrderByWithRelationInput[];
    cursor?: Prisma.BriefQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefQuestionScalarFieldEnum | Prisma.BriefQuestionScalarFieldEnum[];
};
export type BriefQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where?: Prisma.BriefQuestionWhereInput;
    orderBy?: Prisma.BriefQuestionOrderByWithRelationInput | Prisma.BriefQuestionOrderByWithRelationInput[];
    cursor?: Prisma.BriefQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BriefQuestionScalarFieldEnum | Prisma.BriefQuestionScalarFieldEnum[];
};
export type BriefQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefQuestionCreateInput, Prisma.BriefQuestionUncheckedCreateInput>;
};
export type BriefQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BriefQuestionCreateManyInput | Prisma.BriefQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BriefQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    data: Prisma.BriefQuestionCreateManyInput | Prisma.BriefQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BriefQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BriefQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefQuestionUpdateInput, Prisma.BriefQuestionUncheckedUpdateInput>;
    where: Prisma.BriefQuestionWhereUniqueInput;
};
export type BriefQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BriefQuestionUpdateManyMutationInput, Prisma.BriefQuestionUncheckedUpdateManyInput>;
    where?: Prisma.BriefQuestionWhereInput;
    limit?: number;
};
export type BriefQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BriefQuestionUpdateManyMutationInput, Prisma.BriefQuestionUncheckedUpdateManyInput>;
    where?: Prisma.BriefQuestionWhereInput;
    limit?: number;
    include?: Prisma.BriefQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BriefQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where: Prisma.BriefQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BriefQuestionCreateInput, Prisma.BriefQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BriefQuestionUpdateInput, Prisma.BriefQuestionUncheckedUpdateInput>;
};
export type BriefQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
    where: Prisma.BriefQuestionWhereUniqueInput;
};
export type BriefQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BriefQuestionWhereInput;
    limit?: number;
};
export type BriefQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BriefQuestionSelect<ExtArgs> | null;
    omit?: Prisma.BriefQuestionOmit<ExtArgs> | null;
    include?: Prisma.BriefQuestionInclude<ExtArgs> | null;
};
