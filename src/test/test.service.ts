import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test-dto';
import { TestDao } from './dao/test.dao';
import { TestEntity } from './entities/test.entity';
import { catchError, flatMap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class TestService {

  constructor(private readonly _testDao: TestDao) {}

  create(createTestDto: CreateTestDto): Observable<TestEntity> {
    return this._addTest(createTestDto)
      .pipe(
        flatMap(_ => this._testDao.create(_)),
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Test with title '${createTestDto.title}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        map(_ => new TestEntity(_)),
      );
  }

  private _addTest(test: CreateTestDto): Observable<CreateTestDto> {
    return of(test)
      .pipe(
        map(_ =>
          Object.assign(_, {
            date: this._parseDate(test.date),
          }),
        ),
      );
  }

  findAll(): Observable<TestEntity[] | void> {
    return this._testDao.find()
      .pipe(
        map(_ => !!_ ? _.map(__ => new TestEntity(__)) : undefined),
      );
  }

  findById(id: string): Observable<TestEntity> {
    return this._testDao.findById(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(new TestEntity(_)) :
            throwError(new NotFoundException(`Test with id '${id}' not found`)),
        ),
      );
  }

  private _parseDate(date: string): number {
    const dates = date.split('/');
    return (new Date(dates[ 2 ] + '/' + dates[ 1 ] + '/' + dates[ 0 ]).getTime());
  }
}
