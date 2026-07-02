import { Locale } from '@prisma/client';
import {
  IsEnum,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class ProjectTranslationDto {
  @IsEnum(Locale)
  locale: Locale;

  @IsString()
  @Length(2, 120)
  title: string;

  @IsString()
  @Length(10, 320)
  summary: string;

  @IsOptional()
  @IsString()
  challenge?: string;

  @IsOptional()
  @IsString()
  solution?: string;

  @IsOptional()
  @IsString()
  results?: string;

  @IsOptional()
  @IsString()
  @MaxLength(70)
  seoTitle?: string;

  @IsOptional()
  @IsString()
  @MaxLength(170)
  metaDescription?: string;
}
