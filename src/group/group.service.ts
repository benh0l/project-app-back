import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { GroupDao } from './dao/group.dao';
import { CreateGroupDto } from './dto/create-group.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Observable, of, throwError } from 'rxjs';
import { UserEntity } from '../user/entities/user.entity';
import { catchError, flatMap, map } from 'rxjs/operators';
import { GroupEntity } from './entities/group.entity';

@Injectable()
export class GroupService{

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

  create(group: CreateGroupDto): Observable<GroupEntity> {
    return this._addGroup(group)
      .pipe(
        flatMap(_ => this._groupDao.create(_)),
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Group with name '${group.name}' already exists`),
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
          }),
        ),
      );
  }

  findAll() {
    return undefined;
  }
}
