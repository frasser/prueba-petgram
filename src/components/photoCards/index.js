import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { RiServiceLine, RiHeartLine } from "react-icons/ri";
import { FcFlashOn, FcLike } from "react-icons/fc";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element_ref = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key) === "true";
      return like;
    } catch (e) {
      return false;
    }
  }); //metodo para actualizar el estado de los likes

  console.log(liked);

  useEffect(() => {
    // console.log(element_ref.current);
    /*_____SE AGREGA SOPORTE PARA NAVEGADORES VIEJOS CON UN POLYFILL DE INTERSECTION OBSERVER____*/
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer") //se requiere installar intersection observer
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        //console.log(entries);
        const { isIntersecting } = entries[0];
        //console.log({ isIntersecting });
        if (isIntersecting) {
          //console.log("si");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element_ref.current);
    }, [element_ref]);
  });

  const Icon = liked ? FcLike : RiHeartLine;

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Article ref={element_ref}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
