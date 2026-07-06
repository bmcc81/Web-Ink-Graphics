import { IsString, Length } from 'class-validator';

export class CreateTaskCommentDto {
  @IsString()
  @Length(1, 4000)
  body: string;
}
