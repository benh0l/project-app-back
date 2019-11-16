import { Document } from 'mongoose';
import { Group } from '../../group/interfaces/group.interface';

export interface User extends Document {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  /*password: string;*/
  role: string;
  groups: Group[];
}
