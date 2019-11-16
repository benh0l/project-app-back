import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
} from '@nestjs/swagger';
import { TestEntity } from './entities/test.entity';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test-dto';
import { TestParams } from './validators/test-params';

@ApiUseTags('test')
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
  find(@Param() params: TestParams): Observable<TestEntity[] | void> {
    return this._testService.find(params.id);
  }

  @ApiCreatedResponse({ description: 'The test has been successfully created', type: TestEntity })
  @ApiConflictResponse({ description: 'The test already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateTestDto', description: 'Payload to create a new person', type: CreateTestDto })
  @Post()
  create(@Body() createTestDto: CreateTestDto): Observable<TestEntity> {
    return this._testService.create(createTestDto);
  }

}
