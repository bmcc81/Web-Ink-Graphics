import type { AuthUser } from '../auth/auth-user';
import { CreativeBriefsService } from './creative-briefs.service';
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
            copyAngle: string;
            imageConcept: string;
            creativeBriefId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.CreativeBriefStatus;
        approvedAt: Date | null;
        summary: string;
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
            copyAngle: string;
            imageConcept: string;
            creativeBriefId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.CreativeBriefStatus;
        approvedAt: Date | null;
        summary: string;
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
            copyAngle: string;
            imageConcept: string;
            creativeBriefId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.CreativeBriefStatus;
        approvedAt: Date | null;
        summary: string;
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
