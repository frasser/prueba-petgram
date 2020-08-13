import { useState } from "react";

//hook para ayudar a gestionar el input
export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);

  return { value, onChange };
};
