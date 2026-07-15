import { MetricType } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateCampaignMetricDto {
  @IsEnum(MetricType)
  metricType: MetricType;

  @IsDateString()
  periodStart: string;

  @IsDateString()
  periodEnd: string;

  @IsNumber()
  @Min(0)
  actualValue: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  plannedValue?: number;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}
