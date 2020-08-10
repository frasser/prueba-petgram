import React from "react";
import { PhotoCard } from "../photoCards";

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  //console.log(props);
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
