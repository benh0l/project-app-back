import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
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
import { GroupEntity } from '../group/entities/group.entity';
import { UpdateGroupDto } from '../group/dto/update-group.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TestParams } from '../test/validators/test-params';

@ApiUseTags('User')
@Controller('user')
export class UserController {

  constructor(private _userService: UserService){

  }


  @ApiOkResponse({ description: 'Returns an array of user', type: UserEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No group exists in database' })
  @Get()
  findAll():  Observable<UserEntity[] | void> {
    return this._userService.findAll();
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

  @ApiOkResponse({ description: 'The user has been successfully updated', type: UserEntity })
  @ApiNotFoundResponse({ description: 'User with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the user in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateGroupDto', description: 'Payload to update a user', type: UpdateUserDto })
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() updateUserDto: UpdateUserDto): Observable<UserEntity> {
    return this._userService.update(params.id, updateUserDto);
  }

  @ApiNoContentResponse({ description: 'The user has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'User with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the user in the database', type: String })
  @Delete(':id')
  delete(@Param() params: TestParams): Observable<void> {
    return this._userService.delete(params.id);
  }
}
