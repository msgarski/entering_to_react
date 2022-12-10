import React from "react";

const FilterForm = (props) => {
  return (
    <div>
      <p>Filter formularz komponent</p>
      <h1>{props.state ? "Loading..." : "Hmmmmm"}</h1>
    </div>
  );
};

export default FilterForm;
