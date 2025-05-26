import { Body, Controller, Inject, Post } from '@nestjs/common';
import { TenantService } from '../../domain';
import { CreateTenantRequestDto } from '../dtos/request';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateTenantResponseDto } from '../dtos/response/create-tenant.response.dto';

@Controller('tenants')
export class TenantController {
  constructor(
    private readonly tenantService: TenantService,
  ) { }

  @Post()
  @ApiCreatedResponse({
    type: CreateTenantResponseDto,
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid params, please review and try again',
  })
  async createTenant(
    @Body() createTenantDto: CreateTenantRequestDto,
  ): Promise<CreateTenantResponseDto> {
    return await this.tenantService.create(createTenantDto);
  }
}
