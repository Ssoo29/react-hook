import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Sungsoo Kim",
    loggedIn: false,
  });
  const userLogIn = () => setUser({ ...user, loggedIn: true });
  return (
    <UserContext.Provider value={{ user, userLogIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
