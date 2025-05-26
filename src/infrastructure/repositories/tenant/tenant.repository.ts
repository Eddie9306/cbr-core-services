import { Tenant } from 'src/domain/models/tenant.model';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { InfrastructureError } from '../../exception-filter/infrastructure.error';
import { CreateTenantRequestDto } from '../../../application/dtos/request';
import { LoggerService } from '../../logger/logger.service';
import { ErrorCodes } from '../../exception-filter/error-codes';

@Injectable()
export class TenantRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: LoggerService,
  ) { }

  async create(tenant: CreateTenantRequestDto): Promise<Tenant> {
    this.logger.info(tenant, 'TenantRepository.create');
    try {

      const { nationalId, name, address, phoneNumber, employees } = tenant

      return (await this.prisma.tenant.create({
        data: {
          nationalId,
          name,
          address: address || '',
          phoneNumber,
          employees,
        },
      })) as Tenant;
    } catch (error) {
      this.logger.error(error, 'Unexpected error creating new tenant');
      throw new InfrastructureError(
        ErrorCodes.UNABLE_TO_CREATE_RESOURCE,
        error,
      );
    }
  }

  async findByName(
    name: string,
  ): Promise<Tenant | null> {
    this.logger.info({ name }, 'TenantRepository.findByName');
    try {
      const tenant = await this.prisma.tenant.findFirst({
        where: {
          name
        }
      });
      if (tenant) {
        return tenant as Tenant;
      }

      return null;
    } catch (error) {
      this.logger.error(error, 'Unexpected error finding tenant by name');
      throw new InfrastructureError(
        ErrorCodes.UNABLE_TO_FIND_RESOURCE,
        error,
      );
    }
  }
}
