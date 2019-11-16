import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class GradeEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '5dd037e8523d571390acf471' })
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Identifier of the user related to the test', example: '' })
  @Expose()
  @Type(() => String)
  userId: string;

  @ApiModelProperty({ description: 'Identifier of the test related to the test', example: ''})
  @Expose()
  @Type(() => String)
  testId: string;

  @ApiModelProperty({ description: 'Value of the grade, min 0, max 20', example: 15})
  @Expose()
  @Type(() => Number)
  value: number;

  constructor(partial: Partial<GradeEntity>) {
    Object.assign(this, partial);
  }
}
