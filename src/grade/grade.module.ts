import { Module } from '@nestjs/common';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GradeDao } from './dao/grade.dao';
import { GradeSchema } from './schema/grade.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Grade', schema: GradeSchema }])],
  controllers: [GradeController],
  providers: [GradeService, GradeDao],
})
export class GradeModule {}
