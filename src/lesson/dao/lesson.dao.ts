import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { Lesson } from '../interfaces/lesson.interface';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateLessonDto } from '../dto/create-lesson.dto';
import { User } from '../../user/interfaces/user.interface';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { Test } from '../../test/interfaces/test.interface';

@Injectable()
export class LessonDao {

  constructor(@InjectModel('Lesson') private readonly _lessonModel: Model<Lesson>) {
  }

  findAll(): Observable<Lesson[] | void> {
    return from(this._lessonModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findByIdAndUpdate(id: string, lesson: UpdateLessonDto): Observable<Lesson | void> {
    return from(this._lessonModel.findByIdAndUpdate(id, lesson, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  findById(id: string): Observable<Lesson | void> {
    return from(this._lessonModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  create(lesson: CreateLessonDto): Observable<Lesson> {
    return from(this._lessonModel.create(lesson))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  findByIdAndRemove(id: string): Observable<Lesson | void> {
    return from(this._lessonModel.findByIdAndRemove(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }
}
