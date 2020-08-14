import React, { useContext, Fragment } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/submitButton";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>cerrar sesion</SubmitButton>
    </Fragment>
  );
};
