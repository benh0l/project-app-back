import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from '../interfaces/group.interface';

@Injectable()
export class GroupDao {

  constructor(@InjectModel('Group') private readonly _groupModel: Model<Group>) {
  }

}
