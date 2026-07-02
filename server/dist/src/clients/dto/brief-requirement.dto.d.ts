import { RequirementCategory, RequirementPriority, RequirementStatus } from '@prisma/client';
export declare class BriefRequirementDto {
    id?: string;
    referenceCode?: string;
    category: RequirementCategory;
    priority: RequirementPriority;
    status: RequirementStatus;
    title: string;
    details?: string;
    rationale?: string;
    acceptanceCriteria?: string;
    sortOrder?: number;
}
