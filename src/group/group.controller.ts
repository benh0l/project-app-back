import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupEntity } from './entities/group.entity';
import { Observable } from 'rxjs';
import {
  ApiNoContentResponse,
  ApiOkResponse,
  ApiUseTags,
} from '@nestjs/swagger';

@ApiUseTags('people')
@Controller('group')
export class GroupController {
  constructor(private readonly _groupService: GroupService){

  }

  @ApiOkResponse({ description: 'Returns an array of year group', type: GroupEntity, isArray: true })
  @ApiNoContentResponse({ description: 'No person exists in database' })
  @Get()
  findAll(): Observable<GroupEntity[] | void> {
    return null //this._groupService.findAll();
  }
}
