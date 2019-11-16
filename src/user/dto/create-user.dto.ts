import { MinLength, IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiModelProperty({ description: 'Firstname', example: 'Bill' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  firstname: string;

  @ApiModelProperty({ description: 'Lastname', example: 'Boquet' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiModelProperty({ description: 'Email', example: 'Mclaughlin.Cochran@undefined.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ description: 'Login', example: 'Bilboq77'})
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  login: string;

  /*
  @ApiModelProperty({ description: 'Password', example: 'iLoveBanana1997'})
  @IsString()
  @IsNotEmpty()
  @Min(8)
  password: string;
   */

  @ApiModelProperty({ description: 'Role', example: 'ADMIN'})
  @IsString()
  @IsNotEmpty()
  role: string;
}
