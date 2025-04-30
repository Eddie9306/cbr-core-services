import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTenantRequestDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  companyId: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ type: String })
  @IsOptional()
  address?: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  employees: number;
}
