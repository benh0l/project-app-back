import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test-dto';
import { TestDao } from './dao/test.dao';
import { TestEntity } from './entities/test.entity';
import { catchError, flatMap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class TestService {

  constructor(private readonly _testDao: TestDao) {}

  create(createTestDto: CreateTestDto) {
    return undefined;
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
            throwError(new NotFoundException(`Person with id '${id}' not found`)),
        ),
      );
  }
}
