import { IsString, Length } from 'class-validator';

export class CreateDesignCommentDto {
  @IsString()
  @Length(1, 4000)
  body: string;
}
