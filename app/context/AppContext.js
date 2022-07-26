import React, { createContext, useState } from "react";

export const UserContext = createContext();

function AppContext({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export default AppContext;
