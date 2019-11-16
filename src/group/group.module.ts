import { Logger,Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema } from './schemas/group.schema';
import { GroupDao } from './dao/group.dao';

@Module({
  imports: [ MongooseModule.forFeature([ { name: 'Group', schema: GroupSchema } ]) ],
  controllers: [GroupController],
  providers: [ GroupService, Logger, GroupDao ],
})
export class GroupModule {}
