import React, { Fragment } from "react";
import { ListOfCategories } from "./components/listOfCategories";
import { ListOfPhotoCards } from "./components/listOfPhotoCards";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
);
