import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
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
    profile(userId: string): Promise<{
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
    private userProfile;
}
