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

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TemplateFieldInputDto)
  fields: TemplateFieldInputDto[];
}
