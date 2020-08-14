import React, { createContext, useState } from "react";
export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token"); //funcion que lee del sessionStorage si el usuario esta registrado o no
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem("token", token); //se crea el token  se agrega el valor que llega por parametro token
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default {
  Provider,
  Consumer: Context.Consumer,
};
