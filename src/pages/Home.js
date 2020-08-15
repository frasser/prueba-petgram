import React, { Fragment } from "react";
import { ListOfCategories } from "../components/listOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

import { Helmet } from "react-helmet";

export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="con petgram puedes encontrar fotos de mascotas muy bonitas"
        ></meta>
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  );
};
