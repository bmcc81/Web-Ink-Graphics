import { IsOptional, IsString, Matches, MaxLength } from 'class-validator';

const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

export class UpsertBrandKitDto {
  @IsOptional()
  @IsString()
  @MaxLength(1024)
  logoUrl?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR, { message: 'primaryColor must be a hex color' })
  primaryColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR, { message: 'secondaryColor must be a hex color' })
  secondaryColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR, { message: 'accentColor must be a hex color' })
  accentColor?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  fontFamily?: string;
}
