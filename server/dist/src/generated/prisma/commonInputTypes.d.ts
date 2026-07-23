import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumActivityEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityEntityType | Prisma.EnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityEntityTypeFilter<$PrismaModel> | $Enums.ActivityEntityType;
};
export type EnumActivityActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | Prisma.EnumActivityActionFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityActionFilter<$PrismaModel> | $Enums.ActivityAction;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type EnumActivityEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityEntityType | Prisma.EnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityEntityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActivityEntityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActivityEntityTypeFilter<$PrismaModel>;
};
export type EnumActivityActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | Prisma.EnumActivityActionFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityActionWithAggregatesFilter<$PrismaModel> | $Enums.ActivityAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActivityActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActivityActionFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | Prisma.EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type EnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | Prisma.EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrganizationRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrganizationRoleFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumClientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusFilter<$PrismaModel> | $Enums.ClientStatus;
};
export type EnumClientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
};
export type EnumBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | Prisma.EnumBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBriefStatusFilter<$PrismaModel> | $Enums.BriefStatus;
};
export type EnumBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | Prisma.EnumBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.BriefStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBriefStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBriefStatusFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumAttachmentCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentCategory | Prisma.EnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentCategoryFilter<$PrismaModel> | $Enums.AttachmentCategory;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumAttachmentCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentCategory | Prisma.EnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAttachmentCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAttachmentCategoryFilter<$PrismaModel>;
};
export type EnumRequirementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementCategory | Prisma.EnumRequirementCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementCategoryFilter<$PrismaModel> | $Enums.RequirementCategory;
};
export type EnumRequirementPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementPriority | Prisma.EnumRequirementPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementPriorityFilter<$PrismaModel> | $Enums.RequirementPriority;
};
export type EnumRequirementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | Prisma.EnumRequirementStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementStatusFilter<$PrismaModel> | $Enums.RequirementStatus;
};
export type EnumRequirementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementCategory | Prisma.EnumRequirementCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RequirementCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequirementCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequirementCategoryFilter<$PrismaModel>;
};
export type EnumRequirementPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementPriority | Prisma.EnumRequirementPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RequirementPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequirementPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequirementPriorityFilter<$PrismaModel>;
};
export type EnumRequirementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | Prisma.EnumRequirementStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequirementStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequirementStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequirementStatusFilter<$PrismaModel>;
};
export type EnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | Prisma.EnumQuestionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus;
};
export type EnumFollowUpPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpPriority | Prisma.EnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpPriorityFilter<$PrismaModel> | $Enums.FollowUpPriority;
};
export type EnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | Prisma.EnumQuestionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumQuestionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumQuestionStatusFilter<$PrismaModel>;
};
export type EnumFollowUpPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpPriority | Prisma.EnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpPriorityWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFollowUpPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFollowUpPriorityFilter<$PrismaModel>;
};
export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | Prisma.EnumProjectStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | Prisma.EnumProjectStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProjectStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProjectStatusFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | Prisma.EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLocaleFilter<$PrismaModel> | $Enums.Locale;
};
export type EnumLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | Prisma.EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLocaleWithAggregatesFilter<$PrismaModel> | $Enums.Locale;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLocaleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLocaleFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumProjectWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectWorkflowStatus | Prisma.EnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectWorkflowStatusFilter<$PrismaModel> | $Enums.ProjectWorkflowStatus;
};
export type EnumProjectWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectWorkflowStatus | Prisma.EnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectWorkflowStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProjectWorkflowStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProjectWorkflowStatusFilter<$PrismaModel>;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | Prisma.EnumMetricTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | Prisma.EnumMetricTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMetricTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMetricTypeFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type EnumGoalPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | Prisma.EnumGoalPeriodFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalPeriodFilter<$PrismaModel> | $Enums.GoalPeriod;
};
export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus;
};
export type EnumGoalPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | Prisma.EnumGoalPeriodFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalPeriodWithAggregatesFilter<$PrismaModel> | $Enums.GoalPeriod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGoalPeriodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGoalPeriodFilter<$PrismaModel>;
};
export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
};
export type EnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | Prisma.EnumMilestoneStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus;
};
export type EnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | Prisma.EnumMilestoneStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMilestoneStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMilestoneStatusFilter<$PrismaModel>;
};
export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | Prisma.EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus;
};
export type EnumRecurrenceRuleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceRule | Prisma.EnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRecurrenceRuleNullableFilter<$PrismaModel> | $Enums.RecurrenceRule | null;
};
export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | Prisma.EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTaskStatusFilter<$PrismaModel>;
};
export type EnumRecurrenceRuleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceRule | Prisma.EnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRecurrenceRuleNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecurrenceRule | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecurrenceRuleNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecurrenceRuleNullableFilter<$PrismaModel>;
};
export type EnumDesignReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignReviewStatus | Prisma.EnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDesignReviewStatusFilter<$PrismaModel> | $Enums.DesignReviewStatus;
};
export type EnumDesignReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignReviewStatus | Prisma.EnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDesignReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.DesignReviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDesignReviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDesignReviewStatusFilter<$PrismaModel>;
};
export type EnumTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | Prisma.EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateCategoryFilter<$PrismaModel> | $Enums.TemplateCategory;
};
export type EnumTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | Prisma.EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TemplateCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTemplateCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTemplateCategoryFilter<$PrismaModel>;
};
export type EnumTemplateFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateFieldType | Prisma.EnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateFieldTypeFilter<$PrismaModel> | $Enums.TemplateFieldType;
};
export type EnumTemplateFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateFieldType | Prisma.EnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateFieldType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTemplateFieldTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTemplateFieldTypeFilter<$PrismaModel>;
};
export type EnumAssetRevisionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRevisionStatus | Prisma.EnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRevisionStatusFilter<$PrismaModel> | $Enums.AssetRevisionStatus;
};
export type EnumAssetRevisionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRevisionStatus | Prisma.EnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRevisionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetRevisionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAssetRevisionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAssetRevisionStatusFilter<$PrismaModel>;
};
export type EnumExportFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | Prisma.EnumExportFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportFormatFilter<$PrismaModel> | $Enums.ExportFormat;
};
export type EnumExportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | Prisma.EnumExportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportStatusFilter<$PrismaModel> | $Enums.ExportStatus;
};
export type EnumExportFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | Prisma.EnumExportFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportFormatWithAggregatesFilter<$PrismaModel> | $Enums.ExportFormat;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumExportFormatFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumExportFormatFilter<$PrismaModel>;
};
export type EnumExportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | Prisma.EnumExportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExportStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumExportStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumExportStatusFilter<$PrismaModel>;
};
export type EnumCreativeBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CreativeBriefStatus | Prisma.EnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCreativeBriefStatusFilter<$PrismaModel> | $Enums.CreativeBriefStatus;
};
export type EnumCreativeBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreativeBriefStatus | Prisma.EnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCreativeBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.CreativeBriefStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCreativeBriefStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCreativeBriefStatusFilter<$PrismaModel>;
};
export type EnumAiUsagePurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.AiUsagePurpose | Prisma.EnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAiUsagePurposeFilter<$PrismaModel> | $Enums.AiUsagePurpose;
};
export type EnumAiUsagePurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AiUsagePurpose | Prisma.EnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAiUsagePurposeWithAggregatesFilter<$PrismaModel> | $Enums.AiUsagePurpose;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAiUsagePurposeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAiUsagePurposeFilter<$PrismaModel>;
};
export type EnumPlanDraftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanDraftStatus | Prisma.EnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanDraftStatusFilter<$PrismaModel> | $Enums.PlanDraftStatus;
};
export type EnumPlanDraftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanDraftStatus | Prisma.EnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanDraftStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanDraftStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanDraftStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanDraftStatusFilter<$PrismaModel>;
};
export type EnumRecommendationPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationPriority | Prisma.EnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationPriorityFilter<$PrismaModel> | $Enums.RecommendationPriority;
};
export type EnumRecommendationPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationPriority | Prisma.EnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecommendationPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecommendationPriorityFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumActivityEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityEntityType | Prisma.EnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityEntityTypeFilter<$PrismaModel> | $Enums.ActivityEntityType;
};
export type NestedEnumActivityActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | Prisma.EnumActivityActionFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityActionFilter<$PrismaModel> | $Enums.ActivityAction;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumActivityEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityEntityType | Prisma.EnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityEntityType[] | Prisma.ListEnumActivityEntityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityEntityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActivityEntityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActivityEntityTypeFilter<$PrismaModel>;
};
export type NestedEnumActivityActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | Prisma.EnumActivityActionFieldRefInput<$PrismaModel>;
    in?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActivityAction[] | Prisma.ListEnumActivityActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActivityActionWithAggregatesFilter<$PrismaModel> | $Enums.ActivityAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActivityActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActivityActionFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | Prisma.EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationRoleFilter<$PrismaModel> | $Enums.OrganizationRole;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationRole | Prisma.EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationRole[] | Prisma.ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrganizationRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrganizationRoleFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumClientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusFilter<$PrismaModel> | $Enums.ClientStatus;
};
export type NestedEnumClientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClientStatus | Prisma.EnumClientStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClientStatus[] | Prisma.ListEnumClientStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClientStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClientStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClientStatusFilter<$PrismaModel>;
};
export type NestedEnumBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | Prisma.EnumBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBriefStatusFilter<$PrismaModel> | $Enums.BriefStatus;
};
export type NestedEnumBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | Prisma.EnumBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BriefStatus[] | Prisma.ListEnumBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.BriefStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBriefStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBriefStatusFilter<$PrismaModel>;
};
export type NestedEnumAttachmentCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentCategory | Prisma.EnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentCategoryFilter<$PrismaModel> | $Enums.AttachmentCategory;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumAttachmentCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentCategory | Prisma.EnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttachmentCategory[] | Prisma.ListEnumAttachmentCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttachmentCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAttachmentCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAttachmentCategoryFilter<$PrismaModel>;
};
export type NestedEnumRequirementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementCategory | Prisma.EnumRequirementCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementCategoryFilter<$PrismaModel> | $Enums.RequirementCategory;
};
export type NestedEnumRequirementPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementPriority | Prisma.EnumRequirementPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementPriorityFilter<$PrismaModel> | $Enums.RequirementPriority;
};
export type NestedEnumRequirementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | Prisma.EnumRequirementStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementStatusFilter<$PrismaModel> | $Enums.RequirementStatus;
};
export type NestedEnumRequirementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementCategory | Prisma.EnumRequirementCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementCategory[] | Prisma.ListEnumRequirementCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RequirementCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequirementCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequirementCategoryFilter<$PrismaModel>;
};
export type NestedEnumRequirementPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementPriority | Prisma.EnumRequirementPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementPriority[] | Prisma.ListEnumRequirementPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RequirementPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequirementPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequirementPriorityFilter<$PrismaModel>;
};
export type NestedEnumRequirementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequirementStatus | Prisma.EnumRequirementStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequirementStatus[] | Prisma.ListEnumRequirementStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequirementStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequirementStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequirementStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequirementStatusFilter<$PrismaModel>;
};
export type NestedEnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | Prisma.EnumQuestionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus;
};
export type NestedEnumFollowUpPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpPriority | Prisma.EnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpPriorityFilter<$PrismaModel> | $Enums.FollowUpPriority;
};
export type NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | Prisma.EnumQuestionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.QuestionStatus[] | Prisma.ListEnumQuestionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumQuestionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumQuestionStatusFilter<$PrismaModel>;
};
export type NestedEnumFollowUpPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpPriority | Prisma.EnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FollowUpPriority[] | Prisma.ListEnumFollowUpPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFollowUpPriorityWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFollowUpPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFollowUpPriorityFilter<$PrismaModel>;
};
export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | Prisma.EnumProjectStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | Prisma.EnumProjectStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectStatus[] | Prisma.ListEnumProjectStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProjectStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProjectStatusFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | Prisma.EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLocaleFilter<$PrismaModel> | $Enums.Locale;
};
export type NestedEnumLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | Prisma.EnumLocaleFieldRefInput<$PrismaModel>;
    in?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Locale[] | Prisma.ListEnumLocaleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLocaleWithAggregatesFilter<$PrismaModel> | $Enums.Locale;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLocaleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLocaleFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumProjectWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectWorkflowStatus | Prisma.EnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectWorkflowStatusFilter<$PrismaModel> | $Enums.ProjectWorkflowStatus;
};
export type NestedEnumProjectWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectWorkflowStatus | Prisma.EnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProjectWorkflowStatus[] | Prisma.ListEnumProjectWorkflowStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProjectWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectWorkflowStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProjectWorkflowStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProjectWorkflowStatusFilter<$PrismaModel>;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | Prisma.EnumMetricTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | Prisma.EnumMetricTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MetricType[] | Prisma.ListEnumMetricTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMetricTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMetricTypeFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumGoalPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | Prisma.EnumGoalPeriodFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalPeriodFilter<$PrismaModel> | $Enums.GoalPeriod;
};
export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus;
};
export type NestedEnumGoalPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalPeriod | Prisma.EnumGoalPeriodFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalPeriod[] | Prisma.ListEnumGoalPeriodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalPeriodWithAggregatesFilter<$PrismaModel> | $Enums.GoalPeriod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGoalPeriodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGoalPeriodFilter<$PrismaModel>;
};
export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
};
export type NestedEnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | Prisma.EnumMilestoneStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus;
};
export type NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | Prisma.EnumMilestoneStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MilestoneStatus[] | Prisma.ListEnumMilestoneStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMilestoneStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMilestoneStatusFilter<$PrismaModel>;
};
export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | Prisma.EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus;
};
export type NestedEnumRecurrenceRuleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceRule | Prisma.EnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRecurrenceRuleNullableFilter<$PrismaModel> | $Enums.RecurrenceRule | null;
};
export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | Prisma.EnumTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TaskStatus[] | Prisma.ListEnumTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTaskStatusFilter<$PrismaModel>;
};
export type NestedEnumRecurrenceRuleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceRule | Prisma.EnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RecurrenceRule[] | Prisma.ListEnumRecurrenceRuleFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRecurrenceRuleNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecurrenceRule | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecurrenceRuleNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecurrenceRuleNullableFilter<$PrismaModel>;
};
export type NestedEnumDesignReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignReviewStatus | Prisma.EnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDesignReviewStatusFilter<$PrismaModel> | $Enums.DesignReviewStatus;
};
export type NestedEnumDesignReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesignReviewStatus | Prisma.EnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DesignReviewStatus[] | Prisma.ListEnumDesignReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDesignReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.DesignReviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDesignReviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDesignReviewStatusFilter<$PrismaModel>;
};
export type NestedEnumTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | Prisma.EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateCategoryFilter<$PrismaModel> | $Enums.TemplateCategory;
};
export type NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | Prisma.EnumTemplateCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateCategory[] | Prisma.ListEnumTemplateCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TemplateCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTemplateCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTemplateCategoryFilter<$PrismaModel>;
};
export type NestedEnumTemplateFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateFieldType | Prisma.EnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateFieldTypeFilter<$PrismaModel> | $Enums.TemplateFieldType;
};
export type NestedEnumTemplateFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateFieldType | Prisma.EnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TemplateFieldType[] | Prisma.ListEnumTemplateFieldTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTemplateFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateFieldType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTemplateFieldTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTemplateFieldTypeFilter<$PrismaModel>;
};
export type NestedEnumAssetRevisionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRevisionStatus | Prisma.EnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRevisionStatusFilter<$PrismaModel> | $Enums.AssetRevisionStatus;
};
export type NestedEnumAssetRevisionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRevisionStatus | Prisma.EnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRevisionStatus[] | Prisma.ListEnumAssetRevisionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRevisionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetRevisionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAssetRevisionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAssetRevisionStatusFilter<$PrismaModel>;
};
export type NestedEnumExportFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | Prisma.EnumExportFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportFormatFilter<$PrismaModel> | $Enums.ExportFormat;
};
export type NestedEnumExportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | Prisma.EnumExportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportStatusFilter<$PrismaModel> | $Enums.ExportStatus;
};
export type NestedEnumExportFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportFormat | Prisma.EnumExportFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportFormat[] | Prisma.ListEnumExportFormatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportFormatWithAggregatesFilter<$PrismaModel> | $Enums.ExportFormat;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumExportFormatFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumExportFormatFilter<$PrismaModel>;
};
export type NestedEnumExportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExportStatus | Prisma.EnumExportStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ExportStatus[] | Prisma.ListEnumExportStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumExportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExportStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumExportStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumExportStatusFilter<$PrismaModel>;
};
export type NestedEnumCreativeBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CreativeBriefStatus | Prisma.EnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCreativeBriefStatusFilter<$PrismaModel> | $Enums.CreativeBriefStatus;
};
export type NestedEnumCreativeBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreativeBriefStatus | Prisma.EnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CreativeBriefStatus[] | Prisma.ListEnumCreativeBriefStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCreativeBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.CreativeBriefStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCreativeBriefStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCreativeBriefStatusFilter<$PrismaModel>;
};
export type NestedEnumAiUsagePurposeFilter<$PrismaModel = never> = {
    equals?: $Enums.AiUsagePurpose | Prisma.EnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAiUsagePurposeFilter<$PrismaModel> | $Enums.AiUsagePurpose;
};
export type NestedEnumAiUsagePurposeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AiUsagePurpose | Prisma.EnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    in?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AiUsagePurpose[] | Prisma.ListEnumAiUsagePurposeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAiUsagePurposeWithAggregatesFilter<$PrismaModel> | $Enums.AiUsagePurpose;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAiUsagePurposeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAiUsagePurposeFilter<$PrismaModel>;
};
export type NestedEnumPlanDraftStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanDraftStatus | Prisma.EnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanDraftStatusFilter<$PrismaModel> | $Enums.PlanDraftStatus;
};
export type NestedEnumPlanDraftStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanDraftStatus | Prisma.EnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanDraftStatus[] | Prisma.ListEnumPlanDraftStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanDraftStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanDraftStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanDraftStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanDraftStatusFilter<$PrismaModel>;
};
export type NestedEnumRecommendationPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationPriority | Prisma.EnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationPriorityFilter<$PrismaModel> | $Enums.RecommendationPriority;
};
export type NestedEnumRecommendationPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationPriority | Prisma.EnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationPriority[] | Prisma.ListEnumRecommendationPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecommendationPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecommendationPriorityFilter<$PrismaModel>;
};
