import { IsBoolean, IsNotEmpty, IsOptional, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateGradeDto {
  @ApiModelPropertyOptional({ description: 'Identifier of the user related to the grade', example: '' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  userId?: string;

  @ApiModelPropertyOptional({ description: 'Identifier of the test related to the grade', example: '' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  testId?: string;

  @ApiModelPropertyOptional({ description: 'Value of the grade', example: 15 })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  value?: number;
}
