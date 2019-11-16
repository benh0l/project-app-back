import { Document } from 'mongoose';
import { Group } from '../../group/interfaces/group.interface';
import { GroupEntity } from '../../group/entities/group.entity';

export interface User extends Document {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  /*password: string;*/
  role: string;
  groupsId: string[];
}
