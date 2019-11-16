import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { UserDao } from './dao/user.dao';

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'User', schema: UserSchema } ]) ],
  controllers: [UserController],
  providers: [ UserService, Logger, UserDao ],
})
export class UserModule {}
