import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { GoalsService } from './goals.service';

@Controller('organizations/:organizationId/goals')
@UseGuards(JwtAuthGuard)
export class GoalsController {
  constructor(private readonly goals: GoalsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
  ) {
    return this.goals.list(user, organizationId);
  }

  @Post()
  create(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Body() dto: CreateGoalDto,
  ) {
    return this.goals.create(user, organizationId, dto);
  }

  @Get(':goalId')
  findOne(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('goalId') goalId: string,
  ) {
    return this.goals.findOne(user, organizationId, goalId);
  }

  @Patch(':goalId')
  update(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('goalId') goalId: string,
    @Body() dto: UpdateGoalDto,
  ) {
    return this.goals.update(user, organizationId, goalId, dto);
  }

  @Delete(':goalId')
  remove(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('goalId') goalId: string,
  ) {
    return this.goals.remove(user, organizationId, goalId);
  }
}
