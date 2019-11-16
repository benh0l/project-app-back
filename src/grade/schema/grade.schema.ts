import * as mongoose from 'mongoose';

export const GradeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
  },
  value: {
    type: Number,
    required: true,
  },
}, {
  toJSON: { virtuals: true },
  versionKey: false,
  collection: 'grade',
});
