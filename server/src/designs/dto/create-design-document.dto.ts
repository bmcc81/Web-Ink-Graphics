import { IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateDesignDocumentDto {
  @IsString()
  @IsUrl({ require_protocol: true })
  figmaUrl: string;

  @IsOptional()
  @IsString()
  @Length(2, 160)
  name?: string;
}
