/*
 *
 * Custom hook for receiving user input value and updating it
 *
 */
import { useState } from "react";

const ButtonKey = () => {
  const [buttonKey, setButtonKey] = useState("");

  const handlePressedButton = (key) => {
    setButtonKey(key);
  };

  return {
    buttonKey,
    handlePressedButton,
  };
};

export default ButtonKey;
