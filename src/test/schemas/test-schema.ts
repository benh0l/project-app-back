import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Number,
    required: true,
  }
  ,
  coefficient: {
    type: Number,
    required: true,
  },
  shown: {
    type: Boolean,
    required: true,
  },
}, {
  toJSON: { virtuals: true },
  versionKey: false,
  collection: 'test',
});
