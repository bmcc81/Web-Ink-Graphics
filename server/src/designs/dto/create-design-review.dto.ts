import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateDesignReviewDto {
  @IsString()
  reviewerId: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
