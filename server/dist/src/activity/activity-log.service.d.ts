import { ActivityAction, ActivityEntityType } from '@prisma/client';
import type { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../prisma/prisma.service';
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
        summary: string;
        entityType: import("@prisma/client").$Enums.ActivityEntityType;
        entityId: string;
        action: import("@prisma/client").$Enums.ActivityAction;
        actorId: string | null;
    })[]>;
}
export {};
