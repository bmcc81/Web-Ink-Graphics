import {
  RequirementCategory,
  RequirementPriority,
  RequirementStatus,
} from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class BriefRequirementDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  referenceCode?: string;

  @IsEnum(RequirementCategory)
  category: RequirementCategory;

  @IsEnum(RequirementPriority)
  priority: RequirementPriority;

  @IsEnum(RequirementStatus)
  status: RequirementStatus;

  @IsString()
  @MaxLength(180)
  title: string;

  @IsOptional()
  @IsString()
  details?: string;

  @IsOptional()
  @IsString()
  rationale?: string;

  @IsOptional()
  @IsString()
  acceptanceCriteria?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
