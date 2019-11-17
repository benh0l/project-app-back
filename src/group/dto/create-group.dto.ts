import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateGroupDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(28)
  name: string;

  @ApiModelProperty({ description: 'StartDate', example: '101343600000' })
  @IsNumberString()
  @IsNotEmpty()
  startDate: number;

  @ApiModelProperty({ description: 'EndDate', example: '101343600000'})
  @IsNumberString()
  @IsNotEmpty()
  endDate: number;

  @ApiModelProperty({ description: 'List of students', example: '[]'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  studentsId: string[];

  @ApiModelProperty({ description: 'Responsible'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  responsibleId: string;

  @ApiModelProperty({ description: 'List of lessons', example: '[]'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  lessonsId: string[];
}
