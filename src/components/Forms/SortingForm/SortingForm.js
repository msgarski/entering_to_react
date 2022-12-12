import React from "react";
import ButtonField from "../FormField/ButtonField";

const SortingForm = ({ handlePressedButton }) => {
  return (
    <div>
      <span>Sort by: </span>
      <ButtonField value="name" inputChange={handlePressedButton} />
      <ButtonField value="employees" inputChange={handlePressedButton} />
    </div>
  );
};

export default SortingForm;
