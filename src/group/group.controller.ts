import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
import { HandlerParams } from '../user/validators/handler-params';

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
    return null; //this._groupService.findAll();
  }

  @ApiCreatedResponse({ description: 'The group has been successfully created', type: GroupEntity })
  @ApiConflictResponse({ description: 'The group already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitBody({ name: 'CreateGroupDto', description: 'Payload to create a new user', type: CreateGroupDto })
  @Post()
  create(@Body() createGroupDto: CreateGroupDto): Observable<GroupEntity> {
    return this._groupService.create(createGroupDto);
  }
}
