import { Injectable, NotFoundException } from '@nestjs/common';
import {
  ActivityAction,
  ActivityEntityType,
} from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import { resolveOrganizationRole } from '../organizations/organization-access.js';
import { PrismaService } from '../prisma/prisma.service.js';

interface RecordActivityInput {
  organizationId: string;
  entityType: ActivityEntityType;
  entityId: string;
  action: ActivityAction;
  summary: string;
  actorId: string;
}

@Injectable()
export class ActivityLogService {
  constructor(private readonly prisma: PrismaService) {}

  async record(input: RecordActivityInput) {
    await this.prisma.activityLogEntry.create({ data: input });
  }

  async list(user: AuthUser, organizationId: string, take = 50) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    return this.prisma.activityLogEntry.findMany({
      where: { organizationId },
      include: { actor: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'desc' },
      take,
    });
  }
}
