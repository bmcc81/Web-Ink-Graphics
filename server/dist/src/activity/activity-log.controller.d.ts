import type { AuthUser } from '../auth/auth-user';
import { ActivityLogService } from './activity-log.service';
export declare class ActivityLogController {
    private readonly activityLog;
    constructor(activityLog: ActivityLogService);
    list(user: AuthUser, organizationId: string): Promise<({
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
