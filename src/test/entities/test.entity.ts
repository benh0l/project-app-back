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

  constructor(partial: Partial<TestEntity>) {
    Object.assign(this, partial);
  }
}
