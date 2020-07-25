import React from "react";
import { PhotoCard } from "../photoCards";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
};
