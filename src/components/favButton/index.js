import React from "react";
import { RiServiceLine, RiHeartLine } from "react-icons/ri";
import { FcFlashOn, FcLike } from "react-icons/fc";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? FcLike : RiHeartLine;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
  /*<Button onClick={() => setLiked(!liked)}>
    <Icon size="32px" /> {likes} likes!
    </Button>
*/
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
