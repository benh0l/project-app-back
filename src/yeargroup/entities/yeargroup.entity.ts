import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class YearGroupEntity {
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
  @Type(() => String)
  students: string;

  constructor(partial: Partial<YearGroupEntity>) {
    Object.assign(this, partial);
  }
}
