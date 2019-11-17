import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsOptional, IsMongoId, IsNotEmpty, IsString, ValidateNested, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateLessonDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(28)
  name: string;

  @ApiModelProperty({ description: 'List of tests', example: '[]'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  testsId: string[];

  @ApiModelProperty({ description: 'Teacher'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  teacherId: string;

  @ApiModelProperty({ description: 'Group'})
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  groupId: string;
}
