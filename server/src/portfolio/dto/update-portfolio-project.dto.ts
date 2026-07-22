import { PartialType } from '@nestjs/mapped-types';
import { CreatePortfolioProjectDto } from './create-portfolio-project.dto.js';

export class UpdatePortfolioProjectDto extends PartialType(
  CreatePortfolioProjectDto,
) {}
