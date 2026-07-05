import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
  MaxLength,
} from 'class-validator';

export class UpsertBudgetDto {
  @IsOptional()
  @IsString()
  @Length(3, 3)
  currency?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  plannedAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  approvedAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  committedAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  actualAmount?: number;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}
