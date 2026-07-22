import { ProjectStatus } from '../../generated/prisma/client.js';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class PortfolioQueryDto {
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsString()
  category?: string;
}
