import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UpdateToDo from "./updateToDo";
import { deleteTask, updateTask } from "../api/taskSlice";
const ToDoItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="task" style={{ color: "white" }}>
        <h2> {task.text}</h2>
        <h2> {task.isCompleted}</h2>
        <button className="close" style={{ color: "white" }}>
          {/* <AiOutlineDelete onClick={() => dispatch(deleteTask(task._id))} /> */}
        </button>
        <div>{new Date(task.updatedAt).toLocaleString("en-US")}</div>
      </div>
    </>
  );
};

export default ToDoItem;
