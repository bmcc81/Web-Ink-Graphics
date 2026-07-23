var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Catch, ConflictException, NotFoundException, } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
let PrismaExceptionFilter = class PrismaExceptionFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        const mappedException = exception.code === 'P2002'
            ? new ConflictException('A record with that unique value already exists')
            : exception.code === 'P2025'
                ? new NotFoundException('The requested record was not found')
                : new BadRequestException('The database could not accept this request');
        response
            .status(mappedException.getStatus())
            .json(mappedException.getResponse());
    }
};
PrismaExceptionFilter = __decorate([
    Catch(Prisma.PrismaClientKnownRequestError)
], PrismaExceptionFilter);
export { PrismaExceptionFilter };
//# sourceMappingURL=prisma-exception.filter.js.map