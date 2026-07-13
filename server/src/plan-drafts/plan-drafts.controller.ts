import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import type { AuthUser } from '../auth/auth-user';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlanDraftsService } from './plan-drafts.service';

@Controller('clients/briefs/:briefId/plan-drafts')
@UseGuards(JwtAuthGuard)
export class PlanDraftsController {
  constructor(private readonly planDrafts: PlanDraftsService) {}

  @Get()
  list(@CurrentUser() user: AuthUser, @Param('briefId') briefId: string) {
    return this.planDrafts.list(user, briefId);
  }

  @Post()
  generate(@CurrentUser() user: AuthUser, @Param('briefId') briefId: string) {
    return this.planDrafts.generate(user, briefId);
  }

  @Post(':planDraftId/apply')
  apply(
    @CurrentUser() user: AuthUser,
    @Param('briefId') briefId: string,
    @Param('planDraftId') planDraftId: string,
  ) {
    return this.planDrafts.apply(user, briefId, planDraftId);
  }
}
