import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user.js';
import { CurrentUser } from '../auth/current-user.decorator.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { resolveOrganizationRole } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { AiUsageService } from './ai-usage.service.js';

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
