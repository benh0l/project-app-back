import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';
import { User } from '../../user/interfaces/user.interface';

@Exclude()
export class GroupEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '5763cd4dc378a38ecd387737' })
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @Expose()
  @Type(() => String)
  name: string;

  @ApiModelProperty({ description: 'Start date', example: '101343600000' })
  @Expose()
  @Type(() => Number)
  startDate: number;

  @ApiModelProperty({ description: 'End date', example: '101343600000' })
  @Expose()
  @Type(() => Number)
  endDate: number;

  @ApiModelProperty({ description: 'List of students', example: []})
  @Expose()
  @Type(() => String)
  studentsId: string[];

  @ApiModelProperty({ description: 'Responsible' })
  @Expose()
  @Type(() => String)
  responsibleId: string;

  @ApiModelProperty({ description: 'List of lessons', example: []})
  @Expose()
  @Type(() => String)
  lessonsId: string[];

  constructor(partial: Partial<GroupEntity>){
    Object.assign(this, partial);
  }
}
