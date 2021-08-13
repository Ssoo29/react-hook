import React, { useReducer, useState } from "react";
import Screen from "./Screen";
import Lang from "./context";
import reducer, { initialState, ADD, DEL, COMPLETED } from "./reducer";
import translations from "./translation";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewTodo] = useState();
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
    <>
      <Lang defaultLang="en" translations={translations}>
        <Screen />
      </Lang>
      <hr />
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </button>
            <button
              onClick={() => dispatch({ type: COMPLETED, payload: toDo.id })}
            >
              ✅
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <button
                  onClick={() => dispatch({ type: DEL, payload: toDo.id })}
                >
                  ❌
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: COMPLETED, payload: toDo.id })
                  }
                >
                  🙅‍♀️
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
