import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';
import * as Config from 'config';
import { GroupModule } from './group/group.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [ UserModule,
    MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),
    GroupModule,
    TestModule,
    LessonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
