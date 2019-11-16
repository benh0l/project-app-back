import { Injectable } from '@nestjs/common';
import { GroupDao } from './dao/group.dao';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService{

  constructor(private readonly _groupDao: GroupDao) {
  }

  create(group: CreateGroupDto) {
    return undefined;
  }

  findAll() {
    return undefined;
  }
}
