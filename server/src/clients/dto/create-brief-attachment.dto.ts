import { AttachmentCategory } from '../../generated/prisma/client.js';
import {
  IsEnum,
  IsInt,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateBriefAttachmentDto {
  @IsString()
  @MaxLength(180)
  fileName: string;

  @IsString()
  @Matches(/^discovery\//)
  objectKey: string;

  @IsString()
  @MaxLength(120)
  contentType: string;

  @IsInt()
  @Min(1)
  @Max(20 * 1024 * 1024)
  fileSize: number;

  @IsEnum(AttachmentCategory)
  category: AttachmentCategory;
}
