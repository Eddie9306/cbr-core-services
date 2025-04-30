import { Body, Controller, Inject, Post } from '@nestjs/common';
import { TenantServiceInterface } from '../../domain';
import { CreateTenantRequestDto } from '../dtos/request';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { LoggerInterface } from '../../infrastructure/logger/logger.interface';
import { CreateTenantResponseDto } from '../dtos/response/create-tenant.response.dto';

@Controller('tenants')
export class TenantController {
  constructor(
    @Inject('TenantServiceInterface')
    private readonly tenantService: TenantServiceInterface,
    @Inject('LoggerInterface')
    private readonly logger: LoggerInterface,
  ) {}

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
    this.logger.info(createTenantDto, 'TenantController.createTenant');
    return await this.tenantService.create(createTenantDto);
  }
}
