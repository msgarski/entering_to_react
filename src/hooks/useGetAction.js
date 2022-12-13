/*
 *
 * Custom hook for receiving user input value and updating it
 *
 */

import { useState } from "react";

const useGetAction = () => {
  const [value, setValue] = useState("");

  const handleUserAction = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setValue("");
  };

  return {
    value,
    handleUserAction,
    handleClick,
  };
};

export default useGetAction;
