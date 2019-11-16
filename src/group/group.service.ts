import { Injectable } from '@nestjs/common';
import { GroupDao } from './dao/group.dao';

@Injectable()
export class GroupService{

  constructor(private readonly _groupDao: GroupDao){

  }
}
