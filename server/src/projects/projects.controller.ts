import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UpsertBudgetDto } from './dto/upsert-budget.dto';
import { ProjectsService } from './projects.service';

@Controller('organizations/:organizationId/projects')
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(private readonly projects: ProjectsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    return this.projects.list(user, organizationId);
  }

  @Post()
  create(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Body() dto: CreateProjectDto,
  ) {
    return this.projects.create(user, organizationId, dto);
  }

  @Get(':projectId')
  findOne(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.projects.findOne(user, organizationId, projectId);
  }

  @Patch(':projectId')
  update(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: UpdateProjectDto,
  ) {
    return this.projects.update(user, organizationId, projectId, dto);
  }

  @Delete(':projectId')
  remove(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.projects.remove(user, organizationId, projectId);
  }

  @Post(':projectId/milestones')
  createMilestone(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: CreateMilestoneDto,
  ) {
    return this.projects.createMilestone(user, organizationId, projectId, dto);
  }

  @Patch(':projectId/milestones/:milestoneId')
  updateMilestone(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('milestoneId') milestoneId: string,
    @Body() dto: UpdateMilestoneDto,
  ) {
    return this.projects.updateMilestone(
      user,
      organizationId,
      projectId,
      milestoneId,
      dto,
    );
  }

  @Delete(':projectId/milestones/:milestoneId')
  removeMilestone(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('milestoneId') milestoneId: string,
  ) {
    return this.projects.removeMilestone(
      user,
      organizationId,
      projectId,
      milestoneId,
    );
  }

  @Post(':projectId/tasks')
  createTask(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: CreateTaskDto,
  ) {
    return this.projects.createTask(user, organizationId, projectId, dto);
  }

  @Patch(':projectId/tasks/:taskId')
  updateTask(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.projects.updateTask(
      user,
      organizationId,
      projectId,
      taskId,
      dto,
    );
  }

  @Delete(':projectId/tasks/:taskId')
  removeTask(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
  ) {
    return this.projects.removeTask(user, organizationId, projectId, taskId);
  }

  @Get(':projectId/budget')
  getBudget(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.projects.getBudget(user, organizationId, projectId);
  }

  @Put(':projectId/budget')
  upsertBudget(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: UpsertBudgetDto,
  ) {
    return this.projects.upsertBudget(user, organizationId, projectId, dto);
  }

  @Delete(':projectId/budget')
  removeBudget(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.projects.removeBudget(user, organizationId, projectId);
  }

  @Post(':projectId/publish-to-portfolio')
  publishToPortfolio(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.projects.publishToPortfolio(user, organizationId, projectId);
  }

  @Get(':projectId/tasks/:taskId/comments')
  listComments(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
  ) {
    return this.projects.listComments(user, organizationId, projectId, taskId);
  }

  @Post(':projectId/tasks/:taskId/comments')
  createComment(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
    @Body() dto: CreateTaskCommentDto,
  ) {
    return this.projects.createComment(
      user,
      organizationId,
      projectId,
      taskId,
      dto,
    );
  }

  @Delete(':projectId/tasks/:taskId/comments/:commentId')
  removeComment(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
    @Param('commentId') commentId: string,
  ) {
    return this.projects.removeComment(
      user,
      organizationId,
      projectId,
      taskId,
      commentId,
    );
  }
}
