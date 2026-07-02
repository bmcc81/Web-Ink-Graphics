import { ProjectStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { PortfolioImageDto } from './portfolio-image.dto';
import { ProjectTranslationDto } from './project-translation.dto';

export class CreatePortfolioProjectDto {
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @MaxLength(120)
  slug: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  clientName?: string;

  @IsOptional()
  @IsUrl()
  projectUrl?: string;

  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  displayOrder?: number;

  @IsOptional()
  @IsDateString()
  completedAt?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @ValidateNested({ each: true })
  @Type(() => ProjectTranslationDto)
  translations: ProjectTranslationDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PortfolioImageDto)
  images?: PortfolioImageDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categoryIds?: string[];
}
