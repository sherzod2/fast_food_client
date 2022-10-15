import { createContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("accessToken")) || ""
  );

  useEffect(() => {
    window.localStorage.setItem("accessToken", JSON.stringify(token));
  }, [token]);

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
