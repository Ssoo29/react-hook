import React from "react";
import { DEL, COMPLETED, UNCOMPLETED } from "../actions";
import { useDispatch } from "../redux";

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>❌</button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETED : COMPLETED, payload: id })
        }
      >
        {isCompleted ? "🙅‍♀️" : "✅"}
      </button>
    </li>
  );
};

export default ToDo;
