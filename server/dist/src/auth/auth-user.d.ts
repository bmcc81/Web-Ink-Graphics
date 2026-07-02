import { Role } from '@prisma/client';
export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: Role;
}
export interface JwtPayload {
    sub: string;
    email: string;
    name: string;
    role: Role;
}
