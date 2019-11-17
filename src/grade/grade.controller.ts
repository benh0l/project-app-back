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
import { GradeEntity } from './entities/grade.entity';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto/create-grade-dto';
import { GradeParams } from './validators/grade.params';
import { UpdateGradeDto } from './dto/update-grade-dto';
import { UserIdParams } from './validators/userId.params';
import { TestIdParams } from './validators/testId.params';

@ApiUseTags('Grade')
@Controller('grade')
export class GradeController {
  constructor(private readonly _gradeService: GradeService) {

  }

  @ApiOkResponse({ description: 'Returns an array of grades', type: GradeEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No grades exists in database' })
  @Get()
  findAll(): Observable<GradeEntity[] | void> {
    return this._gradeService.findAll();
  }

  @ApiOkResponse({ description: 'Returns all grade of a test', type: GradeEntity, isArray: true})
  @ApiNoContentResponse({ description: 'This test id doesn\'t exist in database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'testId', description: 'Unique identifier of the grade in the database', type: String })
  @Get('test/:testId')
  findByTestId(@Param() params: TestIdParams): Observable<GradeEntity | void> {
    return this._gradeService.findByTestId(params.testId);
  }

  @ApiOkResponse({ description: 'Returns all grade of a user', type: GradeEntity, isArray: true})
  @ApiNoContentResponse({ description: 'This user id doesn\'t exist in database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiImplicitParam({ name: 'userId', description: 'Unique identifier of the user in the database', type: String })
  @Get('user/:userId')
  findByUserId(@Param() params: UserIdParams): Observable<GradeEntity | void> {
    return this._gradeService.findByUserId(params.userId);
  }

  @ApiCreatedResponse({ description: 'The grade has been successfully created', type: GradeEntity })
  @ApiConflictResponse({ description: 'The grade already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateGradeDto', description: 'Payload to create a new grade', type: CreateGradeDto })
  @Post()
  create(@Body() createGradeDto: CreateGradeDto): Observable<GradeEntity> {
    return this._gradeService.create(createGradeDto);
  }

  @ApiOkResponse({ description: 'The grade has been successfully updated', type: GradeEntity })
  @ApiNotFoundResponse({ description: 'Grade with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the grade in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateGradeDto', description: 'Payload to update a grade', type: UpdateGradeDto })
  @Put(':id')
  update(@Param() params: GradeParams, @Body() updatePersonDto: UpdateGradeDto): Observable<GradeEntity> {
    return this._gradeService.update(params.id, updatePersonDto);
  }

  @ApiNoContentResponse({ description: 'The grade has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'Grade with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the grade in the database', type: String })
  @Delete(':id')
  delete(@Param() params: GradeParams): Observable<void> {
    return this._gradeService.delete(params.id);
  }

}
