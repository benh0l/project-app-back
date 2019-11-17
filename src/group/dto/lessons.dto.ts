import { MinLength, MaxLength, IsNumberString, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class LessonsDto{

  @ApiModelProperty({ description: 'id of a lesson', example: 'sdqefq5' })
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
