import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class TestEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '5dd037e8523d571390acf471' })
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Title of the test', example: 'Nouvelles technologies du web' })
  @Expose()
  @Type(() => String)
  title: string;

  @ApiModelProperty({ description: 'Coefficient of the test', example: 3})
  @Expose()
  @Type(() => Number)
  coefficient: number;

  @ApiModelProperty({ description: 'Is the test visible', example: true})
  @Expose()
  @Type(() => Boolean)
  shown: boolean;

  @ApiModelProperty({ description: 'Lesson id', example: '6djso85qsd87dc55qsd785xc'})
  @Expose()
  @Type(() => String)
  lessonId: string;

  @ApiModelProperty({ description: 'List of grades id', example: '{4hff5484scbvfd8421sqdcx4},{8cxw4854cwxc874cdw48c48x}' })
  @Expose()
  @Type(() => String)
  gradesId: string[];

  constructor(partial: Partial<TestEntity>) {
    Object.assign(this, partial);
  }
}
