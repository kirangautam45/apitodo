/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export const updateToDo = () => {
  const initialValue = {
    text: "",
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(initialValue);
  const { text } = data;
  // eslint-disable-next-line no-undef
  const { id } = useParams();
  const onChangeValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <section className="form">
      <form>
        <div className="label">Set Your List</div>
        <div className="form-group">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        <div className="from-group">
          <button className="btn btn-block" type="submit">
            Edit To do{" "}
          </button>
        </div>
      </form>
    </section>
  );
};
