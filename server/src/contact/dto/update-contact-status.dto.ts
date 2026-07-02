import { IsBoolean } from 'class-validator';

export class UpdateContactStatusDto {
  @IsBoolean()
  contacted: boolean;
}
