import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsNumberString, IsNotEmpty, IsString, ValidateNested, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateGroupDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(28)
  name: string;

  @ApiModelProperty({ description: 'StartDate', example: '15/02/2012' })
  @IsString()
  @IsNotEmpty()
  startDate: string;

  @ApiModelProperty({ description: 'EndDate', example: '15/03/2015'})
  @IsString()
  @IsNotEmpty()
  endDate: string;

  @ApiModelProperty({ description: 'List of students', example: '[]'})
  // TODO: Il manque peut être une vérification ici
  @ValidateNested({each: true})
  @Type(() => String)
  studentsId: string[];

  @ApiModelProperty({ description: 'Responsible'})
  @ValidateNested()
  @Type(() => String)
  responsibleId: string;

}
