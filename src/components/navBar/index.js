import React from "react";
import { Link, Nav } from "./styles";
import { MdHome, MdPersonOutline } from "react-icons/md";

import { RiHeartLine } from "react-icons/ri";

const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE} />
      </Link>
      <Link to="/favs">
        <RiHeartLine size={SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};
