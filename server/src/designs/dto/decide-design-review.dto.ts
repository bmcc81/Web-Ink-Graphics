import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

export enum DesignReviewDecision {
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  APPROVED = 'APPROVED',
}

export class DecideDesignReviewDto {
  @IsEnum(DesignReviewDecision)
  decision: DesignReviewDecision;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  note?: string;
}
