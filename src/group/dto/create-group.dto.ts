import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import * as mongoose from '@nestjs/mongoose';
import { StudentsDto } from '../../shared/dto/students.dto';
import { LessonsDto } from '../../shared/dto/lessons.dto';

export class CreateGroupDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty({ description: 'StartDate', example: '12/04/2019' })
  @IsString()
  @IsNotEmpty()
  startDate: string;

  @ApiModelProperty({ description: 'EndDate', example: '18/08/2020'})
  @IsString()
  @IsNotEmpty()
  endDate: string;

  /* N'A RIEN A FAIRE DANS LA CREATION
  @ApiModelProperty({ description: 'List of students', isArray: true, example: []})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => StudentsDto)
  studentsId: StudentsDto[];
  */

  @ApiModelProperty({ description: 'Responsible', example: '5dd128f6fa9d8547af028475'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  responsibleId: string;

  /* N'A RIEN A FAIRE DANS LA CREATION
  @ApiModelProperty({ description: 'List of lessons', isArray: true, example: ['5dd071bd73f3c42a841ba5b4', '5dd128f6fa9d8547af028475']})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => LessonsDto)
  lessonsId: LessonsDto[];
  */
}
