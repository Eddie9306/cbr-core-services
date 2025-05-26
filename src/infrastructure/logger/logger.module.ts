import { Module } from '@nestjs/common';
import { LoggerModule as PinoNestLoggerModule } from 'nestjs-pino';
import { LoggerService } from './logger.service';

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
   LoggerService,
  ],
  exports: [LoggerService],
})
export class LoggerModule {}
