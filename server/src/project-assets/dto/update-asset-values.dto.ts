import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { AssetFieldValueInputDto } from './create-project-asset.dto.js';

export class UpdateAssetValuesDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AssetFieldValueInputDto)
  values: AssetFieldValueInputDto[];
}
