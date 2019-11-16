import { Min, Max, IsDate, IsNotEmpty, IsString, IsBoolean, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateTestDto {

  @ApiModelProperty({ description: 'Title', example: 'Nouvelles technologies du web' })
  @IsString()
  @IsNotEmpty()
  @Min(3)
  @Max(40)
  name: string;

  @ApiModelProperty({ description: 'Date', example: '14-02-2019' })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiModelProperty({ description: 'Coefficient of the test', example: '3'})
  @IsNumber()
  @IsNotEmpty()
  coefficient: number;

  @ApiModelProperty({ description: 'Is the test visible', example: 'true'})
  @IsBoolean()
  @IsNotEmpty()
  students: boolean;
}
