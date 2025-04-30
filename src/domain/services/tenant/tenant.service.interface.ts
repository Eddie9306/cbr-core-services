import { Tenant } from '../../models/tenant.model';
import { CreateTenantRequestDto } from '../../../application/dtos/request';

export interface TenantServiceInterface {
  create(tenant: CreateTenantRequestDto): Promise<Tenant>;
}
