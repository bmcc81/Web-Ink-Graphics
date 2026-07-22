import { OrganizationRole } from '../../generated/prisma/client.js';
import { IsEnum } from 'class-validator';

export class UpdateMemberRoleDto {
  @IsEnum(OrganizationRole)
  role: OrganizationRole;
}
