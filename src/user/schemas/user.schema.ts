import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
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
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    }
  ],

}, {
  toJSON: { virtuals: true },
  versionKey: false,
  collection: 'user',
});
