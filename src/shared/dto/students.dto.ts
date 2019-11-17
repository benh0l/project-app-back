import { MinLength, MaxLength, IsNumberString, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class StudentsDto{

  @ApiModelProperty({ description: 'id of a student', example: 'sdqefq5' })
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
