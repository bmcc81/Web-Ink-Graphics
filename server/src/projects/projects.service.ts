import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import {
  CONTRIBUTE_ROLES,
  MANAGE_ROLES,
  resolveOrganizationRole,
} from '../organizations/organization-access';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

const taskInclude = {
  assignee: { select: { id: true, name: true } },
};

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(user: AuthUser, organizationId: string) {
    await this.assertCanView(user, organizationId);
    return this.prisma.project.findMany({
      where: { organizationId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findOne(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanView(user, organizationId);
    return this.findProjectOrThrow(organizationId, projectId, {
      milestones: { orderBy: { sortOrder: 'asc' as const } },
      tasks: {
        orderBy: { sortOrder: 'asc' as const },
        include: taskInclude,
      },
    });
  }

  async create(user: AuthUser, organizationId: string, dto: CreateProjectDto) {
    await this.assertCanContribute(user, organizationId);
    return this.prisma.project.create({
      data: {
        name: dto.name,
        description: dto.description,
        status: dto.status,
        startDate: dto.startDate ? new Date(dto.startDate) : undefined,
        targetLaunch: dto.targetLaunch ? new Date(dto.targetLaunch) : undefined,
        organizationId,
      },
    });
  }

  async update(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    dto: UpdateProjectDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    return this.prisma.project.update({
      where: { id: projectId },
      data: {
        name: dto.name,
        description: dto.description,
        status: dto.status,
        startDate: dto.startDate ? new Date(dto.startDate) : undefined,
        targetLaunch: dto.targetLaunch ? new Date(dto.targetLaunch) : undefined,
      },
    });
  }

  async remove(user: AuthUser, organizationId: string, projectId: string) {
    await this.assertCanManageOwnerLevel(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.prisma.project.delete({ where: { id: projectId } });
    return { removed: true };
  }

  async createMilestone(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    dto: CreateMilestoneDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    const sortOrder = await this.prisma.milestone.count({
      where: { projectId },
    });
    return this.prisma.milestone.create({
      data: {
        name: dto.name,
        description: dto.description,
        status: dto.status,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        sortOrder,
        projectId,
      },
    });
  }

  async updateMilestone(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    milestoneId: string,
    dto: UpdateMilestoneDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.assertMilestoneBelongsToProject(projectId, milestoneId);
    return this.prisma.milestone.update({
      where: { id: milestoneId },
      data: {
        name: dto.name,
        description: dto.description,
        status: dto.status,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
      },
    });
  }

  async removeMilestone(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    milestoneId: string,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.assertMilestoneBelongsToProject(projectId, milestoneId);
    await this.prisma.milestone.delete({ where: { id: milestoneId } });
    return { removed: true };
  }

  async createTask(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    dto: CreateTaskDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    if (dto.milestoneId) {
      await this.assertMilestoneBelongsToProject(projectId, dto.milestoneId);
    }
    if (dto.assigneeId) {
      await this.assertAssigneeIsMember(organizationId, dto.assigneeId);
    }
    const sortOrder = await this.prisma.task.count({ where: { projectId } });
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        sortOrder,
        projectId,
        milestoneId: dto.milestoneId ?? undefined,
        assigneeId: dto.assigneeId ?? undefined,
      },
      include: taskInclude,
    });
  }

  async updateTask(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    taskId: string,
    dto: UpdateTaskDto,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.assertTaskBelongsToProject(projectId, taskId);
    if (dto.milestoneId) {
      await this.assertMilestoneBelongsToProject(projectId, dto.milestoneId);
    }
    if (dto.assigneeId) {
      await this.assertAssigneeIsMember(organizationId, dto.assigneeId);
    }
    return this.prisma.task.update({
      where: { id: taskId },
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        milestoneId:
          dto.milestoneId === null ? null : (dto.milestoneId ?? undefined),
        assigneeId:
          dto.assigneeId === null ? null : (dto.assigneeId ?? undefined),
      },
      include: taskInclude,
    });
  }

  async removeTask(
    user: AuthUser,
    organizationId: string,
    projectId: string,
    taskId: string,
  ) {
    await this.assertCanContribute(user, organizationId);
    await this.findProjectOrThrow(organizationId, projectId);
    await this.assertTaskBelongsToProject(projectId, taskId);
    await this.prisma.task.delete({ where: { id: taskId } });
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
        'Only contributors, managers, and owners can manage projects',
      );
    }
  }

  private async assertCanManageOwnerLevel(
    user: AuthUser,
    organizationId: string,
  ) {
    const role = await resolveOrganizationRole(
      this.prisma,
      user,
      organizationId,
    );
    if (!role) throw new NotFoundException('Organization not found');
    if (role !== 'STAFF' && !MANAGE_ROLES.includes(role)) {
      throw new ForbiddenException(
        'Only organization owners and managers can delete a project',
      );
    }
  }

  private async findProjectOrThrow(
    organizationId: string,
    projectId: string,
    include?: Record<string, unknown>,
  ) {
    const project = await this.prisma.project.findFirst({
      where: { id: projectId, organizationId },
      include,
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  private async assertMilestoneBelongsToProject(
    projectId: string,
    milestoneId: string,
  ) {
    const milestone = await this.prisma.milestone.findFirst({
      where: { id: milestoneId, projectId },
      select: { id: true },
    });
    if (!milestone) throw new NotFoundException('Milestone not found');
  }

  private async assertTaskBelongsToProject(projectId: string, taskId: string) {
    const task = await this.prisma.task.findFirst({
      where: { id: taskId, projectId },
      select: { id: true },
    });
    if (!task) throw new NotFoundException('Task not found');
  }

  private async assertAssigneeIsMember(
    organizationId: string,
    assigneeId: string,
  ) {
    const member = await this.prisma.organizationMembership.findFirst({
      where: { organizationId, userId: assigneeId },
      select: { id: true },
    });
    if (!member) {
      throw new BadRequestException(
        'The assignee must be a member of this organization',
      );
    }
  }
}
