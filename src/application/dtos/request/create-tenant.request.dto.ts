import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTenantRequestDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  nationalId: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  name: string;

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
