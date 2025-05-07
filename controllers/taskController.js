const taskService = require("../services/taskService");
const { validateTask } = require("../validations/taskValidation");

async function showAllTasks(req, res) {
  const tasks = await taskService.getAllTasks();
  res.render("index", { tasks });
}

async function addNewTask(req, res) {
  const { error } = validateTask(req.body);
  if (error) return res.status(400).send("Título inválido");
  await taskService.createTask(req.body.title);
  res.redirect("/");
}

async function completeTask(req, res) {
  await taskService.markTaskAsDone(req.params.id);
  res.redirect("/");
}

module.exports = { showAllTasks, addNewTask, completeTask };