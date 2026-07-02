import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscoveryBriefDto } from './create-discovery-brief.dto';

export class UpdateDiscoveryBriefDto extends PartialType(
  CreateDiscoveryBriefDto,
) {}
