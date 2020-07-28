import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  const element_ref = useRef(null);
  const [show, setShow] = useState(false);

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
    });
  }, [element_ref]);

  return [show, element_ref];
}
