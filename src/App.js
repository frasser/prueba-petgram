import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/navBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisterUser";

import Context from "./Context";
/*const Context.Consumer = ({ children }) => {
  return children({ isAuth: true });
};*/

export const App = () => {
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
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </Fragment>
  );
};
