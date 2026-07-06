import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class AssetFieldValueInputDto {
  @IsString()
  @MaxLength(60)
  key: string;

  @IsString()
  @MaxLength(4000)
  value: string;
}

export class CreateProjectAssetDto {
  @IsString()
  templateId: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  name?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(50)
  @ValidateNested({ each: true })
  @Type(() => AssetFieldValueInputDto)
  values?: AssetFieldValueInputDto[];
}
