const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.showAllTasks);
router.post("/add", taskController.addNewTask);
router.post("/done/:id", taskController.completeTask);

module.exports = router;