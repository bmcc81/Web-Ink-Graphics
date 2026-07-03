import { AuthService } from './auth.service';
import type { AuthUser } from './auth-user';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    login(credentials: LoginDto): Promise<{
        accessToken: string;
        user: {
            sub: string;
            email: string;
            name: string;
            role: import("@prisma/client").$Enums.Role;
            organizations: {
                id: string;
                name: string;
                slug: string;
                role: import("@prisma/client").$Enums.OrganizationRole;
            }[];
        };
    }>;
    profile(user: AuthUser): Promise<{
        sub: string;
        email: string;
        name: string;
        role: import("@prisma/client").$Enums.Role;
        organizations: {
            id: string;
            name: string;
            slug: string;
            role: import("@prisma/client").$Enums.OrganizationRole;
        }[];
    }>;
}
