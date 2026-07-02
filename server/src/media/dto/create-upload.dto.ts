import {
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

const contentTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
] as const;

export class CreateUploadDto {
  @IsString()
  @MaxLength(180)
  fileName: string;

  @IsIn(contentTypes)
  contentType: (typeof contentTypes)[number];

  @IsInt()
  @Min(1)
  @Max(20 * 1024 * 1024)
  fileSize: number;

  @IsOptional()
  @IsIn(['PORTFOLIO', 'DISCOVERY'])
  purpose?: 'PORTFOLIO' | 'DISCOVERY';
}
