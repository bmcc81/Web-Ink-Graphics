import { IsEnum } from 'class-validator';
import { ExportFormat } from '../../generated/prisma/client.js';

export class CreateExportDto {
  @IsEnum(ExportFormat)
  format: ExportFormat;
}
