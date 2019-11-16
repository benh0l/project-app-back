import { Document } from 'mongoose';

export interface Group extends Document {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

