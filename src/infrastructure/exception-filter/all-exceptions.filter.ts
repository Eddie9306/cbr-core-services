import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { DomainError } from './domain.error';
import { InfrastructureError } from './infrastructure.error';
import { LoggerService } from '../logger/logger.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) { }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let clientMessage = 'Internal server error';
    let logLevel: 'error' | 'warn' | 'info' = 'error';

    if (exception instanceof DomainError) {
      status = HttpStatus.BAD_REQUEST;
      clientMessage = exception.message;
      logLevel = 'warn';
    } else if (exception instanceof InfrastructureError) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
      clientMessage = exception.message;
      logLevel = 'error';
    } else if (exception instanceof BadRequestException) {
      const response = exception.getResponse();
      status = HttpStatus.BAD_REQUEST;
      clientMessage = response['message'].join(' | ');
      logLevel = 'warn';
    }

    const normalized = this.normalizeError(exception);

    this.logger[logLevel]({ error: normalized }, normalized.message);

    response.status(status).json({
      statusCode: status,
      message: clientMessage,
    });
  }

  private normalizeError(exception: any): {
    name: string;
    message: string;
    stack?: string;
    original?: any;
  } {
    if (typeof exception === 'string') {
      return {
        name: 'StringError',
        message: exception,
      };
    }

    if (exception instanceof Error) {
      return {
        name: exception.name,
        message: exception.message,
        stack: exception.stack,
      };
    }

    if (typeof exception === 'object' && exception !== null) {
      return {
        name: exception.name || 'ObjectError',
        message:
          exception.message || JSON.stringify(exception, null, 2).slice(0, 500),
        stack: exception.stack,
        original: exception,
      };
    }

    return {
      name: 'UnknownThrownError',
      message: String(exception),
    };
  }
}
