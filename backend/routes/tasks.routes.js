const express = require("express");
const isAuthenticated = require("../middlewares/auth.middleware");
const taskController = require("../controllers/tasks.controller");
const router = express.Router();

router.get("/:boardid", isAuthenticated, taskController.getAllTasks);
router.post("/:boardid", isAuthenticated, taskController.addTask)

module.exports = router;
