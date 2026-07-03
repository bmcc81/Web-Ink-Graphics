import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { CreatePortfolioProjectDto } from './dto/create-portfolio-project.dto';
import { PortfolioQueryDto } from './dto/portfolio-query.dto';
import { UpdatePortfolioProjectDto } from './dto/update-portfolio-project.dto';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolio: PortfolioService) {}

  @Get()
  findAll(@Query() query: PortfolioQueryDto) {
    return this.portfolio.findAll(query);
  }

  @Get('featured')
  findFeatured() {
    return this.portfolio.findFeatured();
  }

  @Get('admin/all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  findAllForAdmin(@Query() query: PortfolioQueryDto) {
    return this.portfolio.findAll(query, true);
  }

  @Get('admin/categories')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  findCategories() {
    return this.portfolio.findCategories();
  }

  @Get('admin/:slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  findOneForAdmin(@Param('slug') slug: string) {
    return this.portfolio.findOne(slug);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.portfolio.findPublished(slug);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  create(@Body() dto: CreatePortfolioProjectDto) {
    return this.portfolio.create(dto);
  }

  @Patch(':slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.EDITOR)
  update(@Param('slug') slug: string, @Body() dto: UpdatePortfolioProjectDto) {
    return this.portfolio.update(slug, dto);
  }

  @Delete(':slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  archive(@Param('slug') slug: string) {
    return this.portfolio.archive(slug);
  }
}
