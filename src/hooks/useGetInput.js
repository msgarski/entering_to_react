/*
 *
 * Custom hook for receiving user input value and updating it
 *
 */

import { useState } from "react";

const useGetInput = () => {
  const [value, setValue] = useState("");

  const handleUserInput = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    handleUserInput,
  };
};

export default useGetInput;
