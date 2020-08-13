import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/userForm";
import { RegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ isAuth, activateAuth }) => {
      return (
        <Fragment>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables })
                  .then(activateAuth)
                  .catch((error) => {
                    console.log(error.graphQLErrors[0].message);
                  });
              };
              const errorMsg =
                error &&
                "El usario ya existe o hay algun problema, intente mas tarde";
              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title="Registrarse"
                  onSubmit={onSubmit}
                />
              );
            }}
          </RegisterMutation>
          <UserForm title="Iniciar sesion" onSubmit={activateAuth} />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
