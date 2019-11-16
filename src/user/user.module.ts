import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [ UserController ],
  providers: [Logger],
})
export class UserModule {}
