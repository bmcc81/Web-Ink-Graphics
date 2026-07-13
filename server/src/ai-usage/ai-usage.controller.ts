import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { resolveOrganizationRole } from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { AiUsageService } from './ai-usage.service';

@Controller('organizations/:organizationId/ai-usage')
@UseGuards(JwtAuthGuard)
export class AiUsageController {
  constructor(
    private readonly aiUsage: AiUsageService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async summary(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    return this.aiUsage.summary(organizationId);
  }
}
