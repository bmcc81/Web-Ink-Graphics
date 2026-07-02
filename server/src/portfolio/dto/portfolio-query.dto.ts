import { ProjectStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class PortfolioQueryDto {
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsString()
  category?: string;
}
