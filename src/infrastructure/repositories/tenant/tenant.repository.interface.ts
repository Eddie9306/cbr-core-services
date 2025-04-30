import { Tenant } from 'src/domain/models/tenant.model';
import { CreateTenantRequestDto } from '../../../application/dtos/request';

export interface TenantRepositoryInterface {
  create(tenant: CreateTenantRequestDto): Promise<Tenant>;
}
