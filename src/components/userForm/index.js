import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ title, onSubmit }) => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Email"
          {...email}
          //value={email.value}
          //onChange={email.onChange}
        />
        <Input
          placeholder="Password"
          type="password"
          {...password}
          //value={password.value}
          //onChange={password.onChange}
        />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  );
};
