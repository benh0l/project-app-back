import { Injectable, ConflictException, UnprocessableEntityException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserDao } from './dao/user.dao';


@Injectable()
export class UserService{

  constructor(private readonly _userDao: UserDao) {
  }

  create(user: CreateUserDto): Observable<UserEntity> {
    return this._addUser(user)
      .pipe(
        flatMap(_ => this._userDao.create(_)),
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`User with lastname '${user.lastname}' and firstname '${user.firstname}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        map(_ => new UserEntity(_)),
      );
  }

  private _addUser(user: CreateUserDto): Observable<CreateUserDto> {
    return of(user)
      .pipe(
        map(_ =>
          Object.assign(_, {
            role: 'MEMBER',
          }),
        ),
      );
  }
}
