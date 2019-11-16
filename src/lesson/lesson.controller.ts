import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonEntity } from './entities/lesson.entity';
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
import { CreateLessonDto } from './dto/create-lesson.dto';
import { HandlerParams } from './validators/handler-params';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@ApiUseTags('Lesson')
@Controller('lesson')
export class LessonController {
  constructor(private readonly _lessonService: LessonService){

  }

  @ApiOkResponse({ description: 'Returns the lesson for the given "id"', type: LessonEntity })
  @ApiNotFoundResponse({ description: 'Lesson with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the lesson in the database', type: String })
  @Get(':id')
  findOne(@Param() params: HandlerParams): Observable<LessonEntity> {
    return this._lessonService.findOne(params.id);
  }

  @ApiOkResponse({ description: 'Returns an array of lesson', type: LessonEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No lesson exists in database' })
  @Get()
  findAll(): Observable<LessonEntity[] | void> {
    return this._lessonService.findAll();
  }

  @ApiCreatedResponse({ description: 'The lesson has been successfully created', type: LessonEntity })
  @ApiConflictResponse({ description: 'The lesson already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitBody({ name: 'CreateLessonDto', description: 'Payload to create a new lesson', type: CreateLessonDto })
  @Post()
  create(@Body() createLessonDto: CreateLessonDto): Observable<LessonEntity> {
    return this._lessonService.create(createLessonDto);
  }

  @ApiOkResponse({ description: 'The lesson has been successfully updated', type: LessonEntity })
  @ApiNotFoundResponse({ description: 'Lesson with the given "id" doesn\'t exist in the database' })
  @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
  @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
  @ApiImplicitParam({ name: 'id', description: 'Unique identifier of the lesson in the database', type: String })
  @ApiImplicitBody({ name: 'UpdateLessonDto', description: 'Payload to update a lesson', type: UpdateLessonDto })
  @Put(':id')
  update(@Param() params: HandlerParams, @Body() updateLessonDto: UpdateLessonDto): Observable<LessonEntity> {
    return this._lessonService.update(params.id, updateLessonDto);
  }
}
