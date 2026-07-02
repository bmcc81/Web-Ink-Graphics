import { FollowUpPriority, QuestionStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class BriefQuestionDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  @MaxLength(500)
  question: string;

  @IsOptional()
  @IsString()
  answer?: string;

  @IsEnum(QuestionStatus)
  status: QuestionStatus;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  owner?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsEnum(FollowUpPriority)
  priority: FollowUpPriority;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
