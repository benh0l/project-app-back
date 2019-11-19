import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { GroupDao } from './dao/group.dao';
import { CreateGroupDto } from './dto/create-group.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Observable, of, throwError } from 'rxjs';
import { UserEntity } from '../user/entities/user.entity';
import { catchError, flatMap, map } from 'rxjs/operators';
import { GroupEntity } from './entities/group.entity';
import { UpdateGroupDto } from './dto/update-group.dto';
import { AddUserGroupDto } from './dto/addUser-group.dto';
import { DeleteUserGroupDto } from './dto/deleteUser-group.dto';
import { AddLessonGroupDto } from './dto/addLesson-group.dto';
import { DeleteLessonGroupDto } from './dto/deleteLesson-group.dto';

@Injectable()
export class GroupService {

  constructor(private readonly _groupDao: GroupDao) {
  }
  findOne(id: string): Observable<GroupEntity> {
    return this._groupDao.findById(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(new GroupEntity(_)) :
            throwError(new NotFoundException(`Group with id '${id}' not found`)),
        ),
      );
  }

  update(id: string, group: UpdateGroupDto): Observable<GroupEntity> {
    return this._groupDao.findByIdAndUpdate(id, group)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Group with name '${group.name}' already exists`, e.message),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new GroupEntity((_))) :
            throwError(new NotFoundException(`Group with id '${id}' not found`)),
        ),
      );
  }

  create(group: CreateGroupDto): Observable<GroupEntity> {
    return this._addGroup(group)
      .pipe(
        flatMap(_ => this._groupDao.create(_)),
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Group with name '${group.name}' already exists &&`, e.message),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        map(_ => new GroupEntity(_)),
      );
  }

  // Utilisé mais sans utilité pour le moment
  private _addGroup(group: CreateGroupDto): Observable<CreateGroupDto> {
    return of(group)
      .pipe(
        map(_ =>
          Object.assign(_, {
            // startDate: this._parseDate(group.startDate),
            // endDate: this._parseDate(group.endDate),
          }),
        ),
      );
  }

  addUserToGroup(id: string, user: AddUserGroupDto): Observable<GroupEntity> {
    return this._groupDao.addUserInGroup(id, user)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`User with id '${user.studentId}' already exists in list`, e.message),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new GroupEntity((_))) :
            throwError(new NotFoundException(`Group with id '${id}' not found`)),
        ),
      );
  }

  addLessonToGroup(id: string, lesson: AddLessonGroupDto): Observable<GroupEntity> {
    return this._groupDao.addLessonInGroup(id, lesson)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Lesson with id '${lesson.lessonId}' already exists in list`, e.message),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new GroupEntity((_))) :
            throwError(new NotFoundException(`Lesson with id '${id}' not found`)),
        ),
      );
  }

  deleteUserToGroup(id: string, deleteUserGroupDto: DeleteUserGroupDto): Observable<GroupEntity> {
    return this._groupDao.deleteUserInGroup(id, deleteUserGroupDto)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`User with id '${deleteUserGroupDto.studentId}' doesn't exist in list`, e.message),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new GroupEntity((_))) :
            throwError(new NotFoundException(`Group with id '${id}' not found`)),
        ),
      );
  }

  deleteLessonToGroup(id: string, deleteLessonGroupDto: DeleteLessonGroupDto): Observable<GroupEntity> {
    return this._groupDao.deleteLessonInGroup(id, deleteLessonGroupDto)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Lesson with id '${deleteLessonGroupDto.lessonId}' doesn't exist in list`, e.message),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new GroupEntity((_))) :
            throwError(new NotFoundException(`Lesson with id '${id}' not found`)),
        ),
      );
  }

  findAll(): Observable<GroupEntity[] | void> {
    return this._groupDao.findAll()
      .pipe(
        map(_ => !!_ ? _.map(__ => new GroupEntity(__)) : undefined),
      );
  }

  delete(id: string): Observable<void> {
    return this._groupDao.findByIdAndRemove(id)
      .pipe(
        catchError(e => throwError(new NotFoundException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(undefined) :
            throwError(new NotFoundException(`Group with id '${id}' not found`)),
        ),
      );
  }

  private _parseDate(date: string): number {
    const dates = date.split('/');
    return (new Date(dates[ 2 ] + '/' + dates[ 1 ] + '/' + dates[ 0 ]).getTime());
  }

}
