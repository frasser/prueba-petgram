import React, { Fragment } from "react";
import { ListOfCategories } from "../components/listOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

import { Helmet } from "react-helmet";

const HomePage = ({ categoryId }) => {
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

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});

//React.memo sirve para memorizar o recordar como estaba anteriormente sin necesidad de cambiar sus props.
//es decir no se vuelve a renderizar si las props que recibe no son diferentes
