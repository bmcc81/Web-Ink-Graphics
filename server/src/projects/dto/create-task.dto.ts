import { TaskStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(2, 200)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  milestoneId?: string | null;

  @IsOptional()
  @IsString()
  assigneeId?: string | null;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
