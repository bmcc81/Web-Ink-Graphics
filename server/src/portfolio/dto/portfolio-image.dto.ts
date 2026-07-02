import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class PortfolioImageDto {
  @IsUrl({ require_tld: false })
  url: string;

  @IsString()
  altTextEn: string;

  @IsOptional()
  @IsString()
  altTextFr?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  width?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  height?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;

  @IsOptional()
  @IsBoolean()
  isCover?: boolean;
}
