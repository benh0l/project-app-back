import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../../user/entities/user.entity';
import { User } from '../../user/interfaces/user.interface';

@Exclude()
export class LessonEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '5763cd4dc378a38ecd387737' })
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Name', example: 'Master 2 2019' })
  @Expose()
  @Type(() => String)
  name: string;

  @ApiModelProperty({ description: 'List of tests', example: '[]'})
  @Expose()
  @Type(() => String)
  testsId: string[];

  @ApiModelProperty({ description: 'Teacher' })
  @Expose()
  @Type(() => String)
  teacherId: string;

  @ApiModelProperty({ description: 'Group' })
  @Expose()
  @Type(() => String)
  groupId: string;

  constructor(partial: Partial<LessonEntity>){
    Object.assign(this, partial);
  }
}
