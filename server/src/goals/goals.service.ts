import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import {
  CONTRIBUTE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(user: AuthUser, organizationId: string) {
    await this.assertCanView(user, organizationId);
    return this.prisma.goal.findMany({
      where: { organizationId },
      include: {
        projects: { select: { id: true, name: true, status: true } },
      },
      orderBy: [{ year: 'desc' }, { period: 'asc' }],
    });
  }

  async findOne(user: AuthUser, organizationId: string, goalId: string) {
    await this.assertCanView(user, organizationId);
    return this.findGoalOrThrow(organizationId, goalId, {
      projects: { select: { id: true, name: true, status: true } },
    });
  }

  async create(user: AuthUser, organizationId: string, dto: CreateGoalDto) {
    await this.assertCanContribute(user, organizationId);
    return this.prisma.goal.create({
      data: {
        title: dto.title,
        description: dto.description,
        period: dto.period,
        year: dto.year,
        status: dto.status,
        organizationId,
      },
    });
  }

  async update(
    user: AuthUser,
    organizationId: string,
    goalId: string,
    dto: UpdateGoalDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findGoalOrThrow(organizationId, goalId);
    return this.prisma.goal.update({
      where: { id: goalId },
      data: {
        title: dto.title,
        description: dto.description,
        period: dto.period,
        year: dto.year,
        status: dto.status,
      },
    });
  }

  async remove(user: AuthUser, organizationId: string, goalId: string) {
    await this.assertCanContribute(user, organizationId);
    await this.findGoalOrThrow(organizationId, goalId);
    await this.prisma.goal.delete({ where: { id: goalId } });
    return { removed: true };
  }

  private async assertCanView(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
  }

  private async assertCanContribute(user: AuthUser, organizationId: string) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !CONTRIBUTE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only contributors, managers, and owners can manage goals',
      );
    }
    return role;
  }

  private async findGoalOrThrow(
    organizationId: string,
    goalId: string,
    include?: Record<string, unknown>,
  ) {
    const goal = await this.prisma.goal.findFirst({
      where: { id: goalId, organizationId },
      include,
    });
    if (!goal) throw new NotFoundException('Goal not found');
    return goal;
  }
}
