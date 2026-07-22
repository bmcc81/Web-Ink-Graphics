import { MilestoneStatus } from '../../generated/prisma/client.js';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateMilestoneDto {
  @IsString()
  @Length(2, 160)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsEnum(MilestoneStatus)
  status?: MilestoneStatus;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
