import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import ToDoItem from "./ToDoItem";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, reset } from "../api/taskSlice";

const ToDo = () => {
  const dispatch = useDispatch();
  const { tasks, isError, message } = useSelector((state) => state.tasks);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getTasks());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  return (
    <>
      <section className="heading">
        <h1>Welcome To Daily Task </h1>
      </section>
      <TodoForm />
      <section className="container">
        <div className="tasks">
          {tasks.map((task) => (
            <ToDoItem key={task._id} task={task} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ToDo;
