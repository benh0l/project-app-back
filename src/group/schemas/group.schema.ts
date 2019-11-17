import * as mongoose from 'mongoose';

export const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  studentsId: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
}}],
  responsibleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  lessonsId: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    }}],
  },  {
  toJSON: { virtuals: true },
  versionKey: false,
  collection: 'group',
});
