import { Controller, Get } from '@nestjs/common';
import { YearGroupService } from './yeargroup.service';
import { YearGroupEntity } from './entities/yeargroup.entity';
import { Observable } from 'rxjs';
import {
  ApiNoContentResponse,
  ApiOkResponse,
  ApiUseTags,
} from '@nestjs/swagger';

@ApiUseTags('people')
@Controller('yeargroup')
export class YearGroupController {
  constructor(private readonly _yearGroupService: YearGroupService){

  }

  @ApiOkResponse({ description: 'Returns an array of year group', type: YearGroupEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No person exists in database' })
  @Get()
  findAll(): Observable<YearGroupEntity[] | void> {
    return null //this._yearGroupService.findAll();
  }
}
