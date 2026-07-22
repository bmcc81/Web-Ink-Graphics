import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BudgetModel = runtime.Types.Result.DefaultSelection<Prisma.$BudgetPayload>;
export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null;
    _avg: BudgetAvgAggregateOutputType | null;
    _sum: BudgetSumAggregateOutputType | null;
    _min: BudgetMinAggregateOutputType | null;
    _max: BudgetMaxAggregateOutputType | null;
};
export type BudgetAvgAggregateOutputType = {
    plannedAmount: runtime.Decimal | null;
    approvedAmount: runtime.Decimal | null;
    committedAmount: runtime.Decimal | null;
    actualAmount: runtime.Decimal | null;
};
export type BudgetSumAggregateOutputType = {
    plannedAmount: runtime.Decimal | null;
    approvedAmount: runtime.Decimal | null;
    committedAmount: runtime.Decimal | null;
    actualAmount: runtime.Decimal | null;
};
export type BudgetMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    currency: string | null;
    plannedAmount: runtime.Decimal | null;
    approvedAmount: runtime.Decimal | null;
    committedAmount: runtime.Decimal | null;
    actualAmount: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BudgetMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    currency: string | null;
    plannedAmount: runtime.Decimal | null;
    approvedAmount: runtime.Decimal | null;
    committedAmount: runtime.Decimal | null;
    actualAmount: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BudgetCountAggregateOutputType = {
    id: number;
    projectId: number;
    currency: number;
    plannedAmount: number;
    approvedAmount: number;
    committedAmount: number;
    actualAmount: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BudgetAvgAggregateInputType = {
    plannedAmount?: true;
    approvedAmount?: true;
    committedAmount?: true;
    actualAmount?: true;
};
export type BudgetSumAggregateInputType = {
    plannedAmount?: true;
    approvedAmount?: true;
    committedAmount?: true;
    actualAmount?: true;
};
export type BudgetMinAggregateInputType = {
    id?: true;
    projectId?: true;
    currency?: true;
    plannedAmount?: true;
    approvedAmount?: true;
    committedAmount?: true;
    actualAmount?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BudgetMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    currency?: true;
    plannedAmount?: true;
    approvedAmount?: true;
    committedAmount?: true;
    actualAmount?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BudgetCountAggregateInputType = {
    id?: true;
    projectId?: true;
    currency?: true;
    plannedAmount?: true;
    approvedAmount?: true;
    committedAmount?: true;
    actualAmount?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BudgetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithRelationInput | Prisma.BudgetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BudgetCountAggregateInputType;
    _avg?: BudgetAvgAggregateInputType;
    _sum?: BudgetSumAggregateInputType;
    _min?: BudgetMinAggregateInputType;
    _max?: BudgetMaxAggregateInputType;
};
export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
    [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBudget[P]> : Prisma.GetScalarType<T[P], AggregateBudget[P]>;
};
export type BudgetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithAggregationInput | Prisma.BudgetOrderByWithAggregationInput[];
    by: Prisma.BudgetScalarFieldEnum[] | Prisma.BudgetScalarFieldEnum;
    having?: Prisma.BudgetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetCountAggregateInputType | true;
    _avg?: BudgetAvgAggregateInputType;
    _sum?: BudgetSumAggregateInputType;
    _min?: BudgetMinAggregateInputType;
    _max?: BudgetMaxAggregateInputType;
};
export type BudgetGroupByOutputType = {
    id: string;
    projectId: string;
    currency: string;
    plannedAmount: runtime.Decimal | null;
    approvedAmount: runtime.Decimal | null;
    committedAmount: runtime.Decimal | null;
    actualAmount: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BudgetCountAggregateOutputType | null;
    _avg: BudgetAvgAggregateOutputType | null;
    _sum: BudgetSumAggregateOutputType | null;
    _min: BudgetMinAggregateOutputType | null;
    _max: BudgetMaxAggregateOutputType | null;
};
export type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BudgetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BudgetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BudgetGroupByOutputType[P]>;
}>>;
export type BudgetWhereInput = {
    AND?: Prisma.BudgetWhereInput | Prisma.BudgetWhereInput[];
    OR?: Prisma.BudgetWhereInput[];
    NOT?: Prisma.BudgetWhereInput | Prisma.BudgetWhereInput[];
    id?: Prisma.StringFilter<"Budget"> | string;
    projectId?: Prisma.StringFilter<"Budget"> | string;
    currency?: Prisma.StringFilter<"Budget"> | string;
    plannedAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"Budget"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Budget"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Budget"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type BudgetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    plannedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    committedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    actualAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    projectId?: string;
    AND?: Prisma.BudgetWhereInput | Prisma.BudgetWhereInput[];
    OR?: Prisma.BudgetWhereInput[];
    NOT?: Prisma.BudgetWhereInput | Prisma.BudgetWhereInput[];
    currency?: Prisma.StringFilter<"Budget"> | string;
    plannedAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.DecimalNullableFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"Budget"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Budget"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Budget"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "id" | "projectId">;
export type BudgetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    plannedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    committedAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    actualAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BudgetCountOrderByAggregateInput;
    _avg?: Prisma.BudgetAvgOrderByAggregateInput;
    _max?: Prisma.BudgetMaxOrderByAggregateInput;
    _min?: Prisma.BudgetMinOrderByAggregateInput;
    _sum?: Prisma.BudgetSumOrderByAggregateInput;
};
export type BudgetScalarWhereWithAggregatesInput = {
    AND?: Prisma.BudgetScalarWhereWithAggregatesInput | Prisma.BudgetScalarWhereWithAggregatesInput[];
    OR?: Prisma.BudgetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BudgetScalarWhereWithAggregatesInput | Prisma.BudgetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Budget"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Budget"> | string;
    currency?: Prisma.StringWithAggregatesFilter<"Budget"> | string;
    plannedAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Budget"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Budget"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Budget"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Budget"> | Date | string;
};
export type BudgetCreateInput = {
    id?: string;
    currency?: string;
    plannedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutBudgetInput;
};
export type BudgetUncheckedCreateInput = {
    id?: string;
    projectId: string;
    currency?: string;
    plannedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BudgetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    plannedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutBudgetNestedInput;
};
export type BudgetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    plannedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetCreateManyInput = {
    id?: string;
    projectId: string;
    currency?: string;
    plannedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BudgetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    plannedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    plannedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetNullableScalarRelationFilter = {
    is?: Prisma.BudgetWhereInput | null;
    isNot?: Prisma.BudgetWhereInput | null;
};
export type BudgetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    plannedAmount?: Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrder;
    committedAmount?: Prisma.SortOrder;
    actualAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BudgetAvgOrderByAggregateInput = {
    plannedAmount?: Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrder;
    committedAmount?: Prisma.SortOrder;
    actualAmount?: Prisma.SortOrder;
};
export type BudgetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    plannedAmount?: Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrder;
    committedAmount?: Prisma.SortOrder;
    actualAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BudgetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    plannedAmount?: Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrder;
    committedAmount?: Prisma.SortOrder;
    actualAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BudgetSumOrderByAggregateInput = {
    plannedAmount?: Prisma.SortOrder;
    approvedAmount?: Prisma.SortOrder;
    committedAmount?: Prisma.SortOrder;
    actualAmount?: Prisma.SortOrder;
};
export type BudgetCreateNestedOneWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.BudgetCreateWithoutProjectInput, Prisma.BudgetUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.BudgetCreateOrConnectWithoutProjectInput;
    connect?: Prisma.BudgetWhereUniqueInput;
};
export type BudgetUncheckedCreateNestedOneWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.BudgetCreateWithoutProjectInput, Prisma.BudgetUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.BudgetCreateOrConnectWithoutProjectInput;
    connect?: Prisma.BudgetWhereUniqueInput;
};
export type BudgetUpdateOneWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetCreateWithoutProjectInput, Prisma.BudgetUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.BudgetCreateOrConnectWithoutProjectInput;
    upsert?: Prisma.BudgetUpsertWithoutProjectInput;
    disconnect?: Prisma.BudgetWhereInput | boolean;
    delete?: Prisma.BudgetWhereInput | boolean;
    connect?: Prisma.BudgetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BudgetUpdateToOneWithWhereWithoutProjectInput, Prisma.BudgetUpdateWithoutProjectInput>, Prisma.BudgetUncheckedUpdateWithoutProjectInput>;
};
export type BudgetUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetCreateWithoutProjectInput, Prisma.BudgetUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: Prisma.BudgetCreateOrConnectWithoutProjectInput;
    upsert?: Prisma.BudgetUpsertWithoutProjectInput;
    disconnect?: Prisma.BudgetWhereInput | boolean;
    delete?: Prisma.BudgetWhereInput | boolean;
    connect?: Prisma.BudgetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BudgetUpdateToOneWithWhereWithoutProjectInput, Prisma.BudgetUpdateWithoutProjectInput>, Prisma.BudgetUncheckedUpdateWithoutProjectInput>;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BudgetCreateWithoutProjectInput = {
    id?: string;
    currency?: string;
    plannedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BudgetUncheckedCreateWithoutProjectInput = {
    id?: string;
    currency?: string;
    plannedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BudgetCreateOrConnectWithoutProjectInput = {
    where: Prisma.BudgetWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetCreateWithoutProjectInput, Prisma.BudgetUncheckedCreateWithoutProjectInput>;
};
export type BudgetUpsertWithoutProjectInput = {
    update: Prisma.XOR<Prisma.BudgetUpdateWithoutProjectInput, Prisma.BudgetUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.BudgetCreateWithoutProjectInput, Prisma.BudgetUncheckedCreateWithoutProjectInput>;
    where?: Prisma.BudgetWhereInput;
};
export type BudgetUpdateToOneWithWhereWithoutProjectInput = {
    where?: Prisma.BudgetWhereInput;
    data: Prisma.XOR<Prisma.BudgetUpdateWithoutProjectInput, Prisma.BudgetUncheckedUpdateWithoutProjectInput>;
};
export type BudgetUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    plannedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    plannedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    approvedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    committedAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    actualAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BudgetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    currency?: boolean;
    plannedAmount?: boolean;
    approvedAmount?: boolean;
    committedAmount?: boolean;
    actualAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budget"]>;
export type BudgetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    currency?: boolean;
    plannedAmount?: boolean;
    approvedAmount?: boolean;
    committedAmount?: boolean;
    actualAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budget"]>;
export type BudgetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    currency?: boolean;
    plannedAmount?: boolean;
    approvedAmount?: boolean;
    committedAmount?: boolean;
    actualAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budget"]>;
export type BudgetSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    currency?: boolean;
    plannedAmount?: boolean;
    approvedAmount?: boolean;
    committedAmount?: boolean;
    actualAmount?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BudgetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "currency" | "plannedAmount" | "approvedAmount" | "committedAmount" | "actualAmount" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["budget"]>;
export type BudgetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type BudgetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $BudgetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Budget";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        currency: string;
        plannedAmount: runtime.Decimal | null;
        approvedAmount: runtime.Decimal | null;
        committedAmount: runtime.Decimal | null;
        actualAmount: runtime.Decimal | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["budget"]>;
    composites: {};
};
export type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BudgetPayload, S>;
export type BudgetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BudgetCountAggregateInputType | true;
};
export interface BudgetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Budget'];
        meta: {
            name: 'Budget';
        };
    };
    findUnique<T extends BudgetFindUniqueArgs>(args: Prisma.SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BudgetFindFirstArgs>(args?: Prisma.SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BudgetFindManyArgs>(args?: Prisma.SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BudgetCreateArgs>(args: Prisma.SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BudgetCreateManyArgs>(args?: Prisma.SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BudgetDeleteArgs>(args: Prisma.SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BudgetUpdateArgs>(args: Prisma.SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BudgetDeleteManyArgs>(args?: Prisma.SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BudgetUpdateManyArgs>(args: Prisma.SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BudgetUpsertArgs>(args: Prisma.SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma.Prisma__BudgetClient<runtime.Types.Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BudgetCountArgs>(args?: Prisma.Subset<T, BudgetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BudgetCountAggregateOutputType> : number>;
    aggregate<T extends BudgetAggregateArgs>(args: Prisma.Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>;
    groupBy<T extends BudgetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BudgetGroupByArgs['orderBy'];
    } : {
        orderBy?: BudgetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BudgetFieldRefs;
}
export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BudgetFieldRefs {
    readonly id: Prisma.FieldRef<"Budget", 'String'>;
    readonly projectId: Prisma.FieldRef<"Budget", 'String'>;
    readonly currency: Prisma.FieldRef<"Budget", 'String'>;
    readonly plannedAmount: Prisma.FieldRef<"Budget", 'Decimal'>;
    readonly approvedAmount: Prisma.FieldRef<"Budget", 'Decimal'>;
    readonly committedAmount: Prisma.FieldRef<"Budget", 'Decimal'>;
    readonly actualAmount: Prisma.FieldRef<"Budget", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"Budget", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Budget", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Budget", 'DateTime'>;
}
export type BudgetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where: Prisma.BudgetWhereUniqueInput;
};
export type BudgetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where: Prisma.BudgetWhereUniqueInput;
};
export type BudgetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithRelationInput | Prisma.BudgetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetScalarFieldEnum | Prisma.BudgetScalarFieldEnum[];
};
export type BudgetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithRelationInput | Prisma.BudgetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetScalarFieldEnum | Prisma.BudgetScalarFieldEnum[];
};
export type BudgetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where?: Prisma.BudgetWhereInput;
    orderBy?: Prisma.BudgetOrderByWithRelationInput | Prisma.BudgetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetScalarFieldEnum | Prisma.BudgetScalarFieldEnum[];
};
export type BudgetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetCreateInput, Prisma.BudgetUncheckedCreateInput>;
};
export type BudgetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BudgetCreateManyInput | Prisma.BudgetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    data: Prisma.BudgetCreateManyInput | Prisma.BudgetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BudgetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BudgetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetUpdateInput, Prisma.BudgetUncheckedUpdateInput>;
    where: Prisma.BudgetWhereUniqueInput;
};
export type BudgetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BudgetUpdateManyMutationInput, Prisma.BudgetUncheckedUpdateManyInput>;
    where?: Prisma.BudgetWhereInput;
    limit?: number;
};
export type BudgetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetUpdateManyMutationInput, Prisma.BudgetUncheckedUpdateManyInput>;
    where?: Prisma.BudgetWhereInput;
    limit?: number;
    include?: Prisma.BudgetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BudgetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where: Prisma.BudgetWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetCreateInput, Prisma.BudgetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BudgetUpdateInput, Prisma.BudgetUncheckedUpdateInput>;
};
export type BudgetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
    where: Prisma.BudgetWhereUniqueInput;
};
export type BudgetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetWhereInput;
    limit?: number;
};
export type BudgetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetOmit<ExtArgs> | null;
    include?: Prisma.BudgetInclude<ExtArgs> | null;
};
