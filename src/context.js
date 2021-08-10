import React, { useState, useContext } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Sungsoo Kim",
    loggedIn: false,
  });
  const userLogIn = () => setUser({ ...user, loggedIn: true });
  return (
    <UserContext.Provider value={{ user, fn: { userLogIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
