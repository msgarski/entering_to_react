import * as React from "react";
// import fetchData from "./http/httpRequest";
import { dataBase } from "./database/dataBase";
import List from "./components/List/List";
import FilterForm from "./components/Forms/FilterForm/FilterForm";
import SortingForm from "./components/Forms/SortingForm/SortingForm";
import useGetAction from "./hooks/useGetAction";

function App() {
  // keeping fetched list in rawList variable
  const [rawList, setRawList] = React.useState([]);
  //*************************************************************************************
  // receiving filter conditions from form component
  // two times used custom hook for updating
  // country and city input fields values
  const { value: countryState, handleUserAction: handleCountryInput } =
    useGetAction();
  const { value: industryState, handleUserAction: handleIndustryInput } =
    useGetAction();
  //todo sorting field to powinno być 1 z 4 pól
  const { value: sortingField, handleUserAction: handlePressedButton } =
    useGetAction();

  //***********************************************************************************

  /* reducer function and hook:
  const listReducer = (state, action) => {
    switch (action.type) {
      case "LIST_LOADED":
        return { ...state, loading: false, isError: false };
      case "PENDING_LOADING":
        return { ...state, loading: true, isError: false };
      case "LOADING_ERROR":
        return { ...state, loading: false, isError: true };
      default:
        throw new Error();
    }
  };
  const [rawList, dispatchRawList] = React.useReducer(listReducer, {
    data: [],
    loading: false,
    isError: false,
  });
  */

  // sending http request on component mounting,
  // and storing List as a value of rawList variable
  // in useEffect hook
  React.useEffect(() => {
    // http request:
    // fetchData();

    // checking if in localStorage exists old filter and sort values:
    //todo zrobić przechowanie tych danych w localstoragu

    // dummy database:
    setRawList(dataBase);
  }, []);

  return (
    <div>
      <FilterForm
        handleCountryInput={handleCountryInput}
        handleIndustryInput={handleIndustryInput}
      />
      <SortingForm handlePressedButton={handlePressedButton} />
      <List
        list={rawList}
        country={countryState}
        industry={industryState}
        sortListField={sortingField}
      />
    </div>
  );
}

export default App;
