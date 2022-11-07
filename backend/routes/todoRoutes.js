const express = require("express");
const router = express.Router();
const {
  setToDo,
  getToDo,
  updateToDo,
  deleteToDo,
  getAllToDo,
} = require("../controllers/todoControllers");

router.route("/").get(getAllToDo).post(setToDo);

router.route("/:id").delete(deleteToDo).put(updateToDo).get(getToDo);

module.exports = router;
