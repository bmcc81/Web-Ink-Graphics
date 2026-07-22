import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
export declare class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
