import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class UserEntity {
  @ApiModelProperty({ description: 'Unique identifier in the database', example: '5763cd4dc378a38ecd387737' })
  @Expose()
  @Type(() => String)
  id: string;

  @ApiModelProperty({ description: 'Firstname', example: 'Bill' })
  @Expose()
  @Type(() => String)
  firstname: string;

  @ApiModelProperty({ description: 'Lastname', example: 'Boquet' })
  @Expose()
  @Type(() => String)
  lastname: string;

  @ApiModelProperty({ description: 'Login', example: 'Bilboq77'})
  @Expose()
  @Type(() => String)
  login: string;

  @ApiModelProperty({ description: 'Password', example: 'iLoveBanana1997'})
  @Expose()
  @Type(() => String)
  password: string;

  @ApiModelProperty({ description: 'Role', example: 'ADMIN'})
  @Expose()
  @Type(() => String)
  role: string;

  constructor(partial: Partial<UserEntity>){
    Object.assign(this, partial);
  }
}
