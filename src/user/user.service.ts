import { Injectable } from '@nestjs/common';
import { UserDao } from './dao/user.dao';

@Injectable()
export class UserService{

  constructor(private readonly _userDao: UserDao) {
  }

}
