import { Document } from 'mongoose';
import { User } from '../../user/interfaces/user.interface';

export interface Group extends Document {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  students: User[];
  responsible: User;
}

