import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ToDoItem = ({ task }) => {
  return (
    <>
      <div className="task" style={{ color: "white" }}>
        <div style={{ color: "white" }}>
          {new Date().toLocaleString("en-US")}
        </div>
        <h2> {task.text}</h2>
        <button className="close">
          <AiOutlineDelete />
          <AiOutlineEdit />
        </button>
      </div>
    </>
  );
};

export default ToDoItem;
