import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
  const { userLogIn } = useContext(UserContext);
  return (
    <div>
      <Header></Header>
      <h1>First Screen</h1>
      <button onClick={userLogIn}>login</button>
    </div>
  );
};

export default Screen;
