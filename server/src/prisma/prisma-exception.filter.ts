import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const mappedException: HttpException =
      exception.code === 'P2002'
        ? new ConflictException(
            'A record with that unique value already exists',
          )
        : exception.code === 'P2025'
          ? new NotFoundException('The requested record was not found')
          : new BadRequestException(
              'The database could not accept this request',
            );

    response
      .status(mappedException.getStatus())
      .json(mappedException.getResponse());
  }
}
