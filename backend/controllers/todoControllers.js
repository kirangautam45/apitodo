const asyncHandler = require("express-async-handler");
const TodoList = require("../model/todoModel");

// set Todo List
const setToDo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a TOdo Text Field");
  }
  const todo = await TodoList.create({
    text: req.body.text,
  });
  res.status(200).json({ data: todo });
});
// get Todo List by id
const getToDos = asyncHandler(async (req, res) => {
  const todo = await TodoList.findById(req.params.id);

  res.status(200).json({ data: todo });
});
const getAllToDos = asyncHandler(async (req, res, next) => {
  const todo = await TodoList.find({});
  res.status(200).json({
    count: todo.length,
    data: todo,
  });
});

// get Update List
const updateToDo = asyncHandler(async (req, res) => {
  const todo = await TodoList.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ data: todo });
});

// delete list
const deleteToDo = asyncHandler(async (req, res) => {
  const todo = await TodoList.findById(req.params.id);
  await todo.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  setToDo,
  getToDos,
  updateToDo,
  deleteToDo,
  getAllToDos,
};
