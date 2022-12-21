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
  res.status(200).json( todo );
});
// get Todo List by id
const getToDo = asyncHandler(async (req, res) => {
  const todo = await TodoList.findById(req.params.id);

  res.status(200).json(todo );
});
//get all data
const getAllToDo = asyncHandler(async (req, res, next) => {
  const todo = await TodoList.find();
  res.status(200).json(todo );
});

// get Update List
const updateToDo = asyncHandler(async (req, res) => {
  const todo = await TodoList.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json( todo );
});

// delete list
const deleteToDo = asyncHandler(async (req, res) => {
  const todo = await TodoList.findById(req.params.id);
  await todo.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  setToDo,
  getToDo,
  updateToDo,
  deleteToDo,
  getAllToDo,
};
