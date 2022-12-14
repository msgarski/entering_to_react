import React from "react";
import ButtonField from "../FormField/ButtonField";

const SortingForm = ({ handlePressedButton }) => {
  return (
    <div className="sort-container">
      <p>Sort by: </p>
      <div className="sort-btns">
        <p>name</p>
        <span className="sort-btns_btns">
          <ButtonField
            value="nameAsc"
            className="btn-asc"
            inputChange={handlePressedButton}
          />
          <ButtonField
            value="nameDesc"
            className="btn-desc"
            inputChange={handlePressedButton}
          />
        </span>
      </div>
      <div className="sort-btns">
        <p>num. of employees</p>
        <span className="sort-btns_btns">
          <ButtonField
            value="employeesAsc"
            className="btn-asc"
            inputChange={handlePressedButton}
          />
          <ButtonField
            value="employeesDesc"
            className="btn-desc"
            inputChange={handlePressedButton}
          />
        </span>
      </div>
    </div>
  );
};

export default SortingForm;
