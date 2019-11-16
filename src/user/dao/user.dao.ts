import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserDao {

  constructor(@InjectModel('User') private readonly _userModel: Model<User>) {
  }

  create(user: CreateUserDto): Observable<User> {
    return from(this._userModel.create(user))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }
}
