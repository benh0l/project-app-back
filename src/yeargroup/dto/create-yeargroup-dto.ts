import { UserEntity } from '../../user/entities/user.entity';
import { Min, Max, IsDate, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateYearGroupDto {

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @IsString()
  @IsNotEmpty()
  @Min(3)
  @Max(28)
  name: string;

  @ApiModelProperty({ description: 'StartDate', example: '28-02-2019' })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiModelProperty({ description: 'EndDate', example: '05-04-2019'})
  @IsString()
  @IsNotEmpty()
  endDate: Date;

  @ApiModelProperty({ description: 'Students', example: ''})
  // TODO: Il manque peut être une vérification ici
  @ValidateNested({each: true})
  @Type(() => UserEntity)
  students: UserEntity[];
}
