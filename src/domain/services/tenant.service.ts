import { Injectable } from '@nestjs/common';
import { Tenant } from '../models/tenant.model';
import { LoggerService } from '../../infrastructure/logger/logger.service';
import { CreateTenantRequestDto } from '../../application/dtos/request';
import { TenantRepository } from '../../infrastructure/repositories';
import { CognitoService } from './cognito.service';
import { DomainError } from 'src/infrastructure/exception-filter/domain.error';
import { ErrorCodes } from 'src/infrastructure/exception-filter/error-codes';

@Injectable()
export class TenantService {
  constructor(
    private readonly tenantRepository: TenantRepository,
    private readonly logger: LoggerService,
    private readonly cognitoService: CognitoService,
  ) { }

  async create(tenant: CreateTenantRequestDto): Promise<Tenant> {
    this.logger.info(tenant, 'TenantService.create');
    try {

      const { name } = tenant;

      const existingTenant = await this.tenantRepository.findByName(name);
      if (existingTenant) {
        this.logger.warn(
          { name },
          'TenantService.create - Tenant already exists',
        );
        throw new DomainError(ErrorCodes.RESOURCE_ALREADY_EXISTS)
      }

      await this.cognitoService.createGroup(name);

      return await this.tenantRepository.create(tenant);

    } catch (error) {
      this.logger.error(error, 'Unexpected error creating new tenant');
      throw error;
    }
  }
}
