import React, { useState } from "react";
import { useDispatch } from "../redux";
import { ADD } from "../actions";

const Add = () => {
  const [newToDo, setNewTodo] = useState();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTodo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
  );
};

export default Add;
