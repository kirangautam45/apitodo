const express = require("express");
const router = express.Router();
const {
  setTodo,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/todoController");

router.route("/").get(getTask).post(setTodo);
router.route('/:id').delete(deleteTask).put(updateTask)
model.exports = router;
