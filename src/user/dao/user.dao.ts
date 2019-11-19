import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUserDto } from '../dto/create-user.dto';
import { Group } from '../../group/interfaces/group.interface';
import { UpdateGroupDto } from '../../group/dto/update-group.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Test } from '../../test/interfaces/test.interface';

@Injectable()
export class UserDao {

  constructor(@InjectModel('User') private readonly _userModel: Model<User>) {
  }

  findAll(): Observable<User[] | void> {
    return from(this._userModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findById(id: string): Observable<User | void> {
    return from(this._userModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  findByIdAndUpdate(id: string, user: UpdateUserDto): Observable<User | void> {
    return from(this._userModel.findByIdAndUpdate(id, user, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  create(user: CreateUserDto): Observable<User> {
    return from(this._userModel.create(user))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  findByIdAndRemove(id: string): Observable<User | void> {
    return from(this._userModel.findByIdAndRemove(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }
}
