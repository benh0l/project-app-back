import { MinLength, MaxLength, IsNumberString, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class TestDto {

  @ApiModelProperty({ description: 'id of a test', example: '' })
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
