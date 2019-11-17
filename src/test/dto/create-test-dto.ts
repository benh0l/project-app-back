import { Min, Max, IsDate, IsNotEmpty, IsString, IsBoolean, IsNumber, ValidateNested, IsOptional, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { LessonsDto } from '../../shared/dto/lessons.dto';
import { GradesDto } from '../../shared/dto/grades.dto';

export class CreateTestDto {

  @ApiModelProperty({ description: 'Title', example: 'Nouvelles technologies du web' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiModelProperty({ description: 'Date', example: '29/10/2019' })
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiModelProperty({ description: 'Coefficient of the test', example: 3})
  @IsNumber()
  @IsNotEmpty()
  coefficient: number;

  @ApiModelProperty({ description: 'Is the test visible', example: true})
  @IsBoolean()
  @IsNotEmpty()
  shown: boolean;

  @ApiModelProperty({ description: 'Lesson id', example: ''})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  lessonId: string;

  @ApiModelProperty({ description: 'List of grades id'})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => GradesDto)
  gradesId: GradesDto[];
}
