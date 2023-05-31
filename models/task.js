const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title: { 
     type: String, 
     required: true 
    },
    completed: {
     type: Boolean,
     default: false
    },
  });
const taskModel = mongoose.model('tasks', taskSchema);
module.exports = taskModel;
  