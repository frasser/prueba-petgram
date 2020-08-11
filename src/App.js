import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/navBar";

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
      <NavBar />
    </Fragment>
  );
};
