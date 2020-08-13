import styled, { css } from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  text-decoration: none;
  font-weight: 500;
`;

export const Image = styled.img`
  border: 3px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  margin-bottom: 1.5px;
  background-color: #ddd;
`;

/*${(props) =>
  props.loading === "true" &&
  css`
    object-fit: none;
  `}
*/
