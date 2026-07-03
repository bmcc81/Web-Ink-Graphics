import { IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class AcceptInvitationDto {
  @IsOptional()
  @IsString()
  @MaxLength(120)
  name?: string;

  @IsString()
  @Length(12, 128)
  password: string;
}
