import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupEntity } from './entities/group.entity';
import { Observable } from 'rxjs';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse, ApiImplicitBody, ApiImplicitParam,
  ApiNoContentResponse, ApiNotFoundResponse,
  ApiOkResponse, ApiUnprocessableEntityResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { UserEntity } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { HandlerParams } from './validators/handler-params';
import { UpdateGroupDto } from './dto/update-group.dto';
import { AddUserGroupDto } from './dto/addUser-group.dto';
import { DeleteUserGroupDto } from './dto/deleteUser-group.dto';

@ApiUseTags('Group')
@Controller('group')
export class GroupController {
  constructor(private readonly _groupService: GroupService){

  }

  @ApiOkResponse({ description: 'Returns the group for the given "id"', type: GroupEntity })
  @ApiNotFoundResponse({ description: 'Group with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the group in the database', type: String })
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<GroupEntity> {
    return this._groupService.findOne(params.id);
  }

  @ApiOkResponse({ description: 'Returns an array of group', type: GroupEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No group exists in database' })
  @Get()
  findAll(): Observable<GroupEntity[] | void> {
    return this._groupService.findAll();
  }

  @ApiCreatedResponse({ description: 'The group has been successfully created', type: GroupEntity })
  @ApiConflictResponse({ description: 'The group already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitBody({ name: 'CreateGroupDto', description: 'Payload to create a new group', type: CreateGroupDto })
  @Post()
  create(@Body() createGroupDto: CreateGroupDto): Observable<GroupEntity> {
    return this._groupService.create(createGroupDto);
  }

  @ApiOkResponse({ description: 'The group has been successfully updated', type: GroupEntity })
  @ApiNotFoundResponse({ description: 'Group with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the group in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateGroupDto', description: 'Payload to update a group', type: UpdateGroupDto })
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() updateGroupDto: UpdateGroupDto): Observable<GroupEntity> {
    return this._groupService.update(params.id, updateGroupDto);
  }

  @ApiOkResponse({ description: 'The user has been successfully added to the group', type: GroupEntity })
  @ApiNotFoundResponse({ description: 'Group with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the group in the database', type: String })
  @ApiImplicitBody({ name: 'AddUserGroupDto', description: 'Payload to add a user in a group', type: AddUserGroupDto })
  @Put('addUser/:id')
  addUserInGroup(@Param() params: HandlerParams, @Body() addUserGroupDto: AddUserGroupDto): Observable<GroupEntity> {
    return this._groupService.addUserToGroup(params.id, addUserGroupDto);
  }

  @ApiOkResponse({ description: 'The user has been successfully deleted to the group', type: GroupEntity })
  @ApiNotFoundResponse({ description: 'Group with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the group in the database', type: String })
  @ApiImplicitBody({ name: 'DeleteUserGroupDto', description: 'Payload to add a user in a group', type: DeleteUserGroupDto })
  @Put('deleteUser/:id')
  deleteUserInGroup(@Param() params: HandlerParams, @Body() deleteUserGroupDto: DeleteUserGroupDto): Observable<GroupEntity> {
    return this._groupService.deleteUserToGroup(params.id, deleteUserGroupDto);
  }
}
