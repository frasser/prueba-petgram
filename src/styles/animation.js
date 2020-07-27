import { css, keyframes } from "styled-components";
//para la animacion
const fadeInKeyFrames = keyframes`

  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

//funcion para la animacion
export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;
