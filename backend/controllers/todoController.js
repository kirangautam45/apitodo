const asyncHandler = require('express-async-handler')
const { model } = require('mongoose')
const toDoList= require('../model/todoModel')
// set to do task
const setTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        
        throw new Error('please add a todo list')
    }
    const todo = await toDoList.create({
        text,
    })
    res.status(200).json(todo)
})

//get Tasks
const getTask = asyncHandler(async (req, res) => {
    const getTasks = await toDoList.find({toDoList:req.toDoList.id})
    res.status(200).json(getTasks)
})
//update Tasks
const updateTask = asyncHandler(asyncHandler (async(req, res)=> {

    const todo = await toDoList.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.status(200).json(todo)
}))
//delete Tasks
const deleteTask = asyncHandler(async (req, res) => {
    const todo = await toDoList.findById(req.params.id)
    await todo.remove()
    res.status(200).json({id:req.params.id})
 })

model.exports = {
    setTodo,
    getTask,
    updateTask,
    deleteTask
}