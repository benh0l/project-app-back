import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiImplicitBody,
  ApiImplicitParam,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUseTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { TestEntity } from './entities/test.entity';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test-dto';
import { TestParams } from './validators/test-params';
import { UpdateTestDto } from './dto/update-test-dto';
import { GroupEntity } from '../group/entities/group.entity';
import { AddUserGroupDto } from '../group/dto/addUser-group.dto';
import { HandlerParams } from '../group/validators/handler-params';
import { DeleteUserGroupDto } from '../group/dto/deleteUser-group.dto';

@ApiUseTags('Test')
@Controller('test')
export class TestController {
  constructor(private readonly _testService: TestService) {

  }

  @ApiOkResponse({ description: 'Returns an array of tests', type: TestEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No test exists in database' })
  @Get()
  findAll(): Observable<TestEntity[] | void> {
    return this._testService.findAll();
  }

  @ApiOkResponse({ description: 'Returns a tests', type: TestEntity})
  @ApiNoContentResponse({ description: 'This test doesn\'t exist in database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the test in the database', type: String })
  @Get(':id')
  find(@Param() params: TestParams): Observable<TestEntity | void> {
    return this._testService.findById(params.id);
  }

  @ApiCreatedResponse({ description: 'The test has been successfully created', type: TestEntity })
  @ApiConflictResponse({ description: 'The test already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateTestDto', description: 'Payload to create a new test', type: CreateTestDto })
  @Post()
  create(@Body() createTestDto: CreateTestDto): Observable<TestEntity> {
    return this._testService.create(createTestDto);
  }

  @ApiOkResponse({ description: 'The test has been successfully updated', type: TestEntity })
  @ApiNotFoundResponse({ description: 'Test with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the test in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateTestDto', description: 'Payload to update a test', type: UpdateTestDto })
  @Put(':id')
  update(@Param() params: TestParams, @Body() updatePersonDto: UpdateTestDto): Observable<TestEntity> {
    return this._testService.update(params.id, updatePersonDto);
  }

  @ApiNoContentResponse({ description: 'The test has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Test with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the test in the database', type: String })
  @Delete(':id')
  delete(@Param() params: TestParams): Observable<void> {
    return this._testService.delete(params.id);
  }

}
