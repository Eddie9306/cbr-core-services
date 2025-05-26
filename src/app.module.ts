import { Module } from '@nestjs/common';
import { TenantController } from './application/controllers/tenant.controller';
import {
  TenantRepository,
} from './infrastructure/repositories';
import { PrismaClient } from '@prisma/client';
import { TenantService, CognitoService } from './domain';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

const CognitoClientProvider = {
  provide: 'COGNITO_CLIENT',
  useFactory: (configService: ConfigService) => {
    return new CognitoIdentityProviderClient({
      region: configService.get<string>('COGNITO_REGION'),
    });
  },
  inject: [ConfigService],
}


@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),],
  controllers: [TenantController],
  providers: [
    CognitoClientProvider,
    CognitoService,
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    TenantRepository,
    TenantService
  ],
})
export class AppModule { }
