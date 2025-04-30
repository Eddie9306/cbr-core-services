import { Tenant } from 'src/domain/models/tenant.model';
import { TenantRepositoryInterface } from './tenant.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoggerInterface } from '../../logger/logger.interface';
import { InfrastructureError } from '../../exception-filter/infrastructure.error';
import { CreateTenantRequestDto } from '../../../application/dtos/request';

@Injectable()
export class TenantRepository implements TenantRepositoryInterface {
  constructor(
    private readonly prisma: PrismaClient,
    @Inject('LoggerInterface') private readonly logger: LoggerInterface,
  ) {}

  async create(tenant: CreateTenantRequestDto): Promise<Tenant> {
    this.logger.info(tenant, 'TenantRepository.create');
    try {
      return (await this.prisma.tenant.create({
        data: {
          companyId: tenant.companyId,
          companyName: tenant.companyName,
          address: tenant.address || '',
          phoneNumber: tenant.phoneNumber,
          employees: tenant.employees,
        },
      })) as Tenant;
    } catch (error) {
      throw new InfrastructureError('Error creating tenant', error);
    }
  }
}
