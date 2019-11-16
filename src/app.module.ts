import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { GroupModule } from './group/group.module';
import * as Config from 'config';

@Module({
  imports: [ UserModule,
    MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),
    GroupModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
