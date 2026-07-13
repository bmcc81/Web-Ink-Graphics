import { ConfigService } from '@nestjs/config';
import { AiUsagePurpose } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
export declare class AiUsageService {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
    private monthlyCap;
    private startOfMonth;
    assertWithinCap(organizationId: string): Promise<void>;
    record(organizationId: string, user: AuthUser, purpose: AiUsagePurpose, model: string, promptTokens: number, completionTokens: number): Promise<void>;
    summary(organizationId: string): Promise<{
        callsUsed: number;
        callsCap: number;
        estimatedCostUsd: number;
    }>;
}
