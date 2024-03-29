import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from '../interfaces/test.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MongooseDocument } from 'mongoose';
import { CreateTestDto } from '../dto/create-test-dto';
import { UpdateTestDto } from '../dto/update-test-dto';

@Injectable()
export class TestDao {

  constructor(@InjectModel('Test') private readonly _testModel: Model<Test>) {
  }

  find(): Observable<Test[] | void> {
    return from(this._testModel.find({}))
      .pipe(
        map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
      );
  }

  findById(id: string): Observable<Test | void> {
    return from(this._testModel.findById(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  create(test: CreateTestDto): Observable<Test> {
    return from(this._testModel.create(test))
      .pipe(
        map((doc: MongooseDocument) => doc.toJSON()),
      );
  }

  findByIdAndUpdate(id: string, test: UpdateTestDto): Observable<Test | void> {
    return from(this._testModel.findByIdAndUpdate(id, test, { new: true }))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

  findByIdAndRemove(id: string): Observable<Test | void> {
    return from(this._testModel.findByIdAndRemove(id))
      .pipe(
        map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
      );
  }

}
