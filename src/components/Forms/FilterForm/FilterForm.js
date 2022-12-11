import React from "react";
import InputField from "../InputField/InputField";
import useGetInput from "../../../hooks/useGetInput";

const FilterForm = (props) => {
  const { value: countryState, handleUserInput: handleCountryInput } =
    useGetInput();
  const { value: cityState, handleUserInput: handleCityInput } = useGetInput();

  React.useEffect(() => {
    const timerHandler = setTimeout(
      () => console.log("new coutry: ", countryState, cityState),
      500
    );
    return () => clearTimeout(timerHandler);
  }, [countryState, cityState]);

  return (
    <div>
      <p>Filter form</p>
      <h1>{props.state ? "Loading..." : "Mamy dane:"}</h1>
      <InputField
        id="Country"
        type="text"
        placeholder="name of country"
        inputChange={handleCountryInput}
      />
      <InputField
        id="City"
        type="text"
        placeholder="name of city"
        inputChange={handleCityInput}
      />
    </div>
  );
};

export default FilterForm;
