import React, { Fragment } from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { FavButton } from "../favButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

//import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element_ref] = useNearScreen();
  //const key = `like-${id}`;
  //const [liked, setLiked] = useLocalStorage(key, false);

  //console.log(liked);

  return (
    <Article ref={element_ref}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                //!liked &&
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
                //setLiked(!liked);
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
