import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/userForm";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ isAuth, activateAuth }) => {
      return (
        <Fragment>
          <UserForm title="Registrarse" onSubmit={activateAuth} />
          <UserForm title="Iniciar sesion" onSubmit={activateAuth} />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
