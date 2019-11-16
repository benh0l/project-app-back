import { Logger, Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupDao } from '../group/dao/group.dao';
import { LessonSchema } from './schemas/lesson.schema';
import { LessonDao } from './dao/lesson.dao';
import { LessonService } from './lesson.service';

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Lesson', schema: LessonSchema } ]) ],
  controllers: [LessonController],
  providers: [ LessonService, Logger, LessonDao ],
})
export class LessonModule {}
