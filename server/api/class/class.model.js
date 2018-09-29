'use strict';

import mongoose from 'mongoose';

var ClassSchema = new mongoose.Schema({
  name: String,
  level: Number,
  teacher:{
    type:mongoose.Schema.ObjectId,
    ref: 'User'
  },
  students:
    [{type: mongoose.Schema.ObjectId,
    ref: 'User'}]
});

export default mongoose.model('Class', ClassSchema);
