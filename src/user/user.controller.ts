import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { HandlerParams } from './validators/handler-params';
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

  @ApiOkResponse({ description: 'Returns the user for the given "id"', type: UserEntity })
  @ApiNotFoundResponse({ description: 'User with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the user in the database', type: String })
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<UserEntity> {
    return this._userService.findOne(params.id);
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
