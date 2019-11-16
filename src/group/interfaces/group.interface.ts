import { Document } from 'mongoose';
import { User } from '../../user/interfaces/user.interface';
import { UserEntity } from '../../user/entities/user.entity';

export interface Group extends Document {
  id: string;
  name: string;
  startDate: number;
  endDate: number;
  studentsId: string[];
  responsibleId: string;
}

