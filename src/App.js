import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);

  const detailId = urlParams.get("detail");

  console.log(detailId);
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </Fragment>
  );
};
