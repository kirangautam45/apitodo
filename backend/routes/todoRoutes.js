const express = require("express");
const router = express.Router();
const {
  setToDo,
  getToDos,
  updateToDo,
  deleteToDo,
  getAllToDos,
} = require("../controllers/todoControllers");

router.route("/").get(getAllToDos).post(setToDo);

router.route("/:id").delete(deleteToDo).put(updateToDo).get(getToDos);

module.exports = router;
