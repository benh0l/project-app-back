import { Type } from 'class-transformer';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsInstance, IsMongoId, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, ValidateNested } from 'class-validator';

export class CreateUserDto {

  @ApiModelProperty({ description: 'Firstname', example: 'Bill' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiModelProperty({ description: 'Lastname', example: 'Boquet' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiModelProperty({ description: 'Login', example: 'Bilboq77'})
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiModelProperty({ description: 'Password', example: 'iLoveBanana1997'})
  @IsString()
  @IsNotEmpty()
  password: string;

}
