import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateDesignTemplateDto {
  @IsOptional()
  @IsString()
  @MaxLength(120)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1024)
  previewImageUrl?: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;
}
