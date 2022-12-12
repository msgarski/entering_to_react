import React from "react";
import ButtonField from "../FormField/ButtonField";

const SortingForm = ({ handlePressedButton }) => {
  return (
    <div>
      <span>Sort by: </span>
      <span>
        <ButtonField value="nameAsc" inputChange={handlePressedButton} />
        <ButtonField value="nameDesc" inputChange={handlePressedButton} />
      </span>
      <span>
        <ButtonField value="employeesAsc" inputChange={handlePressedButton} />
        <ButtonField value="employeesDesc" inputChange={handlePressedButton} />
      </span>
    </div>
  );
};

export default SortingForm;
