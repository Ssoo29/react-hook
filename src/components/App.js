import React from "react";
import Screen from "../Screen";
import Lang from "../context";
import translations from "../translation";

import Add from "./Add";
import List from "./List";
import { useState } from "../redux";
import ToDo from "./ToDo";

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <Lang defaultLang="en" translations={translations}>
        <Screen />
      </Lang>
      <hr />
      <Add />
      <List name={"To Dos"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text}></ToDo>
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((com) => (
          <ToDo
            key={com.id}
            id={com.id}
            text={com.text}
            isCompleted={true}
          ></ToDo>
        ))}
      </List>
    </>
  );
}

export default App;
