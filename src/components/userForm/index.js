import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title } from "./styles";
import { SubmitButton } from "../submitButton";

export const UserForm = ({ error, disabled, title, onSubmit }) => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("credenciales:", email.value, password.value);
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
          //value={email.value}
          //onChange={email.onChange}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
          //value={password.value}
          //onChange={password.onChange}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
