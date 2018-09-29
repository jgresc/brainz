'use strict';

import mongoose from 'mongoose';

var HomeworkSchema = new mongoose.Schema({
  title: String,
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  subject: String,
  subCategory: String,
  class: String, // TODO reference class model
  deadline: Date,
  exercises: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Exercise'
    }
  ],
  maxPoints: Number
});

export default mongoose.model('Homework', HomeworkSchema);
