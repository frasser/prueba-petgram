import React, { Fragment } from "react";
import { ListOfCategories } from "./components/listOfCategories";
import { ListOfPhotoCards } from "./container/listOfPhotoCards";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

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
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={3} />
        </Fragment>
      )}
    </Fragment>
  );
};
