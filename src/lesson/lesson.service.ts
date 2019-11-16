import { ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { LessonDao } from './dao/lesson.dao';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { LessonEntity } from './entities/lesson.entity';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService{

  constructor(private readonly _lessonDao: LessonDao) {
  }
  findOne(id: string): Observable<LessonEntity> {
    return this._lessonDao.findById(id)
      .pipe(
        catchError(e => throwError(new UnprocessableEntityException(e.message))),
        flatMap(_ =>
          !!_ ?
            of(new LessonEntity(_)) :
            throwError(new NotFoundException(`Lesson with id '${id}' not found`)),
        ),
      );
  }

  update(id: string, lesson: UpdateLessonDto): Observable<LessonEntity> {
    return this._lessonDao.findByIdAndUpdate(id, lesson)
      .pipe(
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Lesson with name '${lesson.name}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        flatMap(_ =>
          !!_ ?
            of(new LessonEntity((_))) :
            throwError(new NotFoundException(`Lesson with id '${id}' not found`)),
        ),
      );
  }

  create(lesson: CreateLessonDto): Observable<LessonEntity> {
    return this._addLesson(lesson)
      .pipe(
        flatMap(_ => this._lessonDao.create(_)),
        catchError(e =>
          e.code = 11000 ?
            throwError(
              new ConflictException(`Lesson with name '${lesson.name}' already exists`),
            ) :
            throwError(new UnprocessableEntityException(e.message)),
        ),
        map(_ => new LessonEntity(_)),
      );
  }

  // Utilisé mais sans utilité pour le moment
  private _addLesson(lesson: CreateLessonDto): Observable<CreateLessonDto> {
    return of(lesson)
      .pipe(
        map(_ =>
          Object.assign(_, {
          }),
        ),
      );
  }

  findAll(): Observable<LessonEntity[] | void> {
    return this._lessonDao.findAll()
      .pipe(
        map(_ => !!_ ? _.map(__ => new LessonEntity(__)) : undefined),
      );
  }
}
