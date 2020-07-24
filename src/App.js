import React, { Fragment } from "react";
import { ListOfCategories } from "./components/listOfCategories";
import { GlobalStyle } from "./GlobalStyles";
export const App = () => (
  <Fragment>
    <GlobalStyle />
    <ListOfCategories />
  </Fragment>
);
