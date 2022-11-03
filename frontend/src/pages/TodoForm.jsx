import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../api/taskSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="label">Set Your List</div>
        <div className="form-group">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="from-group">
          <button className="btn btn-block" type="submit">
            ADD TO Do{" "}
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
