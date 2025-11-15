import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
