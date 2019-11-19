import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsNotEmpty, IsOptional, IsString, ValidateNested, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateLessonDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(28)
  name: string;

  @ApiModelProperty({ description: 'List of tests', example: []})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => String)
  testsId: string[];

  @ApiModelProperty({ description: 'Teacher'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  teacherId: string;

  @ApiModelProperty({ description: 'Group'})
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  groupId: string;

}
