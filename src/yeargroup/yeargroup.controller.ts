import { Body, Controller, Get, Post } from '@nestjs/common';
import { YearGroupService } from './yeargroup.service';
import { YearGroupEntity } from './entities/yeargroup.entity';
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
import { CreateYearGroupDto } from './dto/create-yeargroup-dto';

@ApiUseTags('group')
@Controller('yeargroup')
export class YearGroupController {
  constructor(private readonly _yearGroupService: YearGroupService) {

  }

  @ApiOkResponse({ description: 'Returns an array of year groups', type: YearGroupEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No group exists in database' })
  @Get()
  findAll(): Observable<YearGroupEntity[] | void> {
    return this._yearGroupService.findAll();
  }

  @ApiCreatedResponse({ description: 'The person has been successfully created', type: YearGroupEntity })
  @ApiConflictResponse({ description: 'The person already exists in the database' })
  @ApiBadRequestResponse({ description: 'Payload provided is not good' })
  @ApiImplicitBody({ name: 'CreateYearGroupDto', description: 'Payload to create a new person', type: CreateYearGroupDto })
  @Post()
  create(@Body() createYearGroupDto: CreateYearGroupDto): Observable<YearGroupEntity> {
    return this._yearGroupService.create(createYearGroupDto);
  }
}
