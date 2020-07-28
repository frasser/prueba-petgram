import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { RiFireLine } from "react-icons/ri";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element_ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // console.log(element_ref.current);
    const observer = new window.IntersectionObserver(function (entries) {
      //console.log(entries);
      const { isIntersecting } = entries[0];
      //console.log({ isIntersecting });
      if (isIntersecting) {
        console.log("si");
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element_ref.current);
  }, [element_ref]);

  return (
    <Article ref={element_ref}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </a>

          <Button>
            <RiFireLine size="32px" /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
