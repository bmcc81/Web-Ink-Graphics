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
import { CreateDesignCommentDto } from './dto/create-design-comment.dto';
import { CreateDesignDocumentDto } from './dto/create-design-document.dto';
import { CreateDesignReviewDto } from './dto/create-design-review.dto';
import { DecideDesignReviewDto } from './dto/decide-design-review.dto';
import { DesignsService } from './designs.service';

@Controller('organizations/:organizationId/projects/:projectId/designs')
@UseGuards(JwtAuthGuard)
export class DesignsController {
  constructor(private readonly designs: DesignsService) {}

  @Get()
  list(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.designs.list(user, organizationId, projectId);
  }

  @Post()
  attach(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Body() dto: CreateDesignDocumentDto,
  ) {
    return this.designs.attach(user, organizationId, projectId, dto);
  }

  @Post(':designId/sync')
  sync(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
  ) {
    return this.designs.sync(user, organizationId, projectId, designId);
  }

  @Delete(':designId')
  unlink(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
  ) {
    return this.designs.unlink(user, organizationId, projectId, designId);
  }

  @Get(':designId/reviews')
  listReviews(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
  ) {
    return this.designs.listReviews(user, organizationId, projectId, designId);
  }

  @Post(':designId/reviews')
  createReview(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
    @Body() dto: CreateDesignReviewDto,
  ) {
    return this.designs.createReview(
      user,
      organizationId,
      projectId,
      designId,
      dto,
    );
  }

  @Patch(':designId/reviews/:reviewId')
  decideReview(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
    @Param('reviewId') reviewId: string,
    @Body() dto: DecideDesignReviewDto,
  ) {
    return this.designs.decideReview(
      user,
      organizationId,
      projectId,
      designId,
      reviewId,
      dto,
    );
  }

  @Get(':designId/comments')
  listComments(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
  ) {
    return this.designs.listComments(user, organizationId, projectId, designId);
  }

  @Post(':designId/comments')
  createComment(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
    @Body() dto: CreateDesignCommentDto,
  ) {
    return this.designs.createComment(
      user,
      organizationId,
      projectId,
      designId,
      dto,
    );
  }

  @Delete(':designId/comments/:commentId')
  removeComment(
    @CurrentUser() user: AuthUser,
    @Param('organizationId') organizationId: string,
    @Param('projectId') projectId: string,
    @Param('designId') designId: string,
    @Param('commentId') commentId: string,
  ) {
    return this.designs.removeComment(
      user,
      organizationId,
      projectId,
      designId,
      commentId,
    );
  }
}
