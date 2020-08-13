import React from "react";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit }) => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Email"
        {...email}
        //value={email.value}
        //onChange={email.onChange}
      />
      <input
        placeholder="Password"
        type="password"
        {...password}
        //value={password.value}
        //onChange={password.onChange}
      />
      <button>Iniciar sesion</button>
    </form>
  );
};
