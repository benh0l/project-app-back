import { Document } from 'mongoose';

export interface User extends Document {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  /*password: string;*/
  role: string;
}
