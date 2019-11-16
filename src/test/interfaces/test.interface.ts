import { Document } from 'mongoose';

export interface Test extends Document {
  id: string;
  title: string;
  date: number;
  coefficient: number;
  shown: boolean;
}
