import { Type } from 'class-transformer';
import { MinLength, MaxLength, IsNumberString, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, IsMongoId, IsInstance } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class AddUserGroupDto {

  @ApiModelProperty({ description: 'Student to add', example: '5dd1690e26091a64e4870f1c'})
  @IsString()
  @IsNotEmpty()
  studentId: string;
}
