import type { AuthUser } from '../auth/auth-user.js';
import { CreativeBriefsService } from './creative-briefs.service.js';
export declare class CreativeBriefsController {
    private readonly creativeBriefs;
    constructor(creativeBriefs: CreativeBriefsService);
    list(user: AuthUser, organizationId: string, projectId: string): Promise<({
        approvedBy: {
            id: string;
            name: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            sortOrder: number;
            label: string;
            creativeBriefId: string;
            copyAngle: string;
            imageConcept: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        summary: string;
        status: import("../generated/prisma/enums.js").CreativeBriefStatus;
        approvedAt: Date | null;
        projectId: string;
        createdById: string;
        approvedById: string | null;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
    })[]>;
    generate(user: AuthUser, organizationId: string, projectId: string): Promise<{
        approvedBy: {
            id: string;
            name: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            sortOrder: number;
            label: string;
            creativeBriefId: string;
            copyAngle: string;
            imageConcept: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        summary: string;
        status: import("../generated/prisma/enums.js").CreativeBriefStatus;
        approvedAt: Date | null;
        projectId: string;
        createdById: string;
        approvedById: string | null;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
    }>;
    approve(user: AuthUser, organizationId: string, projectId: string, briefId: string): Promise<{
        approvedBy: {
            id: string;
            name: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            sortOrder: number;
            label: string;
            creativeBriefId: string;
            copyAngle: string;
            imageConcept: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        summary: string;
        status: import("../generated/prisma/enums.js").CreativeBriefStatus;
        approvedAt: Date | null;
        projectId: string;
        createdById: string;
        approvedById: string | null;
        audienceNotes: string;
        copyAngles: string;
        layoutDirection: string;
        readinessScore: number;
        readinessNotes: string;
    }>;
}
