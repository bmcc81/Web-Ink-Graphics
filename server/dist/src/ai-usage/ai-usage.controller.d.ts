import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
import { AiUsageService } from './ai-usage.service';
export declare class AiUsageController {
    private readonly aiUsage;
    private readonly prisma;
    constructor(aiUsage: AiUsageService, prisma: PrismaService);
    summary(user: AuthUser, organizationId: string): Promise<{
        callsUsed: number;
        callsCap: number;
        estimatedCostUsd: number;
    }>;
}
