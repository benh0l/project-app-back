import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestSchema } from './schemas/test-schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TestDao } from './dao/test.dao';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
  controllers: [TestController],
  providers: [TestService, TestDao],
})
export class TestModule {}
