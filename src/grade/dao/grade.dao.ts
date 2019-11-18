import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Grade } from '../interfaces/grade.interface';
import { from, Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { MongooseDocument } from 'mongoose';
import { CreateGradeDto } from '../dto/create-grade-dto';
import { UpdateGradeDto } from '../dto/update-grade-dto';

@Injectable()
export class GradeDao {

  constructor(@InjectModel('Grade') private readonly _gradeModel: Model<Grade>) {
  }

  find(): Observable<Grade[] | void> {
    return from(this._gradeModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findByUserId(id: string): Observable<Grade[] | void> {
    return from(this._gradeModel.find({userId: id}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findByTestId(id: string): Observable<Grade[] | void> {
    return from(this._gradeModel.find({testId: id}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  create(grade: CreateGradeDto): Observable<Grade> {
    return from(this._gradeModel.create(grade))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  findByIdAndUpdate(id: string, grade: UpdateGradeDto): Observable<Grade | void> {
    return from(this._gradeModel.findByIdAndUpdate(id, grade, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  findByIdAndRemove(id: string): Observable<Grade | void> {
    return from(this._gradeModel.findByIdAndRemove(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

}
