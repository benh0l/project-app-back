import { IsBoolean, IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateTestDto {
  @ApiModelPropertyOptional({ description: 'Title', example: 'Nouvelles technologies du web' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiModelPropertyOptional({ description: 'Date', example: '22/06/2018' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  date?: string;

  @ApiModelPropertyOptional({ description: 'Coefficient', example: 3 })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  coefficient?: number;

  @ApiModelPropertyOptional({ description: 'Is the test visible', example: true })
  @IsOptional()
  @IsBoolean()
  shown?: boolean;
}
