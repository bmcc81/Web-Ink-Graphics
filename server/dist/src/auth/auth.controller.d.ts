import { AuthService } from './auth.service.js';
import type { AuthUser } from './auth-user.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    login(credentials: LoginDto): Promise<{
        accessToken: string;
        user: {
            sub: string;
            email: string;
            name: string;
            role: import("../generated/prisma/enums.js").Role;
            organizations: {
                id: string;
                name: string;
                slug: string;
                role: import("../generated/prisma/enums.js").OrganizationRole;
            }[];
        };
    }>;
    profile(user: AuthUser): Promise<{
        sub: string;
        email: string;
        name: string;
        role: import("../generated/prisma/enums.js").Role;
        organizations: {
            id: string;
            name: string;
            slug: string;
            role: import("../generated/prisma/enums.js").OrganizationRole;
        }[];
    }>;
}
