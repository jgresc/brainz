'use strict';

import mongoose from 'mongoose';

var ExerciseSchema = new mongoose.Schema({
  classLevel: Number,
  subject: String,
  subCategory: String,
  difficultyLevel: Number,
  title: String,
  task: String,
  solution: String,
  points: Number,
  mode: String,
  link: String,
  solved: Boolean,
  hint: String,
  students:
    [
      {
        type: mongoose.Schema.ObjectId,
         ref: 'User'
      }
    ]
});

export default mongoose.model('Exercise', ExerciseSchema);
