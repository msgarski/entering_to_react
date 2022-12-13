import React from "react";
import InputField from "../FormField/InputField";

const FilterForm = ({ handleCountryInput, handleIndustryInput }) => {
  return (
    <div className="filter-container">
      <p>Filter by: </p>
      <InputField
        id="Country"
        type="text"
        placeholder="name of country"
        inputChange={handleCountryInput}
      />
      <InputField
        id="Industry"
        type="text"
        placeholder="name of industry"
        inputChange={handleIndustryInput}
      />
    </div>
  );
};

export default FilterForm;
