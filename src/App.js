import React, { Fragment, useContext } from "react";
import { Router, Redirect } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/navBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisterUser";
import { NotFound } from "./pages/NotFound";

import { Context } from "./Context";
/*const Context.Consumer = ({ children }) => {
  return children({ isAuth: true });
};*/

export const App = () => {
  const { isAuth } = useContext(Context);
  /*const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
       {detailId ? (
        
      ) : (

      )}
  */

  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" noThrow />}
        {!isAuth && <Redirect from="/user" to="/login" noThrow />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Fragment>
  );
};
