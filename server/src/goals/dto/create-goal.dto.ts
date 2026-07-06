import { GoalPeriod, GoalStatus } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateGoalDto {
  @IsString()
  @Length(2, 160)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsEnum(GoalPeriod)
  period: GoalPeriod;

  @IsInt()
  @Min(2000)
  @Max(2100)
  year: number;

  @IsOptional()
  @IsEnum(GoalStatus)
  status?: GoalStatus;
}
