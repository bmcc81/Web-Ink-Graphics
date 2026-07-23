import { ActivityAction, ActivityEntityType } from '../generated/prisma/client.js';
import type { AuthUser } from '../auth/auth-user.js';
import { PrismaService } from '../prisma/prisma.service.js';
interface RecordActivityInput {
    organizationId: string;
    entityType: ActivityEntityType;
    entityId: string;
    action: ActivityAction;
    summary: string;
    actorId: string;
}
export declare class ActivityLogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    record(input: RecordActivityInput): Promise<void>;
    list(user: AuthUser, organizationId: string, take?: number): Promise<({
        actor: {
            id: string;
            name: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        organizationId: string;
        entityType: ActivityEntityType;
        entityId: string;
        action: ActivityAction;
        summary: string;
        actorId: string | null;
    })[]>;
}
export {};
