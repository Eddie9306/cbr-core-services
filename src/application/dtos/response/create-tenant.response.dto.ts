import { ApiProperty } from '@nestjs/swagger';

export class CreateTenantResponseDto {
  @ApiProperty({ type: Number })
  tenantId: number;

  @ApiProperty({ type: String })
  companyId: string;

  @ApiProperty({ type: String })
  companyName: string;

  @ApiProperty({ type: String })
  phoneNumber: string;

  @ApiProperty({ type: String })
  address?: string;

  @ApiProperty({ type: Number })
  employees: number;
}
