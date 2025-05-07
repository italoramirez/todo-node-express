const Task = require("../models/Task");

async function getAllTasks() {
  return await Task.find();
}

async function createTask(title) {
  const task = new Task({ title });
  return await task.save();
}

async function markTaskAsDone(id) {
  return await Task.findByIdAndUpdate(id, { done: true });
}

module.exports = { getAllTasks, createTask, markTaskAsDone };