import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AiUsagePurpose } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';

const HAIKU_INPUT_MICROS_PER_TOKEN = 1; // $1.00 / 1M input tokens
const HAIKU_OUTPUT_MICROS_PER_TOKEN = 5; // $5.00 / 1M output tokens
const DEFAULT_MONTHLY_CALL_CAP = 50;

@Injectable()
export class AiUsageService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  private monthlyCap(): number {
    const configured = this.config.get<string>('AI_MONTHLY_CALL_CAP');
    const parsed = configured ? Number(configured) : NaN;
    return Number.isFinite(parsed) && parsed > 0
      ? parsed
      : DEFAULT_MONTHLY_CALL_CAP;
  }

  private startOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  async assertWithinCap(organizationId: string) {
    const cap = this.monthlyCap();
    const used = await this.prisma.aiUsageRecord.count({
      where: { organizationId, createdAt: { gte: this.startOfMonth() } },
    });
    if (used >= cap) {
      throw new ForbiddenException(
        `This organization has reached its monthly AI generation limit (${cap} calls). The limit resets next month.`,
      );
    }
  }

  async record(
    organizationId: string,
    user: AuthUser,
    purpose: AiUsagePurpose,
    model: string,
    promptTokens: number,
    completionTokens: number,
  ) {
    const estimatedCostMicros =
      promptTokens * HAIKU_INPUT_MICROS_PER_TOKEN +
      completionTokens * HAIKU_OUTPUT_MICROS_PER_TOKEN;
    await this.prisma.aiUsageRecord.create({
      data: {
        organizationId,
        requestedById: user.id,
        purpose,
        model,
        promptTokens,
        completionTokens,
        estimatedCostMicros,
      },
    });
  }

  async summary(organizationId: string) {
    const cap = this.monthlyCap();
    const records = await this.prisma.aiUsageRecord.findMany({
      where: { organizationId, createdAt: { gte: this.startOfMonth() } },
      select: { estimatedCostMicros: true },
    });
    const estimatedCostMicros = records.reduce(
      (sum, record) => sum + record.estimatedCostMicros,
      0,
    );
    return {
      callsUsed: records.length,
      callsCap: cap,
      estimatedCostUsd: estimatedCostMicros / 1_000_000,
    };
  }
}
