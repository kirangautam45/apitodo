import React from "react";
import {  AiOutlineDelete,} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTask } from "../api/taskSlice";
const ToDoItem = ({ task, markDone }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="task" style={{ color: "white" }}>
        <div className={task.status ? "done" : ""}>
          <h2> {task.text}</h2>
        </div>
        <button className="close" style={{ color: "white" }}>
          <AiOutlineDelete
            onClick={() => dispatch(deleteTask(task._id))}
            style={{ marginLeft: "10px" }}
          />
         
        </button>
        <div>{new Date(task.updatedAt).toLocaleString("en-US")}</div>
      </div>
    </>
  );
};

export default ToDoItem;
