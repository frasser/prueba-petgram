import React, { Fragment } from "react";
import { ListOfCategories } from "./components/listOfCategories";
import { ListOfPhotoCards } from "./components/listOfPhotoCards";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
);
