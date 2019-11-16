import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { Group } from '../interfaces/group.interface';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateGroupDto } from '../dto/create-group.dto';
import { User } from '../../user/interfaces/user.interface';

@Injectable()
export class GroupDao {

  constructor(@InjectModel('Group') private readonly _groupModel: Model<Group>) {
  }

  findById(id: string): Observable<Group | void> {
    return from(this._groupModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  create(group: CreateGroupDto): Observable<Group> {
    return from(this._groupModel.create(group))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }
}
