import { Injectable, ConflictException, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserDao } from './dao/user.dao';
import { UpdateGroupDto } from '../group/dto/update-group.dto';
import { GroupEntity } from '../group/entities/group.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private readonly _userDao: UserDao) {
  }

  update(id: string, user: UpdateUserDto): Observable<UserEntity> {
    return this._userDao.findByIdAndUpdate(id, user)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`User with name '${user.firstname}' and '${user.lastname}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new UserEntity((_))) :
            throwError(new NotFoundException(`User with id '${id}' not found`)),
        ),
      );
  }

  findOne(id: string): Observable<UserEntity> {
    return this._userDao.findById(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(new UserEntity(_)) :
            throwError(new NotFoundException(`User with id '${id}' not found`)),
        ),
      );
  }

  findAll(): Observable<UserEntity[] | void> {
    return this._userDao.findAll()
      .pipe(
        map(_ => !!_ ? _.map(__ => new UserEntity(__)) : undefined),
      );
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

  delete(id: string): Observable<void> {
    return this._userDao.findByIdAndRemove(id)
      .pipe(
        catchError(e => throwError(new NotFoundException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(undefined) :
            throwError(new NotFoundException(`User with id '${id}' not found`)),
        ),
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
