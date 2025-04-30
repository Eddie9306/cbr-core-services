import { Inject, Injectable } from '@nestjs/common';
import { TenantServiceInterface } from './tenant.service.interface';
import { TenantRepositoryInterface } from '../../../infrastructure/repositories';
import { Tenant } from '../../models/tenant.model';
import { LoggerInterface } from '../../../infrastructure/logger/logger.interface';
import { CreateTenantRequestDto } from '../../../application/dtos/request';

@Injectable()
export class TenantService implements TenantServiceInterface {
  constructor(
    @Inject('TenantRepositoryInterface')
    private readonly tenantRepository: TenantRepositoryInterface,
    @Inject('LoggerInterface')
    private readonly logger: LoggerInterface,
  ) {}

  async create(tenant: CreateTenantRequestDto): Promise<Tenant> {
    this.logger.info(tenant, 'TenantService.create');
    return await this.tenantRepository.create(tenant);
  }
}
