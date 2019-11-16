import * as mongoose from 'mongoose';

export const GroupSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  login: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  /*
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  */
  role: {
    type: String,
    required: true,
    trim: true,
  },

}, {
  toJSON: { virtuals: true },
  versionKey: false,
});
