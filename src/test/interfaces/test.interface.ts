import { Document } from 'mongoose';

export interface Test extends Document {
  id: string;
  title: string;
  date: Date;
  coefficient: number;
  shown: boolean;
}
