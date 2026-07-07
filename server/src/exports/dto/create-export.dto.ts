import { IsEnum } from 'class-validator';
import { ExportFormat } from '@prisma/client';

export class CreateExportDto {
  @IsEnum(ExportFormat)
  format: ExportFormat;
}
