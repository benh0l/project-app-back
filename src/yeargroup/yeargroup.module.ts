import { Module } from '@nestjs/common';
import { YearGroupController } from './yeargroup.controller';
import { YearGroupService } from './yeargroup.service';

@Module({
  controllers: [YearGroupController],
  providers: [ YearGroupService ]
})
export class YearGroupModule {}
