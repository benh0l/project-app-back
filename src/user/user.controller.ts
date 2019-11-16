import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiImplicitBody,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse, ApiUnprocessableEntityResponse,
  ApiUseTags,
} from '@nestjs/swagger';

@ApiUseTags('User')
@Controller('user')
export class UserController {

  constructor(private _userService: UserService){

  }

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @ApiCreatedResponse({ description: 'The user has been successfully created', type: UserEntity })
  @ApiConflictResponse({ description: 'The user already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitBody({ name: 'CreateUserDto', description: 'Payload to create a new user', type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<UserEntity> {
    return this._userService.create(createUserDto);
  }

  /* To Do
  // @Get(':id')
  findById(@Param() params: UserParams): Observable<UserEntity> {
    return 'This action returns a user by his id';
  }
  */
}
