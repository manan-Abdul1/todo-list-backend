const express = require('express');
const router = express.Router();

const Task = require('../models/task');
// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add a new task
router.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      completed: req.body.completed || false,
    });

    await newTask.save();

    res.json('Task added successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

 // Delete a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json('Task deleted successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json('Task not found');
    }

    // Update the task's completed field based on the request body
    if (typeof req.body.completed === 'boolean') {
      task.completed = req.body.completed;
    }

    // Update the task's title field based on the request body
    if (req.body.title) {
      task.title = req.body.title;
    }

    await task.save();

    res.json('Task updated successfully');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});


 
  // Export the router
  module.exports = router;
  