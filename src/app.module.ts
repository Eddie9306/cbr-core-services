import { Module } from '@nestjs/common';
import { TenantController } from './application/controllers/tenant.controller';
import {
  TenantRepositoryInterface,
  TenantRepository,
} from './infrastructure/repositories';
import { PrismaClient } from '@prisma/client';
import { TenantServiceInterface, TenantService } from './domain';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [TenantController],
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    {
      provide: 'TenantRepositoryInterface',
      useClass: TenantRepository,
    }, // services
    {
      provide: 'TenantServiceInterface',
      useClass: TenantService,
    },
  ],
})
export class AppModule {}
