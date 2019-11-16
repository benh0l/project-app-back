import { Min, Max, IsDate, IsNotEmpty, IsString, IsBoolean, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateGradeDto {

  @ApiModelProperty({ description: 'Identifier of the user related to the grade', example: '' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiModelProperty({ description: 'Identifier of the test related to the grade', example: '' })
  @IsString()
  @IsNotEmpty()
  testId: string;

  @ApiModelProperty({ description: 'Value of the grade', example: 15})
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
