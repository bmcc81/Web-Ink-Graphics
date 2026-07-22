import type { AuthUser } from '../auth/auth-user.js';
import { ActivityLogService } from './activity-log.service.js';
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
        entityType: import("../generated/prisma/enums.js").ActivityEntityType;
        entityId: string;
        action: import("../generated/prisma/enums.js").ActivityAction;
        summary: string;
        actorId: string | null;
    })[]>;
}
