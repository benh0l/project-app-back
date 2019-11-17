import * as mongoose from 'mongoose';

export const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  testsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test',
    },
  ],
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  groupId: {
  type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
},
}, {
  toJSON: { virtuals: true },
  versionKey: false,
  collection: 'lesson',
});
