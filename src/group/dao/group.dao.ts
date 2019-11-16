import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from '../interfaces/group.interface';

@Injectable()
export class GroupDao {
  /**
   * Class constructor
   *
   * @param {Model<Person>} _personModel instance of the model representing a Person
   */
  constructor(@InjectModel('Group') private readonly _groupModel: Model<Group>) {
  }

}
