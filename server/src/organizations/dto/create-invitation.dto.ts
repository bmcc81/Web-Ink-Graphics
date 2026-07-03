import { OrganizationRole } from '@prisma/client';
import { IsEmail, IsEnum } from 'class-validator';

export class CreateInvitationDto {
  @IsEmail()
  email: string;

  @IsEnum(OrganizationRole)
  role: OrganizationRole;
}
