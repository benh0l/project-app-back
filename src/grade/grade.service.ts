import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade-dto';
import { GradeDao } from './dao/grade.dao';
import { GradeEntity } from './entities/grade.entity';
import { catchError, find, flatMap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { UpdateGradeDto } from './dto/update-grade-dto';

@Injectable()
export class GradeService {

  constructor(private readonly _gradeDao: GradeDao) {}

  create(createGradeDto: CreateGradeDto): Observable<GradeEntity> {
    return this._addGrade(createGradeDto)
      .pipe(
        flatMap(_ => this._gradeDao.create(_)),
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Grade with userId '${createGradeDto.userId}' and testId '${createGradeDto.testId}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        map(_ => new GradeEntity(_)),
      );
  }

  private _addGrade(grade: CreateGradeDto): Observable<CreateGradeDto> {
    return of(grade)
      .pipe(
        map(_ =>
          Object.assign(_, {}),
        ),
      );
  }

  findAll(): Observable<GradeEntity[] | void> {
    return this._gradeDao.find()
      .pipe(
        map(_ => !!_ ? _.map(__ => new GradeEntity(__)) : undefined),
      );
  }

  findByTestId(id: string): Observable<GradeEntity> {
    return this._gradeDao.findByTestId(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ? _.map( __ => new GradeEntity(__)) :
            throwError(new NotFoundException(`Grade with testId '${id}' not found`)),
        ),
      );
  }

  findByUserId(id: string): Observable<GradeEntity> {
    return this._gradeDao.findByUserId(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ? _.map( __ => new GradeEntity(__)) :
            throwError(new NotFoundException(`Grade with userId '${id}' not found`)),
        ),
      );
  }

  update(id: string, grade: UpdateGradeDto): Observable<GradeEntity> {
    return this._gradeDao.findByIdAndUpdate(id, grade)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Grade with userId '${grade.userId}' and testIs '${grade.userId}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new GradeEntity((_))) :
            throwError(new NotFoundException(`Grade with id '${id}' not found`)),
        ),
      );
  }

  delete(id: string): Observable<void> {
    return this._gradeDao.findByIdAndRemove(id)
      .pipe(
        catchError(e => throwError(new NotFoundException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(undefined) :
            throwError(new NotFoundException(`Grade with id '${id}' not found`)),
        ),
      );
  }

}
