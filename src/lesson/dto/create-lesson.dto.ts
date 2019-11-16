import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsNotEmpty, IsString, ValidateNested, IsInstance } from 'class-validator';
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
  // TODO: Il manque peut être une vérification ici
  @ValidateNested({each: true})
  @Type(() => String)
  testsId: string[];

  @ApiModelProperty({ description: 'Teacher'})
  @ValidateNested()
  @Type(() => String)
  teacherId: string;

  @ApiModelProperty({ description: 'Group'})
  @ValidateNested()
  @Type(() => String)
  groupId: string;
}
