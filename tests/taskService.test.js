const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Task = require("../models/Task");
const taskService = require("../services/taskService");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Task.deleteMany();
});

test("Debe crear una nueva tarea", async () => {
  const newTask = await taskService.createTask("Estudiar Node.js");
  expect(newTask.title).toBe("Estudiar Node.js");
  expect(newTask.done).toBe(false);
});

test("Debe marcar tarea como completada", async () => {
  const task = await taskService.createTask("Leer documentación");
  await taskService.markTaskAsDone(task._id);
  const updated = await Task.findById(task._id);
  expect(updated.done).toBe(true);
});

test("Debe obtener todas las tareas", async () => {
  await taskService.createTask("Tarea 1");
  await taskService.createTask("Tarea 2");
  const tasks = await taskService.getAllTasks();
  expect(tasks.length).toBe(2);
});