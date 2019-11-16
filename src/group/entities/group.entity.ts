import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';

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

  @ApiModelProperty({ description: 'Start date', example: '28-02-2019' })
  @Expose()
  @Type(() => Date)
  startDate: Date;

  @ApiModelProperty({ description: 'End date', example: '05-04-2019' })
  @Expose()
  @Type(() => Date)
  endDate: Date;

  @ApiModelProperty({ description: 'List of students', example: '{}'})
  @Expose()
  @Type(() => UserEntity)
  students: UserEntity[];

  @ApiModelProperty({ description: 'Responsible' })
  @Expose()
  @Type(() => UserEntity)
  responsible: UserEntity;


  constructor(partial: Partial<GroupEntity>){
    Object.assign(this, partial);
  }
}
