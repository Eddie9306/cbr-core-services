import { Module } from '@nestjs/common';
import { LoggerModule as PinoNestLoggerModule } from 'nestjs-pino';
import { LoggerInterface } from './logger.interface';
import { BasicLogger } from './basic.logger';

@Module({
  imports: [
    PinoNestLoggerModule.forRoot({
      pinoHttp: {
        genReqId: (req) => {
          if (req.headers['x-request-id']) {
            return req.headers['x-request-id'];
          }
          return require('crypto').randomUUID();
        },
        serializers: {
          req: (req) => ({
            id: req.id,
            method: req.method,
            url: req.url,
          }),
        },
      },
    }),
  ],
  providers: [
    {
      provide: 'LoggerInterface',
      useClass: BasicLogger,
    },
  ],
  exports: ['LoggerInterface'],
})
export class LoggerModule {}
