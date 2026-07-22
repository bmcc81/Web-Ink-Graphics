import { PrismaService } from '../prisma/prisma.service.js';
export declare class HealthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    liveness(): {
        status: string;
        uptimeSeconds: number;
        timestamp: string;
    };
    readiness(): Promise<{
        status: string;
        database: string;
        timestamp: string;
    }>;
}
