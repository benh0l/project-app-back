import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsOptional, IsMongoId, IsNotEmpty, IsString, ValidateNested, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { GradesDto } from '../../shared/dto/grades.dto';
import { TestDto } from '../../shared/dto/test.dto';

export class CreateLessonDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(28)
  name: string;

  @ApiModelProperty({ description: 'List of tests', example: []})
  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => TestDto)
  gradesId: TestDto[];

  @ApiModelProperty({ description: 'Teacher', example: '5dd2bcf8dbee82a801bcea5d' })
  @IsOptional()
  @IsMongoId()
  teacherId: string;

  @ApiModelProperty({ description: 'Group', example: '5dd2bcf8dbee82a801bcea5f' })
  @IsOptional()
  @IsMongoId()
  groupId: string;
}
