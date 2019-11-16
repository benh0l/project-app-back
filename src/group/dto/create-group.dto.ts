import { UserEntity } from '../../user/entities/user.entity';
import { MinLength, MaxLength, IsDate, IsNotEmpty, IsString, ValidateNested, IsInstance } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateGroupDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(28)
  name: string;

  @ApiModelProperty({ description: 'StartDate', example: '28-02-2019' })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiModelProperty({ description: 'EndDate', example: '05-04-2019'})
  @IsString()
  @IsNotEmpty()
  endDate: Date;

  @ApiModelProperty({ description: 'List of students', example: '{}'})
  // TODO: Il manque peut être une vérification ici
  @ValidateNested({each: true})
  @Type(() => UserEntity)
  students: UserEntity[];

  @ApiModelProperty({ description: 'Responsible'})
  @IsInstance(UserEntity)
  @ValidateNested()
  @Type(() => UserEntity)
  responsible: UserEntity;
}
