import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

export class ContactQueryDto {
  @IsOptional()
  @IsIn(['all', 'new', 'contacted'])
  status?: 'all' | 'new' | 'contacted';

  @IsOptional()
  @IsString()
  @MaxLength(120)
  search?: string;
}
