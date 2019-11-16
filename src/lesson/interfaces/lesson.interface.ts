import { Document } from 'mongoose';
import { User } from '../../user/interfaces/user.interface';
import { UserEntity } from '../../user/entities/user.entity';

export interface Lesson extends Document {
  id: string;
  name: string;
  testsId: string[];
  teacherId: string;
  groupId: string;
}

