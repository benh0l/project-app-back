import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import * as mongoose from '@nestjs/mongoose';
import { StudentsDto } from './students.dto';
import { LessonsDto } from './lessons.dto';

export class CreateGroupDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty({ description: 'StartDate', example: '101343600000' })
  @IsNumberString()
  @IsNotEmpty()
  startDate: number;

  @ApiModelProperty({ description: 'EndDate', example: '101343600000'})
  @IsNumberString()
  @IsNotEmpty()
  endDate: number;

  @ApiModelProperty({ description: 'List of students', isArray: true, example: []})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => StudentsDto)
  studentsId: StudentsDto[];

  @ApiModelProperty({ description: 'Responsible'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  responsibleId: string;

  @ApiModelProperty({ description: 'List of lessons', isArray: true, example: '[{\'id\': \'5dd071bd73f3c42a841ba5b4\'}, {\'id\': \'5dd128f6fa9d8547af028475\'}]'})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => LessonsDto)
  lessonsId: LessonsDto[];
}
