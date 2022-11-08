import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTask } from '../api/taskSlice';
import e from 'cors';

const UpdateToDo = () => {
  const initialValue = {
    text: "",
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(initialValue);
  const { text } = data;
  const { id } = useParams();
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const updateDetails = (e) => {
    e.preventDefault();
    dispatch(updateTask({ text }))
    setData("")
    
  }

  const onChangeValue = (e) => {
    setData({[e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="heading">
        <h1>Welcome To Daily Task </h1>
      </section>

      <section className="form">
        <form>
          <div className="label">
            Edit your List
          </div>
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
            <button className="btn btn-block" onClick={()=>updateDetails()}>
              Edit To do{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};


export default UpdateToDo