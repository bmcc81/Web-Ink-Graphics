import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { TemplateCategory, TemplateFieldType } from '@prisma/client';

export class TemplateFieldInputDto {
  @IsString()
  @MaxLength(60)
  @Matches(/^[a-z][a-z0-9_]*$/, {
    message: 'key must be lowercase letters, numbers, and underscores',
  })
  key: string;

  @IsString()
  @MaxLength(120)
  label: string;

  @IsEnum(TemplateFieldType)
  fieldType: TemplateFieldType;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(4000)
  maxLength?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10000)
  x?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10000)
  y?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10000)
  width?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10000)
  height?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(500)
  fontSize?: number;

  @IsOptional()
  @IsString()
  @Matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/, {
    message: 'color must be a hex color',
  })
  color?: string;
}

export class CreateDesignTemplateDto {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsEnum(TemplateCategory)
  category: TemplateCategory;

  @IsOptional()
  @IsString()
  @MaxLength(1024)
  previewImageUrl?: string;

  @IsOptional()
  @IsInt()
  @Min(100)
  @Max(6000)
  canvasWidth?: number;

  @IsOptional()
  @IsInt()
  @Min(100)
  @Max(6000)
  canvasHeight?: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TemplateFieldInputDto)
  fields: TemplateFieldInputDto[];
}
